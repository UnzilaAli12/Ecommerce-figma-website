import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div>
      <Image className='   '
  src="/Hero1.svg"
  alt="Image"
  width={1344}
  height={1700}
  />
      </div>
      <div className='w-full d-flex items-center justify-center ' >
<p className='font-medium flex items-center justify-center pt-10 ' >
First Look
</p>
<h1 className='font-medium text-[56px] leading-[60px] flex items-center justify-center mt-2' >
Nike Air Max Pulse
</h1>
<p className='text-sm flex items-center justify-center mt-6 text-center ' >
Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
—designed to push you past your limits and help you go to the max.
</p>
<div className='flex justify-center gap-6 mt-6  ' >
  <button className='w-[110px] h-[39px] font-medium text-white bg-black rounded-[30px]  items-center   ' >
    Notify Me
  </button>
  <button className='w-[138px] h-[39px] font-medium text-white bg-black rounded-[30px] items-center  '>
  Shop Air Max
  </button>
  </div>
      </div>
      
    </div>
  )
}

export default Hero
