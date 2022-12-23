import React, { useEffect, useState } from 'react'
import { sidebarMainData, userImg } from '../../utils/sidebarData'
import { SidebarLink, UserLink } from '..'

const Sidebar = () => {

  const [navHeight, setNavHeight] = useState(0)
  useEffect(() => {
    const navH = document.getElementById('navbar').clientHeight
    setNavHeight(navH)
    console.log(navH);
  }, [])

  return (
    <div className="sidebar-main" style={{
      height: `calc(100vh - ${navHeight}px)`,
      top: `${navHeight}px`
    }}>
      <UserLink image={userImg} name={'Ahmed Atef'} />
      <div className="sidebar-links">
        {
          sidebarMainData[0].map((e, i) => <SidebarLink key={i} image={e.image} title={e.title} />)
        }
        <hr />
      </div>
      <div className="sidebar-links">
        <h2>Your shortcuts</h2>
        {
          sidebarMainData[1].map((e, i) => <SidebarLink key={i} image={e.image} title={e.title} />)
        }
        <hr />
      </div>
      <div className="sidebar-links">
        <h2>Others</h2>
        {
          sidebarMainData[2].map((e, i) => <SidebarLink key={i} image={e.image} title={e.title} />)
        }
      </div>
    </div>
  )
}

export default Sidebar