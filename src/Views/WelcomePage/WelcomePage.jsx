import React from 'react';
import GridContainer from "../../ComponentsMaterialUi/Grid/GridContainer.jsx"
import GridItem from "../../ComponentsMaterialUi/Grid/GridItem.jsx";
import Card from "../../ComponentsMaterialUi/Card/Card.jsx";
import CardHeader from "../../ComponentsMaterialUi/Card/CardHeader.jsx";
import CardBody from "../../ComponentsMaterialUi/Card/CardBody.jsx";
// <h3 style={{ color: "#595959",fontWeight:"650",padding:".5% 0% 0% .2%",margin: "2% 0% 3% 6%"}}>Hello  {UserName}. </h3>

const WelcomePage = ( props) =>{
 const UserName =  localStorage.getItem("UserName");

 let ManualWidth = window.innerWidth >= 960 ? "100%" : "100%";
 let ManualMargin = window.innerWidth >= 960 ? "1.3% 0% 3% 0%" : " 3% 0 5% 0%";
      return (
       <div 
          style={{
            width:ManualWidth,
            margin:ManualMargin ,
            minHeight:"555px",
            padding:".1px 0 1.5% 0",
            textAlign:"center",
            boxShadow: "0 3px 5px 2px  #a6a6a6",
            background: "#e6e6e6",
          }} 
        >    
         <div style={{color: "red",fontSize:"23px",textDecoration:"underline",padding:'0',margin:"4% 0 3% 0",fontWeight:"bold"}}>WARNING</div> 
         <div style={{width:"100%",color:"red",fontSize:"16px",padding:" 0 10% 0 10%",fontWeight:"bold"}}> 
           Please Do Not Refresh your Computer/Mobile While study on <span style={{color:"#737373",fontWeight:"bold",fontSize:"105%"}}>User Courses </span> Page  . If you
           Refresh The Page for Any Reasons Then Its Brings You Back At the Begining of The <span style={{color:"#737373",fontWeight:"bold",fontSize:"105%"}}> User Courses </span>
           Page. And Your Previously Watching Sub-Topic Videos Will be Counted As Watched And The Total Number Of The Watched Videos will be
           Increased By one Each Time. So Please Avoid To Refresh the  <span style={{color:"#737373",fontWeight:"bold",fontSize:"105%"}}> User Courses </span> Page while Study. 
         </div>

        
    <GridContainer justify="center">
      <GridItem sx={12} sm={12} md={6}>
            <Card   
              style={{
                margin:"20% 0 0 0",
                fontSize:"15px", 
                background:"#ffffff",            
                fontWeight:"500",
              }}>
              <CardHeader style={{fontSize:"120%",fontWeight:"650",color: "#404040"}}>Current Plan Status</CardHeader>
              <hr style={{margin:"0 0 0 2%"}}/>
              <CardBody>
             <ul style={{margin:'0',paddingLeft:"3%",textAlign:"left",color: "#4d4d4d",}}>
               <li> Date of Registration : 1/1/2020</li>
               <li> Your Accounts will be valid Till : 28/1/2020 </li>
               <li> Accounts will be Active For : 28 Days</li>
               <li> You Are Only Allow To Access : 10 Sub-Topic/Day</li>
               <li> You Can Choose The Sub-Topics As Your Own. </li>
               <li> If You Have Any Problems Then You Can Contact Us.</li>
             </ul>
             </CardBody>
            </Card>
            </GridItem>
            </GridContainer>
            </div>
       
      );   
  }

export default WelcomePage ; 