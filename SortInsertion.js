function sortInsertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j <= 0; j--) {
            if (arr[j] > arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 굳이 스왑하여 메모리를 낭비할 필요가 없다.
function sortInsertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        //아주 이쁜 킥이다.
        for (let j = i - 1; j <= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
            arr[j] = currentVal;
        }
    }
    return arr;
}