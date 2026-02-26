import MainLogo from '@/assets/icons/mainlogo.svg'
import Orders from '@/assets/icons/orders.svg'
import Tables from '@/assets/icons/tables.svg'
import LogOut from '@/assets/icons/logout.svg'
import Branches from '@/assets/icons/branches.svg'
import type {TableType} from '@/types'

export const ASIDE_ICONS = {
  MAIN_LOGO: MainLogo,
  ORDERS: Orders,
  TABLES: Tables,
  LOGOUT: LogOut,
  BRANCHES: Branches,
} as const

export const TABLES_LIST: TableType[] = [
  { tableNumber: 1, status: "free" },
  { tableNumber: 2, status: "free" },
  { tableNumber: 3, status: "reserved" },
  { tableNumber: 4, status: "reserved" },
  { tableNumber: 5, status: "free" },
  { tableNumber: 6, status: "free" },
  { tableNumber: 7, status: "free" },
  { tableNumber: 8, status: "reserved" },
  { tableNumber: 9, status: "free" },
  { tableNumber: 10, status: "free" },
  { tableNumber: 11, status: "reserved" },
  { tableNumber: 12, status: "free" },
  { tableNumber: 13, status: "free" },
  { tableNumber: 14, status: "reserved" },
  { tableNumber: 15, status: "free" },
  { tableNumber: 16, status: "free" },
  { tableNumber: 17, status: "reserved" },
  { tableNumber: 18, status: "free" },
  { tableNumber: 19, status: "free" },
  { tableNumber: 20, status: "reserved" },
]
