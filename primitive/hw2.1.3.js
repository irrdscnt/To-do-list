let i=1
while (i<=20) {
    switch (true){
        case i%5!=0 && i%3!=0:
            console.log(i);
            break
        case i%5==0:
            console.log('Buzz');
            break
        case i%3==0:
            console.log('Fizz');
            break
    }
    i++;
}
    

