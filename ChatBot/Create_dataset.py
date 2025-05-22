import os
import re
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from zemberek.morphology import TurkishMorphology

def to_lower_turkish(text):
    return text.replace("I", "ı").replace("İ", "i").lower()

# Zemberek başlat
morphology = TurkishMorphology.create_with_defaults()

# Bitki listesini oku
plant_list_path = "/Users/anilkorkmaz/PycharmProjects/ChatBot/Plant_list(stemmed).txt"

with open(plant_list_path, "r", encoding="utf-8") as f:
    plant_list = [to_lower_turkish(line.strip()) for line in f.readlines()]

# Dosya yolları (Kendi dizinlerini güncelle)
base_path = "/Users/anilkorkmaz/PycharmProjects/ChatBot"
files = {
    "plant_buy": os.path.join(base_path, "Plant_buy.txt"),
    "plant_care": os.path.join(base_path, "Plant_care.txt"),
    "plant_rec": os.path.join(base_path, "Plant_rec.txt"),
    "other": os.path.join(base_path, "Other.txt"),
}

# Tokenize ve stem işlemi
def tokenize_and_stem(text):
    analysis = morphology.analyze_sentence(text)
    results = morphology.disambiguate(text, analysis).best_analysis()
    return " ".join([result.get_stem() for result in results])

# Bitki adını kontrol et
def contains_plant(sentence):
    for plant in plant_list:
        if re.search(rf'\b{re.escape(plant)}\b', sentence):
            return 1
    return 0

# Dataset oluştur
dataset = []

for category, file_path in files.items():
    with open(file_path, "r", encoding="utf-8") as f:
        sentences = f.readlines()

    for sentence in sentences:
        sentence = to_lower_turkish(sentence.strip())
        stemmed_sentence = tokenize_and_stem(sentence)
        plant_present = contains_plant(stemmed_sentence)
        dataset.append([stemmed_sentence, category, plant_present])
        print(stemmed_sentence)

# Pandas DataFrame oluştur
df = pd.DataFrame(dataset, columns=["Sentence", "Category", "Plant_Present"])

# TF-IDF vektörleştirme
vectorizer = TfidfVectorizer()
X_tfidf = vectorizer.fit_transform(df["Sentence"])

# TF-IDF'yi DataFrame'e ekle
tfidf_df = pd.DataFrame(X_tfidf.toarray(), columns=vectorizer.get_feature_names_out())
final_df = pd.concat([df, tfidf_df], axis=1)

# CSV olarak kaydet
final_df.to_csv("/Users/anilkorkmaz/PycharmProjects/ChatBot/plant_dataset.csv", index=False)
print("Dataset oluşturuldu ve kaydedildi!")