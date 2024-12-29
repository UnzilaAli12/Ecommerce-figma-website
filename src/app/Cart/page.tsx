"use client"
import { HeartIcon, Trash2 } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Input } from "@/components/ui/input";
import { Heart, Menu, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Sheet } from '@/components/ui/sheet';
import { ShoppingBagIcon } from '@/components/ui/sheet';


const Cart = () => {
  const router = useRouter();
const goToCart = () => {
  router.push('/Cart');
};
return (
<div>
<Header/>
<div>

<nav className='w-full p-4 ' >
<div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">

<div>
<Image className=' ml-3 hidden md:flex '
src="/Logo.svg"
alt="Logo"
width={58.85}
height={20.54}
/>
</div>

<div className='hidden md:flex gap-6  text-base font-medium ' >
<Link href="/New & Featured" target='_blank' >New & Featured</Link>
<Link href="/Men" target='_blank' className='underline'>Men</Link>
<Link href="/Women" target='_blank'>Women</Link>
<Link href="/Kids" target='_blank'>Kids</Link>
<Link href="/Sale" target='_blank'>Sale</Link>
<Link href="/SNKRS" target='_blank'>SNKRS</Link>
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
<ShoppingBagIcon/>
</Button>
</div>


</div>
</nav>

</div>   

<div className=' md:p-20 flex flex-wrap justify-between ' >
<div className='w-full md:w-[733.33px] '>
<div className='w-full md:w-[733.33px] h-[62.89px] bg-[#F5F5F5] ' >
<h2 className='font-medium ml-3 text-[13px]' >Free Delivery</h2>
<span className='flex flex-wrap' >
<p className='text-[11px] mt-3 ml-3' >Applies to orders of ₹ 14 000.00 or more.</p>
<p className='mt-3 ml-3 md:ml-3 underline text-[11px]' >View details</p></span>

</div>
<h1 className='font-medium ml-3 md:ml-0 text-base md:text-[22px] mt-5' >Bag</h1>
<div className='h-[220px]  md:h-[218px] flex flex-wrap justify-between border-b border-[#E5E5E5]' >
<div className='flex gap-4' >

<Image className='  '
  src="/Check.svg"
  alt="Image"
  width={150}
  height={150}
  />


<div className='leading-6 ' >
<h2 className='font-medium mt-8 mr-6 text-sm md:text-[15px]'>Nike Dri-FIT ADV TechKnit Ultra</h2>
<p className='text-sm md:text-[15px] text-[#757575]' >Men's Short-Sleeve Running Top</p>
<p className='text-sm md:text-[15px] text-[#757575]' >Ashen Slate/Cobalt Bliss</p>
<div className='flex'>

<span className='flex gap-3 text-sm  text-[#757575]' >
<p>Size</p>
<p>L</p>
</span>
<span className='flex gap-3 ml-8 text-sm text-[#757575]' >
<p>Quantity</p>
<p>1</p>
</span>

</div>
<span className='flex gap-5 mt-8' >
<HeartIcon/>
<Trash2/>
<p className='mt-10  ml-10  md:hidden text-sm md:text-[15px]' >MRP: ₹ 3 895.00</p>
</span>
</div>
</div>
<p className='mt-7 hidden md:flex text-[15px]' >MRP: ₹ 3 895.00</p>
</div>

<div className='h-[220px] md:h-[218px] flex justify-between border-b border-[#E5E5E5]' >
<div className='flex gap-4' >

<div className='leading-6 ml-[165px]' >
<h2 className='font-medium mt-8 mr-6 text-sm md:text-[15px]'>Nike Dri-FIT ADV TechKnit Ultra</h2>
<p className='text-sm md:text-[15px] text-[#757575]' >Men's Short-Sleeve Running Top</p>
<p className='text-sm md:text-[15px] text-[#757575]' >Ashen Slate/Cobalt Bliss</p>
<div className='flex'>

<span className='flex gap-3 text-[#757575]' >
<p>Size</p>
<p>8</p>
</span>
<span className='flex gap-3 ml-8 text-sm text-[#757575]' >
<p>Quantity</p>
<p>1</p>
</span>

</div>
<span className='flex gap-5 text-sm  mt-8' >
<HeartIcon/>
<Trash2/>
<p className=' md:hidden ml-10 mt-10 text-sm md:text-[15px]' >MRP: ₹ 16 995.00</p>
</span>
</div>
</div>
<p className='mt-7 hidden md:flex text-[15px]' >MRP: ₹ 16 995.00</p>
</div>


</div>
<div className='w-[360.37px] ml-3' >
<h1 className='font-medium text-xl mt-5 md:mt-0' >Summary</h1>
  
<span className='flex justify-between mt-4 ' >
<p className='text-[15px] ml-10 md:ml-0'>Subtotal</p>
<p className='text-[14px] ml-10 md:ml-0'>₹ 20 890.00</p>
</span>
<span className='flex justify-between mt-4' >
<p className='text-[15px] ml-10 md:ml-0'>Estimated Delivery & Handling</p>
<p className='text-[14px] ml-10 md:ml-0 '>Free</p>
</span>
<div className='h-[62px] border-t border-b border-[#E5E5E5] mt-5 flex justify-between'>
<p className='text-[14px] mt-5 ml-10 md:ml-0'>Total</p>
<p className='text-[14px] font-medium mt-5 ml-10 md:ml-0'>₹ 20 890.00</p>
</div>

<Button className='w-[334.67px] h-[60px] rounded-full mt-9 ml-5 mb-10 md:mb-0' >
<Link href="/Checkout" target='_blank' >Member Checkout</Link>
</Button>
</div>
</div>
<Footer/>
<div>

</div>
</div>


         
  )
}

export default Cart
