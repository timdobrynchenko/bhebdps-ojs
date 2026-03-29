class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.find((clock) => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        })
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
    }

    getCurrentFormattedTime() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let currentTime = hours + ':' + minutes;
    return currentTime
    }

    start() {
        if (this.intervalId) {
            return
        }
        this.intervalId = setInterval(() => {
                const currentTime = this.getCurrentFormattedTime();
                this.alarmCollection.forEach(function(clock){
                    if (clock.time === currentTime && clock.canCall === true) {
                        clock.canCall = false;
                        clock.callback()
                    }
                }
        )}, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null
    }

    resetAllCalls() {
        this.alarmCollection.forEach((clock) => {
            clock.canCall = true
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = []
    }
};