import React from 'react';
import './ChapterEntryComponent.css';

const ChapterEntry =  ( Props ) => {
  
 return (
         <div>
            <div className="CreateNewSub1">
               <form className="formDes1">
                 <div className="innerBoundary">
                   <div className="Caption">{Props.Headder}</div>
                   <div className="formDesElement1"> 
                     <div><label>{Props.StandardOrSub} : </label></div> 
                     <div>{Props.officialdetailsStandart}</div>
                   </div>
                   <div className="formDesElement1"> 
                     <div><label> {Props.ChapterOrSub} : </label> </div> 
                     <div>{Props.officialdetailsSubject}</div>
                   </div>
                   <div className="formDesElement1">
                     <div> <label>{Props.ChapterOrTopic} : </label></div>
                     <input className="input1" type="text" placeholder={Props.Placeholder}  onChange={Props.editChapter}/> 
                   </div>
                   < button className="Add1" onClick={Props.CreateNewChapter}>Add+</ button>
                 </div>
               </form> 
            </div>             
         </div>    
    )
   
}

export default ChapterEntry;