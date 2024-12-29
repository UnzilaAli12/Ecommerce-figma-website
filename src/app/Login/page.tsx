"use client"
import React from 'react'
import Header from '@/app/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Heart, Menu, Search, ShoppingBagIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Sheet } from '@/components/ui/sheet';


const Login = () => {
  const router = useRouter();
  const goToCart = () => {
    router.push('/Cart');
  };
  return (
    <div>
    <div>
      <Header/>

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
<Link href="/New & Featured" >New & Featured</Link>
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
<Button variant={'outline'} size={'icon'} className='rounded-full '>
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
    </SheetTitle>
  </SheetHeader>
  <div className='flex flex-col gap-7 text-bold  mt-6' >
<Link href="/AllProducts" >All Products</Link>
<Link href="/New & Featured" >New & Featured</Link>
<Link href="/Men">Men</Link>
<Link href="/Women">Women</Link>
<Link href="/Kids">Kids</Link>
<Link href="/Sale">Sale</Link>
<Link href="/SNKRS">SNKRS</Link>

  
<div>
  
</div>

  </div>
 </SheetContent>
</Sheet>
</div>
     </div>
    </nav>
    </div>


<div className='flex items-center justify-center' >
<div className='w-[324px] h-[128px] items-center justify-center  '>
<Image className=' m-auto mt-4 items-center justify-center '
  src="/Logo.svg"
  alt="Logo"
  width={40}
  height={40}
  />
  <div>
  <h1 className='text-2xl text-center mt-5  font-bold ' >
  YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
  </h1></div>
<div className='flex mt-4 mb-4  gap-4' >
  <section>
  <input
type="email"
placeholder="Email address"
className=" items-center justify-center mb-3  px-20 text-center py-2 border rounded-md "
/>
          
<input
type="password"
placeholder="Password"
className="flex items-center justify-center mb-3 px-20 text-center  py-2 border rounded-md "
/>

<div className="flex justify-between mt-6 space-x-2">
<input
type="checkbox"
id="updates"
className="w-4 h-4 mt-1 text-black border-gray-300 rounded "
/>
            
<label htmlFor="updates" className="text-sm mt-[2px] text-[#8D8D8D]">
Keep me signed in
</label>
<div>
<Link href="#" className="text-sm text-[#BCBCBC] ">Forgotten your password?</Link>
</div>
</div>

<div>
  <p className='text-sm text-center mt-6 text-[#8D8D8D] ' >
  By logging in, you agree to Nike's <span className='underline' > Privacy Policy</span> <br /> and Terms of Use.
  </p>
</div>

<Link href="Login" target='_blank'><Button className='text-center ml-2 mt-8 text-xs px-36 rounded-none' >
SIGN IN
</Button></Link>

<div className='text-center items-center mt-6' >
Not a Member? <span className='underline' ><Link href="JoinUs" target='_blank'> Join Us. </Link></span>
</div>

</section>



</div>
</div>
</div>
    </div>

    </div>

)
}

export default Login
