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

let lights = document.querySelectorAll('.light')
let lightsArr = [...lights];
let current = 0
let timerId = setInterval (() => {
    lightsArr[current].classList.remove('light_active')
    current = (current + 1) % lightsArr.length;
    lightsArr[current].classList.add('light_active')
}, 2000)

let btn = document.querySelector('.counter__add')
let value = document.querySelector('.counter__value')
let reset = document.querySelector('.counter__reset')
btn.addEventListener('click', function(){
    value.textContent = Number(value.textContent) + 1
})
reset.addEventListener('click', function(){
    value.textContent = 0
})

let cards = document.querySelector('.cards')
let hint = document.querySelector('.hint')
cards.addEventListener('click', function(event) {
    message = event.target.dataset.tip;
    hint.textContent = message
})

let container = document.querySelector('.tabs')
let tabBtns = document.querySelectorAll('.tabs__btn')
let tabCntnt = document.querySelectorAll('.tab')
container.addEventListener('click', function(event) {
    tabBtns.forEach((item) => {
        item.classList.remove('tabs__btn_active')
    })
    event.target.classList.add('tabs__btn_active')
    let id = event.target.dataset.target
    tabCntnt.forEach((item) => {
        item.classList.remove('tab_active')
    })
    let activeTab = document.querySelector('#' + id)
    activeTab.classList.add('tab_active')
})
