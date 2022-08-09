/*
There are n flights that are labeled from 1 to n.

You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi] 
represents a booking for flights firsti through lasti (inclusive) with seatsi seats reserved for 
each flight in the range.

Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i.

*/

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var corpFlightBookings = function(bookings, n) {
    const count = new Array(n + 1).fill(0);
    
    for (const [start, end, seats] of bookings) {
        count[start] += seats;
        count[end + 1] -= seats;
    }
    console.log(count[2])
    const res = [];
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        sum += count[i];
        res.push(sum);
    }
    
    return res;
};