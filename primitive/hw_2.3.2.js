//1
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
// 2
class Stroka{
    constructor(str=''){
        this.str=str
        
    }
    reversed=function(str){
        const revers=str.reverse()
        console.log(revers)
    }
}
const string=new Stroka('hgjj')
string.reversed()
