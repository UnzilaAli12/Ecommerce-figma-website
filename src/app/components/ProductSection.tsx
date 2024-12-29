import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
const ProductSection = () => {
    
      const products = [
        {
          id: 1,
          name: "Nike Air Max Pulse",
          description: "Women's Shoes",
          price: "₹13,995",
          image: "/shoe1.svg", 
        },
        {
          id: 2,
          name: "Nike Air Max Pulse",
          description: "Men's Shoes",
          price: "₹13,995",
          image: "/shoe2.svg", 
        },
        {
          id: 3,
          name: "Nike Air Max 97 SE",
          description: "Men's Shoes",
          price: "₹16,995",
          image: "/shoe3.svg", 
        },
      ];
 
    return (
    <div>
<div className='flex items-center justify-between mx-8 ' >
<h2 className='w-[161px] h-[27px] font-medium text-xl mt-28  ' >
Best of Air Max 
</h2>

<div className='' >
<p className='w-[37px] h-[24px] font-medium mt-28 flex items-center justify-center' >
Shop
<ChevronLeft className=' rounded-full bg-[#CCCCCC]  ' />
<ChevronRight className=' rounded-full bg-[#E5E5E5]' />
</p>
</div>
</div> 
 <div className="container mx-auto p-6 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-lg border shadow-sm">
      
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </CardHeader>

            <CardContent className="p-4 flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <span className="text-gray-800 font-semibold">{product.price}</span>
              </div>
              <p className="text-sm text-gray-500">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    <div className='mx-8  ' >
        <h2 className='font-medium  text-xl  mt-10 ' >
        Featured
        </h2>
        <div className=' ' >
 <Image className=' mt-4  '
  src="/featured.svg"
  alt="Image"
  width={1344}
  height={700}
  />
  </div>

  <h1 className='font-medium text-[56px] leading-[60px] flex items-center justify-center mt-2' >
STEP INTO WHAT FEELS GOOD
</h1>
<p className='text-sm flex items-center justify-center mt-6 text-center ' >
Cause everyone should know the feeling of running in that perfect pair.
</p>
<div className='flex justify-center gap-6 mt-6  ' >
  <button className='w-[152px] h-[39px] font-medium text-white bg-black rounded-[30px]  items-center   ' >
  Find Your Shoe
  </button>

    </div>
    </div>
    
    </div>
  )
}

export default ProductSection
