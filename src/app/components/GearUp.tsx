import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image'

const GearUp = () => {
  const sections = [
    {
      title: "Shop Now",
      products: [
        {
          id: 1,
          name: "Nike Dri-FIT ADV TechKnit Ultra",
          description: "Men's Short-Sleeve Running Top",
          price: "₹3,895",
          image: "/gear1.svg", 
        },
        {
          id: 2,
          name: "Nike Dri-FIT Challenger",
          description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
          price: "₹2,495",
          image: "/gear2.svg",
        },
        
        {
          id: 3,
          name: "Nike Dri-FIT ADV Run Division",
          description: "Women's Long-Sleeve Running Top",
          price: "₹5,295",
          image: "/gear3.svg",
        },
        {
          id: 4,
          name: "Nike Fast",
          description: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
          price: "₹3,795",
          image: "/gear4.svg",
        },
      ],
    },
    
    
  ];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {sections.map((section, index) => (
        <div key={index}>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <div className="hidden md:flex space-x-2 ">
              <Button variant="outline" size="icon" className="rounded-full" >
                {"<"} 
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" >
                {">"} 
              </Button>
            </div>
          </div>


          <div className=" space-x-4 grid sm:grid-cols-1 md:grid-cols-4 overflow-x-auto scrollbar-hide gap-6 md:gap-0">
            {section.products.map((product) => (
              <Card
                key={product.id}
                className="min-w-[250px] flex-shrink-0 rounded-lg border shadow-sm"
              >
                {/* Image */}
                <CardHeader className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>

                {/* Content */}
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{product.description}</p>
                  <div className="flex justify-end mt-3">
                    <span className="text-sm font-semibold text-gray-800">
                      {product.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
      <div>
        <div>
            <h2 className="font-medium " >
            Don't Miss
            </h2>
        </div>
        <div>
        <Image className='  mt-4 '
  src="/gear5.svg"
  alt="Image"
  width={1344}
  height={700}
  />

        <h1 className='font-medium text-[56px] leading-[60px] flex items-center justify-center mt-2' >
        FLIGHT ESSENTIALS
</h1>
<p className='text-sm flex items-center justify-center mt-6 text-center ' >
Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
</p>
<div className='flex justify-center gap-6 mt-6  ' >
  <button className='w-[80px] h-[39px] font-medium text-white bg-black rounded-[30px]  items-center   ' >
  Shop
  </button>
  </div>
        </div>
      </div>



      <div>
            <h2 className="font-medium  " >
            The Essentials
            </h2>
        </div>
        <div className=" justify-between gap-3 grid sm:grid-cols-1 md:grid-cols-3" >
        <Image className='   '
  src="/gear6.svg"
  alt="Image"
  width={400}
  height={500}
  />
  
  <button className="w-[85px] h-[39px] rounded-[30px] hidden md:flex items-center justify-center bg-white text-black absolute top-[4320px] left-[80px]  ">
  Men's
  </button>
         <Image className='   '
  src="/gear7.svg"
  alt="Image"
  width={400}
  height={500}
  />
    
    <button className="w-[85px] h-[39px] rounded-[30px] hidden md:flex items-center justify-center bg-white text-black absolute top-[4320px] left-[500px]">
    Women's
  </button>
         <Image className='   '
  src="/gear8.svg"
  alt="Image"
  width={400}
  height={500}
  />
    
    <button className="w-[85px] h-[39px] rounded-[30px] hidden md:flex items-center justify-center bg-white text-black absolute top-[4320px] left-[920px]">
    Kids'
  </button></div>


 

   



     </div>

    

);
};

export default GearUp;
