import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("items", cartItems);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemove = (index) => {
    console.log("Removing item from cart:", index);
    dispatch(removeItem(index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-2xl text-gray-500 mb-4">Your cart is empty</p>
          <p className="text-gray-400">Start adding items to your cart!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 border-b flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                    <p className="text-pink-600 font-bold mt-2">
                      ₹{(item.price / 100).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(index)}
                    className="ml-4 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-600 text-sm font-semibold transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bill Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Bill Summary
              </h2>

              <div className="space-y-4 mb-6 border-b pb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>₹{(calculateTotal() / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee</span>
                  <span>₹40.00</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax & Charges</span>
                  <span>₹{((calculateTotal() * 0.05) / 100).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-gray-800 mb-6">
                <span>Total</span>
                <span className="text-pink-600">
                  ₹
                  {(
                    (calculateTotal() + 4000 + calculateTotal() * 0.05) /
                    100
                  ).toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-pink-400 text-white py-3 rounded-lg font-bold text-lg hover:bg-pink-600 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
