import { VITE_API_URL } from '@/config/env';
import { GetRecipe } from '@/features/recipes/types';

export const getRecipe = async (recipeId: string): GetRecipe => {
  // Prepare url
  const url = `${VITE_API_URL}/recipes/${recipeId}`;

  // Fetch data
  const response = await fetch(url);
  return response.json();
};
