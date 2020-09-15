import React from 'react';
import './BarLogo.css';

import Barlogo from '../../../../assets/images/Screenshot-(3).png';

const MainLogo = (props) => (
    <div className="BarLogo">
        <img  className="BarLogo" src={Barlogo} alt="Barlogo"/>
    </div>
);

export default MainLogo;