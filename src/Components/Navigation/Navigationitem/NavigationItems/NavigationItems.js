 import React from 'react';
import NavigationItem from '../NavigationItem';
import './NavigationItems.css';



const Navigationitems = (Props) =>{
 console.log(Props.LogOut);
 
  return( 
    <div>
       <div  className='NavigationItems'>
          <div className="NavigationItemsRightSide">
             {Props.children}
          </div>
          <div className="UlStyle">
              <ul className="NavigationItemsLeftSide">
                 <NavigationItem link= '/Profile'>About Us</NavigationItem>
                 <NavigationItem link='/TutorialScreen' >Study Center</NavigationItem>
                 <NavigationItem link= '/Profile'>Profile</NavigationItem>
                 <NavigationItem link= '/Profile'>Contact Us</NavigationItem>
                 <NavigationItem> 
                    <button className="logOutButton" onClick={Props.LogOut} >
                       Log Out
                    </button> 
                 </NavigationItem>        
              </ul>
           </div>
      </div>
    </div>
   );
}

export default Navigationitems;