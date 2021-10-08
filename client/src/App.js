import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';


function App() {
  const [posts, setItem] = useState([]);
  useEffect(()=>{
    fetch("http://127.0.0.1:5500/server/api.php")
    .then(res => res.json())
    .then(
      (result)=>{
        console.log(result);
      }
    )
  },[])
  return (
    <div className="App">
      <div className="app__header">
        <h1>Bittel Project</h1>
      </div>
      
      {
        posts.map(post =>
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          )
      }
      

    </div>
  );
}



export default App;
