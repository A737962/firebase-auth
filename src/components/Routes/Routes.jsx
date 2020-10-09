import Login from "../Login";
import Registration from "../Registration";
import ForgotPassword from "../ForgotPassword";
import Home from "../Home";
import PasswordResetSuccess from "../PasswordResetSuccess";

const Routes = [
  {
    route: "Route",
    path: "/",
    componentName: Login,
  },
  {
    route: "Route",
    path: "/registration",
    componentName: Registration,
  },
  {
    route: "Route",
    path: "/forgotPassword",
    componentName: ForgotPassword,
  },
  {
    route: "Route",
    path: "/passwordResetSuccess",
    componentName: PasswordResetSuccess,
  },
  {
    route: "PrivateRoute",
    path: "/home",
    componentName: Home,
  },
];

export default Routes;
