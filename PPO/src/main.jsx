import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { GlobalStyled } from './GlobalStyled.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import HomeForum from './pages/Forum/HomeForum.jsx'
import HomeSongs from './pages/HomeSongs/HomeSongs.jsx'
import Search from './pages/Search/Search.jsx'
import SearchSong from './pages/Search/SearchSong.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import SignIn from './pages/Authentication/Signin.jsx'
import SignUp from './pages/Authentication/Signup.jsx'
import Profile from './pages/Profile/Profile.jsx'
import ProfileSong from './pages/ProfileSong/ProfileSong.jsx'
import UserProvider from './Context/UserContext.jsx'
import Post from './pages/Post/Post.jsx'

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
        path: "/home/songs",
        element: <HomeSongs />
      },
      {
        path: "/search/:title",
        element: <Search />
      },
      {
        path: "/search/song/:title",
        element: <SearchSong />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/profile/songs",
        element: <ProfileSong/>
      },
      {
        path: "/post/:id",
        element: <Post />
      }
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
    <UserProvider>
      <RouterProvider router={router}/>
    </UserProvider>
  </React.StrictMode>,
)
