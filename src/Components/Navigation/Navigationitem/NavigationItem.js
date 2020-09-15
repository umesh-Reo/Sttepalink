import React from 'react';

import './navigationItem.css';

const NavigationItem = (Props ) =>(
  <li className="Navigationitem">
      <a
        href={Props.link}
        className={Props.active ? "active" : null}
      >
          {Props.children}
      </a>
  </li> 
);

export default NavigationItem;