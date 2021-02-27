// 그래프를 표현하는 방법은 2가지가 있다.
// 테이블을 이용한 매트릭스 그리고 배열을 이용한 리스트
// 매트릭스의 경우 실제 세상의 그래프의 구현과는 거리가 멀다. 따라서 나는 리스트를 이용한 구현방식으로 설계함.

class Graph {
    // 그래프의 틀을 리스트로 작성한다.
    // 배열이 아닌 객체를 사용한 이유는 각 노드의 값이 0부터시작하는 인덱스값이기 힘들다.
    // 실제적으로는 뭐랄까 음 노드의 값의 키가 유니크하니까. 꿩이 될수도잇고 아브라카다브라가 될수도있으니까
    constructor() {
        this.adjacencyList = {};
    }
    // 벌텍스는 노드고
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    // 엣지는 연결선이다.
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    // 연결고리 삭제시에는 연결된 값을 찾아서 다 없애줘야지
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    // 노드 삭제시에는 연결된 값에 있는 삭제하고자하는 노드를 삭제한 이후에 노드삭제.
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}
