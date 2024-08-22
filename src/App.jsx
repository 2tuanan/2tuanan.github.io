import { useEffect, useState } from 'react';
import Router from './router/Router';
import { getRoutes } from './router/routes';

function App() {
  const [allRoutes, setAllRoutes] = useState([])
  // console.log(allRoutes);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, [allRoutes]);
  
  return <Router allRoutes={allRoutes}/>
}

export default App;
