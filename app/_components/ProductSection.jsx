"use client";
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'

const ProductSection = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, [])
  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then(res => {
      console.log(res.data.data);
      setProductList(res.data.data);
    })
  }
  return (
    <div id='courses' className='px-10 md:px-20'>
      <h2 className='m-4 text-xl'>Our Latest Courses</h2>
      <ProductList productList={productList}/>
    </div>
  )
}

export default ProductSection
