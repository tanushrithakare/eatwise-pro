import React from 'react';
import { goals } from '../data/goals';

const HomeTab = ({ userData }) => {
  if (!userData) return <div className="text-center text-gray-400">Loading...</div>;

  const { name, weight, height, goal, bmi } = userData;

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const userGoal = goals.find(g => g.id === goal);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Welcome, {name}!</h2>

      <div className="grid grid-cols-2 gap-4">
        <StatCard title="Weight" value={`${weight} kg`} color="bg-green-100" />
        <StatCard title="Height" value={`${height} cm`} color="bg-blue-100" />
        <StatCard title="Goal" value={userGoal?.label} color="bg-purple-100" />
        <StatCard title="BMI" value={`${bmi} (${getBMIStatus(bmi)})`} color="bg-red-100" />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div className={`${color} p-4 rounded-xl shadow-md flex flex-col justify-center items-center`}>
    <h3 className="text-gray-700 font-semibold">{title}</h3>
    <p className="text-xl font-bold text-gray-900">{value}</p>
  </div>
);

export default HomeTab;
