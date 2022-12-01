describe('Currying', () => {
  test('should be able to create a specialized message from a general `greet` function', () => {
    // GIVEN

    // const greet = null;
    function greet(message) {
      function generateMessage(name) {
        return `${message}, ${name}`;
      }

      return generateMessage;
    }

    // TEST
    const helloGreet = greet('Hello')
    const welcomeGreet = greet('Welcome')

    // EXPECT
    expect(helloGreet('Jack')).toEqual('Hello, Jack')
    expect(welcomeGreet('Marie')).toEqual('Welcome, Marie')
  })
})
