
function processValue(value: string | number): number{

    if(typeof value === 'string'){

        const valueLength:number = value.length;
        console.log(`Output:`,valueLength);

        return valueLength
    }
    else{
        
        console.log(`Output:`,value*2);
        return value*2;
    }
}
processValue("hello");          // Output: 5
processValue(10);               // Output: 20
processValue("Shakil Ahmed");   // Output: 12
processValue(50);               // Output: 100
