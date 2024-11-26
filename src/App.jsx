import { useEffect, useState } from "react";
import { getRoutes } from "./router/routes";
import Router from "./router/Router";

function App() {
  const [allRoutes, setAllRoutes] = useState([]);

  useEffect(() => {
    const routes = getRoutes()
    setAllRoutes([...allRoutes, routes])
  }, [])

  return <Router allRoutes={allRoutes} />
} 

export default App;