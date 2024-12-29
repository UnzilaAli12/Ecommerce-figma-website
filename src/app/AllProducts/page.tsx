"use client"
import React from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { ChevronDown,ChevronUp, Heart, Menu, Search, ShoppingBagIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Sheet } from '@/components/ui/sheet';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { PiRectangleBold } from 'react-icons/pi';
const AllProducts = () => {
  const router = useRouter();
const goToCart = () => {
  router.push('/Cart');
};
    const products = [
        // 1
        {
          id: 0,
          image: "/1.svg", 
          label: "Just In",
          title: "Nike Air Force 1 Mid '07",
          category: "Men's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 10,795.00",
        },
        // 2
        {
          id: 1,
          image: "/2.svg", 
          label: "Just In",
          title: "Nike Court Vision Low Next Nature",
          category: "Men's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 4,995.00",
        },
        // 3
        {
          id: 2,
          image: "/3.svg", 
          label: "Just In",
          title: "Nike Air Force 1 PLT.AF.ORM",
          category: "Women's Shoes",
          color: "1 Colour",
          price: "MRP : ₹ 8,695.00",
        },
        // 4
        {
          id: 3,
            image: "/4.svg", 
            label: "Just In",
            title: "Nike Air Force 1 React",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 13 295.00",
          },
        //   5
        {
          id: 4,
            image: "/5.svg", 
            label: "Promo Exclusion",
            title: "Air Jordan 1 Elevate Low",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 11 895.00",
          },
        //   6
        {
          id: 5,
            image: "/6.svg", 
            label: "Just In",
            title: "Nike Standard Issue",
            category: "Women's Basketball Jersey",
            color: "1 Colour",
            price: "MRP : ₹ 2 895.00",
          },
        //   7
        {
          id: 6,
            image: "/7.svg", 
            label: "Promo Exclusion",
            title: "Nike Dunk Low Retro SE",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 9 695.00",
          },
        //   8
        {
          id: 7,
            image: "/8.svg", 
            label: "Sustainable Materials",
            title: "Nike Dri-FIT UV Hyverse",
            category: "Men's Short-Sleeve Graphic Fitness Top",
            color: "1 Colour",
            price: "MRP : ₹ 2 495.00",
          },
        //   9
        {
          id: 8,
            image: "/9.svg", 
            label: "Just In",
            title: "Nike Court Vision Low",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 5 695.00",
          },
        //   10
        {
          id: 9,
            image: "/10.svg", 
            label: "Just In",
            title: "Nike Dri-FIT Ready",
            category: "Men's Short-Sleeve Fitness Top",
            color: "3 Colour",
            price: "MRP : ₹ 2 495.00",
          },
        //   11
        {
            id: 10,
            image: "/11.svg", 
            label: "Just In",
            title: "Nike One Leak Protection: Period",
            category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
            color: "2 Colour",
            price: "MRP : ₹ 3 395.00",
          },
        //   12
        {
          id: 11,
            image: "/12.svg", 
            label: "Just In",
            title: "Nike Air Force 1 LV8 3",
            category: "Older Kids' Shoe",
            color: "1 Colour",
            price: "MRP : ₹ 7 495.00",
          },
        //   13
        {
          id: 12,
            image: "/13.svg", 
            label: "Just In",
            title: "Nike Blazer Low Platform",
            category: "Women's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 195.00",
          },
        //   14
        {
          id: 13,
            image: "/14.svg", 
            label: "Just In",
            title: "Nike Air Force 1 '07",
            category: "Women's Shoes",
            color: "2 Colour",
            price: "MRP : ₹ 8 195.00",
          },
        //   15
        {
          id: 14,
            image: "/15.svg", 
            label: "Just In",
            title: "Nike Pro Dri-FIT",
            category: "Men's Tight-Fit Sleeveless Top",
            color: "1 Colour",
            price: "MRP : ₹ 1 495.00",
          },
        // 16
        {
          id: 15,
            image: "/16.svg", 
            label: "Just In",
            title: "Nike Dunk Low Retro",
            category: "Men's Shoes",
            color: "1 Colour",
            price: "MRP : ₹ 8 695.00",
          },
          // 17
          {
            id: 16,
            image: "/17.svg", 
            label: "Just In",
            title: "Nike Air Max SC",
            category: "Women's Shoes",
            color: "2 Colour",
            price: "MRP : ₹ 5 995.00",
          },
          // 18
          {
            id: 17,
            image: "/18.svg", 
            label: "Just In",
            title: "Nike Dri-FIT UV Miler",
            category: "Men's Short-Sleeve Running Top",
            color: "1 Colour",
            price: "MRP : ₹ 1 695.00",
          },
          // 19
          {
            id: 18,
              image: "/19.svg", 
              label: "Just In",
              title: "Nike Air Max SYSTM",
              category: "Older Kids' Shoes",
              color: "1 Colour",
              price: "MRP : ₹ 6 495.00",
            },
          //   20
          {
            id: 19,
              image: "/20.svg", 
              label: "Just In",
              title: "Nike Alate All U",
              category: "Women's Light-Support Lightly Lined U-Neck Printed Sports Bra",
              color: "1 Colour",
              price: "MRP : ₹ 2 195.00",
            },
          //   21
          {
            id: 20,
              image: "/21.svg", 
              label: "Just In",
              title: "Nike Court Legacy Lift",
              category: "Women's Shoes",
              color: "2 Colour",
              price: "MRP : ₹ 7 495.00",
            },
          //   22
          {
            id: 21,
              image: "/22.svg", 
              label: "Just In",
              title: "Nike Swoosh",
              category: "Women's Medium-support Padded Sports Bra Tank",
              color: "2 Colour",
              price: "MRP : ₹ 3 095.00",
            },
          //   23
          {
            id: 22,
              image: "/23.svg", 
              label: "Just In",
              title: "Nike SB Zoom Janoski OG+",
              category: " Shoes",
              color: "1 Colour",
              price: "MRP : ₹ 8 595.00",
            },
          //   24
          {
            id: 23,
              image: "/24.svg", 
              label: "Just In",
              title: "Nike Dri-FIT Run Division Rise 365",
              category: "Men's Running Tank",
              color: "2 Colour",
              price: "MRP : ₹ 3 495.00",
            },
          //   25
          {
            id: 24,
              image: "/25.svg", 
              label: "Just In",
              title: "Nike Dri-FIT Challenger",
              category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
              color: "1 Colour",
              price: "MRP : ₹ 2 495.00",
            },
          //   26
          {
            id: 25,
              image: "/26.svg", 
              label: "Just In",
              title: "Jordan Series ES",
              category: "Men's Shoes",
              color: "2 Colour",
              price: "MRP : ₹ 7 495.00",
            },
          //   27
          {
            id: 26,
              image: "/27.svg", 
              label: "Just In",
              title: "Nike Outdoor Play",
              category: "Older Kids' Oversized Woven Jacket",
              color: "1 Colour",
              price: "MRP : ₹ 3 895.00",
            },
          //   28
          {
            id: 27,
              image: "/28.svg", 
              label: "Just In",
              title: "Nike Sportswear Trend",
              category: "Older Kids' (Girls') High-waisted Woven Shorts",
              color: "2 Colour",
              price: "MRP : ₹ 2 495.00",
            },
          //   29
          {
            id: 28,
              image: "/29.svg", 
              label: "Just In",
              title: "Nike Blazer Low '77 Jumbo",
              category: "Women's Shoes",
              color: "1 Colour",
              price: "MRP : ₹ 8 595.00",
            },
          //   30
          {
            id: 29,
              image: "/30.svg", 
              label: "Just In",
              title: "Nike SB Force 58",
              category: "Skate Shoe",
              color: "1 Colour",
              price: "MRP : ₹ 5 995.00",
},
];

return (
<><div>
<Header />

<nav className='w-full p-4 '>
<div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap ">

<div>
<Image className=' ml-3 hidden md:flex '
src="/Logo.svg"
alt="Logo"
width={58.85}
height={20.54} />
</div>

<div className='w-full md:w-auto flex justify-between flex-col md:flex-row items-center gap-4  md:mt-0'>
<div className='flex md:hidden '>
<Sheet>
<SheetTrigger>
<Button variant={'outline'} size={'icon'} className='absolute left-5'>
<Menu  />
</Button>
</SheetTrigger>
<SheetContent>
<SheetHeader>
<SheetTitle className='font-bold'>
Hello Nike App
<Image className=' ml-[105px] mt-3 '
src="/Logo.svg"
alt="Logo"
width={58.85}
height={20.54} />
</SheetTitle>
</SheetHeader>
<div className='flex flex-col gap-7 text-bold  mt-6'>
<Link href="/New & Featured">New & Featured</Link>
<select><option>Choose</option>
<option>Shoes</option>
<option>Sports Bras</option>
<option>Tops & T-Shirts</option>
<option>Hoodies & Sweatshirts</option>
<option>Jackets</option>
<option>Trousers & Tights</option>
<option>Shorts</option>
<option>Tracksuits</option>
<option>Jumpsuits & Rompers</option>
<option>Skirts & Dresses</option>
<option>Socks</option>
<option>Accessories <br /> & Equipment</option>
</select>
<Link href="/Men">Men</Link>
<Link href="/Women">Women</Link>
<Link href="/Kids">Kids</Link>
<Link href="/Sale">Sale</Link>
<Link href="/SNKRS">SNKRS</Link>
</div>
</SheetContent>
</Sheet>
<div className='relative flex gap-4'>
<Search className=' flex absolute top-2 left-[70px]' />
<Button variant={'outline'} size={'icon'} className='rounded-full absolute top-[1px] left-[110px] '>
<Link  href='/Cart' target='_blank' ><ShoppingBagIcon className="cursor-pointer" onClick={goToCart} /></Link>
</Button>
</div>
</div>
</div>

<div className='hidden md:flex gap-6  text-base font-medium '>
<Link href="/AllProducts" target='_blank'>New & Featured</Link>
<Link href="/Men">Men</Link>
<Link href="/Women">Women</Link>
<Link href="/Kids">Kids</Link>
<Link href="/Sale">Sale</Link>
<Link href="/SNKRS">SNKRS</Link>
</div>
<div className=' hidden md:flex gap-4'>
<div className='relative'>
<Search className='absolute top-2 left-2 ' />
<Input placeholder='Search' className=' text-center text-[#CCCCCC]  text-xs rounded-full bg-[#F5F5F5] ' />
</div>
<Button variant={'outline'} size={'icon'} className='rounded-full hidden md:flex'>
<Heart />
</Button>
<Button variant={'outline'} size={'icon'} className='rounded-full hidden md:flex'>
<Link  href='/Cart' target='_blank' ><ShoppingBagIcon className="cursor-pointer" onClick={goToCart} /></Link>
</Button>
</div>
</div>
</nav>

<div className='p-10 ml-0 md:ml-[300px] mt-3 md:mt-0'>
<div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-6">
{products.map((product, index) => (
<Link key={index} href={`/Productdetail/${product.id}`} target="_blank"> 
<div className="p-4  shadow-sm hover:shadow-md">

<Image
src={product.image}
alt={product.title}
width={300}
height={300}
className="rounded" />

                  
<div className="mt-2 text-[#9E3500] font-bold">
{product.label}
</div>
<h3 className="font-semibold">{product.title}</h3>
<p className="text-[#757575] text-sm">{product.category}</p>
<p className="text-[#757575] text-sm">{product.color}</p>
<p className="font-bold mt-1">{product.price}</p>
</div>
</Link>
))}

</div>
</div>


<div className='border-t border-[#E5E5E5] mt-28 ml-3 md:ml-0 flex-wrap'>
<div>
<h1 className='font-medium text-xl text-left mt-6 '>Related Categories</h1>
</div>
</div>
<div className='flex gap-3 flex-wrap mt-[30px] md:mb-5 '>
<Button className=' bg-white text-black rounded-full'>Best Selling Products</Button>
<Button className=' bg-white text-black rounded-full'>Best Shoes</Button>
<Button className=' bg-white text-black rounded-full'>New Basketball Shoes</Button>
<Button className=' bg-white text-black rounded-full'>New Football Shoes</Button>
<Button className=' bg-white text-black rounded-full'>New Men's Shoes</Button>
<Button className=' bg-white text-black rounded-full'>New Running Shoes</Button>
<Button className=' bg-white text-black rounded-full'>Best Men's Shoes <br /> </Button>
</div>
<div className=' flex gap-3 flex-wrap mt-[30px] mb-2 md:mb-5'>
<Button className=' bg-white text-black rounded-full'>New Jordan Shoes</Button>
<Button className=' bg-white text-black rounded-full'>Best Women's Shoes</Button>
<Button className=' bg-white text-black rounded-full'>Best Training & Gym</Button>
</div>




<div className='w-full mt-10 absolute top-16 left-2 flex justify-between '>
<div>
<h2 className='font-medium  text-2xl absolute left-5 hidden md:flex'>New (500)</h2>
</div>
<p className='flex md:gap-4 text-right mr-10  '>
<span className='text-base md:mt-[5px] hidden md:flex'>Hide Filters</span> <HiAdjustmentsHorizontal className='hidden md:flex md:mt-[10px]' />
<span className='text-base mr-5 md:mr-0 md:mt-[5px]'>Sort By</span><ChevronDown className='mt-[2px] md:mt-[7px] mr-10 md:mr-0' />
</p>
</div>

<div className='font-medium absolute top-[175px] left-7 text-sm mt-5 leading-[28px] hidden md:block '>
<div>Shoes</div>
<div>Sports Bras</div>
<div>Tops & T-Shirts</div>
<div>Hoodies & Sweatshirts</div>
<div>Jackets</div>
<div>Trousers & Tights</div>
<div>Shorts</div>
<div>Tracksuits</div>
<div>Jumpsuits & Rompers</div>
<div>Skirts & Dresses</div>
<div>Socks</div>
<div>Accessories <br /> & Equipment</div>
</div>

<div className='w-[7px] h-[300px] bg-[#000000]  opacity-[50%] absolute top-[205px] left-[250px] hidden md:block rounded-[7px] '></div>


<div className=' absolute top-[600px] left-1 hidden md:block'>
<div className='flex justify-between '>
<h5 className='w-[188px]  flex gap-28 ml-6  font-medium border-t border-[#F5F5F5]  '>
Gender
<ChevronUp />
</h5>
</div>

<div className='mt-4'>

<div className='flex gap-2 ml-6'><PiRectangleBold className='mt-1' /> Men</div>
<div className='flex gap-2 ml-6'><PiRectangleBold className='mt-1' />Women</div>
<div className='flex gap-2 ml-6'><PiRectangleBold className='mt-1' />Unisex</div>
</div>
</div>


<div className=' absolute top-[690px] left-1 hidden md:block '>
<div className='flex justify-between ml-6 mt-12'>
<h5 className='w-[188px]  flex gap-28  font-medium border-t border-[#F5F5F5]  '>
Kids
<ChevronUp />
</h5>
</div>

<div className='mt-4'>

<div className='flex gap-2 ml-6'><PiRectangleBold className='mt-1' /> Boys</div>
<div className='flex gap-2 ml-6'><PiRectangleBold className='mt-1' />Girls</div>
</div>
</div>


<div className=' absolute top-[890px] left-1 hidden md:block'>
<div className='flex justify-between ml-6 mt-4'>
<h5 className='w-[188px]  flex gap-28  font-medium border-t border-[#F5F5F5]  '>
Shop By Price
<ChevronUp />
</h5>
</div>

<div className='mt-4'>

<div className='flex gap-2 ml-6'><PiRectangleBold className='mt-1' /> Under ₹ 2 500.00 </div>
<div className='flex gap-2 ml-6'><PiRectangleBold className='mt-1' />₹ 2 501.00 - ₹ 7 500.00</div>
</div>
</div>

</div>
<Footer />
</>
  )
}

export default AllProducts
