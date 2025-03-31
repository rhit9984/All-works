
// Web Development II Sec B
// B

// Announce something to your class

// Announcement: "Code of the uses of real-world classes…"
// KAUSHLENDRA bca
// Created Mar 3Mar 3
// Code of the uses of real-world classes and objects.

// class_objects2.js
// Javascript

// Class_Objects3.js
// Javascript

// classes.js
// Javascript

// Add class comment…


// Announcement: "Callback, Promises and Async"
// KAUSHLENDRA bca
// Created Feb 27Feb 27
// Callback, Promises and Async

// Callback VS Promises VS Async_Await Part 01-1.pdf
// PDF

// Add class comment…

// Assignment: "PPT presentation for unit 1"
// KAUSHLENDRA bca posted a new assignment: PPT presentation for unit 1
// Created Feb 25Feb 25

// Announcement: "Full Notes with code of Unit 1."
// KAUSHLENDRA bca
// Created Feb 18Feb 18
// Full Notes with code of Unit 1.

// UNIT 1.docx
// Microsoft Word

// Add class comment…

// // Circle Class
// class Circle {
    constructor(radius) {
        this.radius = radius; // Data member
    }

    // Function to calculate area
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    // Function to display details
    showDetails() {
        console.log(`Circle with radius ${this.radius}`);
    }
}

// Rectangle Class
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        return this.length * this.width;
    }

    showDetails() {
        console.log(`Rectangle with length ${this.length} and width ${this.width}`);
    }
}

// Cylinder Class
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return Math.PI * this.radius * this.radius * this.height;
    }

    showDetails() {
        console.log(`Cylinder with radius ${this.radius} and height ${this.height}`);
    }
}

// Sphere Class
class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    calculateVolume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }

    showDetails() {
        console.log(`Sphere with radius ${this.radius}`);
    }
}

// -------------------------------
// ACCESSING CLASS MEMBERS & METHODS
// -------------------------------

// Creating objects
let circle = new Circle(5);
let rectangle = new Rectangle(10, 20);
let cylinder = new Cylinder(4, 10);
let sphere = new Sphere(6);

// Accessing properties and methods within the class
console.log("\nInside the Class: ");
circle.showDetails();
console.log(`Area of Circle: ${circle.calculateArea().toFixed(2)} sq. units`);

rectangle.showDetails();
console.log(`Area of Rectangle: ${rectangle.calculateArea()} sq. units`);

cylinder.showDetails();
console.log(`Volume of Cylinder: ${cylinder.calculateVolume().toFixed(2)} cubic units`);

sphere.showDetails();
console.log(`Volume of Sphere: ${sphere.calculateVolume().toFixed(2)} cubic units`);

// Accessing properties outside the class
console.log("\nOutside the Class: ");
console.log(`Circle Radius: ${circle.radius}`);
console.log(`Rectangle Length: ${rectangle.length}, Width: ${rectangle.width}`);
console.log(`Cylinder Radius: ${cylinder.radius}, Height: ${cylinder.height}`);
console.log(`Sphere Radius: ${sphere.radius}`);



// Sample Outputs:

// Inside the Class: 
// Circle with radius 5
// Area of Circle: 78.54 sq. units
// Rectangle with length 10 and width 20
// Area of Rectangle: 200 sq. units
// Cylinder with radius 4 and height 10
// Volume of Cylinder: 502.65 cubic units
// Sphere with radius 6
// Volume of Sphere: 904.78 cubic units

// Outside the Class: 
// Circle Radius: 5
// Rectangle Length: 10, Width: 20
// Cylinder Radius: 4, Height: 10
// Sphere Radius: 6