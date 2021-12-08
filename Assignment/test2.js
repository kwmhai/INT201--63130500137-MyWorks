function reverse(text){
    return text.split("").reverse().join("");
}
console.log(reverse('hello  world'));


function reverse2(text){
  return text.split("");
}
console.log(reverse2('hello world'));

function reverse2(text){
  this.t = text;
  return this.t.rep;
}
console.log(reverse2('hello'));

























console.log(reverse('Hello Javascript'));
console.log(reverse2('Hello World'));
//สร้าง function ย้อนกลับ
function reverse(s) {
    return s.split("").reverse().join("");
}

function reverse2(s) {
    return [...s].reverse().join("");
}


//ใช้ for loop
 /*function reverse(s) {
    let o = '';
     for (let i = s.length - 1; i >= 0; i--)
       o += s[i];
     return o;
   }*/