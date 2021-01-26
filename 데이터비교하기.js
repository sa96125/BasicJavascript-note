// 두 배열이 주어 졌을 때, 첫 번째 배열의 요소가 두 번째 배열의 요소가 일치한다면 True, 아니라면 False를 리턴하는 프로그램을 작성하여라.
// 단, 각 데이터의 순서는 상관 없고 각 요소의 정보와 갯수만 일치하면 된다.

// > "icecream", "creamice"  
// < true
// > "asdfasdf", "asdfasdd"  
// < false
// > " "," "                 
// < true

function compareArr(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // 값이 있으면 배열의 인덱스를 반환한다.
        let idx = arr2.indexOf(arr1[i] ** 2)
        if (idx === -1) {
            return false;
        }
        // 있으면 삭제
        arr2.splice(correctIndex, 1)
    }
    return true;
}//--------------------------------------------------------------------------------------------------> 시간복잡도 O(n**2)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                            R E F A C T O R I N G                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//객체의 Key값을 활용하여 불필요한 순회를 막는다.
function validAnagram(str1, str2) {
    //갯수 다르면 false
    if (str1.length !== str2.length) {
        return false;
    }
    //데이터를 담을 객체를 생성
    const checkChar1 = {};
    const checkChar2 = {};

    //객체에 데이터 삽입
    for (let i = 0; i < str1.length; i++) {
        checkChar1[str1[i]] = ++checkChar1[str1[i]] || 1;
        checkChar2[str2[i]] = ++checkChar2[str2[i]] || 1;
    }

    //각 배열의 Key의 존재, value의 갯수를 비교한다.
    for (let key in checkChar1) {
        if (!(key in checkChar2)) {
            return false;
        }
        if (checkChar1[key] !== checkChar2[key]) {
            return false;
        }
    }
    return true;
}//-------------------------------------------------------------------------------------------------->  시간복잡도 O(n)