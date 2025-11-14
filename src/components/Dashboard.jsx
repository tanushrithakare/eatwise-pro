import React, { useState } from 'react';
import { Home, BookOpen, TrendingUp, Search, Calendar, Target, Utensils, Activity, Zap } from 'lucide-react';
import { stateRecipes } from '../data/recipes';
import { calculateCalories, calculateBMI, getBMICategory } from '../utils/calculations';

const Dashboard = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchIngredient, setSearchIngredient] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': 
        return <HomeTab userData={userData} />;
      case 'recipes': 
        return <RecipesTab userData={userData} searchIngredient={searchIngredient} setSearchIngredient={setSearchIngredient} />;
      case 'progress': 
        return <ProgressTab userData={userData} />;
      default: 
        return <HomeTab userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-20">
      <div className="flex-1 overflow-y-auto">
        {renderContent()}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-around max-w-md mx-auto">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-emerald-600' : 'text-gray-400'}`}>
            <Home size={24} />
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button onClick={() => setActiveTab('recipes')} className={`flex flex-col items-center gap-1 ${activeTab === 'recipes' ? 'text-emerald-600' : 'text-gray-400'}`}>
            <BookOpen size={24} />
            <span className="text-xs font-semibold">Recipes</span>
          </button>
          <button onClick={() => setActiveTab('progress')} className={`flex flex-col items-center gap-1 ${activeTab === 'progress' ? 'text-emerald-600' : 'text-gray-400'}`}>
            <TrendingUp size={24} />
            <span className="text-xs font-semibold">Progress</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeTab = ({ userData }) => {
  const calories = calculateCalories(userData.weight, userData.height, userData.age, userData.gender, userData.activityLevel, userData.goal);
  const bmi = calculateBMI(userData.weight, userData.height);
  const { category } = getBMICategory(bmi);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back! 👋</h1>
        <p className="text-white opacity-90">Let's achieve your goals today</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Target className="text-emerald-600" size={20} />
            <span className="text-gray-600 text-sm">Daily Goal</span>
          </div>
          <div className="text-2xl font-bold text-emerald-600">{calories}</div>
          <div className="text-xs text-gray-500">calories/day</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="text-blue-600" size={20} />
            <span className="text-gray-600 text-sm">BMI</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{bmi}</div>
          <div className="text-xs text-gray-500">{category}</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="text-orange-600" size={20} />
            <span className="text-gray-600 text-sm">Activity</span>
          </div>
          <div className="text-2xl font-bold text-orange-600 capitalize">{userData.activityLevel || 'N/A'}</div>
          <div className="text-xs text-gray-500">level</div>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <Target className="text-purple-600" size={20} />
            <span className="text-gray-600 text-sm">Goal</span>
          </div>
          <div className="text-xl font-bold text-purple-600 capitalize">{userData.goal || 'N/A'}</div>
          <div className="text-xs text-gray-500">weight</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Calendar size={24} className="text-emerald-600" />
          Today's Meal Plan
        </h3>
        <div className="space-y-4">
          {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
            <div key={meal} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <div className="font-semibold text-gray-800">{meal}</div>
                <div className="text-sm text-gray-500">{Math.round(calories / 3)} calories</div>
              </div>
              <Utensils className="text-emerald-600" size={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecipesTab = ({ userData, searchIngredient, setSearchIngredient }) => {
  const userStateRecipes = stateRecipes[userData.state] || [];
  const filteredRecipes = searchIngredient ? userStateRecipes.filter((recipe) => recipe.ingredients.some((ing) => ing.toLowerCase().includes(searchIngredient.toLowerCase()))) : userStateRecipes;

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Recipes 🍽️</h1>
        <p className="text-white opacity-90">Discover healthy meals from {userData.state || 'your region'}</p>
      </div>
      <div className="relative">
        <Search className="absolute left-4 top-4 text-gray-400" size={20} />
        <input type="text" placeholder="Search by ingredient..." value={searchIngredient} onChange={(e) => setSearchIngredient(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent focus:border-emerald-400 outline-none shadow-lg" />
      </div>
      <div className="space-y-4">
        {filteredRecipes.length > 0 ? filteredRecipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h3>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            <div className="space-y-3">
              <div>
                <div className="text-sm font-semibold text-gray-700 mb-2">Ingredients:</div>
                <div className="flex flex-wrap gap-2">{recipe.ingredients.map((ing, i) => (<span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm">{ing}</span>))}</div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-3 border-t">
                <div className="text-center"><div className="text-lg font-bold text-emerald-600">{recipe.calories}</div><div className="text-xs text-gray-500">calories</div></div>
                <div className="text-center"><div className="text-lg font-bold text-blue-600">{recipe.protein}g</div><div className="text-xs text-gray-500">protein</div></div>
                <div className="text-center"><div className="text-lg font-bold text-orange-600">{recipe.carbs}g</div><div className="text-xs text-gray-500">carbs</div></div>
              </div>
            </div>
          </div>
        )) : (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600">{searchIngredient ? 'No recipes found with that ingredient' : 'Select your state to see regional recipes'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProgressTab = ({ userData }) => {
  const bmi = calculateBMI(userData.weight, userData.height);
  const { category, color } = getBMICategory(bmi);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Your Progress 📊</h1>
        <p className="text-white opacity-90">Track your health journey</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Current BMI</h3>
        <div className="text-center">
          <div className="text-6xl font-bold text-emerald-600 mb-2">{bmi}</div>
          <div className={`text-2xl font-semibold ${color}`}>{category}</div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Stats Overview</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center"><span className="text-gray-600">Weight</span><span className="font-bold text-lg">{userData.weight} kg</span></div>
          <div className="flex justify-between items-center"><span className="text-gray-600">Height</span><span className="font-bold text-lg">{userData.height} cm</span></div>
          <div className="flex justify-between items-center"><span className="text-gray-600">Age</span><span className="font-bold text-lg">{userData.age} years</span></div>
          <div className="flex justify-between items-center"><span className="text-gray-600">Activity Level</span><span className="font-bold text-lg capitalize">{userData.activityLevel}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;