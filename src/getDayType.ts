enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
function getDayType(day: Day): string{
    
    // logic
    if(day === 6 || day === 5){
        console.log(`Output: "Weekend"`);

        return `Output: "Weekend"`
    }
    else{
        console.log(`Output: "Weekday"`);

        return `Output: "Weekday"`
    }
}

getDayType(Day.Monday);   // Output: "Weekday"
getDayType(Day.Sunday);   // Output: "Weekend"