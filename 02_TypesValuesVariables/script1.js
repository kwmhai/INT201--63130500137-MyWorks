//Weakly and Dynamic Types
let value;
value = 0;
console.log(`value (line#4) is ${value} on typeof ${typeof value}`);
// update คนค่าคนละ type ได้ 
value = 'hello' + ' world';
console.log(`value (line#5) is ${value} on typeof ${typeof value}`);
// ใส่ค่า Obj 
value = new Date();
console.log(`value (line#7) is ${value} on typeof ${typeof value}`);
// ใส่ function 
value = function (num) {
  return num + num;
};
console.log(`value (line#9) is ${value} on typeof ${typeof value}`);
