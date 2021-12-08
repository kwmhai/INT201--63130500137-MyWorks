let str1 = 'Hello';
let str2 = 'hello';
console.log(`str1 === str2 is ${str1 === str2}`); //false
console.log(`str1 < str2 is ${str1 < str2}`); //true
console.log(`str1 > str2 is ${str1 > str2}`); //false
console.log(`str1.length = ${str1.length}`); //5
console.log(
  `str1.toLowerCase === str2.toLowerCase is ${
    str1.toLowerCase === str2.toLowerCase
  }`
); // true (=== คือ strict equality)
console.log(`str1.charAt(str1.length-1) = ${str1.charAt(str1.length - 1)}`); //o (length - 1 คือตัวสุดท้าย)
console.log(`str1.charAt(str1.length-2) = ${str1.charAt(str1.length - 2)}`);//l
console.log(`str1.charAt(str1.length-3) = ${str1.charAt(str1.length - 3)}`);//l
console.log(`str1.charAt(str1.length-4) = ${str1.charAt(str1.length - 4)}`);//e
console.log(`str1.charAt(str1.length-5) = ${str1.charAt(str1.length - 5)}`);//h
console.log(`str1.charAt(str1.length) = ${str1.charAt(str1.length)}`); //ไม่มีตัวอักษร
