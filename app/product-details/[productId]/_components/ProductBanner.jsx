import React from 'react'
import Image from 'next/image';

const ProductBanner = ({product}) => {
  const imgUrl = "http://localhost:1337";
  const srcc = `${product?.attributes?.banner?.data?.attributes?.url}`;
  const fullSrc = `${imgUrl}${srcc}`;
  return (
    <div>
      {
        product?.attributes?.banner?.data?.attributes?.url ? 
          <Image
            src={fullSrc} 
            alt='product-details-banner' 
            width={400} 
            height={400} 
            className='rounded-lg'
            priority
          /> : 
          <div className='w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pulse'></div>
      }
      
    </div>
  )
}

export default ProductBanner 
