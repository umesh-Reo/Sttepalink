import React from "react";
import GridContainer from '../../../ComponentsMaterialUi/Grid/GridContainer.jsx';
import GridItem from "../../../ComponentsMaterialUi/Grid/GridItem.jsx";
import ListCardForm from "../../../ComponentsMaterialUi/CustomLists/ListCardForm.jsx";
import Li from "../../../ComponentsMaterialUi/CustomLists/Lists.jsx";
import Button from "../../../ComponentsMaterialUi/CustomButtons/Button.jsx";
import CreateOrTopicEntryForm from "../../../ComponentsMaterialUi/ChapterOrTopicEntryForm/ChapterOrTopicEntryForm.jsx";
import Modal from '../../../ComponentsMaterialUi/Modal/Modal';

const ChapterEntrySection = (props) =>{  
    let ManualMargin = window.innerWidth >= 960 ? "25px 10% 5px 10%" : "15% 0 1% 0";
    let ManualWidth = window.innerWidth >= 960 ? "80%" : "100%";
  
 return(
        <div>
           <div style={{width:ManualWidth,margin:ManualMargin}}>  
             <ListCardForm heading=" Available Chapters">
               {props.fetchedChapters.map(formLog => ( 
                 <GridItem key={formLog.id} xs={12} sm={12} md={12}>
                   <Li
                     style={{
                       fontWeight:"650",
                       padding:"0 0 0 0 ",
                       border:"1px solid  #e6e6e6"
                      }}
                     id={formLog.id} 
                     clicked= {(e)=>props.GetChapters(e,formLog)} 
                     PartAfixedTitle = "Chapter"
                     PartAToDisplay={formLog.ChapterNumber} 
                     PartBToDisplay={formLog.ChapterName}
                   />  
                 </GridItem>
               ))}
             </ListCardForm>
             <GridContainer>
                <GridItem  md={4} style={{marginLeft:"66.6%",marginTop:"4%"}}>
                  <Button style={{boxShadow: "0 3px 5px 2px  #a6a6a6",paddingTop:"7%"}}  onClick={props.ToggleChapterEntryForm}>+ Add Chapter</Button>
                </GridItem>
              </GridContainer> 
            </div>
   
            <Modal 
            left="40%"
            right="20%"
            show={props.ChapterFormToggle} 
            BlackDrop={props.ToggleBlackDrop}>
             <CreateOrTopicEntryForm
               officialdetailsStandart={props.Standart} 
               officialdetailsSubject={props.Subject}
               ChapterOrTopicNumberValue={props.number}
               ChapterOrTopicNameValue = {props.name}
               CreateNewChapter={(event) =>{props.CreateNewChapters(event)}}
               ChapterOrTopicNameEntry={(event,Data) => {props.ChapterNameInputhandler(event,Data)}}
               ChapterOrTopicNumberEntry={(event) =>{props.ChapterNumberEntry(event)}}
               Headder="Create New Chapters"
               StandardOrSub="Standard"
               ChapterOrSub="Subject"
               PlaceholderForChapterOrTopicName={props.ChapterNamePlaceholder}
               PlaceholderForChapterOrTopicNumber={props.ChapterNumberPlaceholder}
            />
           </Modal>
      </div>
   );
}

export default ChapterEntrySection;