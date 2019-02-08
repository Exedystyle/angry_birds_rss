/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Character/Character.js":
/*!***************************************!*\
  !*** ./src/js/Character/Character.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HealthBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HealthBar */ "./src/js/Character/HealthBar.js");


class Character {
    constructor() {
        this.faceId = 0;
        this.styleId = 0;
        this.health = 100;
    }

    createFigure(character) {
        let figure = document.createElement('div');
        this.body = document.createElement('div');
        this.body.classList.add(character);
        figure.appendChild(this.body);
        return figure;
    }

    createHealthBar(className) {
        if (!this.healthBar) {
            this.healthBar = new _HealthBar__WEBPACK_IMPORTED_MODULE_0__["default"](className);
        } else {
            this.renderHealthBar();
        }
    }

    renderHealthBar() {
        this.healthBar.render(this.health);
    }

    attack(res) {
        if(res){
            this.body.className = 'birdy-silent';
            this.ball.className = 'throwableBird';
            setTimeout(() => {
                this.body.classList.add('attack-anim');
                this.ball.classList.add('bird-fly');
            }, 3000)
        }
        else{
            this.body.className = 'piggy-silent';
            this.ball.className = 'throwableRock';
            setTimeout(() => {
                this.body.classList.add('attack-anim');
                this.ball.classList.add('rock-fly');
            }, 3000)
        }
    }

    takeAttack(res) {
        if(res){
        this.health = this.health - 25;
            this.body.className = 'piggy-silent';
            setTimeout(() => {
                if (this.health) {
                    this.body.classList.add('take-damage-anim');
                } else {
                    this.body.classList.add('take-damage-final');
                }
            }, 3000);
        }
        else{
            this.health = this.health - 25;
                this.body.className = 'birdy-silent';
                setTimeout(() => {
                    if (this.health) {
                        this.body.classList.add('take-damage-anim');
                    } else {
                        this.body.classList.add('take-damage-final');
                    }
                }, 3000);
            }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Character);

/***/ }),

/***/ "./src/js/Character/Enemy.js":
/*!***********************************!*\
  !*** ./src/js/Character/Enemy.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ "./src/js/Character/Character.js");


class Enemy extends _Character__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(names) {
        super();
        this.namesList = names;
    }

    generateName() {
        let adjectiveIndex = Math.floor(Math.random() * this.namesList.adjective.length);
        let nounIndex = Math.floor(Math.random() * this.namesList.noun.length);
        let nameIndex = Math.floor(Math.random() * this.namesList.name.length);
        this.name = `${this.namesList.adjective[adjectiveIndex]} ${this.namesList.noun[nounIndex]} ${this.namesList.name[nameIndex]}`;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/js/Character/HealthBar.js":
/*!***************************************!*\
  !*** ./src/js/Character/HealthBar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class HealthBar {
    constructor(className) {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.classList.add('bar', className);
        this.container = document.getElementById('health-bar');
        this.container.appendChild(this.canvas);
    }

    render(health = 100) {
        this.canvas.width = this.canvas.width
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0, 0, this.canvas.width * health / 100, this.canvas.height);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (HealthBar); 

/***/ }),

/***/ "./src/js/Constants/LogosClassNames.js":
/*!*********************************************!*\
  !*** ./src/js/Constants/LogosClassNames.js ***!
  \*********************************************/
/*! exports provided: CLASS_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAMES", function() { return CLASS_NAMES; });
const CLASS_NAMES = [
    'apexi','avg','borgwarner','ciay','corvette','holden','logitech','nike','pepsi','sber','tein','vodafone','worthouse', 'lexus', 'tesla', 'rocketbunny', 'tor'
]

/***/ }),

/***/ "./src/js/Constants/Vocabulary.js":
/*!****************************************!*\
  !*** ./src/js/Constants/Vocabulary.js ***!
  \****************************************/
/*! exports provided: VOCABULARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOCABULARY", function() { return VOCABULARY; });
const VOCABULARY = [
    {
        word: 'cat',
        translation: ['кот', 'кошка', 'котенок', 'киса', 'киска', 'кися',]
    },
    {
        word: 'capital',
        translation: ['капитал', 'столица', 'состояние']
    },
    {
        word: 'number',
        translation: ['номер', 'количество', 'число', 'цифра', 'сумма',]
    },
    {
        word: 'crankshaft',
        translation: ['коленвал', 'кранкшафт']
    },
    {
        word: 'pig',
        translation: ['свинья', 'свинка', 'хрюша', 'хряк', 'свиноматка']
    },
    {
        word: 'line',
        translation: ['линия', 'строка', 'строчка', 'направление', 'черта', 'ряд', 'граница']
    },
    {
        word: 'machine',
        translation: ['машина', 'автомобиль', 'автомат', 'аппарат', 'механизм', 'станок', 'мачине']
    },
    {
        word: 'point',
        translation: ['точка', 'балл', 'пункт', 'момент', 'очко', 'дело']
    },
    {
        word: 'language',
        translation: ['язык', 'речь', 'лангуаге']
    },
    {
        word: 'power',
        translation: ['мощность', 'сила', 'мощь', 'энергия', 'способность', 'повер']
    },
    {
        word: 'money',
        translation: ['деньги', 'бабки', 'кэш', 'лавэ', 'лаве']
    },
    {
        word: 'market',
        translation: ['рынок', 'базар', 'торговля', 'маркет', 'сбыт', 'магазин']
    },
    {
        word: 'report',
        translation: ['доклад', 'отчет', 'сообщение', 'рапорт', 'репортаж', 'донесение', 'малява']
    },
    {
        word: 'friend',
        translation: ['друг', 'подруга', 'приятель', 'знакомый', 'товарищ', 'брат', 'братан', 'братишка']
    },
    {
        word: 'parent',
        translation: ['родитель', 'предок', 'родительница', 'причина', 'праотец', 'прародитель']
    },
    {
        word: 'person',
        translation: ['человек', 'лицо', 'личность', 'особа', 'персонаж', 'субъект']
    },
    {
        word: 'reason',
        translation: ['причина', 'повод', 'основание', 'резон', 'разум', 'рассудок', 'довод']
    },
    {
        word: 'morning',
        translation: ['утро', 'утренняя заря', 'начало', 'ранний период']
    },
    {
        word: 'figure',
        translation: ['рисунок', 'цифра', 'фигура', 'диаграмма', 'образ', 'личность']
    },
    {
        word: 'price',
        translation: ['цена', 'расценка', 'ценность', 'жертва', 'ргисе']
    },
    {
        word: 'support',
        translation: ['поддержка', 'помощь', 'опора', 'подставка', 'суппорт', 'кронштейн']
    },
    {
        word: 'health',
        translation: ['здоровье', 'самочувствие', 'здравие', 'жизнеспособность', 'благосостояние', 'хп']
    },
    {
        word: 'field',
        translation: ['поле', 'область', 'месторождение', 'пространство', 'поприще']
    },
    {
        word: 'example',
        translation: ['пример', 'образец', 'экземпляр', 'урок', 'ехампле']
    },
    {
        word: 'paper',
        translation: ['бумага', 'документ', 'обои', 'рарег']
    },
    {
        word: 'table',
        translation: ['стол', 'таблица', 'расписание', 'доска', 'трапеза', 'плита']
    },
    {
        word: 'animal',
        translation: ['животное', 'зверь', 'скотина', 'тварь']
    },
    {
        word: 'picture',
        translation: ['рисунок', 'картина', 'изображение', 'картинка', 'представление', 'образ']
    },
    {
        word: 'child',
        translation: ['ребенок', 'малыш', 'младенец', 'потомок']
    },
    {
        word: 'horse',
        translation: ['лошадь', 'конь', 'конница', 'кавалерия', 'козлы', 'рама', 'лошадка']
    },
    {
        word: 'color',
        translation: ['цвет', 'краска', 'колорит', 'оттенок', 'свет', 'тон']
    },
    {
        word: 'summer',
        translation: ['лето', 'год', 'балка']
    },
    {
        word: 'letter',
        translation: ['письмо', 'буква', 'символ', 'послание', 'литера', 'шрифт']
    }
]

/***/ }),

/***/ "./src/js/Constants/namesCollection.js":
/*!*********************************************!*\
  !*** ./src/js/Constants/namesCollection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NAMES_COLLECTION = {
    adjective: [
        'Dirty', 'Muddy', '','Crazy', 'Gaaangsta', 'The', '', 'Grubby', 'Grimy', 'Leery', 'Rummy', 'Brutish', 'Tricky'
    ],
    noun: [
        'Pig', 'Hog', 'Sow', '', 'Pork', 'Hidden', 'Boar', 'Fat', '', 'Green', 'Vealy'
    ],
    name: [
        'Hector', 'Hambo', 'Hamlet', 'Hamilton', 'Hamburger', 'Smokey', 'Slim', 'Bacondall', 'Willbur'
    ]
};

/* harmony default export */ __webpack_exports__["default"] = (NAMES_COLLECTION);



/***/ }),

/***/ "./src/js/Controllers/BattleFieldController.js":
/*!*****************************************************!*\
  !*** ./src/js/Controllers/BattleFieldController.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class BattleFieldController {
    constructor(score) {
        this.score = score;
        this.battlePage = document.getElementById('battle-field');
        this.playerNameField = document.getElementById('player-name');
        this.opponentNameField = document.getElementById('opponent-name');
        this.levelField = document.getElementById('game-level');
        this.gameResultPage = document.getElementById('game-result-page'); 
        this.winGameWindow = document.getElementById('win-game-window');
        this.loseGameWindow = document.getElementById('lose-game-window');
        this.scoreContainer = document.getElementById('score-container');
        this.solvedTasksElement = document.getElementById('final-score-task');
        this.amountOfVictories = document.getElementById('number-of-victories');
    }

    init(locationId) {
        this.battlePage.className = 'battle-field';
        this.battlePage.classList.add(`${locationId}-location`);
    }

    render(player, opponent) {
        if (this.opponentFigure) {
            this.battlePage.removeChild(this.playerFigure);
            this.battlePage.removeChild(this.opponentFigure);
        };
        this.createPlayer(player);
        this.createEnemy(opponent);
    }

    createPlayer(player) {
        this.player = player;
        this.playerFigure = this.player.createFigure('birdy-silent');
        this.playerFigure.classList.add('player-container');
        this.player.ball = document.createElement('div');
        this.player.ball.classList.add('throwableBird');
        this.playerNameField.textContent = this.player.name;
        this.playerFigure.appendChild(this.player.ball);
        this.battlePage.appendChild(this.playerFigure);
        this.player.renderHealthBar();
    }

    createEnemy(opponent) {
        this.opponent = opponent;
        this.opponent.health = 100;
        this.opponentFigure = this.opponent.createFigure('piggy-silent');
        this.opponentFigure.classList.add('opponent-container');
        this.opponent.ball = document.createElement('div');
        this.opponent.ball.classList.add('throwableRock');
        this.opponentNameField.textContent = this.opponent.name;
        this.levelField.textContent = this.opponent.level;
        this.opponentFigure.appendChild(this.opponent.ball);
        this.battlePage.appendChild(this.opponentFigure);
        this.opponent.renderHealthBar();
    }

    showScoreWindow(level, solvedTasks) {
        this.solvedTasksElement.textContent = solvedTasks;
        this.amountOfVictories.textContent = level - 1;
        this.score.refreshScore({name: this.player.name, result: solvedTasks});
        this.score.showScore(this.scoreContainer);
    }

    showFinalWindow(result, level, solvedTasks) {
        setTimeout(() => {
            if (level) {
                this.showScoreWindow(level, solvedTasks);
            };
            this.gameResultPage.classList.remove('hidden');
            this[`${result}GameWindow`].classList.remove('hidden');
        }, 1000);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (BattleFieldController);

/***/ }),

/***/ "./src/js/Controllers/GameConfig.js":
/*!******************************************!*\
  !*** ./src/js/Controllers/GameConfig.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameConfig {
    constructor(player, gameController) {
        this.player = player;
        this.GameController = gameController;
        this.selectLocationPage = document.getElementById('location-select');
        this.playerConfigPage = document.getElementById('config-page');
        this.playerFigure = document.getElementById('player-figure');
        this.nameInput = document.getElementById('player-name-input');
        document.addEventListener('click', (e) => this.changeConfig(e));
    }

    selectLocation(e) {
        this.locationId = e.target.id;
        this.showPlayerConfigPage();
    }

    showPlayerConfigPage() {
        this.playerConfigPage.classList.remove('hidden');
        this.selectLocationPage.classList.add('hidden');    
    }

   changeConfig(e) {
        if (e.target.id === 'submit-button') {
            this.compileConfig();
        } else if (e.target.classList.contains('location-item')) {
            this.selectLocation(e);
        }
    }

    compileConfig() {
        if (this.nameInput.value) {
            this.player.name = this.nameInput.value;
            this.playerConfigPage.classList.add('hidden');            
            this.GameController.init(this.player, this.locationId);
            this.GameController.initGame();
            this.nameInput.value = "";
        } else {
            this.nameInput.classList.add('empty-input')
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GameConfig); 

/***/ }),

/***/ "./src/js/Controllers/GameController.js":
/*!**********************************************!*\
  !*** ./src/js/Controllers/GameController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GameController {
    constructor(battleField, enemy, tasks) {
        this.battlefield = battleField;
        this.opponent = enemy;
        this.tasksList = tasks;
        this.task = null;
        this.activeAttack = false;
        this.startPage = document.getElementById('start-page');
        this.attackConfigPage = document.getElementById('attack-config-page');
        this.attackTypeWindow = document.getElementById('attack-type');
        this.taskTypeWindow = document.getElementById('task-type');
        this.attackButton = document.getElementById('attack-button');
        this.taskSection = document.getElementById('task-field');
        document.addEventListener('click', (e) => this.handleEvents(e));
        document.addEventListener('keydown', (e) => this.keyboardControl(e));
        
    }

    init(player, location) {
        this.level = 1;
        this.solvedTasks = 0;
        this.player = player;
        this.gameStatus = null;
        this.player.createHealthBar('player-health-bar');
        this.opponent.createHealthBar('opponent-health-bar');
        this.battlefield.init(location);
    }

    initGame() {
        this.createOpponent();
        this.battlefield.render(this.player, this.opponent);
    }

    handleEvents(e) {
        debugger
        if (e.target.id === 'attack-button' && !this.activeAttack) {
            this.startAttack(e);
        } else if (e.target.id === 'next-game-button') {
            this.startNextRound();
        } else if (e.target.classList.contains('exit-button')) {
            this.exitToMenu(e);
        } else if (e.target.classList.contains('attack-type-item')) {
            this.selectAttackType(e)
        } else if (e.target.classList.contains('task-type-item')) {
            this.selectTaskType(e)
        } else if (e.target.id === 'check-result') {
            this.checkAnswer();
        }
    }

    keyboardControl(e) {
        if (e.keyCode === 13 && !this.taskSection.classList.contains('hidden')) {
            this.checkAnswer();
        }
    }

    startAttack (e) {
        this.attackConfigPage.classList.remove('hidden');
        this.taskTypeWindow.classList.remove('hidden');
        e.target.classList.contains('attack-button-animation') ? e.target.classList.remove('attack-button-animation') : null;
    }

    startNextRound () {
        this.level++;
        this.initGame();
        this.battlefield.gameResultPage.classList.add('hidden');
        this.battlefield.winGameWindow.classList.add('hidden');
    }

    exitToMenu (e) {
        let resultWindow = `${this.gameStatus}GameWindow`;
        this.battlefield.gameResultPage.classList.add('hidden');
        this.battlefield[resultWindow].classList.add('hidden');
        this.battlefield.battlePage.classList.add('hidden');
        this.startPage.classList.remove('hidden');
        this.player.health = 100;
    }

    createOpponent() {
        this.opponent.level = this.level;
        this.opponent.generateName();
    }

    selectAttackType(e) {
        this.attackType = e.target.id;
        this.attackTypeWindow.classList.add('hidden');
        this.taskTypeWindow.classList.remove('hidden');
    }

    selectTaskType(e) {
        this.attackConfigPage.classList.add('hidden');
        this.taskTypeWindow.classList.add('hidden');
        this.task = this.tasksList[e.target.id];
        this.tasksList[e.target.id].init();
    }

    checkAnswer() {
        let result = this.task.checkResult();
        this.activeAttack = true;
        if (result) {
            this.solvedTasks++;
            this.player.attack(result);
            this.opponent.takeAttack(result);
            setTimeout(() => {
                this.task.correctAnswer();
            }, 400);
            setTimeout(() => {
                this.opponent.healthBar.render(this.opponent.health);
                this.activeAttack = false;
                this.checkVictory();
            }, 6000);
        } else {
            this.opponent.attack(result);
            this.player.takeAttack(result);
            setTimeout(() => {
                this.task.wrongAnswer();
            }, 400);
            setTimeout(() => {
                this.player.healthBar.render(this.player.health);
                this.activeAttack = false;
                this.checkLosing();
            }, 6000);
        }
    }

    checkVictory() {
        if (!this.opponent.health) {
            this.gameStatus = 'win';
            this.battlefield.showFinalWindow(this.gameStatus);
        }
    }

    checkLosing() {
        if (!this.player.health) {
            this.gameStatus = 'lose';
            this.battlefield.showFinalWindow(this.gameStatus, this.level, this.solvedTasks);
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (GameController);

/***/ }),

/***/ "./src/js/Scenes/Score.js":
/*!********************************!*\
  !*** ./src/js/Scenes/Score.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Score {
    constructor() {
    }

    refreshScore(player) {
        if (!localStorage['angry-birds']) {
            localStorage['angry-birds'] = JSON.stringify([player]);
        } else {
            let score = JSON.parse(localStorage['angry-birds']);
            score.push(player);
            score.sort((a,b) => b.result - a.result);
            score.length > 10 ? score.pop() : score;
            localStorage['angry-birds'] = JSON.stringify(score);
        }
    }

    showScore(wrapper) {
        wrapper.innerHTML = '';
        if (!localStorage['angry-birds']) {
            wrapper.textContent = "Score list is empty..."
        } else {
            const scoreList = document.createElement('ol');
            const topScore = JSON.parse(localStorage['angry-birds']);
            topScore.forEach(item => this.createScoreItem (item, scoreList));
            wrapper.appendChild(scoreList);
        }
    }

    createScoreItem(item, list) {
        const scoreItem = document.createElement('li');
        const itemWrapper = document.createElement('div');
        const name = document.createElement('div');
        const score = document.createElement('div');
        itemWrapper.classList.add('score-item');
        name.textContent = item.name;
        score.textContent = item.result;
        itemWrapper.appendChild(name);
        itemWrapper.appendChild(score);
        scoreItem.appendChild(itemWrapper);
        list.appendChild(scoreItem);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./src/js/Scenes/StartPage.js":
/*!************************************!*\
  !*** ./src/js/Scenes/StartPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class StartPage {
    constructor() {
        this.startPage = document.getElementById('start-page');
        this.menu = document.getElementById('main-menu');
        this.scoreSection = document.getElementById('main-score-section');
        this.scoreContainer = document.getElementById('main-score-container');
        this.aboutSection = document.getElementById('main-about-section');
        this.startPage.addEventListener('click', (e) => this.handleEvents(e));
    }

    init(score) {
        this.score = score;
    }

    handleEvents(e) {
        let id = e.target.id;
        switch (id) {
            case 'new-game':  
                this.startGame();
                break;
            case 'about': 
                this.showGameDescription();
                break;
        }

        if (e.target.classList.contains('close-button')) {
            this.menu.classList.remove('hidden');
            e.target.parentNode.classList.add('hidden');
        }
    }

    startGame() {
        this.selectLocationPage = document.getElementById('location-select');
        this.selectLocationPage.classList.remove('hidden');
        this.startPage.classList.add('hidden');
    }

    showGameDescription() {
        this.aboutSection.classList.remove('hidden');
        this.menu.classList.add('hidden');
    }
}

/* harmony default export */ __webpack_exports__["default"] = (new StartPage());

/***/ }),

/***/ "./src/js/Tasks/Logos.js":
/*!*******************************!*\
  !*** ./src/js/Tasks/Logos.js ***!
  \*******************************/
/*! exports provided: Logos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logos", function() { return Logos; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");
/* harmony import */ var _Constants_LogosClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Constants/LogosClassNames */ "./src/js/Constants/LogosClassNames.js");



class LogosTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.classNamesArray = _Constants_LogosClassNames__WEBPACK_IMPORTED_MODULE_1__["CLASS_NAMES"];
        this.taskWrapper = document.getElementById('logos-task-field');
        this.itemsWrapper = document.getElementById('logo-wrapper');
        this.nameSpan = document.getElementById('logo-name');
        this.itemsWrapper.addEventListener('click', (e) => this.selectImage(e));
    }

    init() {
        super.init();
        this.itemsWrapper.innerHTML = '';
        this.selectedItem = null;
        this.shuffleArray(this.classNamesArray);
        this.logo = this.classNamesArray[0];
        this.nameSpan.textContent = this.classNamesArray[0].toUpperCase();
        this.otherLogos = this.classNamesArray.slice(1, 3);
        this.allItems = this.otherLogos.concat(this.logo);
        this.shuffleArray(this.allItems);
        this.createField();
    }

    createField() {
        this.allItems.forEach((item) => {
            let image = document.createElement('div');
            image.classList.add(item);
            this.itemsWrapper.appendChild(image);
        })
    }

    selectImage(e) {
        if (e.target.parentNode === this.itemsWrapper && e.target !== this.selectedItem) {
            e.target.classList.add('selected-logo');
            this.selectedItem ? this.selectedItem.classList.remove('selected-logo') : null;
            this.selectedItem = e.target;
        }
    }

    checkResult() {
        if (this.selectedItem && this.selectedItem.classList.contains(this.logo)) {
            return true;
        } else return false;
    }
}

const Logos = new LogosTask();

/***/ }),

/***/ "./src/js/Tasks/MathTask.js":
/*!**********************************!*\
  !*** ./src/js/Tasks/MathTask.js ***!
  \**********************************/
/*! exports provided: MathTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathTask", function() { return MathTask; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");


class MathExerciseTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.result = document.getElementById('result');
        this.operations = ['+', '-', '*', '/'];
        this.taskWrapper = document.getElementById("math-task-field");
        this.firstElement = document.getElementById('first-number');
        this.operator = document.getElementById('operation');
        this.secondElement = document.getElementById('second-number');
    }

    init() {
        super.init();
        this.result.value = '';
        this.generateOperation();
    }

    generateOperation() {
        let index = Math.floor(Math.random() * this.operations.length);
        this.generateNumbers(this.operations[index]);
    }

    generateNumbers(operation) {
        switch (operation) {
            case '+':  
                this.firstNumber = Math.floor(Math.random() * 100);
                this.secondNumber = Math.floor(Math.random() * 100);
                this.answer = this.firstNumber + this.secondNumber;
                break;
            case '-': 
                this.secondNumber = Math.floor(Math.random() * 100);
                this.firstNumber = Math.floor(Math.random() * 100) + this.secondNumber;
                this.answer = this.firstNumber - this.secondNumber;
                break;
            case '/': 
                this.secondNumber = Math.floor(Math.random() * 10) + 1;
                this.firstNumber = this.secondNumber * (Math.floor(Math.random() * 10) + 1);
                this.answer = this.firstNumber / this.secondNumber;
                break;
            case '*': 
                this.firstNumber = Math.floor(Math.random() * 100) + 1;
                this.secondNumber = Math.floor(Math.random() * 10) + 1;
                this.answer = this.firstNumber * this.secondNumber;
                break;
        }
        this.firstElement.textContent = this.firstNumber;
        this.operator.textContent = operation;
        this.secondElement.textContent = this.secondNumber;
    }

    checkResult() {
        if (+this.result.value === this.answer) {
            return true;
        } else return false
    }
}

const MathTask = new MathExerciseTask();



/***/ }),

/***/ "./src/js/Tasks/Task.js":
/*!******************************!*\
  !*** ./src/js/Tasks/Task.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Constants/Vocabulary */ "./src/js/Constants/Vocabulary.js");


class Task {
    constructor() {
        this.vocabulary = _Constants_Vocabulary__WEBPACK_IMPORTED_MODULE_0__["VOCABULARY"];
        this.taskSection = document.getElementById('task-field');
        this.correctAnswerField = document.getElementById('correct-answer');
        this.wrongAnswerField = document.getElementById('wrong-answer');
    }

    init() {
        this.taskSection.classList.remove('hidden');
        this.taskWrapper.classList.remove('hidden');
    }
    
    shuffleArray(array) {
        let i = array.length - 1
        for (i; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    correctAnswer() {
        this.taskSection.classList.add('hidden');
        this.taskWrapper.classList.add('hidden');
        this.correctAnswerField.classList.remove('hidden');
        setTimeout(() => {
            this.correctAnswerField.classList.add('hidden');
        }, 1000);
    }

    wrongAnswer() {
        this.taskSection.classList.add('hidden');
        this.taskWrapper.classList.add('hidden');
        this.wrongAnswerField.classList.remove('hidden');
        setTimeout(() => {
            this.wrongAnswerField.classList.add('hidden');
        }, 1000);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ }),

/***/ "./src/js/Tasks/TranslationTask.js":
/*!*****************************************!*\
  !*** ./src/js/Tasks/TranslationTask.js ***!
  \*****************************************/
/*! exports provided: Translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return Translation; });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/js/Tasks/Task.js");


class TranslationTask extends _Task__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.taskWrapper = document.getElementById('translation-task-field');
        this.wordContainer = document.getElementById('word-for-translation');
        this.answerInput = document.getElementById('translation-input');
    }

    init() {
        super.init();
        this.answerInput.value = '';
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
        this.translations = this.vocabulary[index].translation;
        this.wordContainer.textContent =  this.word.toUpperCase();
    }

    checkResult() {
        this.answer = this.answerInput.value.toLowerCase();
        if (this.translations.indexOf(this.answer) !== -1) {
           return true;
        } else return false;
    }
}

const Translation = new TranslationTask()

/***/ }),

/***/ "./src/js/Tasks/bundleTasks.js":
/*!*************************************!*\
  !*** ./src/js/Tasks/bundleTasks.js ***!
  \*************************************/
/*! exports provided: MathTask, Translation, Logos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MathTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MathTask */ "./src/js/Tasks/MathTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MathTask", function() { return _MathTask__WEBPACK_IMPORTED_MODULE_0__["MathTask"]; });

/* harmony import */ var _TranslationTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TranslationTask */ "./src/js/Tasks/TranslationTask.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return _TranslationTask__WEBPACK_IMPORTED_MODULE_1__["Translation"]; });

/* harmony import */ var _Logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logos */ "./src/js/Tasks/Logos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logos", function() { return _Logos__WEBPACK_IMPORTED_MODULE_2__["Logos"]; });





/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scenes_StartPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scenes/StartPage */ "./src/js/Scenes/StartPage.js");
/* harmony import */ var _Controllers_GameConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controllers/GameConfig */ "./src/js/Controllers/GameConfig.js");
/* harmony import */ var _Character_Character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Character/Character */ "./src/js/Character/Character.js");
/* harmony import */ var _Character_Enemy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Character/Enemy */ "./src/js/Character/Enemy.js");
/* harmony import */ var _Controllers_BattleFieldController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Controllers/BattleFieldController */ "./src/js/Controllers/BattleFieldController.js");
/* harmony import */ var _Controllers_GameController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controllers/GameController */ "./src/js/Controllers/GameController.js");
/* harmony import */ var _Constants_namesCollection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Constants/namesCollection */ "./src/js/Constants/namesCollection.js");
/* harmony import */ var _Scenes_Score__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Scenes/Score */ "./src/js/Scenes/Score.js");
/* harmony import */ var _Tasks_bundleTasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Tasks/bundleTasks */ "./src/js/Tasks/bundleTasks.js");
/* harmony import */ var _style_bundle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style/bundle.css */ "./src/style/bundle.css");
/* harmony import */ var _style_bundle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_bundle_css__WEBPACK_IMPORTED_MODULE_9__);












const score = new _Scenes_Score__WEBPACK_IMPORTED_MODULE_7__["default"]();
const player = new _Character_Character__WEBPACK_IMPORTED_MODULE_2__["default"]();
const opponent = new _Character_Enemy__WEBPACK_IMPORTED_MODULE_3__["default"](_Constants_namesCollection__WEBPACK_IMPORTED_MODULE_6__["default"]);
const battleField = new _Controllers_BattleFieldController__WEBPACK_IMPORTED_MODULE_4__["default"](score);
const gameController = new _Controllers_GameController__WEBPACK_IMPORTED_MODULE_5__["default"](battleField, opponent, _Tasks_bundleTasks__WEBPACK_IMPORTED_MODULE_8__);
const gameConfig = new _Controllers_GameConfig__WEBPACK_IMPORTED_MODULE_1__["default"](player, gameController);

const initApp = function () {
    _Scenes_StartPage__WEBPACK_IMPORTED_MODULE_0__["default"].init(score);
}

document.addEventListener("DOMContentLoaded", initApp());

/***/ }),

/***/ "./src/style/bundle.css":
/*!******************************!*\
  !*** ./src/style/bundle.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map