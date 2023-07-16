// ? Search a element in an array

// ? Let us define a array
//@ts-ignore
let newArray:Array<number>=[1,2,3,4,6,7,10];

//@ts-ignore
let searchElement:number=7;
let result:boolean=false
let index:number=0;

for(let i:number=0;i<newArray.length-1;i++){
    if(newArray[i]==searchElement){
            result=true;
            index=i;
            break
           
    }
    

}

if(result==true){
    console.log(`Number is found at index position ${index}`)

}
else{
    console.log("Number is not found")
}