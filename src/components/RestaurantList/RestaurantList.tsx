import React from "react"
import Restaurant from "@/components/Restaurant"
import type {RestaurantData} from "@/types"
import restaurantsData from '@/data/restaurants.json';

const restaurants = restaurantsData as RestaurantData[];

const RestaurantList: React.FC = () => {
  return (
    <div className="p-6 max-w-[300px]">
      <ul className="flex flex-col gap-4">
        {restaurants.map((restaurant: RestaurantData) => (
          <li key={restaurant.address}>
            <Restaurant restaurant={restaurant}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantList
