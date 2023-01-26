import React from 'react'
import { Link } from 'react-router-dom'

const UserLink = ({ image, name, stats, online, id }) => {

  return (
    <div className="user">
      <Link to={`/profile/${id ? id : 1}`}>

        <div className="user-image">
          <img src={image} alt="user image" />
          {online && <span className="user-online"></span>}
        </div>
      </Link>
      <div className='user-text'>
        <span className="name">{name}</span>
        {stats && <span className="stats">{stats}</span>}
      </div>

    </div>
  )
}

export default UserLink