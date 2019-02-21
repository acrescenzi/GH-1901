// UTILITY FUNCTIONS

const utils = {};

utils.getInitials = str => {
  return str.split(' ')
  .map(word => word[0])
  .join('')
  .toUpperCase();
};

utils.generateGroups = (arr, size) => {
  const groups = [];
  for (let i = 0; i < arr.length; i += size) {
    groups.push(arr.slice(i, i + size));
  }
  return groups;
};

// // functional recursive solution
// utils.generateGroups = (arr, size) => {
//   const takeSize = someArr => someArr.slice(0, size)
//   const dropSize = someArr => someArr.slice(size)
//   return go({ result: [], next: arr })
//   function go ({ result, next }) {
//     if (!next.length) return result
//     return go({
//       result: [...result, takeSize(next)],
//       next: dropSize(next)
//     })
//   }
// };

utils.throttle = (fn, wait) => {
  let lastCalled = null;
  return function (...args) {
    if (!lastCalled || Date.now() - lastCalled >= wait) {
      lastCalled = Date.now();
      fn.apply(this, args);
    }
  };
};

// // `setTimeout` solution...
// utils.throttle = (fn, ms) => {
//   let allowExecution = true
//   return function (...args) {
//     if (!allowExecution) return;
//     allowExecution = false
//     fn(...args)
//     setTimeout(() => {
//       allowExecution = true
//     }, ms)
//   }
// };

module.exports = utils;
