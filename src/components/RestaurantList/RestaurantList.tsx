import Restaurant from "@/components/Restaurant"
import type {RestaurantData, Cuisine} from "@/types"
import RestaurantListFilters from "@/components/RestaurantListFilters";

interface Props {
  filteredRestaurants: RestaurantData[]
  allRestaurantCuisines: Cuisine[]
}

const RestaurantList = ({filteredRestaurants, allRestaurantCuisines}: Props) => (
  <div className="p-4">
    <RestaurantListFilters
      allRestaurantCuisines={allRestaurantCuisines}
    />
    <div className="max-w-[300px] max-md:max-w-full">
      <ul className="
    flex
    flex-col
    gap-4
    w-full
    max-md:flex-row
    max-md:overflow-auto
    max-md:items-stretch
  ">
        {filteredRestaurants.map((item: RestaurantData) => (
          <li key={item.name}>
            <Restaurant restaurant={item}/>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default RestaurantList
