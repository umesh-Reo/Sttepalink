import React from 'react';
import EntryChapter from '../../NotesEntry/ChapterEntry/ChapterEntryComponent/ChapterEntryComponent';
import './ChapterEntry.css';

const ChapterEntry = ( Props ) =>{
     
  return (
            <div className="OfficialComForm">
               <div className="CreateNewSub">
                   <EntryChapter doe={Props.officialdetails} editFunction={Props.editChapter}/>
               </div>
            </div>
      )      
  }

export default ChapterEntry;