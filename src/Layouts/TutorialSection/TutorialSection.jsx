import React , { Component } from 'react';
import {storage} from '../../firebase/Index';
import NavigationBar from '../../Components/Ui/Header/Headder';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Modal from '../../ComponentsMaterialUi/Modal/Modal'; 
import WelcomeNotes from '../../Views/WelcomePage/WelcomePage.jsx';
import Axious from '../../hoc/Axious/Axious';
//import { Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import Aux from '../../hoc/Aux';
import './TutorialSection.css';
import Button from '../../Components/Ui/Button/Button';

const history = createBrowserHistory({forceRefresh: true});
class TutorialSection extends Component {
    constructor(props){
     super(props);
     this.state ={
       ListTags:{
          Notification:{
           elementType:'Route',
           ClassNames:"Buttn",
           Ref: "/Profile",
          },
          Subjects:{
           elementType:'Route',
           ClassNames:"Buttn",
           Ref: "/Profile",
          },
          Profile:{
           elementType:'Route',
           ClassNames:"Buttn",
           Ref: "/Profile",
          },
          Chat:{
           elementType:'Route',
           ClassNames:"Buttn",
           Ref: "/Profile",
          },
          Performance:{
           elementType:'Route',
           ClassNames:"Buttn",
           Ref: "/Notification",
          },
          CurrentAffires:{
           elementType:'Route',
           ClassNames:"Buttn",
           Ref: "/Notification",
          }  
        },
        GotUserDetails:{},
        chapterDetail:[],
        CurrentAllTopic:[],
        AllTopicOfCurrentRunningChapter:[],
        AllSelectedSubTopic:[],
        ListOfCurrentSubTopic:[],
        UserName:' ',
        SelectedSubTopic:'',
        ChapterNumberCounter: 0 ,
        TopicNumberCounter: 0 ,
        CurrentTopic:'',
        CurrentChapter:'',
        SetSubjectName:'',
        ToggalSubjectAndChapterComponent:true,
        ListOfChapters:false,
        toggledListForm:false,
        ToggleArrowButton:true,
        BlackDropToggle:false,
        VideoNAmeForUrl:' ',
        VideoURL:" ",
        SubTopicName:" ",
        TopicNotes:" ",
        logOut:false
      }

      this.GetTopicsFromBack2 = this.GetTopicsFromBack2.bind(this);
      this.ToggleChapterAndListForm = this.ToggleChapterAndListForm.bind(this);
      this.GetChaptersForTheStudents = this.GetChaptersForTheStudents.bind(this);
      this.GoBackToPreviousChapter = this.GoBackToPreviousChapter.bind(this);
      this.GoToNextChapter = this.GoToNextChapter.bind(this);
      this.GoBackToPrevioustopic = this.GoBackToPrevioustopic.bind(this);
      this.GoToNextTopic = this.GoToNextTopic.bind(this);
      this.ListOfCurrentSubTopics = this.ListOfCurrentSubTopics.bind(this);
      this.BlackDropToggle = this.BlackDropToggle.bind(this);
      this.DisplayONTtorialScreen = this.DisplayONTtorialScreen.bind(this);
      this.GetAllSubTopicAndAdd = this.GetAllSubTopicAndAdd.bind(this);
      this.LogOut = this.LogOut.bind(this);
      
    }
   //WillMount
   componentWillMount() {
     const UserId = localStorage.getItem("UserDetail");
       Axious.get("/userDetails/"+UserId+".json")
       .then(res=>{
         console.log(res);
         const GetUserDetail=res.data;
         this.setState({
           GotUserDetails:GetUserDetail,
           UserName:res.data.name
          });
       })
       .then(err=> console.log(err)); 
    }
    
    GetTopicsFromBack2 =(e, chapterId , chapterName ,topic) =>{
      e.preventDefault();
      console.log(chapterId ,chapterName );
      const TopicGot=[];
      for(let key in topic){
        TopicGot.push({
         ...topic[key],
         id:key
       });
      }
      this.setState({CurrentAllTopic:TopicGot,CurrentChapter:chapterName});
      this.setState({CurrentTopic:TopicGot[0].Topic});
    } 
    
    ToggleChapterAndListForm = ( ) =>{
      this.setState({toggledListForm:!this.state.toggledListForm});
      this.setState({ToggleArrowButton:!this.state.ToggleArrowButton})
    }

    GetChaptersForTheStudents = (e , Class , subjectName) =>{
      e.preventDefault();
      Axious.get('/Subjects/'+Class+'/'+subjectName+'.json')
      .then(res=>{
      const chapterGot=[];
      for(let key in res.data){
        chapterGot.push({
          ...res.data[key],
          id:key
        });
      }

      const ListedTopics = chapterGot[0].topic;
      const GetTopicAndMAkeArray=[];
      for(let key in ListedTopics){
        GetTopicAndMAkeArray.push({
          ...ListedTopics[key],
          id:key
        });
      }
     console.log(this.state.GetTopicAndMAkeArray);
      const GetAllTopic = chapterGot[0].topic;
      console.log(GetAllTopic);
      //create Array Of Topics List
      const TopicArray=[];
      for(let key in GetAllTopic){
        TopicArray.push({
          ...GetAllTopic[key],
          id:key
        });
      }
     
     console.log(TopicArray);
      //Available Data Fetched form the Selected Sub-Topic e.g video, notes,etc.
      const LetsCheckSubTopics=[];
        for(let key in TopicArray){
          LetsCheckSubTopics.push({
            ...TopicArray[key].SubTopicName,
          });
        }
        
       const ListOfCurrentSubTopic = LetsCheckSubTopics[0];
       console.log(ListOfCurrentSubTopic);
       const ChoosedTopic = TopicArray[0].Topic;
       this.setState({AllTopicOfCurrentRunningChapter:TopicArray,TopicNumberCounter:0,CurrentTopic:ChoosedTopic});
       this.setState({CurrentAllTopic:GetTopicAndMAkeArray,ListOfCurrentSubTopic:ListOfCurrentSubTopic});
       this.setState({chapterDetail:chapterGot,ListOfChapters:true ,SetSubjectName:subjectName ,ToggalSubjectAndChapterComponent:false});
       this.setState({CurrentChapter:this.state.chapterDetail[0].chapter,CurrentTopic:this.state.CurrentAllTopic[0].Topic});
      })
      .then(err=> console.log(err));
    }

    GoBackToPreviousChapter = (e,Count) =>{
      e.preventDefault();
      console.log(Count);
      Count = Count - 1 ;
      const BackPointerToNextChapter = {...this.state.chapterDetail};
      console.log(this.state.chapterDetail);
      if( Count >= 0){ 
        const GetChapterToSave = BackPointerToNextChapter[Count].chapter;
        console.log(GetChapterToSave);
        const GetAllTopic = BackPointerToNextChapter[Count].topic;
        console.log(GetAllTopic);
        //create Array Of Topics List
        const TopicArray=[];
        for(let key in GetAllTopic){
          TopicArray.push({
            ...GetAllTopic[key],
            id:key
          });
        }
         const ChoosedTopic = TopicArray[0].Topic;
         const GoBackRelatedTopicArray = TopicArray[0].SubTopicName;
        console.log(TopicArray);
        this.setState({AllTopicOfCurrentRunningChapter:TopicArray,ListOfCurrentSubTopic:GoBackRelatedTopicArray,TopicNumberCounter:0});
        this.setState({CurrentChapter:GetChapterToSave,CurrentTopic:ChoosedTopic,ChapterNumberCounter:Count});
      }
    }

    GoToNextChapter = (e,Count) =>{
      e.preventDefault();
      console.log(Count);
      let RemoveChapterFromList="";
      let ChoosedTopic =" ";
      let RelatedTopicArray=" ";
      let TopicArray=[];
      Count = Count + 1 ;
      let GoPointerToNextChapter = [...this.state.chapterDetail];
      if(Count < GoPointerToNextChapter.length ){
      RemoveChapterFromList = GoPointerToNextChapter[Count].chapter;
      console.log(RemoveChapterFromList);
      const GetAllTopic = GoPointerToNextChapter[Count].topic;
      console.log(GetAllTopic);
      //create Array Of Topics List
      
      for(let key in GetAllTopic){
        TopicArray.push({
          ...GetAllTopic[key],
          id:key
        });
      }

       ChoosedTopic = TopicArray[0].Topic;
       RelatedTopicArray = TopicArray[0].SubTopicName;
       this.setState({ChapterNumberCounter:Count});
       console.log(ChoosedTopic);
    }else{
      RemoveChapterFromList="Chapters Finished ..";
      ChoosedTopic="No More Related Topics .."
      RelatedTopicArray ="No More Sub-Topics.."
      console.log(Count);
    }
    this.setState({AllTopicOfCurrentRunningChapter:TopicArray,ListOfCurrentSubTopic:RelatedTopicArray,TopicNumberCounter:0 });
    this.setState({CurrentChapter:RemoveChapterFromList,CurrentTopic:ChoosedTopic});
  }


    GoBackToPrevioustopic = (e,Count) =>{
      e.preventDefault();
      console.log(Count);
      const BackPointerToNextChapter = {...this.state.AllTopicOfCurrentRunningChapter};
      Count = Count - 1 ;
      if(Count>=0){
        let StoreTopic=[];
        for(let key in BackPointerToNextChapter){
          StoreTopic.push({
            ...BackPointerToNextChapter[key]
          })
        }
        console.log(StoreTopic);
        const LetsCheckSubTopics=[];
        for(let key in StoreTopic){
         LetsCheckSubTopics.push({
            ...StoreTopic[key].SubTopicName,
         });
         console.log(LetsCheckSubTopics);
        }

        this.setState({ListOfCurrentSubTopic:LetsCheckSubTopics[Count]});
        this.setState({TopicNumberCounter:Count});
        // AllSelectedSubTopic keeps all Array of sub topic to display
        console.log(StoreTopic,StoreTopic[0],BackPointerToNextChapter[Count].Topic);
        this.setState({AllSelectedSubTopic:StoreTopic,SelectedSubTopic:StoreTopic[0],CurrentTopic:BackPointerToNextChapter[Count].Topic});
        
      }  
    }

    GoToNextTopic = (e,Count) =>{
      e.preventDefault();
      console.log(Count);
      Count = Count + 1 ;
      const BackPointerToNextChapter = [...this.state.AllTopicOfCurrentRunningChapter];
      if(Count < BackPointerToNextChapter.length){
        let StoreTopic=[];
        for(let key in BackPointerToNextChapter){
            StoreTopic.push({
              ...BackPointerToNextChapter[key]
            })
        }
       
        const LetsCheckSubTopics=[];
        for(let key in StoreTopic){
          LetsCheckSubTopics.push({
            ...StoreTopic[key].SubTopicName,
          });
          console.log(LetsCheckSubTopics);
        }
        
        this.setState({ListOfCurrentSubTopic:LetsCheckSubTopics[Count]});
        this.setState({TopicNumberCounter:Count,SelectedSubTopic:StoreTopic[0]});
        this.setState({AllSelectedSubTopic:StoreTopic,CurrentTopic:BackPointerToNextChapter[Count].Topic});
      }else{
           this.setState({CurrentTopic:"no more topic in this chapter"})
      }
    
    }

    ListOfCurrentSubTopics = (e, CurrentSubTopicList) =>{
      console.log(CurrentSubTopicList);
      this.setState({BlackDropToggle:!this.state.BlackDropToggle});
      
    }

    BlackDropToggle = ( ) =>{
      this.setState({BlackDropToggle:false});
    }
  
    DisplayONTtorialScreen = ( e , id , SubTopicName , SubTopicData, Video) =>{
      e.preventDefault();
      console.log( id , SubTopicName , SubTopicData, Video);
      let storeRef = storage.ref();
      let spaceRef = storeRef.child(Video)
      storeRef.child('videos/'+Video).getDownloadURL().then((url) =>{
          console.log(url);
          this.setState({VideoURL:url});
      })
      this.setState({SubTopicName:SubTopicName,TopicNotes:SubTopicData,VideoNAmeForUrl:Video,BlackDropToggle:!this.state.BlackDropToggle})
    }


    GetAllSubTopicAndAdd = (e , SubToppicArray ) =>{
      e.preventDefault();
      console.log(SubToppicArray);
      let StoreTopicOfSutCut=[];
      for(let key in SubToppicArray){
       StoreTopicOfSutCut.push({
       ...SubToppicArray[key]
     })
     }
     this.setState({ListOfCurrentSubTopic:StoreTopicOfSutCut,SelectedSubTopic:StoreTopicOfSutCut[0]});
     this.ListOfCurrentSubTopics(e,StoreTopicOfSutCut); 
     // console.log('topic',this.state.TopicNumberCounter);
    }

    LogOut = ( ) =>{
    //  this.setState({logOut:true})
      history.push("/");
    }
    render(){
    //  if(this.state.logOut){
    //    console.log("done");
    //    localStorage.removeItem("token");
    //    localStorage.removeItem("UserDetail");
     // }
   
  
      const formArray = [];
      for(let key in this.state.GotUserDetails.Subjects){
        formArray.push({
         Id: key,
         listOfTheSubjects: this.state.GotUserDetails.Subjects[key]
        });
      }

      const SubjectArray = [];
      for(let key in this.state.GotUserDetails.Subjects){
        SubjectArray.push({
         Id: key,
         list: this.state.GotUserDetails.Subjects[key].Subject
        });
      }
   console.log(SubjectArray);
     let SubjectListButtons =this.state.ToggalSubjectAndChapterComponent?( 
         <div className="ButtonSummary">
           <div className="ButtonSummaryForm1">
             <div className="ButtonSummaryListBackground">
               <form className="AvailableList">
                 {SubjectArray.map(SubjectLog => ( 
                   <div className="IconAndSubjectButton" key={SubjectLog.Id}>
                     <MenuBookTwoToneIcon/> 
                     <Button 
                        elementTypes="li"
                        btnType="Buttn"
                        clicked={(e)=>this.GetChaptersForTheStudents( e, this.state.GotUserDetails.class,SubjectLog.list )}
                       >  
                       {SubjectLog.list} 
                     </Button>   
                    </div>         
                  ))}
               </form>
             </div>
           </div>  
         </div> ):null;

     let ChaptersListComponents=this.state.ToggalSubjectAndChapterComponent?( 
       <WelcomeNotes UserName={this.state.UserName}/>
      ):null;

     let  ToggleChapterAndListFormTogalled = this.state.toggledListForm?(
       <div className="RelatedTopicsTable">
         <div className="chapterListButtons">
           <div className="ButtonSummaryListBackground">
             <form className="AvailableList">
               
               {this.state.chapterDetail.map(formLog => ( 
                <Button
                  key={formLog.id} 
                  elementTypes="li"
                  btnType="SubjectList"
                  clicked= {(e)=>this.GetTopicsFromBack2(e,formLog.id, formLog.chapter, formLog.topic)}     
                 >
                  {formLog.chapter} 
                 </Button>
              ))}
            </form>
          </div>  
         </div>  
         <div className="TopicsSummaryForm">
          <div className="ButtonSummaryListBackground">
            <form className="AvailableList">
              {this.state.CurrentAllTopic.map(formLog => (  
                <Button
                  key={formLog.id} 
                  elementTypes="li"
                  btnType="TopicListsForms"
                  clicked ={(e)=>this.GetAllSubTopicAndAdd(e,formLog.SubTopicName)}
                >
                  {formLog.Topic} 
                </Button>                  
               ))}
            </form>
          </div> 
         </div> 
       </div>  
      ):null;
     
      let ArrowButtonSign = this.state.ToggleArrowButton?(<ArrowDownwardIcon/>):(<ArrowUpwardIcon/>);
    
    
      let TutorialScreenAndNoteBoard = !this.state.ToggalSubjectAndChapterComponent?(
        <div className="StudentsScreen">
        <div className="SudentScreenFrame">
          <div className="ScreenAndNotesBoard">
            <div className="Screen">
              <iframe className="introvideo" 
               src={this.state.VideoURL}
               frameBorder="0" 
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen>
              </iframe>
            </div>
            <div className="NotesBoard">
                <div className="SubTopicnotesData">
                 <div className="SubTopicNameDisplay">{this.state.SubTopicName}</div>
                 <p className="NotesDisplay">{this.state.TopicNotes}</p>  
                </div> 
            </div> 
          </div>
        </div>
      
        <div className="ShortCutButtons">
          <div className="innerContainersOfShortCutButtons">
           
            <div className="ChapterAndTopicBlock">
             <Button 
               btnType = "SwitchButton"
               elementTypes="Button"
               clicked = {(e)=>this.GoBackToPreviousChapter(e,this.state.ChapterNumberCounter)}
             ><KeyboardArrowLeftIcon/></Button>
             <p>{this.state.CurrentChapter}</p>
             <Button 
                btnType = "SwitchButton"
                elementTypes="Button"
                clicked = {(e)=>this.GoToNextChapter(e,this.state.ChapterNumberCounter)}
             ><KeyboardArrowRightIcon/></Button>
            </div>
            <div className="ChapterAndTopicBlock">
             <Button 
                btnType = "SwitchButton"
                elementTypes="Button"
                clicked = {(e)=>this.GoBackToPrevioustopic(e,this.state.TopicNumberCounter)}
             ><KeyboardArrowLeftIcon/></Button>
              
             <p>{this.state.CurrentTopic}</p>
             <Button 
               btnType = "SwitchButton"
               elementTypes="Button"
               clicked = {(e)=>this.GoToNextTopic(e,this.state.TopicNumberCounter)}
             ><KeyboardArrowRightIcon/></Button>
            </div>
      
            <div className="SubTopicListBackDropButton">
             <Button 
                btnType = "SwitchButtonToSubTopicBackDrop"
                elementTypes="Button"
                clicked = {(e)=>this.ListOfCurrentSubTopics(e,this.state.ListOfCurrentSubTopic)}
             >Sub-Topics List</Button>
            </div>
      
            <div className="ToggleBotton">
              <Button 
                  btnType = "ToggleButton"
                  elementTypes="Button"
                  clicked = {this.ToggleChapterAndListForm}
              >{ArrowButtonSign}</Button>
            </div>
          </div>
        </div>
       {ToggleChapterAndListFormTogalled}
      </div>
      ):null;
  
  
      //For Sub-Topic Display in Modal (BlackDrop)
      
      let FormArrayForSubList=[];
      for(let key in this.state.ListOfCurrentSubTopic){
        FormArrayForSubList.push({
          ...this.state.ListOfCurrentSubTopic[key],
          id:key
        });
      }
      
      console.log(FormArrayForSubList);
      let CurrentSubTopic =this.state.BlackDropToggle?(
        <div className="SubListListButtons">
          <form className="SubTopicList">
            {FormArrayForSubList.map(formLog => ( 
             <Button
               key={formLog.id} 
               elementTypes="li"
               btnType="SubjectList"
               clicked= {(e)=>this.DisplayONTtorialScreen(e,formLog.id, formLog.NotesSubtopicName, formLog.NotesTopic, formLog.Video)}     
              >
               {formLog.NotesSubtopicName} 
              </Button>
           ))}
         </form>
       </div>
      ):null;
      
      return (
       <Aux>
         <NavigationBar HeadderForm="container2" LogOut={this.LogOut} check={true}/>
         <div className="TutorialSceenBackGround">
           {SubjectListButtons}
           {ChaptersListComponents}
           {TutorialScreenAndNoteBoard}
           <Modal show={this.state.BlackDropToggle} BlackDrop={this.BlackDropToggle} title="Sub-Topic">
            {CurrentSubTopic}
           </Modal>      
         </div>
       </Aux>  
      );
    }   
  }

export default TutorialSection ; 