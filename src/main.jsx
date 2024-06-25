import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Login from './Component/Login.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[

      {
        path:"/",
        element:<Home/>,
       

       

      },
   
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
