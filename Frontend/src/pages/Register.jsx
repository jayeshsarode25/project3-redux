import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/action/userAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const RegisterHandler = (user) => {
      user.id = nanoid();
      user.isAdmin = false; 
      user.cart = [];
      dispatch(asyncregisteruser(user));  
      navigate("/login")
    }

  return (
    <form onSubmit={handleSubmit(RegisterHandler)} className="flex justify-center items-center py-10 flex-col w-1/3">
      <input
        {...register("username")}
        className="mb-3 outline-0 border-b p-2 text-2xl "
        type="text"
        placeholder="jhon-deo"
      />

      <input
        {...register("email")}
        className="mb-3 outline-0 border-b p-2 text-2xl "
        type="email"
        placeholder="jhon@doe.com"
      />

      <input
        {...register("password")}
        className="mb-3 outline-0 border-b p-2 text-2xl "
        type="password"
        placeholder="******"
      />
      <button className="mt-5 px-4 py-2 bg-blue-500 rounded">Register User</button>
      <p className="mt-5">Alraedy have an acount?<Link className="text-blue-500 underline" to="/login">Login</Link></p>
    </form>
  );
};

export default Register;
