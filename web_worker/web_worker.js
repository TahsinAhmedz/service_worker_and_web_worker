let count = 0;

// Function to increment count and send it back to the main thread
function incrementCount() {
  count++;
  postMessage(count);
}

function postMessage(count) {
  count = 0;
  console.log(count)
}

// Call incrementCount every second
setInterval(incrementCount, 1000);
