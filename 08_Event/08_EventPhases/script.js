//1. add event on all elements
 for (let e of document.querySelectorAll('*')) {
//   //Capture
   /*e.addEventListener(
     'click',
    (event) =>
       alert(`
         Capture
           1. Capturing: ${e.tagName},
           2. current target: ${event.currentTarget},
           3. target: ${event.target},
           4. event phase: ${event.eventPhase}`),

     true
   );*/ //ไป containner ก่อนที่จะมาตรงที่ที่เราคลิก ถ้าเราไปที่ p มันจะไปที่ html > body > form > div > p
   //Bubble
/* e.addEventListener(
   'click',
        (event) =>
      alert(`
        Bubble
           1. Capturing: ${e.tagName},
           2. current target: ${event.currentTarget},
          3. target: ${event.target},
          4. event phase: ${event.eventPhase}`),

     false
   );*/ // ไปตัวที่คลิกก่อนแล้วค่อยไปที่ containner เช้น ถ้าเราไปที่ p มันจะไปที่ p > form > div > body > html
 }

 /* //เอาเมาส์เข้าไปตรง p จะสีแดง
 const p = document.getElementById('p1');
 p.addEventListener('mouseover', (event) => {
   event.target.style.backgroundColor = 'red';
 });
//เอาเมาส์ออกจาก p ขะเป็นสีเขียว
 p.addEventListener('mouseout', (event) => {
     event.target.style.backgroundColor = 'green';
 });
*/
//2. add event only two elements: <p> and <div>
const p = document.getElementById('p1');
/*p.addEventListener('click', (event) => {
  alert(event.currentTarget), alert(event.eventPhase);
});*/
p.addEventListener(
  'click',
  (event) => {
    alert(event.currentTarget), alert(event.eventPhase);
  },
 true
);
const d = document.getElementById('d1');
/*d.addEventListener('click', (event) => {
  alert(event.currentTarget), alert(event.eventPhase);
});*/
d.addEventListener(
  'click',
  (event) => {
    alert(event.currentTarget), alert(event.eventPhase);
  },
  false
);
//ขึ้นอยู่กะ containner ถ้าเป็น false มันจะทำตรงที่ไปคลิกก่อนละไปที่ containner ถ้าเป็น true จะไป containner ก่อนละค่อยไปที่คลิก
