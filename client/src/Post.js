import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl, comment_user, comment, comment_content}) {  
  const comments = comment_user.split(', ');
  const comment_body = comment_content.split(',')
  function comment_function(){
     const comment_context = (comment_body.map(comment_contents => 
    {return comment_contents}));
    let x=0;
    const comment = (comments.map(comment_usernames => 
      {return <h4 className="post__text"><strong>{comment_usernames}:</strong> {comment_context[x]}</h4>})) ;
    return ( 
      //{comment},{comment_context}
      <h4>{comment}</h4>
      )
  }
    return (
        <div className="post">
          {/* profile picture + username*/}
          <div className="post__header">
            <Avatar
                className="post__avatar"
                alt={username}
                src="/static/images/avatar/1.jpg"
                />
            <h3>{username}</h3>
          </div>
          {/* post */}
          <img className="post__image" src={imageUrl} alt=""/>
          {/* username + caption */}
          <h4 className="post__text"><strong>{username}:</strong> {caption}</h4>
          {/*comment section*/}
          <h4 className="post__text">{comment_function()}</h4>
        </div>
    )
}

export default Post
