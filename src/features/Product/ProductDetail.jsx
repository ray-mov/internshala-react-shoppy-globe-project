import { FaStar } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addTocart } from "../Cart/cartSlice";
import Comments from "./Comments";

import Error from "../../ui/Error";
import useFetch from "../../Hooks/useFetch";
import ProductDetailLoader from "./ProductDetailLoader";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );

  if (error) {
    return <Error />;
  }

  const handleAddToCart = () => {
    const item = {
      id: data.id,
      title: data.title,
      price: data.price,
      quantity: 1,
      thumbnail: data.thumbnail,
    };

    dispatch(addTocart(item));
  };

  if (loading) {
    return <ProductDetailLoader />;
  }
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 ">
        <div className="bg-gray-100 flex-1">
          <img src={data.images[0]} alt={data.title} />
        </div>
        <div className="space-y-8 flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
            {data.title}
          </h1>
          <p className="flex items-center gap-2">
            Rating{" "}
            {Array.from({ length: Math.floor(data.rating) }, (_, i) => (
              <span key={i}>
                <FaStar color="#fdf61b" />
              </span>
            ))}
            <span>({data.rating})</span>
          </p>
          <p className="text-2xl font-semibold">$ {data.price} /-</p>
          <p className="text-gray-600">{data.description}</p>
          <p className="text-gray-600 flex items-center gap-2">
            <span>
              <MdLocalShipping size={24} />
            </span>
            <span>Shipping : {data.shippingInformation}</span>
          </p>

          <button
            className="py-2   rounded-3xl text-2xl font-semibold bg-lime-300 shadow-sm w-full"
            onClick={handleAddToCart}
          >
            Add To Card
          </button>
        </div>
      </div>
      <Comments reviews={data.reviews} />
    </div>
  );
}

export default ProductDetail;
