console.log(typeof[1,2,3]) //6 q
function test(){}
console.log(typeof test) // function 

// number-явное, + - неявное преобразование 2 вопрос типы преобразования
// что происходит при переводе непримитивный тип данных в примитивный тип данных(переводит в стринг)
//!! -неявное,boolean-явное 

console.log(!!-Infinity)
console.log(!![])

//nan + что угодно = NaN
console.log(NaN+{})
console.log(NaN+'cvdvd')
console.log({}+{})

const numbers=[1,2,3,4,5,6,7]
//console.log(numbers[6])
console.log(numbers[numbers.length-1])
console.log(numbers.pop()) // delete and give back the last element 
console.log(numbers.shift()) // the first element
// splice and slice

// i=0 nachal'noye znachenie ,i net svoei oblasti vidimosti v while ,nach.znachenie nuzhno zadavat' v while

const arr=['hello','summer',1,'world',10,'js',15,21,'=',true,'true'] //off po indexam,in p
for (let i=0;i<arr.length;i++){
    //console.log(arr[i],typeof arr[i],typeof typeof arr[i])
    if(typeof arr[i]=='number'){
        console.log(arr[i])
    }
}

//16 
const teachers=[
    {name:'Adilet',age:20},
    {name:'Arslan',age:26},
    {name:'Aktan',age:21},
    {name:'Dean',age:25},

]
let total=0
for ( let i=0;i<teachers.length;i++){
    total+=teachers[i].age
}
console.log(total)
//console.log(total/teachers.length)

const group ={
    number:'js-10/21',
    student:['Abdullah','yasmina','bakyt']
}
group.info=function(){
    console.log('В группе'+this.number+'uchitsya'+this.students.length) // ${this.number} 
}
group.teacher={
    name:'Adilet',
    age:20,
    prof:'js-teacher',
}

// 20 question 
const example='hello123world92'

function sumFromStr(str){
    let total=0
    for (let  i = 0;  i < str.length;  i++) {
        if (!isNaN(+str[i])){
                total+=+str[i]
        }
    }
    return total
}
console.log(sumFromStr(example))










/* if(randomNum==1){
    console.log(words[1])
}else if (randomNum==2){
    console.log(words[2])
}else if(randomNum==3){
    console.log(words[3])
}else if(randomNum==4){
    console.log(words[4])
}else if(randomNum==5){
    console.log(words[5])
} */