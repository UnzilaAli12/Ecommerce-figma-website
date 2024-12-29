import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
      
  
  <div className="w-full flex items-center justify-between bg-[#F5F5F5] p-2 " >
 
 <div className='  ml-6 ' >
 <Image className='   '
  src="/NikeLogo.svg"
  alt="Logo"
  width={19.2}
  height={17.97}
  />
  </div>

<div>
  <p className='font-medium flex gap-3 text-sm md:text-base  mr-10 ' >

<Link href='/Contact' target="_blank"><span>Find a Store </span></Link>
<Link href='' ><span>|</span></Link>
<Link href='/Contact' target="_blank"><span>Help </span></Link>
<Link href='' ><span>|</span></Link>
<Link href='/JoinUs'target="_blank" ><span>Join Us </span></Link>
<Link href='' target="_blank"><span>|</span></Link>
<Link href='/Login'target="_blank"><span>Sign In</span></Link>

  </p>
  </div>
  </div> 
  
    </div>
  )
}

export default Header
