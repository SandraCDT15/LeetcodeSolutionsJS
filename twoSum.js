function twoSum(nums, target) {
  let solution = [];

  for(let i = 0; i < nums.length; i++){
    for(let j = 1; j <= nums.length; j++){
      if(nums[i] + nums[j] === target && i !== j && i < j) solution = [i,j];
    }
  }

  return solution;
};
