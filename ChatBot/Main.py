import re
import joblib
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from scipy.sparse import hstack
import mysql.connector

from zemberek.tokenization.turkish_tokenizer import TurkishTokenizer
from zemberek.morphology import TurkishMorphology

# Flask app initialization
app = Flask(__name__)
CORS(app)  # Cross-Origin Resource Sharing (CORS) header'lari ekler, frontend'den istek alabilmek icin

# Oracle baglanti bilgileri (BUNU MYSQL'E göre değiştir)
oracle_username = "ECOBLOOM"
oracle_password = "ecobloom123."
oracle_dsn = "localhost:1521/XEPDB1"




# MySQL veritabanı bağlantısı
conn = mysql.connector.connect(
    host="localhost", # MySQL sunucu adresi
    user="root", # MySQL kullanıcı adın
    password="Luxilionalupower125",  # MySQL şifren
    database="ecobloom"   # Bağlanmak istediğin veritabanı
)

cursor = conn.cursor()


# Load Zemberek
morphology = TurkishMorphology.create_with_defaults()

# Bitki listesini dosyadan oku
plant_list_path = "/Users/anilkorkmaz/PycharmProjects/ChatBot/Plant_list(stemmed).txt"


def tokenize_and_stem(text):
    analysis = morphology.analyze_sentence(text)
    results = morphology.disambiguate(text, analysis).best_analysis()
    stems = [result.get_stem() for result in results]
    return " ".join(stems)

def find_plant(sentence, plant):
    match = re.search(rf'\b{re.escape(plant)}\b', sentence)
    return match.group() if match else None

def to_lower_turkish(text):
    return text.replace("İ", "i").replace("I", "i").lower()

# Load plant list
with open(plant_list_path, "r", encoding="utf-8") as f:
    plant_list = [to_lower_turkish(line.strip()) for line in f.readlines()]

# Load the trained SVM model, TF-IDF vectorizer and LabelEncoder

svm_loaded = joblib.load("/Users/anilkorkmaz/PycharmProjects/ChatBot/svm_plant_classifier.pkl")
vectorizer_loaded = joblib.load("/Users/anilkorkmaz/PycharmProjects/ChatBot/tfidf_vectorizer.pkl")
label_encoder_loaded = joblib.load("/Users/anilkorkmaz/PycharmProjects/ChatBot/label_encoder.pkl")

# API Endpoints

@app.route("/chat", methods=["POST"])
def chat():
    # Get user input from the request
    data = request.get_json()
    sentence = data.get("sentence").lower()

    new_sentence = tokenize_and_stem(sentence)
    found_plant = "None"
    plant_present = 0

    # Check if any plant is mentioned
    for plant in plant_list:
        if find_plant(new_sentence, plant):
            found_plant = plant
            plant_present = 1

    # Convert sentence using the loaded TF-IDF vectorizer
    new_sentence_vectorized = vectorizer_loaded.transform([new_sentence])

    # Add "Plant_Present" as a feature
    plant_present_feature = np.array([[plant_present]])
    new_sentence_features = hstack((new_sentence_vectorized, plant_present_feature))

    # Predict category (numeric)
    predicted_category_index = svm_loaded.predict(new_sentence_vectorized)[0]
    predicted_category_name = label_encoder_loaded.inverse_transform([predicted_category_index])[0]

    response = {"predicted_category": predicted_category_name}

    if predicted_category_name == "other":
       response["message"] = "Lütfen sorunuzu anlaşılır bir şekilde yazdığınızdan emin olun. Örnek sorular: Domates bitkisine nasıl bakım yapılır? Domates nerden satın alınır?"

    elif predicted_category_name == "plant_rec":
        response["message"] = "Ana sayfadaki konum veya hava durumu gir yerinden isteğinize uygun bitkileri arayabilirsiniz."

    elif predicted_category_name == "plant_care":
        if plant_present == 0:
            response["message"] = "Lütfen bakım tavsiyesi almak istediğiniz bitkinin adını doğru girdiğinizden emin olun."
        else:
            response["bitki_name"] = found_plant

            # 1. Adim: BITKI_ISIMLERI tablosundan ID'yi al
            cursor.execute("SELECT ID FROM BITKI_ISIMLERI WHERE LOWER(BITKI_ISIM_STEMMED) = %s", (found_plant.lower(),))
            bitki_id_result = cursor.fetchone()

            if bitki_id_result:
                bitki_id = bitki_id_result[0]  # ID'yi al
                # 2. Adim: BITKI_BAKIMLARI tablosundan bakim bilgisini al
                cursor.execute("SELECT BITKI_BAKIM FROM BITKI_BAKIMLARI WHERE ID = %s", (bitki_id,))
                bitki_bakim_result = cursor.fetchone()

                if bitki_bakim_result:
                    response["bitki_bakim"] = bitki_bakim_result[0]
                else:
                    response["message"] = "Bu bitki icin bakım bilgisi bulunamadı."
            else:
                response["message"] = "Bitki ismi ile eşleşen bir kayıt bulunamadı."

    elif predicted_category_name == "plant_buy":
        if plant_present == 0:
            response["message"] = "Lütfen satın almak istediğiniz bitkinin adını doğru girdiğinizden emin olun."
        else:
            response["bitki_name"] = found_plant
            # 1. Adim: BITKI_ISIMLERI tablosundan ID'yi al
            cursor.execute("SELECT ID FROM BITKI_ISIMLERI WHERE LOWER(BITKI_ISIM_STEMMED) = %s", (found_plant.lower(),))

            result = cursor.fetchone()

            if result:
                plant_id = result[0]  # ID'yi al
                # 2. Adim: BITKI_MARKETLERI tablosundan satis bilgilerini al
                cursor.execute("SELECT BITKI_MARKET FROM BITKI_MARKETLERI WHERE BITKI_ID = %s", (plant_id,))
                market_results = cursor.fetchall()

                if market_results:
                    response["market"] = [row[0] for row in market_results]
                else:
                    response["message"] = "Bu bitki icin satış bilgisi bulunamadı."
            else:
                response["message"] = "Bitki ismi veritabanında bulunamadı."

    return jsonify(response)

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)