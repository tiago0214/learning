function saber (a,b,c){
    
    if(a==b && b==c){
        console.log('equilatero')
    }
    else if(a==b || a==c && b!=c){
        console.log('isocoles')
    }
    else if (a!=b && a!=c && b!=c){
        console.log('Escaleno')
    }
}
saber(1,2,3)
saber (1,1,1)
saber(1,2,1)


