// expect simple function
function MyFn() {
  return 'MyFn is called';
}

/*
//expect having a function that contains another function Myfn().init()
function MyFn() {
  function init() {
    console.log('MyFn init is called')
  }
}

//expect having a function that will execute a callback
function MyFn(anotherFn) {
  anotherFn();
}

//expect having a function that will return execute a callback
function MyFn() {

  function init() {
    console.log('MyFn init is called')
  }

  return init;
}

const anonymous = () => {}

MyFn.name;
anonymous.name
*/
module.exports = MyFn;