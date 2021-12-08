const friends = [
  { fullname: 'Paul Lee', address: 'Bangkok, Thailand' },
  { fullname: 'Yoko Naree', address: 'Kyoto, Japan' }
];

function getFullName(name, surname) {
  return `${name} ${surname}`;
}

function getFriend(name, surname, callback) {
  return new Promise((resolve, reject) => {
    const fullname = callback(name, surname);
    resolve(fullname);
  });
}

function getAddress(fullname) {
  return new Promise((resolve, reject) => {
    let myFriend = friends.find((friend) => friend.fullname.includes(fullname));

    if (myFriend === undefined) {
      reject(new Error('your friend was not found'));
    }

    resolve(myFriend.address);
  });
}
//1. using promise.then() method
const myFriendAddr = getFriend('Paul', 'Lee', getFullName) //เรียกใช้ฟังก์ชัน getFriend ส่งพาราไป 3 ตัว ก็ไปทพที่ฟังชั่นนี้ พอทำเสร็จ
//ก็จะส่ง resolve มาตัวนึง แลพมาทำต่อที่ then 
  .then((fullName) => {
    console.log(fullName);
    return fullName; // ได้ตัวแปรมาอันนึงส่งให้ then ถัดไป
  })
  .then((friendName) => {
    console.log(friendName);
    getAddress(friendName).then((friendAddr) => console.log(friendAddr));//เรียกใช้ getAddress ได้ resolve มาให้ then แสดงที่อยู่
  })
  .catch((error) => {
    console.log(error);
  });

//2. using async/await
// (add async in front of getAddress and getFriend)

// async function test() {
//   const friendName = await getFriend('Paul', 'Lee', getFullName);
//   console.log(friendName);
//   const friendAddr = await getAddress(friendName);
//   console.log(friendAddr);
// }
// test();
