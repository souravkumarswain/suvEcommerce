import { useCart } from "../context/CartContext"
import { RxCrossCircled } from "react-icons/rx";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const decreaseQ = () => removeFromCart(item.id)
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 mb-4 bg-gray-900
    rounded-xl sm:p-6 shadow-2xl bprder-gray-800 transition duration-300 hover:border-orange-600/50">
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700"
          src={item.image} alt={item.name} />
        <div className="grow">
          <h3 className="text-xl font-bold text-white line-clamp-1">
            {item.name}
          </h3>
          <p className="text-lg text-orange-400 font-semibold">₹{item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
      <div className="flex items-center border border-gray-700 rounded-full
      overflow-hidden shadow-lg">
        <button onClick={decreaseQ} className="text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150
        w-8 h-8 items-center justify-center">
          -
        </button>
        <span className="px-3 text-base font-bold bg-gray-800 text-white">
          {item.quantity}
        </span>
        <button onClick={increaseQ} className="text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150
        w-8 h-8 items-center justify-center">
          +
        </button>
      </div>
      <p className="font-extrabold text-orange-400 w-24 text-right hidden 
      md:block">
        ₹{(item.price * item.quantity).toFixed(2)}
      </p>
      <button onClick={() => removeFromCart(item.id,true)}
      className="p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40
      transition duration-150 shadow-md">
        <RxCrossCircled className="w-5 h-5 "/>
      </button>
      </div>
    </div>
  )
}

export default CartItem