const nums = [3,1,5,2,3,67,33,12,4,6,9,22,86,23,2]

function bubbleSort(nums) {
    for(let i = 0; i < nums.length - 1; i ++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
}