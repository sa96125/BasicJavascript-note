// stack
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


}