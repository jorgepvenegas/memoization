
// Basic fibonacci
const fibonacci = n => {
  if (n <= 1) {
    return n
  }
  else {
    return normalFib(n - 1) + normalFib(n - 2);
  }
}


// Fibonacci with memoization
const memoFibonacci = () => {
  let memo = {};
  const fib = n => {
    if (n in memo) {
      return memo[n];
    }
    else {
      if (n <= 1) {
        return n;
      }
      else {
        memo[n] = fib(n - 1) + fib(n - 2);
      }
      return memo[n];
    }
  }
  return fib;
}

module.exports = {
  fibonacci,
  memoFibonacci
};