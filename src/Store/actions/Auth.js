import * as actions from "./actionTypes";
import axious from '../../hoc/Axious/Axious';
import { createBrowserHistory } from "history";
import Axios from "axios";


const history = createBrowserHistory({forceRefresh: true});

export const AuthStart = ( ) => {
    return{
       type:actions.AUTH_START
    }
}

export const AuthSuccess = (token ,userId) =>{
    return{
        type:actions.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }  
}

export const UserDataPost = (userData,userId,token) =>{
 const UserDetail={            
    userData:userData,        
    userId:userId         
 }
 axious.post('/userDetails.json?auth='+token,UserDetail)
 .then(res=>{
    //Data To will Be Input..
 })
 .catch(err => console.log(err)); 
}

export const saveUserDataToServer = ( userData ,userId,token ) =>{
  return dispatch =>{
    dispatch(UserDataPost(userData,userId,token));
  }
}

export const AuthFail = (error) => {
  return{
    type:actions.AUTH_FAIL,
    error:error
  }
}

export const UserlogOut = ( ) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expiresDate");
  localStorage.removeItem("Package");
  return{
    type:actions.AUTH_LOGOUT
  }
}

export const checkSignUpAuthTimeOut = (experationTime) => {
  return dispatch =>{
    setTimeout(() => {
       dispatch(UserlogOut());
    },experationTime * 1000);
  }
}

export const Auth = (emailId,password,isSignUp,otherData) => {
  return dispatch => {
    dispatch(AuthStart());
    const DataToAuth = {
      email:emailId,
      password:password,
      returnSecureToken:true
    }
   
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBtBcTb04h_Jb23ZSI4Mg2Vp09sPK5AXo"
    if(!isSignUp){
     url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBtBcTb04h_Jb23ZSI4Mg2Vp09sPK5AXo"
    }
    Axios.post(url,DataToAuth)
    .then(response =>{
      const experationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
     localStorage.setItem("token",response.data.idToken);
     localStorage.setItem("userId",response.data.localId);
     localStorage.setItem("expiresDate",experationDate);
     dispatch(AuthSuccess(response.data.idToken,response.data.localId));
     dispatch(checkSignUpAuthTimeOut(response.data.expiresIn));
     if(isSignUp){
      dispatch(saveUserDataToServer(otherData,response.data.localId,response.data.idToken));
     }
    })
    .catch(error => {
     dispatch(AuthFail(error));
    })
  }
}

export const authCheckState = ( ) => {
  return dispatch =>{
    const token = localStorage.getItem("token");
    if(!token){
      dispatch(UserlogOut());
    }else{
      const expirationDate =new Date(localStorage.getItem("expiresDate"));
      if(expirationDate <= new Date()){
        dispatch(UserlogOut());
      }else{
        const userId = localStorage.getItem("userId");
        dispatch(AuthSuccess(token , userId));
        dispatch(checkSignUpAuthTimeOut((expirationDate.getTime() - new Date().getTime())/1000))
      }
    }
  }
}

