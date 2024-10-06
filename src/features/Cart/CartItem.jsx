import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center  max-w-[700px] shadow-md px-6">
      <div>
        <img src={item.thumbnail} alt={item.title} className="w-52" />
      </div>
      <div className=" w-full space-y-6">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold">{item.title}</h1>
          <AiTwotoneDelete
            size={28}
            className="cursor-pointer"
            onClick={() => dispatch(deleteItem(item.id))}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold"> $ {item.price}</p>
          <div className="flex text-2xl ">
            <div className="border-1 border-black space-x-2">
              <span
                className="bg-gray-200 px-2 cursor-pointer"
                onClick={() => dispatch(decreaseItemQuantity(item.id))}
              >
                -
              </span>
              <span>{item.quantity}</span>
              <span
                className="bg-gray-200 px-2 cursor-pointer"
                onClick={() => dispatch(increaseItemQuantity(item.id))}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
