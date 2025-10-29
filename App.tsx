
import React, { useState, useCallback } from 'react';
import { Persona, PersonaFormInput } from './types';
import { generatePersonaProfile } from './services/geminiService';
import Header from './components/Header';
import PersonaForm from './components/PersonaForm';
import PersonaDisplay from './components/PersonaDisplay';

const LoaderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-spin"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [persona, setPersona] = useState<Persona | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePersona = useCallback(async (inputs: PersonaFormInput) => {
    setIsLoading(true);
    setPersona(null);
    setError(null);

    try {
      const result = await generatePersonaProfile(inputs);
      setPersona(result);
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      setError(`Failed to generate persona. ${errorMessage} Please check your API key and try again.`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-200 text-gray-800 font-sans p-4 sm:p-6 md:p-8">
      <div className="container mx-auto max-w-4xl">
        <Header />
        <main>
          <PersonaForm onGenerate={handleGeneratePersona} isLoading={isLoading} />
          {isLoading && (
            <div className="flex justify-center items-center mt-12">
              <div className="flex flex-col items-center gap-4 text-purple-700">
                <LoaderIcon />
                <p className="text-lg font-medium">Crafting your persona...</p>
              </div>
            </div>
          )}
          {error && (
            <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
              <p><strong>Error:</strong> {error}</p>
            </div>
          )}
          {persona && !isLoading && (
            <div className="mt-8 animate-fade-in">
              <PersonaDisplay persona={persona} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
