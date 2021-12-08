//...spread operator

let a = [1, 2, 3, 4];
let b = [10, ...a, 50];
b[0] = 3;
console.log(`b: ${b}`);
console.log(a);
console.log(`b.length: ${b.length}`);

let c = [5, 10, 15];
let d = [...c];
d[0] = 10;
console.log(`d: ${d}`);
console.log(`c[0]: ${c[0]}`);
console.log(`d[0]: ${d[0]}`);

let aa = {
    name : 'mhai',
    age : 20,
    height : 159
};

let bb = {
    id : 137,
    ...aa
};
bb.name = 'kod';
console.log(bb);
console.log(aa);
//Array() constructor
let e = new Array();
console.log(`e: ${e}`);
console.log(`e.length: ${e.length}`);

let f = new Array(10);
console.log(`f: ${f}`);
console.log(`f.length: ${f.length}`);
let g = new Array(3, 2, 1, 'testing');
console.log(`g.length: ${g.length}`);

//Array.of() ทำเป็น array
let h = Array.of();
console.log(`h: ${h}`);
console.log(`h.length: ${h.length}`);

let i = Array.of(5);
console.log(`i: ${i}`);
console.log(`i.length: ${i.length}`);

let j = Array.of(1, 2, 3);
console.log(`j: ${j}`);
console.log(`j.length: ${j.length}`);

//Array.from() เอาค่าจาก array นึงมาใส่อีก array นึงโดยที่ไม่ได้เป็นการเอา address มาด้วย เอามาแต่ value

let k = Array.from(j);
k[0] = 0;
console.log(`k: ${k}`);
console.log(`k.length: ${k.length}`);

console.log(`j: ${j}`);
