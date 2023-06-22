import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeroApp } from './HeroApp.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HeroAppRouter } from './router/HeroAppRouter.jsx';


const router = HeroAppRouter()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
