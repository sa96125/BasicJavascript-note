// stack : 데이터의 집합이다 (LIFO)
// 정해진 순서가 있는 그냥 컨셉일 뿐이다.
// 자바스크립트에는 빌트인 스택이 없기 때문에 배열을 사용한다.
// 하지만 배열의 리 인덱싱의 단점이 있기때문에 스택을 구현하기 위해서는 링크드리스트를 사용하여 자체적으로 코드를 짜야한다.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = null;
    }

    push(val) {
        const newnode = new Node(val);
        if (!this.size) {
            this.first = newnode;
            this.last = newnode;
        } else {
            var temp = this.first;
            this.first = newnode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.size) return undefined;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            this.size--;
        }
        return temp.val;
    }
}