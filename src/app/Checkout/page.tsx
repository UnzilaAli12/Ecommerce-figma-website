"use client"
import React from 'react'
import { MessageSquareTextIcon,  } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingBagIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaCartShopping } from 'react-icons/fa6';
import { MdCheckBoxOutlineBlank, } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';

const Checkout = () => {
  const router = useRouter();
const goToCart = () => {
  router.push('/Cart');
};
  return (
    <div>
             <div>
    <nav className='w-full p-4 ' >
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
      
      
      <Image className=' ml-3  '
  src="/Logo.svg"
  alt="Logo"
  width={58.85}
  height={20.54}
  />

<div className='flex gap-5'>
<p className='mt-[6px] font-[Inter]'>000 800 100 9538</p>
<Button variant={'link'} size={'icon'} className='rounded-full'>
  <MessageSquareTextIcon/>
</Button>
<Button variant={'outline'} size={'icon'} className='rounded-full' >
<Link  href='/Cart' target='_blank' ><ShoppingBagIcon className="cursor-pointer" onClick={goToCart} /></Link>
</Button>
</div>
</div>
</nav>


<div className='p-[10px] md:pl-20  lg:pl-52'>
<div  className='w-full md:w-[880px] h-[2376px] flex flex-col md:flex-row justify-between '>
<div className='w-full md:w-[60%]'>
<h1 className='font-medium text-lg md:text-xl ' >How would you like to get your order?</h1>
<p className='mt-2 text-sm md:text-base'>Customs regulation for India require a copy of the recipient's <br /> KYC. The address on the KYC needs to match the shipping <br /> address. Our courier will contact you via SMS/email to obtain <br /> a copy of your KYC. The KYC will be stored securely and <br /> used solely for the purpose of clearing customs (including <br /> sharing it with customs officials) for all orders and returns. If <br /> your KYC does not match your shipping address, please click <br /> the link for more information. <span className='underline'> Learn More</span></p>
<div className=' items-start mt-4' >
<ShoppingBagIcon className='absolute mt-7 ml-4'/>
<Input placeholder='Deliver It'  className='w-full md:w-[440px] h-[82px] text-center text-black mt-8 border font-medium text-sm border-black' ></Input>
</div>
<h1 className='font-medium text-lg md:text-xl mt-8 md:mt-12' >Enter your name and address:</h1>
<div >
<Input placeholder='First Name' className='w-full md:w-[440px] h-[50px] mt-6 rounded-[4px] text-sm md:text-base'   ></Input>
<Input placeholder='Last Name' className='w-full md:w-[440px] h-[50px] mt-6 rounded-[4px] text-sm md:text-base'></Input>
<Input placeholder='Address Line 1' className='w-full md:w-[440px] h-[50px] mt-6 rounded-[4px] text-sm md:text-base' ></Input>
<p className='text-xs text-[#757575] ml-2 md:ml-5 mt-[3px] ' >We do not ship to P.O. boxes</p>
<Input placeholder='Address Line 2' className='w-full md:w-[440px] h-[50px] mt-6 rounded-[4px] text-sm md:text-base' ></Input>
<Input placeholder='Address Line 3' className='w-full md:w-[440px] h-[50px] mt-6 rounded-[4px] text-sm md:text-base'></Input>
<span className='flex gap-4 mt-6'>
  <Input placeholder='Postal Code' className='w-full md:w-[211px] h-[50px] rounded-[4px] text-sm md:text-base'></Input>
  <Input placeholder='Locality' className='w-full md:w-[211px] h-[50px] rounded-[4px] text-sm md:text-base'></Input>
</span>
<span className='flex gap-4 mt-6'>
  <Input placeholder='State/Territory' className='w-full md:w-[211px] h-[50px] text-[#8D8D8D] rounded-[4px] md:text-base text-sm'></Input>
  <Input placeholder='India' className='w-full md:w-[211px] h-[50px] rounded-[4px] text-sm md:text-base'></Input>
</span>
<span className='flex gap-2 mt-6' >
<MdCheckBoxOutlineBlank className='mt-[2px] md:mt-1 rounded-[4px] ' />
<p className='text-sm md:text-base' >Save this address to my profile</p>
</span>
<span className='flex gap-2 mt-6' >
<MdCheckBoxOutlineBlank className='mt-[2px] md:mt-1 bg-[#CCCCCC] rounded-[4px] '/>
<p className='text-sm md:text-base'>Make this my preferred address</p>
</span>
<h2 className='font-medium text-lg md:text-xl mt-14' >What's your contact information?</h2>
<Input placeholder='Email' className='w-full md:w-[440px] h-[50px] text-sm md:text-base  rounded-[4px] mt-4' ></Input>
<p className='text-xs mt-[3px] text-[#757575] ml-2 md:ml-5 ' >A confirmation email will be sent after checkout.</p>
<Input placeholder='Phone Number' className='w-full md:w-[440px] h-[50px] text-sm md:text-base mt-4'></Input>
<p className='text-xs mt-[3px] text-[#757575] ml-2 md:ml-5'>A carrier might contact you to confirm delivery. </p>
<h2 className='font-medium text-lg md:text-xl mt-12' >What's your PAN?</h2>
<Input placeholder='PAN' className='md:text-base w-full md:w-[440px] h-[50px] text-sm rounded-[4px] mt-4 '></Input>
<p className='text-xs ml-2 md:ml-5 text-[#757575] mt-1 ' >Enter your PAN to enable payment with UPI, Net Banking or local <br /> card methods</p>

<span className='flex gap-2 mt-4 md:mt-0 ' >
<MdCheckBoxOutlineBlank className='mt-4 md:mt-0 rounded-[4px] ' />
<p className='text-xs mt-4 md:mt-0 text-[#8D8D8D] '>Save PAN details to Nike Profile</p>
</span>

<span className='flex gap-2 mt-14' >
<MdCheckBoxOutlineBlank className=' rounded-[4px] ' />
<p className='text-xs text-[#8D8D8D] '>I have read and consent to eShopWorld processing my information in <br /> accordance with the <span className='underline' > Privacy Statement</span> and Cookie Policy. eShopWorld <br /> is a trusted Nike partner.</p>
</span>

<Button className='w-full md:w-[440px] h-[50px] mt-20 rounded-full bg-[#F5F5F5] text-[#757575] font-medium text-sm  '>
Continue</Button>
<div className='w-[440px] h-[57px] border-t border-[#E5E5E5] mt-6 font-medium text-base md:text-xl  ' ><h1 className='mt-5'>Delivery</h1></div>
<div className='w-[440px] h-[57px] border-t border-[#E5E5E5] mt-6 font-medium text-base md:text-xl  ' ><h1 className='mt-5 text-[#757575] '>Shipping</h1></div>
<div className='w-[440px] h-[57px] border-t border-[#E5E5E5] mt-6 font-medium text-base md:text-xl  ' ><h1 className='mt-5 text-[#757575]'>Billing</h1></div>
<div className='w-[440px] h-[57px] border-t border-[#E5E5E5] mt-6 font-medium text-base md:text-xl  ' ><h1 className='mt-5 mb-5 md:mb-0 text-[#757575]'>Payment</h1></div>
</div>
</div>


<div className='w-[320px]' >
<div className=' ' >
<h1 className='font-medium text-xl ' >Order Summary</h1>
</div>
<div className='flex justify-between mt-5' >
<p className='text-sm text-[#8D8D8D] ' >Subtotal</p>
<p className='text-sm text-[#8D8D8D] '>₹ 20 890.00</p>
</div>
<div className='flex justify-between mt-4' >
<p className='text-sm text-[#8D8D8D] ' >Delivery/Shipping</p>
<p className='text-sm text-[#8D8D8D] '>Free</p>
</div>
<div className='h-[54px] flex justify-between border-b border-t border-[#E5E5E5] mt-4' >
<p className='text-sm font-medium mt-4' >Total</p>
<p className='text-sm font-medium mt-4' >₹ 20 890.00</p>
</div>
<p className='text-[9px] mt-4 '>(The total reflects the price of your order, including all duties and taxes)</p>
<h4 className='font-bold text-sm mt-7'>Arrives Mon, 27 Mar - Wed, 12 Apr</h4>

<div className='flex justify-between mr-4' >
<div>
  <Image className=' mt-3 '
  src="/Check.svg"
  alt="Image"
  width={208}
  height={208}
  /></div>
<div>
<p className='text-[13px] mt-4 leading-[24px]'>Nike Dri-FIT <br /> ADV TechKnit <br /> Ultra Men's <br /> Short-Sleeve <br /> Running Top</p>
<p className='text-[13px] text-[#8D8D8D]' >Qty 1</p>
<p className='text-[13px] text-[#8D8D8D]' >Size L</p>
<p className='text-[13px] text-[#8D8D8D]' >₹ 3 895.00</p>
</div>
</div>

<div className='flex justify-between mr-4' >
<div>
  <Image className=' mt-3 '
  src="/Check1.svg"
  alt="Image"
  width={208}
  height={208}
  /></div>
<div>
<p className='text-[13px] mt-4 leading-[24px]'>Nike Air Max <br /> 97 SE Men's <br /> Shoes</p>
<p className='text-[13px] text-[#8D8D8D]' >Qty 1</p>
<p className='text-[13px] text-[#8D8D8D]' >Size UK 8</p>
<p className='text-[13px] text-[#8D8D8D]' >₹ 16 995.00</p>
</div>
</div>

</div>


</div>
</div>
<div className='w-full h-[50px] md:h-[51px] bg-black text-white text-[11px] items-center flex justify-between mt-[400px] md:mt-0 '>
<div className="flex gap-2 ml-5 md:ml-0">
<IoLocationOutline className='hidden md:block' />
<p className='hidden md:block'>India</p>
<p className='hidden md:block' >© 2023 Nike, Inc. All Rights Reserved</p>
<Link href="#" className="hover:underline">Terms of Use</Link>
<Link href="#" className="hover:underline">Terms of Sale</Link>
<Link href="#" className="hover:underline"> Privacy Policy</Link>
</div>
<Image className='hidden md:flex  mr-5 '
  src="/Frame.svg"
  alt="Logo"
  width={601}
  height={27}
  />


</div>




    </div>
    </div>
  )
}

export default Checkout
