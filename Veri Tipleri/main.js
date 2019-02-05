/*
    Primitive Veri Tipleri
*/

// Numbers (Sayılar)
var a = 15;
var b = 3;

var total = a * b;

console.log(total);
console.log(typeof total);

// String (Düzenli İfade)
var ad = "Mustafa";
var soyad = "OĞUZ";

var adSoyad = ad + " " + soyad;
console.log(adSoyad);
console.log(typeof adSoyad);

// Boolean (Mantıksal Veri Tipleri)
// Örnek; Yumurta Var mı?
var yumurta = false;

if(yumurta){
    console.log("Yumurtamız Bulunaktadır.");
}
else {
    console.log("Yumurta Kalmamış...")
}

console.log(yumurta);
console.log(typeof yumurta);

// Null (Değer Yok)
var veri = null;

console.log(veri);
console.log(typeof veri);

// Undefined (Tanımsız)
var degisken;

console.log(degisken);
console.log(typeof degisken);

/*
    Object Reference Veri Tipi
*/
// Array Object
var reference = [1,2,3,4,5,6,7,8,9];

console.log(reference);
console.log(typeof reference);
console.log("Dizinin 2.ci Değeri :" + reference[1]);

// Kullanıcı Nesnesi Oluşturulduğunda
// Degisken = #164 (ram adresi)
var Kullanici = {
    "ad" : "Mustafa",
    "soyad" : "Oğuz",
    "yas" : 25
}
// Temsili kullanımı #164.ad ve #164.soyad
console.log(Kullanici.ad + " " + Kullanici.soyad);

// Diyelim ki kullanıcı nesnesi farklı bir değişken
// tarafından kullanılacak. Bu durumda Primitiv tiplerde 
// olduğu gibi nesne çoğaltılmaz.
// yeniDegisken = #164 (adresi veri olarak atanır.)
var Uye = Kullanici;
// Sonuç olarak değişken ismi değişmiş olsa da
// #164.yas olarak kullanılır.
console.log(Uye.yas);
