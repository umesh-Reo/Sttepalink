import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";

const initialState = {
    userDetails:null,
    error:null,
    loading:false,
}

const profileStartToProcess = (state ,action ) =>{
 return updateObject( state,{
     loading:true,
     error:null
   });
}

const getProfileProcessSuccess = (state , action) => {
  return updateObject(state,{
      userDetails:action.userData,
      loading:false,
      error : null
  })
}

const getProfileProcessFail = (state , action ) => {
  return updateObject(state, {
      error : action.error,
      loading:false,
  })
}

const updateProfileProcessStart = (state ,action) => {
    return updateObject(state,{
        error:null,
        loading:true
    })
}

const updateProfileProcessSuccess = ( state, action) => {
    console.log("Redux-reducer",action.userData,state);
    return updateObject(state, {
        userDetails:action.userData,
        error:null,
        loading:false
    })
}

const reducer = (state = initialState , action) =>{
    switch(action.type){
     case actionTypes.GET_PROFILE_START : return profileStartToProcess(state,action);
     case actionTypes.GET_PROFILE_SUCCESS : return getProfileProcessSuccess(state,action);
     case actionTypes.GET_PROFILE_FAIL : return getProfileProcessFail(state , action);
     case actionTypes.UPDATE_PROFILE_START: return updateProfileProcessStart(state, action);
     case actionTypes.UPDATE_PROFILE_SUCCESS : return updateProfileProcessSuccess(state,action);
     default : return state;
    }
}

export default reducer;