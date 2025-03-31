
// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);

// function fun(ele){
//     if(ele % 2 != 0) return true;
//     else return false;
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// arr = arr.filter(function(ele){
//     if(ele % 2 == 0) return true;

//     else return false;
// });
// console.log(arr);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
arr = arr.filter(function(ele){
    if(ele < 6) return true;

    else return false;
});
console.log(arr);

arr = arr.filter(ele=> (ele<4));
console.log(arr);