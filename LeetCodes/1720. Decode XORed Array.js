/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(e, first) {
    let arr = []
    arr[0] = first
        for(var i=0;i<e.length;i++){
        first = e[i]^first;
        arr.push(first);
    }
   
    return arr
};