import React from 'react';
import NavigationItem from '../Navigationitem/NavigationItem';
import Aux from '../../../hoc/Aux';

const Navigationitems = (Props) =>( 
    <Aux>
       <div  className='NavigationItems'>
          <div className="NavigationItemsRightSide">
             {Props.children}
          </div>
          <div className="UlStyle">
              <ul className="NavigationItemsLeftSide">
                 <NavigationItem link= '/'>Home</NavigationItem>
                 <NavigationItem link= '/FeedDAta'>Write</NavigationItem>       
              </ul>
           </div>
      </div>
    </Aux>
);

export default Navigationitems;