const users = [
    { name: 'Adilet', age: 20, login: 'amaterasuuuu', password: 'admin123' },
    { name: 'Samat', age: 25, login: 'kotoamatsukami', password: '12345678' },
    { name: 'Akyl', age: 23, login: 'chidori', password: '87654321' },
    { name: 'Beksultan', age: 17, login: 'izanami', password: '123admin' },
]
//1
const users1=users.map(item=>{
    const cont={}
    cont.name=item.name
    cont.age=item.age
    cont.login=item.login
    return cont
    })
console.log(users1)  

//2
const isAdult=users.filter((user)=>user.age>=18 && user.login.length>8)
console.log(isAdult) 

//3
const arr=users.filter((user)=>user.name.includes("s"))
console.log(arr)  

