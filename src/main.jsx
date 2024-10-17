import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import Booking from './pages/Booking.jsx'
import Review from './pages/Review.jsx'
import Tour from './pages/Tour.jsx'
import Tourist from './pages/Tourist.jsx'


const router = createBrowserRouter([
  {
    path: "/PTS-FE_AzhfarIbrahim",
    element: <LoginPage />
  },
  {
    path: "/PTS-FE_AzhfarIbrahim/booking",
    element: <Booking />
  },
  {
    path: "/PTS-FE_AzhfarIbrahim/review",
    element: <Review />
  },
  {
    path: "/PTS-FE_AzhfarIbrahim/tour",
    element: <Tour />
  },
  {
    path: "/PTS-FE_AzhfarIbrahim/tourist",
    element: <Tourist />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
