const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // const initialTower = new Array(disksNumber).fill(null).map((element, index)=> index +1);
  // const destinationTower = [];
  // const helpTower = [];
  //
  // let count = 0;
  //
  // const recurcionTover = (disksNumber, initialTower, helpTower, destinationTower) => {
  //   if (disksNumber > 0) {
  //     destinationTower.push(initialTower.pop());
  //     recurcionTover (disksNumber -1, initialTower, destinationTower, helpTower);
  //     recurcionTover (disksNumber -1, helpTower, initialTower, destinationTower);
  //     count++;
  //   }
  //   return count
  // }
  //
  // recurcionTover(disksNumber, initialTower, helpTower, destinationTower);

  const count = Math.pow(2, disksNumber) - 1;;

  const lostTime = Math.floor(count*3600/turnsSpeed);

  return {turns: count, seconds: lostTime};
}

module.exports = {
  calculateHanoi
};
