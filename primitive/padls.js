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
if (i%3) {
    console.log('Fizz')
}
else if (i%5) {
    console.log('Buzz')
}
else{
    console.log(i)
}
/* const stroka=str.split('')
    console.log(stroka)
    const rev=stroka.reverse()
    console.log(rev)
    const reversed=rev.join('')
    console.log(reversed,typeof(reversed)) */