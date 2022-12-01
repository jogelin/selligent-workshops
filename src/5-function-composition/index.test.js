describe('Function composition', () => {
  test('should be able to create pure functions multiplyBy, addTen, addDescription and use function composition to get to the correct result.', () => {

    // GIVEN
    const value = 54;

    const multiplyBy = (multiplier) => (value) => value * multiplier
    const multiplyByTwo = multiplyBy(2);
    const addTen = (value) => value + 10
    const addDescription = (value) => `My value is ${value}`

    // TEST
    const myValue = null;

    // EXPECT
    expect(myValue).toBe("My value is 118");
  });

  test('implement a pipe flowing left-to-right, calling each function with the output of the last one', () => {
    const getName = (person) => person.name;
    const uppercase = (str) => str.toUpperCase();
    const get6Characters = (str) => str.substring(0, 6);
    const reverse = (str) =>
      str
        .split('')
        .reverse()
        .join('');

    const pipe = null;
    const myValue = pipe(
      getName,
      uppercase,
      get6Characters,
      reverse
    )({name: 'Buckethead'});

    expect(myValue).toBe('TEKCUB');
  });
})

