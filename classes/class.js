
// Web Development II Sec B
// B
// Upcoming
// Woohoo, no work due soon!

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

// class OOPs {
	constructor(name) {
		this.name = name;
	}

	// Getter method
	get langName() {
		return this.name;
	}

	// Setter method
	set langName(x) {
		this.name = x;
	}
	hello(){
		console.log(`Hello ${this.name}`)
	}
}

let obj = new OOPs('JavaScript');
console.log(obj.name); 

obj.langName = 'Java';
console.log(obj.name);



class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";



  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  const date = new Date();
  let year = date.getFullYear();
  
  const myCar = new Car("Ford", 2014);
  document.getElementById("demo").innerHTML=
  "My car is " + myCar.age(year) + " years old.";