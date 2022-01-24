//v chem raznitsa null nan undefined empty object
console.log(typeof(null))
console.log(typeof(NaN))
console.log(typeof(undefined))
console.log(true+true/2)
console.log(NaN+null+' ')

//15
const mas=['hello','summer',1,'world',10,'js',15,21,'true',true]
let nums=mas.filter(function(num){
    return typeof num=='number'
    })
console.log(nums)

/* let age=15
switch(true){
    case age>=18:
        console.log('user is adult')
    break
    case age<18:
        console.log('user is child')
    break
} */
//16
const massive=[
    {name:'al',age:19},
    {name:'va',age:20},
    {name:'l',age:5},
    {name:'j',age:15},
]
console.log(massive)
let ages=mas.map(function(){
    let total=0
    return total+=massive.age
    })
console.log(ages)