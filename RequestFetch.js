// 패치를 사용하면, xml의 단점을 커버할 수 있다.
// 장점 : promise를 사용할 수 있다는 것!
// 아쉬운점 :정보를 요청했을 때, 한번 더 데이터의 파싱이 이루어져야한다는 것.
const checkStatusAndParse = (response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
};

const printPlanets = (data) => {
    console.log('Loaded 10 more planets...');
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
    return fetch(url);
};

fetchNextPlanets()
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .catch((err) => {
        console.log('SOMETHING WENT WRONG WITH FETCH!');
        console.log(err);
    });