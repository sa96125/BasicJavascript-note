// heap
// 힙은 트리로부터 파생된 자료구조이다. 종자는 같음.
// 자료가 담기는 방법에서 차이점이 존재하는데 그것은 바로 자매노드끼리의 순서에 상관 없이
// 부모노드는 자식노드보다 큰값을 가지면 된다.
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}