import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import { FiZap } from "react-icons/fi";
import { LuShoppingBasket } from "react-icons/lu";



const ProductDetails = () => {
  const { id } = useParams()
  const { products,addToCart } = useCart()
  const prodSpec = products.find(product => String(product.id) === id)

  if (!prodSpec) {
    return <div className='container mx-auto px-4 md:px-8 py-12'>Product not found</div>
  }

  return (
    <div className='container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl
    shadow-2xl my-8 p-6 md:p-12 border border-gray-800' >
      <Link to={"/"}>
        <button className='cursor-pointer flex items-center text-gray-400 hover:text-orange-400 
        transition duration-150 mb-12 font-semibold text-lg'>
          <MdOutlineKeyboardArrowLeft className='w-6 h-6 mr-1' />
          <span>Back to all products</span>
        </button>
      </Link>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
        <div className='w-full'>
          <img className='w-100 h-100 object-cover rounded-2xl shadow-2xl 
          shadow-gray-950/50 border-4 border-gray-800 '
            src={prodSpec.image} alt={prodSpec.name} />
        </div>
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='text-4xl font-extrabold text-white mb-4 leading-tight
            tracking-tighter'>{prodSpec.name}</h1>
          </div>
          <p className='text-3xl font-extrabold text-orange-400
          mb-4'>₹ {prodSpec.price.toFixed(2)}</p>
          <h2 className='text-xl font-bold text-gray-200 mb-2 border-b border-e-orange-900/50
          pb-2 flex items-center space-x-2'>
            <BsTag className='w-5 h-5 text-orange-500' />
            <span>Product Overview</span>
          </h2>
          <p className='text-gray-500 text-lg leading-relaxed mb-3'>{prodSpec.description}</p>
          <ul className='space-y-3 text-gray-300 p-4 bg-gray-800
          rounded-xl border border-gray-700'>
            <li className='flex items-center space-x-3 text-lg'>
              <FiZap className='w-5 h-5 text-orange-500' />
              <span>High-Quality, Professional Grade Materials</span>
            </li>
            <li className='flex items-center space-x-3 text-lg'>
              <FiZap className='w-5 h-5 text-orange-500' />
              <span>Comprehensive 1-year Manufacturer Waranty</span>
            </li>
            <li className='flex items-center space-x-3 text-lg'>
              <FiZap className='w-5 h-5 text-orange-500' />
              <span>Immediate Shipping for in-stock items</span>
            </li>
          </ul>
        
        <div className='mt-5 space-y-4 flex justify-center flex-col'>
          <button 
          onClick={() => addToCart(prodSpec)}
          className='w-full py-3 bg-orange-600 text-white
          font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300
              flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-orange-600/50 uppercase
                    tracking-wider'>
            <LuShoppingBasket className='w-5 h-5' />
            <span>Add to cart</span>
          </button>
          <Link to={'/'} className='border-2 w-full py-3 border-orange-600 text-orange-400
                    font-bold rounded-full shadow-orange-800/50 cursor-pointer hover:bg-orange-900/50 transition duration-300
                    hover:ring-orange-600/50 uppercase
                    tracking-wider text-center'>
            Keep Shopping
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetails