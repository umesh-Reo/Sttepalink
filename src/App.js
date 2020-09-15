//import React , { Component } from 'react';
//import {Router,Route ,Switch} from 'react-router-dom'
//import { createBrowserHistory } from "history";
//import HomePage from '../src/Layouts/LoginPage/LoginPage.jsx';
//import PricingPlan from '../src/Layouts/Pricing/PricingPlanDis.jsx';
////import ProfileDetails from './Views/Profile/ProfilePage/Profile.jsx';
//import ProfileUpdate from './Views/Profile/UpdateUser/UpdateUser';
////import OfficialFolder from './Views/OfficialFolder/OfficialFolder';
//import OfficialAccount from './Views/AuthorisedSection/AuthorisedSection';
//import TutorialSection from '../src/Layouts/TutorialSection/TutorialSection.jsx';
//import Dashboard from './Layouts/Dashboard/Dashboard.jsx';
//import SignUp from '../src/Layouts/SignUp/SignUp';
//import './App.css';
//
//const history = createBrowserHistory( );
//const token = localStorage.getItem('token');
//const userId = localStorage.getItem('UserDetail');
//
// export default class App extends Component{
//   constructor(props){
//     super(props);
//
//     this.state = {
//       UserDaTa:{},
//       userId:" ",
//       IsUserValid:false,
//       Status:'',
//       LoggedStatus:'Please Login First'
//      }
//      this.AuthorisedUser = this.AuthorisedUser.bind(this);
//    }
//
//    componentWillMount(){
//      //if (History == /logout) => clear localStorage And Session
//      //if (history == /) => then if session empty then switch to home page
//                      //      if not then Remain to Tutorial page.
//      console.log("welcome to App.js page")
//    }
//    
//   // if(token !==  null){
//     //   setStudentState({isUserValid : true});
//      //}
//   
//      AuthorisedUser = (data , WorkAs,IsUserValid) =>{
//        this.setState({userId:data,Status:WorkAs,IsUserValid:IsUserValid});
//      }
//  
//    // make if condition within layout , each  for students,officeBackend and authenticated teachers..
//    // if student login then only students components are open and same for the rest..  
//    render(){ 
//    
//   
//     if(this.state.IsUserValid){
//      history.push("/TutorialScreen");
//    }
//      let letscheck ;
//      console.log(!token , !userId);
//
//      if((history.location.pathname === "/PricingPackage")|| (history.location.pathname ==="/Inputs")|| (history.location.pathname ==="/signUp")){
//        
//      }else{
//        if((history.location.pathname !== "/") &&(!token||!userId)){
//          history.push("/");
//        }
//      }
//
//     
//      if(token && userId){ 
//       letscheck = <Route 
//         path='/TutorialScreen'
//         render={ props =>(
//                  <Dashboard {...props} Userinfo={this.state.userId} />
//          )}
//       />
//      }{
//
//      }
//    
//      return (
//        <div className="App">
//         <Router history={createBrowserHistory({forceRefresh: true})}>
//           <Switch>
//             <Route  
//               path='/PricingPackage'
//              render={ props =>(
//                < PricingPlan {...props} UserAuthorised={this.AuthorisedUser} />
//              )}/>
//             <Route
//               exact
//               path='/'
//               render={ props =>(
//                 <HomePage {...props} LoggedInStatus={this.state.LoggedStatus} UserAuthorised={this.AuthorisedUser}/>
//                )} 
//              />
//             <Route 
//               path='/signUp' 
//               render={props =>(
//                 <SignUp {...props} UserAuthorised={this.AuthorisedUser}/>
//               )}/>
//             
//             <Route path='/UserProfileUpdate' component={ProfileUpdate}/>
//            
//             <Route path='/Officialsite' component={OfficialAccount}/>
//             {letscheck}
//           </Switch>
//         </Router>
//        </div>
//      );
//    }
//   
//  }
//
//
//












//import React , { Component } from 'react';
//import {Router,Route ,Switch} from 'react-router-dom'
//import { createBrowserHistory } from "history";
//import HomePage from '../src/Layouts/LoginPage/LoginPage.jsx';
//import PricingPlan from '../src/Layouts/Pricing/PricingPlanDis.jsx';
//import ProfileDetails from './Views/Profile/ProfilePage/Profile.jsx';
//import ProfileUpdate from './Views/Profile/UpdateUser/UpdateUser';
//import OfficialFolder from './Views/OfficialFolder/OfficialFolder';
//import OfficialAccount from './Views/AuthorisedSection/AuthorisedSection';
//import TutorialSection from '../src/Layouts/TutorialSection/TutorialSection.jsx';
//import SignUp from '../src/Layouts/SignUp/SignUp';
//import './App.css';
//
//const history = createBrowserHistory( );
//const token = localStorage.getItem('token');
//const userId = localStorage.getItem('UserDetail');
//
// export default class App extends Component{
//   constructor(props){
//     super(props);
//
//     this.state = {
//       UserDaTa:{},
//       userId:" ",
//       IsUserValid:false,
//       Status:'',
//       LoggedStatus:'Please Login First'
//      }
//      this.AuthorisedUser = this.AuthorisedUser.bind(this);
//    }
//
//    componentWillMount(){
//      //if (History == /logout) => clear localStorage And Session
//      //if (history == /) => then if session empty then switch to home page
//                      //      if not then Remain to Tutorial page.
//      console.log("welcome to App.js page")
//    }
//    
//   // if(token !==  null){
//     //   setStudentState({isUserValid : true});
//      //}
//   
//      AuthorisedUser = (data , WorkAs,IsUserValid) =>{
//        this.setState({userId:data,Status:WorkAs,IsUserValid:IsUserValid});
//      }
//  
//    // make if condition within layout , each  for students,officeBackend and authenticated teachers..
//    // if student login then only students components are open and same for the rest..  
//    render(){ 
//    
//   
//     if(this.state.IsUserValid){
//      history.push("/TutorialScreen");
//    }
//      let letscheck ;
//      console.log(!token , !userId);
//
//      if((history.location.pathname === "/PricingPackage")|| (history.location.pathname ==="/Inputs")|| (history.location.pathname ==="/signUp")){
//        
//      }else{
//        if((history.location.pathname !== "/") &&(!token||!userId)){
//          history.push("/");
//        }
//      }
//
//     
//      if(token && userId){ 
//       letscheck = <Route 
//         path='/TutorialScreen'
//         render={ props =>(
//                  <TutorialSection {...props} Userinfo={this.state.userId} />
//          )}
//       />
//      }{
//
//      }
//    
//      return (
//        <div className="App">
//         <Router history={createBrowserHistory({forceRefresh: true})}>
//           <Switch>
//             <Route  
//               path='/PricingPackage'
//              render={ props =>(
//                < PricingPlan {...props} UserAuthorised={this.AuthorisedUser} />
//              )}/>
//             <Route
//               exact
//               path='/'
//               render={ props =>(
//                 <HomePage {...props} LoggedInStatus={this.state.LoggedStatus} UserAuthorised={this.AuthorisedUser}/>
//                )} 
//              />
//             <Route 
//               path='/signUp' 
//               render={props =>(
//                 <SignUp {...props} UserAuthorised={this.AuthorisedUser}/>
//               )}/>
//             <Route path='/Profile' component={ProfileDetails}/>
//             <Route path='/UserProfileUpdate' component={ProfileUpdate}/>
//             <Route path='/Inputs' component={OfficialFolder}/>
//             <Route path='/Officialsite' component={OfficialAccount}/>
//             {letscheck}
//           </Switch>
//         </Router>
//        </div>
//      );
//    }
//   
//  }
//
//
//