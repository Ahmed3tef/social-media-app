import React from 'react'

const UserLink = ({ image, name, stats, online }) => {
  return (
    <div className="user">
      <div className="user-image">
        <img src={image} alt="user image" />
        {online && <span className="user-online"></span>}
      </div>
      <span>{name}</span>
      {stats ? stats : ''}
    </div>
  )
}

export default UserLink