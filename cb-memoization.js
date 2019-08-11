// Memoization with callback

const memoize = cb => {
  let cache = {};
  return (...args) => {
    const key = args[0];
    if (key in cache) {
      // console.log(`Cached value for ${args}: ${cache[args]}`)
      return cache[key];
    }
    cache[args] = cb(...args);
    // console.log(`Calculate value for ${args}: ${cache[args]}`)
    return cache[args];
  }
}

module.exports = {
  memoize
}