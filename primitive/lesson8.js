for (let i=50;i>=20;i--){
    console.log(i)
}
for (let i = 0;i <= 10;i++) {
    i==5? null:console.log(i) //за исключением 5

}
//вывести числа от 1-20. если число делится на 3 то вывести фразу
//физз если на 5 то базз
for (let i = 1; i <=20; i++) {
    if (i%3==0) {
        console.log('fizz')
    }
    else if (i%5==0) {
        console.log('buzz')
    }
    else{
        console.log(i)
    }
}