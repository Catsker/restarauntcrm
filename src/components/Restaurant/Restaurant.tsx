import type {RestaurantData, Dish} from "@/types";

interface Props {
  restaurant: RestaurantData;
}

const Restaurant = ({restaurant}: Props) => (
  <div className="border border-[#E1E1E1] rounded-xl p-3 min-w-[170px] h-full">
    <div className="flex flex-col gap-3 h-full">
      <ul className="grid grid-cols-4 gap-1">
        {restaurant.dishes.map((item: Dish) => (
          <li key={item.image} className="rounded-xl overflow-hidden flex">
            <img className="block object-cover w-full h-full" src={item.image}/>
          </li>
        ))}
      </ul>
      <div className="flex flex-col h-full gap-2">
        <div className="flex justify-between text-sm">
          <p className="font-bold">{restaurant.name}</p>
          <span className="font-thin text-[#8E8E8E]">{restaurant.distance}m</span>
        </div>
        <ul className="flex items-center gap-2 mt-auto text-sm">
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

export default Restaurant
