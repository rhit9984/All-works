// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     age(){
//         const date = new Date();
//         return date.getFullYear() - this.year;
        
//     } 
        
// }
// const MyCar = new Car("bmw", 2015);
// console.log (MyCar.age());


class Tringle{
    // A class is a blueprint for creating objects with shared properties and methods.

    constructor(hight, width)

    //  Constructor is a special function inside a class that runs 
    //  automatically when you create a new object.
    //   It is used to set up the object's
    //  properties (like It takes two parameters: height and width.).


    {
        this.hight = hight;
        this.width = width;
        // The this keyword in JavaScript refers to the object that is 
        // currently being used. 
        // Think of this as a pointer that points to an object.

        // It assigns the value of the height and width parameters to 
        //   the height the width property of the object.

    }
    area(){
        return this.hight * this.width / 2;
        // This defines a method named area(),
        //  which calculates the area of a triangle.

     }
    }
// const myTriangle = new Tringle(10, 20);
// console.log(myTriangle.area());
const myTriangle = new Tringle(10, 30);
// This creates a new instance (object) of the Triangle class
//  and assigns it to the variable myTriangle.

console.log(myTriangle.area());
