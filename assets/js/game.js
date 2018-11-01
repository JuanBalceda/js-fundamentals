const skyblue = document.getElementById('skyblue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');
const LAST_LEVEL = 10;

class Game {
    constructor() {
        this.init = this.init.bind(this);
        this.init();
        this.getSecuence();
        this.nextLevel();
    }

    init() {
        this.lightSecuence = this.lightSecuence.bind(this);
        this.chooseColor = this.chooseColor.bind(this);
        this.nextLevel = this.nextLevel.bind(this);
        this.toogleBtnStart = this.toogleBtnStart.bind(this);
        this.toogleBtnStart();
        this.level = 1;
        this.colors = {
            skyblue: skyblue,
            violet: violet,
            orange: orange,
            green: green
        };
    }

    toogleBtnStart() {
        if (btnStart.classList.contains('hide')) {
            btnStart.classList.remove('hide')
        } else {
            btnStart.classList.add('hide')
        }
    }

    getSecuence() {
        this.secuence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    nextLevel() {
        this.sublevel = 0;
        setTimeout(this.lightSecuence, 1500);
        this.addClickEvents();
    }

    numberToColor(num) {
        switch (num) {
            case 0:
                return 'skyblue';
            case 1:
                return 'violet';
            case 2:
                return 'orange';
            case 3:
                return 'green';
        }
    }

    colorToNumber(color) {
        switch (color) {
            case 'skyblue':
                return 0;
            case 'violet':
                return 1;
            case 'orange':
                return 2;
            case 'green':
                return 3;
        }
    }

    lightSecuence() {
        for (let i = 0; i < this.level; i++) {
            let color = this.numberToColor(this.secuence[i]);
            setTimeout(() => this.lightOn(color), 1000 * i);
        }
    }

    lightOn(color) {
        this.colors[color].classList.add('light');
        setTimeout(() => this.lightOff(color), 350);
    }

    lightOff(color) {
        this.colors[color].classList.remove('light');
    }

    addClickEvents() {
        this.colors.skyblue.addEventListener('click', this.chooseColor);
        this.colors.green.addEventListener('click', this.chooseColor);
        this.colors.orange.addEventListener('click', this.chooseColor);
        this.colors.violet.addEventListener('click', this.chooseColor);
    }

    removeClickEvents() {
        this.colors.skyblue.removeEventListener('click', this.chooseColor);
        this.colors.green.removeEventListener('click', this.chooseColor);
        this.colors.orange.removeEventListener('click', this.chooseColor);
        this.colors.violet.removeEventListener('click', this.chooseColor);

    }

    chooseColor(ev) {
        let colorName = ev.target.dataset.color;
        let colorNum = this.colorToNumber(colorName);
        this.lightOn(colorName);
        if (colorNum === this.secuence[this.sublevel]) {
            this.sublevel++;
            if (this.sublevel === this.level) {
                this.level++;
                this.removeClickEvents();
                if (this.level === (LAST_LEVEL + 1)) {
                    this.winGame()
                } else {
                    this.winLevel()
                }
            }
        } else {
            this.loseGame()
        }
    }

    winGame() {
        swal('Simon says:', 'Great, you win!', 'success')
            .then(this.init())
    }

    winLevel() {
        swal('Simon says:', `Great, level up!\nNext level: ${this.level}`, 'success')
            .then(this.nextLevel)
    }

    loseGame() {
        swal('Simon says:', 'Puff, you lose :(', 'error')
            .then(() => {
                this.removeClickEvents();
                this.init();
            })
    }
}

function startGame() {
    window.game = new Game();
}