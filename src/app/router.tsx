import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
    redirect
} from '@tanstack/react-router'
import {getStoredUser} from '@/shared/lib/useAuth'
import HomePage from '@/pages/HomePage'
import LoginPage from "@/pages/LoginPage";

const rootRoute = createRootRoute({
    component: () => (
        <Outlet/>
    ),
})

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    beforeLoad: () => {
        const user = getStoredUser()

        if (!user) {
            throw redirect({to: '/login'})
        }
    },
    component: HomePage,
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
    loginRoute
])

export const router = createRouter({routeTree})
