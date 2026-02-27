import type {RecipeType} from "@/types";

export type TablesState = Record<number, RecipeType[]>

const STORAGE_KEY = 'restaurant_tables_orders'

export const getTablesOrders = async (): Promise<TablesState> => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : {}
}

export const clearTableInStorage = async (tableId: number) => {
  const storedData = localStorage.getItem(STORAGE_KEY)
  const currentOrders: Record<number, RecipeType[]> = storedData ? JSON.parse(storedData) : {}

  if (currentOrders[tableId]) {
    delete currentOrders[tableId]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentOrders))
  }

  return currentOrders
}
