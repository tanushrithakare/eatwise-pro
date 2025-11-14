export const calculateBMI = (weight, height) => {
  const h = height / 100; // cm to meters
  return +(weight / (h * h)).toFixed(1);
};

export const getBMIStatus = (bmi) => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};
