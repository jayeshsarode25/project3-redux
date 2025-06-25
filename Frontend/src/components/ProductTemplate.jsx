import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/action/userAction";

const ProductTemplate = ({ product }) => {
    const dispatch = useDispatch();
    
      const users = useSelector((state) => state.userReducer.users);

    const AddtoCartHandler = (product) => {
        const copyuser = { ...users, cart: [...users.cart] };
        const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);
    
        if (x == -1) {
          copyuser.cart.push({ product, quantity: 1 });
        } else {
          copyuser.cart[x] = {
            product,
            quantity: copyuser.cart[x].quantity + 1,
          };
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser));
      };


  return (
    <div
      className="bg-white w-[30%] rounde  d-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-200"
      key={product.id}
    >
      <img src={product.image} alt="" />

      <h2 className="text-lg font-semibold mb-2 line-clamp-1">
        {product.title}
      </h2>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description?.slice(0, 100)}...
      </p>
      <div className="flex items-center justify-between">
        <p className="text-indigo-600 font-bold text-lg">${product.price}</p>
        <button
          onClick={() => AddtoCartHandler(product)}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
      <Link
        to={`/product/${product.id}`}
        className=" text-zinc-900 px-4 py-2 m-3 flex justify-center items-center rounded-lg hover:bg-sky-500 transition-colors"
      >
        More Info
      </Link>
    </div>
  );
};

export default ProductTemplate;
