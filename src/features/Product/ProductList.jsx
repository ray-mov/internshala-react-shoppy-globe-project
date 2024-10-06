import { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "../Search/SearchBar";
import useFetch from "../../Hooks/useFetch";
import ProductLoader from "./ProductLoader";
import Error from "../../ui/Error";

function ProductList() {
  const [search, setSearch] = useState("");

  const { data, loading, error } = useFetch(
    search
      ? `https://dummyjson.com/products/search?q=${search}`
      : `https://dummyjson.com/products`
  );

  if (loading) {
    return (
      <div>
        <ProductLoader />
      </div>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="py-10">
      <SearchBar setSearch={setSearch} />
      {search && data.products.length === 0 ? (
        <div className="w-full mx-auto flex items-center justify-center h-[400px]">
          <h1 className="text-xl font-mono">
            The Product You Have Search Is Not Available
          </h1>
        </div>
      ) : null}
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {data.products.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
