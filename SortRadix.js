// 레딕스 정렬은 오직 인티져값에만 적용되는 아주 빠른 정렬방법이다.
// 숫자와 자릿수의 특성을 이용한 정렬이다.

// 비교할 숫자를 가져옴.
function getDisit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 전달되는 숫자가 현재 몇번째 자릿수를 가지는가를 얻어냄.
function disitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 모든 숫자들을 비교해서 가장 자릿수가 큰값을 가져온다.
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