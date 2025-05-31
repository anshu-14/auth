// src/routes/index.jsx
import { Navigate } from 'react-router-dom';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Preferences from '../components/Preferences';
import About from '../components/About';
import ThemeSetting from '../components/ThemeSetting';

import MainLayout from '../layout/MainLayout';

import { useAuth } from '../auth/AuthContext';
    
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default function AppRoutes ()  {
  return [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/',
      element: <PrivateRoute><MainLayout /></PrivateRoute>,
      children: [
        
        { path: 'profile', element: <Profile /> },
        { path: 'home', element: <Home /> },
        { path: 'theme', element: <ThemeSetting /> },
    
         { path: 'settings/preferences', element: <Preferences /> },
        { path: 'settings/about', element: <About /> },
      ],
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
  ];
};


