function moneyPromise(money){
    let somphorsPromise=new Promise(function(resolve, reject){
        if(Number(money) && money>99999){
            resolve("The deal has been close.")
        }
        else{
            reject(new Error("One of Somphors men has been killed by Monirith"))
        }
    })
    return somphorsPromise
}
let resultDeal=moneyPromise("100000")
resultDeal.then((result)=>{
    console.log("result:"+result)
})
.catch((err)=>{
    console.log(err.message)
})