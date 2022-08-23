/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
    let count = 0;
   for(let i = 1; i <= num; i++){
        let sum = 0;
        let cInt = i.toString().split('');
        let mInt = cInt.map(Number);
       mInt.forEach(value =>{
            sum += value 
       })
       if(!(sum % 2)){
          count++
       }
   }
    return count;
};