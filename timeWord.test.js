const {timeWord, minuteHelper, hourHelper} = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});