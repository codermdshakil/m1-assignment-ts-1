interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null{

   if(products.length === 0){

    console.log('Products Array is Empty');
    return null;

   }
   else{
    const maxPriceProduct : Product = products.reduce((acc, current) => {

        // logic
        return current.price > acc.price ? current : acc;
    });

    console.log(`Output:`, maxPriceProduct);
    return maxPriceProduct;

   }

}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
  
getMostExpensiveProduct(products);  // Output: { name: 'Bag', price: 50 }


