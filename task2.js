function fakeApiCall() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data fetched from API");
        }, 2000);
    });
}

async function awaitCall() {
    const data = await fakeApiCall();
    console.log(data);
}

awaitCall();
