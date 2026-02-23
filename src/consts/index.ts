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
  { tableNumber: 1, status: "Free" },
  { tableNumber: 2, status: "Occ" },
  { tableNumber: 3, status: "Res" },
  { tableNumber: 4, status: "Res" },
  { tableNumber: 5, status: "Free" },
  { tableNumber: 6, status: "Occ" },
  { tableNumber: 7, status: "Free" },
  { tableNumber: 8, status: "Res" },
  { tableNumber: 9, status: "Occ" },
  { tableNumber: 10, status: "Free" },
  { tableNumber: 11, status: "Res" },
  { tableNumber: 12, status: "Occ" },
  { tableNumber: 13, status: "Free" },
  { tableNumber: 14, status: "Res" },
  { tableNumber: 15, status: "Occ" },
  { tableNumber: 16, status: "Free" },
  { tableNumber: 17, status: "Res" },
  { tableNumber: 18, status: "Occ" },
  { tableNumber: 19, status: "Free" },
  { tableNumber: 20, status: "Res" },
]
