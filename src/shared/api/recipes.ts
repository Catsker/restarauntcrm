import axios from 'axios'
import type { RecipeType, RecipesResponse } from '@/types'

export const getRecipes = async (): Promise<RecipeType[]> => {
  try {
    const { data } = await axios.get<RecipesResponse>('https://dummyjson.com/recipes', {
      params: {
        select: 'id,name,prepTimeMinutes,cookTimeMinutes,caloriesPerServing,image,rating'
      }
    })

    return data.recipes
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Ошибка при загрузке рецептов')
    }
    throw new Error('Непредвиденная ошибка')
  }
}
