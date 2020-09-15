import React, {Component} from 'react';
import Login from '../../../Components/Login/login';
import IntroVideo from '../../../Components/IntroVideo/IntroVideo';
import './Introducer.css';

class Introducer extends Component{
 // submit=(data)=>{
//sconsole.log(data);
    //Dont understand only working after clicking twice...
    //userId;
    //getuserId;
    //sendToRelatedCoponent
 // }
  render(){ 
       return (
        <div className="Intro">
         <IntroVideo/> 
      </div>
      );
    }  
}


export default Introducer;