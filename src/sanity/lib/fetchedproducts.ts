// import { sanityFetch } from "@/sanity/lib/live"
// import { allProducts } from "@/sanity/lib/queries"
// import Image from 'next/image'

// type Products = {
//     _id:string,
//     name:string,
//     description:string,
//     imageUrl:string,
//     price:number
// }


// export default async function Home(){
//     try {
//         // Fetch data from Sanity
//         // const result = await sanityFetch({ query: allProducts });
//         console.log("Sanity Fetch Result:", result);
//         const products: Products[] = Array.isArray(result.data) ? result.data : [];
//     return(
//         <div >
//             <h1>Products</h1>
//             <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3  m-auto">
//                 {
//                     products.map(( ) => (
//                         <div className="border p-5 shadow-md ml-0 md:ml-[30px] mt-3 md:mt-[30px] mr-3 md:mr-[30px]" key={index}>
//                             <Image className="items-center ml-[14px]"
//                             src={products.imageUrl}
//                             alt={products.description}
//                             width={300}
//                             height={200}
//                             />
//                         <div className="font-bold">

//                             <h1 className="font-bold text-2xl ">{products.name} <br /></h1>
//                             <p className="text-center  ">{products.description}</p>
//                             <p className="text-center text-red-500 ">${products.price}</p>
//                             </div>
//                         </div>
//                     ))
//                 }
                

//             </div>
//         </div>
//     )
// }
// catch (error) {
//     console.error("Error fetching products:", error);
//     return <div>Error loading products</div>;
//   }
// }
