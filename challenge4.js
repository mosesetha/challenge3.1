function sumAsync(callback,num1,num2){
    setTimeout(function(){
        let result = num1 +num2
        console.log(result);
        callback()
    })
}

function addition(result){
    console.log(result);
}

sumAsync(addition,5,5);