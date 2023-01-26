import React from 'react'
import { userImg } from '../../utils/sidebarData'
import { UserLink } from '..'

const SidebarAlt = () => {

  const suggestions = [...new Array(2)]
  const activities = [...new Array(4)]
  const friends = [...new Array(8)]

  return (
    <div className="sidebar-alt">
      <div className="sidebar-alt-item" id='suggestions'>
        <h3>Suggestions For You</h3>
        {suggestions.map((e, i) => <div className="userInfo" key={i}>
          <UserLink image={userImg} name={'Jane Doe'} />
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
        </div>)}
      </div>

      <div className="sidebar-alt-item" id='activities'>
        <h3>Latest Activities</h3>
        {activities.map((e, i) => <div className="userInfo" key={i}>
          <UserLink image={userImg} name={'Jane Doe'} stats={'hanged their cover picture'} online />

          <span>1 min ago</span>
        </div>)}
      </div>
      <div className="sidebar-alt-item" id='activities'>
        <h3>Online Friends</h3>
        {friends.map((e, i) => <div className="userInfo" key={i}>
          <UserLink image={userImg} name={'Jane Doe'} online />


        </div>)}
      </div>
    </div>
  )
}

export default SidebarAlt