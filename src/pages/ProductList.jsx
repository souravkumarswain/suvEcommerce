
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'

const ProductList = () => {
  const {products} = useCart()
  const [searchedItem,setSearchedItem] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const filteredProducts = products.filter(product => {
    const searchMatches = searchedItem === "" ||
      product.name.toLowerCase().includes(searchedItem.toLowerCase()) ||
      product.description.toLowerCase().includes(searchedItem.toLowerCase())

    const filterMatches = selectedCategory === "All" || product.category === selectedCategory

    return searchMatches && filterMatches
  })
  return (
    <>
      <div className='container mx-auto px-4 md:px-8 pt-8'>
        <SearchFilter searchedItem={searchedItem} setSearchedItem = {setSearchedItem}/>
        <CategoryFilter selectedCategory = {selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <h2 className='text-2xl font-extrabold mx-auto px-4 md:px-4 pt-4'>
          Featured Gear ({filteredProducts.length} Items)</h2>
          <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center'>
            {
              filteredProducts.map((product,index) => <ProductCard key = {index} product={product}></ProductCard>)
            }
          </div>
      </div>
    </>
  )
}

export default ProductList