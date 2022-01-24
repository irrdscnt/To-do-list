//function test(){
   // console.log('Hello Neobis')
   // let a=10
//}
//test()
let x=10
let y=20

function sum(num1,num2){
    console.log('num1:',num1,'num2:',num2)
    if (isNaN(+num1)|| isNaN(+num2)){
        console.log('vvedite chislo')
    } else {
        console.log(+num1+ +num2)
    }
}
sum('20','101')
console.log(isNaN(true))
console.log(isNaN(1+1))
console.log(isNaN(1+'1'))
console.log(isNaN(NaN))