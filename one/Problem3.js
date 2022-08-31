function fact(num){
    let a=1;
    while(num>1){
        a=a*num;
        num--;
    }
    return a;
}

let factorial=fact(4);
console.log(factorial);