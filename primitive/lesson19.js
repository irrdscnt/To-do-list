//reduce(),practice,Math,Date

/* const numbers=[1,2,3,4,'10',5]
const result=numbers.reduce((acc,item)=>{
    if (!isNaN(+item)){
        return acc+item
    }else{
        return acc
    }
})
console.log(result) */

/* const numbers=[1,2,'neobis',3,4,'10$',5]
const result=numbers.reduce((acc,item)=>!isNaN(+item) ? acc+ +item:acc)
    
console.log(result) */

/* const numbers=[1,2,'neobis',3,4,'10$',5]
const result=numbers.reduce((acc,item)=>acc+ (+item|| 0))
    
console.log(result)*/

const users=[
    {name:'adilet',age:20,login:'mndjkfghjmhgf',pass:'sd665'},
    {name:'samat',age:25,login:'atik78',pass:'00000556'},
    {name:'akyl',age:23,login:'ascva6',pass:'hsla8'},
    {name:'beksultan',age:17,login:'ndskj',pass:'656623'},

]
//console.log(users[Math.round(Math.random()*users.length-1)])
/* const usersTotalAge=users.reduce((acc,item)=>acc+item.age,0)
    //console.log('acc:',acc,'','item:',item)
    //return acc+item.age,0
console.log(usersTotalAge) */

//Math
//console.log(Math.PI)
//console.log(Math.round(Math.random()*10))

//date
/* console.log(Date.now())

const date=new Date(2001,8,11,16)
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay()) */

const date=new Date()
console.log(date)
console.log(date.getDay())