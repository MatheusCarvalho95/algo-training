// 137. Single Number II
// Medium
// Topics
// Companies

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

// Constraints:

//     1 <= nums.length <= 3 * 104
//     -231 <= nums[i] <= 231 - 1
//     Each element in nums appears exactly three times except for one element which appears once.

function singleNumber(nums: number[]) {
  const nunCount: {
    [key: number]: number;
  } = {};

  for (const number of nums) {
    nunCount[number] = nunCount[number] ? nunCount[number] + 1 : 1;
  }

  let single: string = "";

  for (const key in nunCount) {
    if (nunCount[key] === 1) {
      single = key;
      break;
    }
  }

  console.log(single);
}

singleNumber([0, 1, 0, 1, 0, 1, 99]);

function singleNumber2(nums: Number[]) {
  const ignored: Number[] = [];
  let number: Number | undefined = undefined;

  for (const num of nums) {
    if (ignored.includes(num)) {
      continue;
    }
    if (num === number) {
      number = 0;
      ignored.push(num);
      continue;
    }
    number = num;
  }

  console.log("The single number is: ", number);
  return number;
}

singleNumber2([0, 1, 0, 1, 0, 1, 99]);
