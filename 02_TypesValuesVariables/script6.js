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
//console.log(msg);
return msg;
}
//console.log(msg); อ้างถึงนอกปีกกาไม่ได้ error
console.log(std);
console.log(doSometing());

let po = 50;
// let po = 'int201'; redecalre ไม่ได้
//update ได้
po = 'Mhai';
console.log(po);

const mo = 40;
// update and re-seclare ไม่ได้ mo = 70;
console.log(mo);

//if/else
function test(a){
let result;
if(a < 0){
    result = 'Not positive';
}else if(a == 0){
    result = '0';
}else{
    result = 'positive';
}
return result;
}

console.log(test(10));
console.log(test(0));
console.log(test(-5));

// for
function testTwo(){
    let f = 0;
    for(let i = 0; i < 10; i++){
        f = f + i;
        console.log(i);
    }
    return f;
    //console.log(f);
}
console.log(testTwo());

//for-of ใช้คู่กับ array
function testThree(){
    let array = [1,2,3,4,5,6];
    for(let e of array){
        console.log(e);
    }
}
testThree();

// for-in วนลูป obj
function testFour(){
const person = {
    name : 'Mhai',
    age : 19 ,
    gender : 'female',
}
    for(let key in person){
        console.log(key,' : ',person[key]);
    }
}
testFour();


