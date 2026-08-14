
import { initialProducts } from '../data/product'
import { IoPricetagOutline } from "react-icons/io5";


const availableCategory = [
  "All",
  ...new Set(initialProducts.map(p => p.category))
]

const CategoryFilter = () => {
  const selectedCategory = "Phone"
  return (
    <>
      <div className='flex flex-wrap gap-3 border-b border-gray-800 pb-6'>
          <IoPricetagOutline className='w-5 h-5 text-orange-500 mt-2 mr-2 hidden sm:block'/>
          {
            availableCategory.map(c => (
              <button  key={c} className={`px-5 py-2 text-sm font-bold rounded-full transition
              duration-200 shadow-md hover:cursor-pointer ${selectedCategory === c ? 
              `bg-orange-600 text-white shadow-orange-800/50` :
              `bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700`}`}>
                {c}
              </button>
            ))
          }
      </div>
    </>
  )
}

export default CategoryFilter