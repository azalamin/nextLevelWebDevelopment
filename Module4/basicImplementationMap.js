// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query of API call).
// The goal is to store the results of a function call so that if the same call is made again, the result is returned from the cache instead of the running the expensive function.


const dataCache = new Map();

const expensiveTask = (id) => {
    console.log("Ran the expensive task for: ", id);

    return {
        id: id,
        data: `Some data for id: ${id}`,
        timestamp: new Date().getTime()
    }
}

const getData = (id) => {
    if (dataCache.has(id)) {
        console.log("Cache HIT for id: ", id)
        return { data: dataCache.get(id), name: 'From Get Data Cache' };
    }
    console.log("Cache MISS for id: ", id)
    const data = expensiveTask(id);
    dataCache.set(id, data);
    return data;
}
console.log(dataCache)
console.log(getData(123))
console.log(dataCache)
console.log(getData(123))