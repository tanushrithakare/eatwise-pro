import React, { useState } from 'react';
import { ChevronLeft, Mail, Lock, Apple } from 'lucide-react';

const LoginScreen = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (email && password) {
      navigateTo('dashboard');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <button
        onClick={() => navigateTo('welcome')}
        className="self-start mb-8 text-white hover:bg-white/20 p-2 rounded-lg transition-all"
      >
        <ChevronLeft size={28} />
      </button>

      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
        <div className="bg-white rounded-full p-6 mb-6 shadow-xl">
          <Apple size={48} className="text-emerald-600" />
        </div>

        <h2 className="text-4xl font-bold text-white mb-2">Welcome Back!</h2>
        <p className="text-white text-center mb-8 opacity-90">
          Sign in to continue your health journey
        </p>

        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent focus:border-emerald-400 outline-none"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent focus:border-emerald-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-emerald-600 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Sign In
          </button>
        </form>

        <p className="text-white mt-6">
          Don't have an account?{' '}
          <button
            onClick={() => navigateTo('signup')}
            className="font-semibold underline hover:text-emerald-100"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;