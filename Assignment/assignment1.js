let number = [];
for(let i =0; i<3; i++){
    number[i] = Math.floor(Math.random() * 100) + 1; // Math.random() * 100 มันจะ return ค่าออกมาคือเริ่มที่ 0-99 ซึ่งเราต้องการ 1-100 ไม่ต้องการ 0 ก็เลย + 1 ไป
}
console.log("RandomNumber : " + number);

   /* let sumNumber = number.reduce((sum, nums) => {

        return sum + nums;

        });
console.log('Sum : '+sumNumber);*/
function sum(){
    let sum = 0;
    for(let i = 0;i<number.length;i++){
        sum = sum + number[i];
    }
    console.log(sum)
}
sum();


function min(){
    let minNumber = number[0];

    for(let i = 0; i<number.length;i++){
    
        if(minNumber > number[i]){
    
            minNumber = number[i]    
        }   
    }    
   console.log('Min : '+minNumber);
}
min();

function max(){
let maxNumber = number[0];
for(let i = 0; i<number.length;i++){
    if(maxNumber < number[i]){
        maxNumber = number[i]
    }
}
    console.log('Max : '+maxNumber);
}
max();

