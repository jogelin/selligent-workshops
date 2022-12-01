describe('Functions are Objects', () => {

  describe('We can assign them in a variable as a value', () => {
    test('should have a variable named myFn containing a function that prints "my function is called"', () => {

      // GIVEN
      function printLog() {
        return 'my function is called';
      }

      // TEST
      // const myFn; // <-- maybe we should do something here
      const myFn = printLog;

      // EXPECT
      expect(myFn()).toBe('my function is called');
    });
  });

  describe('We can pass them as arguments to other functions', () => {
    test('should be able to provide myFn function as a callback function as an argument of another function', () => {

      // GIVEN
      /*
      function printLog() {
        return;
      }*/
      function printLog(callback) {
        return callback();
      }

      // TEST
      const myFn = () => 'my function is called';

      // EXPECT
      expect(printLog(myFn)).toBe('my function is called');
    });
  });

  describe('We can return them as a return value of another function', () => {
    test('should be able to return a function', () => {

      // GIVEN
      /*
      function printLogFn() {
        return;
      }
      */
      function printLogFn() {
        return () => 'my function is called';
      }

      // TEST
      const myFn = printLogFn();

      // EXPECT
      expect(myFn()).toBe('my function is called');
    });
  });


  describe('We can include them in different data structures', () => {
    test('should be able to have a list of functions', () => {

      // GIVEN
      // const fns = [];
      const fns = [
        () => 'my',
        () => 'function',
        () => 'is',
        () => 'called',
      ];

      // TEST
      const mapFunctionToResult = fn => fn();
      const result = fns.map(mapFunctionToResult).join(' ');

      // EXPECT
      expect(result).toBe('my function is called');
    });


    test('should be able to have a property of an object as a function', () => {

      // GIVEN
      const someoneFactory = function () {

        this.firstName = 'Robert';
        this.lastName = 'Dupont';


        this.getName = () => {
          return `${this.firstName} ${this.lastName}`
        }

        return this;
      };

      // TEST
      const someone = someoneFactory();
      const name = someone.getName();

      // EXPECT
      expect(name).toBe('Robert Dupont');
    });
  });
})

