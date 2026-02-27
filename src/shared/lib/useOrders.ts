import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getTablesOrders, clearTableInStorage } from '@/shared/api/orders'
import type { RecipeType } from "@/types";

const STORAGE_KEY = 'restaurant_tables_orders'

export const useTableOrders = (tableId?: number) => {
  const query = useQuery({
    queryKey: ['tables_orders'],
    queryFn: getTablesOrders,
  })

  const allTables = query.data || {}
  const currentTableDishes = tableId !== undefined ? (allTables[tableId] || []) : []

  return {
    ...query,
    currentTableDishes,
    allTables
  }
}

interface ToggleDishParams {
  tableId: number;
  dish: RecipeType;
}

const toggleDishInStorage = async ({ tableId, dish }: ToggleDishParams) => {
  const storedData = localStorage.getItem(STORAGE_KEY)
  const currentOrders: Record<number, RecipeType[]> = storedData ? JSON.parse(storedData) : {}

  if (!currentOrders[tableId]) {
    currentOrders[tableId] = []
  }

  const isCurrentlySelected = currentOrders[tableId].some(d => d.id === dish.id)

  if (isCurrentlySelected) {
    currentOrders[tableId] = currentOrders[tableId].filter(d => d.id !== dish.id)
  } else {
    currentOrders[tableId].push(dish)
  }

  if (currentOrders[tableId].length === 0) {
    delete currentOrders[tableId]
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentOrders))
  return currentOrders
}

export const useToggleDish = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: toggleDishInStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tables_orders'] })
    }
  })
}

export const useClearTable = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: clearTableInStorage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tables_orders'] })
    }
  })
}
