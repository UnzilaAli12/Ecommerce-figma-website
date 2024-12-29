"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Image from "next/image";


    const products = [{
        image: "/1.svg", 
        label: "Just In",
        title: "Nike Air Force 1 Mid '07",
        category: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 10,795.00",
      },
      // 2
      {
        image: "/2.svg", 
        label: "Just In",
        title: "Nike Court Vision Low Next Nature",
        category: "Men's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 4,995.00",
      },
      // 3
      {
        image: "/3.svg", 
        label: "Just In",
        title: "Nike Air Force 1 PLT.AF.ORM",
        category: "Women's Shoes",
        color: "1 Colour",
        price: "MRP : ₹ 8,695.00",
      },
      // 4
      {
          image: "/4.svg", 
          label: "Just In",
          title: "Nike Air Force 1 React",
          category: "Men's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 13 295.00",
        },
      //   5
      {
          image: "/5.svg", 
          label: "Promo Exclusion",
          title: "Air Jordan 1 Elevate Low",
          category: "Women's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 11 895.00",
        },
      //   6
      {
          image: "/6.svg", 
          label: "Just In",
          title: "Nike Standard Issue",
          category: "Women's Basketball Jersey",
          color: "1 Colour",
          price: "MRP : ₹ 2 895.00",
        },
      //   7
      {
          image: "/7.svg", 
          label: "Promo Exclusion",
          title: "Nike Dunk Low Retro SE",
          category: "Men's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 9 695.00",
        },
      //   8
      {
          image: "/8.svg", 
          label: "Sustainable Materials",
          title: "Nike Dri-FIT UV Hyverse",
          category: "Men's Short-Sleeve Graphic Fitness Top",
          color: "1 Colour",
          price: "MRP : ₹ 2 495.00",
        },
      //   9
      {
          image: "/9.svg", 
          label: "Just In",
          title: "Nike Court Vision Low",
          category: "Men's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 5 695.00",
        },
      //   10
      {
          image: "/10.svg", 
          label: "Just In",
          title: "Nike Dri-FIT Ready",
          category: "Men's Short-Sleeve Fitness Top",
          color: "3 Colour",
          price: "MRP : ₹ 2 495.00",
        },
      //   11
      {
          image: "/11.svg", 
          label: "Just In",
          title: "Nike One Leak Protection: Period",
          category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
          color: "2 Colour",
          price: "MRP : ₹ 3 395.00",
        },
      //   12
      {
          image: "/12.svg", 
          label: "Just In",
          title: "Nike Air Force 1 LV8 3",
          category: "Older Kids' Shoe",
          color: "1 Colour",
          price: "MRP : ₹ 7 495.00",
        },
      //   13
      {
          image: "/13.svg", 
          label: "Just In",
          title: "Nike Blazer Low Platform",
          category: "Women's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 8 195.00",
        },
      //   14
      {
          image: "/14.svg", 
          label: "Just In",
          title: "Nike Air Force 1 '07",
          category: "Women's Shoes",
          color: "2 Colour",
          price: "MRP : ₹ 8 195.00",
        },
      //   15
      {
          image: "/15.svg", 
          label: "Just In",
          title: "Nike Pro Dri-FIT",
          category: "Men's Tight-Fit Sleeveless Top",
          color: "1 Colour",
          price: "MRP : ₹ 1 495.00",
        },
      // 16
      {
          image: "/16.svg", 
          label: "Just In",
          title: "Nike Dunk Low Retro",
          category: "Men's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 8 695.00",
        },
        // 17
        {
          image: "/17.svg", 
          label: "Just In",
          title: "Nike Air Max SC",
          category: "Women's Shoes",
          color: "2 Colour",
          price: "MRP : ₹ 5 995.00",
        },
        // 18
        {
          image: "/18.svg", 
          label: "Just In",
          title: "Nike Dri-FIT UV Miler",
          category: "Men's Short-Sleeve Running Top",
          color: "1 Colour",
          price: "MRP : ₹ 1 695.00",
        },
        // 19
        {
            image: "/19.svg", 
            label: "Just In",
            title: "Nike Air Max SYSTM",
            category: "Older Kids' Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 6 495.00",
          },
        //   20
        {
            image: "/20.svg", 
            label: "Just In",
            title: "Nike Alate All U",
            category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
            color: "1 Colour",
            price: "MRP : ₹ 2 195.00",
          },
        //   21
        {
            image: "/21.svg", 
            label: "Just In",
            title: "Nike Court Legacy Lift",
            category: "Women's Shoes",
            color: "2 Colour",
            price: "MRP : ₹ 7 495.00",
          },
        //   22
        {
            image: "/22.svg", 
            label: "Just In",
            title: "Nike Swoosh",
            category: "Women's Medium-support Padded Sports Bra Tank",
            color: "2 Colour",
            price: "MRP : ₹ 3 095.00",
          },
        //   23
        {
            image: "/23.svg", 
            label: "Just In",
            title: "Nike SB Zoom Janoski OG+",
            category: " Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 595.00",
          },
        //   24
        {
            image: "/24.svg", 
            label: "Just In",
            title: "Nike Dri-FIT Run Division Rise 365",
            category: "Men's Running Tank",
            color: "2 Colour",
            price: "MRP : ₹ 3 495.00",
          },
        //   25
        {
            image: "/25.svg", 
            label: "Just In",
            title: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            color: "1 Colour",
            price: "MRP : ₹ 2 495.00",
          },
        //   26
        {
            image: "/26.svg", 
            label: "Just In",
            title: "Jordan Series ES",
            category: "Men's Shoes",
            color: "2 Colour",
            price: "MRP : ₹ 7 495.00",
          },
        //   27
        {
            image: "/27.svg", 
            label: "Just In",
            title: "Nike Outdoor Play",
            category: "Older Kids' Oversized Woven Jacket",
            color: "1 Colour",
            price: "MRP : ₹ 3 895.00",
          },
        //   28
        {
            image: "/28.svg", 
            label: "Just In",
            title: "Nike Sportswear Trend",
            category: "Older Kids' (Girls') High-waisted Woven Shorts",
            color: "2 Colour",
            price: "MRP : ₹ 2 495.00",
          },
        //   29
        {
            image: "/29.svg", 
            label: "Just In",
            title: "Nike Blazer Low '77 Jumbo",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 595.00",
          },
        //   30
        {
            image: "/30.svg", 
            label: "Just In",
            title: "Nike SB Force 58",
            category: "Skate Shoe",
            color: "1 Colour",
            price: "MRP : ₹ 5 995.00",
          },]; 

    export default function ProductDetail() {
      const router = useRouter();
      const  id   = router;
      console.log('Router Query:', router);
    
      const productId = id ? parseInt(id as unknown as string, 10) : -1; 
      console.log('Product ID:', productId);
      const product = products[productId];
    
      if (productId < 0 || productId >= products.length) {
    return <div className="p-10">Product not found!</div>
      }
    
      return (
        <div className="p-10">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="mt-4">
            <div className="text-orange-500 font-bold">{product.label}</div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-gray-500">{product.color}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>
          </div>
        </div>
    
  );
}


