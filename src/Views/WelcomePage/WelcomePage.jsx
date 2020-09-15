import React , { Component } from 'react';
import './WelcomePage.css';
const WelcomePage = ( props) =>{
 const UserName =  localStorage.getItem("UserName");

 let ManualWidth = window.innerWidth >= 960 ? "90%" : "100%";
 let ManualMargin = window.innerWidth >= 960 ? "3% 5% 5% 5%" : " 3% 0 5% 0%";
      return (
          <div style={{width:ManualWidth,margin:ManualMargin}}className="HomePageSceenBackGround">
             <div className="ProfileBackground">  
             <div className="WelcomeNotes">
                <p>Hello <span style={{color:"black", fontSize:"90%"}}> {UserName}</span>,<br/>We  Welcomes  You  To  SttepaLink . </p>
             </div>
             <div className="WelcomeNoteDiscriptions">
               <ul>
                 <li> Your account will be only valid till 30th of april.</li>
                 <li> You don't have any liggle right on this accounts</li>
                 <li> if any accident occurs we will not be responsible </li>
                 <li> You can add more subjects according to yours requirements</li>
               </ul>
             </div>     
             </div>  
          </div>
      );   
  }

export default WelcomePage ; 