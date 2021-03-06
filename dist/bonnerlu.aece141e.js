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
})({"mydata.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.atomObjects = exports.atomNames = void 0;
exports.atomNames = ["Aluminum", "Barium", "Carbon", "Dubnium", "Erbium", "Fluor", "Gallium", "Hydrogen", "Helium", "Iron", "Krypton", "Lithium", "Magnesium", "Nitrogen", "Oxygen", "Palladium", "Radon", "Silicon", "Titanium", "Uranium", "Vanadium", "Xenon", "Zinc"];
exports.atomObjects = [{
  name: "Aluminum",
  weight: 26.982
}, {
  name: "Barium",
  weight: 137.33
}, {
  name: "Carbon",
  weight: 12.011
}, {
  name: "Dubnium",
  weight: 268
}, {
  name: "Erbium",
  weight: 167.26
}, {
  name: "Fluor",
  weight: 18.988
}, {
  name: "Gallium",
  weight: 69.723
}, {
  name: "Hydrogen",
  weight: 1.008
}, {
  name: "Helium",
  weight: 4.0026
}, {
  name: "Iron",
  weight: 55.845
}, {
  name: "Krypton",
  weight: 83.798
}, {
  name: "Lithium",
  weight: 6.94
}, {
  name: "Magnesium",
  weight: 24.305
}, {
  name: "Nitrogen",
  weight: 14.007
}, {
  name: "Oxygen",
  weight: 15.999
}, {
  name: "Palladium",
  weight: 106.42
}, {
  name: "Radon",
  weight: 222
}, {
  name: "Silicon",
  weight: 28.085
}, {
  name: "Titanium",
  weight: 47.867
}, {
  name: "Uranium",
  weight: 238.03
}, {
  name: "Vanadium",
  weight: 50.942
}, {
  name: "Xenon",
  weight: 131.29
}, {
  name: "Zinc",
  weight: 65.38
}];
},{}],"bonnerlu.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var mydata_1 = require("./mydata");

var mydata_2 = require("./mydata");

var divTarg1 = document.getElementById("part1");
var orderedList1 = document.createElement("listSection");
orderedList1 === null || orderedList1 === void 0 ? void 0 : orderedList1.setAttribute("id", "orderedList");
var ol1 = document.createElement("ol");
divTarg1 === null || divTarg1 === void 0 ? void 0 : divTarg1.appendChild(orderedList1);
orderedList1.appendChild(ol1);

for (var i = 0; i < mydata_1.atomNames.length; i++) {
  var li = document.createElement("li");
  ol1.appendChild(li);
  li.innerHTML = li.innerHTML + mydata_1.atomNames[i];
}

var divTarg2 = document.getElementById("part2");
var orderedList2 = document.createElement("listSection");
orderedList2 === null || orderedList2 === void 0 ? void 0 : orderedList2.setAttribute("id", "orderedList");
var ol2 = document.createElement("ol");
divTarg2 === null || divTarg2 === void 0 ? void 0 : divTarg2.appendChild(orderedList2);
orderedList2.appendChild(ol2);

for (var i = 0; i < mydata_2.atomObjects.length; i++) {
  var li = document.createElement("li");
  ol2.appendChild(li);
  li.innerHTML = li.innerHTML + mydata_2.atomObjects[i].name + "(weight: " + mydata_2.atomObjects[i].weight + ")";

  if (mydata_2.atomObjects[i].weight > 150) {
    li.classList.add("heavy");
  } else {
    li.classList.add("light");
  }
}

var divTarg3 = document.getElementById("part3");
var tableSection = document.createElement("tableSection");
var Table = document.createElement("TABLE");
Table === null || Table === void 0 ? void 0 : Table.setAttribute("id", "table");
Table.style.width = "100%";
Table.setAttribute('border', '1');
var tableHead = document.createElement("thead");
var tableBody = document.createElement('tbody');
Table.appendChild(tableHead);
var tableRow = document.createElement("tr");
var tableNameCell = document.createElement("th");
tableNameCell.appendChild(document.createTextNode("Atom name"));
tableRow.appendChild(tableNameCell);
var tableWeightCell = document.createElement("th");
tableWeightCell.appendChild(document.createTextNode("Weight"));
tableRow.appendChild(tableWeightCell);
tableHead.appendChild(tableRow);
Table.appendChild(tableBody);
divTarg3 === null || divTarg3 === void 0 ? void 0 : divTarg3.appendChild(tableSection);
tableSection.appendChild(Table);

for (var i = 0; i < mydata_1.atomNames.length; i++) {
  var innerTableRow = document.createElement('tr');

  for (var j = 0; j < 1; j++) {
    var nameCell = document.createElement('td');
    var weightCell = document.createElement('td');
    nameCell.appendChild(document.createTextNode(mydata_2.atomObjects[i].name));
    weightCell.appendChild(document.createTextNode(String(mydata_2.atomObjects[i].weight)));
    innerTableRow.appendChild(nameCell);
    innerTableRow.appendChild(weightCell);

    if (mydata_2.atomObjects[i].weight > 150) {
      innerTableRow.classList.add("heavy");
    } else {
      innerTableRow.classList.add("light");
    }
  }

  tableBody.appendChild(innerTableRow);
}
},{"./mydata":"mydata.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "7188" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","bonnerlu.ts"], null)
//# sourceMappingURL=/bonnerlu.aece141e.js.map