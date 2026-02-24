import { useQuery } from '@tanstack/react-query'
import { getRestaurants } from '@/shared/api/restaurants'
import type { RestaurantData } from '@/types'

export const useRestaurants = () => {
  return useQuery<RestaurantData[]>({
    queryKey: ['restaurants'],
    queryFn: getRestaurants,
  })
}
