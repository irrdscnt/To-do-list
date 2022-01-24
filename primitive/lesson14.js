const randomNum=5

let words=['one','two','three','four','five']
console.log(words[randomNum-1])

for (let i = 0; i <= randomNum; i++) {
    if(i==randomNum){
        console.log(words[i-1])
    }
    
}

for (number in words) {
    if(number==randomNum){
        console.log(words[number-1])
    }
    
}

const numbers={
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
}
console.log(numbers[randomNum])
//for in = zapisyvaet indexy


// switch/case

const randomnum='1'

switch(+randomnum){
    case 1:
        console.log('one')
    break
    case 2:
        console.log('two')
    break
    case 3:
        console.log('three')
    break
    default:
        console.log('numbers available only from 1 to 5')
}

const numb=2

switch(numb){
    case 1:
    case 3:
    case 5:
        console.log('odd')
        break
    case 2:
    case 4:
    case 6:
        console.log('even')
        break
}

switch(true){
    case randomNum%2==0:
        console.log('even')
    
    case randomNum%2!==0:
        console.log('odd')
}

const nummm=8
switch(nummm){
    case 0:
        console.log('vvedeno chislo 8');
    break;
    case 8:
        console.log('yes');
    break;
    case 2:
        console.log('no');
    break;
    default:
        console.log('lkjh');

}