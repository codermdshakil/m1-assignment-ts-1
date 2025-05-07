

function concatenateArrays<T>(...arrays: T[][]): T[]{

    const newArr:T[] = [];

    // logic
    for(const arr of arrays){
        newArr.push(...arr)
    }

    console.log(`Output:`,newArr);
    return newArr;
}

concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

 