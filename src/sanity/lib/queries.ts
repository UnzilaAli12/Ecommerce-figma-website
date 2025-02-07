import { groq } from "next-sanity";

export const allProducts= groq `*[_type == "product"]`;
export const four = groq `*[_type == "product"][0..3]`;

    // _id,
    // name,
    // description,
    // price,
    // discountPercentage,
    // priceWithoutDiscount,
    // rating,
    // ratingCount,
    // tags,
    // sizes,
    // "imageUrl": image.asset->url
    // }
    // `)

    // export const sixPro = defineQuery(`
    //     *[_type == "product"]0..5{
    //     _id,
    //     name,
    //     description,
    //     price,
    //     discountPercentage,
    //     priceWithoutDiscount,
    //     rating,
    //     ratingCount,
    //     tags,
    //     sizes,
    //     "imageUrl": image.asset->url
    //     }
    //     `)