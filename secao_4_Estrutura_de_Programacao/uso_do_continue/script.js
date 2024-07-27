let x = 0;

// Os números pares não seram imprimidos. 
while(x <= 10) {
    x++;
    if(x % 2 == 0) {
        continue;
    }
    console.log(x);
    x++;
}