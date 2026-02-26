import React from 'react'
import {getRouteApi} from '@tanstack/react-router'
import Aside from "@/components/Aside";
import {useRecipes} from "@/shared/lib/useRecipes.ts";
import Recipe from "@/components/Recipe";
import {useTableOrders, useToggleDish} from '@/shared/lib/useOrders.ts';
import {TABLES_LIST} from "@/consts"
import {Link} from "@tanstack/react-router";
import type {RecipeType, TableStatus} from "@/types";

const routeApi = getRouteApi('/tables/$n')

const TablePage: React.FC = () => {

  const {data, isError, isLoading} = useRecipes()

  const {n} = routeApi.useParams()
  const tableNumber = Number(n)

  const {currentTableDishes} = useTableOrders(tableNumber)

  const allRecipes = data ?? []

  const toggleDishMutation = useToggleDish()

  const handleRecipeSelected = (item: RecipeType) => {
    const isSelected = currentTableDishes.some((dish: RecipeType) => dish.id === item.id)

    toggleDishMutation.mutate({
      tableId: tableNumber,
      dish: item,
      isAlreadySelected: isSelected,
    })
  }

  const getTableStatus = (tableNumber: number): TableStatus | undefined => {
    const table = TABLES_LIST.find(table => table.tableNumber === tableNumber);
    return table?.status;
  };

  if (isLoading) return <div className="p-6">Loading...</div>
  if (isError || !data) return <div className="p-6 text-red-500">Error</div>

  return (
    <div className="flex">
      <Aside/>
      <div className="w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Table №{tableNumber}</h1>

        {(currentTableDishes.length === 0 && getTableStatus(tableNumber) === "reserved") ? (
          <div>
            <p>Table is Reserved! Select another one.</p>
            <Link to="/tables" className="text-blue-400">Go to /tables</Link>
          </div>
        ) : (
          <ul className="grid grid-cols-5 gap-4">
            {allRecipes.map((item) => (
              <li key={item.id} className="p-6 rounded-xl bg-[#F9F9F9]">
                <Recipe
                  recipe={item}
                  isRecipeSelected={currentTableDishes.some((dish) => dish.id === item.id)}
                  handleOrder={() => handleRecipeSelected(item)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TablePage
