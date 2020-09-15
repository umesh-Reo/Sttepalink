import React, {Component} from 'react';
import TopicDataEntry from './TutorialDataEntryForm/EnterData';
import ChapterEntryPage from "./ChapterEntryForm/ChapterEntryForm.jsx";
import TopicEntryPage from "./TopicEntryForm/TopicEntryForm.jsx";
import UserLoginForm from "./UserLoginForm/UserLoginForm";
import axious from '../../hoc/Axious/Axious';
import './NonOfficialPersonal.css';

    
class UserAuthenticate extends Component {
  state={
    LoginDetails:{ 
      emailId:{
        elementType:'input',
        type:'email',
        placeholder:'Enter Your e-mail Id',
        value:""
       },
      Standart:{
        elementType:'select',
        options:[
          {
            value:"Class 12" ,
            displayValue:"Class 12" 
          },
          { 
            value:"Class 11", 
            displayValue:"Class 11" 
          },
          { 
            value:"Class 10", 
            displayValue:"Class 10" 
          },
          { 
            value:"Class 9", 
            displayValue:"Class 9" 
          },
          { 
            value:"Class 8", 
            displayValue:"Class 8" 
          },
          { 
            value:"Class 7", 
            displayValue:"Class 7" 
          },
          { 
            value:"Class 6", 
            displayValue:"Class 6"
          }
        ],
        value:"Class 12" 
        },
      Subject:{
        elementType:'input',
        type:'text',
        placeholder:'Enter Subject',
        value:''
      }, 
      Password:{
       elementType:'input',
       type:'password',
       placeholder:'Password',
       value:''
      }
    },
    ChapterDetail:{
      ChapterName:{
        elementType:'input',
         type:'text',
         placeholder:"Enter Chapter Name Here...",
        value:''        
      },
      ChapterNumber:{
        elementType:'input',
         type:'number',
         placeholder:"Enter Chapter Number Here...",
        value:''        
      },
    },
    TopicDetail:{
      TopicName:{
        elementType:'input',
        type:'text',
        placeholder:"Enter Topic Name Here...",
        value:''        
      },
      TopicNumber:{
        elementType:'input',
         type:'number',
         placeholder:"Enter Topic Number Here...",
        value:''        
      },
    },
    NotesStoreHouse:{
     notes:{
        elementType:'textarea',
         type:'text',
         placeholder:'',
        value:''        
      }
    },
    showTeacherAuthLog:true,
    ShowChapterForm:false,
    ShowTopicForm:false,
    ShowDataEntryForm:false,
    ChapterFormToggle:false,
    TopicFormToggle:false,
    fetchedChapters:[],
    fetchedTopics :[],
    SubTopicName:'',
    SubTopicVideoUrlName:'',
    PreGetState:"",
    GetChapterId:[],
    GetTopicId:[],
    CurrentTeacherDetails:[]
  } 

  SubmitDetails = ( e ) =>{
    e.preventDefault();
    axious.get('/TeachersAcc/Details.json')
    .then(res=>{
      const IDs = [];
      for(let key in res.data){
        IDs.push({
            ...res.data[key],
            id:key
          });
        }
          IDs.map(rew =>{
            console.log(rew.emailId,rew.Password,rew.Standart);
        console.log(this.state.LoginDetails.emailId.value,this.state.LoginDetails.Password.value,this.state.LoginDetails.Standart.value);
          if((rew.emailId === this.state.LoginDetails.emailId.value) && (rew.Password === this.state.LoginDetails.Password.value) && (rew.Standart === this.state.LoginDetails.Standart.value) && (rew.Subject === this.state.LoginDetails.Subject.value)){
            this.setState({showTeacherAuthLog:false,ShowChapterForm:true, ShowTopicForm:false});
            this.setState({CurrentTeacherDetails:rew,UserAuth:true});   
            console.log('matched..');
            const ClassStandart = this.state.LoginDetails.Standart.value;
      const ClassSubjects =this.state.LoginDetails.Subject.value;
      console.log('you Pass');
      axious.get('/Subjects/'+ClassStandart+'/'+ClassSubjects+'.json')
      .then(res => { 
        console.log(res);
        const Chapters = [];
        for(let key in res.data){
          Chapters.push({
              ...res.data[key],
              id:key
            });
          }
          Chapters.map(rew =>{
            this.state.fetchedChapters.push({
              ...rew
            });
          });
       })
      .then(er => console.log(er));
            } 
          });
       })
      .then(err => console.log(err));
    }
         
    Inputhandler = (event, inputIdentifier ) =>{
      console.log(inputIdentifier);
      event.preventDefault();
      const CopyOfLoginDetails = {
        ...this.state.LoginDetails
      };
      
      const UpdatedLoginDetails = {
        ...CopyOfLoginDetails[inputIdentifier]
      };
    
      UpdatedLoginDetails.value = event.target.value;
      CopyOfLoginDetails[inputIdentifier] = UpdatedLoginDetails;
      this.setState({LoginDetails:CopyOfLoginDetails});
    }
 
    ChapterNameInputhandler = (event) =>{
      const CopyOfChapDetails = {
        ...this.state.ChapterDetail
      };

      const UpdatedChapterDetails = {
        ...CopyOfChapDetails.ChapterName
      };
    
      UpdatedChapterDetails.value = event.target.value;
      CopyOfChapDetails.ChapterName = UpdatedChapterDetails;
      this.setState({ChapterDetail:CopyOfChapDetails}); 
    }

    ChapterNumberEntry = (event) => {
      const CopyOfChapterNumber = {
        ...this.state.ChapterDetail
      };

      const UpdatedChapterNumber = {
        ...CopyOfChapterNumber.ChapterNumber
      };
    
      UpdatedChapterNumber.value = event.target.value;
      CopyOfChapterNumber.ChapterNumber = UpdatedChapterNumber;
      this.setState({ChapterDetail:CopyOfChapterNumber}); 
    }
 
    CreateNewChapters = (event) =>{
      event.preventDefault();
      const ClassStandart = this.state.CurrentTeacherDetails.Standart;
      const ClassSubjects =this.state.CurrentTeacherDetails.Subject;
      const ChapterName=this.state.ChapterDetail.ChapterName.value;
      const ChapterNumber=this.state.ChapterDetail.ChapterNumber.value;
      const Chapters = {
        ChapterName:ChapterName,
        ChapterNumber:ChapterNumber
      }

      axious.post('/Subjects/'+ClassStandart+'/'+ClassSubjects+'.json',Chapters)
      .then(res =>{
        const TempFetCha =  this.state.fetchedChapters;
        TempFetCha.push({
          ...Chapters,
          id:res.data.name
        });
       /*  removing available value from input tag */
          const CopyOfChapDetails = {
           ...this.state.ChapterDetail
          };

          const UpdatedChapterName = {
            ...CopyOfChapDetails.ChapterName
          };
    
          UpdatedChapterName.value = " ";
          CopyOfChapDetails.ChapterName = UpdatedChapterName;
          this.setState({ChapterDetail:CopyOfChapDetails}); 

          const UpdatedChapterNumber = {
            ...CopyOfChapDetails.ChapterNumber
          };
        
          UpdatedChapterNumber.value =" ";
          CopyOfChapDetails.ChapterNumber = UpdatedChapterNumber;
          this.setState({ChapterDetail:CopyOfChapDetails});
       /* - - - - - - - - - - - - - - - - - - - - -*/
        this.setState({fetchedChapters:TempFetCha});
        this.ToggleBlackDrop();
      })
      .catch(err => console.log(err));
    }

    TopicNameInputhandler = (event) =>{
      const CopyOfTopDetails = {
        ...this.state.TopicDetail
      };

      const UpdatedTopicDetails = {
        ...CopyOfTopDetails.TopicName
      };
      UpdatedTopicDetails.value = event.target.value;
      CopyOfTopDetails.TopicName = UpdatedTopicDetails;
      this.setState({TopicDetail:CopyOfTopDetails});
    }

    TopicNumberInputHandler = (event) =>{
      const CopyOfTopDetails = {
        ...this.state.TopicDetail
      };

      const UpdatedTopicDetails = {
        ...CopyOfTopDetails.TopicNumber
      };
      UpdatedTopicDetails.value = event.target.value;
      CopyOfTopDetails.TopicNumber = UpdatedTopicDetails;
      this.setState({TopicDetail:CopyOfTopDetails});
    }

    EntryDataNotes = (event)=>{
      const CreatedNotesHub = {
        ...this.state.NotesStoreHouse
      };
     
      const UpdateCreatedNotesHub = {
        ...CreatedNotesHub
      };
      UpdateCreatedNotesHub.value=event.target.value;
      CreatedNotesHub.notes.value=UpdateCreatedNotesHub.value;
      this.setState({NotesStoraHouse:CreatedNotesHub});
    }
 
    EnteringSubTopicName=( event ) =>{
     let UpdateSubNotesName = event.target.value;
      this.setState({SubTopicName:UpdateSubNotesName});
    }

    EnteringVideoName=(event) =>{
      let UpdateSubNotesName = event.target.value;
       this.setState({SubTopicVideoUrlName:UpdateSubNotesName});
     }

    CreateNewTopics = ( event ) =>{
      event.preventDefault();
      const ClassStandart = this.state.LoginDetails.Standart.value;
      const ClassSubjects = this.state.LoginDetails.Subject.value;
      const ChapterId = this.state.GetChapterId.id;
      const Chapters = this.state.GetChapterId.chapter;
      const TopicDet ={
        TopicName : this.state.TopicDetail.TopicName.value,
        TopicNumber : this.state.TopicDetail.TopicNumber.value
      }

      axious.post('/Subjects/'+ClassStandart+'/'+ClassSubjects+'/'+ChapterId+'/topic.json',TopicDet)
      .then(res =>{
        const TempFetTopice =  this.state.fetchedTopics;
        console.log(TopicDet);
        TempFetTopice.push({
          ...TopicDet,
          id:res.data.name
        });
      /* removing available value from input tag */ 
        const CopyOfTopDetails = {
          ...this.state.TopicDetail
        };
  
        const UpdatedTopicName = {
          ...CopyOfTopDetails.TopicName
        };
        UpdatedTopicName.value =" ";
        CopyOfTopDetails.TopicName = UpdatedTopicName;
        this.setState({TopicDetail:CopyOfTopDetails});

        const UpdatedTopicNumber = {
          ...CopyOfTopDetails.TopicNumber
        };
        UpdatedTopicNumber.value = " ";
        CopyOfTopDetails.TopicNumber = UpdatedTopicNumber;
        this.setState({TopicDetail:CopyOfTopDetails});
      /*- - - - - - - - - - - - - - - - - - - - - -- - - - */ 
        this.setState({fetchedTopics:TempFetTopice,});
        this.ToggleBlackDrop();
      })
      .then(err => console.log(err));
     }

    GetChapters = ( e,Id ) =>{
      e.preventDefault();
      const ClassStandart = this.state.LoginDetails.Standart.value;
      const ClassSubjects = this.state.LoginDetails.Subject.value;
      const ChapterId = Id.id;
      axious.get('/Subjects/'+ClassStandart+'/'+ClassSubjects+'/'+ChapterId+'/topic.json')
      .then(res => { 
        const TopicGet = [];
        for(let key in res.data){
          TopicGet.push({
              ...res.data[key],
              id:key
            });
          }
          this.setState({
            showTeacherAuthLog:false,
            GetChapterId:Id,
            ShowChapterForm:false, 
            ShowTopicForm:true,
            fetchedTopics:TopicGet
          });
       })
      .then(err => console.log(err));
    } 

    GetTopics =( e,Id ) =>{
      e.preventDefault();
      this.setState({GetTopicId:Id});
      console.log(Id);
      this.setState({ShowDataEntryForm:!this.state.ShowDataEntryForm,ShowTopicForm:!this.state.ShowTopicForm});
    } 

    CancalledTheActiveProcess = ( ) => {
      this.setState({ShowDataEntryForm : !this.state.ShowDataEntryForm , ShowTopicForm : !this.state.ShowTopicForm});
    }

     
    SubmitProcess = (event) =>{
      event.preventDefault();
      const ClassStandart = this.state.LoginDetails.Standart.value;
      const ClassSubjects = this.state.LoginDetails.Subject.value;
      const ChapterId = this.state.GetChapterId.id;
      const topicId =this.state.GetTopicId.id;
    //  const TopicName=this.state.GetTopicId.TopicName;
      const CurrentNotes= this.state.NotesStoreHouse.notes.value;
     const  NotesData= {
         NotesTopic : CurrentNotes,
         NotesSubtopicName:this.state.TopicName,
         Video:this.state.SubTopicVideoUrlName
      }
      
      axious.post('/Subjects/'+ClassStandart+'/'+ClassSubjects+'/'+ChapterId+'/topic/'+topicId+'/TopicData.json',NotesData)
      .then(res =>{
        const CreatedNotesHub = {
          ...this.state.NotesStoreHouse
        };
       console.log(CreatedNotesHub);
        const UpdateCreatedNotesHub = {
          ...CreatedNotesHub
        };
        console.log(UpdateCreatedNotesHub);
        UpdateCreatedNotesHub.value= "hello";
        CreatedNotesHub.notes.value=UpdateCreatedNotesHub.value;
        console.log(CreatedNotesHub)
        this.setState({ShowDataEntryForm:false,NotesStoraHouse:CreatedNotesHub,ShowTopicForm:true,SubTopicVideoUrlName:" "});
      })
      .catch(err => console.log(err));
    }
    
    ToggleChapterEntryForm = ( ) =>{
      console.log("Chapter form toggle Working");
      this.setState({ChapterFormToggle:true});
    }

    ToggleTopicEntryForm  = ( ) =>{
      this.setState({TopicFormToggle:true});
    }
  
    ToggleBlackDrop = ( ) =>{
      this.setState({TopicFormToggle:false,ChapterFormToggle:false});
    }

    GoBackButtonToChapterPage = ( ) => {
      this.setState({ ShowChapterForm:true,ShowTopicForm:false})
    }
    render(){

      let form = this.state.showTeacherAuthLog ?(
       <UserLoginForm
          emailIdPlaceholder={this.state.LoginDetails.emailId.placeholder}
          emailIdElementType={this.state.LoginDetails.emailId.elementType}
          emailIdValue={this.state.LoginDetails.emailId.value}
          emailIdHandleChange={(event,data) =>this.Inputhandler(event ,data)}  
          emailITtype={this.state.LoginDetails.emailId.type}
          
          SubjectPlaceholder={this.state.LoginDetails.Subject.placeholder}
          SubjectElementType={this.state.LoginDetails.Subject.elementType}
          SubjectValue={this.state.LoginDetails.Subject.value}
          SubjectHandleChange={(event, data) =>this.Inputhandler(event , data)}
          SubjectType={this.state.LoginDetails.Subject.type}
       
          StandartPlaceholder={this.state.LoginDetails.Standart.placeholder}
          StandartElementType={this.state.LoginDetails.Standart.elementType}
          StandartSelectPlaceholder={this.state.LoginDetails.Standart.SelectPlaceholder}
          StandartMenuOptions={this.state.LoginDetails.Standart.options}
          StandartValue={this.state.LoginDetails.Standart.value}
          StandartHandleChange={(event ,data) =>this.Inputhandler(event , data)}         
          StandartType={this.state.LoginDetails.Standart.type}
       
          PasswordPlaceholder={this.state.LoginDetails.Password.placeholder}
          PasswordElementType={this.state.LoginDetails.Password.elementType}
          PasswordValue={this.state.LoginDetails.Password.value}
          PasswordHandleChange={(event, data) =>this.Inputhandler(event , data)}
          PasswordType={this.state.LoginDetails.Password.type}

          SubmitDetails={(e) =>this.SubmitDetails(e)}
       />
      ) : null ;

     
     /* Chapter Entry form Toggle */

     let ChapterEntryFormToggle = this.state.ShowChapterForm ? (
     <ChapterEntryPage
        Standart={this.state.LoginDetails.Standart.value} 
        Subject={this.state.LoginDetails.Subject.value}
        number={this.state.ChapterDetail.ChapterNumber.value}
        name={this.state.ChapterDetail.ChapterName.value}
        CreateNewChapters={(event) =>{this.CreateNewChapters(event)}}
        ChapterNameInputhandler={(event,Data) => {this.ChapterNameInputhandler(event,Data)}}
        ChapterNumberEntry={(event) =>{this.ChapterNumberEntry(event)}}
        ChapterNamePlaceholder={this.state.ChapterDetail.ChapterName.placeholder}
        ChapterNumberPlaceholder={this.state.ChapterDetail.ChapterNumber.placeholder}
        fetchedChapters = {this.state.fetchedChapters}         
        GetChapters= {(e,formLog)=>this.GetChapters(e,formLog)}  
        ToggleChapterEntryForm={this.ToggleChapterEntryForm}
        ChapterFormToggle={this.state.ChapterFormToggle}
        ToggleBlackDrop = {this.ToggleBlackDrop}
     />):null;


        /* Topic Entry form Toggle */

     let TopicEntryFormToggle = this.state.ShowTopicForm ? (
       <TopicEntryPage
         Subject={this.state.LoginDetails.Subject.value} 
         ChapterName={this.state.GetChapterId.ChapterName}
         id={this.state.GetChapterId.id} // don't know why?
         number={this.state.TopicDetail.TopicNumber.value}
         name={this.state.TopicDetail.TopicName.value}
         CreateNewTopics={(event) =>{this.CreateNewTopics(event)}}
         TopicNameInputhandler={(event) => {this.TopicNameInputhandler(event)}}
         TopicNumberInputHandler={(event) => {this.TopicNumberInputHandler(event)}}
         TopicNamePlaceholder={this.state.TopicDetail.TopicName.placeholder}
         TopicNumberPlaceholder={this.state.TopicDetail.TopicNumber.placeholder}
         fetchedTopics = {this.state.fetchedTopics} 
         GetTopics= {(e,formLog)=>this.GetTopics(e,formLog)} 
         GoBackButtonToChapterPage={this.GoBackButtonToChapterPage}
         ToggleTopicEntryForm={this.ToggleTopicEntryForm}   
         TopicFormToggle={this.state.TopicFormToggle} 
         ToggleBlackDrop={this.ToggleBlackDrop}
       />)
     :null;
    

     let TopicDataEntryForm = this.state.ShowDataEntryForm ?
       <TopicDataEntry 
         key={this.state.GetTopicId.id}
         class={this.state.LoginDetails.Standart.value}
         Subject={this.state.LoginDetails.Subject.value}
         TopicName={this.state.GetTopicId.TopicName}
         note = {this.state.NotesStoreHouse.notes}
         name={this.state.SubTopicVideoUrlName}
         Data ={this.state.NotesStoreHouse.notes.value}
         CancelledTheProcess={this.CancalledTheActiveProcess}
         SubmitTheData={(event)=>{this.SubmitProcess(event)}}
         EntringNotes={(event)=>{this.EntryDataNotes(event)}}
         EnteringSubTopicName={(event)=>{this.EnteringSubTopicName(event)}}
         EnteringVideoName={(event)=>{this.EnteringVideoName(event)}}
      />:null;
      
    
      return (
        <div>
         {form}
         {ChapterEntryFormToggle}
         {TopicEntryFormToggle}
         {TopicDataEntryForm}
        </div> 
      );
    }
}

export default UserAuthenticate 