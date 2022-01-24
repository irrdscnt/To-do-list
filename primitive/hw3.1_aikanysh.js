// 1: Выведите столбец чисел от 11 до 33.
for (let i=11;i<=33;i++){
    console.log(i);
}

let i=11
while (i<=33) {
    console.log(i)
    i++
}
// 2  Выведите столбец четных чисел в промежутке от 0 до 100.
for (let i=2;i<=100;i+=2){
    console.log(i)
}

let b=2
while (b<=100) {
    console.log(b)
    b+=2
}
// 3 С помощью цикла найдите сумму чисел от 1 до 100.

let sum = 0;
let a=1
while(a <= 100) {
sum += a;
a++;
}
console.log(sum);

let sum1 = 0;
for (let n = 1; n <= 100; n++) {
sum1 += n;
}
console.log(sum1)

// 4: Даны числа от 1 до 10.Найти факториал каждого числа.
let fact=1
n=10
for (let i =1;i<=n;i++) {
    console.log(fact*=i);
}

// 5 Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
let arr=[
    1,2,3,4,5,6,7,8,9
]
let c=''
for (let i = 0; i < arr.length;i++ ) {
    c+='-'+arr[i]
}
console.log(c+'-');

// 6 Переберите массив и выведите в консоль имена тех пользователей, возраст которых превышает 18 лет
const users = [
    { name: 'Bakyt', age: 17, job: 'Student' },
    { name: 'Erjan', age: 21, job: 'Student' },
    { name: 'Gulzada', age: 18, job: 'Student' },
    { name: 'Aizada', age: 20, job: 'Student' },
]
for (let member of users){
    if (member.age>=18) {
        console.log(member.name)   
    }
}
