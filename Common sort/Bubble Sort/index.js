const nums = [3,1,5,2,3,67,33,12,4,6,9,22,86,23,2]

function bubbleSort(nums) {
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - 1 - i; j++) {
            if(nums[j + 1] < nums[j]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }
}

bubbleSort(nums);
console.log(nums);