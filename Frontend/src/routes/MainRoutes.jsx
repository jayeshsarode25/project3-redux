import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/admin/ProductDetails";
import { useSelector } from "react-redux";
import UserProfile from "../pages/user/UserProfile";
import PageNotFound from "../pages/PageNotFound";
import Auth from "./Auth";
import Cart from "../pages/Cart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/admin/create-product"
        element={
          <Auth>
            <CreateProduct />
          </Auth>
        }
      />
      <Route
        path="/admin/user-profile"
        element={
          <Auth>
            <UserProfile />
          </Auth>
        }
      />

      <Route
        path="/cart"
        element={
          <Auth>
            <Cart />
          </Auth>
        }
      />

      <Route
        path="/product/:id"
        element={
          <Auth>
            <ProductDetails />
          </Auth>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
