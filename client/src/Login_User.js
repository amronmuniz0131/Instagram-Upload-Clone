import React, { Component } from 'react'
import axios from 'axios';
import Avatar from "@material-ui/core/Avatar";

class Login_User extends Component {
    state = {
        username : "",
        password : ""
    }
    handlePass = async e =>{
        await this.setState({
            password : e.target.value,
        })

    }
    handleUser = async e =>{
        await this.setState({
            username : e.target.value,
        })

    }
    
    handleSubmit = e => {
        e.preventDefault();
        var username = this.state.username;
        console.log(username);
    }

    render (){
        return(
            <div>
                <input onChange={this.handleUser.bind(this.username)}type="text"/>
                <input onChange={this.handlePass.bind(this.password)}type="text"/>
                <button onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }
}

export default Login_User
