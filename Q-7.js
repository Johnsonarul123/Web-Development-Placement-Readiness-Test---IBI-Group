// Q-Use Array.reduce() method to reverse the following given array
// const arr = [1, 2, 3, 4, 5]

// Answer-

const arr = [1, 2, 3, 4, 5];

const reversedArr = arr.reduce((acc, curr) => {
  // Insert each element at the beginning of the accumulator array
  acc.unshift(curr);
  return acc;
}, []);

console.log(reversedArr); // Output: [5, 4, 3, 2, 1]
