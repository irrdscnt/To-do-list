// 1
const numb =[1,2,3,4,5,6]
function revnum(arr){
    let a=[]
    for (i = 0;i<arr.length ;i++) {
        a[i] = arr[(arr.length - 1) - i]
    }
    console.log(a);
}
revnum(numb) 


// 2
let str='zakaz'
function isPal(str){
    let reversed = str.split('').reverse().join('')
    if (reversed==str){
        console.log(true)
    }else{
        console.log(false)
    }
}
isPal(str) 

// 3
const numbers=[1,2,3,4,5]
function Unshift(array,item){
    for (let i = array.length-1; i >=0; i--){
        array[i+1]=array[i];
    }
    array[0]=item;
    console.log(array)
}
Unshift(numbers,59) 
