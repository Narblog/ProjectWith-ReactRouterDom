import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root'
import Composers, { getComposers } from './components/Composer'
import AddWork from './components/AddWork'
import AddComposer, { addComposerAction } from './components/AddComposer'
import Profile from './components/Profile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<h1>Not Found</h1>,
    children:[
      {
        path:"/composers",
        element:<Composers/>,
        loader: getComposers
      },
      {
        path:"/addWork",
        element:<AddWork/>,
        loader:getComposers
      },
      {
        path:"/addComposers",
        element:<AddComposer/>,
        action:addComposerAction
      },
      {
        path:"/composer/:id",
        element:<Profile/>
      }
    ]
  }
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
