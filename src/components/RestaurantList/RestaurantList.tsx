import React from "react"
import Restaurant from "@/components/Restaurant"
import type {RestaurantData} from "@/types"
import {RESTAURANTS} from "@/consts";
import MainLogo from "@/assets/icons/mainlogo.svg"

const RestaurantList: React.FC = () => {
  return (
    <div className="p-6 max-w-[300px]">
      <ul className="flex flex-col gap-4">
        {RESTAURANTS.map((restaurant: RestaurantData) => {
          return (
            <li key={restaurant.address}>
              <Restaurant
                restaurant={restaurant}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RestaurantList
