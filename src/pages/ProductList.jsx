import React from 'react'
import SearchFilter from '../components/SearchFilter'
import CategoryFilter from '../components/CategoryFilter'

const ProductList = () => {
  return (
    <>
      <div className='container mx-auto px-4 md:px-8 pt-8'>
        <SearchFilter/>
        <CategoryFilter/>
      </div>
    </>
  )
}

export default ProductList