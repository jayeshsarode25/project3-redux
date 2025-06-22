import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asynclogoutuser } from "../store/action/userAction";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const user = useSelector((state) => state.userReducer.users);

const logoutHandler = () => {
  dispatch(asynclogoutuser());
  navigate("/")
}
 

  return (
    <nav className="flex justify-center items-center gap-x-5 p-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Product</NavLink>
      {user?<>  
      <NavLink to="/admin/create-product">Create Product</NavLink>
      <button onClick={logoutHandler}>Logout</button>
      </>:<>
        <NavLink to="/login">Login</NavLink>
      </>}
      

      
    </nav>
  );
};

export default Nav;
