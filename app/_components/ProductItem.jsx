import React from "react";
import Image from "next/image";
import { List } from "lucide-react";
import Link from "next/link";

const ProductItem = ({ product }) => {
  const imgUrl = "http://localhost:1337";
  const srcc = `${product?.attributes?.banner?.data?.attributes?.url}`;
  const srcccc = `${imgUrl}${srcc}`;
  return (
    <Link href={`/product-details/${product?.id}`} className="p-1 rounded-lg hover:border hover:shadow-md border-teal-500 hover:cursor-pointer">
      <Image
        src={`${imgUrl}${item?.product?.attributes?.banner?.data?.attributes?.url}`}
        alt="banner-card"
        width={400}
        height={350}
        className="rounded-t-lg h-[170px] object-cover"
      />
      <div className="flex p-3 justify-between items-center bg-gray-50 rounded-b-lg">
        <div className="">
          <h2 className="text[12px] font-medium line-clamp-1">
            {product?.attributes?.title}
          </h2>
          <h2 className="text-[10px] lg:text-[13px] text-gray-400 flex gap-1 items-center">
            <List className="w-4 h-4" />
            {product?.attributes?.category}
          </h2>
        </div>
        <h2>{product?.attributes?.price}</h2>
      </div>
    </Link>
  );
};

export default ProductItem;
