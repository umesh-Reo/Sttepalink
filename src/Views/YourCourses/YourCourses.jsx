import React , { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from '@material-ui/core/Divider';
import ListCardForm from "../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx";
import TutorialScreem from './TutorialSection/TutorialSection.jsx';
import Card from "../../ComponentsMaterialUi/Card/Card.jsx";
import CardBody from "../../ComponentsMaterialUi/Card/CardBody.jsx";
import CardHeader from "../../ComponentsMaterialUi/Card/CardHeader.jsx";
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer';
import GridItem from "../../ComponentsMaterialUi/Grid/GridItem";
import Button from "../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import Li from "../../ComponentsMaterialUi/CustomLists/Lists.jsx";
import Modal from "../../ComponentsMaterialUi/Modal/Modal";
import axios from '../../hoc/Axious/Axious.js';


const Styles = {
   HeadderStyle:{
    border: "1px solid #dcdee0",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0px 3px 4px 2px rgb(86, 84, 84,.6)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding:"1% 2% 1% 2%",
    marginBottom:"2%",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
   },
   ChapterListCards:{
      border: "0",
      marginBottom: "20px",
      marginTop: "20px",
      borderRadius: "6px",
      color: "rgba(0, 0, 0, 0.87)",
      background: "#fff",
      width: "100%",
      //boxShadow: "-10px 12px 10px -4px rgb(86, 84, 84)",
      boxShadow: "0px 4px 5px 3px rgb(86, 84, 84,.6)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding:"1% 2% 1% 2%",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: ".875rem"
   },
   EmptyChapterListCards:{
      border: "0",
      marginBottom: "50px",
      marginTop: "10px",
      borderRadius: "6px",
      textAlign:"center",
      color: "#a8adaa",
      width: "100%",
      //boxShadow: "-10px 12px 10px -4px rgb(86, 84, 84)",
      fontWeight:"750",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding:"30px 0 60px 2%",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: "15px"
   },
   CurrentUsingSubject:{
      fontSize:'20px',
      fontWeight:"650",
      padding:".5% 0 .7% 0"
   },
   StudentsScreen:{
      width: "100%",
      height: "80%",
      backgroundColor: "rgb(249, 247, 252)",
      margin:"3.5% 0% 0% 0%"
   },
   SudentScreenFrame:{
      width: "100%",
      boxShadow:"0px 0px 5px 3px rgb(234, 233, 236)"
   },
   ScreenAndNotesBoard:{
      width: "100%",
      height: "95%",
      padding: "0% 0% 0.1% 0%",
      backgroundColor: "black",
      display: "flex"
   },
   Screen:{
      width: "61.5%",
      height: "380px",
      margin:".3% 0% 0% .2%",
      backgroundColor: "rgb(116, 120, 120)"
   },
   introvideo:{
      margin:"0%",
      width: "100%",
      height:"100%",
      backgroundColor: "rgb(33, 33, 34)",
      borderRadius: "0%"
   },
   NotesBoard:{
      width: "38%",
      height: "auto",
      margin: "0% 0% 0% .5%",
      padding: "0% 0% 0% 0%",
      backgroundColor: "rgb(24, 23, 23)"
   },
   SubTopicnotesData:{
      width: "100%",
      height: "380px",
      margin: ".3% 0% 1% 0%",
      padding: "0% 0% 0% 0%",
      backgroundColor: "rgb(248, 246, 246)"
   },
   SubTopicNameDisplay:{
      height: "auto",
      fontSize: "larger",
      fontWeight: "700",
      color: "rgb(103, 101, 101)",
      padding: "2% 0% 2% 3%",
      borderBottom:"1px solid gray",
      backgroundColor: "rgb(238, 236, 236)"
   },
   NotesDisplay:{
    width: "94%",
    height:"auto",
    color: "rgb(103, 101, 101)",
    padding: "0% 0% 0% 3%",
    margin:"0% 0% 0% 3%",
    fontFamily: "Times New Roman, Times, serif",
    backgroundColor:  "rgb(253, 253, 253)"
   },
   ShortCutButtons:{
      width: "100%",
      height: "100%",
      color: "rgb(15, 14, 14)",
      fontWeight: "500",
      fontSize: "100%",
      margin: "0% 0% .1% 0%",
      padding: ".5% 0% .3% 0%",
      backgroundColor:"#c7c7c1",
      border: "1px solid rgb(238, 234, 234)"
   },
   innerContainersOfShortCutButtons:{
      width: "100%",
      height: "98%",
      display: "flex",
      padding: "0% 0% 0% 0%"
   },
   ChapterAndTopicBlock:{
      width: "130%",
      display: "flex",
      padding: ".5% 0.5% 0% .5%",
      color: "#2d2d2e",
      borderLeft: "1px solid rgb(252, 248, 248)"
   },
   SubTopicListBackDropButton:{
      width: "60%",
      margin: ".1% 0% 0% 1%"
   },
   ToggleBotton:{
      width: "18%",
      height: "100%"
   }

};

class YourCourses extends Component {

   state={
      userDetails :"",
      Subjects:[],
      SubjectToDisplayDetails:[],
      SubTopicPack:[],
      currentSubject:"",
      Class:"",
      ShowTheChapterDisplayCard : false,
      ToggalScreenAndNotesComponent:false
    }
  

   componentDidMount(){
      const UserId = localStorage.getItem("UserDetail");
      axios.get('/userDetails/'+UserId+'.json')
      .then(res=> {
        this.setState({userDetails:res.data.class});
        return res.data.class;
       })
      .then(getItem =>{
       this.AssignTheSubjects(getItem)
      })
      .catch(error => console.log(error));
   }

   AssignTheSubjects = (prop) =>{
      let TheSubjects = null;
      switch (prop) {
         case ('Class 12 Sci. (Without Biology)'): 
          TheSubjects = (
             [ 
              {SunjectName:"Physics",id:"12Sci2Phy",Class:"Class 12"},
              {SunjectName:"Chemistry",id:"12Sci2Chem",Class:"Class 12"},
              {SunjectName:"Mathematics",id:"12Sci2Maths",Class:"Class 12"},
              {SunjectName:"Hindi",id:"12Sci2Hindi",Class:"Class 12"},
             {SunjectName:"English",id:"12Sci2Eng",Class:"Class 12"}]
            );
         break;
         case ('Class 12 Sci.(Without Maths)'): 
          TheSubjects = (
             [
             {SunjectName:"Physics",id:"12Sci1Phy",Class:"Class 12"},
             {SunjectName:"Chemistry",id:"12Sci1Chem",Class:"Class 12"},
             {SunjectName:"Biology",id:"12Sci1Bio",Class:"Class 12"},
             {SunjectName:"Hindi",id:"12Sci1Hindi",Class:"Class 12"},
             {SunjectName:"English",id:"12Sci1Eng",Class:"Class 12"}]
            );
        break;
        case ('Class 12 Commerce'): 
          TheSubjects = (
             [
             {SunjectName:"Accountancy",id:"12Com",Class:"Class 12"},
             {SunjectName:"Business Studies ",id:"12Bus",Class:"Class 12"},
             {SunjectName:"Economics",id:"12Eco",Class:"Class 12"},
             {SunjectName:"Mathematics",id:"12ComMaths",Class:"Class 12"},
             {SunjectName:"English",id:"12ComEng",Class:"Class 12"}]
            );
        break;
        case ('Class 12 Arts'): 
           TheSubjects = (
              [
              {SunjectName:"History",id:"12His",Class:"Class 12"},
              {SunjectName:"Geography",id:"12Geo",Class:"Class 12"},
              {SunjectName:"Political Science",id:"12Pol",Class:"Class 12"},
              {SunjectName:"Hindi",id:"12ArtsHindi",Class:"Class 12"},
              {SunjectName:"English",id:"12ArtsEng",Class:"Class 12"}]
            );
        break;
        case ('Class 11 Sci.(Without Biology)'): 
           TheSubjects = (
              [
              {SunjectName:"Physics",id:"11Sci2Phy",Class:"Class 11"},
              {SunjectName:"Chemistry",id:"11Sci2Che",Class:"Class 11"},
              {SunjectName:"Mathematics",id:"11Sci2Maths",Class:"Class 11"},
              {SunjectName:"Hindi",id:"11Sci2hindi",Class:"Class 11"},
              {SunjectName:"English",id:"11Sci2Eng",Class:"Class 11"}]
            );
        break;
        case ('Class 11 Sci.(Without Maths)'): 
           TheSubjects = (
             [
             {SunjectName:"Physics",id:"11Sci1Phy",Class:"Class 11"},
             {SunjectName:"Biology",id:"11Sci1Bio",Class:"Class 11"},
             {SunjectName:"Chemisrty",id:"11Sci1Chem",Class:"Class 11"},
             {SunjectName:"Hindi",id:"11Sci1Hindi",Class:"Class 11"},
             {SunjectName:"English",id:"11Sci1Eng",Class:"Class 11"}]
            );
         break;
         case ('Class 11 Commerce'): 
           TheSubjects = (
             [
             {SunjectName:"Accountancy",id:"11Acc",Class:"Class 11"},
             {SunjectName:"Business Studies",id:"11Buss",Class:"Class 11"},
             {SunjectName:"Economics",id:"11Eco",Class:"Class 11"},
             {SunjectName:"Hindi",id:"11ComHindi",Class:"Class 11"},
             {SunjectName:"English",id:"11ComEng",Class:"Class 11"}]
            );
        break;
        case ('Class 11 Arts'): 
           TheSubjects = (
              [
              {SunjectName:"History",id:"11Hist",Class:"Class 11"},
              {SunjectName:"Geography",id:"11Geo",Class:"Class 11"},
              {SunjectName:"Political Science",id:"11Pol",Class:"Class 11"},
              {SunjectName:"Hindi",id:"11ArtsHindi",Class:"Class 11"},
              {SunjectName:"English",id:"11ArtEng",Class:"Class 11"}]
            );
        break;
        case ('Class 10'): 
           TheSubjects = (
             [
             {SunjectName:"Science",id:"10Sci",Class:"Class 10"},
             {SunjectName:"Social Science",id:"10SST",Class:"Class 10"},
             {SunjectName:"Mathematics",id:"10Maths",Class:"Class 10"},
             {SunjectName:"Hindi",id:"10Hindi",Class:"Class 10"},
             {SunjectName:"English",id:"10English",Class:"Class 10"}]
            );
        break;
        case ('Class 9'): 
           TheSubjects = (
             [
             {SunjectName:"Science",id:"9Sci",Class:"Class 9"},
             {SunjectName:"Social Science",id:"9SST",Class:"Class 9"},
             {SunjectName:"Mathematics",id:"9Maths",Class:"Class 9"},
             {SunjectName:"Hindi",id:"9Hindi",Class:"Class 9"},
             {SunjectName:"English",id:"9English",Class:"Class 9"}]
            );
        break;
        case ('Class 8'): 
          TheSubjects = (
             [
             {SunjectName:"Science",id:"8Sci",Class:"Class 8"},
             {SunjectName:"Social Science",id:"8SST",Class:"Class 8"},
             {SunjectName:"Mathematics",id:"8Maths",Class:"Class 8"},
             {SunjectName:"Hindi",id:"8Hindi",Class:"Class 8"},
             {SunjectName:"English",id:"8English",Class:"Class 8"}]
            );
        break;
        default : 
        TheSubjects = null;
      }
      this.setState({Subjects:TheSubjects});
   }

   GoBackToChapterList = ( ) => {
      this.setState({ToggalScreenAndNotesComponent:!this.state.ToggalScreenAndNotesComponent});
    }

    BlackDropToggle = ( ) =>{
      this.setState({ShowTheChapterDisplayCard:false});
    }

   ChapterListCards = ( event,ChapterName,Id ) => {
     let Class = this.state.Class;
     let Subject = this.state.currentSubject;
      axios.get('/Subjects/'+Class+"/"+Subject+"/"+Id+'.json')
      .then(res=> {
         console.log(res)
         console.log("kdgsjvd")
         this.setState({SubTopicPack:res.data.topic})
      })
      .catch(err => {
         console.log(err)
      });
      this.setState({ToggalScreenAndNotesComponent:true});
   }

   AddSubjectToCard = (event,Class , Subject) =>{
   console.log(Class,Subject);
   axios.get('/Subjects/'+Class+"/"+Subject+'.json')
   .then(res=> {
      console.log(res.data)
      const SubjectGot=[];
      for(let key in res.data){
         SubjectGot.push({
         ...res.data[key],
         id:key
       });
      }

      let SubjectToDisplay = [];
       SubjectGot.map(mapedData=>{
         SubjectToDisplay.push({
            ChapterName:mapedData.ChapterName,
            ChapterNumber:mapedData.ChapterNumber,
            id:mapedData.id
         })
       });
       this.setState({SubjectToDisplayDetails:SubjectToDisplay,Class:Class,currentSubject:Subject,ShowTheChapterDisplayCard:true});
    })
    .catch(error =>{
       console.log(error);
    })
   
 }
 
   render(){
     const { classes, ...rest } = this.props;
      let ChapterListCards = <Modal left="35%" right="15%" show={this.state.ShowTheChapterDisplayCard} BlackDrop={this.BlackDropToggle}>
       <ListCardForm heading={this.state.currentSubject}>
          {this.state.SubjectToDisplayDetails.map(results=>(
             <GridItem key={results.id} xs={12} sm={12} md={12}>
                <Li
                   style={{
                      fontWeight:"650",
                      padding:"0 0 0 0 ",
                      border:"1px solid  #e6e6e6"
                   }}
                   id={results.id}
                   clicked={(event)=>this.ChapterListCards(event,results.ChapterName,results.id)}
                   PartAfixedTitle= "Chapter"
                   PartAToDisplay ={results.ChapterNumber}
                   PartBToDisplay = {results.ChapterName}
                  >
                </Li>
             </GridItem>
          ))}
       </ListCardForm>
      </Modal>

     let ManualMargin = window.innerWidth >= 960 ? "30px 5% 15px 5%" : "15% 0 1% 0";
     let SubjectNAmeButtonCardWidth = window.innerWidth >= 960 ? "90%" : "100%";
  
  let Cards = !this.state.ToggalScreenAndNotesComponent?(<div style={{margin:ManualMargin,width:SubjectNAmeButtonCardWidth}}>
     <div className={classes.HeadderStyle}> 
      <div className={classes.CurrentUsingSubject}>Available Subjects : </div>
        <GridContainer>
           <Divider style={{margin:"0 0 1% 2%",height:"1px", color:"#dee0df"}}/>
           {this.state.Subjects.map(res=>(
           <GridItem key={res.id} xs={6} sm={4} md={3}>
             <Button
                style={{
                   fontWeight:"650",
                   color:"blue",
                   border:"1px solid  #e6e6e6"
                }}
                onClick={(event)=>this.AddSubjectToCard(event,res.Class ,res.SunjectName)}
               >
               {res.SunjectName}
             </Button>
          </GridItem>
        ))}</GridContainer>
     </div>
     {ChapterListCards}

     <div className={classes.EmptyChapterListCards}>
        <h2>Please , choose the subject by clicking on <br/> the buttons given Above..</h2>
     </div>
     </div>):null;



    return (
       <div>
          {Cards}
          <TutorialScreem 
            GoBackToChapterList={this.GoBackToChapterList} 
            ToggalScreenAndNotesComponent={this.state.ToggalScreenAndNotesComponent}
            SubTopics={this.state.SubTopicPack}/>
       </div> 
      );
   }
}

export default withStyles(Styles)(YourCourses);