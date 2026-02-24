import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect
} from '@tanstack/react-router'
import type { Cuisine } from "@/types";
import {getStoredUser} from '@/shared/lib/useAuth'
import HomePage from '@/pages/HomePage'
import LoginPage from "@/pages/LoginPage";
import TablesPage from "@/pages/TablesPage"

const rootRoute = createRootRoute({
  component: () => (
    <Outlet/>
  ),
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',

  validateSearch: (search: Record<string, unknown>) => {
    return {
      cuisines: search.cuisines
        ? Array.isArray(search.cuisines)
          ? (search.cuisines as Cuisine[])
          : ([search.cuisines] as Cuisine[])
        : undefined,
    }
  },

  beforeLoad: () => {
    const user = getStoredUser()
    if (!user) {
      throw redirect({to: '/login'})
    }
  },
  component: HomePage,
})

export const tablesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tables',
  beforeLoad: () => {
    const user = getStoredUser()

    if (!user) {
      throw redirect({to: '/login'})
    }
  },
  component: TablesPage,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  beforeLoad: () => {
    const user = getStoredUser()

    if (user) {
      throw redirect({to: '/'})
    }
  },
  component: LoginPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  tablesRoute
])

export const router = createRouter({routeTree})
