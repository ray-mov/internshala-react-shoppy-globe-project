import { FaCartShopping, FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Narbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="flex w-full px-6 py-6 justify-between items-center  border-b-2 shadow-sm mb-6">
      <Link to="/" className="text-3xl font-bold">
        ShoppyGlobe
      </Link>

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/cart" className="relative">
            <FaCartShopping size={24} />
            <div className="absolute -right-4 -top-3 rounded-full bg-red-500 h-6 w-6 text-center text-white font-bold">
              {totalQuantity}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaUser size={24} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Narbar;
