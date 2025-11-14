import React from 'react';
import { Scale, Target, Flame } from 'lucide-react';
import { goals } from '../data/goals';

const BMIScreen = ({ setCurrentScreen, userData }) => {
  if (!userData) return null;

  const bmi = userData.bmi;
  const goalObj = goals.find(g => g.id === userData.goal);

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

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
            <div className="text-6xl font-bold text-green-600 mb-2">
              {bmi}
            </div>
            <div className="text-xl font-semibold text-gray-700 mb-4">
              {getBMIStatus(bmi)}
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
                  {goalObj?.label}
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
