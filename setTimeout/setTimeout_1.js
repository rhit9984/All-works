// ===========================setTimeout============================

// =============================Useing First Method========================

// function hello(){
//     console.log("hello");
//     }
    
//     function world(){
//     console.log("world");
//     }
    
//     setTimeout(hello,2*1000);
//     setTimeout(world,3*1000);

// ============================Useing Second Method=============================

// setTimeout(function(){
//         console.log("hello");
//         },2*1000);
        
//         setTimeout(function(){
//         console.log("Rohit ji");
//         },3*1000);
        
 
// ============================Useing Third Method=============================

// for(let i=0;i <=10; i++)
//     {
//   setTimeout(function(){
//           console.log(i);
//   },2*1000)
// } 

 // ============================Useing Fourth Method=============================
 
for(let i=0;i <=10; i++)
  {
setTimeout(function(){
        console.log(i);
},i*1000)
}
// i*1000 ka matlab hai ki 1st time 1 second wait karega 2nd time 2 second............
