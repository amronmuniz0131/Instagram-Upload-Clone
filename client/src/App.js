import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "hermsy",
      caption: "waw",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "amsy",
      caption: "waw",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
    }
  ]);
  
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
