"use client"
import {useEffect, useState} from 'react';
import React from 'react'
import Image from 'next/image'
import { Product } from '../../../types/products';
import { client } from '@/sanity/lib/client';
import { allProducts} from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProductSection = (p0: { params: any; }, ProductSectionDetail: any) => {
  const [product, setProduct] = useState<Product[]>([])
useEffect(() => {
  async function fetchproduct(){
    const fetchproduct : Product[] = await client.fetch(allProducts)
    setProduct(fetchproduct)
  }
  fetchproduct()
},[])    
     
    return (
    <><div className='w-full px-4 py-8 '>
        <h2 className=' font-bold text-center items-center justify-center text-4xl mt-28 mb-10 ml-3 md:ml-6 '>
          Our Latest
        </h2>
        <div className=" px-2 md:px-6 mt-4  ">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>


            {product.map((product) => (
              <div key={product._id}
             
                className='border rounded-md shadow-md px-0 md:px-2 hover:cursor-pointer hover:shadow-2xl'>
       <Link href={`/product/${product.slug.current}`} target='_blank'>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.description}
                      width={280}
                      height={280}
                      className='w-full h-auto object-cover' />
                  )} 
                <h2 className='mt-2 px-2 text-blue-500 font-semibold'>{product.status}</h2>
                <h1 className='text-lg font-semibold mt-4 px-2'>    {product.productName}</h1>

                <h1 className='text-red-500 font-bold mt-2 px-2'>${product.price}</h1>
                <h2 className='px-2'>{product.category}</h2>
                <p className='text-gray-400 mt-4 px-2'>{product.inventory} pieces left</p>
                </Link>
          </div>
          ))}
        </div>
      
      </div><div className='flex items-center justify-center mt-16'>
          <Link href='/AllProducts' target='_blank'>  <Button className='text-lg py-5 px-8'>View All </Button> </Link>
        </div>    </div></>
        
    
  );
}

export default ProductSection

