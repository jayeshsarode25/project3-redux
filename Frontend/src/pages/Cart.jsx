import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/action/userAction";

const Cart = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.users);
  const Products = useSelector((state) => state.productReducer.products);

  const IncreaseQuentityHandeler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };
    console.log(copyuser);
      dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const DecreaseQuentityHandeler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 0) {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      copyuser.cart.splice(index ,1);
    };

    console.log(copyuser);
      dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const cartItem = users.cart.map((c, index) => {
    return (
      <li
        className="flex items-center justify-between mb-10 bg-gray-700 p-2 rounded"
        key={c.product.id}
      >
        <img
          className="mr-10 w-[7vmax] h-[7vmax] object-cover"
          src={c.product.image}
          alt=""
        />
        <span>{c.product.title}</span>
        <span>{c.product.price}</span>
        <p>
          <button
            onClick={() => DecreaseQuentityHandeler(index, c)}
            className="text-xl"
          >
            -
          </button>
          <span className="mx-3 p-1 rounded bg-gray-900"> {c.quantity} </span>
          <button
            onClick={() => IncreaseQuentityHandeler(index, c)}
            className="text-lg"
          >
            +
          </button>
        </p>
      </li>
    );
  });

  return <ul>{cartItem}</ul>;
};

export default Cart;
