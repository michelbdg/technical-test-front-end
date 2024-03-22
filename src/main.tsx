import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.tsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
