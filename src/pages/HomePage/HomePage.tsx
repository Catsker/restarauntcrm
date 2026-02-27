import React from 'react'
import { useRestaurants } from "@/shared/lib/useRestaurants.ts"
import RestaurantList from '@/components/RestaurantList'
import Aside from '@/components/Aside'
import MapComponent from "@/components/MapComponent"
import { indexRoute } from '@/app/router.tsx'

const HomePage: React.FC = () => {
  const { data, isLoading, error } = useRestaurants()
  const search = indexRoute.useSearch()

  const selectedCuisines = search.cuisines ?? []

  if (isLoading) return <div>Loading...</div>
  if (error || !data) return <div>Error loading restaurants</div>

  const filteredRestaurants =
    selectedCuisines.length === 0
      ? data
      : data.filter(restaurant => selectedCuisines.includes(restaurant.cuisine))

  const allCuisines = [...new Set(data.map(r => r.cuisine))]

  return (
    <div className="flex max-md:flex-col">
      <Aside />
      <div className="flex-1">
        <RestaurantList
          filteredRestaurants={filteredRestaurants}
          allRestaurantCuisines={allCuisines}
        />
      </div>
      <div className="w-full h-screen]">
        <MapComponent
          restaurants={filteredRestaurants}
        />
      </div>
    </div>
  )
}

export default HomePage
