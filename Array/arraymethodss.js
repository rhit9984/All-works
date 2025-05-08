// ------------this is a printing method of array------------

// let arr =[1,2,3,4,5,6,7,8,9];
// console.log(arr);


// _--------------pus----------------

// push method is used to add the element at the end of the array

// let arr =[1,2,3,4,5,6,7,8,9];
// console.log(arr);

// arr.push(6,10);
// console.log(arr);



// _--------------pop----------------   

// pop method is used to remove the element from the end of the array

// let arr =[1,2,3,4,5,6,7,8,9];
// console.log(arr);

// arr.pop();
// console.log(arr);



// -------------------aray.lenght---------

// array.length is used to get the length of the array

// let arr =[1,2,3,4,5,6,7,8,9];
// console.log(arr);
// console.log(arr.length);


// -------------------------shift-----------------------------
 
// shift method is used to remove the element from the beginning of the array

//  let arr =[1,2,3,4,5,6,7,8,9];
//  console.log(arr);
//  arr.shift();
//  console.log(arr);



//  --------------------------unsshift---------------------------
// unshift used for add the element at the beginning of the array

// let arr =[1,2,3,4,5,6,7,8,9];
// console.log(arr);
// arr.unshift(1); 
// console.log(arr);



// --------------------delete---------------------------
// delete is used to delete the element from the array on any element index

//  let arr =[1,2,3,4,5,6,7,8,9];
//  console.log(arr);
// delete arr[2];
// console.log(arr);



// -----------------------concat----------------------------------
// concat is used to merge two arrays into one array

// let arr1 =[1,2,3,4,5,6,7,8];
// let arr2 =[9,10,11,12,13,14,15];
// let arr3 =[16, 17,18,];

// arr1.concat(arr2, arr3);
// console.log(arr1.concat (arr2, arr3));

// let arr4 =arr1.concat(arr2, arr3);
// console.log(arr4); 



// -----------------sort()---------------------------------
// sort() is used to sort the array in ascending order

// let arr = [8,6,5,2,4,3,1,0,9];
// console.log(arr);
// arr.sort();
// console.log(arr);
// arr.sort();
// console.log(arr);



//  ------------------------splice-------------------
// splice is used to delete the element from the array on any element index

// let arr =[8,6,5,4,3,1,0,9];
// console.log(arr);
// arr.splice(2,2);
// console.log(arr);




// ---------------------------join---------------------------------

// join used for converting the array into string.
//  let arr = [1,2,3,4,5,];
 
// let str = arr.join("@");
// console.log(str);

// ----------------------reverse-----------------
// reverse is used to reverse the array in reverse order.

// let arr =[8,6,5,4,3,1,0,9];
// console.log(arr);
// arr.reverse();
// console.log(arr);


// -----------------------indexOf----------------
// indexOf is used to find the index of the element in the array.

// let arr =[8,6,5,4,3,1,0,9];  
// console.log(arr);
// console.log(arr.indexOf(5));
// console.log(arr.indexOf(3));



// -----------------slice-------------------------
// slice is used to get the part of the array.

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr);
// console.log(arr.slice(2,5));



// --------------------splice---------------
// splice is used to delete the element from the array on any element index

// let arr =[8,6,5,4,3,1,0,9];
// console.log(arr);
// arr.splice(2, 1, 11); // delete 5 and insert 11 at index 2,(index, deleteCount, item1, item2, item3)
// console.log(arr);




// --------------------advance array method ---------------

// -----------------------map method ----------------------------


// let arr = [45, 23, 21];
// // console.log(arr);
// arr.map((value, index, array)=>{
//     console.log(value, index, array)
// });



// ------------------filter method --------------------

// let arr = [45, 23, 21, 0,4,5,6]

// let arr2 = arr.filter((a)=>{
//     return a < 10;
// });
// console.log(arr2);



// --------------------------reduce method ----------------

// let arr = [1,4,7,5,9];
// const reduce_func = (h1, h2) => {
//     return h1 + h2;
// }

//  let newarr = arr.reduce(reduce_func)

// console.log(newarr);










