const myFn = require('./sum');

describe('Functions are Objects', () => {

  test('should have myFn returning a string', () => {
    expect(myFn()).toBe('MyFn is called');
  });

  test('should have myFn returning a string', () => {
    expect(myFn()).toBe('MyFn is called');
  });
})

