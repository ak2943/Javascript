console.log("Program Start")

const Myprom = new Promise((resolve, reject) => {

  setTimeout(() => {
    let s = Math.floor(Math.random() * 10);
    console.log(s);

    if (s % 2 == 0) {
      resolve("Even");
    }
    else {
      reject("Odd");
    }
  }, 1000)
});
function Even(res) {
  console.log("Promise Fuliled - " + res + " number");
}
function Odd(rej) {
  console.log("Promise Rejcted -" + rej + " number");
}

Myprom.then(Even, Odd);

Myprom.then((result) => {
  console.log("SuccessFull:", result);
})
Myprom.catch((error) => {
  console.error("Error:", error);
});

setTimeout(() => {
  console.log("Set Timeout call");
}, 5000)

console.log("Program End");
