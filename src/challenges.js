/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);// passes each element in arr to cb
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
};

const map = (elements, cb) => {
  const newArr = [];// new array to store new data
  for (let i = 0; i < elements.length; i++) {
    newArr.push(cb(elements[i]));// push the value returned by cb at element index
  }
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  return newArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  let counterN = 0;
  return () => { // need to loop n number of times
    if (counterN < n) {
      ++counterN;
      return cb();
    }
  };
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => { // how in the hell?
  if (str === '') {
    return '';// ends recursion returns string
  } else {
    return reverse(str.charAt(0));
  // if there are no more values, return no more str chars
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
};

const flatten = elements => {
  const newArr = [];
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] instanceof Array) {
      // what do I want to do if its an array, merge them with what? OH, .CONCAT
      newArr.concat(flatten(elements[i]));
    } else {
      newArr.push(elements[i]); // does what map does, but does not handle array elements in arrays
    }
  }
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  return newArr;
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
