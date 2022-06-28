const memoization = fn => {
  let cache = {};
  return (...args) => JSON.stringify(args) in cache ? cache[JSON.stringify(args)] : (cache[JSON.stringify(args)] = fn(...args))
}

const timing = fn => {

  return (...args) => {
    const start = performance.now();
    const fnResult = fn(...args);
    const end = performance.now();
    console.log(`function ${fn.name} with input arguments ${args} and output ${fnResult} and performance ${end - start} miliseconds`)
    return fnResult;
  }
  
}

const myMultiply = (a, b) => a * b;

memoizedMultiply = memoization(myMultiply);
timeLogging_memoizedMultiply = timing(memoizedMultiply);
timeLogging_memoizedMultiply(1, 3);
timeLogging_memoizedMultiply(2, 4);
timeLogging_memoizedMultiply(1, 3);
