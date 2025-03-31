
// Object is kind of like map/dictionary where we have key- Value pairs. 
// In this case,
//  we have a key which is a string and a value which is
//  another object. This is called nested object.

var details = ["rohit", 17, 57.6, false];

// // console.log(details);

let x = {
    name: "rohit",
    age: 17,
    percentage: 57.6,
    isMarried: false
};
// name, age, percentage, isMarried there are key and 17, 57.6, false are values.
// x is object

console.log(x);
// output: { name: 'rohit', age: 17, percentage: 57.6, isMarried: false }


console.log(x['age']);
// output: 17

console.log(x['percentage']);
// output: 57.6

x['age'] = 18;
// if you want to change value of age then you can use x['age'] = 18;
// this will change the value of age in the object x.

console.log(x['age']);
// Output : 18

console.log(x)
// output: { name: 'rohit', age: 18, percentage: 57.

x.percentage = 77;
// if you want to change value of percentage then also you can use x.percentage = 77;

console.log(x["percentage"]);
// output: 77

// =============================forin loop===================================
// first methd
    

for (const key in x) {
    if (Object.hasOwnProperty.call(x,key)) {
   console.log(key,x[key]);
}
        
    };
// output: name rohit age 18 percentage 77 isMarride false

// second method


    for (const key in x) {
         console.log(key,x[key]);
            }
// output : name rohit age 18 percentage 77 isMarried false






