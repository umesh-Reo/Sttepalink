// @material-ui/icons
import Person from "@material-ui/icons/Person";
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import Web from "@material-ui/icons/Web";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";

import WelcomePage from "../Views/WelcomePage/WelcomePage.jsx";
import UserProfile from "../Views/Profile/ProfilePage/Profile.jsx";
import PricingPlan from "../Layouts/Pricing/PricingPlanDis.jsx";
import Notification from "../Views/Notification/Notification.jsx";
import YourCourses from "../Views/YourCourses/YourCourses.jsx";
import LogOut from "../Layouts/LogOut/LogOut.jsx";

const dashboardRoutes = [
  {
    path: "/Notification",
    sidebarName: "Notification",
    navbarName: "Notification",
    icon: Web,
    component: Notification
  },
  {
    path: "/Home",
    sidebarName: "Info Page ",
    navbarName: "Information Page",
    icon: InfoSharpIcon,
    component: WelcomePage
  },
  {
    path: "/YourCourses",
    sidebarName: "User Courses",
    navbarName: "Available Subjects",
    icon: MenuBookIcon,
    component: YourCourses
  },
  {
    path: "/UserProfile",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/PricingPlan",
    sidebarName: "Pricing",
    navbarName: "Courses Price",
    icon: AttachMoneyIcon,
    component: PricingPlan
  },
  {
    path: "/LogOut",
    sidebarName: "Log Out",
    navbarName: "Log Out",
    icon: PowerSettingsNew,
    component: LogOut
  }
];
  
export default dashboardRoutes;