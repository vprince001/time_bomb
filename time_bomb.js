let countDown = +process.argv[2];
let lib = require('say');
const blast = "BOOM";

let timeSync = 1;
for (let count = countDown; count > 0 ; count--) {
  setTimeout( ()=> {lib.speak(count); console.log(count); }, 1000*timeSync );
  timeSync++;
}
setTimeout( ()=>{lib.speak(blast,"alex");console.log(blast);}, 1000*timeSync);
