export interface Product {
    _id: string,
    productName : string;
    _type : "product",
    image? :{
        asset: {
            _ref : string,
            _type : string,
        }
    }
    price : number,
    description : string,
    category : string,
    status: string,
    slug : {
        _type: 'slug',
        current: string
    },
    inventory : number,
    colors?: {
        of: { type: string }[]; 
      };
     
}