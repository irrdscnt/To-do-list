// 1
function numbers(x,y){
    
    if(x % 2==0 && y % 2==0) {
        console.log(x*y)
    }
    else if(x % 2!=0 && y % 2!=0) {
        console.log(x+y)
    }
    else if (x % 2==0 && y % 2!=0) {
        console.log(y)
    }
}
numbers(4,2)
numbers(5,7)
numbers(2,9)
//2
let group=[
    null,2,12,undefined,'duck',19
]
function num() {
    for (let i=0;i<group.length;i++){
        if(typeof group[i]=='number'){
            console.log(group[i])
        }
    }
}
num()

// 3
function operation(m, n, o){
    if (o=='sum'){
        console.log(m+n)
    }
    else if(o=='sub'){
        console.log(m-n)
    }
    else if (o=='mull'){
        console.log(m*n)
    }
    else if (o=='div'){
        console.log(m/n)
    }
}
operation(8,7,'sub')
operation(2,4,'sum')
operation(20,4,'div')
operation(2,4,'mull')

