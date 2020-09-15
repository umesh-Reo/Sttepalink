import React from 'react';
import Card from '../../ComponentsMaterialUi/Card/Card.jsx';
import CardBody from '../../ComponentsMaterialUi/Card/CardBody.jsx';
import CardFooter from '../../ComponentsMaterialUi/Card/CardFooter.jsx';
import Button from "../../ComponentsMaterialUi/CustomButtons/Button.jsx";


function SignUpOrLoginForm({ ...props }) {
    const { classes, Title,children } = props;
  return (
     <div>
         <Card
           style={{
             paddingTop:"0",
             backgroundColor: "rgb(253, 252, 252)",
             borderRadius: "1.5em 1.5em 1em 1em",
             borderRight:"1px solid #d2d4d2",
             boxShadow: "-6px 10px 6px rgb(82, 82, 86)",
             margin:"5% 0 10% 0"
            }}
           >
             <h2 style={{
                width: "100%",
                fontSize: "180%", 
                fontWeight: "800",
                padding:"8% 0% 1% 2%",
                margin:"0%",
                borderRadius: "15px 15px  0px 0px",
                color:"rgb(255, 255, 255)",
                backgroundColor: "rgb(181, 181, 182)"
             }}>{Title}</h2>
             <CardBody>
                 {children}
             </CardBody>
             <CardFooter>
                 <Button onClick={props.clicked} >Submit</Button>             
             </CardFooter>
           </Card>
      </div>
    );
}


export default SignUpOrLoginForm;