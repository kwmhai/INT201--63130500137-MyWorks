zo = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon","snake","horse", "sheep"];
year = 2001%12;
console.log(zo[year]);

function di(year){
    let y = year%12;
    let zo = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon","snake","horse", "sheep"];
    return zo[y];
}
console.log(di(2002));

function act(year) {
    let y = year%12;
    switch(y){
        case 0: console.log("monkey");
        break;
        case 1: console.log("rooster");
        break;
        case 2: console.log("dog");
        break;
        case 3: console.log("pig");
        break;
        case 4: console.log("rat");
        break;
        case 5: console.log("ox");
        break;
        case 6: console.log("tiger");
        break;
        case 7: console.log("rabbit");
        break;
        case 8: console.log("dragon");
        break;
        case 9: console.log("snake");
        break;
        case 10: console.log("horse");
        break;
        case 11: console.log("sheep");
        break;
        
    }

}
act(2001);

