import { getRecipe } from '@/features/recipes/apis';
import { useQuery } from '@tanstack/react-query';

export const useRecipeQuery = (recipeId: string) => {
  // return "tanstack-query"
  return useQuery({
    queryKey: ['recipe', recipeId],
    queryFn: () => getRecipe(recipeId),
  });
};
