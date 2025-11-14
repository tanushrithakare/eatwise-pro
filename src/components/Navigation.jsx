import React from 'react';
import { Apple } from 'lucide-react';

const WelcomeScreen = ({ navigateTo }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-full p-8 mb-8 shadow-2xl">
        <Apple size={64} className="text-emerald-600" strokeWidth={2.5} />
      </div>
      
      <h1 className="text-5xl font-bold text-white mb-4 text-center">
        Eatwise Pro
      </h1>
      
      <p className="text-xl text-white text-center mb-12 max-w-md opacity-90">
        Your personal journey to health, nutrition, and wellness starts here
      </p>
      
      <div className="w-full max-w-md space-y-4">
        <button
          onClick={() => navigateTo('signup')}
          className="w-full bg-white text-emerald-600 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          Get Started
        </button>
        
        <button
          onClick={() => navigateTo('login')}
          className="w-full bg-transparent border-2 border-white text-white py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all"
        >
          Sign In
        </button>
      </div>
      
      <p className="text-white text-sm mt-8 opacity-75">
        Join 50,000+ people on their health journey
      </p>
    </div>
  );
};

export default WelcomeScreen;