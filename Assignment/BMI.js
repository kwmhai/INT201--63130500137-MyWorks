function BMI(pound , inch){
const kg = pound * 0.453592;
const m = inch * 0.0254;
let bmi = kg/Math.pow(m,2);
return bmi;
}
console.log("1 "+BMI(40.25 , 40.75));
console.log("2 " + BMI(36.5 , 39));
console.log("3 " + BMI(51 , 32));