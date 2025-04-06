import pandas as pd
import os
from sklearn.preprocessing import LabelEncoder
from transformers import DistilBertTokenizerFast, DistilBertForSequenceClassification
import torch

le = LabelEncoder()
file = os.path.join("dataset", "empatheticdialogues", "preprocessed", "conversation.csv")
try:
    df = pd.read_csv(file)
except FileNotFoundError:
    print(f"{file} not found")
except Exception as e:
    print(f"Error {e} while loading {file}")

df["labels"] = le.fit_transform(df["emotion"])

# model_path = os.path.join("model", "distilbert-emotion")      # if the model is saved locally on your machine
tokenizer = DistilBertTokenizerFast.from_pretrained("LakshSetia/distilbert-emotion")    # downloading model from huggingface hub
model = DistilBertForSequenceClassification.from_pretrained("LakshSetia/distilbert-emotion")

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
model.eval()

def predict_emotion(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding="max_length", max_length=128)
    inputs = {k: v.to(device) for k, v in inputs.items()}

    with torch.no_grad():
        outputs = model(**inputs)
        logits = outputs.logits
        predicted_class_id = torch.argmax(logits, dim=1).item()

    emotion = le.inverse_transform([predicted_class_id])[0]
    return emotion

while True:
    text = input(">> ")
    if text.lower() in ["quit", "exit"]:
        break
    predicted_emotion = predict_emotion(text)
    print(f"Predicted Emotion: {predicted_emotion}")
