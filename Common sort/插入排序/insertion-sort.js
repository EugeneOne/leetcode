const nums = [3,1,5,2,3,67,33,12,4,6,9,22,86,23,2]

function insertionSort(arr) {
    const LEN = arr.length;
    for(let i = 1; i < LEN; i++ ) {
        let template = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > template) {
            arr[j + 1] = arr[j]
            j -= 1;
        }
        arr[j + 1] = template;

    }
    return arr
}

console.log(insertionSort(nums));