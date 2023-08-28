import { Navigate } from "react-router-dom";
import { LocalFbRole, getToken, getUserId } from "./auth";
import LoginLayout from "./LoginLayout";
import Login from "../Page/Login";
import Dashboard from "../Page/Dashboard";
import DashboardLayout from "./DashboardLayout";
import ResetPassword from "../Page/ResetPassword";
import Createone from "../Page/Createone";
import Telegram from "../Page/automationComponents/Telegram";
import Whatsapp from "../Page/automationComponents/Whatsapp";
import Facebook from "../Page/automationComponents/Facebook";

const role = getUserId() ? getUserId()?.role : null;
console.log(role,"fghjhgh")
// const role = LocalFbRole() ? LocalFbRole() : null;
const isLoggedIn = getToken();
// console.log(role)
const protects = {
    user: [
        {
            path: "/",
            element: isLoggedIn ? <DashboardLayout/> : <Navigate to="/" />,
            children: [
            { path: "/", element: <Dashboard/> },
            { path: "/home", element: <Dashboard/> },
            { path: "/telegram", element: <Telegram/> },
            { path: "/whatsapp", element: <Whatsapp/> },
            { path: "/facebook", element: <Facebook/> },
            { path: "*", element: <div>no page found</div> },
            ],
          },
    ],

    fbUser: [
        {
          path: "/",
          element: isLoggedIn ? <DashboardLayout/> : <Navigate to="/" />,
          // element: "ghjklhgjk" ,
          children: [
          { path: "/", element: <Dashboard/> },
          { path: "/home", element: <Dashboard/> },
          { path: "/telegram", element: <Telegram/> },
          { path: "/whatsapp", element: <Whatsapp/> },
          { path: "/facebook", element: <Facebook/> },
          { path: "*", element: <div>no page found</div> },
          ],
        },
      ],
  
    default: [
      {
        path: "/",
        // element: <LoginLayout />,
        element: <LoginLayout />,
        children: [
          {path: "/", element: <Login/> },
          {path: "/login", element: <Login /> },
          {path: "/resetpassword", element: <ResetPassword /> },
          {path: "/register", element: <Createone /> },
          {path: "*", element: "No PAGE FOUNG" },
        ],
      },
    ],
  };

export const protect =
  role && isLoggedIn ? protects[role] : protects["default"];
  // role ? protects["facbook_user"] : protects["default"];
  export const defaultProtect = protects["default"];
