import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  
  

  const renderproduct = products.map((product) => (
    <div
      key={product.id}
      className="bg-white w-[30%] rounde  d-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-200"
    >
      <img src={product.image} alt="" />
      {/* /* {<img
        src={product.image} 
        className="w[10%] h-48 object-contain mb-4"
      />} */ }
      <h2 className="text-lg font-semibold mb-2 line-clamp-1">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description.slice(0, 100)}...
      </p>
      <div className="flex items-center justify-between">
        <p className="text-indigo-600 font-bold text-lg">${product.price}</p>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
          Add to Cart
        </button>
      </div>
      <Link to={`/product/${product.id}`} className=" text-zinc-900 px-4 py-2 m-3 flex justify-center items-center rounded-lg hover:bg-sky-500 transition-colors">More Info</Link>
    </div>
  ));

  return products.length > 0 ? (
    <div className="flex flex-wrap w-screen gap-6 p-6 bg-gray-100 ">
      {renderproduct}
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen text-xl font-semibold">
      Loading...
    </div>
  );
};

export default Products;
