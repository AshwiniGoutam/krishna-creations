import { useEffect } from "react";
import { useAppSelector } from "../store";

const CartPersistor = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return null;
};

export default CartPersistor;
