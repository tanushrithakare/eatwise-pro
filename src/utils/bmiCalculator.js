export const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
  
  let category = '';
  let color = '';
  let recommendation = '';
  
  if (bmi < 18.5) {
    category = 'Underweight';
    color = 'text-yellow-600';
    recommendation = 'Focus on nutrient-dense foods and strength training';
  } else if (bmi < 25) {
    category = 'Normal';
    color = 'text-green-600';
    recommendation = 'Maintain your healthy lifestyle!';
  } else if (bmi < 30) {
    category = 'Overweight';
    color = 'text-orange-600';
    recommendation = 'Consider a balanced diet and regular exercise';
  } else {
    category = 'Obese';
    color = 'text-red-600';
    recommendation = 'Consult a healthcare provider for a personalized plan';
  }
  
  return { bmi, category, color, recommendation };
};

export const getIdealWeight = (height, gender) => {
  const heightInMeters = height / 100;
  const bmi = gender === 'male' ? 22 : 21;
  return (bmi * heightInMeters * heightInMeters).toFixed(1);
};