import React from 'react';
import './Input.css';

const InputForm = (Props) => {

    let inputElement = null;
    switch (Props.elementType) {
        case ('input'):
         inputElement = < input 
           /*  className="InputElement"  */
             className={Props.btnType}
             {...Props.elementConfig} 
             value= {Props.value}
              onChange={Props.changed} />
        break;
        case ('textarea'):
         inputElement = < textarea 
             className={Props.ClassName} 
             {...Props.elementConfig} 
             value= {Props.value}
            onChange={Props.changed}/>
        break;
        
        case ('Display'):
          inputElement = (
          <h3
            className="Display" 
          >
           &#8377; {Props.value}
           </h3>
           );
         break;

        case ('select'):
         inputElement = (
         < select 
           className={Props.btnType} onChange={Props.changed}
           value= {Props.value}>
            {Props.elementConfig.options.map(option =>(
                <option
                key={option.value}
                value={option.value}>
                  {option.displayValue}
                </option>
            ))}
          </select>
          );
        break;

        default:
       inputElement= <input  
         className="InputElement"  
         {...Props.elementConfig}
         value= {Props.value}
       onChange={Props.changed}/>
    }

    return(
        <div>
            {inputElement}
        </div>

    );
}

export default InputForm;