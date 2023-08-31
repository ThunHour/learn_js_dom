// function fun1(cb) {
//   setTimeout(cb, 200);
//   console.log("hello world");
//   // cb()
// }
// function fun2() {
//   console.log("hello fun2");
// }
// setTimeout(() => {
//   setTimeout(()=>fun1(fun2));
// }, 2000);

function fun1(cb) {
  setTimeout(cb, 2000);
  console.log("hello world");
}
function fun2() {
  console.log("hello fun2");
}
const myTimeout = setTimeout(() => {
  setTimeout(() => fun1(fun2));
}, 2000);
