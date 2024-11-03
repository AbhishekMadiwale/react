import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCard = () => {
    dispatch(clearCart());
  };

  const [isEnable, setisEnable] = useState(false);
  const disableClearButton = () => {
    setisEnable(false)
  }

  const enableClearButton = () => {
    setisEnable(true);
  }

  return (
    <div className="m-1o p-10 text-center ">
      <h1 className="font-bold text-2xl py-6">cart</h1>
      <div className="w-6/12 m-auto border border-black rounded-lg">
        <button
          className="bg-gray-500 text-center text-white flex justify-start rounded-lg m-4 p-4 cursor-pointer"
          // disabled={cartItems.length === 0 ? disableClearButton : enableClearButton}
          onClick={handleClearCard}
        >   
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1 className="font-bold text-2xl">Cart is empty. Please add items</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
