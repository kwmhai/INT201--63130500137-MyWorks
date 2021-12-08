const friends =[
    {fullname: 'Mhai ii', address : 'Bangkok, Thailand'},
    {fullname: 'Fai ii', address : 'Bangkok, USA'}
];

function  getFullName(name, surname){
 return name + surname;
}
function  getFriendName(name, surname, friendNameFN){
    //return friendNameFN(name, surname);
    return new Promise((resolved, rejected) => {
        const friendFullName = friendNameFN(name,surname);
        resolved(friendFullName);
    });
   }

function getAddress(friendFullName){
    return new Promise((resolved,rejected) => {
const myFriend = friends.find(
    (e)=> e.fullname === friendFullName
);
if(myFriend === undefined){
    rejected(new Error('cannot find'));
    return;
} 

resolved(myFriend.address);
});
}

getFriendName('Mhai','ii',getFullName)
.then((friendName) => {
console.log(friendName);
return friendName;
})
.then((friendFullName)=>{
    const addr = getAddress(friendFullName);
    console.log(addr);
})
.catch((err) => console.log(err));

