//Determining which solution is best to a problem with multiple solutions

//USING TIMERS
function addUpTo(n){
    return n * (n + 1) / 2;
}
//use performance.now to calculate how fast a function gets executed
let t1 = performance.now();
addUpTo(1000000000)
let t2 = performance.now();
//we divide by 1000 because its in milliseconds 
console.log(`Time used ${(t2 - t1) / 1000} seconds`)

