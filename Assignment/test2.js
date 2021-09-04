
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