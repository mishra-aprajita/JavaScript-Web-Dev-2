// setInterval() Example
let count = 0;

const interval = setInterval(() => {
    count++;
    console.log("Running every 1 second:", count);

    // Stop after 5 times
    if (count === 5) {
        clearInterval(interval);
    }
}, 1000);