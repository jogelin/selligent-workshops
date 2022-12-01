'use strict'

describe('Declarative Programming', () => {

  describe('Rather than thinking about how to do it, it relies on what to do', () => {
    test('should avoid the usage of imperative programming (loops) and use a declarative approach', () => {
      // GIVEN
      const list = [1, 2, 3, 4, 5]

      // TEST
      /*
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
          total += arr[i];
        }
        return total;
      */

      const total = list.reduce((acc, current) => acc + current, 0);

      // EXPECT
      expect(total).toEqual(15);
    });
  });

  describe('Immutability', () => {
    test('should be able to modify the value of an object', () => {

      // GIVEN
      const info = {
        name: 'Robert',
        address: {
          street: 'Rue de la Loi / Wetstraat',
          number: 16
        }
      }

      // TEST
      /*      const anotherInfo = info;
            anotherInfo.address.number = 2;*/
      const extraInfo = {
        ...info,
        address: {
          ...info.address,
          number: 2
        }
      };

      // EXPECT
      expect(info.address.number).toBe(16);
      expect(extraInfo.address.number).toBe(2);
    });


    test('should be able to remove a property of an object', () => {

      // GIVEN
      const info = {
        name: 'Robert',
        address: {
          street: 'Rue de la Loi / Wetstraat',
          number: 16
        }
      }

      // TEST
      /*      const infoWithoutAddress = info;
            delete infoWithoutAddress.address;*/
      const {address, ...infoWithoutAddress} = info;

      // EXPECT
      expect(info.address.number).toBe(16);
      expect(infoWithoutAddress.address).toBe(undefined);
    });


    test('BONUS: should force the immutability of an object', () => {

      // GIVEN
      const info = {
        name: 'Robert',
        address: {
          street: 'Rue de la Loi / Wetstraat',
          number: 16
        }
      }

      // TEST
      const anotherInfo = info;
      Object.freeze(anotherInfo);
      const mutateAddressNumber = () => anotherInfo.number = 'Another Name'

      // EXPECT
      expect(mutateAddressNumber).toThrowError();
    });
  });

  describe('Stop using mutator methods', () => {
    test('should be able to add a new element', () => {

      // GIVEN
      const list = [1, 2, 3, 4, 5]

      // TEST
      /*      const anotherList = list;
            anotherList.push(6);*/
      const anotherList = [...list, 6]

      // EXPECT
      expect(list).toStrictEqual([1, 2, 3, 4, 5]);
      expect(anotherList).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should not use for...loop for object mutation', () => {

      // GIVEN
      const list = [1, 2, 3, 4, 5]

      // TEST
      /*      const listOfIndex = Object.freeze([]);
            for (let index = 0; index < 5; index++) {
              listOfIndex.push(index);
            }*/
      const listOfIndex = Object.freeze(list.map((_, index) => index))

      // EXPECT
      expect(list).toStrictEqual([1, 2, 3, 4, 5]);
      expect(listOfIndex).toStrictEqual([0, 1, 2, 3, 4]);
    });


    test('should avoid the usages of void functions', () => {

      // GIVEN
      const list = [1, 2, 3, 4, 5]

      // TEST
      /*      function addElement() {
              list.push(6);
            }
            addElement();*/

      function addElement(array) {
        return [...array, 6];
      }

      const anotherList = addElement(list);


      // EXPECT
      expect(list).toStrictEqual([1, 2, 3, 4, 5]);
      expect(anotherList).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
  });


})

