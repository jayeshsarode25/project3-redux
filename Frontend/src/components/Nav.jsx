import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";


const Nav = () => {
 const user = useSelector((state) => state.userReducer.users);


 

  return (
    <nav className="flex justify-center items-center gap-x-5 p-5">
      <NavLink to="/">Home</NavLink>
      {user?<> 
      {user && user ?.isAdmin && <NavLink to="/admin/create-product">Create Product</NavLink>} 
      
      <NavLink to="/admin/user-profile">Profile</NavLink>

      </>:<>
        <NavLink to="/login">Login</NavLink>
      </>}
      

      
    </nav>
  );
};

export default Nav;
