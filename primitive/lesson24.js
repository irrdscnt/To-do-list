//spread,rest

const numbers=[1,2,3,4,5]
const letters=['a','b','c','d','e']
const symbols=['/','%','-','#','@']

//const arr=[numbers,letters]
//console.log(arr)
//console.log(arr[1][0])

/* const arr2=[]

function pushItems(arr=[],items=[]){
 for (let item of items){
     arr.push(item)
    }
}
pushItems(arr2,numbers)
pushItems(arr2,letters)
pushItems(arr2,symbols)
console.log(arr2)
*/


/* const arr1=[numbers,letters]
const arr3=[...numbers,...letters,...symbols] // spread operator
console.log(arr1)
arr3.push(...symbols)
console.log(arr3)


const arr4=numbers.concat()
arr4.push(letters.concat())
console.log(arr4) */


/* let a=10
let b=20
let c=a
a=b
b=c
console.log('a:',a,'b:',b) 
c+=10
console.log('a:',a,'b:',b)  */


/* const numbers1=[1,2,3,4,5]
const numbers2=numbers1
console.log(numbers1,numbers2,numbers2==numbers1)
numbers1.push(6,7,8)
console.log(numbers1,numbers2,numbers2==numbers1) */

const person1={
    name:'adilet',
    age:20,
    job:'js instr',
    test:{a:10,b:20}
}
const person2={
    hobby:'volleyball',
    birthday:'19-05',
    age:21
}
const person3={...person1,...person2}
console.log(person3)
Object.assign(person1,person2)
console.log(person1)
// js object notation
/* const person2=JSON.parse(JSON.stringify(person1))
person2.name='andrei' */

/* const person2={...person1}
person2.name='andreiii'
person2.test.b=50
console.log(person1)
console.log(person2) */


/* function sum(){
    return Object.values(arguments)
    .filter(item=>item==+item)
    .reduce((a,b)=>+a + +b)
}

console.log(sum(2,3,4,5,6))
 */
