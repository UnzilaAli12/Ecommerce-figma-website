import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';


const Footer = () => {
  return (
    

<footer className="bg-black text-white py-8 px-6  ">
 <div className='flex flex-wrap justify-between  ' >         
<div className='  ' >
            <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/JoinUs" className="hover:underline">Become Link Member</Link></li>
              <li><Link href="/JoinUs" target='blank' className="hover:underline">Sign Up for Email</Link></li>
              <li><Link href="#" className="hover:underline">Send Us Feedback</Link></li>
              <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
            </ul>
          </div>
  
        <div className='md:absolute md:left-[250px] ' >
          <div  >
            <h3 className="text-sm font-semibold  mb-4">GET HELP</h3>
            <ul className="space-y-2  text-sm">
              <li><Link href="#" className="hover:underline">Order Status</Link></li>
              <li><Link href="#" className="hover:underline">Delivery</Link></li>
              <li><Link href="#" className="hover:underline">Returns</Link></li>
              <li><Link href="#" className="hover:underline">Payment Options</Link></li>
              <li><Link href="/Contact" target='blank' className="hover:underline">Contact Us on Nike.com</Link></li>
              <li><Link href="/Contact" target='blank' className="hover:underline">Contact Us on All Other Inquiries</Link></li>
            </ul>
          </div>
          </div>


                  <div className='md:absolute md:left-[480px] ' >
          <div>
            <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">News</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Investors</Link></li>
              <li><Link href="#" className="hover:underline">Sustainability</Link></li>
            </ul>
          </div>
  

  </div>
  <div className="flex justify-start lg:justify-end items-start gap-4 mt-10 md:mt-0 mr-20 md:mr-0">
            <FaTwitter className="text-lg cursor-pointer hover:text-gray-300" />
            <FaFacebook className="text-lg cursor-pointer hover:text-gray-300" />
            <FaYoutube className="text-lg cursor-pointer hover:text-gray-300" />
            <FaInstagram className="text-lg cursor-pointer hover:text-gray-300" />
          </div>
  </div>      

        
  
    
        <div className="mt-20 flex flex-wrap justify-between items-center text-xs text-gray-300">
        
          <div className="flex  md:mb-0 gap-2">
          <IoLocationOutline />
            <p>India</p>
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>
  
        
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">Guides</Link>
            <Link href="#" className="hover:underline">Terms of Sale</Link>
            <Link href="#" className="hover:underline">Terms of Use</Link>
            <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
          </div>
        </div>
      </footer>

  )
}

export default Footer

