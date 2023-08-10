
import './App.css';

import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';

import Missing from './Missing';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import MyPost from './MyPost';
import { Route,Routes, useNavigate } from 'react-router-dom';


function App() {
  const [posts,setPosts]=useState([
    {
      id:1,
      title:"My First Post",
      // datetime:"July 01,2021 11:17:36 AM",
      body:"Made a video about Tesla Q1 results"
    },
    {
      id:2,
      title:"My Second Post",
      // datetime:"May 20,2022 12:07:25 AM",
      body:"I attended a DeFi blockchain Webinar"
    },

    {
      id:3,
      title:"My Third Post",
      // datetime:"September 12,2022 05:10:16 AM",
      body:"Made a video about Tesla Q1 results"
    }

  ]);
  const navigate=useNavigate()
  const [search,setSearch]=useState('');
  const[searchResults,setSearchReasults]=useState([])
  const [postTitle,setPostTitle]=useState('');
  const [postBody,setPostBody]=useState('');
  useEffect(()=>{
    const filteredResults=posts.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase()));
    setSearchReasults(filteredResults.reverse());
  },[posts,search])
  const handleSubmit=(e)=>{
    e.preventDefault();
    const id=posts.length?posts[posts.length-1].id+1:1;
    // const datetime=format(new Date(),'MMMM dd yyyy pp');
    const newPost={id,title:postTitle,body:postBody};
    const allPosts=[...posts,newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    
  }
  const handleDelete=(id)=>{
    const postsList=posts.filter(post=>post.id!=id);
    setPosts(postsList);
    navigate('/')
  }
  return (
    
    <div className="App">
   
    
     
       <Header title="PostIt Pro"/>
      <Nav
      search={search}
      setSearch={setSearch}
      />
      <Routes>
      <Route path='/' element={<Home
     posts={searchResults} /> } />
    
      <Route path='post'>
      <Route index element={<NewPost 
      handleSubmit={handleSubmit}
      postTitle={postTitle}
      setPostTitle={setPostTitle}
      postBody={postBody}
      setPostBody={setPostBody}
      />} /> 
      <Route path=':id' element={<PostPage
      posts={posts}
      handleDelete={handleDelete}
      />} />
      </Route>
       
     <Route path='about' element ={<About />}/>
      
      <Route path='*' element={<Missing />} />
      </Routes>
     
     
    </div>
  );
}

export default App;
