const duration = document.querySelector('#duration');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');

const timer = new Timer(duration, start, pause, {
    onStart() {
        console.log("타이머 시작!");
    },
    onComplete() {
        console.log("타이머 종료;<");
    },
    onTik() {
        console.log("시간 측정중~");
    }
});
