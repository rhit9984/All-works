
// =========================this is a loop=====================================
let n = 10;
for(let i = 0; i < n; i++) {
    console.log(i);
}


// ==================================this is function=========================
// function used for making a function reusable

function OnetoN(n){
  for(let i = 0; i <= n; i++) {
        console.log(i);
}
}
OnetoN(4)

// ===============================simple term================================
let a = 10;
let b = 8;
console.log(a*a + b*b + 2*a*b );

 
// ======================convert into function===================================

function holsqr(t, p){
    return (t*t + p*p + 2*t*p );
// return Math.abs(t*t + p*p + 2*t*p ); Math.abs use for absolute(positive) value

}
console.log(holsqr(10, 8));