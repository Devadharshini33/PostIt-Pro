import React from 'react'
import { useParams,Link } from 'react-router-dom'
const PostPage = ({posts,handleDelete}) => {
  const {id} =useParams();
  const post=posts.find(post=>(post.id).toString()===id);

  return (
    <main className='PostPage'>
      <article className='post'>
        {post&&
        <>
        <h2>{post.title}</h2>
        <p className='postBody'>{post.body}</p>
        <button type='submit' onClick={()=>handleDelete(post.id)} className='myButton'>Delete post</button>
        </>
        }
        {!post &&
        <>
        <h2>Post Not Found</h2>
        <p>
          <Link to ='/' Visit Our HomePage></Link>
        </p>
        </>
        }

      </article>
    </main>
  )
}

export default PostPage
