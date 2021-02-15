// 기본적으로 최소 이분 힙의 방식과 같다.
// 만약 선형구조에서 우선순위를 파악하기 위해서 전체의 노드에 방문해야겠지만
// 힙의 특징을 이용하면 루트노드에서 삽입과 삭제를 하여 빠르게 우선순위 작업을 실행할 수 있다.
// 다만 힙의 또다른 조건 자식노드의 상관관계가 없다는 점에서 search의 시간복잡도는 O(n)이다.
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    //삽입이지만 큐의 특성과 동일한하므로 디큐라고 명명했다.
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    //삽입되면 제일 마지막노드에 입력되고 우선순위에 적절한 위치의 부모로 스왑되는 방식이다.
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    //마찬가지로 삭제
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    // 제일 앞의 값 (루트)를 삭제하고 제일 마지막값과 스왑하여 트리를 재배열 시킨다.
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
