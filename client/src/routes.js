/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";
import Login from "views/Loginpage.jsx";
import Landing from "views/Landingpage.jsx";

const visitorRoutes = [
  { path: "auth/login", name: "Login", icon: "pe-7s-graph", component: Login, layout: "/" },
  { path: "auth/register", name: "register", icon: "pe-7s-graph", component: Login, layout: "/" },
  { path: "/", name: "Landingpage", icon: "pe-7s-graph", component: Landing, layout: "/"
  }];

const userRoutes = [
  { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard, layout: "/user" },
  { path: "/profile", name: "User Profile", icon: "pe-7s-user", component: UserProfile, layout: "/user" },
  { path: "/table", name: "Table List", icon: "pe-7s-note2", component: TableList, layout: "/user" },
  { path: "/typography", name: "Typography", icon: "pe-7s-news-paper", component: Typography, layout: "/user" },
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons, layout: "/user" },
  { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps, layout: "/user" },
  { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications, layout: "/user" },
  { upgrade: true, path: "/upgrade", name: "Upgrade to PRO", icon: "pe-7s-rocket", component: Upgrade, layout: "/user" }
];

export { visitorRoutes, userRoutes };
