import React from 'react';

import './BackDrop.css';

const BackDrop = (props) =>(

 props.show?
   <div 
     className="BackDrop" 
     onClick={props.clickedBlackDrop}
   >
    {props.children}
   </div> : null    
);


export default BackDrop;
