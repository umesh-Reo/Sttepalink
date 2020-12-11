import React from "react";
import NavigationBar from '../../../../../ComponentsMaterialUi/NavigationBar/NavigationBar.jsx';
import NavigationItem from '../../../../../ComponentsMaterialUi/NavigationBar/NavigationItems';

const LoginNavBar = ({...Props}) => {
  return(
      <NavigationBar >
          <NavigationItem  Link="/Offers">
             About Us  
          </NavigationItem>
          <NavigationItem Link="/PricingPackage">
             New Offers
          </NavigationItem>
          <NavigationItem  Link="/AboutUs">  
             Pricing 
          </NavigationItem>
      </NavigationBar>
   );
}

export default LoginNavBar;