function apiCall1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data from API 1"), 2000);
    });
}

function apiCall2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data from API 2"), 2000);
    });
}

async function concurrentRequests() {
    const results = await Promise.all([apiCall1(), apiCall2()]);
    console.log(results);
}

concurrentRequests();
