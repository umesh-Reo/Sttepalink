import React from "react";
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from "../../../ComponentsMaterialUi/Grid/GridItem.jsx";
import ListCardForm from "../../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx";
import Li from "../../../ComponentsMaterialUi/CustomLists/Lists.jsx";
import Button from "../../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import CreateOrTopicEntryForm from "../../../ComponentsMaterialUi/ChapterOrTopicEntryForm/ChapterOrTopicEntryForm.jsx";
import Modal from '../../../ComponentsMaterialUi/Modal/Modal';

const TopicEntrySection = (props) =>{  
  let ManualMargin = window.innerWidth >= 960 ? "25px 10% 5px 10%" : "15% 0 1% 0";
  let ManualWidth = window.innerWidth >= 960 ? "80%" : "100%";
     
   return(
      <div>
          <div style={{width:ManualWidth,margin:ManualMargin}}>   
              <ListCardForm  heading="Available Topic">
                  {props.fetchedTopics.map(formLog => ( 
                      <GridItem key={formLog.id} xs={12} sm={12} md={12}>
                          <Li
                              style={{
                                 fontWeight:"650",
                                 padding:"0 0 0 0 ",
                                 border:"1px solid  #e6e6e6"
                               }}
                               id={formLog.id} 
                               clicked= {(e)=>props.GetTopics(e,formLog)} 
                               PartAfixedTitle = "Topic"
                               PartAToDisplay={formLog.TopicNumber} 
                               PartBToDisplay={formLog.TopicName}
                          />
                         
                      </GridItem>
                  ))}
              </ListCardForm>
    
              <GridContainer style={{marginTop:"4%"}}>
              <GridItem  md={4}>
                  <Button  onClick={props.GoBackButtonToChapterPage}>Go Back</Button>
                </GridItem>
                <GridItem  md={4} style={{marginLeft:"33.3%"}}>
                  <Button  onClick={props.ToggleTopicEntryForm}>+ Create Topic</Button>
                </GridItem>
              </GridContainer> 
           </div>
  
           <Modal 
           left="40%"
           right="20%"
           show={props.TopicFormToggle} 
           BlackDrop={props.ToggleBlackDrop}>
              <CreateOrTopicEntryForm
                 officialdetailsStandart={props.Subject} 
                 officialdetailsSubject={props.ChapterName}
                 officialdetailsSubjectId={props.id} // don't know why?
                 ChapterOrTopicNumberValue={props.number}
                 ChapterOrTopicNameValue = {props.name}
                 CreateNewChapter={(event) =>{props.CreateNewTopics(event)}}
                 ChapterOrTopicNameEntry={(event) => {props.TopicNameInputhandler(event)}}
                 ChapterOrTopicNumberEntry={(event) => {props.TopicNumberInputHandler(event)}}
                 StandardOrSub="Subject"
                 ChapterOrSub="Chapter"
                 PlaceholderForChapterOrTopicName={props.TopicNamePlaceholder}
                 PlaceholderForChapterOrTopicNumber={props.TopicNumberPlaceholder}
                 Headder = "Create New Topics"
               />   
           </Modal>
      </div>
    );
}
    
export default TopicEntrySection;