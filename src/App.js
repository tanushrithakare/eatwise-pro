import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SignupScreen from './components/SignupScreen';
import LoginScreen from './components/LoginScreen';
import OnboardingFlow from './components/OnboardingFlow';
import BMIScreen from './components/BMIScreen';
import Dashboard from './components/Dashboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userData, setUserData] = useState(null);

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && <WelcomeScreen navigateTo={navigateTo} />}
      {currentScreen === 'signup' && <SignupScreen navigateTo={navigateTo} />}
      {currentScreen === 'login' && <LoginScreen navigateTo={navigateTo} />}
      {currentScreen === 'onboarding' && (
        <OnboardingFlow navigateTo={navigateTo} setUserData={setUserData} />
      )}
      {currentScreen === 'bmi' && (
        <BMIScreen setCurrentScreen={setCurrentScreen} userData={userData} />
      )}
      {currentScreen === 'dashboard' && <Dashboard userData={userData} />}
    </div>
  );
}

export default App;
