// 노드는 최대 2개의 자식노드를 갖는다.
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// 이분탐색트리
// 음~~ 개인적으로 삽입정렬의 비선형구조로서의 업그레이드판이라고 생각하면 될듯.
// 각각의 노드에 비교를 하여 작은 값은 왼쪽으로 큰값은 오른쪽으로 이동하여 저장.
// 원하는 데이터를 찾기 쉽고 빠르다.
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // BFS
    // 트리 탐색의 한 종류로서 자식노드를 방문하기 전에 sibling노드를 먼저 탐색한다.
    // 순자적으로 다음 노드를 방문하기 때문에 Queue의 자료구조를 활용
    BFS() {
        var node = this.root,
            data = [],
            queue = [];
        queue.push(node);

        while (queue.length) {
            //큐의 데이터를 빼고 난 다음 그 정보를 통해 방문처리, 자식노드의 위치를 업데이트한다.
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
}
