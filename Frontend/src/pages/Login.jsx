import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { asyncloginuser } from "../store/action/userAction";
import { useDispatch } from "react-redux";


const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  
  const dispatch = useDispatch()

    const LoginHandler = (user) => {
      console.log(user);
      dispatch(asyncloginuser(user));
    }

  return (
    <form onSubmit={handleSubmit(LoginHandler)} className="flex justify-center items-center py-10 flex-col w-1/3">
      
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
      <button className="mt-5 px-4 py-2 bg-blue-500 rounded">Login User</button>
      <p className="mt-5">Don't have an acount?<Link className="text-blue-500 underline" to="/register">Register</Link></p>
    </form>
  );
};

export default Login;
