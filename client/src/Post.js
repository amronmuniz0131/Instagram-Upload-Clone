import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
import Comment_Box from './Comment_Box';

function Post({post_id, username, caption, imageUrl, comment_user, comment, comment_content, comment_context}) {  
  if (comment_user !== null){
    const comments = comment_user.split(',');
    //console.log(caption);
    const comment_body = comment_content.split(',')
    comment_context = (comment_body.map(comment_contents =>
    {return <h4 className="post__text"><strong>{comments[comment_body.indexOf(comment_contents)]}: </strong> {comment_contents}</h4>}))
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
          <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
          {/*comment section*/}
          {comment_context}
          <div className="comment__container">
            {/* eslint-disable-next-line */}
          <Comment_Box post_id = {post_id}/>
          </div>
        </div>
        
    )
}

export default Post
