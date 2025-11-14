import React from 'react';
import { stateRecipes } from '../data/recipes';

const RecipesTab = () => {
  // Convert object into array of recipes
  const allRecipes = Object.values(stateRecipes).flat(); // flatten to a single array

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Recipes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allRecipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <h3 className="text-xl font-semibold mb-1">{recipe.name}</h3>
            <p className="text-gray-600 mb-2">{recipe.description}</p>
            <div className="text-sm text-gray-700 mb-2">
              <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
            </div>
            <div className="text-sm text-gray-700">
              <strong>Calories:</strong> {recipe.calories} kcal |{' '}
              <strong>Protein:</strong> {recipe.protein}g |{' '}
              <strong>Carbs:</strong> {recipe.carbs}g
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesTab;
