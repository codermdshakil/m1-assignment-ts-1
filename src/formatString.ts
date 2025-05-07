
function formatString(input: string, toUpper?: boolean): string{

    if( toUpper === false){
        const smaller = input.toLowerCase();
        console.log(`Output: "${smaller}"`);
        return smaller;
    }
    else{
        const capital = input.toUpperCase();
        console.log(`Output: "${capital}"`);
        return capital;
    }
}

formatString("Hello");               // Output: "HELLO"
formatString("Hello", true);         // Output: "HELLO"
formatString("Hello", false);        // Output: "hello"
formatString("Bangladesh", false);    //Output: "bangladesh"
formatString("Shakil Ahmed", true); // Output: "SHAKIL AHMED" 





