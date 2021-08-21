//let, const, var
//const cannot be updated
//let and var canbe update
//var can declare but let and const cannot be re-declared

//global scope ไม่ได้ประกาศตัวแปรอยู่ใต้ fn ใดๆ และเป็น member ของ window obj
var std = 10;
//var can declare
var std = 'Hello';
// var can update 
std = 60;
//std = 10; ถ้าไม่ประกาศตัวแปรข้างหน้า default ก็จะเป็น var
function doSometing(){
    // local scope ประกาศตัวแปรอยู่ใน fn อ้างถึงได้แค่ใต้ปีกกานี้เท่านั้น
    var msg = 'int201-JS';
console.log(msg);
}
//console.log(msg); อ้างถึงนอกปีกกาไม่ได้ error
console.log(std);
doSometing();

let po = 50;
// let po = 'int201'; redecalre ไม่ได้
//update ได้
po = 'Mhai';
console.log(po);

const mo = 40;
// update and re-seclare ไม่ได้ mo = 70;
console.log(mo);



