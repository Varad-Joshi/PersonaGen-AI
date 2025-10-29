
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        PersonaGen
      </h1>
      <p className="mt-2 text-lg sm:text-xl text-gray-600">
        AI-Powered Character Generator
      </p>
    </header>
  );
};

export default Header;
