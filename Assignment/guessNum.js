let random = Math.floor(Math.random() * 10) +1;
//console.log(random);

function guessNumber(number){
    let random = Math.floor(Math.random() * 10) +1;
    if(number > random){
        return "Too high " +"Number of random "+ random;
    }else if(number < random){
        return "Too low "  +"Number of random " + random;
    }else{
        return "You Win! "  +"Number of random " + random;
    }

}

console.log(guessNumber(2));

function ran(){
    return Math.floor(Math.random()*10)+1;
}
const numRan = ran();
number = 6;
if(number > numRan){
    console.log("Too high " +"Number of random "+ numRan);
}else if(number < numRan){
    console.log("Too low "  +"Number of random " + numRan);
}else{
    console.log("You Win! "  +"Number of random " + numRan);
}



