// 다음의 함수가 리퀘스트로 요청한다고 가정한 함수정의
// 이 함수는 데이터를 요청하고 그 데이터로 콜백함수를 사용하기 위해 promise를 반환한다.
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'Bilbo' },
                    { id: 5, username: 'Esmerelda' }
                ],
                '/users/1': {
                    id: 1,
                    username: 'Bilbo',
                    upvotes: 360,
                    city: 'Lisbon',
                    topPostId: 454321
                },
                '/users/5': {
                    id: 5,
                    username: 'Esmerelda',
                    upvotes: 571,
                    city: 'Honolulu'
                },
                '/posts/454321': {
                    id: 454321,
                    title:
                        'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
                },
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 200, data });
            }
            else {
                reject({ status: 404 });
            }
        }, 1000);
    });
};

// 콜백 chaining!!
// 콜백함수에서 또다른 콜백함수를 계속 연결해서 호출가능하다.
// return promise를 했기때문에 then, catch메서드를 계속해서 사용가능함.
// 1. 순서대로 콜백함수가 호출 된다. 이말은 즉, 그전의 콜백함수로부터 얻었던 데이터를 전달하여 사용가능.
// 2. 또는 데이터를 전달하지 않아도 계속 같은 함수를 호출할 수 있다.
fakeRequest('/users')
    .then((res) => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest(`/users/${id}`);
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('OH NO!', err);
    });