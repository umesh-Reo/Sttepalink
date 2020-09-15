  //import React , { useState , useEffect } from 'react';
  //import SummaryButtons from '../../SummaryButtons/SummaryButtons';
  //import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
  //import Aux from '../../../hoc/Aux';
  //import './ListOfButton.css';
  //
  //
  //const ListOfTheSubjects = ( Props ) => {
  //console.log(Props); 
  //
  //const [chapterState , setChapterState] =  useState({ 
  // 
  //});
  //   
  //
  //const GetChaptersForTheStudents = (Standars , Subject) =>{
  //  console.log(Standars);
  //  console.log(Subject);
  //}
  //      //useEffect(() => {
  //      //  const Standard = Props.NewUserData.Standart.value;
  //      //    axious.get('/AvailableSubjectsList/'+Standard+'.json')
  //      //    .then(response =>{ 
  //      //      setSubjectsState(prevState => ({
  //      //        ...prevState,SubjectsDetails:response.data}));
  //      //      })  
  //      //    .then(err=>console.log(err));
  //      //  }, [])
  //
  //      const SubjectArray = [];
  //      for(let key in Props.RequiredData){
  //        SubjectArray.push({
  //         Id: key,
  //         list: Props.RequiredData[key]
  //        });
  //      }
  // 
  //       console.log(SubjectArray)
  //
  //      let TutorialInfo = true?(
  //      <div className="ButtonSummary1">
  //        <div className="ButtonSummaryForm1">
  //         <div className="ButtonSummaryListBackground">
  //          <form className="AvailableList1">
  //            <div className="listTitle">Subjects {"- "+ Props.Standard}</div>
  //              {SubjectArray(SubjectLog => ( 
  //                <div className="IconAndSubjectButton" key={SubjectLog.Id}>
  //                 <MenuBookTwoToneIcon/> 
  //                  <SummaryButtons 
  //                  elementTypes="Button"
  //                  ClassNames="Buttn"
  //                  clicked={GetChaptersForTheStudents(Props.Standard ,SubjectLog.list )}
  //                    >  
  //                     {SubjectLog.list} 
  //                  </SummaryButtons>   
  //                  </div>         
  //                ))}
  //          </form>
  //      </div>
  //        </div>  
  //      </div>   
  //     ):null
  //
  //      return (
  //       <Aux>
  //             {TutorialInfo}
  //      </Aux>  
  //   );
  //  }   
  //
  //
  //export default ListOfTheSubjects ; 