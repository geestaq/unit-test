//dane testowe
const testData = [
  {
    name: 'should return 0 if distance is 0',
    args: {
      distance: 0,
      hillSize: 0,
      kPoint: 0,
    },
    expected: 0
  },
  {
    name: 'should return 0 if calculated points is less than 0',
    args: {
      distance: 1,
      hillSize: 60,
      kPoint: 70,
    },
    expected: 0
  },
  {
    name: 'should correctly calculate points - mammoth',
    args: {
      distance: 227.5,
      hillSize: 225,
      kPoint: 200,
    },
    expected: 153
  },
  {
    name: 'should correctly calculate points - mammoth',
    args: {
      distance: 200,
      hillSize: 225,
      kPoint: 200,
    },
    expected: 120
  },
  {
    name: 'should correctly calculate points - mammoth',
    args: {
      distance: 196.5,
      hillSize: 225,
      kPoint: 200,
    },
    expected: 115.8
  },
  {
    name: 'should correctly calculate points - big',
    args: {
      distance: 134,
      hillSize: 134,
      kPoint: 120,
    },
    expected: 85.2
  },
  {
    name: 'should correctly calculate points - big',
    args: {
      distance: 120,
      hillSize: 134,
      kPoint: 120,
    },
    expected: 60
  },
  {
    name: 'should correctly calculate points - big',
    args: {
      distance: 119.5,
      hillSize: 134,
      kPoint: 120,
    },
    expected: 59.1
  },
  {
    name: 'should correctly calculate points - normal',
    args: {
      distance: 111,
      hillSize: 109,
      kPoint: 98,
    },
    expected: 86
  },
  {
    name: 'should correctly calculate points - normal',
    args: {
      distance: 98,
      hillSize: 109,
      kPoint: 98,
    },
    expected: 60
  },
  {
    name: 'should correctly calculate points - normal',
    args: {
      distance: 93.5,
      hillSize: 109,
      kPoint: 98,
    },
    expected: 51
  },
];

module.exports = testData;
