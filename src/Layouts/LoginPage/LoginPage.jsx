import React , {Component} from 'react';
//import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import withStyles from "@material-ui/core/styles/withStyles";
//import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Infodesk from '../../sttepalinkHome/SttepaContainers/infodesk/infodesk';
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import NavigationBar from '../../ComponentsMaterialUi/NavigationBar/NavigationBar.jsx';
import NavigationItem from '../../ComponentsMaterialUi/NavigationBar/NavigationItems';
import GridItem from '../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Card from '../../ComponentsMaterialUi/Card/Card.jsx';
import CardBody from '../../ComponentsMaterialUi/Card/CardBody.jsx';
import Button from '../../ComponentsMaterialUi/CustomButtons/Button';
import IntroVideoPlayer from '../../Components/IntroVideo/IntroVideo';
import Login from "../../ComponentsMaterialUi/LoginHomePage/login.jsx";
import BlackDropModel from '../../ComponentsMaterialUi/Modal/Modal';
//import NavigationBar from '../../../Components/Ui/Header/Headder';
import Footer from '../../sttepalinkHome/SttepaContainers/footer/footer';


const history = createBrowserHistory({forceRefresh: true});
const styles = {
   LoginFormContainer:{
      width:"100%",
      padding: ".1% 0% 10% 0%",
      backgroundColor:"#d1b3ff"
   },
   VideoPlayButton:{
      width: "85%",
      display: "flex",
      fontSize: "100%",
      fontWeight: "700",
      borderRadius: "1em",
      padding: "2% 2% 0% 4%",
      margin: "6% 0% 3% 0%",
      border: "1.5px solid rgb(144, 171, 233)",
      boxShadow: "0px 2px 2px rgb(169, 166, 166)",
      background: "linear-gradient(to bottom left, rgba(157, 106, 225, 0.9) 0%, rgba(134, 121, 233, 0.9) 58%)"
    },
  
 };
 
class SttepalinkHome extends Component {
 
   constructor(props){
      super(props);
 
      this.state = {
        user:{},
        isUserValid:false,
        LoggedStatus:'Please Login First',
       }

       this.ToggleModel=this.ToggleModel.bind(this);
       this.UserDetailsCatchHandler= this.UserDetailsCatchHandler.bind(this);
     }

     componentDidMount(){
        console.log("it Just work")
     }
  
   ToggleModel = ( ) =>{
      this.setState({showModel:!this.state.showModel});
   }   

  
   UserDetailsCatchHandler = ( UserDetails, IsUserValid ) =>{
      this.setState({isUserValid:IsUserValid});
      if(IsUserValid){
         history.push("/Home");
       }
   }

    render(){
      const { classes } =this.props;
       console.log(this.state.user);
        // <NavigationBar HeadderForm="container2" check={true}/>  
        let Model = this.state.showModel ? (
                          <BlackDropModel show={this.state.showModel} BlackDrop={this.ToggleModel}>
                             <IntroVideoPlayer/>
                          </BlackDropModel>
                        ) : null;
        return (
            <div className={classes.LoginFormContainer}>  
          
              <Card  mediumCard style={{borderRadius:"0em", marginTop:"5.5%"}}>
                 <GridContainer >
                    <GridItem xs={12} sm={12} md={5}>
                       <CardBody style={{borderRight: "1px solid rgb(189, 187, 187)" , backgroundColor: "rgb(230, 231, 237)"}}> 
                         <GridContainer>
                            <GridItem xs={12} sm={12} md={12} >
                               <Infodesk/>
                            </GridItem>
                            <GridItem  xs={12} sm={12} md={12} style={{color: "rgb(98, 92, 92)" ,margin:"0% 0% 0% 2%"}}>
                            &nbsp;&nbsp; &nbsp;Sttepalink is a Learning Platform, Where You Come And Get Your All  Doubt Cleared.
                              We Help You Through Providing You a videos Tutorials And Relates Notes. 
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                              <Button className={classes.VideoPlayButton}  onClick={this.ToggleModel}>Know More About Us &nbsp; <PlayCircleOutlineIcon/> </Button>
                            </GridItem>
                          </GridContainer >
                         </CardBody>
                    </GridItem>
                    <GridItem  style={{paggingRight: "0% 0% 0% 0%"}} xs={12} sm={12} md={7}>
                       <GridContainer>
                         <NavigationBar>
                             <NavigationItem Link="/AboutUs">
                               Contact Us
                             </NavigationItem>
                             <NavigationItem  Link="/ContactUs">
                               About Us
                             </NavigationItem>
                             <NavigationItem Link="/PricingPackage">
                               Pricing 
                             </NavigationItem>
                             <NavigationItem  Link="/ContactUs">
                               Home  
                             </NavigationItem>
                         </NavigationBar>
                         <GridItem  style={{paggingRight: "0% 0% 0% 0%"}} xs={12} sm={12} md={12}>
                            <Login  UserDetailsHandler={this.UserDetailsCatchHandler}/>
                         </GridItem>
                       </GridContainer>
                    </GridItem>
                 </GridContainer>
              </Card>
              <Footer/> 
              {Model}
           </div>
        );
    }
}

SttepalinkHome.propTypes = {
   classes: PropTypes.object.isRequired,
 };

export default  withStyles(styles)(SttepalinkHome);