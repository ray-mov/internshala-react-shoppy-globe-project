import { Link } from "react-router-dom";

function ProductItem({ id, title, thumbnail, price }) {
  return (
    <Link to={`/product/${id}`}>
      <li className="shadow-md rounded-md">
        <img src={thumbnail} alt={title} />
        <h1 className="px-2 text-lg text-gray-700 font-medium">{title}</h1>
        <p className="p-2 font-medium text-gray-700  text-xl">$ {price}</p>
      </li>
    </Link>
  );
}

export default ProductItem;
