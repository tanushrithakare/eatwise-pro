export const calculateBMR = (weight, height, age, gender) => {
  // Mifflin-St Jeor Equation
  if (gender === 'male') {
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    return (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
};

export const calculateTDEE = (bmr, activityLevel) => {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9
  };
  
  return Math.round(bmr * (activityMultipliers[activityLevel] || 1.2));
};

export const calculateCalorieGoal = (tdee, goal) => {
  switch(goal) {
    case 'lose':
      return Math.round(tdee - 500); // 500 calorie deficit
    case 'gain':
      return Math.round(tdee + 500); // 500 calorie surplus
    case 'muscle':
      return Math.round(tdee + 300); // 300 calorie surplus
    case 'maintain':
    default:
      return tdee;
  }
};

export const calculateMacros = (calories, goal) => {
  let proteinPercent, carbPercent, fatPercent;
  
  switch(goal) {
    case 'lose':
      proteinPercent = 0.40;
      carbPercent = 0.35;
      fatPercent = 0.25;
      break;
    case 'gain':
    case 'muscle':
      proteinPercent = 0.30;
      carbPercent = 0.45;
      fatPercent = 0.25;
      break;
    case 'maintain':
    default:
      proteinPercent = 0.30;
      carbPercent = 0.40;
      fatPercent = 0.30;
  }
  
  return {
    protein: Math.round((calories * proteinPercent) / 4), // 4 cal per gram
    carbs: Math.round((calories * carbPercent) / 4),
    fat: Math.round((calories * fatPercent) / 9) // 9 cal per gram
  };
};