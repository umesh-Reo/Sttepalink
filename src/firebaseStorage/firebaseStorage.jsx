import React , { Component } from 'react';
import {storage} from '../firebase/Index';

class ImageUpload extends Component {
    constructor(props){
        super(props);
        this.state={
              image:null,
              URL:""
        }
        this.handleChange= this.handleChange.bind(this);
        this.showImage = this.showImage.bind(this);
    }

    handleChange = (e) =>{
        if(e.target.files[0]){
         const image = e.target.files[0];
         this.setState({image:image});
         console.log(image);
        }
    }

    handleUpload = ( ) => {
     const image = this.state.image;
     console.log(image.name);
     const uploadTask = storage.ref(`images/${image.name}`).put(image);
     uploadTask.on('state_changed',
     (snapshot) => {
         //progress function
     },
     (error) => {
           //Error cheque
           console.log(error);
     },
     () =>{
         storage.ref('images').child(image.name).getDownloadURL().then(url =>{
             console.log(url);
         })
     }
     )
    }


    

    showImage= ( ) =>{
        let storeRef = storage.ref();
        let spaceRef = storeRef.child('videos/Chapter11.mp4')
        storeRef.child('videos/Chapter11.mp4').getDownloadURL().then((url) =>{
            console.log(url);
            
        })
    }

    
    render(){
        return(
            <div>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.showImage }>Upload</button>
            </div>
        )
    }
}

export default ImageUpload;