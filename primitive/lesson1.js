//console.log('Hello World')
//console.log('20' + 10) //string+ number = string
//console.log('10'- 20) //string - number = number
let name = 'Aikanysh'
let age = 19
let city = 'Bishkek'

console.log(name)

// discriminant
let y= a*x^2 + b*x + c
let discriminant= b*b-4*a*c
if (discriminant>0){
    x = (-b + Math.sqrt(discriminant)) / (2 * a);
    x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(x +' '+ x1)
}
else if (discriminant == 0) {
    x  = -b / (2 * a);
    console.log(x);
}
else {
    console.log('no roots')
}