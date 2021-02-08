// 베이스는 싱글리링크드리스트와 같다.
// 더이상 리버스로 고통 받지 않아도 된다 ㅎㅎ
// 차이점은 오직 pre 포인터가 추가 되었다는 점.
// more memory === more flexibility

class Node {
    constructor(val) {
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(val) {
        const newnode = new Node(val);
        if (!this.length) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.next = newnode;
            newnode.pre = this.tail;
            this.tail = newnode;
        }
        this.length++;
        return this;
    }

}