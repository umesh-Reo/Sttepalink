import React from 'react';
import './Button.css';

const Button = (Props ) =>{
  let ButtonType = null;

  switch (Props.elementTypes) {

    case ('PlanButton'):
      ButtonType =    <button 
         key={Props.Key}
         className={["Buttons",[Props.btnType]].join(' ')}
         onClick={Props.clicked}>
         {Props.children}
        </button>
      break;
      
    case ('li')  :
      ButtonType =  <a
         href={Props.Ref}
         className={["",[Props.btnType]].join(' ')}
         onClick={Props.clicked}
        >
        {Props.children}
     </a>
     break;

    case ('submit'):
      ButtonType =    <button 
         className={["Buttons",[Props.btnType]].join(' ')}
         onClick={Props.clicked}>
         {Props.children}
        </button>
      break;

    case ('route'):
      ButtonType = <button
        className={["Buttons",[Props.btnType]].join(' ')}
        ><a  className={["route",[Props.btnType]].join(' ')} href={Props.hrefType}>
        {Props.children}
      </a>
      </button>
      break;

    case ('Info'):
      ButtonType = <button 
         className={["Info",[Props.btnType]].join(' ')}
         onClick={Props.clicked}>
         {Props.children}
        </button>
      break;

      case ('ButtonSummaries'):
        ButtonType = <button 
           className={[" ",[Props.btnType]].join(' ')}
           onClick={Props.clicked}>
           {Props.children}
          </button>
        break;

    default:
         ButtonType =    <button 
         className={["Info",[Props.btnType]].join(' ')}
         onClick={Props.clicked}>
         {Props.children}
        </button>
      break;
  }
  return (
     <div className="submitButton">
         {ButtonType}
     </div>
    );

}

export default Button;