import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../store/action/productAction";

const ProductDetails = () => {
  const { id } = useParams();
  const {productReducer:{products}, userReducer:{users},} = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);
  

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      description: product?.description,
      category: product?.category,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateproductHandler = (product) => {
    dispatch(asyncupdateproduct(product.id));
  };

  const DeleteHandler = (id) => {
    dispatch(asyncdeleteproduct(product.id));
    navigate("/products");
  };

  if (!product) {
    return <div>Loading product details...</div>; // Or a "Product not found" message
  }

  return (
    <>
      <div className="w-full flex">
        <img className="w-1/2 h-1/2 object-cover" src={product.image} alt="" />
        <div className="px-3 w-1/2 h-1/2">
          <h1 className="font-thin text-5xl">{product.title}</h1>
          <h2 className="mb-5 text-2xl text-green-400">${product.price}</h2>
          <p className="mb-5 ">{product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
      <hr/>
    {users && users?.isAdmin && 

    <form
        onSubmit={handleSubmit(updateproductHandler)}
        className="flex justify-center items-center m-5 py-10 flex-col w-1/3"
      >
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
        <button className="mt-5 px-4 py-2 bg-blue-500 rounded">
          Update Product
        </button>
        <button
          onClick={DeleteHandler}
          className="mt-5 px-4 py-2 bg-red-500 rounded"
        >
          Delete Product
        </button>
      </form>
    }
      
    </>
  );
};

export default ProductDetails;
