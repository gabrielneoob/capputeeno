import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";

const MainRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

export default MainRoutes;
