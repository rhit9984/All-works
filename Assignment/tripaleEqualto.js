a = 5;
b = 5;
console. log(a == b);

// ++++++++++++++++++++++++output true++++++++++++++++++++++++++++++


a = 5;
b = "5";
console. log(a == b);

// ++++++++++++++++++++++++++++++output: true++++++++++++++++++++++++++++
// note diffrence between first code and second code. because == checked only value not data type. 
// so it will return true. but in strict mode it will return false.

a = 5;
b = 5;
console. log(a === b);
// =================================================Output: true ===================================================

a = 5;
b = "5";
console. log(a === b);


// ======================================= Output: false ================================================


// diffrence between first code and second code. because === checked both value and data type. 
// so it will return true. and in strict mode it will return false.



