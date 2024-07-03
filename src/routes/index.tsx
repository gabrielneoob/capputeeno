import { useRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Payment from "../pages/payment/Payment";

const MainRoutes = () =>
  useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
  ]);

export default MainRoutes;
