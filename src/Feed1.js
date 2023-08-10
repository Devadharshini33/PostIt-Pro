import React from 'react'
import MyPost from './MyPost'

const Feed1 = ({posts}) => {
  return (
    <>
    
       {posts.map(posts=>(
        <MyPost key={posts.id} posts={posts} />
       ))}
    
      
    </>
  )
}

export default Feed1
