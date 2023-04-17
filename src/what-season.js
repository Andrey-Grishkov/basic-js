const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

  if(date === '' || date === null || date == undefined){
    return 'Unable to determine the time of year!'
  }

  if (Object.keys(date).length !== 0 || (date instanceof Date) == false) throw Error('Invalid date!');

  switch (date.getMonth()){
    case 11: case 12: case 1: case 0: return 'winter'
    case 2: case 3: case 4: return 'spring'
    case 5: case 6: case 7: return 'summer'
    case 9: case 10: case 8: return 'autumn'
    default: return 'true'
  }
}

module.exports = {
  getSeason
};
