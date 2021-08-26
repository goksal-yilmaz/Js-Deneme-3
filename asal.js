//13195'in asal çarpanları 5, 7, 13 ve 29'dur.
//600851475143 sayısının en büyük asal çarpanı kaçtır?

function enBuyukAsalCarpan(sayi){
	let i = 2;
	while(sayi > i){
		if(sayi % i == 0)
			sayi = sayi / i;
		else
			i++;
	}

	return sayi;
}

let start = Date.now();
let x = 600851475143;
const sonuc = enBuyukAsalCarpan(x);

console.log(x + " sayısını bölen en büyük asal sayı : " + sonuc);

let end = Date.now();
console.log("Hesaplama süresi : ", (end - start)/ 1000);