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


// performace tracker https://rithmschool.github.io/function-timer-demo/
/*
    BreakDown of a function useing Big O
    n * (n+1) /2;
    -1 multiplcation
    -one addition
    -one divison
    -3 total operators
    -so O(3) or -> O(1)
    -----------------
    function addUp(n){
        let total = 0;
        for(let i = 0; i < n; i++){
            total += 1;
        }
    }
    -two equals
    -5 operators with i or n
        - i < n | 1
        - i++ | 2
        - total += 1; | 2
    -so total would be 5n + 2 or -> O(n)

//BIG O Definition 
    If an algorithm is O(f(n)) if thhe number of sinple operations the computer has to do 
    is eventually less than a constant times f(n), as n increases

    --RULES OF THUMB--
    - O(2n) -> O(n)
    - O(500) -> O(1)
    - O(13n^2) -> O(n^2)
    
    Smaller terms dont matter
    O(n + 10) -> O(n)
    O(1000n + 50) -> O(n)
    O(n^2 + 5n + 8) -> O(n^2)

    BIG O Short hands
    1) arithmetic operations are constant
    2) var assignment is constant
    3) accessing elements in an array, by index or by key is constant
    4) in a loop, the complexity is the length of the loop times the
    complexity of whatever happens insde the loop
*/