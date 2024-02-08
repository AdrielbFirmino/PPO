import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { GlobalStyled } from './GlobalStyled.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import HomeForum from './pages/Forum/HomeForum.jsx'
import Search from './pages/Search/Search.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomeForum />
      },
      {
        path: "/search/:title",
        element: <Search />
      }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
