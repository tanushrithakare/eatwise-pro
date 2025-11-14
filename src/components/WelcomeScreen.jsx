import React from 'react';
import { Apple } from 'lucide-react';

const WelcomeScreen = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Apple className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold text-white">Eatwise Pro</h1>
          <p className="text-xl text-green-50 max-w-md mx-auto">
            Your personal journey to health, nutrition, and wellness starts here
          </p>
        </div>
        
        <div className="space-y-4 max-w-sm mx-auto">
          <button
            onClick={() => navigateTo('signup')}
            className="w-full bg-white text-green-600 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => navigateTo('login')}
            className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold text-lg border-2 border-white hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </div>

        <p className="text-green-50 text-sm">Join 50,000+ people on their health journey</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
