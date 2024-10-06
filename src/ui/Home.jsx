import { lazy, Suspense } from "react";
import ProductLoader from "./ProductLoader";

const ProductList = lazy(() => import("../features/Product/ProductList"));

function Home() {
  return (
    <div>
      <Suspense fallback={<ProductLoader />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default Home;
