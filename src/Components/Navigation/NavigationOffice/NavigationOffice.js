import React from 'react';
import NavigationItem from '../Navigationitem/NavigationItem';

const Navigationitems = (Props) =>( 
    <div>
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
    </div>
);

export default Navigationitems;