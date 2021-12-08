let letters = [...'Hello world']; // An array of letters spread อยู่กับ string จะเป็นการแยก string ออกแต่ละตัว
let msg = '';
for (let ch of letters) {
  msg += ch + ', ';
}
console.log(msg);

let value = '';
for (let [index, letter] of letters.entries()) { //.entries() ออกมาเป็น key กับ value 1 : H
  if (index % 2 === 0) value += letter; // letters at even indexes
}
console.log(`value: ${value}`); // "Hlowrd"

let x = 3;
let y = 4;
[x, y] = [y, x]; // เอา x = y = 4 แล้วก็เอา y=x =3
console.log(x);
console.log(y);
