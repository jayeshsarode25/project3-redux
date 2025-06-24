import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncdeleteuser,
  asynclogoutuser,
  asyncupdateuser,
} from "../../store/action/userAction";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.userReducer.users);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateuserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user));
  };

  const LogoutHandler = (id) => {
    dispatch(asynclogoutuser());
    navigate("/login");
  };

  const DeleteHandler = (id) => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/login");
  };

  return users ? (
    <div>
      <form
        onSubmit={handleSubmit(updateuserHandler)}
        className="flex justify-center items-center m-5 py-10 flex-col w-1/3"
      >
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
          placeholder="jhon@deo"
        />

        <input
          {...register("password")}
          className="mb-3 outline-0 border-b p-2 text-2xl "
          type="password"
          placeholder="******"
        />
        <button className="mt-5 px-4 py-2 bg-blue-500 rounded">
          Update User
        </button>

        <button
          onClick={LogoutHandler}
          className="mt-5 px-4 py-2 bg-red-500 rounded"
        >
          Logout User
        </button>

        <button
          onClick={DeleteHandler}
          className="mt-5 px-4 py-2 bg-red-700 rounded"
        >
          Delete User
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
