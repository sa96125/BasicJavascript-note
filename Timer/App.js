const duration = document.querySelector('#duration');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const circle = document.querySelector('circle');

const radium = circle.getAttribute('r');
const premire = 2 * Math.PI * radium;

let duration = null;
let currentOffset = 0;

const timer = new Timer(duration, start, pause, {
    onStart(timeDuration) {
        duration = timeDuration;
    },
    onTik(time) {
        circle.setAttribute('stroke-offset', (premire * time) / duration - premire);
    },
    onComplete() {
        console.log('타이머가 완료되었습니다.');
    }
});
