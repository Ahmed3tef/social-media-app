import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchBar = () => {
  return (
    <div className="search">
      <MdSearch className='text-[2.4rem]' />
      <input type="text" placeholder='Search...' />
    </div>
  )
}

export default SearchBar