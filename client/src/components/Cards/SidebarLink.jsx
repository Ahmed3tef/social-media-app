import React from 'react'

const SidebarLink = ({ title, image }) => {
  return (
    <div className='sidebar-link'>
      <img src={image} alt="category image" />
      <h3>{title} </h3>
    </div>
  )
}

export default SidebarLink