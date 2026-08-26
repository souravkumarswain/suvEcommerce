import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiZap } from "react-icons/fi";

const OrderConfirmation = ({deliveryDetails}) => {
  return (
    <div className="container mx-auto md:px-8 pt-12">
      <div className=" flex flex-col text-center items-center p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto
       mt-12 border border-green-700 text-white">
        <FaRegCheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg"/>
        <h2 className="text-3xl font-extrabold text-white mb-4">Order Confirmed!</h2>
        <p className="text-lg text-gray-300 mb-6">
          Your transaction is complete. A confirmation email has been sent to your account.
        </p>
        <div className="p-6 bg-green-900/30 border border-green-700 rounded-xl font-mono text-left inline-block
        text-green-300 text-sm">
          <p className="font-semibold text-lg mb-1">
            {deliveryDetails?.name}
          </p>
          <p>
            {deliveryDetails?.address}
          </p>
          <p>
            {deliveryDetails?.city},{deliveryDetails?.zip}
          </p>
        </div>
        <Link
              to={'/'}
                className='w-72 mt-10 px-4 py-4 bg-orange-600 text-white
                          font-extrabold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300
                          flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-orange-600/50 uppercase
                          tracking-wider'>
                Continue Shopping
              </Link>
      </div>
      
    </div>
  )
}

export default OrderConfirmation