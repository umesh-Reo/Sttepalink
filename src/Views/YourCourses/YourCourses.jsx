import React , { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";

import ListCardForm from "../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx";
import TutorialScreem from './TutorialSection/TutorialSection.jsx';
import GridContainer from '../../ComponentsMaterialUi/Grid/GridContainer';
import GridItem from "../../ComponentsMaterialUi/Grid/GridItem";
import Button from "../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import Li from "../../ComponentsMaterialUi/CustomLists/Lists.jsx";
import Modal from "../../ComponentsMaterialUi/Modal/Modal";
import YourCoursesStyle from "../../assets/jss/material-dashboard-react/components/YourCoureseStyle.jsx";
import * as action from  "../../Store/actions/index";

class YourCourses extends Component {
   state={
    SubTopicPack:[],
    currentSubject:"",
    Class:"",
    ShowTheChapterDisplayCard : false,
    ToggalScreenAndNotesComponent:false
   }
  
   componentDidMount(){
      this.props.getStudentCourses(this.props.userId,this.props.tokenId)
   }

   GoBackToChapterList = ( ) => {
    this.setState({ToggalScreenAndNotesComponent:!this.state.ToggalScreenAndNotesComponent});
   }

   BlackDropToggle = ( ) =>{
    this.setState({ShowTheChapterDisplayCard:false});
   }

   ChapterListCards = ( event,ChapterId ) => {
     this.props.displayAvailableTopics(this.props.tokenId,this.props.ClassDetails,this.props.SubjectName,ChapterId);
     this.setState({ToggalScreenAndNotesComponent:true});
   }

  AddSubjectToCard = (classDetail , Subject) =>{
     this.props.displaySelectedSubject(this.props.tokenId,classDetail,Subject);
     this.setState({ShowTheChapterDisplayCard:true});
  }
 
   render(){
     console.log(this.props.txy);
     const { classes, ...rest } = this.props;

     let ChapterListToDisplay = [ ];
     if(this.props.ChapterList){
        console.log(this.props.ChapterList);
      ChapterListToDisplay = this.props.ChapterList;
     }

      let ChapterListCards = <Modal left="35%" right="15%" show={this.state.ShowTheChapterDisplayCard} BlackDrop={this.BlackDropToggle}>
       <ListCardForm heading={this.props.SubjectName}>
          {ChapterListToDisplay.map(results=>(
             <GridItem key={results.id} xs={12} sm={12} md={12}>
                <Li
                   style={{
                      fontWeight:"650",
                      padding:"0 0 0 0 ",
                      border:"1px solid  #e6e6e6"
                   }}
                   id={results.id}
                   clicked={(event)=>this.ChapterListCards(event,results.id)}
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
  
     let Subjects = [ ];
     if(this.props.userDetails){
      Subjects = this.props.userDetails
     }
  let Cards = !this.state.ToggalScreenAndNotesComponent?(<div style={{margin:ManualMargin,width:SubjectNAmeButtonCardWidth}}>
     <div className={classes.HeadderStyle}> 
      <div className={classes.CurrentUsingSubject}>Available Subjects : </div>
        <Divider style={{margin:"0 0 1% 0%",height:"1px", color:"#dee0df"}}/>
        <GridContainer>
           {Subjects.map(res=>(
           <GridItem key={res.id} xs={6} sm={4} md={3}>
             <Button
                style={{
                   fontWeight:"650",
                   color:"blue",
                   border:"1px solid  #e6e6e6"
                }}
                onClick={(event)=>this.AddSubjectToCard(res.Class ,res.SubjectName)}
               >
               {res.SubjectName}
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
            SubTopics={this.props.ListOfTopics}/>
       </div> 
      );
   }
}

const mapStateToProp = ( state ) => {
   return{
      userId : state.Auth.userId,
      tokenId : state.Auth.token,
      userDetails:state.StudentCourses.userCourseDetails,
      ChapterList:state.StudentCourses.ChapterList,
      SubjectName:state.StudentCourses.Subject,
      ClassDetails:state.StudentCourses.Class,
      ListOfTopics:state.StudentCourses.topicsList
   };
}

const mapDispatchToProp = dispatch => {
   return{
      getStudentCourses : (userId,tokenId) => dispatch(action.getStudentCourse(userId,tokenId)),
      displaySelectedSubject:(token, classDetail, subjectName) => dispatch(action.DisplayAvailableChapters(token,classDetail,subjectName)),
      displayAvailableTopics:(TokenId , Class , Chapter , ChapterId) => dispatch(action.DisplayAvailableTopics(TokenId , Class , Chapter , ChapterId))
   };
}
export default connect(mapStateToProp,mapDispatchToProp) (withStyles(YourCoursesStyle)(YourCourses));