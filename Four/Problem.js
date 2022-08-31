function matchHouse(num){
    let cal=0;
    if(num==1){
        return 6;
    }
    else{
        cal=(num-1)*5+6;
        return cal;
    }
}

console.log(matchHouse(87)) ;  