import type { Cuisine } from "@/types";
import { useSearch, useNavigate } from '@tanstack/react-router'

interface Props {
  allRestaurantCuisines: Cuisine[]
}

const RestaurantListFilters = ({ allRestaurantCuisines }: Props) => {
  const currentSearch = useSearch({ from: '/' })
  const cuisines = currentSearch.cuisines || []

  const navigate = useNavigate()

  const toggleCuisine = (cuisine: Cuisine) => {
    const isSelected = cuisines.includes(cuisine)

    const updated = isSelected
      ? cuisines.filter((c: Cuisine) => c !== cuisine)
      : [...cuisines, cuisine]

    navigate({
      to: '/',
      search: {
        ...currentSearch,
        cuisines: updated.length ? updated : undefined,
      }
    })
  }

  return (
    <ul className="flex flex-wrap gap-2 mb-4 max-md:w-full">
      {allRestaurantCuisines.map((item) => (
        <li key={item} className="max-md:flex-grow">
          <button
            className={`p-2 text-xs border rounded-[999px] hover:bg-amber-200 w-full ${
              cuisines.includes(item) ? 'bg-amber-100' : ''
            }`}
            onClick={() => toggleCuisine(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default RestaurantListFilters
