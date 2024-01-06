import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import AuthContext from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SkeletonTheme } from 'react-loading-skeleton'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <SkeletonTheme baseColor="#82828233" highlightColor="#82828233">
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={Routes} />
          </QueryClientProvider>
        </ThemeProvider>
      </SkeletonTheme>
    </AuthContext>
    <Toaster containerStyle={{zIndex: 11111}} />
  </React.StrictMode >,
)
