import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartList() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="w-full text-center">
      <ul className="space-y-4">
        {cartItems.length === 0 ? (
          <div className="flex items-center justify-between max-w-[700px] shadow-sm py-12 p-2">
            <h1 className="text-4xl">No Item in your cart</h1>
          </div>
        ) : (
          cartItems.map((item) => {
            return (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default CartList;
