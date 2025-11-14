import React, { useState } from 'react';
import { calculateBMI } from '../utils/bmiCalculator';
import { goals } from '../data/goals';

const genders = ['Male', 'Female', 'Other'];

const OnboardingFlow = ({ navigateTo, setUserData }) => {
  const [form, setForm] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    goal: ''
  });

  const [bmiResult, setBmiResult] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const getBMIStatus = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const handleFinish = () => {
    const weightNum = Number(form.weight);
    const heightNum = Number(form.height);

    if (!form.age || !form.gender || !form.goal || !weightNum || !heightNum) {
      return alert('Please fill all fields correctly');
    }

    const bmi = calculateBMI(weightNum, heightNum);
    setBmiResult({ bmi, status: getBMIStatus(bmi) });

    // Save user data
    setUserData({ ...form, bmi });

    // Navigate to BMI screen first, then dashboard
    setTimeout(() => navigateTo('bmi'), 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-4">
      <h2 className="text-3xl font-bold mb-4">Tell us about yourself</h2>

      <input
        name="age"
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
        className="p-3 rounded-xl w-full max-w-md text-black"
      />

      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        className="p-3 rounded-xl w-full max-w-md text-black"
      >
        <option value="" disabled>Select Gender</option>
        {genders.map(g => <option key={g} value={g}>{g}</option>)}
      </select>

      <input
        name="weight"
        type="number"
        placeholder="Weight (kg)"
        value={form.weight}
        onChange={handleChange}
        className="p-3 rounded-xl w-full max-w-md text-black"
      />

      <input
        name="height"
        type="number"
        placeholder="Height (cm)"
        value={form.height}
        onChange={handleChange}
        className="p-3 rounded-xl w-full max-w-md text-black"
      />

      <select
        name="goal"
        value={form.goal}
        onChange={handleChange}
        className="p-3 rounded-xl w-full max-w-md text-black"
      >
        <option value="" disabled>Select Goal</option>
        {goals.map(g => (
          <option key={g.id} value={g.id}>
            {g.label}
          </option>
        ))}
      </select>

      <button
        onClick={handleFinish}
        className="w-full max-w-md bg-white text-emerald-600 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
      >
        Finish
      </button>

      {bmiResult && (
        <div className="mt-4 p-4 bg-white rounded-xl text-black w-full max-w-md text-center shadow-md">
          <h3 className="text-xl font-bold">Your BMI: {bmiResult.bmi}</h3>
          <p>Status: {bmiResult.status}</p>
        </div>
      )}
    </div>
  );
};

export default OnboardingFlow;
