import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    userCourseDetails:null,
    ChapterList:null,
    topicsList:null,
    Class:null,
    Subject:null,
    error:null,
    loader:false
}

const studentCoursesProcessStart = ( state , action) => {
   return updateObject(state,{
     error:null,   
     loader:true
   });
}

const studentCoursesProcessSuccess = ( state , action ) => {
    return updateObject(state , {
        userCourseDetails:action.userCourseDetails,
        error:null,
        loader:null
    });
}

const studentCoursesProcessFail = ( state , action ) => {
  return updateObject(state,{
      error:action.error,
      loader:false
  });
}

const StudentChapterProcessStart = ( state , action ) => {
    return updateObject(state,{
        error:null,
        loader:true
    });
}

const StudentChapterProcessSuccess = ( state , action ) => {
    return updateObject(state,{
        ChapterList:action.ChapterList,
        Class:action.Class,
        Subject:action.Subject,
        error:null,
        loader:false
    });
}

const StudentChapterProcessFail = ( state , action ) => {
    return updateObject(state , {
        error:action.error,
        loader:false
    });
}

const StudentGetTopicProcessStart = ( state , action) => {
    return updateObject(state , {
        error:null,
        loader:true,
    });
}

const StudentGetTopicProcessSuccess = ( state , action ) => {
    return updateObject(state , {
        topicsList:action.topicsList,
        error:null,
        loader:false
    });
}

const StudentGetTopicProcessFail = ( state , action ) =>{
    return updateObject( state , {
        error:action.error,
        loader:false
    });
}


const reducer = (state=initialState , action ) => {
    switch(action.type){
        case actionTypes.STUDENT_COURSE_START : return studentCoursesProcessStart( state , action );
        case actionTypes.STUDENT_COURSE_SUCCESS : return studentCoursesProcessSuccess( state , action);
        case actionTypes.STUDENT_COURSE_FAIL:return studentCoursesProcessFail(state, action);
        
        case actionTypes.GET_SELECTED_CHAPTERS_START:return StudentChapterProcessStart( state , action);
        case actionTypes.GET_SELECTED_CHAPTERS_SUCCESS:return StudentChapterProcessSuccess( state , action);
        case actionTypes.GET_SELECTED_CHAPTERS_FAIL:return StudentChapterProcessFail( state , action);
       
        case actionTypes.GET_SELECTED_TOPIC_START :return StudentGetTopicProcessStart(state, action);
        case actionTypes.GET_SELECTED_TOPIC_SUCCESS :return StudentGetTopicProcessSuccess(state, action);
        case actionTypes.GET_SELECTED_TOPIC_FAIL :return StudentGetTopicProcessFail(state, action);
       
        default: return state;
    }
}

export default reducer;
