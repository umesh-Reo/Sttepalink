import * as action from "./actionTypes";
import axios from "../../hoc/Axious/Axious";

export const getProfileStart = ( ) => {
  return{
   type:action.GET_PROFILE_START
  }
}

const getProfileSuccess = ( userData ) =>{
  return{
   type:action.GET_PROFILE_SUCCESS,
   userData:userData
  }
}

const getProfileFail = ( errorMessage ) =>{
  return{
   type:action.GET_PROFILE_FAIL,
   error:errorMessage
  }
}

const updateProfileStart = ( ) => {
  return{
    type :action.UPDATE_PROFILE_START
  }
}

const updateProfileSuccess = (UserDataToSave) =>{
  console.log("action",UserDataToSave);
  return{
    type:action.UPDATE_PROFILE_SUCCESS,
    userData:UserDataToSave
  }
}

export const getProfile = (userId ,tokenId ) =>{
  return dispatch =>{
   dispatch(getProfileStart());
   const QueryParams = '?auth='+ tokenId +'&orderBy="userId"&equalTo="'+userId+'"';
   axios.get('/userDetails.json'+ QueryParams )
   .then(res=> {
     console.log(res,userId);
      let fetchedUserDetails = [ ];
      for(let key in res.data){
          fetchedUserDetails.push({
            userData:res.data[key].userData,
            id:key
          })
      }
     let userGotData = null;
      fetchedUserDetails.map(responsedData=>{
        userGotData = responsedData;
      })
     dispatch(getProfileSuccess(userGotData));
    })
    .catch(error =>{
       dispatch(getProfileFail(error.message))
    })
  }
}

export const UpdateUserProfile = (DataToStore,ProfileId,tokenId,UserId) => {
  console.log("Redux profile...",DataToStore,UserId);
  return dispatch => {
    dispatch(updateProfileStart());
    const UserProfileId = ProfileId;
    const UserDataToUpdate ={
      userData:DataToStore,
      userId:UserId
    }
    axios.put('/userDetails/'+UserProfileId+'.json?auth='+tokenId,UserDataToUpdate)
    .then(response => {
      console.log("redux-actin",response.data);
      const UserDataToSentToReduxStore = {
        userData:response.data.userData,
        userId:response.data.userId
      }
      dispatch(updateProfileSuccess(UserDataToSentToReduxStore));
    })
    .catch(err => console.log(err));
  }
}