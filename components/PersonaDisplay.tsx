
import React from 'react';
import { Persona } from '../types';
import TypingAnimation from './TypingAnimation';
import { FileJson, FileText } from './Icons';

interface PersonaDisplayProps {
  persona: Persona;
}

const PersonaSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-xl font-semibold text-purple-800 mb-2 border-b-2 border-purple-200 pb-1">{title}</h3>
        {children}
    </div>
);

const PersonaDisplay: React.FC<PersonaDisplayProps> = ({ persona }) => {
  const avatarUrl = `https://api.dicebear.com/8.x/adventurer/svg?seed=${encodeURIComponent(persona.name)}`;

  const handleDownload = (format: 'json' | 'txt') => {
    const filename = `${persona.name.replace(/\s+/g, '_')}_persona.${format}`;
    let content = '';
    let mimeType = '';

    if (format === 'json') {
      content = JSON.stringify(persona, null, 2);
      mimeType = 'application/json';
    } else {
      content = `Name: ${persona.name}\n\n`
              + `Personality: ${persona.personality}\n\n`
              + `Background:\n${persona.background}\n\n`
              + `Abilities:\n- ${persona.abilities.join('\n- ')}\n\n`
              + `Relationships: ${persona.relationships}`;
      mimeType = 'text/plain';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="p-6 md:p-8 bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/60">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex flex-col items-center text-center">
            <img src={avatarUrl} alt={`${persona.name}'s avatar`} className="w-40 h-40 rounded-full bg-purple-100 border-4 border-white shadow-md mb-4"/>
            <h2 className="text-3xl font-bold text-gray-800">{persona.name}</h2>
            <div className="mt-6 flex flex-col sm:flex-row md:flex-col gap-3 w-full max-w-xs">
                <button onClick={() => handleDownload('json')} className="flex items-center justify-center w-full gap-2 py-2 px-4 bg-white/80 text-purple-700 font-semibold rounded-lg shadow-md hover:bg-white transition-all duration-300">
                    <FileJson /> Download JSON
                </button>
                <button onClick={() => handleDownload('txt')} className="flex items-center justify-center w-full gap-2 py-2 px-4 bg-white/80 text-purple-700 font-semibold rounded-lg shadow-md hover:bg-white transition-all duration-300">
                    <FileText /> Download TXT
                </button>
            </div>
        </div>
        <div className="md:col-span-2 space-y-6">
            <PersonaSection title="Personality Summary">
                <TypingAnimation text={persona.personality} className="text-gray-700 leading-relaxed" speed={15} />
            </PersonaSection>
            <PersonaSection title="Background Story">
                 <TypingAnimation text={persona.background} className="text-gray-700 leading-relaxed" speed={15}/>
            </PersonaSection>
            <PersonaSection title="Abilities & Skills">
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {persona.abilities.map((ability, index) => <li key={index}>{ability}</li>)}
                </ul>
            </PersonaSection>
             <PersonaSection title="Relationships">
                <TypingAnimation text={persona.relationships} className="text-gray-700 leading-relaxed" speed={15}/>
            </PersonaSection>
        </div>
      </div>
    </div>
  );
};

export default PersonaDisplay;
