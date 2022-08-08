 
t = [2,1,3];

var numOfTeams = (rating) =>{
    //faster way to sort array of ints
    var numArray = new Float64Array(rating)
    numArray.sort();
    let count = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    for(let s = 0; s < numArray.length; s++) {
        i = numArray[s]
       for (let index = 1; index < numArray.length; index++) {
        if(index < numArray.length - 2){
            return
        }
        j = numArray[index]
        k = numArray[index +1]
        if(0 <= i < j < k < numArray.length){
            count++
        }
        
       }
    }
    console.log(count);
}

numOfTeams(t)
