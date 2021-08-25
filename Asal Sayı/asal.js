/*
while(şart){
    çalışacak kodlar
}
*/

var i=600851475143; çarpan=2;
while(çarpan<i){
    
    if (i%çarpan==0){
        i /= çarpan;
    }
    
    else{
        ++çarpan;
    }
}
console.log('600851475143 Sayısının En Asal Büyük Çarpanı = ' + çarpan);