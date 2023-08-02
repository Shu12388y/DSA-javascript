let data:number[]=[10,2,5,34,54,674,5,9,0]

for(let i:number=0;i<data.length;i++){
    for(let j:number=0;j<data.length;j++){
        if(data[j]>data[j+1]){
            let temp:number=data[j]
            data[j]=data[j+1]
            data[j+1]=temp

        }
        
    }
}

console.log(data)