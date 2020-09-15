import React from 'react';
import Card from '../../ComponentsMaterialUi/Card/Card.jsx'
import CardHeadder from '../../ComponentsMaterialUi/Card/CardHeader.jsx';
import CardBody from '../../ComponentsMaterialUi/Card/CardBody.jsx';
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx';
import './PricingPlan.css';
import Aux from '../../hoc/Aux';

const PricePackage = ( props ) => {
  let PlanForm = ( 
    <Card plain onClick={props.SignUp}  style={{ margin:"0", paddingBottom:"0"}}>   
       <CardHeadder  style={{width:"90%", textAlign:"center", padding:"2%", margin:"0"}} >
          <p style={{fontSize:"160%",fontWeight:"750",paddingLeft:"3%",color:"#f2f2f2"}}>&#8377;{props.BeforPrice}/-</p>
       </CardHeadder>
       <hr style={{margin:"0", paddingLeft:'4%'}}/>
       <CardBody>
          <ul style={{padding:"0 0 0 4%", fontSize:"110%", fontWeight:"700", color:"#f6f5f7", margin:"0"}}>
             <li style={{color:"#3d3d5c", fontSize:"110%"}}>{props.Validity}</li>
             <li> Class 10th - 12th</li>
             <li>{props.Type}</li>
             <li> All Main Subjects Are Available</li>
             <li>Accisibility : 10 Topics / Day (limit)</li>
             <li>Impor. Questions With Solutions</li>
             <li>Solved Board Exams Question Paper </li>
          </ul>
       </CardBody>
       <h4 style={{textAlign:"center", margin:"0",borderRadius:"0 0 8% 6% " ,color:"#f6f5f7", padding:"2% 0%",backgroundColor:"rgb(217, 217, 217,.3)"}}>CLICK HERE</h4>
     </Card>
   );
     
 //  {props.formToggle}
 //  {props.grade}

  return(
     <Aux>
       <div className="PricingPlanContainer">
          {PlanForm}
       </div>        
     </Aux>
   )
}
export default PricePackage;