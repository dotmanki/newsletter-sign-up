import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import Success from './pages/Success'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import GlobalStyles from './utils/GlobalStyles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/success',
    element: <Success />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
