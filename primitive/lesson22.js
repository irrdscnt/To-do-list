class Rectangle {
    constructor(width=0,height=0){
        this.width=width
        this.height=height
    }
    findP=function(){
        const P=(this.width+this.height)*2
        console.log(P)
    }
    findS=function(){
        const S=this.width*this.height
        console.log(S)
    }

}

const rect1=new Rectangle(10,20)
console.log(rect1)
rect1.findP()
rect1.findS()

const rect2=new Rectangle(30,40)
console.log(rect2)
rect2.findP()
rect2.findS()

/* class User{
    constructor(name='',age,job,login,password){
        this.name=name
        this.age=age
        this.job=job
        this.login=login
        this.__password=password
    }
    getPassword=function(){
        return this.__password()
    }
    setPassword =function(){
        this.__password=newpassword
    }
} */


//console.log(user1.getPassword())
//user1.setPassword('newpasss')
//console.log(user1.getPassword())

class User{
    #password=null
    constructor(name='',age,job,login,password){
        this.name=name
        this.age=age
        this.job=job
        this.login=login
        this.#password=password
    }
    get password(){
        return this.#password
    }
    set password(newPassword){
        this.#password=newPassword
    }
}
const user1=new User('adilet',20,'NOde.js','amaterrasu','12345')

console.log(user1)
console.log(user1.password)
user1.password='newpass'
console.log(user1.password)

