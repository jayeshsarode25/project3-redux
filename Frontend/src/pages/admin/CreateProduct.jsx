import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproduct } from "../../store/action/productAction";

const CreateProduct = () => {
   const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const createproductHandler = (product) => {
      product.id = nanoid(); 
      dispatch(asynccreateproduct(product));
         console.log(product)  
         navigate("/product")
    }

  return (
    <form onSubmit={handleSubmit(createproductHandler)} className="flex justify-center items-center m-5 py-10 flex-col w-1/3">
      <input
        {...register("image")}
        className="mb-3 outline-0 border-b p-2 text-2xl "
        type="url"
        placeholder="image-url"
      />

      <input
        {...register("title")}
        className="mb-3 outline-0 border-b p-2 text-2xl "
        type="text"
        placeholder="title"
      />

      <input
        {...register("price")}
        className="mb-3 outline-0 border-b p-2 text-2xl "
        type="number"
        placeholder="0.00"
      />

      <textarea
        {...register("description")}
        className="mb-3 mr-7 outline-0 border-b p-2 text-2xl "
        placeholder="Enetr Discription"
      ></textarea>

      <input
        {...register("category")}
        className="mb-3 outline-0 border-b p-2 text-2xl "
        type="text"
        placeholder="category"
      />
      <button className="mt-5 px-4 py-2 bg-blue-500 rounded">Create Product</button>
    </form>
  );
}

export default CreateProduct