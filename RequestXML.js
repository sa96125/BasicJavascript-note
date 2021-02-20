
const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', function () {
    console.log('FIRST REQUEST WORKED!!!');
    const data = JSON.parse(this.responseText);
    const filmURL = data.results[0].films[0];
    const filmReq = new XMLHttpRequest();

    // 기본적인 구성은 동일하다. 
    // 제대로 받았을 때의 콜백함수
    filmReq.addEventListener('load', function () {
        console.log('SECOND REQUEST WORKED!!!');
        const filmData = JSON.parse(this.responseText);
        console.log(filmData.title);
    });

    // 그러지 않았을 때의 콜백함수
    filmReq.addEventListener('error', function (e) {
        console.log('ERROR!!', e);
    });

    filmReq.open('GET', filmURL);
    filmReq.send();
});

// XML요청의 치명적인 단점, 어떤 에러가 발생하더라도 네트워크문제로 잘못되었다는 것으로 표시된다.
firstReq.addEventListener('error', (e) => {
    console.log('ERROR!!!!!!');
});

// 메서드
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');