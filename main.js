// forEach uchun 15 masala:

// 1-misol

// Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.

// let num = [1, 2, 3, 4, 5, 6, 7]

// num.forEach(function(value){
//     console.log(value);
// })

// ===============================

// 2-misol

// Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring

// let number2 = [2, 4, 6, 8, 10]

// number2.forEach( function(value){
//     console.log(value ** 2);
    
// })

// ===============================

// 3-misol

// Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.

// let number3 = [2, 4, 6, 8, 10, 12]
// let arr = [];

// number3.forEach( function(value){
//     arr.push(value * 2)
// })
// console.log(arr);

// ===============================

// 4-misol

// Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.

// let number4 = [3, 4, 5, 6, 1, 7, 2, 8, 9,]

// number4.forEach( function(value){
//     if (value > 5) {
//         console.log(value);
//     }
// })

// ===============================

// 5-misol

// Har bir elementga 10 qo'shib, yangi massivga saqlang.

// let number5 = [1, 2, 3, 4, 5]
// let arr = [];

// number5.forEach(function(value){
//     arr.push(value + 10)
// })
// console.log(arr);

// ===============================

// 6-misol

// Massivdagi barcha juft sonlarni ekranga chiqaring.

// let number6 = [11, 23, 44, 5, 66, 74, 80]

// number6.forEach(function(value){
//     if (value % 2 == 0) {
//         console.log(value);
//     }
// })

// ===============================

// 7-misol

// Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).

// let arr = ['olma', 'ananas', 'apelsin', 'banan']

// arr.forEach(function(value){
//     console.log(value.split("").reverse().join(""));
    
// })

// ===============================

// 8-misol

// Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).

// let arr = ['asus', 'hp', 'macbook', 'dell']

// arr.forEach(function(value){
//     if (value.includes('a')) {
//         console.log(value);
//     }
// })

// ===============================

// 9-misol

// Massivdagi har bir elementni yangi massivga indexOf orqali indeks bilan birlashtiring.

// let element = ['asus', 'hp', 'macbook', 'dell']
// let arr = [];

// element.forEach(function(value){
//     arr.push(`${value} - ${element.indexOf(value)} `);
// });
// console.log(arr);

// ===============================

// 10-misol

// Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).

// let element = ['olma', 'acer', 'nok', 'pen']

// console.log(element.join(","));

// ===============================

// 11-misol

// Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).

// let element = ['olma', 'acer', 'uzum', 'anjir']

// element.forEach(function(value){
//     console.log(value.slice(0, 3));  
// })

// ===============================

// 12-misol

// Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing.

// let element = ['olma', 'acer', 'uzum', 'anjir']

// element.forEach(function(value){
//     console.log(value.slice(-1));
// })

// ===============================

// 13-misol

// Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).

// let element = ['ananas', 'hp', 'uzum', 'anjir']
// element.sort((a,b)=> a.length - b.length)
// element.forEach(function(value){
//     console.log(value);
// })

// ===============================

// 14-misol

// Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.

// let element = ['ananas', 'hp', 'uzum', 'anjir']
// let arr = [];

// element.forEach(function(value){
//     console.log(value + "!");  
// })

// ===============================

// 15-misol

// Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.

// let element = ['ANANAS', 'HP', 'UZUM', 'ANJIR']

// element.forEach(function (value){
//     console.log(value.toLowerCase());
// })

// ===============================

// map uchun 15 masala:

// 1-misol

// Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.

// let element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let arr = element.map(function(value){
//     return value * 2;
// })
// console.log(arr);

// ===============================

// 2-misol

// Har bir elementning kvadratini hisoblab yangi massivga saqlang.

// let number = [10, 20, 30, 40, 50]

// let arr = number.map(function(index){
//     return index ** 2
// })  
// console.log(arr);

// ===============================

// 3-misol

// Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).

// let number = [121, 22, 340, 424, 556, 6]

// let arr = number.map(function(index){
//     return index
// })
// console.log(arr.reverse());

// ===============================

// 4-misol

// Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan).

// let element = ['appartment', 'umbrella', 'hello']

// let arr = element.map(function(value){
//     return value.slice(-3)
// })
// console.log(arr);

// ===============================

// 5-misol

// Har bir elementni katta harf bilan yozib yangi massivga saqlang.

// let arr = ['appartment', 'umbrella', 'hello']

// let arr1 = arr.map(function(value){
//     return value.toUpperCase()
// })
// console.log(arr1);

// ===============================

// 6-misol

// Har bir elementga "Hello, " qo'shib yangi massivga saqlang.

// let element = ['appartment', 'umbrella', 'hello']

// let arr = element.map(function(value){
//     return value + ", Hello"
// })
// console.log(arr);

// ===============================

// 7-misol

// Har bir elementni ikki marta takrorlang va yangi massivga saqlang.

// let element = ['appartment', 'umbrella', 'hello']

// let arr = element.map(function(value){
//     return value + value
// })
// console.log(arr);

// ===============================

// 8-misol

// Har bir elementning uzunligini aniqlang va yangi massivga saqlang.

// let element = ['appartment', 'umbrella', 'hello']

// let arr = element.map(function(value){
//     return value.length
// })
// console.log(arr);

// ===============================

// 9-misol

// Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).

// let element = ['appartment', 'umbrella', 'hello']

// let arr = element.map(function(value){
//     return `${value} - ${element.indexOf(value)} `
// })
// console.log(arr);

// ===============================

// 10-misol

// Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).

// let element = ['appartment', 'umbrella', 'hello']

// let arr = element.map(function(value){
//     return (value.split("").reverse().join(""))
// })
// console.log(arr);

// ===============================

// 11-misol

// Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).

// let element = ['appartment', 'umbrella', 'hello']

// let arr = element.map(function(value){
//     return value.slice(1, -1)
// })
// console.log(arr);

// ===============================

// 12-misol

// Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).

// let element = ['appartment', 'umbrella', 'hello', 'apple']

// let arr = element.map(function(value){
//     return value
// })
// console.log(arr.sort());

// ===============================

// 13-misol

// Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.

// let element = ['appartment', 'umbrella', 'hello', 'apple']

// let arr = element.map(function(value){
//     return value.toUpperCase()
// })
// console.log(arr);

// ===============================

// 14-misol

// Har bir elementning uzunligi 5 dan katta yoki kichik ekanligini belgilang va yangi massivga saqlang.

// let element = ['appartment', 'umbrella', 'hello', 'apple']

// let arr = element.map(function(value){
//     return value.length > 5;
// })
// console.log(arr);

// domla bu misolga belgi qo'yib chiqara olmadim

// ===============================

// 15-misol

// Har bir elementdan faqat sonlarni olib yangi massivga saqlang.


// let element = [1, 'non', 3, 'nok', 6]

// let arr = element.map(function(value){
//     return typeof value === 'number'
// })
// console.log(arr);

// ===============================

// filter uchun 15 masala:

// 1-misol

// Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let arr = number.filter(function(value){
//     return value % 2 !== 0
// })
// console.log(arr);

// ===============================

// 2-misol

// Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.

// let number = [1, 2, 43, -4, 3, -2, 2]

// let arr = number.filter(function(value){
//     return value < 0
// })
// console.log(arr);

// ===============================

// 3-misol

// Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).

// let arr = ['asus', 'hp', 'macbook', 'dell']

// let arr1 = arr.filter(function(value){
//     return value.includes('a')
// })
// console.log(arr1);

// ===============================

// 4-misol

// Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.

// let element = ['appartment', 'hello', 'pen']

// let arr = element.filter(function(value){
//     return value.length > 5 
// })
// console.log(arr);

// ===============================

// 5-misol

// Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.

// let element = ['hello', 'test', 'apple', 'test']

// let arr = element.filter(function(value){
//     return value == 'test'
// })
// console.log(arr);

// domla bu misolni jindey tushunmaganim uchun to'liq ishlay -olmadim bu yerda test" so‘zini o‘z ichiga olgan elementlarni- degan ekan elementni ichiga testni qo'shib chiqarolmadim

// ===============================

// 6-misol

// Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).

// bu misolni ishlay olmadim domla savol hato berilgan  shekili

// ===============================

// 7-misol

// Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.

// let number = [1, 3, -5, 3, -2, -3]

// let arr = number.filter(function(value){
//     return value > 0
// })
// console.log(arr);

// ===============================

// 8-misol

// Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.

// let element = ['video', 2, 'nok', 9]

// let arr = element.filter(function(value){
//     return typeof value == "number"
// })
// console.log(arr);

// ===============================

// 9-misol

// Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.

// let element = [1, 2, 3, 4, 6, 7]

// let arr = element.filter(function(value){
//     return value <= 3
// })
// console.log(arr);

// ===============================

// 10-misol

// Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.

// bu misolni ham ishlay olmadim domla darsda tushunib olaman

// ===============================

// 11-misol

// Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).

// let element = ['absle', 'nok', 'absanan', 'cake', 'kon']

// let arr = element.filter(function(value){
//     return value.slice(0, 3) == "abs"
// })
// console.log(arr);

// ===============================

// 12-misol

// Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).

// let element = ['lexyz', 'nok', 'absananxyz', 'cake', 'kon']

// let arr = element.filter(function(value){
//     return value.slice(-3) == "xyz"
// })
// console.log(arr);

// ===============================

// 13-misol

// Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.

// let element = [1, 22, 33, 4, 63, 7]

// let arr = element.filter(function(value){
//     return value < 10
// })
// console.log(arr);

// 14-misol

// Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).

// let element = ['hello', 'test', 'apple', 'test']

// let arr = element.filter(function(value){
//     return value !== 'test'
// })
// console.log(arr);

