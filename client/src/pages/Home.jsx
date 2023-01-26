import React from 'react'
import { Posts, Stories } from '../components'

const Home = () => {
  return (
    <div className='w-[62vw] flex flex-col px-[4rem] md:px-[6rem] lg:px-[10rem]'>
      <Stories />
      <Posts />
    </div>
  )
}

export default Home