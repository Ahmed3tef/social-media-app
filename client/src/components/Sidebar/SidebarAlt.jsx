import React from 'react'
import { userImg } from '../../utils/sidebarData'
import { UserLink } from '..'

const SidebarAlt = () => {

  const suggestions = [...new Array(2)]
  const activities = [...new Array(4)]

  return (
    <div className="sidebar-alt">
      <div className="sidebar-alt-item" id='suggestions'>
        <h3>Suggestions For You</h3>
        {suggestions.map((e, i) => <div className="userInfo">
          <UserLink image={userImg} name={'Jane Doe'} />
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
        </div>)}
      </div>

      <div className="sidebar-alt-item" id='activities'>
        <h3>Latest Activities</h3>
        {activities.map((e, i) => <div className="userInfo">
          <UserLink image={userImg} name={'Jane Doe'} stats={'hanged their cover picture'} online />

          <span>1 min ago</span>
        </div>)}
      </div>
    </div>
  )
}

export default SidebarAlt