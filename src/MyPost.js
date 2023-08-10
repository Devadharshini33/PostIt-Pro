import React from 'react'
import { Link } from 'react-router-dom'
const MyPost = ({posts}) => {
  
  return (
    <article className='post'>
      <Link to={`post/${posts.id}`} className="custom-link">
      <h2>{posts.title}</h2> 
      </Link>
      {/* <p className='postDate'>{posts.datetime}</p> */}
       <p className='postBody'>{posts.body}</p>
       <hr></hr>
      
    </article>
  )
}

export default MyPost
