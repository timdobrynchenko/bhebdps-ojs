class Player {
    constructor(name) {
        this.name = name;
        this._health = 100;
    }

    heal() {
        this.health = this._health += 20
    }

    get health() {
        return this._health
    }

    set health(value) {
        if (value > 100) {this._health = 100}
        else if (value < 0) {this._health = 0}
        else{this._health = value}
    }
}

class Warrior extends Player {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon
    }
    attack() {
        return this.name + " атакует с " + this.weapon
    }
}

function getTime() {
    let intervalId = setInterval(function() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        let actualTime = hours + " : " + minutes + " : " + seconds
        console.log(actualTime)
    }, 1000);

    setTimeout(function(){
        clearInterval(intervalId);
        console.log('таймер остановлен')
    }, 5000)
}