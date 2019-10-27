// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/GameContext.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var GameContext =
/** @class */
function () {
  function GameContext() {}

  GameContext.scale = 40;
  GameContext.context = null;
  return GameContext;
}();

var _default = GameContext;
exports.default = _default;
},{}],"src/Time.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var Time =
/** @class */
function () {
  function Time() {}

  Time.update = function () {
    var currentTime = Date.now();
    Time.deltaTime = (currentTime - Time.previousTime) / 1000;
    Time.previousTime = currentTime;
  }; // diferencia de tiempo entre último update y update actual


  Time.deltaTime = 0; // Número de milisegundos que han pasado desde 1970

  Time.previousTime = Date.now();
  return Time;
}();

exports["default"] = Time;
},{}],"src/Scene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var Scene =
/** @class */
function () {
  function Scene() {
    this.render = function () {};

    this.update = function () {};

    this.enter = function () {};

    this.keyUpHandler = function (event) {};

    this.keyDownHandler = function (event, engine) {};

    this.mouseHandler = function (event) {};

    this.clickHandler = function (event) {};
  }

  return Scene;
}();

var _default = Scene;
exports.default = _default;
},{}],"src/GameObject.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var GameObject =
/** @class */
function () {
  function GameObject() {
    this.render = function (n) {};

    this.update = function (n) {};
  }

  GameObject.velocityX = 4;
  GameObject.lastVelocity = 4;

  GameObject.getVelocity = function () {
    return GameObject.velocityX;
  };

  GameObject.changeVelocity = function (n) {
    switch (n) {
      case 1:
        GameObject.velocityX = 4;
        GameObject.lastVelocity = 4;
        break;

      case 2:
        GameObject.velocityX = 8;
        GameObject.lastVelocity = 8;
        break;

      case 3:
        GameObject.velocityX = 15;
        GameObject.lastVelocity = 15;
        break;

      default:
        break;
    }
  };

  return GameObject;
}();

var _default = GameObject;
exports.default = _default;
},{}],"assets/hola.png":[function(require,module,exports) {
module.exports = "/hola.4cb37aca.png";
},{}],"src/Enemies.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameObject = _interopRequireDefault(require("./GameObject"));

var _hola = _interopRequireDefault(require("./../assets/hola.png"));

var _GameContext = _interopRequireDefault(require("./GameContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Enemies =
/** @class */
function (_super) {
  __extends(Enemies, _super);

  function Enemies(index) {
    var _this = _super.call(this) || this;

    _this.imageEnemie = new Image();

    _this.getState = function () {
      return _this.state;
    };

    _this.setState = function (b) {
      _this.state = b;
    };

    _this.getLimits = function () {
      return [_this.up, _this.down, _this.right, _this.left];
    };

    _this.update = function (n) {
      var context = _GameContext.default.context;

      if (Enemies.posX + 290 >= context.canvas.width - Enemies.EnemiesWidth) {
        Enemies.direction = -1;
        Enemies.posY += 5;
      }

      if (Enemies.posX <= 10) {
        Enemies.direction = 1;
        Enemies.posY += 5;
      }

      Enemies.posX += 0.002 * Enemies.direction * _GameObject.default.getVelocity();

      if (n * Enemies.EnemiesWidth >= 300) {
        _this.x = Enemies.posX + n * Enemies.EnemiesWidth % 300;
      } else {
        _this.x = Enemies.posX + n * Enemies.EnemiesWidth;
      }

      _this.y = Enemies.posY + Math.floor(n / (300 / Enemies.EnemiesWidth)) * Enemies.EnemiesHeight;
      _this.up = _this.y;
      _this.down = _this.y + Enemies.EnemiesHeight;
      _this.right = _this.x + Enemies.EnemiesWidth;
      _this.left = _this.x;
    };

    _this.render = function (n) {
      var context = _GameContext.default.context;
      context.drawImage(_this.imageEnemie, _this.x, _this.y, Enemies.EnemiesWidth, Enemies.EnemiesHeight);
    };

    _this.imageEnemie.src = _hola.default;
    Enemies.direction = 1;
    Enemies.posX = 50;
    Enemies.posY = 40;
    _this.state = true;
    return _this;
  }

  Enemies.EnemiesWidth = 20;
  Enemies.EnemiesHeight = 20;
  return Enemies;
}(_GameObject.default);

var _default = Enemies;
exports.default = _default;
},{"./GameObject":"src/GameObject.ts","./../assets/hola.png":"assets/hola.png","./GameContext":"src/GameContext.ts"}],"src/Scenes/PauseScene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scene = _interopRequireDefault(require("../Scene"));

var _GameContext = _interopRequireDefault(require("../GameContext"));

var _MainMenuScene = _interopRequireDefault(require("./MainMenuScene"));

var _index = _interopRequireDefault(require("./../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var PauseScene =
/** @class */
function (_super) {
  __extends(PauseScene, _super);

  function PauseScene(scene, sound) {
    var _this = _super.call(this) || this;

    _this.options = ["PAUSE", "MENU", "RESUME"];
    _this.currentOption = 1;
    _this.width = _GameContext.default.context.canvas.width;
    _this.height = _GameContext.default.context.canvas.height;

    _this.enter = function () {};

    _this.keyDownHandler = function (event, engine) {
      var key = event.key;

      switch (key) {
        case "ArrowUp":
          _this.currentOption = (_this.currentOption - 1 + _this.options.length) % _this.options.length;

          if (_this.currentOption === 0) {
            _this.currentOption = _this.options.length - 1;
          }

          break;

        case "ArrowDown":
          _this.currentOption = (_this.currentOption + 1) % _this.options.length;

          if (_this.currentOption === 0) {
            _this.currentOption++;
          }

          break;

        case "Enter":
          if (_this.currentOption === 1) {
            delete _this.scene;

            if (_this.sound) {
              _index.default.changeSound(1);
            }

            engine.changeScene(new _MainMenuScene.default());
          }

          if (_this.currentOption === 2) {
            if (_this.sound) {
              _index.default.changeSound(1);
            }

            engine.changeScene(_this.scene);
          }

          break;

        default:
          break;
      }
    };

    _this.keyUpHandler = function (event) {
      var key = event.key;
    };

    _this.render = function () {
      var context = _GameContext.default.context;
      context.save();
      context.beginPath();
      context.fillStyle = "black";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.closePath();
      context.restore();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "red";
      context.strokeStyle = "red";
      context.font = "45px STARWARS";
      context.fillText(_this.options[0], _this.width / 2, _this.height / 3 + 0 * 30 + 50);
      context.closePath();
      context.restore();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "white";
      context.lineWidth = 5;
      context.strokeStyle = "red";
      context.font = "25px STARWARS";

      for (var i = 1; i < _this.options.length; i++) {
        if (i === _this.currentOption) {
          context.strokeText(_this.options[i], _this.width / 2, _this.height / 3 + i * 30 + 100);
        }

        context.fillText(_this.options[i], _this.width / 2, _this.height / 3 + i * 30 + 100);
      }

      context.closePath();
      context.restore();
    };

    _this.update = function () {};

    _this.scene = scene;
    _this.sound = sound;
    return _this;
  }

  return PauseScene;
}(_Scene.default);

var _default = PauseScene;
exports.default = _default;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./MainMenuScene":"src/Scenes/MainMenuScene.ts","./../index":"src/index.ts"}],"assets/ship3.png":[function(require,module,exports) {
module.exports = "/ship3.97d52671.png";
},{}],"src/Scenes/Player.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ship = _interopRequireDefault(require("./../../assets/ship3.png"));

var _GameContext = _interopRequireDefault(require("./../GameContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sWidth = 50;
var sHeight = 50;
var posY = 400 * 0.75;

var Player =
/** @class */
function () {
  function Player() {
    var _this = this;

    this.posX = 0;
    this.speed = 200;
    this.characterImage = new Image();

    this.getLimits = function () {
      return [_this.up, _this.down, _this.right, _this.left];
    };

    this.update = function () {
      _this.down = posY + sHeight;
      _this.right = _this.posX + sWidth;
      _this.left = _this.posX;
    };

    this.render = function () {
      var context = _GameContext.default.context;
      context.save();
      context.beginPath();
      context.drawImage(_this.characterImage, _this.posX, posY, sWidth, sHeight);
      context.closePath();
      context.restore();
    };

    this.characterImage.src = _ship.default;
    var context = _GameContext.default.context;
    var _a = context.canvas,
        width = _a.width,
        height = _a.height;
    this.posX = (width - sWidth) / 2;
    this.up = posY;
    this.down = posY + sHeight;
    this.right = this.posX + sWidth;
    this.left = this.posX;
  }

  Player.prototype.moving = function (event) {
    var xOffset = event.offsetX;
    this.posX = xOffset - sWidth / 2;
  };

  Player.prototype.getPosition = function () {
    return this.posX;
  };

  Player.prototype.getWidth = function () {
    return sWidth;
  };

  return Player;
}();

var _default = Player;
exports.default = _default;
},{"./../../assets/ship3.png":"assets/ship3.png","./../GameContext":"src/GameContext.ts"}],"src/Bullet.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameContext = _interopRequireDefault(require("./GameContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bullet =
/** @class */
function () {
  function Bullet(player) {
    var _this = this;

    this.width = 3;
    this.height = 25;
    this.velocity = -5;

    this.getPosY = function () {
      return _this.posY;
    };

    this.posX = player.getPosition() + player.getWidth() / 2;
    this.posY = 400 * 0.75;
    this.up = this.posY;
    this.down = this.posY + this.height;
    this.left = this.posX;
    this.right = this.posX + this.width;
  }

  Bullet.prototype.getLimits = function () {
    return [this.up, this.down, this.right, this.left];
  };

  Bullet.prototype.render = function () {
    var context = _GameContext.default.context;
    context.save();
    context.beginPath();
    context.fillStyle = "lime";
    context.fillRect(this.posX, this.posY, this.width, this.height);
  };

  Bullet.prototype.update = function () {
    this.posY += this.velocity;
    this.up = this.posY;
    this.down = this.posY + this.height;
    this.right = this.posX + this.width;
  };

  return Bullet;
}();

var _default = Bullet;
exports.default = _default;
},{"./GameContext":"src/GameContext.ts"}],"assets/pew.mp3":[function(require,module,exports) {
module.exports = "/pew.83a3c0e7.mp3";
},{}],"assets/10.jpg":[function(require,module,exports) {
module.exports = "/10.dbe49e2c.jpg";
},{}],"src/Scenes/GameOverScene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scene = _interopRequireDefault(require("./../Scene"));

var _GameContext = _interopRequireDefault(require("./../GameContext"));

var _ = _interopRequireDefault(require("./../../assets/10.jpg"));

var _MainMenuScene = _interopRequireDefault(require("./MainMenuScene"));

var _PlayingScene = _interopRequireDefault(require("./PlayingScene"));

var _GameObject = _interopRequireDefault(require("../GameObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var GameOverScene =
/** @class */
function (_super) {
  __extends(GameOverScene, _super);

  function GameOverScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = ["RESTART", "MENU"];
    _this.currentOption = 0;
    _this.width = _GameContext.default.context.canvas.width;
    _this.height = _GameContext.default.context.canvas.height;
    _this.image = new Image();

    _this.enter = function () {};

    _this.keyDownHandler = function (event, engine) {
      var key = event.key;

      switch (key) {
        case "ArrowUp":
          _this.currentOption = (_this.currentOption - 1 + _this.options.length) % _this.options.length;
          break;

        case "ArrowDown":
          _this.currentOption = (_this.currentOption + 1) % _this.options.length;
          break;

        case "Enter":
          if (_this.currentOption === 1) {
            _GameObject.default.velocityX = _GameObject.default.lastVelocity;
            engine.changeScene(new _MainMenuScene.default());
          }

          if (_this.currentOption === 0) {
            _GameObject.default.velocityX = _GameObject.default.lastVelocity;
            engine.changeScene(new _PlayingScene.default(engine));
          }

          break;

        default:
          break;
      }
    };

    _this.keyUpHandler = function (event) {
      var key = event.key;
    };

    _this.render = function () {
      _this.image.src = _.default;
      var context = _GameContext.default.context;
      context.save();
      context.beginPath();
      context.fillStyle = "black";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.closePath();
      context.restore();
      context.drawImage(_this.image, -220, -100);
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "white";
      context.strokeStyle = "red";
      context.font = "25px STARWARS";
      context.lineWidth = 5;

      for (var i = 0; i < _this.options.length; i++) {
        if (i === _this.currentOption) {
          context.strokeText(_this.options[i], _this.width / 2, _this.height / 2 + i * 30 + 130);
        }

        context.fillText(_this.options[i], _this.width / 2, _this.height / 2 + i * 30 + 130);
      }

      context.closePath();
      context.restore();
    };

    _this.update = function () {};

    return _this;
  }

  return GameOverScene;
}(_Scene.default);

var _default = GameOverScene;
exports.default = _default;
},{"./../Scene":"src/Scene.ts","./../GameContext":"src/GameContext.ts","./../../assets/10.jpg":"assets/10.jpg","./MainMenuScene":"src/Scenes/MainMenuScene.ts","./PlayingScene":"src/Scenes/PlayingScene.ts","../GameObject":"src/GameObject.ts"}],"src/Scenes/PlayingScene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scene = _interopRequireDefault(require("./../Scene"));

var _GameObject = _interopRequireDefault(require("../GameObject"));

var _GameContext = _interopRequireDefault(require("../GameContext"));

var _Enemies = _interopRequireDefault(require("../Enemies"));

var _PauseScene = _interopRequireDefault(require("./PauseScene"));

var _index = _interopRequireDefault(require("./../index"));

var _Player = _interopRequireDefault(require("./Player"));

var _Bullet = _interopRequireDefault(require("../Bullet"));

var _pew = _interopRequireDefault(require("./../../assets/pew.mp3"));

var _GameOverScene = _interopRequireDefault(require("./GameOverScene"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var PlayingScene =
/** @class */
function (_super) {
  __extends(PlayingScene, _super);

  function PlayingScene(engine) {
    var _this = _super.call(this) || this;

    _this.enemies = [];
    _this.numberOfEnemies = 60;
    _this.player = null;
    _this.bullets = [];

    _this.colicion = function (enemie, bullet) {
      var bUp = bullet.getLimits()[0];
      var bDown = bullet.getLimits()[1];
      var bRight = bullet.getLimits()[2];
      var bleft = bullet.getLimits()[3];
      var eUp = enemie.getLimits()[0];
      var eDown = enemie.getLimits()[1];
      var eRight = enemie.getLimits()[2];
      var eLeft = enemie.getLimits()[3]; //console.log(bleft, "<", eRight, "  ", bRight, ">", eLeft, "  ", bUp, " > ", eDown, "  ", bDown, " < ", eUp);

      if (bleft < eRight && bRight > eLeft && bUp < eDown && bDown > eUp) {
        console.log(true);
        return true;
      }

      return false;
    };

    _this.colicionPlayer = function (enemie, player) {
      var bUp = player.getLimits()[0];
      var bDown = player.getLimits()[1];
      var bRight = player.getLimits()[2];
      var bleft = player.getLimits()[3];
      var eUp = enemie.getLimits()[0];
      var eDown = enemie.getLimits()[1];
      var eRight = enemie.getLimits()[2];
      var eLeft = enemie.getLimits()[3]; //console.log(bleft, "<", eRight, "  ", bRight, ">", eLeft, "  ", bUp, " > ", eDown, "  ", bDown, " < ", eUp);

      if (bleft < eRight && bRight > eLeft && bUp < eDown && bDown > eUp) {
        console.log(true);
        return true;
      }

      return false;
    };

    _this.render = function () {
      var context = _GameContext.default.context;
      var _a = _GameContext.default.context.canvas,
          width = _a.width,
          height = _a.height;
      context.save();
      context.beginPath();
      context.fillStyle = "black";
      context.fillRect(0, 0, width, height);
      context.closePath();
      context.restore();

      for (var index_1 = 0; index_1 < _this.enemies.length; index_1++) {
        var element = _this.enemies[index_1];

        if (element.getState()) {
          element.render(index_1);
        }

        element.update(index_1);
      }

      _this.player.render();

      for (var index_2 = 0; index_2 < _this.bullets.length; index_2++) {
        var element = _this.bullets[index_2];
        element.render();
      }
    };

    _this.enter = function () {};

    _this.update = function () {
      return __awaiter(_this, void 0, void 0, function () {
        var context, index_3, element, _loop_1, this_1, index_4, index_5, element, bool, index_6, element, aux, index_7, index_8, element;

        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              context = _GameContext.default.context;
              this.player.update();

              for (index_3 = 0; index_3 < this.bullets.length; index_3++) {
                element = this.bullets[index_3];
                element.update();
              }

              this.bullets = this.bullets.filter(function (ele) {
                if (ele.getPosY() != 0) {
                  return ele;
                }
              });

              _loop_1 = function _loop_1(index_4) {
                var element = this_1.enemies[index_4];

                if (element.getState()) {
                  this_1.bullets = this_1.bullets.filter(function (bul) {
                    if (!_this.colicion(element, bul)) {
                      return bul;
                    } else element.setState(false);
                  });
                }
              };

              this_1 = this;

              for (index_4 = 0; index_4 < this.enemies.length; index_4++) {
                _loop_1(index_4);
              }

              for (index_5 = 0; index_5 < this.enemies.length; index_5++) {
                element = this.enemies[index_5];

                if (!element.getState()) {
                  _GameObject.default.velocityX += 0.002;
                }
              }

              bool = false;
              index_6 = 0;
              _a.label = 1;

            case 1:
              if (!(index_6 < this.enemies.length)) return [3
              /*break*/
              , 4];
              element = this.enemies[index_6];
              return [4
              /*yield*/
              , element.getState()];

            case 2:
              aux = _a.sent();

              if (!aux) {
                bool = true;
              } else {
                bool = false;
                return [3
                /*break*/
                , 4];
              }

              ;
              _a.label = 3;

            case 3:
              index_6++;
              return [3
              /*break*/
              , 1];

            case 4:
              if (bool) {
                this.enemies = [];
                this.numberOfEnemies += 10;
                _GameObject.default.velocityX = _GameObject.default.lastVelocity;
                this.bullets = [];

                for (index_7 = 0; index_7 < this.numberOfEnemies; index_7++) {
                  this.enemies.push(new _Enemies.default(index_7));
                }
              }

              for (index_8 = 0; index_8 < this.enemies.length; index_8++) {
                element = this.enemies[index_8];

                if (element.getLimits()[1] >= context.canvas.height || this.colicionPlayer(element, this.player) && element.getState()) {
                  console.log('hola');
                  this.engine.changeScene(new _GameOverScene.default());
                }
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    _this.keyUpHandler = function (event) {
      var key = event.key;
    };

    _this.keyDownHandler = function (event, engine) {
      var key = event.key;

      if (key === 'p') {
        engine.changeScene(new _PauseScene.default(_this, _index.default.getSoundState()));

        _index.default.changeSound(2);
      }
    };

    _this.mouseHandler = function (event) {
      _this.player.moving(event);
    };

    _this.clickHandler = function (event) {
      return __awaiter(_this, void 0, void 0, function () {
        var audio;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              audio = document.createElement('audio');
              audio.src = _pew.default;
              return [4
              /*yield*/
              , audio.play()];

            case 1:
              _a.sent();

              this.bullets.push(new _Bullet.default(this.player));
              return [2
              /*return*/
              ];
          }
        });
      });
    };

    for (var index_9 = 0; index_9 < _this.numberOfEnemies; index_9++) {
      _this.enemies.push(new _Enemies.default(index_9));
    }

    _this.player = new _Player.default();
    _this.engine = engine;
    return _this;
  }

  return PlayingScene;
}(_Scene.default);

var _default = PlayingScene;
exports.default = _default;
},{"./../Scene":"src/Scene.ts","../GameObject":"src/GameObject.ts","../GameContext":"src/GameContext.ts","../Enemies":"src/Enemies.ts","./PauseScene":"src/Scenes/PauseScene.ts","./../index":"src/index.ts","./Player":"src/Scenes/Player.ts","../Bullet":"src/Bullet.ts","./../../assets/pew.mp3":"assets/pew.mp3","./GameOverScene":"src/Scenes/GameOverScene.ts"}],"assets/imageedit_2_7701798241.jpg":[function(require,module,exports) {
module.exports = "/imageedit_2_7701798241.d43096d5.jpg";
},{}],"src/Scenes/DificultyScene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scene = _interopRequireDefault(require("../Scene"));

var _GameContext = _interopRequireDefault(require("../GameContext"));

var _MainMenuScene = _interopRequireDefault(require("./MainMenuScene"));

var _SettingsScene = _interopRequireDefault(require("./SettingsScene"));

var _Enemies = _interopRequireDefault(require("../Enemies"));

var _GameObject = _interopRequireDefault(require("../GameObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var DIficultyScene =
/** @class */
function (_super) {
  __extends(DIficultyScene, _super);

  function DIficultyScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = ["DIFICULTY", "EASY", "MEDIUM", "HARD", "BACK"];
    _this.currentOption = 1;
    _this.width = _GameContext.default.context.canvas.width;
    _this.height = _GameContext.default.context.canvas.height;
    _this.enemies = _Enemies.default;

    _this.enter = function () {};

    _this.keyDownHandler = function (event, engine) {
      var key = event.key;

      switch (key) {
        case "ArrowUp":
          _this.currentOption = (_this.currentOption - 1 + _this.options.length) % _this.options.length;

          if (_this.currentOption === 0) {
            _this.currentOption = _this.options.length - 1;
          }

          break;

        case "ArrowDown":
          _this.currentOption = (_this.currentOption + 1) % _this.options.length;

          if (_this.currentOption === 0) {
            _this.currentOption++;
          }

          break;

        case "Enter":
          if (_this.currentOption === 4) {
            engine.changeScene(new _SettingsScene.default());
          } else {
            _GameObject.default.changeVelocity(_this.currentOption);

            engine.changeScene(new _MainMenuScene.default());
          }

          break;

        default:
          break;
      }
    };

    _this.keyUpHandler = function (event) {
      var key = event.key;
    };

    _this.render = function () {
      var context = _GameContext.default.context;
      context.save();
      context.beginPath();
      context.fillStyle = "black";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.closePath();
      context.restore();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "red";
      context.strokeStyle = "red";
      context.font = "45px STARWARS";
      context.fillText(_this.options[0], _this.width / 2, _this.height / 3 + 0 * 30 + 50);
      context.closePath();
      context.restore();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "white";
      context.strokeStyle = "red";
      context.font = "25px STARWARS";
      context.lineWidth = 5;

      for (var i = 1; i < _this.options.length - 1; i++) {
        if (i === _this.currentOption) {
          context.strokeText(_this.options[i], _this.width / 2, _this.height / 3 + i * 30 + 100);
        }

        if (_this.currentOption === 4) {
          context.strokeText(_this.options[4], _this.width / 2, 385);
        }

        context.fillText(_this.options[i], _this.width / 2, _this.height / 3 + i * 30 + 100);
        context.fillText(_this.options[4], _this.width / 2, 385);
      }

      context.closePath();
      context.restore();
    };

    _this.update = function () {};

    return _this;
  }

  return DIficultyScene;
}(_Scene.default);

var _default = DIficultyScene;
exports.default = _default;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./MainMenuScene":"src/Scenes/MainMenuScene.ts","./SettingsScene":"src/Scenes/SettingsScene.ts","../Enemies":"src/Enemies.ts","../GameObject":"src/GameObject.ts"}],"src/Scenes/SoundScene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scene = _interopRequireDefault(require("../Scene"));

var _GameContext = _interopRequireDefault(require("../GameContext"));

var _SettingsScene = _interopRequireDefault(require("./SettingsScene"));

var _index = _interopRequireDefault(require("./../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var SoundScene =
/** @class */
function (_super) {
  __extends(SoundScene, _super);

  function SoundScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = ["SOUND", "ON", "OFF", "BACK"];
    _this.currentOption = 1;
    _this.width = _GameContext.default.context.canvas.width;
    _this.height = _GameContext.default.context.canvas.height;

    _this.enter = function () {};

    _this.keyDownHandler = function (event, engine) {
      var key = event.key;

      switch (key) {
        case "ArrowUp":
          _this.currentOption = (_this.currentOption - 1 + _this.options.length) % _this.options.length;

          if (_this.currentOption === 0) {
            _this.currentOption = _this.options.length - 1;
          }

          break;

        case "ArrowDown":
          _this.currentOption = (_this.currentOption + 1) % _this.options.length;

          if (_this.currentOption === 0) {
            _this.currentOption++;
          }

          break;

        case "Enter":
          if (_this.currentOption === 3) {
            engine.changeScene(new _SettingsScene.default());
          }

          if (_this.currentOption === 2 || _this.currentOption === 1) {
            _index.default.changeSound(_this.currentOption);

            engine.changeScene(new _SettingsScene.default());
          }

          break;

        default:
          break;
      }
    };

    _this.keyUpHandler = function (event) {
      var key = event.key;
    };

    _this.render = function () {
      var context = _GameContext.default.context;
      context.save();
      context.beginPath();
      context.fillStyle = "black";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.closePath();
      context.restore();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "red";
      context.strokeStyle = "red";
      context.font = "45px STARWARS";
      context.fillText(_this.options[0], _this.width / 2, _this.height / 3 + 0 * 30 + 50);
      context.closePath();
      context.restore();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "white";
      context.strokeStyle = "red";
      context.font = "25px STARWARS";
      context.lineWidth = 5;

      for (var i = 1; i < _this.options.length - 1; i++) {
        if (i === _this.currentOption) {
          context.strokeText(_this.options[i], _this.width / 2, _this.height / 3 + i * 30 + 100);
        }

        if (_this.currentOption === 3) {
          context.strokeText(_this.options[3], _this.width / 2, 385);
        }

        context.fillText(_this.options[i], _this.width / 2, _this.height / 3 + i * 30 + 100);
        context.fillText(_this.options[3], _this.width / 2, 385);
      }

      context.closePath();
      context.restore();
    };

    _this.update = function () {};

    return _this;
  }

  return SoundScene;
}(_Scene.default);

var _default = SoundScene;
exports.default = _default;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./SettingsScene":"src/Scenes/SettingsScene.ts","./../index":"src/index.ts"}],"src/Scenes/SettingsScene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scene = _interopRequireDefault(require("../Scene"));

var _GameContext = _interopRequireDefault(require("../GameContext"));

var _MainMenuScene = _interopRequireDefault(require("./MainMenuScene"));

var _DificultyScene = _interopRequireDefault(require("./DificultyScene"));

var _SoundScene = _interopRequireDefault(require("./SoundScene"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var SettingsScene =
/** @class */
function (_super) {
  __extends(SettingsScene, _super);

  function SettingsScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = ["SETTINGS", "SOUND", "DIFICULTY", "BACK"];
    _this.currentOption = 1;
    _this.width = _GameContext.default.context.canvas.width;
    _this.height = _GameContext.default.context.canvas.height;

    _this.enter = function () {};

    _this.keyDownHandler = function (event, engine) {
      var key = event.key;

      switch (key) {
        case "ArrowUp":
          _this.currentOption = (_this.currentOption - 1 + _this.options.length) % _this.options.length;

          if (_this.currentOption === 0) {
            _this.currentOption = _this.options.length - 1;
          }

          break;

        case "ArrowDown":
          _this.currentOption = (_this.currentOption + 1) % _this.options.length;

          if (_this.currentOption === 0) {
            _this.currentOption++;
          }

          break;

        case "Enter":
          if (_this.currentOption === 3) {
            engine.changeScene(new _MainMenuScene.default());
          }

          if (_this.currentOption === 2) {
            engine.changeScene(new _DificultyScene.default());
          }

          if (_this.currentOption === 1) {
            engine.changeScene(new _SoundScene.default());
          }

          break;

        default:
          break;
      }
    };

    _this.keyUpHandler = function (event) {
      var key = event.key;
    };

    _this.render = function () {
      var context = _GameContext.default.context;
      context.save();
      context.beginPath();
      context.fillStyle = "black";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.closePath();
      context.restore();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "red";
      context.strokeStyle = "red";
      context.font = "45px STARWARS";
      context.fillText(_this.options[0], _this.width / 2, _this.height / 3 + 0 * 30 + 50);
      context.closePath();
      context.restore();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "white";
      context.strokeStyle = "red";
      context.font = "25px STARWARS";
      context.lineWidth = 5;

      for (var i = 1; i < _this.options.length; i++) {
        if (i === _this.currentOption) {
          context.strokeText(_this.options[i], _this.width / 2, _this.height / 3 + i * 30 + 130);
        }

        context.fillText(_this.options[i], _this.width / 2, _this.height / 3 + i * 30 + 130);
      }

      context.closePath();
      context.restore();
    };

    _this.update = function () {};

    return _this;
  }

  return SettingsScene;
}(_Scene.default);

var _default = SettingsScene;
exports.default = _default;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./MainMenuScene":"src/Scenes/MainMenuScene.ts","./DificultyScene":"src/Scenes/DificultyScene.ts","./SoundScene":"src/Scenes/SoundScene.ts"}],"src/Scenes/MainMenuScene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Scene = _interopRequireDefault(require("../Scene"));

var _GameContext = _interopRequireDefault(require("../GameContext"));

var _PlayingScene = _interopRequireDefault(require("./PlayingScene"));

var _imageedit_2_ = _interopRequireDefault(require("./../../assets/imageedit_2_7701798241.jpg"));

var _SettingsScene = _interopRequireDefault(require("./SettingsScene"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var MainMenuScene =
/** @class */
function (_super) {
  __extends(MainMenuScene, _super);

  function MainMenuScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.currentOption = 0;
    _this.options = ["PLAY", "SETTINGS"];
    _this.width = _GameContext.default.context.canvas.width;
    _this.height = _GameContext.default.context.canvas.height;
    _this.image = new Image();

    _this.render = function () {
      _this.image.src = _imageedit_2_.default;
      var context = _GameContext.default.context;
      context.save();
      context.beginPath();
      context.fillStyle = "black";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.closePath();
      context.restore();
      context.drawImage(_this.image, -72, 0);
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "white";
      context.strokeStyle = "red";
      context.font = "25px STARWARS";
      context.lineWidth = 5;

      for (var i = 0; i < _this.options.length; i++) {
        if (i === _this.currentOption) {
          context.strokeText(_this.options[i], _this.width / 2, _this.height / 2 + i * 30 + 130);
        }

        context.fillText(_this.options[i], _this.width / 2, _this.height / 2 + i * 30 + 130);
      }

      context.closePath();
      context.restore();
    };

    _this.update = function () {};

    _this.keyUpHandler = function (event) {};

    _this.keyDownHandler = function (event, engine) {
      var key = event.key;

      switch (key) {
        case "ArrowUp":
          _this.currentOption = (_this.currentOption - 1 + _this.options.length) % _this.options.length;
          break;

        case "ArrowDown":
          _this.currentOption = (_this.currentOption + 1) % _this.options.length;
          break;

        case "Enter":
          if (_this.currentOption === 0) {
            engine.changeScene(new _PlayingScene.default(engine));
          }

          if (_this.currentOption === 1) {
            engine.changeScene(new _SettingsScene.default());
          }

          break;

        default:
          break;
      }
    };

    _this.enter = function () {};

    return _this;
  }

  return MainMenuScene;
}(_Scene.default);

var _default = MainMenuScene;
exports.default = _default;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./PlayingScene":"src/Scenes/PlayingScene.ts","./../../assets/imageedit_2_7701798241.jpg":"assets/imageedit_2_7701798241.jpg","./SettingsScene":"src/Scenes/SettingsScene.ts"}],"src/Engine.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GameContext = _interopRequireDefault(require("./GameContext"));

var _Time = _interopRequireDefault(require("./Time"));

var _MainMenuScene = _interopRequireDefault(require("./Scenes/MainMenuScene"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Engine =
/** @class */
function () {
  function Engine() {
    var _this = this;

    this.curretScene = null; // Iniciar el motor del juego.

    this.changeScene = function (scene) {
      _this.curretScene = scene;

      _this.curretScene.enter();
    };

    this.start = function () {
      _this.init();

      requestAnimationFrame(_this.tick);
    };

    this.keydownHandler = function (event) {
      _this.curretScene.keyDownHandler(event, _this);
    };

    this.keyupHandler = function (event) {
      _this.curretScene.keyUpHandler(event);
    }; // Limpiar pantalla y dibujar fondo.


    this.clearScreen = function () {
      var context = _GameContext.default.context;
      var canvas = context.canvas;
      var width = canvas.width;
      var height = canvas.height;
      context.save();
      context.beginPath();
      context.fillStyle = "white";
      context.fillRect(0, 0, width, height);
      context.closePath();
      context.restore();
    };

    this.init = function () {
      _this.curretScene = new _MainMenuScene.default();

      _this.curretScene.enter();
    }; // Método que se ejecuta en cada frame del juego.


    this.tick = function () {
      _this.clearScreen();

      _Time.default.update();

      _this.curretScene.update();

      _this.curretScene.render();

      requestAnimationFrame(_this.tick);
    };

    this.mouseHandler = function (event) {
      _this.curretScene.mouseHandler(event);
    };

    this.clickHandler = function (event) {
      _this.curretScene.clickHandler(event);
    };
  }

  return Engine;
}();

var _default = Engine;
exports.default = _default;
},{"./GameContext":"src/GameContext.ts","./Time":"src/Time.ts","./Scenes/MainMenuScene":"src/Scenes/MainMenuScene.ts"}],"assets/sound.mp3":[function(require,module,exports) {
module.exports = "/sound.e6fffd27.mp3";
},{}],"src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Engine = _interopRequireDefault(require("./Engine"));

var _GameContext = _interopRequireDefault(require("./GameContext"));

var _sound = _interopRequireDefault(require("./../assets/sound.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = void 0;

//  Nota: No es necesario escribir código nuevo en este archivo.
var sound = true;
var music = document.createElement("audio");
music.src = _sound.default;
music.loop = true;

var changeSound = function changeSound(n) {
  return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(n === 1)) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , music.play()];

        case 1:
          _a.sent();

          sound = true;
          _a.label = 2;

        case 2:
          if (!(n === 2)) return [3
          /*break*/
          , 4];
          return [4
          /*yield*/
          , music.pause()];

        case 3:
          _a.sent();

          sound = false;
          _a.label = 4;

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
};

var canvas = document.getElementById("game-area");
var context = canvas.getContext("2d");
_GameContext.default.context = context;
var engine = new _Engine.default();
changeSound(1);

var getSoundState = function getSoundState() {
  return sound;
};

engine.start();
canvas.addEventListener("keydown", engine.keydownHandler);
canvas.addEventListener("keyup", engine.keyupHandler);
canvas.addEventListener('mousemove', engine.mouseHandler);
canvas.addEventListener('mousedown', engine.clickHandler); //hola

var _default = {
  changeSound: changeSound,
  getSoundState: getSoundState
};
exports.default = _default;
},{"./Engine":"src/Engine.ts","./GameContext":"src/GameContext.ts","./../assets/sound.mp3":"assets/sound.mp3"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38731" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map