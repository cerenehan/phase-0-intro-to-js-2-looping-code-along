const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, event) {
    let birthday = [];
    event = "surprise"
    for (let i= 0; i < names.length; i++) {
        birthday[i] = 'Thank you, '+ names[i] +', for the wonderful '+event+' gift!';
        
    }
    return birthday
}
let number = 10;
function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }