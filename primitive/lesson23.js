//console.log(typeof NaN+null+'')// numbernull
/* const teachers=[
    {name:'Adilet',age:20},{name:'Arslan',age:26},
    {name:'Aktan',age:21},{name:'Dean',age:25},
]

const totalAge=teachers.reduce((a,b)=>{
    console.log('a:',a,' b:',b)
    return a+b.age
},0)//0 nachalnoye znachenie
console.log(totalAge) */

// 20
const input='hello123world92'//17

//const findnumbers=str=>str.split('').filter(el=>el==+el).reduce((a,b)=>+a+ +b).reduce((a,b)=>+a+ +b)
function findNumbers(str){
    str=str.split('')
    return str
    .filter(el=>el==+el)//(el=>+el/Number)
    .reduce((a,b)=>+a+ +b)

}
console.log(findNumbers(input))

const arr=[1,2,3,4,5,6,7,8,9,10]
arr.length=1000
arr.fill(100)
console.log(arr)
console.time('test push')
arr.shift()
console.timeEnd('test push')