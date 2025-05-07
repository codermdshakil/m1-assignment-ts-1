
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    // logic
    const filteredItems = items.filter((item) => item.rating >= 4);
    
    console.log(`Output: `, filteredItems);
    return filteredItems;
};

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
  
filterByRating(books); 
