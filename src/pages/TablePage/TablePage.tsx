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

  const isValidTable = TABLES_LIST.some(table => table.tableNumber === tableNumber)

  const {currentTableDishes} = useTableOrders(tableNumber)

  const toggleDishMutation = useToggleDish()

  const handleRecipeSelected = (item: RecipeType) => {
    toggleDishMutation.mutate({
      tableId: tableNumber,
      dish: item,
    })
  }

  const getTableStatus = (tableNumber: number): TableStatus | undefined => {
    const table = TABLES_LIST.find(table => table.tableNumber === tableNumber);
    return table?.status;
  };

  if (isLoading) return <div className="p-6">Loading...</div>
  if (isError || !data || data.length === 0) return <div className="p-6 text-red-500">Error</div>
  if (!isValidTable) return (
    <div className="p-6">
      <div className="p-6 rounded-2xl bg-[#F9F9F9] flex flex-col gap-3">
        <p>Table №{tableNumber} does not exist. Please, select valid table from the list</p>
        <Link className="text-blue-400" to="/tables">Go to /tables</Link>
      </div>
    </div>
  )

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
            {data.map((item) => {
              const isSelected = currentTableDishes.some((dish) => dish.id === item.id)

              return (
                <li key={item.id} className="p-6 rounded-xl bg-[#F9F9F9] shadow-sm">
                  <Recipe
                    recipe={item}
                    isRecipeSelected={isSelected}
                    handleOrder={() => handleRecipeSelected(item)}
                  />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TablePage
