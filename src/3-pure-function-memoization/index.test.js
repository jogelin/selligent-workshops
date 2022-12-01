describe('Memoization', () => {
  test('after memoization, the pure function should be called only once', () => {

    // GIVEN
    const calculateFactorial = (x) => x === 1 ? 1 : x * calculateFactorial(x - 1);
    const factorial = jest.fn(calculateFactorial);

    // TEST
    function factorialMemoized(number) {
      return factorial(number);
    }

    const calculateFactorial5FirstTime = factorialMemoized(5);
    const calculateFactorial5SecondTime = factorialMemoized(5);

    // EXPECT
    expect(calculateFactorial5FirstTime).toBe(120);
    expect(calculateFactorial5SecondTime).toBe(120);
    expect(factorial).toHaveBeenCalledTimes(1);
  });


})

