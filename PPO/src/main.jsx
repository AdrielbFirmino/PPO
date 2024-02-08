import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { GlobalStyled } from './GlobalStyled.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import HomeForum from './pages/Forum/HomeForum.jsx'
import Search from './pages/Search/Search.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import SignIn from './pages/Authentication/Signin.jsx'
import SignUp from './pages/Authentication/Signup.jsx'
import Profile from './pages/Profile/Profile.jsx'

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
      },
      {
        path: "/profile",
        element: <Profile />
      },
    ]
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
