function fact(num) {
    let a = 1;
    while (num > 1) {
        a = a * num;
        num--;
    }
    return a;
}

function isPrime(num) {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
        }
    }
    if(count==0){
        return fact(num);
    }
    // else{
    //     return false;
    // }
}

// let p=prime();
// console.log(p);

function prime(start,end){
    let fac;
    for(let i=start;i<=end;i++){

       fac= isPrime(i);
       if(fac==undefined){
        continue;
       }
       console.log(fac);

    }
    //return fac;
}

//console.log(prime(1,3))
prime(1,5);