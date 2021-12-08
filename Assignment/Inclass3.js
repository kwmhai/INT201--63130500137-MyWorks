//1.

/*function getCourse() {

  return 'INT201 Client Side Programming I';}*/

const course = () => 'INT201 Client Side Programming I';
console.log(course());
//2.

/*function echo(text) {

  return text;}*/
  let text = text => text;
  console.log(text('Hello'));
//3.

function isKMUTTStudent(student) {

  if (student.id.length == 13) return true;

  else return false;
}
console.log(isKMUTTStudent(63130500137));


//let studentId = student => student.id.length == 13
     

//console.log(studentId(123456789555));
  
//4.

/*function sum(num1, num2, num3) {

  return num1 + num2 + num3;}*/
   
let num = (num1, num2, num3) => num1 + num2 + num3;
console.log(num(10, 10, 10));
//5.

/*function greetingSomeOne(name) {

  const greeting = ['hi', 'hello', 'hey'];

  return `${greeting[Math.floor(Math.random(3))]}, ${name}`;

}*/
let nameMhai = name => {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}
console.log(nameMhai('mhaiiooo'));
//console.log(name());