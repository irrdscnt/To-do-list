function toUpperCase(text) {
    console.log(text.toUpperCase())
}
console.log(toUpperCase(('hello neo')))

const neolabs={
    'js-10/21':['Abdullah','Gulzada','begimai','bektur'],
    'js-8/21':['islam','aruuke','aibek','samat']

}
function addStudent(group,name){
    neolabs[group].push(name)
}


console.log(neolabs)
addStudent('js-10/21','Adilet')
console.log(neolabs)

////

function addStudent(group,name){
    const groups=Object.keys(neolabs)
    if (groups.includes(group)){ // dopisat'
        neolabs[group].push(name)
    } else{
        console.log('no such group')
    }
    //groups.includes(group)
    //? neolabs[group].push(name) : null
}

addStudent('js-10/21','Adilet')
console.log(neolabs)

const cat={
    name: 'barsik',
    breed:'angorka',
    meow:function(){
        console.log('meow')
    }
}
cat.meow()