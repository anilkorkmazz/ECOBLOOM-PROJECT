import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import cross_val_predict, StratifiedKFold
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder
from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

# Load dataset
dataset_path = "/Users/anilkorkmaz/PycharmProjects/ChatBot/plant_dataset.csv"
df = pd.read_csv(dataset_path)

# Convert text to lowercase (handling Turkish-specific cases)
def to_lower_turkish(text):
    return text.replace("I", "ı").replace("İ", "i").lower()

df["Sentence"] = df["Sentence"].astype(str).apply(to_lower_turkish)

# Convert text to TF-IDF features
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df["Sentence"])

# Encode labels (category names → numbers)
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(df["Category"])

# Initialize SVM
svm = SVC(kernel="linear", class_weight="balanced")

# Cross-validation setup
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
y_pred = cross_val_predict(svm, X, y, cv=cv)

# Evaluation Metrics
print("Classification Report:")
print(classification_report(y, y_pred, target_names=label_encoder.classes_))

print("Accuracy Score:")
print(accuracy_score(y, y_pred))

print("Confusion Matrix:")
print(confusion_matrix(y, y_pred))

# Train final model on full dataset
svm.fit(X, y)

# Save the model and tools
joblib.dump(svm, "/Users/anilkorkmaz/PycharmProjects/ChatBot/svm_plant_classifier.pkl")
joblib.dump(vectorizer, "/Users/anilkorkmaz/PycharmProjects/ChatBot/tfidf_vectorizer.pkl")
joblib.dump(label_encoder, "/Users/anilkorkmaz/PycharmProjects/ChatBot/label_encoder.pkl")

print("✅ Model, vectorizer, and label encoder saved successfully!")
