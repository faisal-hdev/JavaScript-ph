// types of function

// no parameter, no return
// no parameter, but return
// parameters, but no return
// parameters, return

// no parameter, no return
function fun1(params) {
  console.log("no parameter, no return");
}
fun1();

// no parameter, but return
function fun2() {
  return 5;
}
console.log(fun2());

// parameters, but no return
function fun3(name) {
  console.log(name);
}
fun3();

// parameters, return
function fun4(x, y) {
  const z = x * y;
  return z;
}

const z = fun4(4, 4);
console.log(z);
