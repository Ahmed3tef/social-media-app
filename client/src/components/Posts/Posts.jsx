import React from 'react'
import Post from './Post'

const Posts = () => {
  const posts = [...new Array(4)]

  return (
    <div className='posts'>
      {posts.map((e, i) =>
        <Post key={i} />
      )}
    </div>
  )
}

export default Posts