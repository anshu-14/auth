
import { BrowserRouter,useRoutes  } from 'react-router-dom';
import AppRoutes from './routes';

function AppRoutesWrapper() {
  const routes = useRoutes(AppRoutes()); // Use the array with useRoutes
  return routes;
}
function App() {

const routes = AppRoutes();
  return (
    <BrowserRouter>
        <AppRoutesWrapper />
    </BrowserRouter>
  )
}

export default App
