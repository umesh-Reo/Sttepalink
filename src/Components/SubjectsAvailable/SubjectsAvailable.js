import React from 'react'
import './SubjectsAvailable.css';

const SubjectsAvailable = (Props)=>{
  return(
      <div className="SubjectGrid"> 
          <div className="Grid">
             {Props.data.Subjects}
          </div>  
          <button className="GridButton" onClick={Props.AddSubjects}>+</button>
          <button className="GridButton" onClick={Props.RemoveSubjects}>-</button>
      </div> 
   );
}

export default SubjectsAvailable;