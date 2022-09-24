// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"easPH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "1b8e927ebf186cf4";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"cUrLh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _index = require("./../src/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
window.Alpine = (0, _indexDefault.default);
queueMicrotask(()=>{
    (0, _indexDefault.default).start();
});

},{"./../src/index":"3cGys","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cGys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 *           _
 *     /\   | |     (_)            (_)
 *    /  \  | |_ __  _ _ __   ___   _ ___
 *   / /\ \ | | '_ \| | '_ \ / _ \ | / __|
 *  / ____ \| | |_) | | | | |  __/_| \__ \
 * /_/    \_\_| .__/|_|_| |_|\___(_) |___/
 *            | |                 _/ |
 *            |_|                |__/
 *
 * Let's build Alpine together. It's easier than you think.
 * For starters, we'll import Alpine's core. This is the
 * object that will expose all of Alpine's public API.
 */ var _alpine = require("./alpine");
var _alpineDefault = parcelHelpers.interopDefault(_alpine);
/**
 * _______________________________________________________
 * The Evaluator
 * -------------------------------------------------------
 *
 * Now we're ready to bootstrap Alpine's evaluation system.
 * It's the function that converts raw JavaScript string
 * expressions like @click="toggle()", into actual JS.
 */ var _evaluator = require("./evaluator");
/**
 * _______________________________________________________
 * The Reactivity Engine
 * -------------------------------------------------------
 *
 * This is the reactivity core of Alpine. It's the part of
 * Alpine that triggers an element with x-text="message"
 * to update its inner text when "message" is changed.
 */ var _reactivity = require("@vue/reactivity");
/**
 * _______________________________________________________
 * The Magics
 * -------------------------------------------------------
 *
 * Yeah, we're calling them magics here like they're nouns.
 * These are the properties that are magically available
 * to all the Alpine expressions, within your web app.
 */ var _index = require("./magics/index");
/**
 * _______________________________________________________
 * The Directives
 * -------------------------------------------------------
 *
 * Now that the core is all set up, we can register Alpine
 * directives like x-text or x-on that form the basis of
 * how Alpine adds behavior to an app's static markup.
 */ var _index1 = require("./directives/index");
(0, _alpineDefault.default).setEvaluator((0, _evaluator.normalEvaluator));
(0, _alpineDefault.default).setReactivityEngine({
    reactive: (0, _reactivity.reactive),
    effect: (0, _reactivity.effect),
    release: (0, _reactivity.stop),
    raw: (0, _reactivity.toRaw)
});
/**
 * _______________________________________________________
 * The Alpine Global
 * -------------------------------------------------------
 *
 * Now that we have set everything up internally, anything
 * Alpine-related that will need to be accessed on-going
 * will be made available through the "Alpine" global.
 */ exports.default = (0, _alpineDefault.default);

},{"./alpine":"8QFGQ","./evaluator":"420sQ","@vue/reactivity":"d7UXQ","./magics/index":"1eEyB","./directives/index":"6qgIj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QFGQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactivity = require("./reactivity");
var _directives = require("./directives");
var _lifecycle = require("./lifecycle");
var _mutation = require("./mutation");
var _scope = require("./scope");
var _evaluator = require("./evaluator");
var _xTransition = require("./directives/x-transition");
var _clone = require("./clone");
var _interceptor = require("./interceptor");
var _bind = require("./utils/bind");
var _debounce = require("./utils/debounce");
var _throttle = require("./utils/throttle");
var _styles = require("./utils/styles");
var _nextTick = require("./nextTick");
var _plugin = require("./plugin");
var _magics = require("./magics");
var _store = require("./store");
var _binds = require("./binds");
var _datas = require("./datas");
let Alpine = {
    get reactive () {
        return 0, _reactivity.reactive;
    },
    get release () {
        return 0, _reactivity.release;
    },
    get effect () {
        return 0, _reactivity.effect;
    },
    get raw () {
        return 0, _reactivity.raw;
    },
    version: ALPINE_VERSION,
    flushAndStopDeferringMutations: (0, _mutation.flushAndStopDeferringMutations),
    dontAutoEvaluateFunctions: (0, _evaluator.dontAutoEvaluateFunctions),
    disableEffectScheduling: (0, _reactivity.disableEffectScheduling),
    setReactivityEngine: (0, _reactivity.setReactivityEngine),
    closestDataStack: (0, _scope.closestDataStack),
    skipDuringClone: (0, _clone.skipDuringClone),
    addRootSelector: (0, _lifecycle.addRootSelector),
    addInitSelector: (0, _lifecycle.addInitSelector),
    addScopeToNode: (0, _scope.addScopeToNode),
    deferMutations: (0, _mutation.deferMutations),
    mapAttributes: (0, _directives.mapAttributes),
    evaluateLater: (0, _evaluator.evaluateLater),
    setEvaluator: (0, _evaluator.setEvaluator),
    mergeProxies: (0, _scope.mergeProxies),
    findClosest: (0, _lifecycle.findClosest),
    closestRoot: (0, _lifecycle.closestRoot),
    interceptor: (0, _interceptor.interceptor),
    transition: (0, _xTransition.transition),
    setStyles: (0, _styles.setStyles),
    mutateDom: (0, _mutation.mutateDom),
    directive: (0, _directives.directive),
    throttle: (0, _throttle.throttle),
    debounce: (0, _debounce.debounce),
    evaluate: (0, _evaluator.evaluate),
    initTree: (0, _lifecycle.initTree),
    nextTick: (0, _nextTick.nextTick),
    prefixed: (0, _directives.prefix),
    prefix: (0, _directives.setPrefix),
    plugin: (0, _plugin.plugin),
    magic: (0, _magics.magic),
    store: (0, _store.store),
    start: (0, _lifecycle.start),
    clone: (0, _clone.clone),
    bound: (0, _bind.getBinding),
    $data: (0, _scope.scope),
    data: (0, _datas.data),
    bind: (0, _binds.bind)
};
exports.default = Alpine;

},{"./reactivity":"gAWV4","./directives":"2WB5Z","./lifecycle":"1jjaR","./mutation":"fzZOV","./scope":"9LID8","./evaluator":"420sQ","./directives/x-transition":"aOXw1","./clone":"7RrDr","./interceptor":"9aFtx","./utils/bind":"19sk1","./utils/debounce":"ezKC7","./utils/throttle":"kTjTt","./utils/styles":"4gTYl","./nextTick":"8fN2P","./plugin":"4GfC7","./magics":"hvPLs","./store":"7ad4s","./binds":"c7EMi","./datas":"7H89X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gAWV4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "disableEffectScheduling", ()=>disableEffectScheduling);
parcelHelpers.export(exports, "setReactivityEngine", ()=>setReactivityEngine);
parcelHelpers.export(exports, "overrideEffect", ()=>overrideEffect);
parcelHelpers.export(exports, "elementBoundEffect", ()=>elementBoundEffect);
parcelHelpers.export(exports, "release", ()=>release);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "raw", ()=>raw);
var _scheduler = require("./scheduler");
let reactive, effect, release, raw;
let shouldSchedule = true;
function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
}
function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback)=>engine.effect(callback, {
            scheduler: (task)=>{
                if (shouldSchedule) (0, _scheduler.scheduler)(task);
                else task();
            }
        });
    raw = engine.raw;
}
function overrideEffect(override) {
    effect = override;
}
function elementBoundEffect(el) {
    let cleanup = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el._x_effects) {
            el._x_effects = new Set;
            // Livewire depends on el._x_runEffects.
            el._x_runEffects = ()=>{
                el._x_effects.forEach((i)=>i());
            };
        }
        el._x_effects.add(effectReference);
        cleanup = ()=>{
            if (effectReference === undefined) return;
            el._x_effects.delete(effectReference);
            release(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup();
        }
    ];
}

},{"./scheduler":"bJBiD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJBiD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduler", ()=>scheduler);
parcelHelpers.export(exports, "dequeueJob", ()=>dequeueJob);
parcelHelpers.export(exports, "flushJobs", ()=>flushJobs);
let flushPending = false;
let flushing = false;
let queue = [];
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue.length = 0;
    flushing = false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2WB5Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prefix", ()=>prefix);
parcelHelpers.export(exports, "setPrefix", ()=>setPrefix);
parcelHelpers.export(exports, "directive", ()=>directive);
parcelHelpers.export(exports, "directives", ()=>directives);
parcelHelpers.export(exports, "attributesOnly", ()=>attributesOnly);
parcelHelpers.export(exports, "deferHandlingDirectives", ()=>deferHandlingDirectives);
parcelHelpers.export(exports, "getElementBoundUtilities", ()=>getElementBoundUtilities);
parcelHelpers.export(exports, "getDirectiveHandler", ()=>getDirectiveHandler);
parcelHelpers.export(exports, "startingWith", ()=>startingWith);
parcelHelpers.export(exports, "into", ()=>into);
parcelHelpers.export(exports, "mapAttributes", ()=>mapAttributes);
var _mutation = require("./mutation");
var _evaluator = require("./evaluator");
var _reactivity = require("./reactivity");
var _alpine = require("./alpine");
var _alpineDefault = parcelHelpers.interopDefault(_alpine);
let prefixAsString = "x-";
function prefix(subject = "") {
    return prefixAsString + subject;
}
function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
}
let directiveHandlers = {};
function directive(name, callback) {
    directiveHandlers[name] = callback;
}
function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
        let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value])=>({
                name,
                value
            }));
        let staticAttributes = attributesOnly(vAttributes);
        // Handle binding normal HTML attributes (non-Alpine directives).
        vAttributes = vAttributes.map((attribute)=>{
            if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
                name: `x-bind:${attribute.name}`,
                value: `"${attribute.value}"`
            };
            return attribute;
        });
        attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives = attributes.map(toTransformedAttributes((newName, oldName)=>transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives.map((directive)=>{
        return getDirectiveHandler(el, directive);
    });
}
function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr)=>!outNonAlpineAttributes(attr));
}
let isDeferringHandlers = false;
let directiveHandlerStacks = new Map;
let currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup = (callback)=>cleanups.push(callback);
    let [effect, cleanupEffect] = (0, _reactivity.elementBoundEffect)(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        Alpine: (0, _alpineDefault.default),
        effect,
        cleanup,
        evaluateLater: (0, _evaluator.evaluateLater).bind((0, _evaluator.evaluateLater), el),
        evaluate: (0, _evaluator.evaluate).bind((0, _evaluator.evaluate), el)
    };
    let doCleanup = ()=>cleanups.forEach((i)=>i());
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive) {
    let noop = ()=>{};
    let handler = directiveHandlers[directive.type] || noop;
    let [utilities, cleanup] = getElementBoundUtilities(el);
    (0, _mutation.onAttributeRemoved)(el, directive.original, cleanup);
    let fullHandler = ()=>{
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler.inline && handler.inline(el, directive, utilities);
        handler = handler.bind(handler, el, directive, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler) : handler();
    };
    fullHandler.runCleanups = cleanup;
    return fullHandler;
}
let startingWith = (subject, replacement)=>({ name , value  })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    };
let into = (i)=>i;
function toTransformedAttributes(callback = ()=>{}) {
    return ({ name , value  })=>{
        let { name: newName , value: newValue  } = attributeTransformers.reduce((carry, transform)=>{
            return transform(carry);
        }, {
            name,
            value
        });
        if (newName !== name) callback(newName, name);
        return {
            name: newName,
            value: newValue
        };
    };
}
let attributeTransformers = [];
function mapAttributes(callback) {
    attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name  }) {
    return alpineAttributeRegex().test(name);
}
let alpineAttributeRegex = ()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name , value  })=>{
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
            type: typeMatch ? typeMatch[1] : null,
            value: valueMatch ? valueMatch[1] : null,
            modifiers: modifiers.map((i)=>i.replace(".", "")),
            expression: value,
            original
        };
    };
}
const DEFAULT = "DEFAULT";
let directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "bind",
    "init",
    "for",
    "mask",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport", 
];
function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}

},{"./mutation":"fzZOV","./evaluator":"420sQ","./reactivity":"gAWV4","./alpine":"8QFGQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fzZOV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onElAdded", ()=>onElAdded);
parcelHelpers.export(exports, "onElRemoved", ()=>onElRemoved);
parcelHelpers.export(exports, "onAttributesAdded", ()=>onAttributesAdded);
parcelHelpers.export(exports, "onAttributeRemoved", ()=>onAttributeRemoved);
parcelHelpers.export(exports, "cleanupAttributes", ()=>cleanupAttributes);
parcelHelpers.export(exports, "startObservingMutations", ()=>startObservingMutations);
parcelHelpers.export(exports, "stopObservingMutations", ()=>stopObservingMutations);
parcelHelpers.export(exports, "flushObserver", ()=>flushObserver);
parcelHelpers.export(exports, "mutateDom", ()=>mutateDom);
parcelHelpers.export(exports, "deferMutations", ()=>deferMutations);
parcelHelpers.export(exports, "flushAndStopDeferringMutations", ()=>flushAndStopDeferringMutations);
let onAttributeAddeds = [];
let onElRemoveds = [];
let onElAddeds = [];
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value])=>{
        if (names === undefined || names.includes(name)) {
            value.forEach((i)=>i());
            delete el._x_attributeCleanups[name];
        }
    });
}
let observer = new MutationObserver(onMutate);
let currentlyObserving = false;
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
let recordQueue = [];
let willProcessRecordQueue = false;
function flushObserver() {
    recordQueue = recordQueue.concat(observer.takeRecords());
    if (recordQueue.length && !willProcessRecordQueue) {
        willProcessRecordQueue = true;
        queueMicrotask(()=>{
            processRecordQueue();
            willProcessRecordQueue = false;
        });
    }
}
function processRecordQueue() {
    onMutate(recordQueue);
    recordQueue.length = 0;
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
let isCollecting = false;
let deferredMutations = [];
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = [];
    let removedNodes = [];
    let addedAttributes = new Map;
    let removedAttributes = new Map;
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target._x_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].addedNodes.forEach((node)=>node.nodeType === 1 && addedNodes.push(node));
            mutations[i].removedNodes.forEach((node)=>node.nodeType === 1 && removedNodes.push(node));
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            // New attribute.
            if (el.hasAttribute(name) && oldValue === null) add();
            else if (el.hasAttribute(name)) {
                remove();
                add();
            // Removed atttribute.
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    for (let node of removedNodes){
        // If an element gets moved on a page, it's registered
        // as both an "add" and "remove", so we want to skip those.
        if (addedNodes.includes(node)) continue;
        onElRemoveds.forEach((i)=>i(node));
        if (node._x_cleanups) while(node._x_cleanups.length)node._x_cleanups.pop()();
    }
    // Mutations are bundled together by the browser but sometimes
    // for complex cases, there may be javascript code adding a wrapper
    // and then an alpine component as a child of that wrapper in the same
    // function and the mutation observer will receive 2 different mutations.
    // when it comes time to run them, the dom contains both changes so the child
    // element would be processed twice as Alpine calls initTree on
    // both mutations. We mark all nodes as _x_ignored and only remove the flag
    // when processing the node to avoid those duplicates.
    addedNodes.forEach((node)=>{
        node._x_ignoreSelf = true;
        node._x_ignore = true;
    });
    for (let node1 of addedNodes){
        // If an element gets moved on a page, it's registered
        // as both an "add" and "remove", so we want to skip those.
        if (removedNodes.includes(node1)) continue;
        // If the node was eventually removed as part of one of his
        // parent mutations, skip it
        if (!node1.isConnected) continue;
        delete node1._x_ignoreSelf;
        delete node1._x_ignore;
        onElAddeds.forEach((i)=>i(node1));
        node1._x_ignore = true;
        node1._x_ignoreSelf = true;
    }
    addedNodes.forEach((node)=>{
        delete node._x_ignoreSelf;
        delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"420sQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dontAutoEvaluateFunctions", ()=>dontAutoEvaluateFunctions);
parcelHelpers.export(exports, "evaluate", ()=>evaluate);
parcelHelpers.export(exports, "evaluateLater", ()=>evaluateLater);
parcelHelpers.export(exports, "setEvaluator", ()=>setEvaluator);
parcelHelpers.export(exports, "normalEvaluator", ()=>normalEvaluator);
parcelHelpers.export(exports, "generateEvaluatorFromFunction", ()=>generateEvaluatorFromFunction);
parcelHelpers.export(exports, "runIfTypeOfFunction", ()=>runIfTypeOfFunction);
var _scope = require("./scope");
var _magics = require("./magics");
var _error = require("./utils/error");
let shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    callback();
    shouldAutoEvaluateFunctions = cache;
}
function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value)=>result = value, extras);
    return result;
}
function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
}
let theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    (0, _magics.injectMagics)(overriddenMagics, el);
    let dataStack = [
        overriddenMagics,
        ...(0, _scope.closestDataStack)(el)
    ];
    if (typeof expression === "function") return generateEvaluatorFromFunction(dataStack, expression);
    let evaluator = generateEvaluatorFromString(dataStack, expression, el);
    return (0, _error.tryCatch).bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = ()=>{}, { scope ={} , params =[]  } = {})=>{
        let result = func.apply((0, _scope.mergeProxies)([
            scope,
            ...dataStack
        ]), params);
        runIfTypeOfFunction(receiver, result);
    };
}
let evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) return evaluatorMemo[expression];
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    // Some expressions that are useful in Alpine are not valid as the right side of an expression.
    // Here we'll detect if the expression isn't valid for an assignement and wrap it in a self-
    // calling function so that we don't throw an error AND a "return" statement can b e used.
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
    const safeAsyncFunction = ()=>{
        try {
            return new AsyncFunction([
                "__self",
                "scope"
            ], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
        } catch (error) {
            (0, _error.handleError)(error, el, expression);
            return Promise.resolve();
        }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = ()=>{}, { scope ={} , params =[]  } = {})=>{
        func.result = undefined;
        func.finished = false;
        // Run the function.
        let completeScope = (0, _scope.mergeProxies)([
            scope,
            ...dataStack
        ]);
        if (typeof func === "function") {
            let promise = func(func, completeScope).catch((error)=>(0, _error.handleError)(error, el, expression));
            // Check if the function ran synchronously,
            if (func.finished) {
                // Return the immediate result.
                runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
                // Once the function has run, we clear func.result so we don't create
                // memory leaks. func is stored in the evaluatorMemo and every time
                // it runs, it assigns the evaluated expression to result which could
                // potentially store a reference to the DOM element that will be removed later on.
                func.result = undefined;
            } else // If not, return the result when the promise resolves.
            promise.then((result)=>{
                runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error)=>(0, _error.handleError)(error, el, expression)).finally(()=>func.result = undefined);
        }
    };
}
function runIfTypeOfFunction(receiver, value, scope, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope, params);
        if (result instanceof Promise) result.then((i)=>runIfTypeOfFunction(receiver, i, scope, params)).catch((error)=>(0, _error.handleError)(error, el, value));
        else receiver(result);
    } else receiver(value);
}

},{"./scope":"9LID8","./magics":"hvPLs","./utils/error":"Z3zVp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9LID8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scope", ()=>scope);
parcelHelpers.export(exports, "addScopeToNode", ()=>addScopeToNode);
parcelHelpers.export(exports, "hasScope", ()=>hasScope);
parcelHelpers.export(exports, "refreshScope", ()=>refreshScope);
parcelHelpers.export(exports, "closestDataStack", ()=>closestDataStack);
parcelHelpers.export(exports, "closestDataProxy", ()=>closestDataProxy);
parcelHelpers.export(exports, "mergeProxies", ()=>mergeProxies);
function scope(node) {
    return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data, referenceNode) {
    node._x_dataStack = [
        data,
        ...closestDataStack(referenceNode || node)
    ];
    return ()=>{
        node._x_dataStack = node._x_dataStack.filter((i)=>i !== data);
    };
}
function hasScope(node) {
    return !!node._x_dataStack;
}
function refreshScope(element, scope) {
    let existingScope = element._x_dataStack[0];
    Object.entries(scope).forEach(([key, value])=>{
        existingScope[key] = value;
    });
}
function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) return closestDataStack(node.host);
    if (!node.parentNode) return [];
    return closestDataStack(node.parentNode);
}
function closestDataProxy(el) {
    return mergeProxies(closestDataStack(el));
}
function mergeProxies(objects) {
    let thisProxy = new Proxy({}, {
        ownKeys: ()=>{
            return Array.from(new Set(objects.flatMap((i)=>Object.keys(i))));
        },
        has: (target, name)=>{
            return objects.some((obj)=>obj.hasOwnProperty(name));
        },
        get: (target, name)=>{
            return (objects.find((obj)=>{
                if (obj.hasOwnProperty(name)) {
                    let descriptor = Object.getOwnPropertyDescriptor(obj, name);
                    // If we already bound this getter, don't rebind.
                    if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) return true;
                    // Properly bind getters and setters to this wrapper Proxy.
                    if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
                        // Only bind user-defined getters, not our magic properties.
                        let getter = descriptor.get;
                        let setter = descriptor.set;
                        let property = descriptor;
                        getter = getter && getter.bind(thisProxy);
                        setter = setter && setter.bind(thisProxy);
                        if (getter) getter._x_alreadyBound = true;
                        if (setter) setter._x_alreadyBound = true;
                        Object.defineProperty(obj, name, {
                            ...property,
                            get: getter,
                            set: setter
                        });
                    }
                    return true;
                }
                return false;
            }) || {})[name];
        },
        set: (target, name, value)=>{
            let closestObjectWithKey = objects.find((obj)=>obj.hasOwnProperty(name));
            if (closestObjectWithKey) closestObjectWithKey[name] = value;
            else objects[objects.length - 1][name] = value;
            return true;
        }
    });
    return thisProxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hvPLs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "magic", ()=>magic);
parcelHelpers.export(exports, "injectMagics", ()=>injectMagics);
var _alpine = require("./alpine");
var _alpineDefault = parcelHelpers.interopDefault(_alpine);
var _directives = require("./directives");
var _interceptor = require("./interceptor");
var _mutation = require("./mutation");
let magics = {};
function magic(name, callback) {
    magics[name] = callback;
}
function injectMagics(obj, el) {
    Object.entries(magics).forEach(([name, callback])=>{
        Object.defineProperty(obj, `$${name}`, {
            get () {
                let [utilities, cleanup] = (0, _directives.getElementBoundUtilities)(el);
                utilities = {
                    interceptor: (0, _interceptor.interceptor),
                    ...utilities
                };
                (0, _mutation.onElRemoved)(el, cleanup);
                return callback(el, utilities);
            },
            enumerable: false
        });
    });
    return obj;
}

},{"./alpine":"8QFGQ","./directives":"2WB5Z","./interceptor":"9aFtx","./mutation":"fzZOV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9aFtx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Warning: The concept of "interceptors" in Alpine is not public API and is subject to change
// without tagging a major release.
parcelHelpers.export(exports, "initInterceptors", ()=>initInterceptors);
parcelHelpers.export(exports, "interceptor", ()=>interceptor);
function initInterceptors(data) {
    let isObject = (val)=>typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "")=>{
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value , enumerable  }])=>{
            // Skip getters.
            if (enumerable === false || value === undefined) return;
            let path = basePath === "" ? key : `${basePath}.${key}`;
            if (typeof value === "object" && value !== null && value._x_interceptor) obj[key] = value.initialize(data, path, key);
            else if (isObject(value) && value !== obj && !(value instanceof Element)) recurse(value, path);
        });
    };
    return recurse(data);
}
function interceptor(callback, mutateObj = ()=>{}) {
    let obj = {
        initialValue: undefined,
        _x_interceptor: true,
        initialize (data, path, key) {
            return callback(this.initialValue, ()=>get(data, path), (value)=>set(data, path, value), path, key);
        }
    };
    mutateObj(obj);
    return (initialValue)=>{
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
            // Support nesting interceptors.
            let initialize = obj.initialize.bind(obj);
            obj.initialize = (data, path, key)=>{
                let innerValue = initialValue.initialize(data, path, key);
                obj.initialValue = innerValue;
                return initialize(data, path, key);
            };
        } else obj.initialValue = initialValue;
        return obj;
    };
}
function get(obj, path) {
    return path.split(".").reduce((carry, segment)=>carry[segment], obj);
}
function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;
    else if (path.length === 0) throw error;
    else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);
        else {
            obj[path[0]] = {};
            return set(obj[path[0]], path.slice(1), value);
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Z3zVp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tryCatch", ()=>tryCatch);
parcelHelpers.export(exports, "handleError", ()=>handleError);
function tryCatch(el, expression, callback, ...args) {
    try {
        return callback(...args);
    } catch (e) {
        handleError(e, el, expression);
    }
}
function handleError(error, el, expression) {
    Object.assign(error, {
        el,
        expression
    });
    console.warn(`Alpine Expression Error: ${error.message}\n\n${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(()=>{
        throw error;
    }, 0);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jjaR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "rootSelectors", ()=>rootSelectors);
parcelHelpers.export(exports, "allSelectors", ()=>allSelectors);
parcelHelpers.export(exports, "addRootSelector", ()=>addRootSelector);
parcelHelpers.export(exports, "addInitSelector", ()=>addInitSelector);
parcelHelpers.export(exports, "closestRoot", ()=>closestRoot);
parcelHelpers.export(exports, "findClosest", ()=>findClosest);
parcelHelpers.export(exports, "isRoot", ()=>isRoot);
parcelHelpers.export(exports, "initTree", ()=>initTree);
var _mutation = require("./mutation");
var _directives = require("./directives");
var _dispatch = require("./utils/dispatch");
var _nextTick = require("./nextTick");
var _walk = require("./utils/walk");
var _warn = require("./utils/warn");
function start() {
    if (!document.body) (0, _warn.warn)("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    (0, _dispatch.dispatch)(document, "alpine:init");
    (0, _dispatch.dispatch)(document, "alpine:initializing");
    (0, _mutation.startObservingMutations)();
    (0, _mutation.onElAdded)((el)=>initTree(el, (0, _walk.walk)));
    (0, _mutation.onElRemoved)((el)=>destroyTree(el));
    (0, _mutation.onAttributesAdded)((el, attrs)=>{
        (0, _directives.directives)(el, attrs).forEach((handle)=>handle());
    });
    let outNestedComponents = (el)=>!closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el)=>{
        initTree(el);
    });
    (0, _dispatch.dispatch)(document, "alpine:initialized");
}
let rootSelectorCallbacks = [];
let initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((fn)=>fn());
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn)=>fn());
}
function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element)=>{
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector)=>element.matches(selector))) return true;
    });
}
function findClosest(el, callback) {
    if (!el) return;
    if (callback(el)) return el;
    // Support crawling up teleports.
    if (el._x_teleportBack) el = el._x_teleportBack;
    if (!el.parentElement) return;
    return findClosest(el.parentElement, callback);
}
function isRoot(el) {
    return rootSelectors().some((selector)=>el.matches(selector));
}
function initTree(el, walker = (0, _walk.walk)) {
    (0, _directives.deferHandlingDirectives)(()=>{
        walker(el, (el, skip)=>{
            (0, _directives.directives)(el, el.attributes).forEach((handle)=>handle());
            el._x_ignore && skip();
        });
    });
}
function destroyTree(root) {
    (0, _walk.walk)(root, (el)=>(0, _mutation.cleanupAttributes)(el));
}

},{"./mutation":"fzZOV","./directives":"2WB5Z","./utils/dispatch":"jisEy","./nextTick":"8fN2P","./utils/walk":"6EqH5","./utils/warn":"esBMu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jisEy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dispatch", ()=>dispatch);
function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
    }));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fN2P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "releaseNextTicks", ()=>releaseNextTicks);
parcelHelpers.export(exports, "holdNextTicks", ()=>holdNextTicks);
let tickStack = [];
let isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6EqH5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "walk", ()=>walk) // export function walk(el, callback) {
 //     if (el instanceof ShadowRoot || el instanceof DocumentFragment) {
 //         Array.from(el.children).forEach(el => walk(el, callback))
 //         return
 //     }
 //     callback(el, () => {
 //         let node = el.firstElementChild
 //         while (node) {
 //             walk(node, callback)
 //             node = node.nextElementSibling
 //         }
 //     })
 // }
;
function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el)=>walk(el, callback));
        return;
    }
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esBMu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warn", ()=>warn);
function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aOXw1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transition", ()=>transition);
parcelHelpers.export(exports, "performTransition", ()=>performTransition);
parcelHelpers.export(exports, "modifierValue", ()=>modifierValue);
var _nextTick = require("../nextTick");
var _classes = require("../utils/classes");
var _styles = require("../utils/styles");
var _directives = require("../directives");
var _mutation = require("../mutation");
var _once = require("../utils/once");
(0, _directives.directive)("transition", (el, { value , modifiers , expression  }, { evaluate  })=>{
    if (typeof expression === "function") expression = evaluate(expression);
    if (!expression) registerTransitionsFromHelper(el, modifiers, value);
    else registerTransitionsFromClassString(el, expression, value);
});
function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, (0, _classes.setClasses), "");
    let directiveStorageMap = {
        "enter": (classes)=>{
            el._x_transition.enter.during = classes;
        },
        "enter-start": (classes)=>{
            el._x_transition.enter.start = classes;
        },
        "enter-end": (classes)=>{
            el._x_transition.enter.end = classes;
        },
        "leave": (classes)=>{
            el._x_transition.leave.during = classes;
        },
        "leave-start": (classes)=>{
            el._x_transition.leave.start = classes;
        },
        "leave-end": (classes)=>{
            el._x_transition.leave.end = classes;
        }
    };
    directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, (0, _styles.setStyles));
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || [
        "enter"
    ].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || [
        "leave"
    ].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index < modifiers.indexOf("out"));
    if (modifiers.includes("out") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index > modifiers.indexOf("out"));
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0);
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1000;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1000;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
        el._x_transition.enter.during = {
            transformOrigin: origin,
            transitionDelay: delay,
            transitionProperty: property,
            transitionDuration: `${durationIn}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
            opacity: 1,
            transform: `scale(1)`
        };
    }
    if (transitioningOut) {
        el._x_transition.leave.during = {
            transformOrigin: origin,
            transitionDelay: delay,
            transitionProperty: property,
            transitionDuration: `${durationOut}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
            opacity: 1,
            transform: `scale(1)`
        };
        el._x_transition.leave.end = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
    }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition) el._x_transition = {
        enter: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        leave: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        in (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, before, after);
        },
        out (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, before, after);
        }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    // We are running this function after one tick to prevent
    // a race condition from happening where elements that have a
    // @click.away always view themselves as shown on the page.
    // If the tab is active, we prioritise requestAnimationFrame which plays
    // nicely with nested animations otherwise we use setTimeout to make sure
    // it keeps running in background. setTimeout has a lower priority in the
    // event loop so it would skip nested transitions but when the tab is
    // hidden, it's not relevant.
    const nextTick = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = ()=>nextTick(show);
    if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) // This fixes a bug where if you are only transitioning OUT and you are also using @click.outside
        // the element when shown immediately starts transitioning out. There is a test in the manual
        // transition test file for this: /tests/cypress/manual-transition-test.html
        el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        else el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
    }
    // Livewire depends on el._x_hidePromise.
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject)=>{
        el._x_transition.out(()=>{}, ()=>resolve(hide));
        el._x_transitioning.beforeCancel(()=>reject({
                isFromCancelledTransition: true
            }));
    }) : Promise.resolve(hide);
    queueMicrotask(()=>{
        let closest = closestHide(el);
        if (closest) {
            if (!closest._x_hideChildren) closest._x_hideChildren = [];
            closest._x_hideChildren.push(el);
        } else nextTick(()=>{
            let hideAfterChildren = (el)=>{
                let carry = Promise.all([
                    el._x_hidePromise,
                    ...(el._x_hideChildren || []).map(hideAfterChildren), 
                ]).then(([i])=>i());
                delete el._x_hidePromise;
                delete el._x_hideChildren;
                return carry;
            };
            hideAfterChildren(el).catch((e)=>{
                if (!e.isFromCancelledTransition) throw e;
            });
        });
    });
};
function closestHide(el) {
    let parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during , start , end  } = {}, before = ()=>{}, after = ()=>{}) {
    if (el._x_transitioning) el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start).length === 0 && Object.keys(end).length === 0) {
        // Execute right away if there is no transition.
        before();
        after();
        return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
        start () {
            undoStart = setFunction(el, start);
        },
        during () {
            undoDuring = setFunction(el, during);
        },
        before,
        end () {
            undoStart();
            undoEnd = setFunction(el, end);
        },
        after,
        cleanup () {
            undoDuring();
            undoEnd();
        }
    });
}
function performTransition(el, stages) {
    // All transitions need to be truly "cancellable". Meaning we need to
    // account for interruptions at ALL stages of the transitions and
    // immediately run the rest of the transition.
    let interrupted, reachedBefore, reachedEnd;
    let finish = (0, _once.once)(()=>{
        (0, _mutation.mutateDom)(()=>{
            interrupted = true;
            if (!reachedBefore) stages.before();
            if (!reachedEnd) {
                stages.end();
                (0, _nextTick.releaseNextTicks)();
            }
            stages.after();
            // Adding an "isConnected" check, in case the callback removed the element from the DOM.
            if (el.isConnected) stages.cleanup();
            delete el._x_transitioning;
        });
    });
    el._x_transitioning = {
        beforeCancels: [],
        beforeCancel (callback) {
            this.beforeCancels.push(callback);
        },
        cancel: (0, _once.once)(function() {
            while(this.beforeCancels.length)this.beforeCancels.shift()();
            finish();
        }),
        finish
    };
    (0, _mutation.mutateDom)(()=>{
        stages.start();
        stages.during();
    });
    (0, _nextTick.holdNextTicks)();
    requestAnimationFrame(()=>{
        if (interrupted) return;
        // Note: Safari's transitionDuration property will list out comma separated transition durations
        // for every single transition property. Let's grab the first one and call it a day.
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1000;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1000;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1000;
        (0, _mutation.mutateDom)(()=>{
            stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(()=>{
            if (interrupted) return;
            (0, _mutation.mutateDom)(()=>{
                stages.end();
            });
            (0, _nextTick.releaseNextTicks)();
            setTimeout(el._x_transitioning.finish, duration + delay);
            reachedEnd = true;
        });
    });
}
function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback;
    // If it IS present, grab the value after it: x-show.transition.duration.500ms
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;
    if (key === "scale") {
        // Check if the very next value is NOT a number and return the fallback.
        // If x-show.transition.scale, we'll use the default scale value.
        // That is how a user opts out of the opacity transition.
        if (isNaN(rawValue)) return fallback;
    }
    if (key === "duration") {
        // Support x-transition.duration.500ms && duration.500
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
    }
    if (key === "origin") {
        // Support chaining origin directions: x-show.transition.top.right
        if ([
            "top",
            "right",
            "left",
            "center",
            "bottom"
        ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
            rawValue,
            modifiers[modifiers.indexOf(key) + 2]
        ].join(" ");
    }
    return rawValue;
}

},{"../nextTick":"8fN2P","../utils/classes":"eJHKv","../utils/styles":"4gTYl","../directives":"2WB5Z","../mutation":"fzZOV","../utils/once":"i3c0v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJHKv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setClasses", ()=>setClasses);
function setClasses(el, value) {
    if (Array.isArray(value)) return setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return setClassesFromObject(el, value);
    else if (typeof value === "function") return setClasses(el, value());
    return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let missingClasses = (classString)=>classString.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes)=>{
        el.classList.add(...classes);
        return ()=>{
            el.classList.remove(...classes);
        };
    };
    // This is to allow short-circuit expressions like: :class="show || 'hidden'" && "show && 'block'"
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gTYl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setStyles", ()=>setStyles);
function setStyles(el, value) {
    if (typeof value === "object" && value !== null) return setStylesFromObject(el, value);
    return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value])=>{
        previousStyles[key] = el.style[key];
        // When we use javascript object, css properties use the camelCase
        // syntax but when we use setProperty, we need the css format
        // so we need to convert camelCase to kebab-case.
        // In case key is a CSS variable, leave it as it is.
        if (!key.startsWith("--")) key = kebabCase(key);
        el.style.setProperty(key, value);
    });
    setTimeout(()=>{
        if (el.style.length === 0) el.removeAttribute("style");
    });
    return ()=>{
        setStyles(el, previousStyles);
    };
}
function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return ()=>{
        el.setAttribute("style", cache || "");
    };
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3c0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "once", ()=>once);
function once(callback, fallback = ()=>{}) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            callback.apply(this, arguments);
        } else fallback.apply(this, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7RrDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipDuringClone", ()=>skipDuringClone);
parcelHelpers.export(exports, "onlyDuringClone", ()=>onlyDuringClone);
parcelHelpers.export(exports, "interuptCrawl", ()=>interuptCrawl);
parcelHelpers.export(exports, "clone", ()=>clone);
parcelHelpers.export(exports, "cloneTree", ()=>cloneTree);
var _reactivity = require("./reactivity");
var _lifecycle = require("./lifecycle");
var _walk = require("./utils/walk");
let isCloning = false;
function skipDuringClone(callback, fallback = ()=>{}) {
    return (...args)=>isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
    return (...args)=>isCloning && callback(...args);
}
function interuptCrawl(callback) {
    return (...args)=>isCloning || callback(...args);
}
function clone(oldEl, newEl) {
    if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    dontRegisterReactiveSideEffects(()=>{
        cloneTree(newEl);
    });
    isCloning = false;
}
function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el, callback)=>{
        (0, _walk.walk)(el, (el, skip)=>{
            if (hasRunThroughFirstEl && (0, _lifecycle.isRoot)(el)) return skip();
            hasRunThroughFirstEl = true;
            callback(el, skip);
        });
    };
    (0, _lifecycle.initTree)(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
    let cache = (0, _reactivity.effect);
    (0, _reactivity.overrideEffect)((callback, el)=>{
        let storedEffect = cache(callback);
        (0, _reactivity.release)(storedEffect);
        return ()=>{};
    });
    callback();
    (0, _reactivity.overrideEffect)(cache);
}

},{"./reactivity":"gAWV4","./lifecycle":"1jjaR","./utils/walk":"6EqH5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19sk1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBinding", ()=>getBinding);
var _reactivity = require("../reactivity");
var _classes = require("./classes");
var _styles = require("./styles");
function bind(el, name, value, modifiers = []) {
    // Register bound data as pure observable data for other APIs to use.
    if (!el._x_bindings) el._x_bindings = (0, _reactivity.reactive)({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch(name){
        case "value":
            bindInputValue(el, value);
            break;
        case "style":
            bindStyles(el, value);
            break;
        case "class":
            bindClasses(el, value);
            break;
        default:
            bindAttribute(el, name, value);
            break;
    }
}
exports.default = bind;
function bindInputValue(el, value) {
    if (el.type === "radio") {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined) el.value = value;
        // @todo: yuck
        if (window.fromModel) el.checked = checkedAttrLooseCompare(el.value, value);
    } else if (el.type === "checkbox") {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean/array/number/null/undefined, leave it alone, it will be set to "on"
        // automatically.
        if (Number.isInteger(value)) el.value = value;
        else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![
            null,
            undefined
        ].includes(value)) el.value = String(value);
        else if (Array.isArray(value)) el.checked = value.some((val)=>checkedAttrLooseCompare(val, el.value));
        else el.checked = !!value;
    } else if (el.tagName === "SELECT") updateSelect(el, value);
    else {
        if (el.value === value) return;
        el.value = value;
    }
}
function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = (0, _classes.setClasses)(el, value);
}
function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = (0, _styles.setStyles)(el, value);
}
function bindAttribute(el, name, value) {
    if ([
        null,
        undefined,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value)=>{
        return value + "";
    });
    Array.from(el.options).forEach((option)=>{
        option.selected = arrayWrappedValue.includes(option.value);
    });
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule"
    ];
    return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}
function getBinding(el, name, fallback) {
    // First let's get it out of Alpine bound data.
    if (el._x_bindings && el._x_bindings[name] !== undefined) return el._x_bindings[name];
    // If not, we'll return the literal attribute.
    let attr = el.getAttribute(name);
    // Nothing bound:
    if (attr === null) return typeof fallback === "function" ? fallback() : fallback;
    if (isBooleanAttr(name)) return !![
        name,
        "true"
    ].includes(attr);
    // The case of a custom attribute with no value. Ex: <div manual>
    if (attr === "") return true;
    return attr;
}

},{"../reactivity":"gAWV4","./classes":"eJHKv","./styles":"4gTYl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezKC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce);
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kTjTt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throttle", ()=>throttle);
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GfC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "plugin", ()=>plugin);
var _alpine = require("./alpine");
var _alpineDefault = parcelHelpers.interopDefault(_alpine);
function plugin(callback) {
    callback((0, _alpineDefault.default));
}

},{"./alpine":"8QFGQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ad4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store);
parcelHelpers.export(exports, "getStores", ()=>getStores);
var _interceptor = require("./interceptor");
var _reactivity = require("./reactivity");
let stores = {};
let isReactive = false;
function store(name, value) {
    if (!isReactive) {
        stores = (0, _reactivity.reactive)(stores);
        isReactive = true;
    }
    if (value === undefined) return stores[name];
    stores[name] = value;
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") stores[name].init();
    (0, _interceptor.initInterceptors)(stores[name]);
}
function getStores() {
    return stores;
}

},{"./interceptor":"9aFtx","./reactivity":"gAWV4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7EMi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bind", ()=>bind);
parcelHelpers.export(exports, "injectBindingProviders", ()=>injectBindingProviders);
parcelHelpers.export(exports, "addVirtualBindings", ()=>addVirtualBindings);
parcelHelpers.export(exports, "applyBindingsObject", ()=>applyBindingsObject);
var _directives = require("./directives");
let binds = {};
function bind(name, bindings) {
    let getBindings = typeof bindings !== "function" ? ()=>bindings : bindings;
    if (name instanceof Element) applyBindingsObject(name, getBindings());
    else binds[name] = getBindings;
}
function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback(...args);
                };
            }
        });
    });
    return obj;
}
function addVirtualBindings(el, bindings) {
    let getBindings = typeof bindings !== "function" ? ()=>bindings : bindings;
    el._x_virtualDirectives = getBindings();
}
function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while(cleanupRunners.length)cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value])=>({
            name,
            value
        }));
    let staticAttributes = (0, _directives.attributesOnly)(attributes);
    // Handle binding normal HTML attributes (non-Alpine directives).
    attributes = attributes.map((attribute)=>{
        if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
        };
        return attribute;
    });
    (0, _directives.directives)(el, attributes, original).map((handle)=>{
        cleanupRunners.push(handle.runCleanups);
        handle();
    });
}

},{"./directives":"2WB5Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7H89X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "injectDataProviders", ()=>injectDataProviders);
let datas = {};
function data(name, callback) {
    datas[name] = callback;
}
function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback.bind(context)(...args);
                };
            },
            enumerable: false
        });
    });
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7UXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "customRef", ()=>customRef);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking);
parcelHelpers.export(exports, "isProxy", ()=>isProxy);
parcelHelpers.export(exports, "isReactive", ()=>isReactive);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "markRaw", ()=>markRaw);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "readonly", ()=>readonly);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "toRaw", ()=>toRaw);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "track", ()=>track);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef);
parcelHelpers.export(exports, "unref", ()=>unref);
var _shared = require("@vue/shared");
const targetMap = new WeakMap();
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect(fn, options = (0, _shared.EMPTY_OBJ)) {
    if (isEffect(fn)) fn = fn.raw;
    const effect = createReactiveEffect(fn, options);
    if (!options.lazy) effect();
    return effect;
}
function stop(effect) {
    if (effect.active) {
        cleanup(effect);
        if (effect.options.onStop) effect.options.onStop();
        effect.active = false;
    }
}
let uid = 0;
function createReactiveEffect(fn, options) {
    const effect = function reactiveEffect() {
        if (!effect.active) return fn();
        if (!effectStack.includes(effect)) {
            cleanup(effect);
            try {
                enableTracking();
                effectStack.push(effect);
                activeEffect = effect;
                return fn();
            } finally{
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect.id = uid++;
    effect.allowRecurse = !!options.allowRecurse;
    effect._isEffect = true;
    effect.active = true;
    effect.raw = fn;
    effect.deps = [];
    effect.options = options;
    return effect;
}
function cleanup(effect) {
    const { deps  } = effect;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect);
        deps.length = 0;
    }
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === undefined) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = new Set());
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) // never been tracked
    return;
    const effects = new Set();
    const add = (effectsToAdd)=>{
        if (effectsToAdd) effectsToAdd.forEach((effect)=>{
            if (effect !== activeEffect || effect.allowRecurse) effects.add(effect);
        });
    };
    if (type === "clear" /* CLEAR */ ) // collection being cleared
    // trigger all effects for target
    depsMap.forEach(add);
    else if (key === "length" && (0, _shared.isArray)(target)) depsMap.forEach((dep, key)=>{
        if (key === "length" || key >= newValue) add(dep);
    });
    else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) add(depsMap.get(key));
        // also run for iteration key on ADD | DELETE | Map.SET
        switch(type){
            case "add" /* ADD */ :
                if (!(0, _shared.isArray)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) add(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if ((0, _shared.isIntegerKey)(key)) // new index added to array -> length changes
                add(depsMap.get("length"));
                break;
            case "delete" /* DELETE */ :
                if (!(0, _shared.isArray)(target)) {
                    add(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) add(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set" /* SET */ :
                if ((0, _shared.isMap)(target)) add(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const run = (effect)=>{
        if (effect.options.onTrigger) effect.options.onTrigger({
            effect,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
        });
        if (effect.options.scheduler) effect.options.scheduler(effect);
        else effect();
    };
    effects.forEach(run);
}
const isNonTrackableKeys = /*#__PURE__*/ (0, _shared.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]).filter((0, _shared.isSymbol)));
const get = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get" /* GET */ , i + "");
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) // if that didn't work, run it again using raw values.
            return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly;
        else if (key === "__v_raw" /* RAW */  && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = (0, _shared.isArray)(target);
        if (!isReadonly && targetIsArray && (0, _shared.hasOwn)(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if ((0, _shared.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get" /* GET */ , key);
        if (shallow) return res;
        if (isRef(res)) {
            // ref unwrapping - does not apply for Array + integer key.
            const shouldUnwrap = !targetIsArray || !(0, _shared.isIntegerKey)(key);
            return shouldUnwrap ? res.value : res;
        }
        if ((0, _shared.isObject)(res)) // Convert returned value into a proxy as well. we do the isObject check
        // here to avoid invalid value warning. Also need to lazy access readonly
        // and reactive here to avoid circular dependency.
        return isReadonly ? readonly(res) : reactive(res);
        return res;
    };
}
const set = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!(0, _shared.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = (0, _shared.isArray)(target) && (0, _shared.isIntegerKey)(key) ? Number(key) < target.length : (0, _shared.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = (0, _shared.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!(0, _shared.isSymbol)(key) || !builtInSymbols.has(key)) track(target, "has" /* HAS */ , key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* ITERATE */ , (0, _shared.isArray)(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ (0, _shared.extend)({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ (0, _shared.extend)({}, readonlyHandlers, {
    get: shallowReadonlyGet
});
const toReactive = (value)=>(0, _shared.isObject)(value) ? reactive(value) : value;
const toReadonly = (value)=>(0, _shared.isObject)(value) ? readonly(value) : value;
const toShallow = (value)=>value;
const getProto = (v)=>Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get" /* GET */ , key);
    !isReadonly && track(rawTarget, "get" /* GET */ , rawKey);
    const { has  } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) return wrap(target.get(key));
    else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw" /* RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has" /* HAS */ , key);
    !isReadonly && track(rawTarget, "has" /* HAS */ , rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* RAW */ ];
    !isReadonly && track(toRaw(target), "iterate" /* ITERATE */ , ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* ADD */ , value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has , get  } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    } else checkIdentityKeys(target, has, key);
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add" /* ADD */ , key, value);
    else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set" /* SET */ , key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has , get  } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    } else checkIdentityKeys(target, has, key);
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete" /* DELETE */ , key, undefined, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = (0, _shared.isMap)(target) ? new Map(target) : new Set(target);
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) trigger(target, "clear" /* CLEAR */ , undefined, undefined, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */ , ITERATE_KEY);
        return target.forEach((value, key)=>{
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw" /* RAW */ ];
        const rawTarget = toRaw(target);
        const targetIsMap = (0, _shared.isMap)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* ITERATE */ , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next () {
                const { value , done  } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${(0, _shared.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* DELETE */  ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* ADD */ ),
        set: createReadonlyMethod("set" /* SET */ ),
        delete: createReadonlyMethod("delete" /* DELETE */ ),
        clear: createReadonlyMethod("clear" /* CLEAR */ ),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive" /* IS_REACTIVE */ ) return !isReadonly;
        else if (key === "__v_isReadonly" /* IS_READONLY */ ) return isReadonly;
        else if (key === "__v_raw" /* RAW */ ) return target;
        return Reflect.get((0, _shared.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0, _shared.toRawType)(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` + `versions of the same object${type === `Map` ? ` as keys` : ``}, ` + `which can lead to inconsistencies. ` + `Avoid differentiating between the raw and reactive versions ` + `of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* SKIP */ ] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap((0, _shared.toRawType)(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (target && target["__v_isReadonly" /* IS_READONLY */ ]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */ function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */ function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */ function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, _shared.isObject)(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* RAW */ ] && !(isReadonly && target["__v_isReactive" /* IS_REACTIVE */ ])) return target;
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw" /* RAW */ ]);
    return !!(value && value["__v_isReactive" /* IS_REACTIVE */ ]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* IS_READONLY */ ]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    return observed && toRaw(observed["__v_raw" /* RAW */ ]) || observed;
}
function markRaw(value) {
    (0, _shared.def)(value, "__v_skip" /* SKIP */ , true);
    return value;
}
const convert = (val)=>(0, _shared.isObject)(val) ? reactive(val) : val;
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value);
}
function shallowRef(value) {
    return createRef(value, true);
}
class RefImpl {
    constructor(value, _shallow = false){
        this._shallow = _shallow;
        this.__v_isRef = true;
        this._rawValue = _shallow ? value : toRaw(value);
        this._value = _shallow ? value : convert(value);
    }
    get value() {
        track(toRaw(this), "get" /* GET */ , "value");
        return this._value;
    }
    set value(newVal) {
        newVal = this._shallow ? newVal : toRaw(newVal);
        if ((0, _shared.hasChanged)(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(toRaw(this), "set" /* SET */ , "value", newVal);
        }
    }
}
function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
function triggerRef(ref) {
    trigger(toRaw(ref), "set" /* SET */ , "value", ref.value);
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.__v_isRef = true;
        const { get , set  } = factory(()=>track(this, "get" /* GET */ , "value"), ()=>trigger(this, "set" /* SET */ , "value"));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = (0, _shared.isArray)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = toRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key){
        this._object = _object;
        this._key = _key;
        this.__v_isRef = true;
    }
    get value() {
        return this._object[this._key];
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
}
function toRef(object, key) {
    return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
}
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly){
        this._setter = _setter;
        this._dirty = true;
        this.__v_isRef = true;
        this.effect = effect(getter, {
            lazy: true,
            scheduler: ()=>{
                if (!this._dirty) {
                    this._dirty = true;
                    trigger(toRaw(this), "set" /* SET */ , "value");
                }
            }
        });
        this["__v_isReadonly" /* IS_READONLY */ ] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        if (self._dirty) {
            self._value = this.effect();
            self._dirty = false;
        }
        track(self, "get" /* GET */ , "value");
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
function computed(getterOrOptions) {
    let getter;
    let setter;
    if ((0, _shared.isFunction)(getterOrOptions)) {
        getter = getterOrOptions;
        setter = ()=>{
            console.warn("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, (0, _shared.isFunction)(getterOrOptions) || !getterOrOptions.set);
}

},{"@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SM3y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ);
parcelHelpers.export(exports, "NO", ()=>NO);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames);
parcelHelpers.export(exports, "babelParserDefaultPlugins", ()=>babelParserDefaultPlugins);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "def", ()=>def);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey);
parcelHelpers.export(exports, "isKnownAttr", ()=>isKnownAttr);
parcelHelpers.export(exports, "isMap", ()=>isMap);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener);
parcelHelpers.export(exports, "isNoUnitNumericStyleProp", ()=>isNoUnitNumericStyleProp);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isOn", ()=>isOn);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
parcelHelpers.export(exports, "isSet", ()=>isSet);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf);
parcelHelpers.export(exports, "makeMap", ()=>makeMap);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle);
parcelHelpers.export(exports, "objectToString", ()=>objectToString);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toRawType", ()=>toRawType);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString);
var global = arguments[3];
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */ function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
/**
 * dev only flag -> name mapping
 */ const PatchFlagNames = {
    [1 /* TEXT */ ]: `TEXT`,
    [2 /* CLASS */ ]: `CLASS`,
    [4 /* STYLE */ ]: `STYLE`,
    [8 /* PROPS */ ]: `PROPS`,
    [16 /* FULL_PROPS */ ]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */ ]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */ ]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */ ]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */ ]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */ ]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */ ]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */ ]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */ ]: `HOISTED`,
    [-2 /* BAIL */ ]: `BAIL`
};
/**
 * Dev only
 */ const slotFlagsText = {
    [1 /* STABLE */ ]: "STABLE",
    [2 /* DYNAMIC */ ]: "DYNAMIC",
    [3 /* FORWARDED */ ]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length1 = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length1));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */ const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */ const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
/**
 * CSS properties that accept plain numbers
 */ const isNoUnitNumericStyleProp = /*#__PURE__*/ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` + `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` + `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` + `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` + `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` + `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` + // SVG
`fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` + `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */ const isKnownAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`);
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = "";
    if (!styles) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) // only render valid values
        ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.substring(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */ if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */ const toDisplayString = (val)=>{
    return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val])=>{
            entries[`${key} =>`] = val;
            return entries;
        }, {})
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ]
    };
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */ const babelParserDefaultPlugins = [
    "bigInt",
    "optionalChaining",
    "nullishCoalescingOperator"
];
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
/**
 * Always return false.
 */ const NO = ()=>false;
const onRE = /^on[^a-z]/;
const isOn = (key)=>onRE.test(key);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>val instanceof Date;
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn)=>{
    const cache = Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */ const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */ const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
/**
 * @private
 */ const capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */ const toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue)=>value !== oldValue && (value === value || oldValue === oldValue);
const invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const def = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eEyB":[function(require,module,exports) {
var _warn = require("../utils/warn");
var _magics = require("../magics");
var _nextTick = require("./$nextTick");
var _dispatch = require("./$dispatch");
var _watch = require("./$watch");
var _store = require("./$store");
var _data = require("./$data");
var _root = require("./$root");
var _refs = require("./$refs");
var _id = require("./$id");
var _el = require("./$el");
// Register warnings for people using plugin syntaxes and not loading the plugin itself:
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
    (0, _magics.magic)(magicName, (el)=>(0, _warn.warn)(`You can't use [$${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}

},{"../utils/warn":"esBMu","../magics":"hvPLs","./$nextTick":"7n2ic","./$dispatch":"7dbPr","./$watch":"1IWkx","./$store":"eH19V","./$data":"fG3fj","./$root":"aj71W","./$refs":"2cyvn","./$id":"4Meqh","./$el":"58hJC"}],"7n2ic":[function(require,module,exports) {
var _nextTick = require("../nextTick");
var _magics = require("../magics");
(0, _magics.magic)("nextTick", ()=>(0, _nextTick.nextTick));

},{"../nextTick":"8fN2P","../magics":"hvPLs"}],"7dbPr":[function(require,module,exports) {
var _dispatch = require("../utils/dispatch");
var _magics = require("../magics");
(0, _magics.magic)("dispatch", (el)=>(0, _dispatch.dispatch).bind((0, _dispatch.dispatch), el));

},{"../utils/dispatch":"jisEy","../magics":"hvPLs"}],"1IWkx":[function(require,module,exports) {
var _magics = require("../magics");
(0, _magics.magic)("watch", (el, { evaluateLater , effect  })=>(key, callback)=>{
        let evaluate = evaluateLater(key);
        let firstTime = true;
        let oldValue;
        let effectReference = effect(()=>evaluate((value)=>{
                // JSON.stringify touches every single property at any level enabling deep watching
                JSON.stringify(value);
                if (!firstTime) // We have to queue this watcher as a microtask so that
                // the watcher doesn't pick up its own dependencies.
                queueMicrotask(()=>{
                    callback(value, oldValue);
                    oldValue = value;
                });
                else oldValue = value;
                firstTime = false;
            }));
        // We want to remove this effect from the list of effects
        // stored on an element. Livewire uses that list to
        // "re-run" Alpine effects after a page load. A "watcher"
        // shuldn't be re-run like that. It will cause infinite loops.
        el._x_effects.delete(effectReference);
    });

},{"../magics":"hvPLs"}],"eH19V":[function(require,module,exports) {
var _store = require("../store");
var _magics = require("../magics");
(0, _magics.magic)("store", (0, _store.getStores));

},{"../store":"7ad4s","../magics":"hvPLs"}],"fG3fj":[function(require,module,exports) {
var _scope = require("../scope");
var _magics = require("../magics");
(0, _magics.magic)("data", (el)=>(0, _scope.scope)(el));

},{"../scope":"9LID8","../magics":"hvPLs"}],"aj71W":[function(require,module,exports) {
var _lifecycle = require("../lifecycle");
var _magics = require("../magics");
(0, _magics.magic)("root", (el)=>(0, _lifecycle.closestRoot)(el));

},{"../lifecycle":"1jjaR","../magics":"hvPLs"}],"2cyvn":[function(require,module,exports) {
var _lifecycle = require("../lifecycle");
var _scope = require("../scope");
var _magics = require("../magics");
(0, _magics.magic)("refs", (el)=>{
    if (el._x_refs_proxy) return el._x_refs_proxy;
    el._x_refs_proxy = (0, _scope.mergeProxies)(getArrayOfRefObject(el));
    return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
    let refObjects = [];
    let currentEl = el;
    while(currentEl){
        if (currentEl._x_refs) refObjects.push(currentEl._x_refs);
        currentEl = currentEl.parentNode;
    }
    return refObjects;
}

},{"../lifecycle":"1jjaR","../scope":"9LID8","../magics":"hvPLs"}],"4Meqh":[function(require,module,exports) {
var _magics = require("../magics");
var _ids = require("../ids");
(0, _magics.magic)("id", (el)=>(name, key = null)=>{
        let root = (0, _ids.closestIdRoot)(el, name);
        let id = root ? root._x_ids[name] : (0, _ids.findAndIncrementId)(name);
        return key ? `${name}-${id}-${key}` : `${name}-${id}`;
    });

},{"../magics":"hvPLs","../ids":"6wOJg"}],"6wOJg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findAndIncrementId", ()=>findAndIncrementId);
parcelHelpers.export(exports, "closestIdRoot", ()=>closestIdRoot);
parcelHelpers.export(exports, "setIdRoot", ()=>setIdRoot);
var _lifecycle = require("./lifecycle");
let globalIdMemo = {};
function findAndIncrementId(name) {
    if (!globalIdMemo[name]) globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
    return (0, _lifecycle.findClosest)(el, (element)=>{
        if (element._x_ids && element._x_ids[name]) return true;
    });
}
function setIdRoot(el, name) {
    if (!el._x_ids) el._x_ids = {};
    if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
}

},{"./lifecycle":"1jjaR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58hJC":[function(require,module,exports) {
var _magics = require("../magics");
(0, _magics.magic)("el", (el)=>el);

},{"../magics":"hvPLs"}],"6qgIj":[function(require,module,exports) {
var _directives = require("../directives");
var _warn = require("../utils/warn");
var _xTransition = require("./x-transition");
var _xModelable = require("./x-modelable");
var _xTeleport = require("./x-teleport");
var _xIgnore = require("./x-ignore");
var _xEffect = require("./x-effect");
var _xModel = require("./x-model");
var _xCloak = require("./x-cloak");
var _xInit = require("./x-init");
var _xText = require("./x-text");
var _xHtml = require("./x-html");
var _xBind = require("./x-bind");
var _xData = require("./x-data");
var _xShow = require("./x-show");
var _xFor = require("./x-for");
var _xRef = require("./x-ref");
var _xIf = require("./x-if");
var _xId = require("./x-id");
var _xOn = require("./x-on");
// Register warnings for people using plugin syntaxes and not loading the plugin itself:
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
    (0, _directives.directive)(directiveName, (el)=>(0, _warn.warn)(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}

},{"../directives":"2WB5Z","../utils/warn":"esBMu","./x-transition":"aOXw1","./x-modelable":"46DHv","./x-teleport":"cGtSj","./x-ignore":"jjq73","./x-effect":"egyuv","./x-model":"8LFly","./x-cloak":"3nKUU","./x-init":"88hfp","./x-text":"8c7kL","./x-html":"7qSUa","./x-bind":"gTxRi","./x-data":"5qffu","./x-show":"gwRGW","./x-for":"3IQqv","./x-ref":"4lP0z","./x-if":"2DEHy","./x-id":"18bjO","./x-on":"gda0s"}],"46DHv":[function(require,module,exports) {
var _directives = require("../directives");
(0, _directives.directive)("modelable", (el, { expression  }, { effect , evaluateLater  })=>{
    let func = evaluateLater(expression);
    let innerGet = ()=>{
        let result;
        func((i)=>result = i);
        return result;
    };
    let evaluateInnerSet = evaluateLater(`${expression} = __placeholder`);
    let innerSet = (val)=>evaluateInnerSet(()=>{}, {
            scope: {
                "__placeholder": val
            }
        });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(()=>{
        if (!el._x_model) return;
        // Remove native event listeners as these are now bound with x-modelable.
        // The reason for this is that it's often useful to wrap <input> elements
        // in x-modelable/model, but the input events from the native input
        // override any functionality added by x-modelable causing confusion.
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        effect(()=>innerSet(outerGet()));
        effect(()=>outerSet(innerGet()));
    });
});

},{"../directives":"2WB5Z"}],"cGtSj":[function(require,module,exports) {
var _directives = require("../directives");
var _lifecycle = require("../lifecycle");
var _mutation = require("../mutation");
var _scope = require("../scope");
var _warn = require("../utils/warn");
(0, _directives.directive)("teleport", (el, { expression  }, { cleanup  })=>{
    if (el.tagName.toLowerCase() !== "template") (0, _warn.warn)("x-teleport can only be used on a <template> tag", el);
    let target = document.querySelector(expression);
    if (!target) (0, _warn.warn)(`Cannot find x-teleport element for selector: "${expression}"`);
    let clone = el.content.cloneNode(true).firstElementChild;
    // Add reference to element on <template x-teleport, and visa versa.
    el._x_teleport = clone;
    clone._x_teleportBack = el;
    // Forward event listeners:
    if (el._x_forwardEvents) el._x_forwardEvents.forEach((eventName)=>{
        clone.addEventListener(eventName, (e)=>{
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
        });
    });
    (0, _scope.addScopeToNode)(clone, {}, el);
    (0, _mutation.mutateDom)(()=>{
        target.appendChild(clone);
        (0, _lifecycle.initTree)(clone);
        clone._x_ignore = true;
    });
    cleanup(()=>clone.remove());
});

},{"../directives":"2WB5Z","../lifecycle":"1jjaR","../mutation":"fzZOV","../scope":"9LID8","../utils/warn":"esBMu"}],"jjq73":[function(require,module,exports) {
var _directives = require("../directives");
let handler = ()=>{};
handler.inline = (el, { modifiers  }, { cleanup  })=>{
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup(()=>{
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
};
(0, _directives.directive)("ignore", handler);

},{"../directives":"2WB5Z"}],"egyuv":[function(require,module,exports) {
var _directives = require("../directives");
var _evaluator = require("../evaluator");
(0, _directives.directive)("effect", (el, { expression  }, { effect  })=>effect((0, _evaluator.evaluateLater)(el, expression)));

},{"../directives":"2WB5Z","../evaluator":"420sQ"}],"8LFly":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _evaluator = require("../evaluator");
var _directives = require("../directives");
var _mutation = require("../mutation");
var _bind = require("../utils/bind");
var _bindDefault = parcelHelpers.interopDefault(_bind);
var _on = require("../utils/on");
var _onDefault = parcelHelpers.interopDefault(_on);
(0, _directives.directive)("model", (el, { modifiers , expression  }, { effect , cleanup  })=>{
    let evaluate = (0, _evaluator.evaluateLater)(el, expression);
    let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    let evaluateAssignment = (0, _evaluator.evaluateLater)(el, assignmentExpression);
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === "select" || [
        "checkbox",
        "radio"
    ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
    let removeListener = (0, _onDefault.default)(el, event, modifiers, (e)=>{
        evaluateAssignment(()=>{}, {
            scope: {
                "$event": e,
                rightSideOfExpression: assigmentFunction
            }
        });
    });
    // Register the listener removal callback on the element, so that
    // in addition to the cleanup function, x-modelable may call it.
    // Also, make this a keyed object if we decide to reintroduce
    // "named modelables" some time in a future Alpine version.
    if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup(()=>el._x_removeModelListeners["default"]());
    // Allow programmatic overiding of x-model.
    let evaluateSetModel = (0, _evaluator.evaluateLater)(el, `${expression} = __placeholder`);
    el._x_model = {
        get () {
            let result;
            evaluate((value)=>result = value);
            return result;
        },
        set (value) {
            evaluateSetModel(()=>{}, {
                scope: {
                    "__placeholder": value
                }
            });
        }
    };
    el._x_forceModelUpdate = ()=>{
        evaluate((value)=>{
            // If nested model key is undefined, set the default value to empty string.
            if (value === undefined && expression.match(/\./)) value = "";
            // @todo: This is nasty
            window.fromModel = true;
            (0, _mutation.mutateDom)(()=>(0, _bindDefault.default)(el, "value", value));
            delete window.fromModel;
        });
    };
    effect(()=>{
        // Don't modify the value of the input if it's focused.
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate();
    });
});
function generateAssignmentFunction(el, modifiers, expression) {
    if (el.type === "radio") // Radio buttons only work properly when they share a name attribute.
    // People might assume we take care of that for them, because
    // they already set a shared "x-model" attribute.
    (0, _mutation.mutateDom)(()=>{
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
    return (event, currentValue)=>{
        return (0, _mutation.mutateDom)(()=>{
            // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
            // Safari autofill triggers event as CustomEvent and assigns value to target
            // so we return event.target.value instead of event.detail
            if (event instanceof CustomEvent && event.detail !== undefined) return event.detail || event.target.value;
            else if (el.type === "checkbox") {
                // If the data we are binding to is an array, toggle its value inside the array.
                if (Array.isArray(currentValue)) {
                    let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
                    return event.target.checked ? currentValue.concat([
                        newValue
                    ]) : currentValue.filter((el)=>!checkedAttrLooseCompare(el, newValue));
                } else return event.target.checked;
            } else if (el.tagName.toLowerCase() === "select" && el.multiple) return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
            }) : Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
            else {
                let rawValue = event.target.value;
                return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
            }
        });
    };
}
function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}

},{"../evaluator":"420sQ","../directives":"2WB5Z","../mutation":"fzZOV","../utils/bind":"19sk1","../utils/on":"dxRoc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxRoc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _debounce = require("./debounce");
var _throttle = require("./throttle");
function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler = (e)=>callback(e);
    let options = {};
    // This little helper allows us to add functionality to the listener's
    // handler more flexibly in a "middleware" style.
    let wrapHandler = (callback, wrapper)=>(e)=>wrapper(callback, e);
    if (modifiers.includes("dot")) event = dotSyntax(event);
    if (modifiers.includes("camel")) event = camelCase(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("capture")) options.capture = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("prevent")) handler = wrapHandler(handler, (next, e)=>{
        e.preventDefault();
        next(e);
    });
    if (modifiers.includes("stop")) handler = wrapHandler(handler, (next, e)=>{
        e.stopPropagation();
        next(e);
    });
    if (modifiers.includes("self")) handler = wrapHandler(handler, (next, e)=>{
        e.target === el && next(e);
    });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler = wrapHandler(handler, (next, e)=>{
            if (el.contains(e.target)) return;
            if (e.target.isConnected === false) return;
            if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
            // Additional check for special implementations like x-collapse
            // where the element doesn't have display: none
            if (el._x_isShown === false) return;
            next(e);
        });
    }
    if (modifiers.includes("once")) handler = wrapHandler(handler, (next, e)=>{
        next(e);
        listenerTarget.removeEventListener(event, handler, options);
    });
    // Handle :keydown and :keyup listeners.
    handler = wrapHandler(handler, (next, e)=>{
        if (isKeyEvent(event)) {
            if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
        }
        next(e);
    });
    if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler = (0, _debounce.debounce)(handler, wait);
    }
    if (modifiers.includes("throttle")) {
        let nextModifier1 = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait1 = isNumeric(nextModifier1.split("ms")[0]) ? Number(nextModifier1.split("ms")[0]) : 250;
        handler = (0, _throttle.throttle)(handler, wait1);
    }
    listenerTarget.addEventListener(event, handler, options);
    return ()=>{
        listenerTarget.removeEventListener(event, handler, options);
    };
}
exports.default = on;
function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
    return [
        "keydown",
        "keyup"
    ].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i)=>{
        return ![
            "window",
            "document",
            "prevent",
            "stop",
            "once"
        ].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    // If no modifier is specified, we'll call it a press.
    if (keyModifiers.length === 0) return false;
    // If one is passed, AND it matches the key pressed, we'll call it a press.
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    // The user is listening for key combinations.
    const systemKeyModifiers = [
        "ctrl",
        "shift",
        "alt",
        "meta",
        "cmd",
        "super"
    ];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
            // Alias "cmd" and "super" to "meta"
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
        });
        // If all the modifiers selected are pressed, ...
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
            // AND the remaining key is pressed as well. It's a press.
            if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
    }
    // We'll call it NOT a valid keypress.
    return true;
}
function keyToModifiers(key) {
    if (!key) return [];
    key = kebabCase(key);
    let modifierToKeyMap = {
        "ctrl": "control",
        "slash": "/",
        "space": "-",
        "spacebar": "-",
        "cmd": "meta",
        "esc": "escape",
        "up": "arrow-up",
        "down": "arrow-down",
        "left": "arrow-left",
        "right": "arrow-right",
        "period": ".",
        "equal": "="
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier)=>{
        if (modifierToKeyMap[modifier] === key) return modifier;
    }).filter((modifier)=>modifier);
}

},{"./debounce":"ezKC7","./throttle":"kTjTt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nKUU":[function(require,module,exports) {
var _directives = require("../directives");
var _mutation = require("../mutation");
(0, _directives.directive)("cloak", (el)=>queueMicrotask(()=>(0, _mutation.mutateDom)(()=>el.removeAttribute((0, _directives.prefix)("cloak")))));

},{"../directives":"2WB5Z","../mutation":"fzZOV"}],"88hfp":[function(require,module,exports) {
var _directives = require("../directives");
var _lifecycle = require("../lifecycle");
var _clone = require("../clone");
(0, _lifecycle.addInitSelector)(()=>`[${(0, _directives.prefix)("init")}]`);
(0, _directives.directive)("init", (0, _clone.skipDuringClone)((el, { expression  }, { evaluate  })=>{
    if (typeof expression === "string") return !!expression.trim() && evaluate(expression, {}, false);
    return evaluate(expression, {}, false);
}));

},{"../directives":"2WB5Z","../lifecycle":"1jjaR","../clone":"7RrDr"}],"8c7kL":[function(require,module,exports) {
var _directives = require("../directives");
var _mutation = require("../mutation");
(0, _directives.directive)("text", (el, { expression  }, { effect , evaluateLater  })=>{
    let evaluate = evaluateLater(expression);
    effect(()=>{
        evaluate((value)=>{
            (0, _mutation.mutateDom)(()=>{
                el.textContent = value;
            });
        });
    });
});

},{"../directives":"2WB5Z","../mutation":"fzZOV"}],"7qSUa":[function(require,module,exports) {
var _directives = require("../directives");
var _lifecycle = require("../lifecycle");
var _mutation = require("../mutation");
(0, _directives.directive)("html", (el, { expression  }, { effect , evaluateLater  })=>{
    let evaluate = evaluateLater(expression);
    effect(()=>{
        evaluate((value)=>{
            (0, _mutation.mutateDom)(()=>{
                el.innerHTML = value;
                el._x_ignoreSelf = true;
                (0, _lifecycle.initTree)(el);
                delete el._x_ignoreSelf;
            });
        });
    });
});

},{"../directives":"2WB5Z","../lifecycle":"1jjaR","../mutation":"fzZOV"}],"gTxRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _directives = require("../directives");
var _evaluator = require("../evaluator");
var _mutation = require("../mutation");
var _bind = require("../utils/bind");
var _bindDefault = parcelHelpers.interopDefault(_bind);
var _binds = require("../binds");
(0, _directives.mapAttributes)((0, _directives.startingWith)(":", (0, _directives.into)((0, _directives.prefix)("bind:"))));
(0, _directives.directive)("bind", (el, { value , modifiers , expression , original  }, { effect  })=>{
    if (!value) {
        let bindingProviders = {};
        (0, _binds.injectBindingProviders)(bindingProviders);
        let getBindings = (0, _evaluator.evaluateLater)(el, expression);
        getBindings((bindings)=>{
            (0, _binds.applyBindingsObject)(el, bindings, original);
        }, {
            scope: bindingProviders
        });
        return;
    }
    if (value === "key") return storeKeyForXFor(el, expression);
    let evaluate = (0, _evaluator.evaluateLater)(el, expression);
    effect(()=>evaluate((result)=>{
            // If nested object key is undefined, set the default value to empty string.
            if (result === undefined && expression.match(/\./)) result = "";
            (0, _mutation.mutateDom)(()=>(0, _bindDefault.default)(el, value, result, modifiers));
        }));
});
function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
}

},{"../directives":"2WB5Z","../evaluator":"420sQ","../mutation":"fzZOV","../utils/bind":"19sk1","../binds":"c7EMi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5qffu":[function(require,module,exports) {
var _directives = require("../directives");
var _interceptor = require("../interceptor");
var _datas = require("../datas");
var _lifecycle = require("../lifecycle");
var _clone = require("../clone");
var _scope = require("../scope");
var _magics = require("../magics");
var _reactivity = require("../reactivity");
var _evaluator = require("../evaluator");
(0, _lifecycle.addRootSelector)(()=>`[${(0, _directives.prefix)("data")}]`);
(0, _directives.directive)("data", (0, _clone.skipDuringClone)((el, { expression  }, { cleanup  })=>{
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    (0, _magics.injectMagics)(magicContext, el);
    let dataProviderContext = {};
    (0, _datas.injectDataProviders)(dataProviderContext, magicContext);
    let data = (0, _evaluator.evaluate)(el, expression, {
        scope: dataProviderContext
    });
    if (data === undefined) data = {};
    (0, _magics.injectMagics)(data, el);
    let reactiveData = (0, _reactivity.reactive)(data);
    (0, _interceptor.initInterceptors)(reactiveData);
    let undo = (0, _scope.addScopeToNode)(el, reactiveData);
    reactiveData["init"] && (0, _evaluator.evaluate)(el, reactiveData["init"]);
    cleanup(()=>{
        reactiveData["destroy"] && (0, _evaluator.evaluate)(el, reactiveData["destroy"]);
        undo();
    });
}));

},{"../directives":"2WB5Z","../interceptor":"9aFtx","../datas":"7H89X","../lifecycle":"1jjaR","../clone":"7RrDr","../scope":"9LID8","../magics":"hvPLs","../reactivity":"gAWV4","../evaluator":"420sQ"}],"gwRGW":[function(require,module,exports) {
var _evaluator = require("../evaluator");
var _directives = require("../directives");
var _mutation = require("../mutation");
var _once = require("../utils/once");
(0, _directives.directive)("show", (el, { modifiers , expression  }, { effect  })=>{
    let evaluate = (0, _evaluator.evaluateLater)(el, expression);
    // We're going to set this function on the element directly so that
    // other plugins like "Collapse" can overwrite them with their own logic.
    if (!el._x_doHide) el._x_doHide = ()=>{
        (0, _mutation.mutateDom)(()=>{
            el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : undefined);
        });
    };
    if (!el._x_doShow) el._x_doShow = ()=>{
        (0, _mutation.mutateDom)(()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        });
    };
    let hide = ()=>{
        el._x_doHide();
        el._x_isShown = false;
    };
    let show = ()=>{
        el._x_doShow();
        el._x_isShown = true;
    };
    // We are wrapping this function in a setTimeout here to prevent
    // a race condition from happening where elements that have a
    // @click.away always view themselves as shown on the page.
    let clickAwayCompatibleShow = ()=>setTimeout(show);
    let toggle = (0, _once.once)((value)=>value ? show() : hide(), (value)=>{
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        else value ? clickAwayCompatibleShow() : hide();
    });
    let oldValue;
    let firstTime = true;
    effect(()=>evaluate((value)=>{
            // Let's make sure we only call this effect if the value changed.
            // This prevents "blip" transitions. (1 tick out, then in)
            if (!firstTime && value === oldValue) return;
            if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
            toggle(value);
            oldValue = value;
            firstTime = false;
        }));
});

},{"../evaluator":"420sQ","../directives":"2WB5Z","../mutation":"fzZOV","../utils/once":"i3c0v"}],"3IQqv":[function(require,module,exports) {
var _scope = require("../scope");
var _evaluator = require("../evaluator");
var _directives = require("../directives");
var _reactivity = require("../reactivity");
var _lifecycle = require("../lifecycle");
var _mutation = require("../mutation");
var _scheduler = require("../scheduler");
var _warn = require("../utils/warn");
(0, _directives.directive)("for", (el, { expression  }, { effect , cleanup  })=>{
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = (0, _evaluator.evaluateLater)(el, iteratorNames.items);
    let evaluateKey = (0, _evaluator.evaluateLater)(el, // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect(()=>loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup(()=>{
        Object.values(el._x_lookup).forEach((el)=>el.remove());
        delete el._x_prevKeys;
        delete el._x_lookup;
    });
});
let shouldFastRender = true;
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject = (i)=>typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items)=>{
        // Prepare yourself. There's a lot going on here. Take heart,
        // every bit of complexity in this function was added for
        // the purpose of making Alpine fast with large datas.
        // Support number literals. Ex: x-for="i in 100"
        if (isNumeric(items) && items >= 0) items = Array.from(Array(items).keys(), (i)=>i + 1);
        if (items === undefined) items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        // In order to preserve DOM elements (move instead of replace)
        // we need to generate all the keys for every iteration up
        // front. These will be our source of truth for diffing.
        if (isObject(items)) items = Object.entries(items).map(([key, value])=>{
            let scope = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value)=>keys.push(value), {
                scope: {
                    index: key,
                    ...scope
                }
            });
            scopes.push(scope);
        });
        else for(let i = 0; i < items.length; i++){
            let scope = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value)=>keys.push(value), {
                scope: {
                    index: i,
                    ...scope
                }
            });
            scopes.push(scope);
        }
        // Rather than making DOM manipulations inside one large loop, we'll
        // instead track which mutations need to be made in the following
        // arrays. After we're finished, we can batch them at the end.
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        // First, we track elements that will need to be removed.
        for(let i1 = 0; i1 < prevKeys.length; i1++){
            let key = prevKeys[i1];
            if (keys.indexOf(key) === -1) removes.push(key);
        }
        // Notice we're mutating prevKeys as we go. This makes it
        // so that we can efficiently make incremental comparisons.
        prevKeys = prevKeys.filter((key)=>!removes.includes(key));
        let lastKey = "template";
        // This is the important part of the diffing algo. Identifying
        // which keys (future DOM elements) are new, which ones have
        // or haven't moved (noting where they moved to / from).
        for(let i2 = 0; i2 < keys.length; i2++){
            let key1 = keys[i2];
            let prevIndex = prevKeys.indexOf(key1);
            if (prevIndex === -1) {
                // New key found.
                prevKeys.splice(i2, 0, key1);
                adds.push([
                    lastKey,
                    i2
                ]);
            } else if (prevIndex !== i2) {
                // A key has moved.
                let keyInSpot = prevKeys.splice(i2, 1)[0];
                let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
                prevKeys.splice(i2, 0, keyForSpot);
                prevKeys.splice(prevIndex, 0, keyInSpot);
                moves.push([
                    keyInSpot,
                    keyForSpot
                ]);
            } else // This key hasn't moved, but we'll still keep track
            // so that we can refresh it later on.
            sames.push(key1);
            lastKey = key1;
        }
        // Now that we've done the diffing work, we can apply the mutations
        // in batches for both separating types work and optimizing
        // for browser performance.
        // We'll remove all the nodes that need to be removed,
        // letting the mutation observer pick them up and
        // clean up any side effects they had.
        for(let i3 = 0; i3 < removes.length; i3++){
            let key2 = removes[i3];
            // Remove any queued effects that might run after the DOM node has been removed.
            if (!!lookup[key2]._x_effects) lookup[key2]._x_effects.forEach((0, _scheduler.dequeueJob));
            lookup[key2].remove();
            lookup[key2] = null;
            delete lookup[key2];
        }
        // Here we'll move elements around, skipping
        // mutation observer triggers by using "mutateDom".
        for(let i4 = 0; i4 < moves.length; i4++){
            let [keyInSpot1, keyForSpot1] = moves[i4];
            let elInSpot = lookup[keyInSpot1];
            let elForSpot = lookup[keyForSpot1];
            let marker = document.createElement("div");
            (0, _mutation.mutateDom)(()=>{
                elForSpot.after(marker);
                elInSpot.after(elForSpot);
                elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
                marker.before(elInSpot);
                elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
                marker.remove();
            });
            (0, _scope.refreshScope)(elForSpot, scopes[keys.indexOf(keyForSpot1)]);
        }
        // We can now create and add new elements.
        for(let i5 = 0; i5 < adds.length; i5++){
            let [lastKey1, index] = adds[i5];
            let lastEl = lastKey1 === "template" ? templateEl : lookup[lastKey1];
            // If the element is a x-if template evaluated to true,
            // point lastEl to the if-generated node
            if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
            let scope1 = scopes[index];
            let key3 = keys[index];
            let clone = document.importNode(templateEl.content, true).firstElementChild;
            (0, _scope.addScopeToNode)(clone, (0, _reactivity.reactive)(scope1), templateEl);
            (0, _mutation.mutateDom)(()=>{
                lastEl.after(clone);
                (0, _lifecycle.initTree)(clone);
            });
            if (typeof key3 === "object") (0, _warn.warn)("x-for key cannot be an object, it must be a string or an integer", templateEl);
            lookup[key3] = clone;
        }
        // If an element hasn't changed, we still want to "refresh" the
        // data it depends on in case the data has changed in an
        // "unobservable" way.
        for(let i6 = 0; i6 < sames.length; i6++)(0, _scope.refreshScope)(lookup[sames[i6]], scopes[keys.indexOf(sames[i6])]);
        // Now we'll log the keys (and the order they're in) for comparing
        // against next time.
        templateEl._x_prevKeys = keys;
    });
}
// This was taken from VueJS 2.* core. Thanks Vue!
function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.collection = iteratorMatch[2].trim();
    } else res.item = item;
    return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = {};
    // Support array destructuring ([foo, bar]).
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i)=>i.trim());
        names.forEach((name, i)=>{
            scopeVariables[name] = item[i];
        });
    // Support object destructuring ({ foo: 'oof', bar: 'rab' }).
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names1 = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i)=>i.trim());
        names1.forEach((name)=>{
            scopeVariables[name] = item[name];
        });
    } else scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}

},{"../scope":"9LID8","../evaluator":"420sQ","../directives":"2WB5Z","../reactivity":"gAWV4","../lifecycle":"1jjaR","../mutation":"fzZOV","../scheduler":"bJBiD","../utils/warn":"esBMu"}],"4lP0z":[function(require,module,exports) {
var _lifecycle = require("../lifecycle");
var _directives = require("../directives");
function handler() {}
handler.inline = (el, { expression  }, { cleanup  })=>{
    let root = (0, _lifecycle.closestRoot)(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup(()=>delete root._x_refs[expression]);
};
(0, _directives.directive)("ref", handler);

},{"../lifecycle":"1jjaR","../directives":"2WB5Z"}],"2DEHy":[function(require,module,exports) {
var _evaluator = require("../evaluator");
var _scope = require("../scope");
var _directives = require("../directives");
var _lifecycle = require("../lifecycle");
var _mutation = require("../mutation");
var _walk = require("../utils/walk");
var _scheduler = require("../scheduler");
(0, _directives.directive)("if", (el, { expression  }, { effect , cleanup  })=>{
    let evaluate = (0, _evaluator.evaluateLater)(el, expression);
    let show = ()=>{
        if (el._x_currentIfEl) return el._x_currentIfEl;
        let clone = el.content.cloneNode(true).firstElementChild;
        (0, _scope.addScopeToNode)(clone, {}, el);
        (0, _mutation.mutateDom)(()=>{
            el.after(clone);
            (0, _lifecycle.initTree)(clone);
        });
        el._x_currentIfEl = clone;
        el._x_undoIf = ()=>{
            (0, _walk.walk)(clone, (node)=>{
                if (!!node._x_effects) node._x_effects.forEach((0, _scheduler.dequeueJob));
            });
            clone.remove();
            delete el._x_currentIfEl;
        };
        return clone;
    };
    let hide = ()=>{
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
    };
    effect(()=>evaluate((value)=>{
            value ? show() : hide();
        }));
    cleanup(()=>el._x_undoIf && el._x_undoIf());
});

},{"../evaluator":"420sQ","../scope":"9LID8","../directives":"2WB5Z","../lifecycle":"1jjaR","../mutation":"fzZOV","../utils/walk":"6EqH5","../scheduler":"bJBiD"}],"18bjO":[function(require,module,exports) {
var _directives = require("../directives");
var _ids = require("../ids");
(0, _directives.directive)("id", (el, { expression  }, { evaluate  })=>{
    let names = evaluate(expression);
    names.forEach((name)=>(0, _ids.setIdRoot)(el, name));
});

},{"../directives":"2WB5Z","../ids":"6wOJg"}],"gda0s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _directives = require("../directives");
var _evaluator = require("../evaluator");
var _clone = require("../clone");
var _on = require("../utils/on");
var _onDefault = parcelHelpers.interopDefault(_on);
(0, _directives.mapAttributes)((0, _directives.startingWith)("@", (0, _directives.into)((0, _directives.prefix)("on:"))));
(0, _directives.directive)("on", (0, _clone.skipDuringClone)((el, { value , modifiers , expression  }, { cleanup  })=>{
    let evaluate = expression ? (0, _evaluator.evaluateLater)(el, expression) : ()=>{};
    // Forward event listeners on portals.
    if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
    }
    let removeListener = (0, _onDefault.default)(el, value, modifiers, (e)=>{
        evaluate(()=>{}, {
            scope: {
                "$event": e
            },
            params: [
                e
            ]
        });
    });
    cleanup(()=>removeListener());
}));

},{"../directives":"2WB5Z","../evaluator":"420sQ","../clone":"7RrDr","../utils/on":"dxRoc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["easPH","cUrLh"], "cUrLh", "parcelRequire63a7")

//# sourceMappingURL=index.bf186cf4.js.map
