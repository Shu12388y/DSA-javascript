let factor:number=5
function factorial(x:number){
    let temp=x
    temp=temp*x-1
    
    if(x>1){
        factorial(x-1)

    }
    return console.log(temp)

}

factorial(factor)