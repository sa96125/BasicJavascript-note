// 해시테이블
// 거의 모든 언어에서 사용되고 있는 자료구조로 활용도가 매우 높다.
// 복잡한 데이터를 사람이 쉽게 인지할 수 있는 값으로 교체하여 저장하는 원리다.
// KEY - VALUE = INDEX

// 1. 아주 기본적인 해시펑션
function _hash(key) {
    let total;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total += value;
        total %= 10;
    }
    return total;
}

