"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, ShoppingBagIcon } from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Search, Heart, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import router from 'next/router';
import Footer from '@/app/components/Footer';


    const products = [{
        id:0,
        image: "/1.svg", 
        title: "Nike Air Force 1 Mid '07",
        price: "MRP : ₹ 10,795.00",
        description: "Turn style on its head with this crafted take on the Nike Air Force 1 Mid '07. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
      },
      // 2
      {
        id:1,
        image: "/2.svg", 
        title: "Nike Court Vision Low Next Nature",
        price: "MRP : ₹ 4,995.00",
        description: "Turn style on its head with this crafted take on the Nike Court Vision Low Next Nature. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
      },
      // 3
      {
        id:2,
        image: "/3.svg", 
        title: "Nike Air Force 1 PLT.AF.ORM",
        price: "MRP : ₹ 8,695.00",
        description: "Turn style on its head with this crafted take on the Nike Air Force 1 PLT.AF.ORM. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
      },
      // 4
      {
        id:3,
          image: "/4.svg", 
          title: "Nike Air Force 1 React",
          price: "MRP : ₹ 13 295.00",
          description: "Turn style on its head with this crafted take on the Nike Air Force 1 React. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   5
      {
        id:4,
          image: "/5.svg", 
          title: "Air Jordan 1 Elevate Low",
          price: "MRP : ₹ 11 895.00",
          description: "Turn style on its head with this crafted take on the Air Jordan 1 Elevate Low. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   6
      {
        id:5,
          image: "/6.svg", 
          title: "Nike Standard Issue",
          price: "MRP : ₹ 2 895.00",
          description: "Turn style on its head with this crafted take on the Nike Standard Issue. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   7
      {
        id:6,
          image: "/7.svg", 
          title: "Nike Dunk Low Retro SE",
          price: "MRP : ₹ 9 695.00",
          description: "Turn style on its head with this crafted take on the Nike Dunk Low Retro SE. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   8
      {
        id:7,
          image: "/8.svg", 
          title: "Nike Dri-FIT UV Hyverse",
          price: "MRP : ₹ 2 495.00",
          description: "Turn style on its head with this crafted take on the Nike Dri-FIT UV Hyverse. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   9
      {
        id:8,
          image: "/9.svg", 
          title: "Nike Court Vision Low",
          price: "MRP : ₹ 5 695.00",
          description: "Turn style on its head with this crafted take on the Nike Court Vision Low. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   10
      {
        id:9,
          image: "/10.svg", 
          title: "Nike Dri-FIT Ready",
          price: "MRP : ₹ 2 495.00",
          description: "Turn style on its head with this crafted take on the Nike Dri-FIT Ready. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   11
      {
        id:10,
          image: "/11.svg", 
          title: "Nike One Leak Protection: Period",
          price: "MRP : ₹ 3 395.00",
          description: "Turn style on its head with this crafted take on the Nike One Leak Protection: Period. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   12
      {
        id:11,
          image: "/12.svg", 
          title: "Nike Air Force 1 LV8 3",
          price: "MRP : ₹ 7 495.00",
          description: "Turn style on its head with this crafted take on the Nike Air Force 1 LV8 3. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   13
      {
        id:12,
          image: "/13.svg", 
          title: "Nike Blazer Low Platform",
          price: "MRP : ₹ 8 195.00",
          description: "Turn style on its head with this crafted take on the Nike Blazer Low Platform. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   14
      {
        id:13,
          image: "/14.svg", 
          title: "Nike Air Force 1 '07",
          price: "MRP : ₹ 8 195.00",
          description: "Turn style on its head with this crafted take on the Nike Air Force 1 '07. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      //   15
      {
        id:14,
          image: "/15.svg", 
          title: "Nike Pro Dri-FIT",
          price: "MRP : ₹ 1 495.00",
          description: "Turn style on its head with this crafted take on the Nike Pro Dri-FIT. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
      // 16
      {
        id:15,
          image: "/16.svg", 
          title: "Nike Dunk Low Retro",
          price: "MRP : ₹ 8 695.00",
          description: "Turn style on its head with this crafted take on the Nike Dunk Low Retro. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
        // 17
        {
          id:16,
          image: "/17.svg", 
          title: "Nike Air Max SC",
          price: "MRP : ₹ 5 995.00",
          description: "Turn style on its head with this crafted take on the Nike Air Max SC. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
        // 18
        {
          id:17,
          image: "/18.svg", 
          title: "Nike Dri-FIT UV Miler",
          price: "MRP : ₹ 1 695.00",
          description: "Turn style on its head with this crafted take on the Nike Dri-FIT UV Miler. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
        },
        // 19
        {
          id:18,
            image: "/19.svg", 
            title: "Nike Air Max SYSTM",
            price: "MRP : ₹ 6 495.00",
            description: "Turn style on its head with this crafted take on the Nike Air Max SYSTM. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   20
        {
          id:19,
            image: "/20.svg", 
            title: "Nike Alate All U",
            price: "MRP : ₹ 2 195.00",
            description: "Turn style on its head with this crafted take on the Nike Alate All U. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   21
        {
          id:20,
            image: "/21.svg", 
            title: "Nike Court Legacy Lift",
            price: "MRP : ₹ 7 495.00",
            description: "Turn style on its head with this crafted take on the Nike Court Legacy Lift. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   22
        {
          id:21,
            image: "/22.svg", 
            title: "Nike Swoosh",
            price: "MRP : ₹ 3 095.00",
            description: "Turn style on its head with this crafted take on the Nike Swoos. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   23
        {
          id:22,
            image: "/23.svg", 
            title: "Nike SB Zoom Janoski OG+",
            price: "MRP : ₹ 8 595.00",
            description: "Turn style on its head with this crafted take on the Nike SB Zoom Janoski OG+. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   24
        {
          id:23,
            image: "/24.svg", 
            title: "Nike Dri-FIT Run Division Rise 365",
            price: "MRP : ₹ 3 495.00",
            description: "Turn style on its head with this crafted take on the Nike Dri-FIT Run Division Rise 365. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   25
        {
          id:24,
            image: "/25.svg", 
            title: "Nike Dri-FIT Challenger",
            price: "MRP : ₹ 2 495.00",
            description: "Turn style on its head with this crafted take on the Nike Dri-FIT Challenger. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   26
        {
          id:25,
            image: "/26.svg", 
            title: "Jordan Series ES",
            price: "MRP : ₹ 7 495.00",
            description: "Turn style on its head with this crafted take on the Jordan Series ES. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   27
        {
          id:26,
            image: "/27.svg", 
            title: "Nike Outdoor Play",
            price: "MRP : ₹ 3 895.00",
            description: "Turn style on its head with this crafted take on the Nike Outdoor Play. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   28
        {
          id:27,
            image: "/28.svg", 
            title: "Nike Sportswear Trend",
            price: "MRP : ₹ 2 495.00",
            description: "Turn style on its head with this crafted take on the Nike Sportswear Trend. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   29
        {
          id:28,
            image: "/29.svg", 
            title: "Nike Blazer Low '77 Jumbo",
            price: "MRP : ₹ 8 595.00",
            description: "Turn style on its head with this crafted take on the Nike Blazer Low '77 Jumbo. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },
        //   30
        {
          id:29,
            image: "/30.svg", 
            title: "Nike SB Force 58",
            price: "MRP : ₹ 5 995.00",
            description: "Turn style on its head with this crafted take on the Nike SB Force 58. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."
          },]; 

    export default function ProductDetail() {
    

      const params = useParams();
      const productId  = params.id;
    
      const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return <p className="text-center text-red-500">Product not found</p>;
  }


  return (
    <div>
    <div className='w-full  bg-[#F5F5F5] py-3' >
<Image className=' ml-8'  src="/NikeLogo.svg" alt="Logo"   width={19.2} height={17.97} />
    </div>
    <nav className='w-full p-4 ' >
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
      
      <div>
      <Image className=' ml-3  '
  src="/Logo.svg"
  alt="Logo"
  width={58.85}
  height={20.54}
  />
</div>

<div className='hidden md:flex gap-6  text-base font-medium ' >
<Link href="/AllProducts" target='_blank' >New & Featured</Link>
<Link href="/Men">Men</Link>
<Link href="/Women">Women</Link>
<Link href="/Kids">Kids</Link>
<Link href="/Sale">Sale</Link>
<Link href="/SNKRS">SNKRS</Link>
 </div>
<div className='hidden md:flex gap-4' >
<div className='relative ' >
<Search className='absolute top-2 left-2' />
<Input placeholder='Search' className=' text-center text-[#CCCCCC] text-xs rounded-full bg-[#F5F5F5] ' />

</div>
<Button variant={'outline'} size={'icon'} className='rounded-full'>
  <Heart/>
</Button>
<Button variant={'outline'} size={'icon'} className='rounded-full' >
<Link  href='/Cart' target='_blank' ><ShoppingBagIcon className="cursor-pointer" /></Link>
</Button>
     
     </div>
     <div className=' md:hidden ' >
<Sheet  >
 <SheetTrigger>
 <Button variant={'outline'} size={'icon'} >
  <Menu/>
</Button>
 </SheetTrigger>
 <SheetContent>
  <SheetHeader>
    <SheetTitle className='font-bold' >
    Hello Nike App
    <Image className=' ml-[105px] mt-3 '
src="/Logo.svg"
alt="Logo"
width={58.85}
height={20.54} />
    </SheetTitle>
  </SheetHeader>
  <div className='flex flex-col gap-7 text-bold  mt-6' >
<Link href="/AllProducts" target='_blank' >All Products</Link>
<Link href="/AllProducts" target='_blank'>New & Featured</Link>
<Link href="/AllProducts" target='_blank'>Men</Link>
<Link href="/AllProducts" target='_blank'>Women</Link>
<Link href="/AllProducts" target='_blank'>Kids</Link>
<Link href="/AllProducts" target='_blank'>Sale</Link>
<Link href="/AllProducts" target='_blank'>SNKRS</Link>

  
<div>
  
</div>

  </div>
 </SheetContent>
</Sheet>
</div>
     </div>
    </nav>

    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 p-6 md:p-10 md:mt-10 mb-20 md:mb-[200px]">
      <div >
      <Image src={product.image} alt={product.title} width={653} height={653} className="  rounded-md mt-10" />
      </div>
      <div className="max-w-md w-full text-center md:text-left ">
        <h1 className="md:text-5xl text-3xl font-bold">{product.title.split(" ")[0]}{" "}
         <span > {product.title.split(" ").slice(1).join(" ")}</span>
          
        </h1>
        <p className="md:text-xl text-base text-gray-700 mt-7 leading-relaxed">{product.description}</p>
        <p className="md:text-4xl text-2xl font-medium mt-10">{product.price}</p>
        <button 
          onClick={() => router.push('/Cart')} 
          className="mt-10 md:mt-8 bg-black items-center gap-2 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
    <Footer/>
</div>
  );
}

    
