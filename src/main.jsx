import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/About",
    element: <About />
  },
  {
    path:"/Projects",
    element:<Projects />
  },
  {
    path:"/Contact",
    element:<Contact />
  }
]);
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights />
  </StrictMode>,
)
