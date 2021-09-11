let Number = {
    random: function () { return Math.floor(Math.random() * 10) + 1; }
}
function random(guessNum) {
    this._guessNum = guessNum;
    const randomNumber = Number.random();
    console.log("เลขที่คุณเดา : "+this._guessNum);
    if ( this._guessNum > randomNumber) {
        console.log("Too High " + "เลขที่สุ่มได้ : " + randomNumber );
    } else if (this._guessNum < randomNumber) {
        console.log("Too Low "+ "เลขที่สุ่มได้ : " + randomNumber );
    } else {
        console.log("You Win! " + "เลขที่สุ่มได้ : " + randomNumber );
    }
}
random(7);

