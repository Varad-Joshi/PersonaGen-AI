# 🎭 PersonaGen – AI Character Generator  
![alt text](https://img.shields.io/badge/PersonaGen-AI%20Character%20Generator-8B5CF6?style=for-the-badge&logo=react)

PersonaGen is a **dynamic AI-powered character generator** that uses the power of **Google’s Gemini AI** to create realistic and creative personas for stories, games, and other narrative projects — all **without any backend or database**.  

---

## ✨ Features

- **Dynamic AI Generation:**  
  Generates fresh, unique personas each time using the **Google Gemini Flash model**.

- **Customizable Inputs:**  
  Tailor your characters by selecting **genre, tone, role, and personality traits**.

- **Rich Character Profiles:**  
  Produces detailed profiles including **name, age, background, abilities, relationships, and a personality summary**.

- **AI-Generated Avatars:**  
  Integrates the **DiceBear API** to generate unique SVG avatars for every persona.

- **Interactive & Engaging UI:**  
  Includes a live **typing animation** as the persona unfolds for an immersive experience.

- **Export Options:**  
  Export personas as structured **`.json`** files or readable **`.txt`** summaries.

- **Responsive Design:**  
  Built with **React + Tailwind CSS**, offering a smooth, modern, mobile-first experience.

- **Serverless & Lightweight:**  
  Entirely runs on the client-side; no backend or database required — ideal for **free-tier deployment**.

---

## 🚀 How It Works

1. **User Input:**  
   You provide the desired genre, tone, role, and traits via the input form.

2. **AI Request:**  
   The frontend builds a structured prompt and schema, then sends it to the **Google Gemini API** via the `geminiService`.

3. **AI Processing:**  
   The Gemini model returns a **JSON-structured persona** matching the input parameters.

4. **Display:**  
   Persona data is parsed, an avatar is generated via **DiceBear**, and the full character profile is rendered with typing animation.

5. **Export:**  
   Users can export their generated personas as JSON or TXT files for reuse in games, stories, or creative apps.

---

## 🧠 Technologies Used

| Layer | Technology |
|--------|-------------|
| **Frontend** | React, TypeScript |
| **Styling** | Tailwind CSS |
| **AI Model** | Google Gemini API |
| **Avatars** | DiceBear Adventurer API |
| **Animation** | Custom React Typing Animation |
| **Storage** | LocalStorage (temporary, no DB) |

---

## ⚙️ Getting Started (Local Setup)

This project is designed to run directly in the browser — no backend setup required.

### 🔧 Prerequisites

- A modern web browser (Chrome, Firefox, Edge)
- A code editor like **VS Code**
- A **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com/)

---

### 🪜 Step 1: Download the Project Files

Clone or download the project folder containing all files:

├── components/
│ ├── Header.tsx
│ ├── Icons.tsx
│ ├── PersonaDisplay.tsx
│ ├── PersonaForm.tsx
│ └── TypingAnimation.tsx
├── services/
│ └── geminiService.ts
├── App.tsx
├── index.html
├── index.tsx
├── metadata.json
└── types.ts


---

### 🔑 Step 2: Add Your Gemini API Key

Open `services/geminiService.ts` and locate:

```typescript
const API_KEY = process.env.API_KEY;

const API_KEY = "YOUR_GEMINI_API_KEY_HERE";

---

### 🌐 Step 3: Run the Application Locally (using npm)

PersonaGen is a lightweight React + TypeScript application that can be run directly using **npm** or **yarn**.  
This setup ensures proper module handling and CORS-free development.

#### 🪜 Steps

1. **Install Dependencies**
   ```bash
   npm install  ```
2 . ```bash
   npm run dev ```

---

## 🧠 Project Summary

PersonaGen demonstrates the synergy of **NLP, generative AI, and creative storytelling** — all implemented efficiently without any backend.  
It highlights how modern AI models like **Google Gemini** can dynamically craft imaginative, human-like characters while keeping the system lightweight, fast, and free-tier friendly.

---

## 💡 Inspiration

The project was built to explore:
- Practical applications of **LLMs** and **Prompt Engineering**.  
- The creative potential of **AI in storytelling and gaming**.  
- How to deliver **powerful AI-driven tools** entirely client-side.  

---

## 🙌 Contributing

Contributions are welcome!  
If you’d like to improve PersonaGen — add new features, improve UI/UX, or integrate advanced AI models — feel free to:

1. Fork this repository.  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/your-feature

