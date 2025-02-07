"use client"
import React from 'react'
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface ProductSectionDetail{
    params: Promise<{slug : string}>
}

async function getProduct(slug : string): Promise < Product> {
return client.fetch(
groq`*[_type == "product" && slug.current == $slug ][0]{
_id,
productName,
description,
_type,
image,
category,
price,
}`, {slug}

)} 

export default async function ProductPage({params} : ProductSectionDetail){
    const {slug} = await params;
    const product = await getProduct(slug)

    return(

<div>
    <Navbar/>
<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 p-6 md:p-10 md:mt-10 mb-20 md:mb-[200px]">
      <div >
        {product.image && (
      <Image src={urlFor(product.image).url()} alt={product.description} width={500} height={500} className="  rounded-lg shadow-md mt-10" />
    )}
      </div>
      <div className="max-w-md w-full text-center md:text-left ">
        <h1 className="md:text-5xl text-3xl font-bold">{product.productName.split(" ")[0]}{" "}
         <span > {product.productName.split(" ").slice(1).join(" ")}</span>
          
        </h1>
        <p className="md:text-xl text-base text-gray-700 mt-7 leading-relaxed">{product.description}</p>
        <p className="md:text-2xl text-lg text-gray-400 mt-2">{product.category}</p>
        <p className="md:text-3xl text-2xl text-red-500 font-medium mt-7">${product.price}</p>
        <button 

          className="mt-10 md:mt-8 md:text-lg text-2xl bg-black items-center gap-2 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
    <Footer/>
</div>


    )
}