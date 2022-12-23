import React from 'react'
import { MdOutlineHome, MdGridView, MdOutlineDarkMode, MdMailOutline, MdPersonOutline, MdNotificationsNone } from 'react-icons/md';
import { SearchBar, UserLink } from '..';
import { userImg } from '../../utils/sidebarData';
const Navbar = () => {
  return (
    <nav id='navbar'>

      <div className='logo-container'>
        <div className="logo">
          Logo
        </div>
        <div className="nav-icons">
          <MdOutlineHome />
          <MdGridView />
          <MdOutlineDarkMode />
        </div>
      </div>

      <SearchBar />

      <div className="user-container">
        <div className="nav-icons">

          <MdPersonOutline />
          <MdMailOutline />
          <MdNotificationsNone />
        </div>
        <UserLink image={userImg} name={'Ahmed Atef'} />
      </div>
    </nav>
  )
}

export default Navbar