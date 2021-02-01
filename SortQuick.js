///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 이미 정렬되어 있는 경우가 최악, logn으로 나눠질 수 없기 때문.
// best O(nlogn) worst O(n**2) time complexity O(logn)
// 공간이 줄어든다는 의미는 찾아야할 공간을 더이상 쓰지않는다는 의미다.

// pivert의 위치를 반환하는 함수(정렬)
function pivert(arr, start, end) {
    let pivert = arr[start];
    let swapIndex = 0;

    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivert) {
            swapIndex++;
            // 생략
            swap(arr, arr[index], arr[i]);
        }
    }
    queueMicrotask(arr, pivert, arr[swapIndex]);

    return swapIndex;
}

function sortQuick(arr, left, right) {
    if (left < right) {
        let pivertIndex = pivert(arr, left, right);
        sortQuick(arr, left, pivert + 1);
        sortQuick(arr, right, pivert - 1);
    }
    return arr;
}