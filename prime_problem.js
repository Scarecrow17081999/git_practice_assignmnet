let num=15;

count=0
    for(var x=1;x<=num;x++){
        if(num%x==0){
            count++
        }
    }
    
    count==2?console.log("Number is prime")
    :console.log("Number is not a prime")