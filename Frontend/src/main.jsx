import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/lara-dark-indigo/theme.css'// theme
import 'primereact/resources/primereact.min.css'                 // Core CSS
import 'primeicons/primeicons.css'                               // Icons
import 'primeflex/primeflex.css'  
import { PrimeReactProvider } from 'primereact/api'
import { AuthProvider } from './auth/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider value={{// here primereactprovider sets global config for the project like input filed style and we can also set local setting
      ripple: true,
      inputStyle: 'filled' 
    }}>
      <AuthProvider>

    <App />
      </AuthProvider>
    </PrimeReactProvider>
  
  </StrictMode>,
)
