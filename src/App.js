import React, { useState } from 'react';
import './App.css';

// Import components with error handling
let WelcomeScreen, LoginScreen, SignupScreen, OnboardingFlow, Dashboard;

try {
  WelcomeScreen = require('./components/WelcomeScreen').default;
} catch (e) {
  WelcomeScreen = () => <div className="text-white p-6">WelcomeScreen component not found</div>;
}

try {
  LoginScreen = require('./components/LoginScreen').default;
} catch (e) {
  LoginScreen = () => <div className="text-white p-6">LoginScreen component not found</div>;
}

try {
  SignupScreen = require('./components/SignupScreen').default;
} catch (e) {
  SignupScreen = () => <div className="text-white p-6">SignupScreen component not found</div>;
}

try {
  OnboardingFlow = require('./components/OnboardingFlow').default;
} catch (e) {
  OnboardingFlow = () => <div className="text-white p-6">OnboardingFlow component not found</div>;
}

try {
  Dashboard = require('./components/Dashboard').default;
} catch (e) {
  Dashboard = () => <div className="text-white p-6">Dashboard component not found</div>;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userData, setUserData] = useState({});
  const [onboardingStep, setOnboardingStep] = useState(0);

  const navigateTo = (screen) => {
    console.log('Navigating to:', screen); // Debug log
    setCurrentScreen(screen);
    if (screen === 'onboarding') {
      setOnboardingStep(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-teal-500">
      {currentScreen === 'welcome' && <WelcomeScreen navigateTo={navigateTo} />}
      {currentScreen === 'login' && <LoginScreen navigateTo={navigateTo} />}
      {currentScreen === 'signup' && <SignupScreen navigateTo={navigateTo} />}
      {currentScreen === 'onboarding' && (
        <OnboardingFlow 
          step={onboardingStep} 
          setStep={setOnboardingStep}
          userData={userData}
          setUserData={setUserData}
          navigateTo={navigateTo} 
        />
      )}
      {currentScreen === 'dashboard' && <Dashboard userData={userData} navigateTo={navigateTo} />}
    </div>
  );
}

export default App;