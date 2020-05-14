function celciusToFahrenheit(celcius){
    let far=( celcius * 1.8 ) + 32
    return far;
}

function limit(x, inf, sup){
    if(x>inf && x<sup){
        return x;
    }
    if(x>sup){
        return sup;
    }
    if(x<inf){
        return inf;
    }

}

function isPerfect(n){
    let i=1;
    let result=0;
    while (i<n){
    (n%i==0) ? (result += i) : result+=0;
        i++;
    }
    return (result==n);
}

function toByte(x, unit){
    switch (unit){
        case "T":
            x*= 1024;
        case "G":
            x*= 1024;
        case "M":
            x*= 1024;
        case "K":
            x*= 1024;
            break;
    }
    return x;

}

function ligne(n){
    let a ='';
    for (let i = 0; i < n; i++) {
           a +='* ';
    }
    console.log(a);
}

function carre_plein(x){
    for (let t = 0; t < x; t++) {
        ligne(x); 
    }
}

function triangle_iso(x) {
    let a='';
    for (let i = 0; i < x; i++) {
           a+='*';
           console.log(a);
    }
    
}

function carre_vide(x) {
    let a='';
    for (let i = 0; i < x; i++) {
        for (let t = 0; t < x; t++) {
            (i!=0 && t!=0 && t!=x-1 && i<x-1) ? a +=' ': a+='*'; 
        }
        console.log(a);
        a='';
    }fgfgbfhthhbrhtnth
}

function triangle_vide(x) {
    let a='*';
    let vide=' ';
    let b='';
    let v=0;
    for (let i = 0; i < x; i++) {
        if(i==0 || i==1){
            b+=a;
            console.log(b);
        }
        if (i==x-1) {
            ligne(x);
        }
        if(i!=0 && i!=1 && i!=x-1){
            b='';
            v++;
            b+=a;
            for (let y = 0; y < v; y++) {
                b+=vide;
            }
            b+=a;
            console.log(b);
        }
           
    }
}

function triangle_vide_reverse(x) {
    let a='*';
    let vide=' ';
    let b='';
    let v=x;
    for (let i = x; i > 0; i--) {
        if (i==x) {
            ligne(i);
            v+=5;
        }
        if(i!=x && i!=0 && i!=1){
            b='';
            
            b+=a;
            for (let y = 0; y < v; y++) {
                b+=vide;
            }
            b+=a;
            console.log(b);
            v--;
        }
        b='';
        if(i==0 || i==1){
            b+=a;
            console.log(b);
        }
           
    }
}

function main(){
    //ligne(25);
    //carre_plein(5);
    //triangle_iso(5);
    //carre_vide(5);
    //triangle_vide(5);
    //triangle_vide_reverse(5);
}
main();