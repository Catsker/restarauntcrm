import type { Cuisine } from "@/types";
import { getRouteApi } from '@tanstack/react-router';

const routeApi = getRouteApi('/');

interface Props {
  allRestaurantCuisines: Cuisine[]
}

const RestaurantListFilters = ({ allRestaurantCuisines }: Props) => {
  const { cuisines } = routeApi.useSearch();

  const navigate = routeApi.useNavigate();

  const selectedCuisines = cuisines || [];

  const toggleCuisine = (cuisine: Cuisine) => {
    const isSelected = selectedCuisines.includes(cuisine);

    const newCuisines = isSelected
      ? selectedCuisines.filter((c) => c !== cuisine)
      : [...selectedCuisines, cuisine];

    navigate({
      search: (prev) => ({
        ...prev,
        cuisines: newCuisines.length > 0 ? newCuisines : undefined,
      }),
    });
  };

  return (
    <ul className="flex flex-wrap gap-2 mb-4">
      {allRestaurantCuisines.map((item) => (
        <li key={item}>
          <button
            className={`p-2 text-xs border rounded-[999px] hover:bg-amber-200 ${
              selectedCuisines.includes(item) ? 'bg-amber-100' : ''
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
