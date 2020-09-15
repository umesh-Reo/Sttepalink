import React from 'react'
import Navigation from '../../Navigation/Navigationitem/NavigationItems/NavigationItems'
import OfficeNavigation from '../../Navigation/NavigationOffice/NavigationOffice';
import './Headder.css';

const Headder = (Props) => {

    return(
        Props.check?(
           <div className={Props.HeadderForm}>
               <Navigation LogOut={Props.LogOut}>
                  <h2 className="Stp"> STTEPALINK.COM</h2>
               </Navigation>
           </div>)
           :
           (<div className={Props.HeadderForm}>
           <OfficeNavigation>
              <h2 className="Stp"> STTEPALINK.COM</h2>
           </OfficeNavigation>
         </div>)

     );
    }
   
    


export default Headder;