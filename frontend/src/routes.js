import Dashboard from "views/Dashboard.js";
import ServiceData from "views/ServiceData.js";
import Help from "views/Help.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "ServiceNameGraph",
    component: ServiceData,
    layout: "/admin",
  },
  {
    path: "/help",
    name: "Help",
    component: Help,
    layout: "/admin",
  },
];

export default dashboardRoutes;
