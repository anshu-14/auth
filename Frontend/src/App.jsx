
import { BrowserRouter,useRoutes  } from 'react-router-dom';
import AppRoutes from './routes';

const AppRoutesWrapper = () => useRoutes(AppRoutes());
function App() {

const routes = AppRoutes();
  return (
    <BrowserRouter>
        <AppRoutesWrapper />
    </BrowserRouter>
  )
}

export default App
