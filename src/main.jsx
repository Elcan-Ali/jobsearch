import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/Routing.jsx'
import "./assets/style/index.css"
import "./assets/style/style.css"


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}  />
)
