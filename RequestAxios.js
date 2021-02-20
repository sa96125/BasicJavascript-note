// Url만으로 아주 간단하게 리퀘스트가 가능함!!
// 개발자가 사용하기 쉽게 구성되어있다.
// 에러또한 일어난 구간에서 쉽게 파악가능하다. 굿굿

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
    console.log(url);
    return axios.get(url);
};
const printPlanets = ({ data }) => {
    console.log(data);
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch((err) => {
        console.log('ERROR!!', err);
    });
