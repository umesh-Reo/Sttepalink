import React from 'react';
import './ListOfChapter.css';


const ChapterList = ( Props ) =>{
   console.log(Props);
 return (
      <li className="Butt" onClick={Props.clicked}>{Props.toh}</li>
   )

}

export default ChapterList;