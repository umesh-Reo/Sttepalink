import Dashboard from "../Layouts/Dashboard/Dashboard.jsx";
import Pricing from "../Layouts/Pricing/PricingPlanDis.jsx";
import TutorialScreen from "../Layouts/TutorialSection/TutorialSection.jsx";
import SignUp from "../Layouts/SignUp/SignUp.jsx";

const indexRoutes = [
    { path: "/dashboard", component: Dashboard },
    {path: "/PricingPackage" , component : Pricing},
    {path: "/TutorialScreen" , component : TutorialScreen},
    {path: "/YourCourses" , component : Dashboard},
    {path: "/UserProfile", component: Dashboard},
    {path: "/Home", component: Dashboard},
    {path: "/StaffAccounts", component: Dashboard},
    {path: "/OfficialAccounts", component: Dashboard},
    {path: "/signUp", component: SignUp},
    

];


export default indexRoutes;
