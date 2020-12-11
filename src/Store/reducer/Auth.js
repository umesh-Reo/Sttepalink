import * as actiontypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
 token:null,
 userId:null,
 userStatus:null,
 error:null,
 loading:false
}

const authStart = (state,action ) => {
    return updateObject(state,{
     error:null,
     loading:true
    });
}

const authSuccess = (state ,action ) => {
    return updateObject(state , {
        token:action.idToken,
        userId:action.userId,
        userStatus:action.userStatus,
        error:null,
        Loading:false
    });
} 

const authFail = (state,action) =>{
    return updateObject(state,{
      error:action.error,
      loading:false
    });
}

const AuthLogOut = (state, action ) =>{
    return updateObject(state,{
      token:null,
      userId:null
    })
}

const reducer = ( state = initialState, action) => {
    switch(action.type){
        case actiontypes.AUTH_START: return authStart(state,action);
        case actiontypes.AUTH_SUCCESS: return authSuccess(state,action);
        case actiontypes.AUTH_FAIL: return authFail(state,action);
        case actiontypes.AUTH_LOGOUT : return AuthLogOut(state,action);
        default : return state;
    }
}

export default reducer;