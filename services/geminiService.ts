
import { GoogleGenAI, Type } from "@google/genai";
import { Persona, PersonaFormInput } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. The application will not work without it.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const personaSchema = {
  type: Type.OBJECT,
  properties: {
    name: {
      type: Type.STRING,
      description: "A creative and fitting name for the character.",
    },
    background: {
      type: Type.STRING,
      description: "A detailed background story for the character, around 100-150 words.",
    },
    abilities: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
      },
      description: "A list of 3-5 key abilities, skills, or powers the character possesses."
    },
    relationships: {
        type: Type.STRING,
        description: "A brief description of the character's key relationships with other potential characters (family, friends, rivals).",
    },
    personality: {
      type: Type.STRING,
      description: "A summary of the character's personality, capturing their core nature and motivations in about 50-70 words.",
    },
  },
  required: ["name", "background", "abilities", "relationships", "personality"],
};

export const generatePersonaProfile = async (
  inputs: PersonaFormInput
): Promise<Persona> => {
  const { genre, tone, role, traits } = inputs;

  const prompt = `Generate a detailed character persona for a story.
  - Genre: ${genre}
  - Tone: ${tone}
  - Character Role: ${role}
  - Key Traits: ${traits}

  Based on these inputs, create a unique and compelling character. Provide the output in a structured JSON format.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: personaSchema,
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText.startsWith('{') || !jsonText.endsWith('}')) {
        throw new Error("Received a malformed non-JSON response from the API.");
    }
    
    const personaData = JSON.parse(jsonText);

    if (
        typeof personaData.name === 'string' &&
        typeof personaData.background === 'string' &&
        Array.isArray(personaData.abilities) &&
        typeof personaData.relationships === 'string' &&
        typeof personaData.personality === 'string'
    ) {
        return personaData as Persona;
    } else {
        throw new Error("API response is missing required persona fields.");
    }

  } catch (error) {
    console.error("Error generating persona with Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to communicate with the AI model: ${error.message}`);
    }
    throw new Error("Failed to communicate with the AI model due to an unknown error.");
  }
};
