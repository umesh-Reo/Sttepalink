import * as action from "./actionTypes";
import {AssignTheSubjects} from "../TheFunctions";
import axios from "../../hoc/Axious/Axious";


export const StoreUserCourseDetailsToRedux = ( userData ) =>{
   return{
     type:action.STUDENT_COURSE_SUCCESS,
     userCourseDetails:userData
   }
}

export const studentCourseStart = ( data ,item) =>{
    console.log("usercourse",data,item);
    return{
        type:action.STUDENT_COURSE_START
    }
}

export const studentCourseSuccess = (userData) => {
    return dispatch =>{
        const TheUserCourseDetails = AssignTheSubjects(userData.userClass);
        dispatch(StoreUserCourseDetailsToRedux(TheUserCourseDetails));  
    }
}

export const studentCourseFail = ( error ) =>{
    return{
        type:action.UPDATE_PROFILE_FAIL,
        error:error
    }
}



export const chapterDisplayProcessStart = ( ) => {
  console.log("DisplayProcessStart..")
  return{
      type:action.GET_SELECTED_CHAPTERS_START
  };
}

export const chapterDisplayProcessSuccess = (ChapterList, Class ,Subject ) => {
  return{
    type:action.GET_SELECTED_CHAPTERS_SUCCESS,
    ChapterList:ChapterList,
    Class:Class,
    Subject:Subject
  }
}

export const chapterDisplayProcessFail = ( error ) =>{
  return{
    type:action.GET_SELECTED_CHAPTERS_FAIL,
    error:error
  }
}

export const topicDisplayProcessStart = ( ) =>{
  return{
    type:action.GET_SELECTED_TOPIC_START
  }
}

export const topicDisplayProcessSuccess = (topicsList) =>{
  return{
    type:action.GET_SELECTED_TOPIC_SUCCESS,
    topicsList:topicsList
  }
}

export const topicDisplayProcessFail = (error) =>{
  return{
    type:action.GET_SELECTED_TOPIC_FAIL,
    error:error
  }
}

export const getStudentCourse = (userId ,tokenId ) =>{
  return dispatch =>{
   dispatch(studentCourseStart(userId,tokenId));
   const QueryParams = '?auth='+ tokenId +'&orderBy="userId"&equalTo="'+userId+'"';
   axios.get('/userDetails.json'+ QueryParams )
   .then(res=> {
     console.log(res,userId);
      let fetchedUserDetails = [ ];
      for(let key in res.data){
          fetchedUserDetails.push({
            userClass:res.data[key].userData.class,
            id:key
          })
      }
     let userGotData = null;
      fetchedUserDetails.map(responsedData=>{
        userGotData = responsedData;
      })
      dispatch(studentCourseSuccess(userGotData));
    })
    .catch(error =>{
      dispatch(studentCourseFail("something went wrong.. please login Again.."));
    })
  }
}
  

 
export const DisplayAvailableChapters = (tokenId,Class , Subject) => {
  return dispatch =>{
    dispatch(chapterDisplayProcessStart());
    console.log(tokenId,Class, Subject);
    axios.get('/Subjects/'+Class+"/"+Subject+'.json?auth='+ tokenId)
    .then(res=> {
      console.log(res.data)
      const SubjectGot=[];
      for(let key in res.data){
         SubjectGot.push({
         ...res.data[key],
         id:key
       });
      }
     let ChapterListToDisplay = [];
      SubjectGot.map(mapedData=>{
        ChapterListToDisplay.push({
           ChapterName:mapedData.ChapterName,
           ChapterNumber:mapedData.ChapterNumber,
           id:mapedData.id
        })
    });
    dispatch(chapterDisplayProcessSuccess(ChapterListToDisplay,Class,Subject));
    })
    .catch(error =>{
      console.log(error);
      dispatch(chapterDisplayProcessFail(error));
    })
  }
}

export const DisplayAvailableTopics = ( TokenId, Class , Subject , ChapterId) =>{
  console.log(TokenId,Class,Subject,ChapterId);
  return dispatch =>{
    dispatch(topicDisplayProcessStart());
    axios.get('/Subjects/'+Class+"/"+Subject+"/"+ChapterId+'.json?auth='+TokenId)
    .then(res=> {
       dispatch(topicDisplayProcessSuccess(res.data.topic));
    })
    .catch(error => {
       dispatch(topicDisplayProcessFail(error))
    });
  }
}