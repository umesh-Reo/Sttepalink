// @material-ui/icons
import Person from "@material-ui/icons/Person";
import SettingsApplications from "@material-ui/icons/SettingsApplications";
import Web from "@material-ui/icons/Web";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";

import WelcomePage from "../Views/WelcomePage/WelcomePage.jsx";
import UserProfile from "../Views/Profile/ProfilePage/Profile.jsx";
import NonOfficialAccounts from "../Views/NonOfficialAccounts/NonOfficialPersonal.jsx";
import OfficialAccounts from "../Views/AuthorisedSection/AuthorisedSection.jsx";
import YourCourses from "../Views/YourCourses/YourCourses.jsx";
import LogOut from "../Layouts/LoginPage/LoginPage.jsx"

const dashboardRoutes = [
  {
    path: "/Home",
    sidebarName: "Home ",
    navbarName: "Home Page",
    icon: SettingsApplications,
    component: WelcomePage
  },
  {
    path: "/UserProfile",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/OfficialAccounts",
    sidebarName: "Official Accounts",
    navbarName: "Official Accounts",
    icon: Web,
    component: OfficialAccounts
  },
  {
    path: "/StaffAccounts",
    sidebarName: "Staff Accounts",
    navbarName: "Staff Accounts",
    icon: Person,
    component: NonOfficialAccounts
  },
  {
    path: "/YourCourses",
    sidebarName: "Available Subjects",
    navbarName: "Subjects",
    icon: Web,
    component: YourCourses
  },
  {
    path: "/login",
    sidebarName: "LogOut",
    navbarName: "Logout",
    icon: PowerSettingsNew,
    component: null
  }
  

];
  //const dashboardIconRoutes = [
  //  {
  //    path: "/dashboard",
  //    sidebarName: "Dashboard",
  //    navbarName: "Material Dashboard",
  //    icon: Dashboard,
  //    component: DashboardPage
  //  },
  //  {
  //    path: "/user",
  //    sidebarName: "User Profile",
  //    navbarName: "Profile",
  //    icon: Person,
  //    component: UserProfile
  //  },
  //  {
  //    path: "/appSettings",
  //    sidebarName: "App Settings",
  //    navbarName: "Application Settings",
  //    icon: SettingsApplications,
  //    component: AppSettings
  //  },
  //  {
  //    path: "/user",
  //    sidebarName: "App Moderation",
  //    navbarName: "Application Moderation",
  //    icon: SettingsApplications,
  //    component: UserProfile
  //  }
  //]

export default dashboardRoutes;




















// @material-ui/icons
//import Dashboard from "@material-ui/icons/Dashboard";
//import Person from "@material-ui/icons/Person";
//import SettingsApplications from "@material-ui/icons/SettingsApplications";
//import Web from "@material-ui/icons/Web";
//import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
//import WelcomePage from "../../Views/WelcomePage/WelcomePage.jsx";
//import UserProfile from "../views/UserProfile/UserProfile.jsx";
//import AppSettings from "../views/AppSettings/AppSettings.jsx"
//import Moderation from "../views/Moderation/Moderation.jsx"
//import LandingPage from "../layouts/LandingPage/LandingPage.jsx"
//const dashboardRoutes = [
//  {
//    path: "/Dashboard",
//    sidebarName: "Dashboard",
//    navbarName: "Dashboard Views",
//    icon: SettingsApplications,
//    component: WelcomePage
//  },
//  {
//    path: "/user",
//    sidebarName: "User Profile",
//    navbarName: "Profile",
//    icon: Person,
//    component: UserProfile
//  },
//  {
//    path: "/moderation",
//    sidebarName: "App Moderation",
//    navbarName: "App Moderation",
//    icon: Person,
//    component: Moderation
//  },
//  {
//    path: "/landingPage",
//    sidebarName: "App Selection",
//    navbarName: "App Selection",
//    icon: Web,
//    component: LandingPage
//  },
//  {
//    path: "/login",
//    sidebarName: "Logout",
//    navbarName: "Logout",
//    icon: PowerSettingsNew,
//    component: AppSettings
//  }
//  
//
//];
//const dashboardIconRoutes = [
//  {
//    path: "/dashboard",
//    sidebarName: "Dashboard",
//    navbarName: "Material Dashboard",
//    icon: Dashboard,
//    component: DashboardPage
//  },
//  {
//    path: "/user",
//    sidebarName: "User Profile",
//    navbarName: "Profile",
//    icon: Person,
//    component: UserProfile
//  },
//  {
//    path: "/appSettings",
//    sidebarName: "App Settings",
//    navbarName: "Application Settings",
//    icon: SettingsApplications,
//    component: AppSettings
//  },
//  {
//    path: "/user",
//    sidebarName: "App Moderation",
//    navbarName: "Application Moderation",
//    icon: SettingsApplications,
//    component: UserProfile
//  }
//]
//
//export default dashboardRoutes;
//