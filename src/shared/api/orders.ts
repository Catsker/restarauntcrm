import type {RecipeType} from "@/types";

export type TablesState = Record<number, RecipeType[]>

const STORAGE_KEY = 'restaurant_tables_orders'

export const getTablesOrders = async (): Promise<TablesState> => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : {}
}
