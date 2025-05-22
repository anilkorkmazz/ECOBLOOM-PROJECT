import re
from zemberek.tokenization.turkish_tokenizer import TurkishTokenizer
from zemberek.morphology import TurkishMorphology

def to_lower_turkish(text):
    return text.replace("I", "ı").replace("İ", "i").lower()

def tokenize_and_stem(text):
    """
    Tokenize and stem the given Turkish text using Zemberek.
    :param text: Input text (string)
    :return: List of stemmed words as a single string
    """
    # Analyze and disambiguate the text
    analysis = morphology.analyze_sentence(text)
    results = morphology.disambiguate(text, analysis).best_analysis()

    # Extract stems and join them as a single string
    stems = [result.get_stem() for result in results]
    return " ".join(stems)

def find_plant(sentence, plant):
    match = re.search(rf'\b{re.escape(plant)}\b', sentence)
    return match.group() if match else None


# Zemberek modüllerini başlat
morphology = TurkishMorphology.create_with_defaults()

# Bitki listesini dosyadan oku
plant_list_path = "/Users/anilkorkmaz/PycharmProjects/ChatBot/Plant_list(stemmed).txt"


# Read the plant list and apply correct lowercasing
with open(plant_list_path, "r", encoding="utf-8") as f:
    plant_list = [to_lower_turkish(line.strip()) for line in f.readlines()]

print(plant_list)

# take input
sentence = input("Bir cümle girin: ").lower()

# Tokenize and stem
tokens = tokenize_and_stem(sentence.lower())
print(tokens)

found_plant = "none"

for plant in plant_list:
    if find_plant(tokens, plant):
        print(plant)
        found_plant = plant

# Sonucu ekrana yazdır