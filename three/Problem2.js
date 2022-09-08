function armstrong(num) {
    let k = 0, a = 0;
    let p = num;
    while (num != 0) {
        a = num % 10;
        k = k + (a * a * a);
        num = Math.trunc(num / 10);

    }
    if (p == k) {
        console.log("number is armstrong");
    }
    else {
        console.log("not armstrong:");
    }
}

armstrong(152);