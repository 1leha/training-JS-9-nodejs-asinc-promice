const heder = document.querySelector('h1');

const doRed = () => {
  heder.classList.toggle('red');
};

console.log('до таймаута');

setTimeout(() => {
  console.log('внутри таймаута');
}, 2000);

console.log('после таймаута');

const blinkingTitle = (timer, stop) => {
  console.log(timer);
  const interval = setInterval(doRed, timer);
  setTimeout(() => {
    console.log('Stop blinking');
    stopBlink(interval);
  }, stop);
};

const stopBlink = funcName => {
  clearInterval(funcName);
};

blinkingTitle(500, 5000);

// Recursion call of setTimeout
function showNumber(int, num, frequency) {
  console.log(num);
  // console.log(int);
  // console.log(frequency);
  if (int <= 0) {
    return;
  }
  setTimeout(showNumber, int, (int -= frequency), (num += 1), frequency);
}

setTimeout(showNumber, 200, 200, 1, 50);
