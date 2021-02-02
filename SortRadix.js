function getDisit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function disitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDisit(nums) {
    let maxdisits = 0;
    for (let i = 0; nums.length; i++) {
        maxdisits = Math.max(maxdisits, disitCount(num[i]));
    }
    return maxdisits;
}

function sortRadix(arr) {
    const length = mostDisit(arr);
    for (let k = 0; k < arr.length; k++) {
        let disitBucket = Array.from({ length: 10 }, () => []);
        for (let i = 0; arr.length; i++) {
            const disit = getDisit(arr[i], k);
            disitBucket[disit] = arr[i];
        }
    }
    arrr = [].concat(...disitBucket);

    return arr;
}

sortRadix([123, 35934, 4596, 39458, 39292, 394, 500, 5903, 6, 594, 43, 24, 8, 0]);