function sum(num1,num2){
    let promise=new Promise(function(resolve, reject){
        if(!(isNaN(num1) || isNaN(num2))){
            resolve("The result is:"+(num1+num2))
        }
        else{
            reject(new Error("Input must be a number!...."))
        }
    })
    return promise
}
// let resultCheck=sum(10,20)
// resultCheck.then((result)=>{
//     console.log("result:"+result)
// })
// .catch((err)=>{
//     console.log(err.message)
// })

let resultCheck1=sum("","")
resultCheck1.then((result2)=>{
    console.log("result:"+result2)
})
.catch((err)=>{
    console.log(err.message)
})