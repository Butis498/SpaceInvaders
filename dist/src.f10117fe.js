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

exports.__esModule = true;

var GameContext =
/** @class */
function () {
  function GameContext() {}

  GameContext.scale = 40;
  GameContext.context = null;
  return GameContext;
}();

exports["default"] = GameContext;
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

exports.__esModule = true;

var Scene =
/** @class */
function () {
  function Scene() {
    this.render = function () {};

    this.update = function () {};

    this.enter = function () {};

    this.keyUpHandler = function (event) {};

    this.keyDownHandler = function (event, engine) {};
  }

  return Scene;
}();

exports["default"] = Scene;
},{}],"assets/imageedit_2_7701798241.jpg":[function(require,module,exports) {
module.exports = "/imageedit_2_7701798241.d43096d5.jpg";
},{}],"assets/10.jpg":[function(require,module,exports) {
module.exports = "/10.dbe49e2c.jpg";
},{}],"src/Scenes/GameOverScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var Scene_1 = __importDefault(require("./../Scene"));

var GameContext_1 = __importDefault(require("./../GameContext"));

var _10_jpg_1 = __importDefault(require("./../../assets/10.jpg"));

var MainMenuScene_1 = __importDefault(require("./MainMenuScene"));

var GameOverScene =
/** @class */
function (_super) {
  __extends(GameOverScene, _super);

  function GameOverScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = ["RESTART", "MENU"];
    _this.currentOption = 0;
    _this.width = GameContext_1["default"].context.canvas.width;
    _this.height = GameContext_1["default"].context.canvas.height;
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
            engine.changeScene(new MainMenuScene_1["default"]());
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
      _this.image.src = _10_jpg_1["default"];
      var context = GameContext_1["default"].context;
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
}(Scene_1["default"]);

exports["default"] = GameOverScene;
},{"./../Scene":"src/Scene.ts","./../GameContext":"src/GameContext.ts","./../../assets/10.jpg":"assets/10.jpg","./MainMenuScene":"src/Scenes/MainMenuScene.ts"}],"src/Scenes/DificultyScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var Scene_1 = __importDefault(require("../Scene"));

var GameContext_1 = __importDefault(require("../GameContext"));

var SettingsScene_1 = __importDefault(require("./SettingsScene"));

var DIficultyScene =
/** @class */
function (_super) {
  __extends(DIficultyScene, _super);

  function DIficultyScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = ["DIFICULTY", "EASY", "MEDIUM", "HARD", "BACK"];
    _this.currentOption = 0;
    _this.width = GameContext_1["default"].context.canvas.width;
    _this.height = GameContext_1["default"].context.canvas.height;

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
          if (_this.currentOption === 4) {
            engine.changeScene(new SettingsScene_1["default"]());
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
      var context = GameContext_1["default"].context;
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
}(Scene_1["default"]);

exports["default"] = DIficultyScene;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./SettingsScene":"src/Scenes/SettingsScene.ts"}],"src/Scenes/SoundScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var Scene_1 = __importDefault(require("../Scene"));

var GameContext_1 = __importDefault(require("../GameContext"));

var SettingsScene_1 = __importDefault(require("./SettingsScene"));

var SoundScene =
/** @class */
function (_super) {
  __extends(SoundScene, _super);

  function SoundScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = ["SOUND", "ON", "OFF", "BACK"];
    _this.currentOption = 0;
    _this.width = GameContext_1["default"].context.canvas.width;
    _this.height = GameContext_1["default"].context.canvas.height;

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
          if (_this.currentOption === 3) {
            engine.changeScene(new SettingsScene_1["default"]());
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
      var context = GameContext_1["default"].context;
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
}(Scene_1["default"]);

exports["default"] = SoundScene;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./SettingsScene":"src/Scenes/SettingsScene.ts"}],"src/Scenes/SettingsScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var Scene_1 = __importDefault(require("../Scene"));

var GameContext_1 = __importDefault(require("../GameContext"));

var MainMenuScene_1 = __importDefault(require("./MainMenuScene"));

var DificultyScene_1 = __importDefault(require("./DificultyScene"));

var SoundScene_1 = __importDefault(require("./SoundScene"));

var SettingsScene =
/** @class */
function (_super) {
  __extends(SettingsScene, _super);

  function SettingsScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = ["SETTINGS", "SOUND", "DIFICULTY", "BACK"];
    _this.currentOption = 0;
    _this.width = GameContext_1["default"].context.canvas.width;
    _this.height = GameContext_1["default"].context.canvas.height;

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
          if (_this.currentOption === 3) {
            engine.changeScene(new MainMenuScene_1["default"]());
          }

          if (_this.currentOption === 2) {
            engine.changeScene(new DificultyScene_1["default"]());
          }

          if (_this.currentOption === 1) {
            engine.changeScene(new SoundScene_1["default"]());
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
      var context = GameContext_1["default"].context;
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
}(Scene_1["default"]);

exports["default"] = SettingsScene;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./MainMenuScene":"src/Scenes/MainMenuScene.ts","./DificultyScene":"src/Scenes/DificultyScene.ts","./SoundScene":"src/Scenes/SoundScene.ts"}],"src/Scenes/MainMenuScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
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

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var Scene_1 = __importDefault(require("../Scene"));

var GameContext_1 = __importDefault(require("../GameContext"));

var imageedit_2_7701798241_jpg_1 = __importDefault(require("./../../assets/imageedit_2_7701798241.jpg"));

var GameOverScene_1 = __importDefault(require("./GameOverScene"));

var SettingsScene_1 = __importDefault(require("./SettingsScene"));

var MainMenuScene =
/** @class */
function (_super) {
  __extends(MainMenuScene, _super);

  function MainMenuScene() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.currentOption = 0;
    _this.options = ["PLAY", "SETTINGS"];
    _this.width = GameContext_1["default"].context.canvas.width;
    _this.height = GameContext_1["default"].context.canvas.height;
    _this.image = new Image();

    _this.render = function () {
      _this.image.src = imageedit_2_7701798241_jpg_1["default"];
      var context = GameContext_1["default"].context;
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
            engine.changeScene(new GameOverScene_1["default"]());
          }

          if (_this.currentOption === 1) {
            engine.changeScene(new SettingsScene_1["default"]());
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
}(Scene_1["default"]);

exports["default"] = MainMenuScene;
},{"../Scene":"src/Scene.ts","../GameContext":"src/GameContext.ts","./../../assets/imageedit_2_7701798241.jpg":"assets/imageedit_2_7701798241.jpg","./GameOverScene":"src/Scenes/GameOverScene.ts","./SettingsScene":"src/Scenes/SettingsScene.ts"}],"src/Engine.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var GameContext_1 = __importDefault(require("./GameContext"));

var Time_1 = __importDefault(require("./Time"));

var MainMenuScene_1 = __importDefault(require("./Scenes/MainMenuScene"));

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
      var context = GameContext_1["default"].context;
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
      _this.curretScene = new MainMenuScene_1["default"]();

      _this.curretScene.enter();
    }; // Método que se ejecuta en cada frame del juego.


    this.tick = function () {
      _this.clearScreen();

      Time_1["default"].update();

      _this.curretScene.update();

      _this.curretScene.render();

      requestAnimationFrame(_this.tick);
    };
  }

  return Engine;
}();

exports["default"] = Engine;
},{"./GameContext":"src/GameContext.ts","./Time":"src/Time.ts","./Scenes/MainMenuScene":"src/Scenes/MainMenuScene.ts"}],"src/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var Engine_1 = __importDefault(require("./Engine"));

var GameContext_1 = __importDefault(require("./GameContext")); //  Nota: No es necesario escribir código nuevo en este archivo.


var canvas = document.getElementById("game-area");
var context = canvas.getContext("2d");
GameContext_1["default"].context = context;
var engine = new Engine_1["default"]();
engine.start();
canvas.addEventListener("keydown", engine.keydownHandler);
canvas.addEventListener("keyup", engine.keyupHandler);
},{"./Engine":"src/Engine.ts","./GameContext":"src/GameContext.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33263" + '/');

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