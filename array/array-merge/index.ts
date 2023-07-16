//  let us merge two array
//@ts-ignore
let array1:Array<number>=[1,2,3,4,5,6];
//@ts-ignore

let array2:Array<number>=[7,8,9,10];
//@ts-ignore

let array3:Array<number>=[];
for(let i:number=0;i<array1.length;i++){
  array3[i]=array1[i]
}
for(let i:number=0;i<array2.length;i++){
    array3[array1.length+1]=array2[i]
}

console.log(array3);


