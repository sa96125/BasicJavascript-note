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

    // DFS
    // 트리 탐색의 한 종류로서 sibling노드를 모두 방문하기 전에 자식노드를 먼저 탐색한다.
    // 우선적으로 자식노드를 방문하지만 경우에 따라 부모를 먼저 탐색할지, 자식을 먼저 탐색할지, 가진 자식을 모두 탐색하는 방법으로 나뉜다. 

    //       1
    //    2     3
    //  4  5      6
    DFSPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    //       6
    //    3     5
    //  1  2      4
    DFSPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    //       4
    //    2     5
    //  1  3      6
    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}
