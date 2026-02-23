import MainLogo from '@/assets/icons/mainlogo.svg'
import Employess from '@/assets/icons/employess.svg'
import Tables from '@/assets/icons/tables.svg'
import LogOut from '@/assets/icons/logout.svg'
import Branches from '@/assets/icons/branches.svg'
import type {TableType} from '@/types'

export const ASIDE_ICONS = {
  MAIN_LOGO: MainLogo,
  EMPLOYESS: Employess,
  TABLES: Tables,
  LOGOUT: LogOut,
  BRANCHES: Branches,
} as const

export const TABLES_LIST: TableType[] = [
  { tableNumber: 1, status: "free" },
  { tableNumber: 2, status: "occupied" },
  { tableNumber: 3, status: "reserved" },
  { tableNumber: 4, status: "reserved" },
  { tableNumber: 5, status: "free" },
  { tableNumber: 6, status: "occupied" },
  { tableNumber: 7, status: "free" },
  { tableNumber: 8, status: "reserved" },
  { tableNumber: 9, status: "occupied" },
  { tableNumber: 10, status: "free" },
  { tableNumber: 11, status: "reserved" },
  { tableNumber: 12, status: "occupied" },
  { tableNumber: 13, status: "free" },
  { tableNumber: 14, status: "reserved" },
  { tableNumber: 15, status: "occupied" },
  { tableNumber: 16, status: "free" },
  { tableNumber: 17, status: "reserved" },
  { tableNumber: 18, status: "occupied" },
  { tableNumber: 19, status: "free" },
  { tableNumber: 20, status: "reserved" },
]
