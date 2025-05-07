
class Vehicle{
    private make:string;
    private year:number;

    constructor(make:string, year:number){
        this.make = make;
        this.year = year;
    }

    getInfo(){
        console.log(`Output: "Make: ${this.make}, Year: ${this.year}"`);
    }

};


class Car extends Vehicle{

    private model:string;

    constructor(make:string, year:number, model:string){
        super(make, year);
        this.model = model;
    }

    getModel(){
        console.log(`Output: "Model: ${this.model}"`);
    }
};

const myCar = new Car("Toyota", 2020, "Corolla");
const myCar2 = new Car("BMW", 2022, "BMW X7");

// myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
// myCar.getModel();  // Output: "Model: Corolla"
// myCar2.getInfo();  // Output: "Make: BMW, Year: 2022"
// myCar2.getModel(); // Output: "Model: BMW X7"





