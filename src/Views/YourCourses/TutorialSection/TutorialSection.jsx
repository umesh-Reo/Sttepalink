import React , { Component } from 'react';

import {storage} from '../../../firebase/Index';

import NotesPage from "./NoteDisplay/NotePage.jsx";
import Menu from "@material-ui/icons/Menu";
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from '../../../ComponentsMaterialUi/Grid/GridItem.jsx';
import Modal from '../../../ComponentsMaterialUi/Modal/Modal'; 
import Li from "../../../ComponentsMaterialUi/CustomLists/Lists.jsx";
import ListCardForm from '../../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx';
import { createBrowserHistory } from "history";
import Button from '../../../ComponentsMaterialUi/CustomButtons/Button.jsx';


const history = createBrowserHistory({forceRefresh: true});

class TutorialSection extends Component {
  state ={
    ListOfCurrentSubTopic:[],
    TopicName:" ",
    TopicNotes:" ",
    VideoNAmeForUrl:' ',
    VideoURL:" ",
    ToggleNotesPageDisplay:false,
    BlackDropToggle:false,
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
    let ManualPadding = window.innerWidth >= 960 ? "0% 13% 0% 13%" : "0 4% 0 4%"
    let TutorialScreenButtonPadding = window.innerWidth >= 960 ? "0 15px 0 15px" : "0 0 0 0"
    let NotesPageDisplay = this.state.ToggleNotesPageDisplay ? (
     <NotesPage
        ManualPadding={ManualPadding}
        TopicName={this.state.TopicName}
        TopicNotes={this.state.TopicNotes}
     />
    ):null;
       
    let TutorialScreenAndNoteBoard = this.props.ToggalScreenAndNotesComponent?(
     <div style={{padding:TutorialScreenButtonPadding}}>
       <GridContainer justify="center">
         <GridItem style={{height:"490px", marginTop:"10px",marginBottom:"1.5%"}} sx={12} sm={12} md={12}>
           <iframe 
             style={{backgroundColor:"#242729",width:"100%",height:"490px"}} 
             src={this.state.VideoURL}
             frameBorder="0" 
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
             controlsList="nodownload"
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