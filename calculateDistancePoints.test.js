const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');
const tests = require('./testData');

describe('calculateDistancePoints', () => {
  tests.forEach(function(test) {
    it(`${test.name}; args: ${JSON.stringify(test.args)}, expected: ${test.expected}`, function() {
      const res = calculateDistancePoints(test.args.distance, test.args.hillSize, test.args.kPoint);

      assert.equal(res, test.expected);
    });
  });
});
