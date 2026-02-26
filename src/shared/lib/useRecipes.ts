import { useQuery } from '@tanstack/react-query'
import { getRecipes } from '@/shared/api/recipes'
import type { RecipeType } from '@/types'

export const useRecipes = () => {
  return useQuery<RecipeType[]>({
    queryKey: ['recipes'],
    queryFn: getRecipes,
  })
}
