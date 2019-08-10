const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
  //dane testowe
  const testData = [
    {
      name: 'should return 0 if styleNotes is not array',
      args: {
        styleNotes: '3',
      },
      expected: 0
    },
    {
      name: 'should correctly calculate points',
      args: {
        styleNotes: [17, 17, 17, 17, 17],
      },
      expected: 51
    },
    {
      name: 'should correctly calculate points',
      args: {
        styleNotes: [16.5, 16, 16, 16.5, 17],
      },
      expected: 49
    },
    {
      name: 'should correctly calculate points',
      args: {
        styleNotes: [18.5, 18.5, 18.5, 19, 19],
      },
      expected: 56
    },
    {
      name: 'should correctly calculate points',
      args: {
        styleNotes: [16, 16, 16.5, 17, 17],
      },
      expected: 49.5
    },
    {
      name: 'should correctly calculate points',
      args: {
        styleNotes: [9, 10, 11, 12, 17],
      },
      expected: 33
    },
    {
      name: 'should correctly calculate points',
      args: {
        styleNotes: [19, 18, 17, 16, 15],
      },
      expected: 51
    },
  ];

  testData.forEach(function(test) {
    const args = { ...test.args };
    it(`${test.name}; args: ${JSON.stringify(args)}, expected: ${test.expected}`, function() {
      const res = calculateStylePoints(args.styleNotes);

      assert.equal(res, test.expected);
    });
  });
});
