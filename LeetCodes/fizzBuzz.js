const int = 100;

const arrowFunc = ()=>{
    for(let i = 0; i < int; i ++){
        if(i % 3){
            console.log("fizz")
        }
        else if(i%5){
            console.log("buzz")
        }
        else{
            console.log("fizzbuzz")
        }
    }
}

arrowFunc();