/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  let answer = [];
  for (let i = 0; i < tasks.length; i++) {
    let total = tasks[i][0] + tasks[i][1];
    answer.push(total);
  }
  //mapping answer 
  const mapped = answer.map(function (el, i) {
    return { index: i, value: el };
  });
  //sort map 
  mapped.sort(function (a, b) {
    return a.value - b.value;
  });
  
  var result = mapped.map(function (el) {
    return el.index;
  });

  return result;
};
