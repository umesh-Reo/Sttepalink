import React from 'react';
import './IntroVideo.css';



const Introvideo = (Props) =>{
      return (
        <iframe className="introvideo" 
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
        </iframe>
      );
    };


export default Introvideo;