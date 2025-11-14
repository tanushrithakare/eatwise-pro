import React, { useState } from 'react';
import { ChevronLeft, User, Mail, Lock, Apple } from 'lucide-react';

const SignupScreen = ({ navigateTo }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      navigateTo('onboarding');
    } else {
      alert('Please fill in all fields');
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

        <h2 className="text-4xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-white text-center mb-8 opacity-90">
          Start your personalized health journey today
        </p>

        <form onSubmit={handleSignup} className="w-full space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-transparent focus:border-emerald-400 outline-none"
            />
          </div>

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
            Create Account
          </button>
        </form>

        <p className="text-white mt-6">
          Already have an account?{' '}
          <button
            onClick={() => navigateTo('login')}
            className="font-semibold underline hover:text-emerald-100"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;