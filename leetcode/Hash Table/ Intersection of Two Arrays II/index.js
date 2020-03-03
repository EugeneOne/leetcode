/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let m1 = new Map(),
        m2 = new Map();
    const len1 = nums1.length;
    const len2 = nums2.length;
    nums1.forEach((item, index) => {
        if(!m1.has(item)) {
            m1.set(item, 1);
        } else {
            m1.set(item, m1.get(item) + 1)
        }
    })
    nums2.forEach((item, index) => {
        if(!m2.has(item)) {
            m2.set(item, 1);
        } else {
            m2.set(item, m2.get(item) + 1)
        }
    })
    if(len1 <= len2) {
        console.log(m1, m2);
        for(let i = 0; i < len1; i++) {
            let key = nums1[i];
            if(m2.has(key) && m2.get(key)) {
                m2.set(key, m2.get(key) - 1);
                result.push(key);
            }
        }
    } else {
        for(let i = 0; i < len2; i++) {
            let key = nums2[i];
            if(m1.has(key) && m1.get(key)) {
                m1.set(key, m1.get(key) - 1);
                result.push(key);
            }
        }
    }
    return result;
};

const nums1 = [1];
const nums2 = [1];
console.log(intersect(nums1, nums2));