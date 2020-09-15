import React , { Component } from 'react';

import {storage} from '../../../firebase/Index';

import NotesPage from "./NoteDisplay/NotePage.jsx";
import Menu from "@material-ui/icons/Menu";
import Card from "../../../ComponentsMaterialUi/Card/Card.jsx";
import CardBody from "../../../ComponentsMaterialUi/Card/CardBody.jsx";
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Modal from '../../../ComponentsMaterialUi/Modal/Modal'; 
import Li from "../../../ComponentsMaterialUi/CustomLists/Lists.jsx";
import ListCardForm from '../../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx';
import Axious from '../../../hoc/Axious/Axious';
import { createBrowserHistory } from "history";
import Button from '../../../ComponentsMaterialUi/CustomButtons/Button.jsx';
import { Divider } from '@material-ui/core';

const history = createBrowserHistory({forceRefresh: true});
class TutorialSection extends Component {
    constructor(props){
     super(props);
     this.state ={
        ListOfCurrentSubTopic:[],
        TopicName:" ",
        TopicNotes:" ",
        VideoNAmeForUrl:' ',
        VideoURL:" ",
        ToggleNotesPageDisplay:false,
        BlackDropToggle:false,
      }
      
      this.BlackDropToggle = this.BlackDropToggle.bind(this);
      this.DisplayONTtorialScreen = this.DisplayONTtorialScreen.bind(this);
    }
  
   componentDidMount() {
    }
    

    TopicButton = (e) =>{
      this.setState({BlackDropToggle:!this.state.BlackDropToggle});
    }

    BlackDropToggle = ( ) =>{
      this.setState({BlackDropToggle:false});
    }
  
    DisplayONTtorialScreen = ( e , data,TopicName) =>{
      e.preventDefault();
      const TopicGot=[];

      for(let key in data.TopicData){
        TopicGot.push({
        TopicData:data.TopicData[key].NotesTopic,
        Video:data.TopicData[key].Video,
        id:key
      });
     }
      let VideoDetail = TopicGot[0].Video;
      let storeRef = storage.ref();
      let spaceRef = storeRef.child(VideoDetail)
      storeRef.child('videos/'+VideoDetail).getDownloadURL().then((url) =>{
          this.setState({VideoURL:url});
      })
      this.setState({TopicName:TopicName,ToggleNotesPageDisplay:true,TopicNotes:TopicGot[0].TopicData,BlackDropToggle:!this.state.BlackDropToggle})
    }


    render(){
      console.log(this.props.SubTopics)

      let ManualPadding = window.innerWidth >= 960 ? "0% 13% 0% 13%" : "0 4% 0 4%"

      let NotesPageDisplay = this.state.ToggleNotesPageDisplay ? (
       <NotesPage
          ManualPadding={ManualPadding}
          TopicName={this.state.TopicName}
          TopicNotes={this.state.TopicNotes}
       />
      ):null;
       
      let TutorialScreenAndNoteBoard = this.props.ToggalScreenAndNotesComponent?(
          <div>
           <GridContainer justify="center">
             <GridItem style={{height:"390px", marginBottom:"1%"}} sx={12} sm={12} md={12}>
               <iframe 
                 style={{backgroundColor: "rgb(33, 33, 34)",width:"100%",height:"390px"}} 
                 src={this.state.VideoURL}
                 frameBorder="0" 
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen>
               </iframe>
             </GridItem>

             <GridItem xs={6}  sm={6} md={6}>
               <Button   onClick = {(e)=>this.props.GoBackToChapterList(e)} > Go Back </Button>
             </GridItem>
             <GridItem xs={6}  sm={6} md={6}>
               <Button   onClick = {(e)=>this.TopicButton(e)}> <Menu/>Topics (Start)</Button>
             </GridItem>
           </GridContainer>

           {NotesPageDisplay}
      </div>
      ):null;
      
      let FormArrayForSubList=[];
      for(let key in this.props.SubTopics){
        FormArrayForSubList.push({
          ...this.props.SubTopics[key],
          id:key
        });
      }
      
      console.log(FormArrayForSubList);
      let CurrentSubTopic =this.state.BlackDropToggle?(
        <ListCardForm heading="Choose Topic From Here..">
            {FormArrayForSubList.map(formLog => ( 
              <GridItem key={formLog.id} xs={12} sm={12} md={12}>
                <Li
                   style={{
                      fontWeight:"650",
                      padding:"0 0 0 0 ",
                      border:"1px solid  #e6e6e6"
                   }}
                   id={formLog.id}
                   PartAfixedTitle= "Topic"
                   PartAToDisplay = {formLog.TopicNumber}
                   PartBToDisplay = {formLog.TopicName}
                   clicked={(e)=>this.DisplayONTtorialScreen(e,formLog,formLog.TopicName)}
                  >
                </Li>
             </GridItem>
           ))}
       </ListCardForm>
      ):null;
      
      return (
         <div>
           {TutorialScreenAndNoteBoard}
           <Modal left="35%" right="15%" show={this.state.BlackDropToggle} BlackDrop={this.BlackDropToggle}>
            {CurrentSubTopic}
           </Modal>      
         </div>
      );
    }   
  }

export default TutorialSection ; 