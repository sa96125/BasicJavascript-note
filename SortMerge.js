///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 각 요소배열을 정렬하면서 새로운 배열로 만듬. 공간복잡도(n)
function mergeArr(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr[i] <= arr2[j]) {
            results.push(arr2[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) results.push(arr1[i]);
    while (j < arr2.length) results.push(arr2[j]);
}//--------------------------------------------------------------------------------------------------> 시간복잡도 O(n)

// 최대한 잘게 나누는 영역
function sortMerge(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = sortMerge(arr.slice(0, mid));
    const right = sortMerge(arr.slice(mid));

    return mergeArr(left, right);
}}//--------------------------------------------------------------------------------------------- > 시간복잡도 O(logn)
