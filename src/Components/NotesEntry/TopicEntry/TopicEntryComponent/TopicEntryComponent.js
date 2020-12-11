import React from 'react';
import './TopicEntryComponent.css';

const ChapterEntry = ( Props ) => {
   
  //axious.get('/OfficeInfo.json')
  //.then(response => { 
  //  this.setState({fetchSubDetails: response.data})
  //  console.log(this.state.fetchSubDetails)})
  //.catch(err => console.log(err));
 return (
         <div>
             <div>
               <form className="formDes">
               <div className="formDesEle"> <label>Subject : </label> {Props.officialdetailsStandart}</div>
               <div className="formDesEle"> <label>Chapter : </label>  {Props.officialdetailsSubject}</div>
               <div className="flex">
               <div> <label>Chapter : </label></div>
               <input className="input" type="text" placeholder="Enter Topic Name"  onChange={Props.editFunction}/> 
               </div>
               < button className="Add" onClick={Props.CreateNewTopic}>Add+</ button>
               </form>   
             </div>
         </div>    
    )
   
}

export default ChapterEntry;