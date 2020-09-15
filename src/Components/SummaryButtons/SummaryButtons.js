import React from 'react';
import './SummaryButtons.css';

const SummaryButtons = ( Props ) =>{
  let ButtonType = null;


  switch (Props.elementTypes) {

    case ('Route')  :
      ButtonType =  <a
      href={Props.Ref}
      className={Props.ClassNames}
    >
        {Props.children}
    </a>
    break;

    case ('li')  :
      ButtonType =  <a
      href={Props.Ref}
      className={Props.ClassNames}
      onClick={Props.clicked}
    >
        {Props.children}
    </a>
    break;

    case ('Button')  :
      ButtonType =  <button
      className={Props.ClassNames}
      onClick={Props.clicked}
    >
        {Props.children}
    </button>
    break;

    default:
         ButtonType =    <button 
         className={["Info",[Props.btnType]].join(' ')}
         onClick={Props.clicked}>
         {Props.toh}
        </button>
      break;
  }
  return (
     <div>
         {ButtonType}
     </div>
    );
  
}

export default SummaryButtons;