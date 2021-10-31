/* Title: React Routes...
 * Description:
 * Author: Majeed
 * Date: 2021-10-21 22:50:09
 */
// import all components.
import About from "./pages/About";
import DashBoard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const routes = [
  {
    id: 1,
    name: "DashBoard",
    path: "/",
    component: DashBoard,
    icon: "#dashboard",
    sidebar: true,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    component: About,
    icon: "#products",
    sidebar: true,
  },
  {
    id: 3,
    name: "Profile",
    path: "/profile",
    component: Profile,
    icon: "#reports",
    sidebar: false,
  },
];

export default routes;
