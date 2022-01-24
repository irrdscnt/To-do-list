// 1
let x=1
let y='-1'
console.log(x,typeof(x))
console.log(+y,typeof(+y))
console.log(x,+y)

// 2

let a=5
let b=6
if (a>b){
    console.log('a больше b')
}
else {
    console.log('a не больше,чем b')
}

//3

let isRed=false
let isYellow=true
let isGreen=false
if (isGreen) {
    console.log('Можно ехать');
} 
else if (isYellow) {
    console.log('Приготовьтесь');
} 
else {
    console.log('Проезд запрещен');
}

//4

let month=6
if (month<=2){
    console.log('Зима');
}
else if(month<=5){
    console.log('Весна');
}
else if(month<=8){
    console.log('Лето');
}
else if (month<=11){
    console.log('Осень');
}
else {
    console.log('Зима');
}
