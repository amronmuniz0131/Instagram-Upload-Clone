import React, { Component } from 'react'
import axios from 'axios';
import Avatar from "@material-ui/core/Avatar";
class Comment_Box extends Component { 
    state = {
        text : "",
        post_id : (this.props.post_id),
        user : (this.props.user)
    }
    handleAdd = async e =>{
        await this.setState({
            text : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('text', this.state.text);
        formData.append('post_id', this.state.post_id);
        const url = "http://localhost/post.php";
        axios.post(url,formData)
        .then(res=> console.log(res.data),window.location.reload())
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div className="comment__container">
                <Avatar
                className="post__avatar"
                alt= "amron"
                src="/static/images/avatar/1.jpg"
                />
            <input onChange={this.handleAdd.bind(this)}
            className="comment__box"
            type="text"
            placeholder="add caption here"
            />

            <button onClick={this.handleSubmit}>Post</button>
            </div>
        );
    }
}

export default Comment_Box
