function sum(num1,num2,cb) {
    cb()
    console.log(num1+num2);
}
function argFun(){
console.log("Hello world");
}
sum(200,400,argFun)
