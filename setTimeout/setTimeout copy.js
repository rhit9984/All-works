// print 1 to 10 but with delay 1 sec after each 
// number  gets printed.

// function print(i){
//     console.log(i);
// }



// for(let i = 1; i<=10; i++){
//     console.log(i);

// }



function hello(){
console.log("hello");
}

function world(){
console.log("world");
}

setTimeout(hello,2*1000);
setTimeout(world,3*1000);
function ram(){
    console.log("rrwerwrwr")
}
setTimeout(ram,3*1000);

setTimeout(function(){
    console.log("hello world")
},4*1000);


setTimeout(()=>{
    console.log("hello world")
},5*1000);

function hello(){
    console.log("hello");
}
setTimeout(Rohit,6*1000);
