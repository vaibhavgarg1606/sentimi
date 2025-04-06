import pandas as pd
import os
from sklearn.preprocessing import LabelEncoder
from transformers import DistilBertTokenizerFast, DistilBertForSequenceClassification, Trainer, TrainingArguments
from datasets import Dataset


# Loading conversation csv file
file = os.path.join("dataset", "empatheticdialogues", "preprocessed", "conversation.csv")
try:
    df = pd.read_csv(file)
except FileNotFoundError:
    print(f"{file} not found")
except Exception as e:
    print(f"Error {e} while loading {file}")

# Converting emotions to numerical values
le = LabelEncoder()
df["labels"] = le.fit_transform(df["emotion"])

# Converting df to dataset of only "labels" and "input"
df = df[["input", "labels"]]
df["input"] = df["input"].astype(str)
dataset = Dataset.from_pandas(df)

# Calling distilbert tokenizer
tokenizer = DistilBertTokenizerFast.from_pretrained("distilbert-base-uncased")
def preprocess(batch):
    return tokenizer(batch["input"], truncation=True, max_length=128, padding="max_length")
tokenize_dataset = dataset.map(preprocess, batched=True)
tokenize_dataset = tokenize_dataset.train_test_split(test_size=0.20)

# Calling distilbert model
num_labels = len(le.classes_)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)
training_args = TrainingArguments(
    output_dir="./model/distilbert-emotion",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    num_train_epochs=4,
    weight_decay=0.01,
    logging_dir='./logs',
    logging_steps=10,
)
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenize_dataset["train"],
    eval_dataset=tokenize_dataset["test"],
    tokenizer=tokenizer
)
trainer.train()

# Saving model
model_path = os.path.join("model", "distilbert-emotion")
model.save_pretrained(model_path)
tokenizer.save_pretrained(model_path)