import React from 'react'
import { userImg } from '../../utils/sidebarData'

const Stories = () => {
  const stories = [...new Array(10)]

  return (
    <div className="stories">
      <div className="story">
        <img src={userImg} alt="" />
        <span>Ahmed</span>
        <button>+</button>
      </div>
      {stories.map((e, i) => (
        <div className="story" key={i}>
          <img src={userImg} alt="" />
          <span>Jane</span>
        </div>
      ))}
    </div>
  )
}

export default Stories