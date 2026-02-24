import axios from 'axios'
import type { RestaurantData } from '@/types'

export const getRestaurants = async (): Promise<RestaurantData[]> => {
  try {
    const { data } = await axios.get('/Restaurants.json')

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Не удалось загрузить список ресторанов')
    }

    throw new Error('Непредвиденная ошибка при загрузке данных')
  }
}
