// callback function ek yesa function hai jo ek function ko call karta hai
// callback function ko ek function ke argument ke roop mein pass kiya jata hai.
function product(a, b, c) {
    return a * b * c;
    }

    // console. log (product(4, 5, 6)); 
    // // output: 120

    function fun(x,y){
        console.log(x-y);
        
        console.log(x);
    }
    fun(product(4,5,6),7);