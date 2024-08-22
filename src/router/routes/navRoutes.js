import { lazy } from "react";
const Home = lazy(() => import('../../views/pages/Home'))
const About = lazy(() => import('../../views/pages/About'))
const Portfolio = lazy(() => import('../../views/pages/Portfolio'))
const Contact = lazy(() => import('../../views/pages/Contact'))

export const navRoutes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/portfolio',
        element: <Portfolio/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
]