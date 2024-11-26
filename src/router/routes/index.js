import MainLayout from "../../layout/MainLayout"
import { navRoutes } from "./navRoutes"

export const getRoutes = () => {
    return {
        path: '/',
        element: <MainLayout />,
        children: navRoutes
    }
}