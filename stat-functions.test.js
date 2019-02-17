const statFunctions = require('./stat-functions');

const testDataSet = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9 ];
const winsorTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 999, 9999999, -99999 ];
const medianTest = [ 3, 234, 23, 78, 356, 98, 67, 3, 34, 23, 94, 94, 90, 9, 9 ];
const modeTest = [ 3, 5, 4, 4, 1, 1, 2, 3 ];
const modeTest2 = [ 100, 229, 234, 234, 11, 1, 3 ];
const modeTest3 = [ 100, 229, 234, 11, 1, 3 ];
const percentileTest = [ 43, 54, 56, 61, 62, 66, 68, 69, 69, 70, 71, 72, 77, 78, 79, 85, 87, 88, 89, 93, 95, 96, 98, 99, 99 ];
const percentileTest2 = [ 3, 23, 78, 67, 3, 34, 23, 94, 90, 9 ];

// validation test sets
const emptySet = [];
const nanSet = [ 0, 1, 'not a number' ];

describe('statFunctions', () => {
  // sum
  test('.sum() should return correct sum', () => {
    expect(statFunctions.sum(testDataSet)).toBe(1206);
  });
  test('.sum() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.sum(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.sum() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.sum(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // mean
  test('.mean() should return correct mean', () => {
    expect(statFunctions.mean(testDataSet)).toBe(86.14285714285714);
  });
  test('.mean() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.mean(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.mean() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.mean(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // median
  test('.median() should return correct median', () => {
    expect(statFunctions.median(testDataSet)).toBe(72.5);
    expect(statFunctions.median(medianTest)).toBe(67);
  });
  test('.median() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.median(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.median() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.median(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // mode
  test('.mode() should return correct mode array', () => {
    expect(statFunctions.mode(modeTest)).toEqual([ 1, 3, 4 ]);
    expect(statFunctions.mode(modeTest2)).toEqual([ 234 ]);
    expect(statFunctions.mode(modeTest3)).toEqual([]);
  });
  test('.mode() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.mode(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.mode() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.mode(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // range
  test('.range() should return correct range array', () => {
    expect(statFunctions.range(testDataSet)).toEqual([ 3, 356 ]);
  });
  test('.range() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.range(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.range() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.range(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // stdDev
  test('.stdDev() should return correct standard deviation', () => {
    expect(statFunctions.stdDev(testDataSet)).toBe(94.81776291004395);
  });
  test('.stdDev() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.stdDev(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.stdDev() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.stdDev(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // percentile
  test('.percentile() should return correct percentile value', () => {
    expect(statFunctions.percentile(percentileTest, .9)).toBe(98);
    expect(statFunctions.percentile(testDataSet, .05)).toBe(3);
    expect(statFunctions.percentile(testDataSet, .9)).toBe(234);
    expect(statFunctions.percentile(percentileTest2, .1)).toBe(3);
  });
  test('.percentile() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.percentile(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.percentile() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.percentile(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // MAD
  test('.mad() should return correct median absolute deviation', () => {
    expect(statFunctions.mad(testDataSet)).toBe(44);
    expect(statFunctions.mad(medianTest)).toBe(44);
  });
  test('.mad() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.mad(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.mad() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.mad(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });

  // madWinsorize
  test('.madWinsorize() should return correctly Winsorized data set', () => {
    expect(statFunctions.madWinsorize(testDataSet, 4)).toEqual([ 3, 234, 23, 78, 248.5, 98, 67, 3, 34, 23, 94, 94, 90, 9 ]);
    expect(statFunctions.madWinsorize(winsorTest, 4)).toEqual([ 3, 234, 23, 78, 298, 98, 67, 3, 34, 23, 94, 94, 90, 9, 298, 298, -142 ]);
  });
  test('.madWinsorize() should throw error on empty dataset', () => {
    const testEmpty = () => statFunctions.madWinsorize(emptySet);
    expect(testEmpty).toThrowError(new TypeError('Data set must contain values.'));
    expect(testEmpty).toThrowErrorMatchingSnapshot();
  });
  test('.madWinsorize() should throw error on dataset containing non-numbers', () => {
    const testNan = () => statFunctions.madWinsorize(nanSet);
    expect(testNan).toThrowError(new TypeError('Data set must contain only numbers.'));
    expect(testNan).toThrowErrorMatchingSnapshot();
  });
});
