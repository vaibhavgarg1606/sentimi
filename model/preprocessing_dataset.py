import os
import numpy as np
import pandas as pd
import string


def cleansing(text):
    text = text.lower()
    text = text.replace("_comma_", ",")
    text = text.translate(str.maketrans("", "", string.punctuation.replace("'", "")))
    return text




typo_map = {"dont": "don't", "cant": "can't", "its": "it's"}
file = os.path.join("dataset", "empatheticdialogues", "raw", "train.csv")
try:
    train_df = pd.read_csv(file, on_bad_lines="skip")
except FileNotFoundError:
    print(f"{file} not found")
except Exception as e:
    print(f"Error {e} while loading {file}")

train_df["utterance"] = train_df["utterance"].replace(typo_map, regex=True)
train_df["utterance"] = train_df["utterance"].apply(cleansing)

# Converted train.csv to input output pairs
conversation = []
for conv_id, group in train_df.groupby("conv_id"):
    for i in range(len(group)-1):
        input = group.iloc[i]["utterance"]
        output = group.iloc[i+1]["utterance"]
        emotion = group.iloc[i]["context"]
        conversation.append({
            "input": input,
            "output": output,
            "emotion": emotion
        })
conversation_df = pd.DataFrame(conversation)

# # Emotion to each row
# emotion_onehot = pd.get_dummies(conversation_df["emotion"])
# conversation_df = pd.concat([train_df, conversation_df], axis=1)

try:
    file = os.path.join("dataset", "empatheticdialogues", "preprocessed", "conversation.csv")
    conversation_df.to_csv(file, index=False)
except Exception as e:
    print(f"Error {e} while saving {file}")
