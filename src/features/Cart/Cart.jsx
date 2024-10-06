import { Link } from "react-router-dom";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

function Cart() {
  return (
    <div>
      <p className="text-lg font-medium">
        <span className="text-gray-600">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>{" "}
          /
        </span>{" "}
        <span>Cart</span>
      </p>
      <h1 className="text-4xl font-semibold py-10">My Cart</h1>

      <div className="md:flex gap-6 lg:gap-10 max-w-[70%] mx-auto">
        <CartList />
        <CartSummary />
      </div>
    </div>
  );
}

export default Cart;
