//destructuring assignment
let a, b, rest;
[a, b] = [5, 10];

console.log(a);
// expected output: 5

console.log(b);
// expected output: 10

[a, b, ...rest] = [5, 10, 15, 20, 25];

console.log(rest);
// expected output: Array [15,20,25] ได้ออกมาเป็น array

({ a, b } = { a: 10, b: 20 }); // ชื่อ key ต้องตรงกันนะ
console.log(a); // 10
console.log(b); // 20

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 2

console.log(rest); // {c: 30, d: 40} ได้ออกมาเป็น object
