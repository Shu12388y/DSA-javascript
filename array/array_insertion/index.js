// let us define the array
let data=[1,2,3,4,5]
//we have to insert a new element in position 3
let newValue=9;


//using for loop
let position=2;
for(let i=data.length-1;i>=position;i--){
    if(i>=position){
        data[i+1]=data[i];
        if(i==position){
            data[i]=newValue
        }
    }
   
}

// we can also use in built function

data.splice(2,0,9)
console.log(data)
// output : [ 1, 2, 9, 3, 4, 5 ]


//Now if we want to insert element in end of the array

data[data.length-1]=newValue;
console.log(data)

// output : [ 1, 2, 3, 4, 9 ]

// for(let element of data){
//     console.log(element)
// }

// output: [1,2,9,3,4,5]