

let data : any = "Shakil Ahmed";
data = 54;
data = {name:'Shakil Ahmed', age:20};
data = [1,4,6,7];


let value: unknown = "Shakil Ahmed";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe
}

function throwError(): never {
  throw new Error("Something went wrong");
}
