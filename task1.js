function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function iterateWithAsyncAwait(arr) {
    for (const value of arr) {
        console.log(value);
        await delay(1000);
    }
}

// Example
iterateWithAsyncAwait([1, 2, 3, 4]);
