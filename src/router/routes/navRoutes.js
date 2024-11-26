import { lazy } from "react"
const Home = lazy(() => import('../../view/pages/Home'))

export const navRoutes = [
    {
        path: '/',
        element: <Home />
    }
]