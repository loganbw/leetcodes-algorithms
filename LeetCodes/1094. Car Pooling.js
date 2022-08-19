/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const flat = [];
  let distance = 0;
  const currentTrip = 0;

  let totalPass = 0;
  for (let i = 0; i < trips.length; i++) {
    flat.push(trips[i][2]);
  }
  const flatMax = Math.max(...flat);
  while (distance < flatMax) {
    if (trips[currentTrip][0] + trips[currentTrip + 1][0] > capacity) {
      return false;
    }
    if (trips[currentTrip][1] > trips[currentTrip + 1][1]) {
      return false;
    }
    if (trips[currentTrip][2] > trips[currentTrip + 1][2]) {
      return false;
    }
    distance++;
  }
  return true;
};
