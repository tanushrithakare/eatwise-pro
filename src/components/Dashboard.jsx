import React, { useState, useMemo } from 'react';
import Navigation from './Navigation';
import HomeTab from '../screens/HomeTab';
import ProgressTab from '../screens/ProgressTab';
import RecipesTab from '../screens/RecipesTab';

const Dashboard = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderedTab = useMemo(() => {
    const tabs = {
      home: <HomeTab userData={userData} />,
      progress: <ProgressTab userData={userData} />,
      recipes: <RecipesTab />,
    };
    return tabs[activeTab] || null;
  }, [activeTab, userData]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Hello, {userData?.name || 'User'}!</h1>
        <p className="text-sm mt-1">
          Your BMI: {userData?.bmi} ({userData?.bmi && getBMIStatus(userData.bmi)})
        </p>
      </header>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {renderedTab}
      </main>

      {/* Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

const getBMIStatus = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

export default Dashboard;
