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