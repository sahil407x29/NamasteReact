import { useSelector } from "react-redux";
import ItemList from "./ItemList.jsx";
import { useDispatch } from "react-redux";
import { removeItem,clearCart } from "../utils/cartSlice.jsx";

const Cart = () => {
  const dispatch = useDispatch();
  const emptyCart =()=> {
    dispatch(clearCart())
  }
  const removeCart = () => {
    dispatch(removeItem());
  };

  const cartInfo = useSelector((store) => store.cart.items);
  return (
    <div className="w-6/12 m-auto">
      <h1 className=" m-4 p-4 font-bold text-center ">Cart</h1>
      <button className="p-2 m-2 text-white bg-black" onClick={removeCart}>
        Clear cart
      </button>
      <button className="p-2 m-2 text-white bg-black" onClick={emptyCart}>
        Empty Cart
      </button>
      <ItemList items={cartInfo} />
    </div>
  );
};

export default Cart;
