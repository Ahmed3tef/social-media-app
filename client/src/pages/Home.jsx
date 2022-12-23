import React from 'react'

const Home = () => {
  return (
    <div>
      {
        [...new Array(100)].map((e, i) => <h1>hey </h1>)
      }
    </div>
  )
}

export default Home