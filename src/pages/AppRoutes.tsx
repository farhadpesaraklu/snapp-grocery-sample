import { createBrowserRouter } from "react-router-dom";
import { RouteEnums } from "../utils/enums/routeEnum";
import { MainLayout } from "../components/mainLayout/MainLayout";
import Supermarket from "./supermarket/Supermarket";
import Search from "./search/Search";


const AppRouter = createBrowserRouter([
  {
    path: `/`,
    element: <MainLayout><Supermarket /></MainLayout>,
    // children: [
    //   {
    //     path: `${RouteEnums.SEARCH}`,
    //     element: <mainLayout><div>asasdasdsdad</div></mainLayout>,
    //   }
    // ]
  },
  {
    path: `/${RouteEnums.SEARCH}`,
    element: <MainLayout><Search /></MainLayout>,
  },


]);

export default AppRouter;
