const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  //dane testowe
  const testData = [
    {
      name: 'should correctly calculate points - mammoth',
      args: {
        distance: 227.5,
        hillSize: 225,
        kPoint: 200,
        styleNotes: [18, 18.5, 17.5, 18.5, 18.5],
        gateFactor: 8.7,
        windFactor: -8.4,
      },
      expected: 208.3
    },
    {
      name: 'should correctly calculate points - mammoth',
      args: {
        distance: 211.5,
        hillSize: 225,
        kPoint: 200,
        styleNotes: [17.5, 17.5, 17, 17.5, 17.5],
        gateFactor: 0,
        windFactor: -5.5,
      },
      expected: 180.8
    },
    {
      name: 'should correctly calculate points - mammoth',
      args: {
        distance: 187.5,
        hillSize: 225,
        kPoint: 200,
        styleNotes: [16.5, 16.5, 16.5, 16.5, 16.5],
        gateFactor: 0,
        windFactor: -6.6,
      },
      expected: 147.9
    },
    {
      name: 'should correctly calculate points - big',
      args: {
        distance: 134,
        hillSize: 134,
        kPoint: 120,
        styleNotes: [19, 20, 19.5, 19, 18.5],
        gateFactor: 0,
        windFactor: -5.4,
      },
      expected: 137.3
    },
    {
      name: 'should correctly calculate points - big',
      args: {
        distance: 125,
        hillSize: 134,
        kPoint: 120,
        styleNotes: [18, 18, 18.5, 18.5, 18],
        gateFactor: 0,
        windFactor: -1.5,
      },
      expected: 122
    },
    {
      name: 'should correctly calculate points - big',
      args: {
        distance: 107.5,
        hillSize: 134,
        kPoint: 120,
        styleNotes: [15.5, 16.5, 16, 16, 16.5],
        gateFactor: 0,
        windFactor: -4.3,
      },
      expected: 81.7
    },
    {
      name: 'should correctly calculate points - normal',
      args: {
        distance: 111,
        hillSize: 109,
        kPoint: 98,
        styleNotes: [19, 19.5, 19, 19, 19],
        gateFactor: 3.2,
        windFactor: -14.4,
      },
      expected: 131.8
    },
    {
      name: 'should correctly calculate points - normal',
      args: {
        distance: 98.5,
        hillSize: 109,
        kPoint: 98,
        styleNotes: [17.5, 17.5, 17.5, 18, 18],
        gateFactor: 3.2,
        windFactor: -11,
      },
      expected: 106.2
    },
    {
      name: 'should correctly calculate points - normal',
      args: {
        distance: 80,
        hillSize: 109,
        kPoint: 98,
        styleNotes: [15, 15.5, 16, 15.5, 16],
        gateFactor: 0,
        windFactor: -10.2,
      },
      expected: 60.8
    },
  ];

  testData.forEach(function(test) {
    const args = { ...test.args };
    it(`${test.name}; args: ${JSON.stringify(args)}, expected: ${test.expected}`, function() {
      const res = calculateTotalPoints(args.distance, args.hillSize, args.kPoint, args.styleNotes, args.windFactor, args.gateFactor);

      assert.equal(res, test.expected);
    });
  });

});
