import Header from "../../layout/Header"
import { navRoutes } from "./navRoutes"

export const getRoutes = () => {
    return {
        path: '/',
        element: <Header />,
        children: navRoutes
    }
}