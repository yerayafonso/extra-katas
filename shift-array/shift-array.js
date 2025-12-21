// Given an integer array "nums", rotate the array to the right by k steps, where k is non-negative

function shiftArray(nums, k) {
  let newArray = [];
  const n = nums.length;
  if (k > n) {
    k = k - n;
  }
  for (let i = 0; i < n; i++) {
    const index = (n - k + i) % n;
    newArray.push(nums[index]);
  }
  return newArray;
}

console.log(shiftArray([1, 2, 3, 4, 5, 6, 7], 3));

module.exports = shiftArray;
