import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Heart, Menu, Search, ShoppingBagIcon, ThumbsDown, ThumbsUp} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import { Sheet } from "@/components/ui/sheet";

const ContactUs = () => {
  return (
<div>
<div>
<Header />
<div>
<nav className="w-full p-4 ">
<div className="max-w-7xl mx-auto flex items-center justify-between ">
<div>
<Image
className=" ml-3  "
src="/Logo.svg"
alt="Logo"
width={58.85}
height={20.54}
/>
</div>

<div className="hidden md:flex gap-6  text-base font-medium ">
<Link href="/New & Featured">New & Featured</Link>
<Link href="/Men">Men</Link>
<Link href="/Women">Women</Link>
<Link href="/Kids">Kids</Link>
<Link href="/Sale">Sale</Link>
<Link href="/SNKRS">SNKRS</Link>
</div>

<div className="hidden md:flex gap-4">
<div className="relative ">
<Search className="absolute top-2 left-2" />
<Input
placeholder="Search"
className=" text-center text-[#CCCCCC] text-xs rounded-full bg-[#F5F5F5] "
/>
</div>

<Button variant={"outline"} size={"icon"} className="rounded-full">
<Heart />
</Button>
<Button variant={"outline"} size={"icon"} className="rounded-full">
<ShoppingBagIcon />
</Button>
</div>
<div className=" md:hidden ">
<Sheet>
<SheetTrigger>
<Button variant={"outline"} size={"icon"}>
<Menu />
</Button>
</SheetTrigger>
<SheetContent>
<SheetHeader>
<SheetTitle className="font-bold">
Hello Nike App
</SheetTitle>
</SheetHeader>
<div className="flex flex-col gap-7 text-bold  mt-6">
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
</div>

<div className="w-full items-center justify-center mt-6 md:px-4 px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl font-medium text-center ">GET HELP</h2>
<div className="flex items-center justify-center mt-3  ">
<Input placeholder="What can we help you with?" className="w-full md:w-[457px] h-[56px] border border-[#757575] rounded-[8px] "/>
<Search className="absolute right-10 md:right-auto md:ml-[400px] " />
</div>
</div>

<div className="flex flex-wrap justify-between mt-14 ml-5 md:ml-12">
<div className="" >
<h1 className="font-medium text-2xl ">
WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
</h1>
<p className="text-base mt-10">
We want to make buying your favourite Nike shoes and gear online
fast and easy, and we accept the following payment options:
<ol className="mt-6 ml-6 ">

<li>Visa, Mastercard, Diners Club, Discover, American Express, Visa
Electron, Maestro{" "}</li>
<li className="mt-2">If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</li>
<li className="mt-2">Apple Pay</li>
</ol>
</p>
<p className="mt-6" >
<span className="underline font-medium" > Nike Members</span> can store multiple debit or credit cards in their
profile for faster checkout. If you're not already a Member, <span className="underline font-medium">join <br/> us</span>
today.
</p>
<div className='mt-7 flex gap-4 '>
<Link href='/JoinUs' target="_blank"><Button  className="rounded-full">JOIN US</Button></Link>
<Link href='/AllProducts' target="_blank"><Button className="rounded-full">SHOP NIKE</Button></Link>
</div>

<p className="font-medium text-xl mt-6 " >FAQs</p>
<p className="font-bold text-base mt-4">Does my card need international purchases enabled?</p>
<p className="text-base mt-1" >Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout <br /> if international purchases need to be enabled.</p>
<p className="text-base mt-8" >Please note, some banks may charge <span className="font-medium text-base underline" > a small transaction fee</span> for international orders.</p>
<p className="font-bold mt-8 " >Can I pay for my order with multiple methods?</p>
<p className="font-normal mt-1" >No, payment for Nike orders can't be split between multiple payment methods.</p>
<p className="font-bold mt-8 " >What payment method is accepted for SNKRS orders?</p>
<p className="font-normal mt-1" >You can use any accepted credit card to pay for your SNKRS order.</p>
<p className="font-bold mt-8 " >Why don't I see Apple Pay as an option?</p>
<p className="font-normal mt-1" >To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest <br /> OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use <br /> Apple Pay on Nike.com.</p>
<p className="text-base mt-8">Was this answer helpful?</p>
<div className="flex text-black mt-1 ml-[6px]"><ThumbsUp/> <ThumbsDown/> </div>  
<p className="font-medium text-base text-[#757575] mt-5">RELATED</p>
<p className="font-medium text-base underline mt-8 ml-5">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
<p className="font-medium text-base underline mt-5 ml-5 mb-10">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>      
</div>

<div className="w-[313.25px] h-[1042px] ml-10 md:ml-0 md:border-l border-[#CCCCCC] text-center justify-center items-center" >
<h1 className="font-medium text-2xl">CONTACT US</h1>
<Image className=' ml-[120px] mt-5 '
  src="/mobile.svg"
  alt="Image"
  width={64}
  height={64}
  />
<div className="font-medium text-base mt-5">000 800 919 0566</div>
<div><p className="mt-3">Products & Orders: 24 hours a day, <br /> 7 days a week <br />
Company Info & Enquiries: 07:30 - <br /> 16:30, Monday - Friday</p></div>
<Image className=' ml-[120px] mt-10 md:mt-20 '
  src="/email.svg"
  alt="Image"
  width={64}
  height={64}
  />
<p className="font-medium text-base mt-3 md:mt-6" >24 hours a day</p>
<p className="mt-1 md:mt-3">7 days a week</p>
<Image className=' ml-[120px] mt-10 md:mt-20 '
  src="/message.svg"
  alt="Image"
  width={64}
  height={64}
  />
<p className="font-medium text-base mt-6" >We'll reply within</p>
<p className="mt-1 md:mt-3">five business days</p>

<Image className=' ml-[120px]  mt-10 md:mt-20 '
  src="/location.svg"
  alt="Image"
  width={64}
  height={64}
  />
<p className="font-medium text-base mt-6" >STORE LOCATOR</p>
<p className="mt-3">Find Nike retail stores near you</p>
   
</div>
</div>
<Footer/>
</div>
  );
};

export default ContactUs;
