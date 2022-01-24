// 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum=0
for (let key in salaries) {
    sum=sum+salaries[key];
}
console.log(sum)

// 2
let menu = {  
    width: 200,
    height: 300,
    title: "My menu"
}
for (let key in menu){
    if(typeof menu[key]=='number'){
        console.log(menu[key]*2)
    }
    else{
        console.log(menu[key])
    }
}
    
