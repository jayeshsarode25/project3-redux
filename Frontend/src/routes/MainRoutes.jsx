import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Products = lazy(() => import("../pages/Products"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/admin/CreateProduct"));
const ProductDetails = lazy(() => import("../pages/admin/ProductDetails"));
const UserProfile = lazy(() => import("../pages/user/UserProfile"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Auth = lazy(() => import("./Auth"));
const UnAuth = lazy(() => import("./UnAuth"));
const Cart = lazy(() => import("../pages/Cart"));


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/login" element={<UnAuth><Login /></UnAuth>} />
      <Route path="/register" element={<UnAuth><Register /></UnAuth>} />

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
