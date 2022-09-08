function spec(num){

    let a=0;let k=0, p=num;
    while(num!=0){
        a=num%10;
        k=k+fact(a);
        num=Math.trunc(num/10);

    }

    if(k==p){
        console.log("Special number");
    }
    else{
        console.log("not a special number");
    }



}

function fact(num) {
    let a = 1;
    while (num > 1) {
        a = a * num;
        num--;
    }
    return a;
}

spec(145);