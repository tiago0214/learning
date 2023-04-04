function ladosDoTriangulo (a,b,c){
    
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
ladosDoTriangulo(1,2,3)
ladosDoTriangulo (1,1,1)
ladosDoTriangulo(1,2,1)


