import { Navigate } from "react-router-dom";
import {  getToken, getUserId } from "./auth";
import LoginLayout from "./LoginLayout";
import Login from "../Page/Login";
import Dashboard from "../Page/Dashboard";
import DashboardLayout from "./DashboardLayout";
import ResetPassword from "../Page/ResetPassword";
import Createone from "../Page/Createone";
import Telegram from "../Page/automationComponents/Telegram";
import Whatsapp from "../Page/automationComponents/Whatsapp";
import Facebook from "../Page/automationComponents/Facebook";

import Google from "../Page/automationComponents/Google";
import SinglePost from "../Page/automationComponents/SinglePost";
import CommingSoon from "../Page/CommingSoon";
import LudoGame from "../Page/Demo";
import Welcome from "../Page/Welcome";
import Post from "../Page/automationComponents/Post";
import AdminDashboard from "../admin/AdminDashboard";
import Users from "../admin/Users";
import Announcement from "../admin/Announcement";

const role = getUserId() ? getUserId()?.role : null;
const isLoggedIn = getToken();
const protects = {
  tempuser: [
    {
        path: "/",
        element: isLoggedIn ? <DashboardLayout/> : <Navigate to="/" />,
        children: [
        { path: "/", element: <Welcome/> },
        { path: "/home", element: <Welcome/> },
        { path: "/dashboard", element: <Welcome/> },
        { path: "/telegram", element: <Telegram/> },
        { path: "/whatsapp", element: <CommingSoon/> },
        { path: "/facebook", element: <CommingSoon/> },
        { path: "/create_post", element: <CommingSoon/> },
        { path: "/google", element: <Google/> },
        { path: "*", element: <div>no page found</div> },
        ],
      },
],
    user: [
        {
            path: "/",
            element: isLoggedIn ? <DashboardLayout/> : <Navigate to="/" />,
            children: [
            { path: "/", element: <Dashboard/> },
            { path: "/home", element: <Dashboard/> },
            { path: "/dashboard", element: <Dashboard/> },
            { path: "/telegram", element: <Telegram/> },
            { path: "/whatsapp", element: <Whatsapp/> },
            { path: "/facebook", element: <Facebook/> },
            { path: "/create_post", element: <Post/> },
            { path: "/google", element: <Google/> },
            {path:"/singlepost", element : <SinglePost/>},
            { path: "*", element: <div>no page found</div> },
            ],
          },
    ],
    superadmin: [
      {
          path: "/",
          element: isLoggedIn ? <DashboardLayout/> : <Navigate to="/" />,
          children: [
          { path: "/", element: <AdminDashboard/> },
          { path: "/home", element: <AdminDashboard/> },
          { path: "/dashboard", element: <AdminDashboard/> },
          { path: "/users", element: <Users/> },
          { path: "/announcement", element: <Announcement/> },
          // { path: "/facebook", element: <Facebook/> },
          // { path: "/create_post", element: <Post/> },
          // { path: "/google", element: <Google/> },
          // {path:"/singlepost", element : <SinglePost/>},
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
          { path: "/dashboard", element: <Dashboard/> },
          { path: "/home", element: <Dashboard/> },
          { path: "/telegram", element: <Telegram/> },
          { path: "/whatsapp", element: <Whatsapp/> },
          { path: "/facebook", element: <Facebook/> },
          { path: "/create_post", element: <Post/> },
        

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
          { path: "/demo", element: <LudoGame/> },
          {path: "*", element: "No PAGE FOUNG" },
        ],
      },
    ],
  };

export const protect =
  role && isLoggedIn ? protects[role] : protects["default"];
  // role ? protects["facbook_user"] : protects["default"];
  export const defaultProtect = protects["default"];
