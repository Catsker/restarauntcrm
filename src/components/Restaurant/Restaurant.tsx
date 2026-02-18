import React from "react"
import type {RestaurantData, Dish} from "@/types";

interface Props {
  restaurant: RestaurantData;
}

const Restaurant: React.FC<Props> = ({restaurant}) => {
  return (
    <div className="border border-[#E1E1E1] rounded-xl p-3">
      <div className="flex flex-col gap-3">
        <ul className="flex gap-1">
          {restaurant.dishes.map((item: Dish) => (
            <li key={item.name} className="rounded-xl overflow-hidden">
              <img className="" src={item.image} alt=""/>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm">
            <p className="font-bold">{restaurant.name}</p>
            <span className="font-thin text-[#8E8E8E]">{restaurant.distance}m</span>
          </div>
          <ul className="flex items-center gap-2 text-sm">
            <li className="block text-[#8E8E8E]">{restaurant.city}</li>
            <li className="h-1 w-1 bg-[#8E8E8E] rounded-full"></li>
            <li className="block text-[#8E8E8E]">{restaurant.cuisine}</li>
            <li className="h-1 w-1 bg-[#8E8E8E] rounded-full"></li>
            <li className="block text-[#8E8E8E]">{restaurant.rate}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
