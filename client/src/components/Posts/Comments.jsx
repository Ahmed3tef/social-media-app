import React, { useState } from 'react'
import { userImg } from '../../utils/sidebarData'

const Comments = ({ comments }) => {
  const d_comments = [...new Array(3)]

  const [desc, setDesc] = useState('')
  return (
    <div className="post-comments">
      <div className=" user write">
        <div className="user-image">

          <img src={userImg} alt="" />
        </div>
        <input
          type="text"
          placeholder="write a comment"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
        // onClick={handleClick}
        >Send</button>
      </div>
      {
        d_comments.map((e, i) => <div className='comment' key={i}>
          <div className="user-image rounded-full overflow-hidden">

            <img src={userImg} alt="" />
          </div>

          <div className="info">
            <span>{'Ahmed'}</span>
            <p>{'kasjdnfkjansdkfjnaskdjfn k asjndfkajsndf kasjnd fasdkj fnasdk jfnasdkf jasnfk jasndf kjasnf kjasn fkasjn fksdaj fnasdkj fnasdkdf jn'}</p>
          </div>
          <span className="date">
            1 min ago
          </span>
        </div>
        )
      }
    </div>
  )
}

export default Comments