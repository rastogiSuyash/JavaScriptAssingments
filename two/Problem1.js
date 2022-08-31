function triangle(a,b,c){
    if(a==b && b==c){
        console.log("Equilateral");
    }
    else if(a==b || b==c){
        console.log("isosceles");

    }
    else{
        console.log("Scaline");

    }
}

triangle(4,2,3);