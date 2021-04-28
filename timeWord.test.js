const {timeWord, minuteHelper, hourHelper} = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('should get correct response', () => {
    expect(timeWord('12:00')).toEqual('noon  PM');
    expect(timeWord('00:00')).toEqual('midnight  AM');
    expect(timeWord('01:15')).toEqual('one fifteen AM');
    expect(timeWord('13:56')).toEqual('one fifty six PM');
  });
});