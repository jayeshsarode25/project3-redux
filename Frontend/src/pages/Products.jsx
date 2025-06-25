import { lazy, Suspense, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfinateProduct from "../utils/useInfinateProduct";
const ProductTemplate = lazy(() => import ("../components/ProductTemplate"));

const Products = () => {

  const {products, hasMore, fetchproducts} = useInfinateProduct()
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchproducts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b className="bg-black">Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="flex flex-wrap gap-6 p-6 ">
        {products.map((product) => (
          <Suspense key={product.id}
            fallback={
              <h1 className="text-center text-4xl text-red-600">LOADING...</h1>
            }
          >
            <ProductTemplate product={product} />
          </Suspense>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Products;
