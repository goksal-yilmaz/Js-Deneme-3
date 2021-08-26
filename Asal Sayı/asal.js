
var i=600851475143; f=2;
while(f<i){
    
    if (i%f==0){
        i /= f;
    }
    
    else{
        f++;
    }
}
console.log('600851475143 Sayısının En Büyük Asal Büyük Çarpanı = ' + f + '<br>');



function asal(i=600851475143,f=2){
while(f<i){
    if(i%f==0){
        i /=f;
    }
    else{
        f++;
    }
}
document.write('600851475143 Sayısının En Büyük Asal Büyük Çarpanı = ' + f);
}
asal();

