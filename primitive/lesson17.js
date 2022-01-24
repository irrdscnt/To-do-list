//const numbers=[1,2,3,4,5]

/* numbers.map((item)=> {
    console.log(item)
}) */

/* for (let i=0;i<numbers.length;i++){
    log(numbers[i])
} */
//коллбэк функция-это функ. которая передается аргументом в другую функцию
/* function log(item){
    console.log(item)
    return item*10
} */
/* const numbers1= numbers.map(log)

console.log(numbers)
console.log(numbers1) */

/* function mulTo2(number){
    return number*2
}

const numbersInput=[1,2,3,4,5] */

/* const numbersOutput=numbersInput.map((number) =>{
    return number*2
}) */

/* console.log('input:',numbersInput)
console.log('output:',numbersOutput) */
//методы это функции которые закреплены за чем-либо

/* const arr1=[true,1,'hello',192,false,null]

const arr2=arr1.map((item,i)=> {
    if(i!=arr1.length-1){
        if (typeof item=='number'){
            return item*10
        }
        return item
    }
})

console.log(arr2) */

const users=[
    {name:'Adilet',age:18,job:'teacher js'},
    {name:'Atai',age:16,job:'front dev'},
    {name:'Dima',age:17,job:'ux/ui'},
    {name:'chyn',age:21,job:'teacher java'},
]

//const adilet=users.filter(user=>user.id==1)[0]
//console.log(adilet)

const users1=users.filter(user=>user.age>=18)

console.log(users1)

//const adilet=users.filter(user=>user.name=='Adilet')
/* const adilet2=users.find(user=>user.id==0) //почему айди не работает
console.log(adilet2)*/





/* const users1=users.map(user=>user)

const userNames=users.map(user=>user.name)
const userAges=users.map(user=>user.age)
const userJobs=users.map(user=>user.job)


console.log(users1)
console.log(userNames)
console.log(userAges)
console.log(userJobs) */




