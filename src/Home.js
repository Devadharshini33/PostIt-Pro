import React from 'react'
import Feed1 from './Feed1'

const Home =({posts})=>{
  return(
    <main>
     <Feed1 posts={posts} />
    </main>
  )
}

export default Home

