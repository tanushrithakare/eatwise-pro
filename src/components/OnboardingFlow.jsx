import React from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { indianStates, commonAllergies, healthGoals } from '../data/formData';
import { calculateBMI, getBMICategory } from '../utils/calculations';

const OnboardingFlow = ({ step, setStep, userData, setUserData, navigateTo }) => {
  const updateUserData = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      navigateTo('dashboard');
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      navigateTo('signup');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0: return <BasicInfoStep userData={userData} updateUserData={updateUserData} />;
      case 1: return <PhysicalInfoStep userData={userData} updateUserData={updateUserData} />;
      case 2: return <BMIResultStep userData={userData} />;
      case 3: return <LocationStep userData={userData} updateUserData={updateUserData} />;
      case 4: return <AllergiesStep userData={userData} updateUserData={updateUserData} />;
      case 5: return <GoalsStep userData={userData} updateUserData={updateUserData} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={prevStep} className="text-white hover:bg-white/20 p-2 rounded-lg transition-all">
          <ChevronLeft size={28} />
        </button>
        <div className="text-white font-semibold">Step {step + 1} of 6</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full">
        {renderStep()}
        <button onClick={nextStep} className="w-full bg-white text-emerald-600 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all mt-8 flex items-center justify-center gap-2">
          {step === 5 ? 'Complete' : 'Next'} <ArrowRight size={20} />
        </button>
      </div>

      <div className="flex gap-2 mt-8 justify-center">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`h-2 rounded-full transition-all ${i === step ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} />
        ))}
      </div>
    </div>
  );
};

const BasicInfoStep = ({ userData, updateUserData }) => (
  <div className="w-full">
    <h2 className="text-3xl font-bold text-white mb-2">Basic Information</h2>
    <p className="text-white opacity-90 mb-8">Tell us about yourself</p>
    <div className="space-y-4">
      <div>
        <label className="text-white font-semibold block mb-2">Age</label>
        <input type="number" value={userData.age || ''} onChange={(e) => updateUserData('age', e.target.value)} placeholder="Enter your age" className="w-full px-4 py-4 rounded-xl border-2 border-transparent focus:border-emerald-400 outline-none" />
      </div>
      <div>
        <label className="text-white font-semibold block mb-2">Gender</label>
        <div className="grid grid-cols-2 gap-4">
          {['male', 'female'].map((gender) => (
            <button key={gender} onClick={() => updateUserData('gender', gender)} className={`py-4 rounded-xl font-semibold capitalize transition-all ${userData.gender === gender ? 'bg-white text-emerald-600 shadow-xl' : 'bg-white/20 text-white hover:bg-white/30'}`}>
              {gender}
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PhysicalInfoStep = ({ userData, updateUserData }) => (
  <div className="w-full">
    <h2 className="text-3xl font-bold text-white mb-2">Physical Details</h2>
    <p className="text-white opacity-90 mb-8">Help us calculate your BMI</p>
    <div className="space-y-4">
      <div>
        <label className="text-white font-semibold block mb-2">Height (cm)</label>
        <input type="number" value={userData.height || ''} onChange={(e) => updateUserData('height', e.target.value)} placeholder="Enter your height" className="w-full px-4 py-4 rounded-xl border-2 border-transparent focus:border-emerald-400 outline-none" />
      </div>
      <div>
        <label className="text-white font-semibold block mb-2">Weight (kg)</label>
        <input type="number" value={userData.weight || ''} onChange={(e) => updateUserData('weight', e.target.value)} placeholder="Enter your weight" className="w-full px-4 py-4 rounded-xl border-2 border-transparent focus:border-emerald-400 outline-none" />
      </div>
      <div>
        <label className="text-white font-semibold block mb-2">Activity Level</label>
        <select value={userData.activityLevel || ''} onChange={(e) => updateUserData('activityLevel', e.target.value)} className="w-full px-4 py-4 rounded-xl border-2 border-transparent focus:border-emerald-400 outline-none">
          <option value="">Select activity level</option>
          <option value="sedentary">Sedentary</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="active">Active</option>
          <option value="veryActive">Very Active</option>
        </select>
      </div>
    </div>
  </div>
);

const BMIResultStep = ({ userData }) => {
  const bmi = calculateBMI(userData.weight, userData.height);
  const { category, color } = getBMICategory(bmi);
  return (
    <div className="w-full text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Your BMI Result</h2>
      <p className="text-white opacity-90 mb-8">Based on your physical details</p>
      <div className="bg-white rounded-3xl p-8 shadow-2xl">
        <div className="text-7xl font-bold text-emerald-600 mb-4">{bmi}</div>
        <div className={`text-2xl font-semibold ${color} mb-6`}>{category}</div>
        <div className="space-y-3 text-left">
          <div className="flex justify-between"><span className="text-gray-600">Height:</span><span className="font-semibold">{userData.height} cm</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Weight:</span><span className="font-semibold">{userData.weight} kg</span></div>
          <div className="flex justify-between"><span className="text-gray-600">Age:</span><span className="font-semibold">{userData.age} years</span></div>
        </div>
      </div>
    </div>
  );
};

const LocationStep = ({ userData, updateUserData }) => (
  <div className="w-full">
    <h2 className="text-3xl font-bold text-white mb-2">Your Location</h2>
    <p className="text-white opacity-90 mb-8">Get personalized regional recipes</p>
    <div>
      <label className="text-white font-semibold block mb-2">State</label>
      <select value={userData.state || ''} onChange={(e) => updateUserData('state', e.target.value)} className="w-full px-4 py-4 rounded-xl border-2 border-transparent focus:border-emerald-400 outline-none">
        <option value="">Select your state</option>
        {indianStates.map((state) => (<option key={state} value={state}>{state}</option>))}
      </select>
    </div>
  </div>
);

const AllergiesStep = ({ userData, updateUserData }) => {
  const toggleAllergy = (allergy) => {
    const current = userData.allergies || [];
    if (current.includes(allergy)) {
      updateUserData('allergies', current.filter((a) => a !== allergy));
    } else {
      updateUserData('allergies', [...current, allergy]);
    }
  };
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-white mb-2">Food Allergies</h2>
      <p className="text-white opacity-90 mb-8">Select any allergies you have</p>
      <div className="grid grid-cols-2 gap-3">
        {commonAllergies.map((allergy) => (
          <button key={allergy} onClick={() => toggleAllergy(allergy)} className={`py-3 px-4 rounded-xl font-semibold transition-all ${(userData.allergies || []).includes(allergy) ? 'bg-white text-emerald-600 shadow-xl' : 'bg-white/20 text-white hover:bg-white/30'}`}>
            {allergy}
          </button>
        ))}
      </div>
      <button onClick={() => updateUserData('allergies', [])} className="w-full mt-4 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all">No Allergies</button>
    </div>
  );
};

const GoalsStep = ({ userData, updateUserData }) => (
  <div className="w-full">
    <h2 className="text-3xl font-bold text-white mb-2">Health Goals</h2>
    <p className="text-white opacity-90 mb-8">What do you want to achieve?</p>
    <div className="space-y-3">
      {healthGoals.map((goal) => (
        <button key={goal.value} onClick={() => updateUserData('goal', goal.value)} className={`w-full p-4 rounded-xl text-left transition-all ${userData.goal === goal.value ? 'bg-white text-emerald-600 shadow-xl' : 'bg-white/20 text-white hover:bg-white/30'}`}>
          <div className="font-semibold text-lg">{goal.label}</div>
          <div className={`text-sm ${userData.goal === goal.value ? 'text-gray-600' : 'text-white/70'}`}>{goal.description}</div>
        </button>
      ))}
    </div>
  </div>
);

export default OnboardingFlow;