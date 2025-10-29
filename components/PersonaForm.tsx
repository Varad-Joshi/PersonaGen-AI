
import React, { useState } from 'react';
import { PersonaFormInput } from '../types';

interface PersonaFormProps {
  onGenerate: (inputs: PersonaFormInput) => void;
  isLoading: boolean;
}

const FormLabel: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">{children}</label>
);

const SelectInput: React.FC<{ id: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[] }> = ({ id, value, onChange, options }) => (
    <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-2.5 bg-white/50 border border-purple-200 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition"
    >
        {options.map(option => <option key={option} value={option}>{option}</option>)}
    </select>
);

const TextInput: React.FC<{ id: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string }> = ({ id, value, onChange, placeholder }) => (
    <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2.5 bg-white/50 border border-purple-200 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition"
    />
);

const PersonaForm: React.FC<PersonaFormProps> = ({ onGenerate, isLoading }) => {
  const [genre, setGenre] = useState('Fantasy');
  const [tone, setTone] = useState('Heroic');
  const [role, setRole] = useState('Protagonist');
  const [traits, setTraits] = useState('Brave, Loyal, Impulsive');

  const genres = ['Fantasy', 'Sci-Fi', 'Mystery', 'Horror', 'Cyberpunk', 'Steampunk', 'Dystopian'];
  const tones = ['Heroic', 'Comical', 'Serious', 'Dark', 'Gritty', 'Whimsical', 'Satirical'];
  const roles = ['Protagonist', 'Antagonist', 'Mentor', 'Sidekick', 'Love Interest', 'Trickster', 'Orphan'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ genre, tone, role, traits });
  };

  return (
    <div className="p-6 md:p-8 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FormLabel htmlFor="genre">Genre</FormLabel>
          <SelectInput id="genre" value={genre} onChange={e => setGenre(e.target.value)} options={genres} />
        </div>
        <div>
          <FormLabel htmlFor="tone">Tone</FormLabel>
          <SelectInput id="tone" value={tone} onChange={e => setTone(e.target.value)} options={tones} />
        </div>
        <div>
          <FormLabel htmlFor="role">Role</FormLabel>
          <SelectInput id="role" value={role} onChange={e => setRole(e.target.value)} options={roles} />
        </div>
        <div>
          <FormLabel htmlFor="traits">Key Traits</FormLabel>
          <TextInput
            id="traits"
            value={traits}
            onChange={e => setTraits(e.target.value)}
            placeholder="e.g., Brave, Cunning, Impulsive"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? 'Generating...' : 'Generate Persona'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonaForm;
