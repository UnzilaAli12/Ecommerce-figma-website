import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Input } from "@/components/ui/input";
import { ChevronDown,ChevronUp, Heart, Menu, Scroll, Search, ShoppingBag, ShoppingBagIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Sheet } from '@/components/ui/sheet';


const JoinUs = () => {
  return (
    <><div className='h-[1280px]'>
      <Header />

      <div>
        <nav className='w-full p-4 '>
          <div className="max-w-7xl mx-auto flex items-center justify-between ">
            <div>
              <Image className=' ml-3  '
                src="/Logo.svg"
                alt="Logo"
                width={58.85}
                height={20.54} />
            </div>

            <div className='hidden md:flex gap-6  text-base font-medium '>
              <Link href="/New & Featured">New & Featured</Link>
              <Link href="/Men">Men</Link>
              <Link href="/Women">Women</Link>
              <Link href="/Kids">Kids</Link>
              <Link href="/Sale">Sale</Link>
              <Link href="/SNKRS">SNKRS</Link>
            </div>

            <div className='hidden md:flex gap-4'>
              <div className='relative '>
                <Search className='absolute top-2 left-2' />
                <Input placeholder='Search' className=' text-center text-[#CCCCCC] text-xs rounded-full bg-[#F5F5F5] ' />
              </div>

              <Button variant={'outline'} size={'icon'} className='rounded-full'>
                <Heart />
              </Button>
              <Button variant={'outline'} size={'icon'} className='rounded-full'>
                <ShoppingBagIcon />
              </Button>
            </div>

            <div className=' md:hidden '>
              <Sheet>
                <SheetTrigger>
                  <Button variant={'outline'} size={'icon'}>
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className='font-bold'>
                      Hello Nike App
                    </SheetTitle>
                  </SheetHeader>

                  <div className='flex flex-col gap-7 text-bold  mt-6'>
                    <Link href="/AllProducts">All Products</Link>
                    <Link href="/New & Featured">New & Featured</Link>
                    <Link href="/Men">Men</Link>
                    <Link href="/Women">Women</Link>
                    <Link href="/Kids">Kids</Link>
                    <Link href="/Sale">Sale</Link>
                    <Link href="/SNKRS">SNKRS</Link>
                  </div>

                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>



      <div className=" w-full items-center justify-center min-h-screen ">
        <div className='w-full max-w-md p-6  '>
          <Image className='hidden md:block mt-2 ml-[600px]  '
            src="/Logo.svg"
            alt="Logo"
            width={58.85}
            height={20.54} />
        </div>


        <div>
          <h2 className="text-2xl font-bold text-center">
            BECOME A NIKE MEMBER
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Create your Nike Member profile and get <br /> first access to the very best
            of Nike <br /> products, inspiration, and community.
          </p>


          <form className=" mt-6 md:space-y-4 md:space-x-2 ml-6 md:ml-[450px] items-center justify-center ">
            <input
              type="email"
              placeholder="Email address"
              className="flex items-center justify-centern mb-3 md:mb-0  md:ml-2 px-24 text-center py-2 border rounded-md " />

            <input
              type="password"
              placeholder="Password"
              className="flex items-center justify-center mb-3  px-24 text-center py-2 border rounded-md" />

            <input
              type="text"
              placeholder="First Name"
              className="flex items-center justify-center mb-3  px-24 text-center py-2 border rounded-md " />

            <input
              type="text"
              placeholder="Last Name"
              className="flex items-center justify-center mb-3  px-24 text-center py-2 border rounded-md " />

            <input
              placeholder="Date of Birth"
              className="flex items-center justify-center mb-3  px-24 text-center py-2 border rounded-md " />

            <p className='text-sm md:text-base ml-4 md:ml-0'>
              Get a Nike Member Reward every year on your Birthday.
            </p>

            <select
              className="flex items-center justify-center mb-3 mt-3 px-[118px] text-center py-2 border rounded-md "
            >
              <option>Choose</option>
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
            </form>
          </div>
        

        <div className="flex items-center justify-center space-x-4">
          <button
            type="button"
            className="w-[153px] h-[40px] px-4 py-2 text-sm md:mt-4 font-medium text-center text-gray-700 border rounded-md hover:bg-gray-100">
            Male
          </button>
          <button
            type="button"
            className="w-[153px] h-[40px] px-4 py-2 text-sm md:mt-4 font-medium text-center text-gray-700 border rounded-md hover:bg-gray-100">
            Female
          </button>
          
        </div>
        

        <div className="flex items-center justify-center space-x-2">
          <input
            type="checkbox"
            id="updates"
            className="w-3 md:w-4 h-3 md:h-4 mt-3 md:mt-1 text-black border-gray-300 rounded " />

          <label htmlFor="updates" className="text-xs md:text-sm mt-3 text-gray-600 ">
            Sign up for emails to get updates from Nike on <br /> products, offers,
            and your Member benefits.
          </label>
        </div>


        <p className="text-xs mt-3 flex items-center justify-center  text-gray-500">
          By creating an account, you agree to Nike’s{" "}
          <Link href="#" className="underline">
            Privacy  Policy
          </Link>{" "}  and {" "}
          <Link href="#" className="underline">
            Terms of Use
          </Link>.
        </p>


        <div className='flex items-center justify-center'>
          <button
            type="submit"
            className="w-[324px] h-[40px] flex items-center justify-center mt-3  px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
          >
            JOIN US
          </button>
        </div>
      

        <p className="mt-4 mb-8 text-sm text-center text-gray-600">
          Already a Member?{" "}
          <Link href="#" className="underline">
            Sign In
          </Link>
        </p>
      </div>
      <Footer /></div></>



  )
}

export default JoinUs
