// 1 Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str. n — по умолчанию 2,
//str —пустая строка
function repeat(str,n){
    let nstr=''
    for (let i = 0; i < n;i++) {
        console.log(nstr+=str);
    }
}
repeat('',2)


//2. Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)».
// Если аргументы не заданы, считать их равными нулю.
function rgb(){
    let x=4
    let c=6
    let y=8
    console.log('rgb('+x+','+c+','+y+')')
}
rgb()
//3.Создайте функцию max(a, b) , которая будет возвращать максимальное из двух чисел.
function  max(a, b){
    a=9
    b=5
    if(a>b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}
max()

