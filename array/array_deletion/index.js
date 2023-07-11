// let us define an array
let data=[1,2,3,4,5];

// now we have to delete 3
let position=2;
for(let i=0;i<data.length;i++){
if(i==position)
{
    data[i]=data[i+1];

    
}
if(i>position)
    {
    let temp;
    temp=data[i];
    data[i]=data[i+1];

    


    }
}
data.length=data.length-1



console.log(data)