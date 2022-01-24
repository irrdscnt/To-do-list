/* for (let i = 1; i <=20; i++) {
    if (i%3==0) {
        console.log('fizz')
    }
    else if (i%5==0) {
        console.log('buzz')
    }
    else{
        console.log(i)
    }
} */
const num=[1,2,3,4,5]
//console.log(num.pop())
//console.log(num)
/* console.log(num.unshift(8,7,9))
console.log(num)
console.log(num.shift())
console.log(num) */
/* console.log(num.slice(3))
console.log(num)
console.log(num.splice(2,3,5,5))
console.log(num)
console.log(num.push('dd'))
console.log(num)
console.log(0/0) */


class Worker{
    constructor(name='',job='',wage=0,numbDay=0){
        this.name=name
        this.job=job
        this.wage=wage
        this.numbDay=numbDay
    }
    howmuch=function(){
        const a=this.wage*this.numbDay
        console.log(a)
    }
}
const worker1= new Worker('adsjfvs','djncj',150,5)
worker1.howmuch()
console.log(typeof(null))
console.log(typeof(null))
console.log(typeof(null))
