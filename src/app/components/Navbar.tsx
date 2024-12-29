"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Heart, Menu, Search, ShoppingBag, ShoppingBagIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Sheet } from '@/components/ui/sheet';
const Navbar = () => {
const router = useRouter();
const goToCart = () => {
  router.push('/Cart');
};
  return (
    <div>
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
<Link  href='/Cart' target='_blank' ><ShoppingBagIcon className="cursor-pointer" onClick={goToCart} /></Link>
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

    <div className='w-full d-flex items-center justify-center p-4   bg-[#F5F5F5]' >
<div  className='flex items-center justify-center'>
<h2 className='w-[105px] flex items-center justify-center  font-medium text-sm    ' >
Hello Nike App
</h2>
</div>
<div className='flex items-center justify-center' >
<p className='text-xs flex gap-2  ' >
<span>
Download the app to access everything Nike. 
</span>
<span  >
  <button className='underline' >
Get Your Great
</button>
</span>

</p>
</div>
</div>


</div>
)
}

export default Navbar
