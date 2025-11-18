import { GoogleGenAI } from "@google/genai";

// Initialize API client
// NOTE: In a real production app, you would proxy this through a backend to hide the key.
// For this frontend-only demo, we rely on the environment variable.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSupportiveAdvice = async (topic: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Jesteś empatycznym asystentem AI na stronie internetowej "Pomiędzy".
      Strona wspiera młodzież i rodziny w kryzysie (uzależnienia, rozwody, szkoła, prawo).
      Użytkownik wpisał temat: "${topic}".
      Napisz krótką (max 3 zdania), ciepłą i wspierającą wiadomość.
      Zakończ zachętą do umówienia się na spotkanie z naszym specjalistą.
      Bądź delikatny, ale profesjonalny. Nie udawaj lekarza.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Przepraszamy, nasz asystent chwilowo odpoczywa. Spróbuj ponownie później.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Nie udało się uzyskać odpowiedzi.");
  }
};