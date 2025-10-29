
export interface PersonaFormInput {
  genre: string;
  tone: string;
  role: string;
  traits: string;
}

export interface Persona {
  name: string;
  background: string;
  abilities: string[];
  relationships: string;
  personality: string;
}
