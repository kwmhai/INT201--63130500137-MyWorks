let num = [];
    for (let i = 0 ; i < 3; i++){
       num[i] = Math.floor(Math.random()*100)+1;
       
    } 
    console.log("random " + num);


function sum(){
    let sum = 0;
    for(let i = 0; i< num.length; i++){
        sum += num[i];
    }
    return sum;
}
console.log("sum : " + sum());
function min(){
    minNum = num[0];
    for(let i = 0; i< num.length; i++){
        if(minNum > num[i]){
            minNum = num[i];
        }
    }
    return minNum;
}
console.log("min : " + min());
function max(){
    maxNum = num[0];
    for(let i = 0; i< num.length; i++){
        if(maxNum < num[i]){
            maxNum = num[i];
        }
    }
    return maxNum;
}
console.log("max : " + max());

