import React from 'react';
import { Scale, Target, Flame } from 'lucide-react';
import { goals } from '../data/goals';

const BMIScreen = ({ setCurrentScreen, userData, bmiData }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
            <Scale className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Your BMI Results</h2>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-6">
          <div className="text-center">
            <div className={`text-6xl font-bold ${bmiData?.color} mb-2`}>
              {bmiData?.bmi}
            </div>
            <div className="text-xl font-semibold text-gray-700 mb-4">
              {bmiData?.category}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-1000"
                style={{ width: `${Math.min((bmiData?.bmi / 40) * 100, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-800">Your Goal</div>
                <div className="text-sm text-gray-600">
                  {goals.find(g => g.id === userData.goal)?.label}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Flame className="w-6 h-6 text-purple-600" />
              <div>
                <div className="font-semibold text-gray-800">Daily Calorie Target</div>
                <div className="text-sm text-gray-600">
                  {userData.goal === 'lose' ? '1,800 kcal' : 
                   userData.goal === 'gain' ? '2,800 kcal' : '2,200 kcal'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentScreen('dashboard')}
          className="w-full bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition"
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
};

export default BMIScreen;