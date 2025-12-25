// import { useDispatch, useSelector } from 'react-redux';
// import ItemList from './ItemList';
// import { clearCart } from '../utils/cartSlice';
// const Cart = () => {

//     const cartItems = useSelector((store) => store.cart.items);

//     const dispatch = useDispatch();

//     const handleClearCart = () => {
//         dispatch(clearCart())
//     }

//     return <div className="text-center m-4 p-4">
//         <h1 className="text-3xl font-bold text-amber-500">Your Cart</h1>
//                     <button className='bg-amber-500 rounded-xl px-4 py-2' onClick={handleClearCart}>Clear Cart</button>
//                     {cartItems.length === 0 && <h1>Your cart is Empty! Start Shopping 🛍️</h1>}
//         <div>

//            <ItemList items={cartItems} />
//         </div>
//     </div>
// };

// export default Cart;


import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* 🛒 Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Your Cart
          </h1>

          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty State */}
        {cartItems.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-xl font-semibold">
              Your cart is empty 🛍️
            </p>
            <p className="mt-2 text-sm">
              Add items from the menu to get started
            </p>
          </div>
        )}

        {/* Cart Items */}
        {cartItems.length > 0 && (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
