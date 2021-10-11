import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';


function App() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost/api.php")
    .then(res => res.json())
    .then(
      (result)=>{
        setPosts(result);
      }
    )
    .catch(err => {
      console.log(err.message);
    })
  },[])
  return (
    <div className="App">
      <div className="app__header">
        <h1>Bittel Project</h1>
      </div>
      
      {

        posts.map(post =>
          <Post username={post.username} 
          caption={post.caption}
           imageUrl={post.imageUrl}
            comment_user={post.comment_user}
             comment_content={post.comment_content}/>
          )
      }
      

    </div>
  );
}



export default App;
