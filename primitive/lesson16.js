const arr =[1,2,3,4]

function ownPop(array){
    const lastItem=array[array.length-1];
    array.length--;
    return lastItem;
}
const popresult=ownPop(arr)
console.log(popresult)
console.log(arr)

const numb =[1,2,3,4,5]
function revnum(num){
    for (let i = 0; i < array.length-1; i++) {
        num=array[i];
        
    }
}// перебрать массив и добавить эл с конца
console.log('f')
const numbers1=[1,2,3,4,5]
console.log(numbers1)
const numbers2=numbers1.reverse();
console.log(numbers2)

const letters=['n','e','o']
const word = letters.join('\n')
console.log(word)


const word1='neobis is family'
const letter=word1.split(' is ')
console.log(letter)

const test=['string']
console.log(test[0].split())






/* function ownPush(arr,a){
    arr[arr.length]=+a
    console.log(arr)
}
ownPush(arr,5) */

const ownpush=(array,item) => (array[array.length]=item)
ownpush(arr,5)
console.log(arr)

//function ownPush(array,item){
  //  array[array.length]=item;
//}
/* const numbers=[1,2,3,4,5];
console.log(numbers);
numbers.length=0
console.log(numbers)
 */