// Basic factorial
const factorial = n => {
  if(n <= 1) { 
    return n;
  }
  return n * factorial(n-1);
}

// Factorial with memoization
const memoFactorial = () => {
  let cache = {};
  
  const factorial = n => {
    if(n <= 1) {
      return n;
    }
    else {
      if(n in cache) {
        // console.log(`* Cached value for n: ${n} = ${cache[n]}`);
        return cache[n]
      }
      else {
        cache[n] = n * factorial(n-1);
        // console.log(`> Store value for n: ${n} = ${cache[n]}`);
        return cache[n];
      }
    }
  }

  return factorial;
}

module.exports = {
  factorial,
  memoFactorial
}