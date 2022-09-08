function pat(){
    let a=1;
    let res="";

    for (let i=1;i<5;i++){
        for(let j=1;j<=i;j++){
            //console.log(a);
            res=res+a+" ";
            a++;
        }
        console.log(res);
        res="";


    }

}
pat();