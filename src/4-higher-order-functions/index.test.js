describe('Higher Order Functions', () => {
  test('should be able to know if at least one item of a list is greater than 10', () => {

    // GIVEN
    const list = [1, 5, 9, 6, 11, 7, 14, 0]

    // TEST
    const isGreaterThanTen = (nb) => nb > 10;

    /*    let containsGreaterThanTen = false;
        for (let i = 0; i < list.length; i++) {
          containsGreaterThanTen |= isGreaterThanTen(list[i]);
        }*/

    const containsGreaterThanTen = list.some(isGreaterThanTen);

    // EXPECT
    expect(containsGreaterThanTen).toBeTruthy();
  });


  test('should be able to reuse code duplication (console.log) by using a custom higher order function', () => {

    // GIVEN
    const robert = {
      name: 'Robert',
      age: 25,
      address: {
        street: 'Rue de la loi',
        number: 16
      }
    }


    // TEST
    /*    const renameUser = (user) => ({...user, name: 'Bertrand'});
        const makeUserYounger = (user) => ({...user, age: user.age - 5});
        const moveUserToAnotherLocation = (user) => ({...user, address: {...user.address, number: 2}});*/

    const logModification = (modificationFn) => (user) => {
      const result = modificationFn(user);
      console.log(`Updated user from ${JSON.stringify(user)} to ${JSON.stringify(result)} `);
      return result;
    }
    const renameUser = logModification((user) => ({...user, name: 'Bertrand'}));
    const makeUserYounger = logModification((user) => ({...user, age: user.age - 5}));
    const moveUserToAnotherLocation = logModification((user) => ({...user, address: {...user.address, number: 2}}));

    const bertrand = renameUser(robert)
    // console.log(`Updated user from ${JSON.stringify(robert)} to ${JSON.stringify(bertrand)} `);

    const youngerBertrand = makeUserYounger(bertrand)
    // console.log(`Updated user from ${JSON.stringify(bertrand)} to ${JSON.stringify(youngerBertrand)} `);

    const bertrandMoved = moveUserToAnotherLocation(youngerBertrand)
    // console.log(`Updated user from ${JSON.stringify(youngerBertrand)} to ${JSON.stringify(bertrandMoved)} `);

    // EXPECT
    expect(bertrand).toEqual({...robert, name: 'Bertrand'})
    expect(youngerBertrand).toEqual({...bertrand, age: 20})
    expect(bertrandMoved).toEqual({
      ...youngerBertrand,
      address: {
        ...youngerBertrand.address,
        number: 2
      }
    })
  });
})

