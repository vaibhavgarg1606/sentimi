// api/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.REACT_APP_API_KEY; // replace with your real key
const genAI = new GoogleGenerativeAI(API_KEY);


export const getGeminiResponse = async (prompt) => {
  prompt += "(NOTE : give short descriptive answers only and respond to the text before NOTE)"
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "Oops! Something went wrong while getting the response.";
  }
};
