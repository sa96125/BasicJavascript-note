class Timer {
    constructor(timeDuration, startBtn, pauseBtn, callBacks) {
        this.timeDuration = timeDuration;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;

        if (callBacks) {
            this.onStart = callBacks.onStart;
            this.onTik = callBacks.onTik;
            this.onComplete = callBacks.onComplete;
        }

        this.startBtn.addEventListener('click', this.start.bind(this));
        this.pauseBtn.addEventListener('click', this.pause.bind(this));
    }

    start() {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.intervalId = setInterval(() => this.tik(), 1000);
    }

    pause() {
        if (this.onComplete) {
            this.onComplete();
        }
        clearInterval(this.intervalId);
    }

    tik() {
        if (this.onTik) {
            this.onTik(this.timeDuration.value);
        }
        if (this.timeDuration.value <= 0) {
            this.pause()
        } else {
            this.timeRemaining = this.timeRemaining - 1;
        }
    }

    get timeRemaining() {
        return parseFloat(this.timeDuration.value);
    }

    set timeRemaining(time) {
        this.timeDuration.value = time.toFixed(2);
    }
}