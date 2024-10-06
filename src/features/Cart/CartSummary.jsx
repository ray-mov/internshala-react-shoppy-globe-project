import { useSelector } from "react-redux";

function CartSummary() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const tax = parseFloat(((totalPrice / 100) * 5).toFixed(2));

  return (
    <div className="w-full max-w-[320px] shadow-md p-3 text-lg font-mono space-y-3">
      <div className="flex justify-between ">
        <p>Sub-total</p>
        <p>{totalPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p>Tax(5%)</p>
        <p>{tax}</p>
      </div>
      <div className="flex justify-between">
        <p>Quantity</p>
        <p>{totalQuantity}</p>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <p>{(totalPrice + tax).toFixed(2)}</p>
      </div>
      <button className="bg-lime-400 cursor-pointer hover:bg-lime-300 hover:scale-105 w-full text-2xl rounded-3xl py-2 shadow-sm ">
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;
