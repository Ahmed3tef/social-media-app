import React from 'react'
import { Login, Register, Home, Profile } from './pages'
import { Navigate, Outlet, Route, Routes } from 'react-router'
import { Navbar, Sidebar, SidebarAlt } from './components'


const isLoggedIn = true;
const MainLayout = () => {
  return (
    <div className='flex flex-col w-[100vw] min-h-[100vh]'>
      <Navbar />
      <main>
        <Sidebar />
        <Outlet />
        <SidebarAlt />
      </main>
    </div>
  )
}

// this is to check if user is logged in or not and if not navigate him/her to login page. 

const ProtectedRoutes = ({ children }) => {
  if (!isLoggedIn) {
    return <Navigate to='/login' />
  }
  return children;
}


const App = () => {




  return (

    <main>
      <Routes>
        <Route path='/' element={<ProtectedRoutes>
          <MainLayout /></ProtectedRoutes>} >
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </main>

  )
}

export default App
