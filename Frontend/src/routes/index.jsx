// src/routes/index.jsx
import { Navigate } from 'react-router-dom';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Home from '../components/Home';

import { useAuth } from '../auth/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return [
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/home',
      element: (
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      ),
    },
    // add more routes here...
  ];
};

export default AppRoutes;
