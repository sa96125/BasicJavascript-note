// 배열의 삽입,삭제의 더 나은 시간복잡도로 처리할 수 있는 좋은 대안이 될 수 있다.
// 근데 인덱스, 랜덤접근이 불가능하다는 단점이 있음!
// 자료 구조의 기본기로서 직관적으로 확인하여 코드를 짜는데 큰 어려움이 없었고 아주 즐코했다!ㅎ

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(val) {
        var newnode = new Node(val);
        if (!this.head) {
            this.head = newnode;
            this.tail = this.head;
        } else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newtail = current;

        while (current.next) {
            newtail = current;
            current = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if (this.length === null) {
            this.head = null;
            this.tail = null;
        }
    }

    shift() {
        if (!this.length) {
            return undefined;
        }
        var currentval = this.head;
        this.head = currentval.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;;
        }
    }

    unshift(val) {
        var newnode = new Node;
        if (!head) {
            this.head = newnode;
            this.tail = this.head;
        } else {
            newnode.next = this.head;
            this.head = newnode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || this.length <= index) {
            return undefined;
        }
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val) {
        var foundnode = this.get(index);
        if (foundnode) {
            foundnode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index === 0) {
            this.unshift(val);
            return true;
        } else if (index === this.length - 1) {
            this.push(val);
            return true;
        }

        var prenode = this.get(index - 1);
        var newnode = new Node(val);
        newnode.next = prenode.next;
        prenode.next = newnode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index === 0) {
            this.shift;
            return true;
        } else if (index === this.length - 1) {
            this.unshift(val);
            return true;
        }

        var prenode = this.get(index - 1);
        var removed = prenode.next;
        prenode.next = removed.next;
        this.length--;
        return true;
    }

    reverse() {
        if (!this.length) return undefined;
        var current = this.head;
        var prenode = null;
        var next = null;

        while (current.next) {
            next = current.next;
            current.next = prenode;
            prenode = current;
            current = next;
        }
        return true;
    }
}

