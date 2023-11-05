import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import AuthContext from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContext>
        <RouterProvider router={Routes} />
      </AuthContext>
    </ThemeProvider>
    <Toaster />
  </React.StrictMode>,
)
