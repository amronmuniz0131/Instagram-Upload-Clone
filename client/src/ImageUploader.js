import React, { Component } from 'react'
import axios from 'axios';

class ImageUploader extends Component {
    
    state = {
        file : ""
    }
    onChange(a){
       let files = a.target.files;
        //console.log(files);
        this.setState({
            file : files[0]
        })
        //console.log (files);
        //console.log(files[0]);
    }

    handleSubmit = a => {
        a.preventDefault();
        let formData = new FormData();
        //console.log(this.state.file);
        formData.append('file', (this.state.file));
        const url = "http://localhost/comment.php";
        axios.post(url,formData)
        .then(res=> console.log(res.data))
        .catch(err => console.log(err));
    }
    



    render() {


    

        return(
            <div>
                <input type="file" name="image_uploader" onChange={(a)=> this.onChange(a)} />
                <button onClick={this.handleSubmit}>Add Post</button>
            </div>
        )}

}

export default ImageUploader
