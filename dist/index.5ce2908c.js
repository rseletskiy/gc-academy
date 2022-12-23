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
})({"7FyJT":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "033786325ce2908c";
"use strict";
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

},{}],"hXYZu":[function(require,module,exports) {
const enIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHJ4PSI5LjUiIGZpbGw9InVybCgjcGF0dGVybjApIiBzdHJva2U9IndoaXRlIi8+CjxkZWZzPgo8cGF0dGVybiBpZD0icGF0dGVybjAiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwXzkwMV8xNDU3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4zMzMzMzMpIHNjYWxlKDAuMDA2NjY2NjcpIi8+CjwvcGF0dGVybj4KPGltYWdlIGlkPSJpbWFnZTBfOTAxXzE0NTciIHdpZHRoPSIyNTAiIGhlaWdodD0iMTUwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVBvQUFBQ1dDQU1BQUFEQUJHVXVBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFrRkJNVkVYWVYyejQzK1AvLy8vTjArSTVVb29CSVduSUVDNHlUSWJHemQzdXQ4RE9LMGJQTUVyS0dEWGpoNWI5OS9qKy92Nmlyc2dXTTNVU01IT1JuNzc4L1AzMzJ0L1hVV2Z1OFBWd2dxb0VKR3NDSW1wZmM2RHA3UEw5OWZiSkZqUDg4dlRnZVlySkZESE5Ka0xKME44MVRvanI3dk5tZWFRREkycktGelhWU1dEMTFObmdkNGo4OGZQcnA3TC8vdjdycWJRU2xzd3BBQUFBQVdKTFIwUUNaZ3Q4WkFBQUFBZDBTVTFGQitZRUZnYzRLS3RlL2pnQUFBUXBTVVJCVkhqYTdkMXBWOU5RRklYaFRWVVVFWnpuZ2FFTXp2Ny9mK2V5TFVacGFPKzVaKzlkMEpOUHJsVk04K1MrcEJtYUFHeE5ycDV1M2I3RG1JWVpicStjaHAranZPM2RleGV6MjdtLzlGNjdPOWgrc0xkL3RmM2hvOGMzbGY3azZiUEZ6SjYvV0hxblgyak1Wc0NLZ1gvNTZ2Vk5wTDk1KzI0eHEvZDdINWJlYUpZNmhuL3FxdmZUMTdRK2V3VkRBTHJxM2ZTMXJmOUoxMWJ2cFRlMC9qZGRXYjJWM3RMNlpicXVlaU85cmZVbHVxeDZHMzFvL2VEd2FFWHJJM1JSOVM1NmMrdWpkRW4xSG5xZzlUbjllUDNxU1Zmdm9JZGFuOU5YZndDTVROT1Q2MGcvbVVaYW45TmI4OGhVTDZkSFc3K2dCMVpVWi9WaWV1cyt6Qmg5RXE0K3RxM1gwbVBiOWN0MGNmVktlbGZyYy9xMGI1Vk5KcWRuNTV1bm41K2Q5clErMjF5ajh4Y2xWTDJNM3R2NmJIT0ZUREt0MVl2b3lRVkhldVZ0aXA3T0ZaelorT241NFFJbkhqZWRzYmdncmtZYm5STXAyRE0wMEVtREJIWkdjanB0SVNGWm9UbzZNVTNvWnEyZ000Y0d1cUQ0ZE82aVFieHFpWFIya0hDOENZVk9IeEE0MGlMUUJiK0djR3hRMG5USnhoZU9qNUVzWGZPUkM4Zk9RNDZ1MnRHQ1k1Y3hROWZ0WHNOeG9KQ2dDdytxNERnODdLWkxENlhYMGhrcnZwTXVQb0hTUU04dlFoOWRmZHFzaFo0T3I0ZXVQMW5hUms4T1FaenVPRVhlU2s5Vkg2ZUxXNC9STXduRzZZN0xZUUY2cHZvdXV2Z2lhSWllcVQ1T1YxLzZqdEhUMWJmVDlWOTRpTktUMWJmU3hhMTMwbFBWdDlMRnJmZlNNOVczMGgxZmFjUEVPZ1UvM0tSVDBZdGU5S0lYdmVoRkwvcS9RTi8rYjZlaUY3M29SUzk2MFl0ZTlLSVh2ZWhGTDNyUmkxNzBvaGU5NkVVdmV0R0xYdlNpRjczb1JlK2wxL1gxb2hlOTZFVXZldEdMWHZTYlRNL2RBREl5N2U5OXZKclVTeCtaNmZhbno0c1hlMjhBeWR6Mk16YnQ3QzR0NHpGajFMZVdqemFPdm54ZHZHaTY3V2U0MlN1NmdNbmd4MWJxdCsrTEZ3MDNlMFZiSDdMTS82NlRxNGU0OWQvRFF0bk1VYXVIclhYT0ZwNVlQV3l0a3o3Y2VOWEQwSHJtMW4xaDlaQzNubnhnZzY1NmlGc25QS1pEVlQzRXJWTWV6cUtwSHVMV09ZL2trVlFQY2V1c0J6RUpxb2U0ZGQ3anQralZROXc2OGFGcjdPb2hicDM2cUQxdTlSQzNUbjdBSXJONmlGdG5QMWFUV0QzRXJmTWZwa3FySHVMV0ZZL1FKVlVQeDV0UTZQUUJnU010RHAyOWFIQnNVRmgwYnBCd2ZJenc2TXloZ1dQbmdVZ25MaVFjdTR4VU9pMU5PQTRVeUhUU0lNRnhlTWltY3hZWGpwTUNmRG9qVWpoT0JTbm8rZUdDNHdTZ2hKNWVjRGhPKzRyb3lWeUhQMkFZL2MvWDdBOFloZ2R1Q3NjbEhoMDlVejBjRi9hVTlQN3E0YmljcTZYM2J1dmh1SWd2cG5kV2ovam00WnIvT2VybWhOSDJnNGNIbVMvc0dPZ2QxY1B4TlMwSFBWNDl4RjlUTXRLajIzcUl2NXhtcGNlcWg3aDFMejFVUGNTdHUrbUI2aUZ1M1U5dnJoN2kxamRBYjYwZTR0WTNRbStySHVMV04wUnZxUjdpMWpkRmI2Z2VZNjMvNExXK09mcmE2bjhDamJQaTNheTFwS2tBQUFBbGRFVllkR1JoZEdVNlkzSmxZWFJsQURJd01qSXRNRFF0TWpKVU1EYzZOVFk2TkRBck1EQTZNREFkU01PVEFBQUFKWFJGV0hSa1lYUmxPbTF2WkdsbWVRQXlNREl5TFRBMExUSXlWREEzT2pVMk9qUXdLekF3T2pBd2JCVjdMd0FBQUFCSlJVNUVya0pnZ2c9PSIvPgo8L2RlZnM+Cjwvc3ZnPgo=";
const ruIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHJ4PSI5LjUiIGZpbGw9InVybCgjcGF0dGVybjApIiBzdHJva2U9IndoaXRlIi8+CjxkZWZzPgo8cGF0dGVybiBpZD0icGF0dGVybjAiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwXzc1Nl8yNTU1MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjQ4NTAzKSBzY2FsZSgwLjAwNTk4ODAyKSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwXzc1Nl8yNTU1MyIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIxNjciIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBUG9BQUFDbkJBTUFBQURLMGx3bkFBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUQxQk1WRVgvLy8rcXZlRUFPYWFPTUV2Vkt4Ny9qK2lEQUFBQUFXSkxSMFFBaUFVZFNBQUFBQWQwU1UxRkIrWUpCQUlKSVJDVTJHQUFBQUJlU1VSQlZIamE3YzBCQ1FBZ0VBU3dxMkFGSzFqQi9wbE04UnpJVm1BSkFBQUFBQUFBZkcwMVpUZlo3WGE3M1c2MzIrMTJ1OTF1dDl2dGRydmRicmZiN2VQN2FjcHRzdHZ0ZHJ2ZGJyZmI3WGE3M1c2MzIrMTJ1OTF1dDl1blBkTVgxUTE0aGk2NkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREl5TFRBNUxUQTBWREF5T2pBNU9qTXpLekF3T2pBd0M1RDkxd0FBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeU1pMHdPUzB3TkZRd01qb3dPVG96TXlzd01Eb3dNSHJOUldzQUFBQUFTVVZPUks1Q1lJST0iLz4KPC9kZWZzPgo8L3N2Zz4K";
const kzIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHJ4PSI5LjUiIGZpbGw9InVybCgjcGF0dGVybjApIiBzdHJva2U9IndoaXRlIi8+CjxkZWZzPgo8cGF0dGVybiBpZD0icGF0dGVybjAiIHBhdHRlcm5Db250ZW50VW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj4KPHVzZSB4bGluazpocmVmPSIjaW1hZ2UwXzkwMV8xNzU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC42Mjg1MzUgMC4wMTEyMTkzKSBzY2FsZSgwLjAwODQpIi8+CjwvcGF0dGVybj4KPGltYWdlIGlkPSJpbWFnZTBfOTAxXzE3NTQiIHdpZHRoPSIyNTAiIGhlaWdodD0iMTI1IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVBvQUFBQjlDQUlBQUFBRU8ra0tBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQXNBa2xFUVZSNDJ1MmRaMkFVNWZid3o4ejJYcEpOMmQzMFFucUgwQU5JRjBHYVNoR2xJNG9GRVFHdmd1VUtndGpvQ2lnb3ZZaWdsTkJEZ0ZEVFNPOTFrKzI5Nzh6N1lTQTNseWFvM1BjZk1yOVBPelBQem16T25KdzVjNTd6bklQQXZpd2dJZWtjb0tRSVNFaDFKeUVoMVoyRWhGUjNFaEpTM1VsSU9vaTZzMURYbzN5ZmhucElJWkowRktnUE92QlI4RkVja0NYVkl4SEFWNFlmR2k0dXVtNE9SSEE4bGRmd3V5WnVVZFVvSEpCL2h4NTJZZFJsdGNOSk9aSjBiSFhmME55bnRzZEhaL1dSS2lkblFjQ3BJNXI0dm9JS0FDaTB5QllHbnR6Wmt1YkxNQzBPeWd5Ni9Da3BSSklPNzh6VTI4WE5Ea0U0UzlYZ0VIdHc1SkFxSVR4bldYak9zc1BxQkErT05EaEZFU3hWazBQUVlCZVJRaVI1R2w1VmFham4wNUFqYnB5U3FZMlo2SHZkZzFNOE9HV0N6N1ZNYll3SHAzd2M4anNOSVIxM2txZEMzUVZVdXpmVndxZllVM24xYTVveUJvaktJOW5LTHV6Vy9xS0tOVTBaYWJ3NlBzWHVUVFB6cVRaU2lDUWRCUXE4TVBXK0I1NFJsazMydStyQWFXbThoaFlIUDRTbGx0RE1QUVExUXFxMTBTRmVFSGhhU0xNeFVNOEZRM2lselllVUkwbkh0dTY5aFZVQThFWDlvTS9yQnMrVlpWMDNCYjNxbHpQRkwrZTZLZWcxYWRabmRVTlgxZzhFZ0Y3OGFsS0lKQjFlM1FPWXVsWW5MODhVOEtMUERRZE92V0VNWkZPY2JOUjF3eGpvd0trVGZLN2ZOQVlxWGJ4QXBvNFVJa2xINFlHQlNKMkx6YWE0bkRoRlFMWHZWeWFmMG5ZaDlwL1VSWW1vMXU2Q0dpZE9aYU5Pblp0TkNwR2t3L3Z1alU3UmJHbDJHRXQxVUpWY2J4ZXZpampFUVowdW5OSlhXUG1yS3FuZUlaNHJ6Wkl5RFhQS0pxaGNQRktPSkIzYnVqZllSZWYwa2NQRVJYMEVWUUNRclE4Ym1QOG1BdmpxOElPN1lyY1NZNDVwWTVzY1FsS0lKQjNlZDQvaXRDUnpHb2pQQ2lmL2xsVmFiZmV1c2tzS0xWS0ZrMC9zVCtJMGRtRzNrRUlrNmZEV3ZjenFhL1F3cVU3UG11WitQSXJqTldsV04zNGRBQjdKVW01bzZtUEI2UE5rNTAwZVJwblZqeFFpU1llMzdtL0l6a2V5bFdOdnpRcG1hRTlxb3lZWHY1ckNyVS9oTmt3cW5ucEtGeFhJMEkrOU5UT1NyWHhEZnA0VUlrbUhWL2NRcHNhQlV5VjBjNGFvNHBlWW53eHVGckhmNUdiOEhMT3RuNmhjUkxVNk1Xb29VMDBLa2FURHEzdUxrODlBM0JhTVBxNXc1aVZEYURML3RoK2Z3bXU0WkFnZFh6akRodEhwcUx2WklTQ0ZTTkxoZmZmTGhoQUFPQksvUWVuazVab0RramhOOVhZeEFDUnltK2lvKzBqQ0JoKzZDUUJ5ak1Ha0VFazZ2THBmTW9iaWdMaHh5cFNTVjZyc2t2SnV5OTZ0R2dNQXE4TU9SbDVkRnM1VUhrbllTRUh3UzhaUVVvZ2tIZDZaMGJnNFdoZmJqYU9GWnVuQ2dFeTloN1dsdWVlVzVwNTZEMnRoUUdhaFJlckdVWTJUclhWeFNDR1NkSGgxQndDZG03Mmdjb3lRWnB2cW4vTmRZMzhhaXRGUTdMdkcvbFA5YzRSVTIzdVZvL1VlTW9QZ24zakNJaGdDZU5zbUczVUdNclh0QjVBTGdwKzR1bE1RWE1vd05OaEZzLzJ6WFRobFhWUGZRL0ViRDhaOXY2NnByd3VuelBLLzJPUVErdE1ORkFRbmhmZzNrVFAxbzd3TDJqYjdDU3VHaVl2Yk5sTzREZDE0dGFTVW5xeTZqL0xPejlLRjU1cmxzMlVYTmpiMURtWm8rd2tyQm9qS2doaWFqVTI5WjhzdTNEQUhaaHZDUm5ybmswTDhDeVJ4RzlvK2l5bVdwU0hIMmd6OElISEpZSEZKMjlGbG9YOTQwYXh0bTVGc0pSdDFrZ0w4aDlXOTBpWjV0dkMxMTJWWlZCVDd1bUdBMGNOdzRGUUhUak41bUY4M0RLQ2kyRnhwMXZDQ3VWVTJDU25FdjhEcThJTlNob0g0TEtUWmtyZ05JN3h1RVp2OVJSWDloQlVvZ2dGQUlxZHhoTmN0SWZXMnVuTW96bTNSMjYwWW5SVGdQNnp1QldZWmorSjhYWDcrSjBYM1dJNWlTOVFPazV0aGN0TzNSTzJJNGJUOHBPait1dnc4aitJc01NdElJVDRLWElxai9hWU5vLzhTOHhQaENoS0gzZzg2Q1FCQ3FpMmUweXltV1dMWXJRRHdmdkJKQkhBTzViWTUzOVJsNTEybS9hN1RrdnoxVjlYWFplZDVGUHRYRGM5TTlyc0tBTjQwaXpmTmdnUHlzdCtWcnhxZTRWSHNyOHZJRElKSEpaVlh2eXo0YU50bWhWWFNYMWkrSk9nNEFOQlJOd0QwRWxURmM1dmp1TTJFWFUvZ05ublRMZU84Y3dHQWdib0I0RlgvbkVtKzF5cmFQVTdIK2VRTzlTb21aZnNQcUR1SDRudzc0TXcrVlVxNTFlZlZraW45Y3Q5V09ubXRUbDcvM0xkZUxabFNidlhacDBwNU8rQk1tK0VoZVRqWmh2QTVzcXh2SS9ZVDJseHE5UU9BRDRPT3hYRVVKamVUR05PVFgyMzNVTytZZjJvM2JpMFJrekY3R1A1MHd6Zmgrd0NnMUhJN0orLzl3TXlmbzdlZDBrYVJzbjEwSGpqTk5FdWE3VTJ6cktnZFRFVXdONDRDZ0Jzb2dOOStuYUlpMklyYXdTLzYzSndsemY2NllRQXB4L3VDQUk0RFFuejI0TWhlWmVxYjhyTVN1bWxLOFN0WGpjRUFRRU05TS95ekYxVS8vM05MT2cxMS82cEtWTHA0ZlhMbmMxRG5DVzAwaCtMY3F1Z3BvRnAvVlNWTzlic3NvTm9CNEpvcENBQytERC80YnNEcDM5UUoranU1VEhkZGp1UXhyRHNGd2QrUm56bW1qZkZuR3VmSUxoQTc2WWliZmljQVBGZDIzcGRoT3FhTmVVZCtob3hGUG9nSXR1cnowTU04aXAzWS9LVzFHd0JNOExtK01YSlh2a1Y2VEJOYlovZmFyMDZ4WTdRcEpWTW1GRTFUdW5nQWtLMFBPNkdOQmdDTGh6NjlkTks0V3pNMUxzNXhiV3lKeGUrcU1laVVMbXBweUIvdkJwd0dnSjliMHR1c3p5eHBkamQrSFNuenYyTGRueEdWQmpCMXF4c0hmaHo4ZXl4SE1kN241aVY5S0JOMUFjQ0tzTjk2Q0twVHVmVkZGditkeW03RHhVVURSR1VueVVmcS9TaTMrdmpSalVYZFBwdGZOWGEvTXZtcU1laUdLVENWVno5TmV2bXR5dkhEQytiZU5UNkFxUXRscWptb0UwVXdpNGRSNC9DdXR3c3hIQVdBV3hiL21Lc2ZFc1Bla3AwRGdDYUg4SWdtRGdDZUVaV3RqZHpUWUJkOTM5eWJsUGxmVWZjWVRnc0E3R3hKUytiV3UzQnFqaUZrVVZCbW04djRSZjFnQ3VDVk51K2RMV25maE8rTDVTaElkWDhRUzZwSGprblAzUmU3K1ErL3VHa2xrOSt1SExjeGN0Y2VaYXJGUTI5N1J4b3J5UjB0eWU4cnFCVFRMSGQ5M2VSaFhqQ0VIVkhGNzFHbDZsenN0blBPazUvL1Y4MElCdUwrSVhybkZMOHJMb3d5OXRaTVV0cVA0RjdlcnhYWlhGbld1c2c5TVZjLzFMdFlNWnlXSzhaZ1E1OEZBSUFnT0k0ai9BdXJlL0NyaXl6K1lwcjFWcmZQNXBhL3RLR3BEeW5LL3ppSUNFYVlaSUkzNVdlL2pkZ1BBQVZtV2VLMUpXMzdoVlRiZ29CVGI4alBFVTc1dzdGaTlNM052WmJYRFc2NXMzSVNBUDVJWEQ5Y1hBUUFLK3NIdlYvMS9JTitBTW1mK082bmRWMmNHSFZIekkvUm5GYU5pNzA5ZWp1S1lMdVZLWHVVS1NpQ2JZL2Vwblp4b2ptdHY4UnNjMkpVTWpod0Y3MzUxVHRqZnh6dmM1T29rYisyS2VPc1BwSjRsV3diTTk3blptbjZ4eDhFSDM4VVhRY0FOdXA4VTM2Mk5QM2pPZElMLzdGVk9BQkFrY1YvV2MyenhJdnZzMTYzZm9yZS9ueTdsQVNTUDdmdUFEREY3OHAzRVh1Sm0rSEcwYzJLWHZNcnhpS0FmeFZ4WUxyL0pTcUNBWURCelp4WDhVTGJDeE5KKzdqV3BpNjdERzdtWGxYcU53MzlHeDNDc1pLOFk1cllGaWVmaW1EZlJ1eWJLL3ZyL1QzM0tWTmVLWmxpdzJoOHFtMk1KUCtZSm9hSnV0NlNuNXZzZDFWQ00zOVdPL1REbXVmSVczRC9HTXlENnN3VVdxUTZOeGR3YUhYeWQ3UjIrN2gybU1YRGNPR1VMRU00anFNSVFLRlp1cjRwNDZlVzdtVHc2MTV1bUFJUlFJWjRsYVR5R21aTHMwOW9ZbjlUSjVnOURCcnEyUmUzNVdXL3EzL241TEVjUllhd1lyOHEyZVJoNVpubEFReDlRYmZQK3dvck9SVG5sdWFlOHl2SEFubEhIa3ZkRWNDUEpHeDZKK0FNRTNVVFQ5N3Awc3RuZFpGeWhqNG43Y3RoWGtWNk56dVlxWjNrZHkyVjE3aTdOWldVNzcyYzAwZndLWTRlZ2hvVXdRK3BFOHVzdmdqZ1A4ZHNHeS9KL2ZzbkQyVHF1dkhyZGl0VFBUZ2F4TlRPbFYxQUFIWXAwNmFWdm95UjkrSnhuWmxoWGtWSEU5Wi9VVDk0U2ZWelZBUWJKOG5iRWZOanVWV0NJaERPVWswc21ucEFuZVRHMGVXaGh4Y0duaHlhL3dZUkorN3NsZ1BCSi9wZWRlTFVhcXQzbWMzSDZHWUJ3SXUrTi9pby9RZEZMd0JZRUhCcVZmaXYvK0FWdjI0WU1MOXlMR0dQaEJUYmxwWWVHSTV5S001SWxqS1VwUmJTckR0YnV0b3dHbmxyMnJoL0lES09vd0NBbGZVRCt3aXE0cm5OUHltNll6Z2F5VllCQUlhamh6VUpzNlhaQldiWnl2cEJDd05QSm5DYlNIVUhBQStPbk5SRzc0bmIwbGRRQ1FEMWR2RlpmY1Q3VmMrM092a0FFTU5SL0R2MHlEOTd4YmNEemg1V3g1L1RSKzVUcG5BcGpyVVJld2VLUzhOWmFnVHdRck4wN0sxWnBLNC9VbVRHNEdZQ1FCcXZmbE9YWGN0RGY4dnJ1aHdEd0hBRXd4RU1JTC9yNTUrSEh0N1VaVmNxcng0QTlDNFdLVWVDRmlmL21keTNsdGNOd1hBMGtLbDl4ZS9LZFAvTHhLSHZJdllScVdELzZLTVpYeHU1bDBqQ0dTdkplMDEySVlLbFFnRC9RZEdyKzQzM0tzamM3RWRVOS9QNkNCeVFXSTdpbEs1TG5rbStvbjV3eXZYRlJnL1Q2R0dtWEYrOG9uNXd2bGwrVWhzVnkxSGdnSnczUkpCeWJNT05vMHVxUnc3SWU3UFk0bS94MElublhrOUI5VE9pc2lkeHVWaU9ZcHdrRHdETzZpUFVUazY5WFR5NmNOYXMwb2xrVHZ4ak9ETmxWdCt6dW9nMzVPY0g1YzRMWm1uUDZDSUJ3SWxSQWFEUUxDMDBTMnRzWHRWMjcxTkozNTNWUlpSYnllNGQ5N0VYc1ZmL1JVZmRoTkQrVHRqeFQ1a3J5OXFyVEttM2kvMHZyZkRnQ0Jrb2UyeDFCNERsZFVOT0pxM3BMcWpkMlpwRzdISGhsRFpSbnRaMW1lUjdMWlNwbmxVNmtSUWlBRVN3VkI4R0g0dGt0d3FvTmlLUnJzcnEvVkx4TkMxR1phR3UwWkludU1TeHI3QXlnS2xyc0lzb2dPMkorekdKMXdnQWJndzFlRmgxTnZIbmRVTnp6WEx5QmozTW1RR0FVN3FvSzhiZ1JZRW5LQWpPcDlvQ21Eb2gxU2FpV3VVTVBaOXFveUQ0KzRHWlY0ekJwM1ZkU0NFQ1FJVk44bnI1QzRmVWlTS3FOWlNwRG1XcUI0bExpVTQrdlFSVlQzUjFLUUk0NFNuRmNGckdTUEtJcS92U2phZTBVYTlWVENCMS9aR3NPd0Q4dTNibzRZU053OFMzM2c4OFNiUnFBb0NHbmg5Y01JU3RyQnNVejIwZVdUQ0hsR0FiSmc5elJkM2dieHY2VC9hOU9zWHZpZ2ZRTEVNRUFQd1A4bkxUK2JVL0tib1hXcVNIMWZGU2huRkhhOWV0aXU1R054bEN1TmMwN010NmlObkk3YnJDN0dFTUwzaHRrdS8xcGNGSEFXQlp6ZkNkeXJTakNSdTRGRWZ5dFVXa3AvaW5iSXZlUHNYdnloTzl4Rmw5NUlEY3QwaFIvM1hyUHNYdnlrMVQ0UEw2d2J0anRpWnhtdkxOTWwrNkVRRHlMZklrVGxNdlFkVkx4ZFBpdUlwa2JzTjJNbWNHQUFCb3FDZWRYNXNock9qT3J3MWxxbjlwN2JxOGJnZ0FlTlBOVC9yU0VwcUorREJkZW1tKy9FeURRM2pGRUpKbENMOWtDQ1ZENzQrazdwY05vWmRUVnlWZVcxSm05VjBVbERtOWRKSUxvd0JBamMxcmE5UXZaVmJmaS9xd3ZLNmZkNy94SGlsRUNvSy80bmY1MDVEZjIycHBBTUFic3ZPRXVoTjVrVThVTnVYMkpXYjZYNHpoS0dJNGlpSGlFZ0RRdWppZjF3MVoxOVRYVGlyOXc5Vzl3aVp4NHRRK2dxb1Y5WU8zUnYzaVN6ZCtVRE1LQi9Dakc0WjZGVThyblp3aHJIRGkxRXB5TGdQQWd5TmJGVDEvYmsxdmI5MTN0SFlsanY0UDdLdkZmVHZLL29PaUY0L2lJSzM3WDNsVmRXR1VvVjVGSDFTUHJMT0ozZzg2T2FGb0dnRHNpdDFhWnhPZDBrWjlGbnFZQ0NxVHRJa3JXeCtXclErN2E3L0t5WDNTbDFhNWJsK0NLRnRMM29zSGdUN2tQZFdiYmg0anllZFNIQ3NiQm8rWDNBeG5xY0pacXZHU215c2JCbk1wampHU2ZDK2F1ZjJTaGFlZU5SRjd0MFZ2Zi9nWUZ1cWFMYzNPVHZucVhQSTN4R3FCY3F2dmsvNWg1VFpmQUtBaTJKR0VqZGZTVnM0UFBQMm5xMGEyUnYzeXAzOUxKN0x1UkMxQ0IwNTl5ZmY2UVZXeTBzVi9ML0FVQUNoZC9JdUcwQmQ5cjlOUk53TnhSN0JWbldkV2RaQzRWTTdRelN5YmVOL0hHbzlpZjBOKy91MkFzejUzWGh3emhCV0gxZkZYbm56SGh4eERDQURFY1pwR2VCVUNRQnF2Ym1uUXNmVk5mVlkzRGxRN09mZDkyUmdqeWUyRWtjb0hXbmNpcmEvQUxHT2g3b054MzI5VHBML2luL09LZjg3Mmx2UURjVCt3VUhlaFdRWUFmWVNWblVkWWVqZUxRM0YyNTlVQ3dOc0JaNGxRRlVFRVM3VTJjdTl6WG9VcUo3ZmE3bDF0OTg3VVJtY2JRZ0hna2lHMGJTSDJrd0REVVdLeXI4VGl2MStaVEZ5OTBTSHNMeXJmRUxFcm1kdllOdEtYYm53MzREUUNlQnF2VGtDMWE5MmRyamIvQTYxN1BMY1pCMlJDMGRSaFhzVUZabG10M1l1QnVBR2cydWFWYjVZMU8vampiazJ2N2ZGUlBMdXA4d2lyM2k1TzU5Y09FSlhuVytSZmgrOTNZTlMyTmVrVk5za3JKVlB1R2s5SXpJYlJEcWtUSi9sZWUwSy82b0lock5FaEJBQU1RVjRzbnZhUVJkbmpKSGxmaGgvYzNwSk96TUxXTzBTa2RiOE5oK0owWVpSa1h1T2FpTDFkZVhXWGpTSEUvaXVHNEc2OHVtOGo5bmZsMXpzeEtyY1RGTTFMNURRS3FUWUFJQ2JrbnhHVkNxaFdBQmdvS24zUVYvb0p5NHU3ZmFycDh4NlJJNzJ1S2VQSi9ieDFUWDBCSUlpcFVmUmNYTnY5bytjZlhJSjhnS2dNQU1RMHkwQnhLUURjTUFVQWdKQnE2OGF2NnlUdllBOVU5K1BhYURycWp1RW8rdWUrRlpHenJHMEIvRXpaeFlpY1pmMXozNHJsTk5OUjkzRmR6Tk10SURsRG45ZHQrYzIwNVdLYTViQTZBUURTK2JWRTRiUU1ZY1c5RmRTb0NMWTg5TGZUU1d1aU9TMGNpcE1vV1hyWkVKTDVaRmJBRkpxbEIxUkpBSkFoclBTaVdRS1l1bC9qdi8raHk0NTdzM1FvQ041ZldFNDRQejBGMVFCd1dKVW9vbGx2cGkyL2tyb3loS25wMU03TVBtVktwditsajRQL3FQYnpacUV1ZjdyaDA5cGhBUEJoOExIUjN2bDJuQmJLVkovUVJ1OVhKai9kQW1wMENLK1pncnJ5NmpaRzduNmhhSHFwMVRlSzNUcFFXS3B5Y1NVMGMzOWgyU25kZitxTytOTU5lK0syOUJGVUFVQ3RUWHhPSC9sRFV5L2kwTnVWNC9MU2x2K3pLenh3UU40b2Y1SHdYZzZva3RQNXRRTkZwZUVzOVF6cHBYUis3YmlpbWUyakNEMEUxU0thMWVobTlSWldNaEIzdGQwN3p5emJHZnRqQ0V0VFp2V3RjM2gxQm5WL1lDV0M1N3dMcHZsZjlnQktSYkFxbStUVHVxR3JHd2FlMVVjMk93WEJUSzAvdytEQ0tXS3F0Y0ltK1I4RTJ2Ny9VbTcxZWRVL0o1YWpxTFY3NTVrRGhuc1ZoYkhVZFhhdllLYldpVkdQYUJMYXpPZEk3NEpMeHRBdjZnY3ZxQnl6c21Id2IrckVVWkxDN3Z5YW0rWkF0WXRyeGVsRDJyWGwrUHVzYmhpNFdkRUxBRjd5dWRHTlgvZFozZEExamYxWDFRL2FwMHpPdDhpak9LMmxGajgzVGlFR0x3MCtsc3hyeURVSDlCUlUrOU9ObjlVTkRXRnFpVHlvcVNVdmx6M3RONUhnWVNsaUp4TFhEaGFYVk5ra1ROUWxZK2cvcXgyS0FId1FmTHpKSWJSanREQ1c2b1EyZW1qK0c1MUJUTHRpdDc3a2M4UG9abVhrdm5VMitWc2gxYVp4Y2J4b0ZxT2JGWGo1TThPZGl0VjNxMlBZd2ZtQnB3RmdkT0dzUStwRUJQRHRNZHNuKzE3OVIzN1NTVzNVczRWelhSZ2xsVmQvUGUwTEFOaXRUSjFjUE5XRDN5ZHBqMHR4S0hvdDVsSWNXaGRIVExPWVBNdytOOTQ1bC9LTmtHcmIzcEorNzB0MnA3UHVML2pjWEJTVStWSE5pSFdOR2U5VmpoRlNiUXNDVC9jVlZxNXA3RGVpNExVOHM3emE0VDNELzFLeDFiL1k0djhVQytqOXdFd0c2dm1wcGNjcmZqbGVORXU2b0hhZk1yV1hvSnBJVTJHZ2JyV0xlL2wreldVL0R2NWpVWEFtQUxoeGRHTlQzM3FIR0FENVhSTWZ4MUZFYzFyK2ZqUm1WT0VjRzBZSEFCN1ZNVjE2bVlaNDRqZ0tPVU4vUkIxL2J4MlUyYkpzb3RzWmkrSUNnSFdOR2ZNQ3pvZXkxSTBPNGNqQzEvb0lxMTcydTNKZUg5bDVYMVdIaUV1Y0dMWEU2bmNtK2R2S0hrczMzNW1hM3F6b1dkVmo2Wm5rYjRzdC9rNk1Pa1JVOG5RTHFDdS83bWppdW5SZXphdWxVekFjVGVZMjloT1d0OCs0ZWp2Z3pMMUpZTE9sMlIrRkhOVzdXWnVhZXlkYyt5RGZJcDB1dmVSSE43b3d5dmlpR1dzYSsvMmRuN1JibVRva2I1N0p3eFJRN1RPa2w0eHVac3lWZjMxVi80elN4WnZtZituVGtOL3ZEYkl0Q1RyUnR1bkVxSDFFbFdtOE9oeVFHYVdUZXdzcWp5UnNTT1EwZCtySWpNVkRwNkdlWEpOOFhzVUxWNDNCNllKYVluOTNmazJPTWZqTml2SFhqSUYwMUczMlBPVkxnR2VYVGRRNE9RZmlmNkFBOW1ITkNBRG94cTlqdHROdk9VUC9kc0NaOWwvcEs2anNLNndZWHpURC8rTHlPV1VUeXEyK3Y4Vi92N25ManBOSjN3R0FCMGZlckJnLzl0Wk1oVlB3dUQ5RzUyTFBLcDA0b1dnYWtmaTFNM2JyRDExMm5FNzZUdW5rdjFzMVJuYng4MmZ6NThvWStqR1N2UGJmbWljLzU5ZHVSb3lPdXJ2eTZnRGdxNFlCTk1TOVAzNnowc0diVVRheFU2dDdnVVdHQUw0NzlzY0FoaTZCMnhUQzFEaHdxZ09uaHJJMFNkd21PVU4vSUc0ekFCUmFuL0pXWkJvWFoxVGhiRGVHSG9qL29kSW1PYWhLQW9DcnhxQkxodEJYUzZZUWpRY1hCWjZVTWZSdFg4azJoazRxbnJwZm1VdzhCTjZRbis5M0p3TFlOdWFnS2lucXlvZWYxZzdUUDlwTXZoV2pmOTB3SU9yS1IwU0ZwdHVSR1J3QmdCaU80cFBRM3dtdjZhZzJkbXJweTRmVUNXMWpBcG5heFlHWjk1N3d1Q2JtdWpGb2YveG1vbGgySitsKy9rRGYzZUtodnlFL0w2Wlp6K29qbHRZOHR6cmk0RjVsYXI1Wi9vTFB6UkdGcjRXemxXTWsrVlFFZTY5cWpPWnBsMVN6VTVodmxyL29lL01GU2U0eGJZeUlhck5pakQ2NTcrU1pBN2EzcFBjV1ZFV3dsVkdjMXAxM01uN2JyL0R5cHhzT3hHMW1vTzdENnZqeHQyYWs4QnFQSnE2WDBFM245WkVPakhaV0g3bTJxVitKeFE4SHhKZHVha3RiYjhQb1pwM1VSWDlaUDNCNjZlVGYxQWtXakFFQWM2UVh0a2R2VnpnRksrc0grZEZOeWJ6R3JyeTZnK29rbFl0MzF3OUFBTjhUdXpXV283anJ0TGxtK1ExVDRLcndRemlPakNtYWxhWHZMS1ZUSGhpWlFRQTNaOHozNEdpMzZ3djdpOHJYUk95SnVySVVBRXJUUDU1WDhlSlpYZVRWdEpVSTRQeXMxWjFrL2Q0Z2NlbXZjWnM0RkdlVFF5aGxHRjRyZTJsVGMyOEE0Rk50bVlscjAvbTFzMG9udGplOUJEOUcvVHhBVlA1MjVkaGZWVWtBY0tQcmloUnVBdzRJTCt1cmV4TnBwQXhER0ZQTm85aFJCRE41bUxWMmNiMWRmSzk0dGIzZkU5R3NUUTVoYU03SFRvemFYMWkrTm5KdnMxTXdLRy9lWFNPSlFzUnVITjJtNkw2dHBYdVIxVzkzek5hQjRqS2xrK3RMTjlreDJvU2lxWWZVaWRCcGVLQXpnd09pZG5JUEtKTk1Ic2JDZ014OXFwUkttNlRTSnRtblNsa1lrR24yTUE2cUVqVXVidWRacTNwU0d6VW8vMDJkaXkxajZCSEFaMG92dGhuZzRRVnpxKzNlMzBYdXUyc1ZkaGQycThJcGlMMzZMMExYMC9tMUtkd0dBTmphM01PR1VZOGxyS3ZyOFdHR3NPSS9qeEdINElJaDdLZzI5bmROL0hsOVJKM2RxMDI4Y1J4RmFmb24xOUpXY2lqT2I1cjZBNENNb1IvcFhRZ0FaL1dSaWRlVzdGTW1kK2ZYdEw5NlQwSDFkNUg3S20yU1hqY1h6Q2liZE1FUTVzQm9hYng2QkhCZnVzbmtZVDViTUxkVDZUbzh2SzhxRGZXYzBNWU1FcGNHc1hSZjFBMWFHSGpxdllCVFg5UU5DbUxwQm9wTFQycWovL0VxY1A5bm9TTFlzWVIxL25SRHY3eTM2KzNpL2Nya0JaV2ovMk51WFp3eEJUTXhRQTdFZlM5djU4U1hXMzJXVkk4MGV4akVKaEZ4MzlIYWRVNzVoRVJPODFDdjRrQ21kb3drbjRXNmRzVDh1RHRtSzVGaTJWZFFPY3lyaU9nZXZEWHFsOS9pTjNyVExVUEZSVjNZcldtOHVvR2kwazlxaHErcUh3Z0FML3ZlWHZIdHh0SHZtM3UzenpRT1pHb1B4bjJmWjVMM3VQbmVWV01Rc2ZQTDhJTWltaFVBcXUzZVBXOHM4S0daY2xKWGRhcE9jZzlVOTBpMmtnYnVMRVA0b3NETTQ1b1lwWXYvNzlEZi9oMTZ1TlhKUDY2SldSU1llVjRmUVVmY0VTeFZaeENURzBmM3FaTDN4bTVlSDdublYxWENTTy9DdXg1citSYjV6TkpKY29iK1ZOSjNiZm51N2NkUUVIeTh6ODF2Ry9wTktabml4dEZ1L0ZvQWNHR1VINXA3OVJWV1R2UzkvcUx2amRIZStXbTh1dk1wWHg5TldEOWFrcDhocUpqcWYzbWtkK0h6M3ZrN1dyc1NrMWxFVUdWaDFlajNxNTRmTEM0bGN0ZnV1cHlVWWNoTVhLdDA4b2JrejJ2TGQrZFRiZnVWeVM4VlQ4Tnc5SVFtZWt2VXo3dGl0MTR6QnQxM1dxclRxWHM2djZaZjNqdDloSlZkMkswcjZnWUhNelZVQktPaG5pQ21ka1hkNEM3czFsN0Nxb3pjZDdvTHFqdUpwTFlxZW80cW5OT0YxZkpXd0RrNjZqNmF1SDdVZi9lRTJkbWF0cnJobVM3czFsTkozN1ZmbzAzUVIxQ3hzYW52MjVYamlmaE1GTHNGQUQ2cEczN0w0cys3cy9JbzJ4RE9wTngrWURKUjkxVnpNTEdPaEV0eEtKeUN0eXBlQUlDb08xTlVLK3NIdlZ6eXlxQjdzaEprRFAzWnBHOGtOUE96aFhQYlQvY2EzYXhzZmRoc2FUYUtZSy9KTG5UajErMVRwcnhUT1k1MFpnQUFmbTVKTDdiNExRN012R2dJeTdmSUU3bE5MUTUraTVPWHpHdk10OGd2R3NJV0IyWVdXL3c2VmFlYVB6UnhVVmVYYm1ydTdjU29XYnJ3Yy9kTVF5NnNlbjVMYzg5NGJ2UEY1QytqMkszdEQxMDNCUzJySGQ2MkdjRlduZEZGZmw0M0dPNFUzN3hnQ0x0bDhiOWxsaEwvRHdWbW1kckoyYTlLQWdBSFJnV0FiUzNwdjdSMmEvODQzYTlNUHFhSmJYK1ZPSTRpSytYclNMYnk5ZklYRyt5aXUveXhQWEZiaUtSSUswWi9xMkxjaTBYVDNKMnNZOW5EL3RvUlhyY1N1WTByNmdiOWtiQitmZVJ1UDRiUmoyNWFIN243OS9qMUsrb0dKWEliUjNqZGdrNkd4c1daVXpZaE5PZmpRb3YwU01MNjRlSWlvazBWQVlhanM4b25mTmZZUDVpbHpVbGQyWDY2cDgyREoyQ2h6c25GcnhLYVRSeGFXVGNJQVBSdVZxRkZxblZ4aXEyK3hFNGNrTFlZenF6U2lRYlBmK1hudEQvdE9KL2N5Nm1yUXBucUM0YXdQY3FVZS8yeGxmV0RUQjdtS1YxVXd0VWwzelgyNzRRbHNSNFlkd2VBN1RIYmRTNzJncXF4ZTVVcDY1c3laa3N2dW5CcWFNNG5XeFU5U3F6UzBkNTVQUVExbSs4SnZUMzF2QzdMZXNYdmlndW4yakhhaXJERDNuVHpVVTFjZXdmNnVEWW14eGdhdzJsNU4vQ01oRzdLTm9RNTdxbCtVV0NXVmRwdVorY0txYlowUWQyQ3lqRkVya3NYZHF2T3pkNmpUQU9BVmhjL2hWZC95UkJHTEw1MjQ1U0xoakNiaCthNmsrZEl3S1BZdjRvNHNETHNVSk5UdUtCeTlMdFZZejMvYmJZRlZQdmFpRDFySXZiUHJ4eTdySGE0d2lIb25QMkZIcWp1QTBXbGk0TXk1MWVPS3pETG5EalY2R0hPbFdYWk1Qckh0Y09kT0JVSHhPaGh2U2svbDIwSXI3RjdkeXFSNVZua2RNUVR6V21KNXJSNDA4MUNxajNmTEd0d2lOdVBxYkpKdGlwNmJtdnRIc3JTYklyY3BYZXpDOHl5OWhyVzBpNkRnSUc2eXF5K3BWYS9PN2NFVjd1NE4weUJ4R2FaMWM4RmxJWTdDKzAwTHM1ZHVqN01xK2lQaEkyaExNMkNxdEV6U3lmZE1BWGV0WDVQenREbnBLMTZSbFNHSVBpelhyY0dpVXVQYXVNNlp3WEpCeTd2V0J4MG90cnVmY1VZTkVCVVR0UjNweUdldHFQUGlNb3VHMEtxN2Q1TGdvNTN0aUxBTG95eVM1bDJRaGVkeW12b0k2aGNHSFRTOHdBUHVOWW0vcXgyNksrcXhEOFNOc3lXWHZoWHpjaXp1b2g3WFlnbWg2amUvcC8vbG5QNmlQWjE5bkxOY2hycXVlLzUrd29xbDRYK0VjclVMSzE1ZGtkcjEvczY0bDQweTNUcFJXK3FwZFRxZTF3VGMwaWRtS1VQNzdTVlBlOXYzYnV3Vzc4TS8vV3oybUhQZWhWTjhMMkJJcmdIUTZaTEwxRVE3TGdtNWpuSnJma0JaMEpZbWhQYW1ObXlpN3VWcVJvWHQ3TUpUczR3UEMvSlQrUFZNeEQzT0VtdW5HazRyZXR5WHpWU3VYajdWTWt6cEpjV0JKNGE3NU9MQUpSYWZaMzRmd3dOQmtoN3crL0NLWWIvTnIxM1dXc3V4VEhaNytxNnlEMUxnbzhmVWlXTkw1cHh6UlQwb0laNzE5Sld2dUNUVzJHVC9LNkpiM1NLOXFtU2NlaThEYlh2YjkwemhCVUk0TGNzMHRuU2JDbkRzQ2d3TTRpcFFRRUhnT3RkdjZpemUvblNqV0thNVRkMUlnSjRockNpazZ5RmFVK0ZUZkpCOWNpUjNvVXpwQmVIaTI4MU9rUVBLUUhRNUJCbTVMNXpOR0ZkTjM3ZDJzZzluNGNlUHFHTlBxbU5PcW1QcnJXSkgvR0tVb1pocUxob3FMaGtxRmN4ajJKWHViaDljK2RmTW9RK2FMd1h6VEpIZGlHTXBXNXlDRXN0ZmcwTzBUNWxjaWR2SG45L2RTZHFVTjB3QmN3dW14REhVV3hyU1RmMFdZQVMwMjg0a25odHlUVC9TL2ttZVpIVkh3RDRGSHVuRmQ5bFEwZ0lTK1BFS0hPa1diMzRWWm02NkVQcXhQdFdNdEs0T00va3ZmVjErUDVwL2psOHFtMjh6ODN4UGplSmY1dDhrN3pHN2xWajk2NnhlN1U2K05WMmI0T2JLYUpaa3ppTllXeDFFRU9Ud0cxSzVqWUdNSFZ0WjlPN1dmMXkzMzc0d3BwbHdYKzhJVC9mN0JBY1VpZGs2OE4zSzFPaDAzTi9kUyswU0FGZ1VXRG1vdXBSbDQwaEwwaHVvZ2hXWnZWQkVUeUNwUnJsWGJDcHViY2JSMWVHSFFLQUFvdXMwNHBQNWVKKzI5QXYzeVQ5SlBUMzU3d0xNM1hSR2lmN1FZUE5Ic2JNc2ttZjFnMGJMaTZLNXJUNjBveGltb1ZKY2FYd0cwWjVGeEFPT2c1STByWEZmS3I5U1B5RzlqT21BR0R4MEt0dDNpVld2MnZHb0dQYTJJZm91aC9kdURyOGdDL2R0S0J5ekMyTHROcm1YV1gzSW5VZEhwUVJpUUIrT0dIVENLL0NCcnRJNzJiRmM1dGJuYnpoK2E4akNQNUh3bnBmdXFuQUxCUFRMSEtHL3JBNi92bkMyV1JUZzc2Q3lqbnlDNEVNM2FlMXd6SzFVWThyRUM3Rk1VaGNzalQ0V0xuVloyTnpueU1KRzlpb3M5amlmOUVZbW1NSUxyZjVWbG9sTFU3K0k1N05sMjVzNmJVNHl4QytwckhmVTE4cTRoOVFkd0JBRVd5bS82VVIzcmY0cVAyOElYeFYvVUNUaHdrQVBJcDlZZURKdm9JcUk4WThvbzdmck9qUnlkM0I5dmpRVE5Pa2wzdndxNDlwWXZlb1VuVXU5dU05YWhHc3Q2RHF0L2hORnd4aDcxYU8rV3R2UlAyRjVWdWlmZ2xoYVZxZHZFWFZ6LytrNkU3ZWx6OVg5eWwrVjlaRTdPTlRiUURnd1pFdGlsN3ZWSXdGZ0c4aTkwL3p1MFNrMFJuY3pEY3JYaUM3ZDl4cktRYUt5a1o1RjFBUjdMZzIrcWc2em9FL1VtWHdaRzdqOGFTMVc1cDdmbEQ5M0Y5NFlFYXlsUjhGSDUzb2UxM3JZbi9aTUhCdFk4WmRVN2trOTFmM0tIWnJmdGZQYjFuOTM2MFlvM094UHdvNU5rYVN0MXVaaWdMK2dzL05BNnFrVDJxSGUxRXRxeU1PeExKYjRxOTlRTFpXdlM4VUJJOWpOeVh5bXRST2Jvbk5yOTR1ZmtqNjRXQnh5ZVl1T3o2cUhmRlk5aGhGc0hDV09vMVhQMFJjTEdmb2lpMytSelR4NTNVUmovZ1BScW83QU1CY1dkYTZ5RDB4Vno4MHVGblI3SllyeG1CRG53VUlnZ01BamlQOEM2dDc4S3VMTFA0aW1yV28yMmR6eTE5cXF3eEs4dmczQU04UVZyd2hQODlCbmJQTEo3U2ZieUw1SDBWbWlFYTRHaWRuVmZpdjRTelZSVU1vZWljUkNrSHdqNEtQOWhaVVZkZ2tDeXRIQXdDajB5enkrR2Z4b2xubXlyS20rbDJtSVBpL2FrYnNiRTN6L0hkMkFNbi9TTjJMTFg0QThKTHY5U2gyU3d5bnhZVlRsdGNObVNjL0J3QnJHdnYxRkZRbmNoc3BDRGJCN3dZQUZEM1ZaWldlRU9FczFmbmtyN1Z1emo1Vk1oZDF6cFJldEhvWVJISFRQMFZDTXg5TFhFZXNTM0poRkxXTHEzSnhXNXg4cFlPbmRQRmFuUHpUdWk1NnNxbnFvNnY3YVYxVWcxMDB4S3ZrbzVybkl0akt0WTBaQUVDc3pseFNQUklBNXNuUGxWbDkzd280MjJBWG5TRWJaejhtYk5RNVYzNytOMDFDZ1VrNlUzWXBoZHRneGVnVmo5YlVMWVNsMlJPN2hhaWpUZEFGL2l1eDNvTWpVVmVXa3VyK0dPcnV3Wkd2R3dlc0RqKzRwSEprV3dhWUU2Y0NmbnRkNDRhbXZySHM1bUhpNG5jcngzU3ExVi8vQ0tzakRyWVZFQ2VvdG5tTjlDNTh4ZmRLamNPcjNpNjJlbWhzaXN1Tm9TZjFVVVIvenpiR1NYS0o5WHQzTWJYMDVlbCtsd1JVMjZxR2dXUTd4TWRUZHdENHZybjM0cUFUaTRJemlZWjdBRUFGVDF0d3pJMmppNEl6MVM3Tzk4MjlTU0UrTGxtNjhHT2FXQXJpeVRmSlc1eDhLM1ozQlE0YTZ1RlNIQURBcFRqWU5LZUFhdk9uRzFONTlXTWtlZW44MnJaaFZveCt3eFRRUjFDbGRuSzJLZExKRVB0ZlYzZUxoLzVOdzRCUFFvNHNaWTlZRW5ROGhLWHhvWnNBNEZ6eU43VjI4ZWQxUThkTGJuNVU4NXpsYVMrYTl5VFlwVXk3ZCtjZ2NlbXJmcGU3OHVzQ0dIcm1uM1VlTHJMNHgzSVVheHI3TGFvYU5WQlVxblp4eUludFIrRmhFNkxybWpKTUh1YjhnTlBiVzdwak9LcDJjUWl4Ym0vcFBqL2d0TW5EZktJOVdEb1BDT0RySXZka0pxNko1YlQ0MEV4TTFQV2JPb0d3T01jMU1RQ1FhNVlUcGRwK1ZQUXdleGlGWm1udm0rL09McHZ3NzlvaEFIQktGNVZuRGlERitMZlVQWkhUYVBMUTF6Vm12T3FmVTJMeG5WazZrVWQxOEtqT0dhVVRTeXkrci9ybnJHdk1NSG5vaVp4R1VvaC9rMzdDaW1IaW9rVlZvN3JlV0toeGM5YzE5VjNUMk0rSzBjY1Z6YnhzQ3RHN1dUTkxKeTJzZW41UjFhaHBwWk9qcm56VS9jWjdlamZyKytiZUpnK1RsTjVqV3BZSEpCR01sdVROa1dhL1d2SnlSZmRsNjV2NjdtcnRlclByY2dCSXVycDRrdCsxdWJLc3lDdkxmb3JhdnFHNXo2K1BGajRqZVJRa05MUEt4V1dqVGhiRnBYRnhVQVNqSWhqWm5meUpXL2ZENnNSZWdxb1VYc09tcGo1elpObTFEdkZaZmVRWlhaZDZwM2lPTEh0VFU1OVVibjFQUWZYaFRsWjE3VWxEdEh1M1luVENlOEZ3bE5UMS80VzZlM0JFNFJUSUdmcE5pdDQweFBPNkxHdDA0ZXd4dDJhOUxzdWlJWjd2RmIxa0RMM0NLU0Nqa0NSUHlhdXFtR3BkRmY2cjNzWDZVZEg5VGZsWkY0YTZNUFJOK2RrZkZkMzFidGFxOEYrRkZDc3BRWktuUWQyOTZSWVJ6VXBEUFBIYzVwVU5nNFVVMjNUcHBlblNTMEtLYldYRDRIaE9NeFhCdk9oV01jMUNDcEdrdzcrcVB1ZFZlRGhob3h0SFc1ejhRck5NN2VJU3BablA2eU1rTkZNY3Q5bVBicVFpMkhNRmMzN1h4Sk55Sk9uWTFyMkhvQVlBUmhUTUhWVXd4NEZUOHl5eVFLWTJrS25OTjh0c0dIMVV3WnhuQythMkRTTWg2ZGpxN2tjM09uQXFsK0xZRjcrNWw2QXExM2g3SXVPbUthQ1hzR3AvM0E5czFPbkVxUDd0ZWx5UmtQd2Y1NEZCcm1xN053TnhxMTJjYzdySTNjcFVJZTMyVzZtQWFwdGMvT3FMa2h0Nk40dU91cXM2V2NVOGtxZlRkeGRTYlRtcHE3eHA1alZOR1R5S1k0NzBRcG5ORHdEdndtcmQwTnpYNG1hOElUK25jbkY3M0hpUHpEVWw2ZkRXUFlyVElxRFl2R2lXWmNGSEZRN0JUeTNkbDlXT0FJQ1BnMytmNUhQTm4yRUFBQ2RHamVLMDVCaENTRG1TZEd6ZnZkVGlsM3NuOGNpZllVam1Ob1l6bGVGTVpUSzN3ZjlPYTRvOHM3elU0a2NLa2FURFcvZEFwcmFmcVB5OFBtS3ZNa1hqNXJ3Zm1Ia3lhUTBDVUdiemVhbDRtaGZWOHFMdmpYNmljamxEVHpvekpCM2V1cy8wditqR0tTdnFCNCtXNU1lem02Y1d2OHlsT0RnVXg5U1NseE01VGFNbCtaL1hEblhqbExaK2l5UWtIZGk2QzJrMnE0ZEdSeng2RjJ1c1Q2N09mYnNnMW1CUnlXaEpYcEhGbjRhNGJSaE5SQ1h6Q0VnNnZuV3Z0NHQ4NmFZVWJzTmVWUW9EY2FmeTY2MGV1aFdqcGZMckdZaDdqeksxSzYvZWgyYXEvKzkrVnlRa0hkSzZaeHZDQU9DOW9KTmxWcDkxVFJselpCZCtiT21PQWo1SVhMcWh1ZS9pb0JOZDJFb0F5RGFHa1VJazZmRFcvYUloRk1OUkduZ1dWSTR0c2ZpRnNkVGZOZmIvdHJGL0dFdGRaUFovcjNJTURUd2VITG1vRHlXRlNOTGgxZDNvWnFsY0hJT2JlY01VT0U5KzdyU3VTN25WcDh6cWUwWVhPVTkrN3JvcHlPQm1xbHc4Y3YwWXlkT2c3Z0RneGlsTGEwZFFFYzhnY2NtdTFsUXFnbEVSYkxjeWJaQzRoSXA0bHRXT2NKT2xya21lRHQ4OWtLbVZNZ3psVnA4QWhwYUM0S01sQlIrRkhBTWNDaTB5Q29MTDZicHltNCtNWVFoa2Fza3FuaVFkaFFmMlZaMHZQM1BCRUw1RjBiUFZ5V2RSWE9uODJvdUdzRHE3Vnh4SHNVWFJjNmV5YTVWTlFrVTh5ZHltZTN1bGs1RDgzK1NCS1dJMDFITlh1YmEvTTR5RTVQKzA3LzZJU2t6cU9zbFQ4cXBLUWtLcU93a0pxZTRrSktTNms1Q1E2azVDOHYrQi93Y1B2YVM3dDRkRmdnQUFBQ1YwUlZoMFpHRjBaVHBqY21WaGRHVUFNakF5TWkweE1TMHpNRlF4TXpvek9Ub3dNQ3N3TURvd01JYmhqNXNBQUFBbGRFVllkR1JoZEdVNmJXOWthV1o1QURJd01qSXRNVEV0TXpCVU1UTTZNems2TURBck1EQTZNREQzdkRjbkFBQUFBRWxGVGtTdVFtQ0MiLz4KPC9kZWZzPgo8L3N2Zz4K";
const langIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjMzMzIgOS45OTk5OUMxOC4zMzMyIDE0LjYwMjQgMTQuNjAyMiAxOC4zMzMzIDkuOTk5ODQgMTguMzMzM00xOC4zMzMyIDkuOTk5OTlDMTguMzMzMiA1LjM5NzYyIDE0LjYwMjIgMS42NjY2NiA5Ljk5OTg0IDEuNjY2NjZNMTguMzMzMiA5Ljk5OTk5QzE4LjMzMzIgOC42MTkyOCAxNC42MDIyIDcuNDk5OTkgOS45OTk4NCA3LjQ5OTk5QzUuMzk3NDYgNy40OTk5OSAxLjY2NjUgOC42MTkyOCAxLjY2NjUgOS45OTk5OU0xOC4zMzMyIDkuOTk5OTlDMTguMzMzMiAxMS4zODA3IDE0LjYwMjIgMTIuNSA5Ljk5OTg0IDEyLjVDNS4zOTc0NiAxMi41IDEuNjY2NSAxMS4zODA3IDEuNjY2NSA5Ljk5OTk5TTkuOTk5ODQgMTguMzMzM0M1LjM5NzQ2IDE4LjMzMzMgMS42NjY1IDE0LjYwMjQgMS42NjY1IDkuOTk5OTlNOS45OTk4NCAxOC4zMzMzQzExLjg0MDggMTguMzMzMyAxMy4zMzMyIDE0LjYwMjQgMTMuMzMzMiA5Ljk5OTk5QzEzLjMzMzIgNS4zOTc2MiAxMS44NDA4IDEuNjY2NjYgOS45OTk4NCAxLjY2NjY2TTkuOTk5ODQgMTguMzMzM0M4LjE1ODg5IDE4LjMzMzMgNi42NjY1IDE0LjYwMjQgNi42NjY1IDkuOTk5OTlDNi42NjY1IDUuMzk3NjIgOC4xNTg4OSAxLjY2NjY2IDkuOTk5ODQgMS42NjY2Nk0xLjY2NjUgOS45OTk5OUMxLjY2NjUgNS4zOTc2MiA1LjM5NzQ2IDEuNjY2NjYgOS45OTk4NCAxLjY2NjY2IiBzdHJva2U9IiMzMTM1NTIiLz4KPC9zdmc+Cg==";
const checkIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNSA4TDYgMTIuNUwxNC41IDQiIHN0cm9rZT0iIzQyQzc5QyIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
const findElements = (object)=>{
    const instance = object;
    const { node , select  } = instance;
    instance.toggle = node.children[0];
    instance.holder = node.children[1];
    instance.isActive = false;
    instance.options = select.options;
    instance.active = select.selectedIndex >= 0 ? select.selectedIndex : 0;
    return instance;
};
const isOption = (target, { className  })=>target.classList.contains(`${className}__option`);
const shouldDropdown = (target, { className  })=>target.classList.contains(`${className}__option`);
const createBaseHTML = (value, className)=>`
	<div class="${className}">
		<button class="${className}__toggle" type="button">
            <img src="${langIcon}" alt="Language">
            ${value}
        </button>
		<div class="${className}__options"></div>
	</div>
`;
const insertBase = (select, className)=>{
    const selectedIndex = select.selectedIndex >= 0 ? select.selectedIndex : 0;
    const value = select.options[selectedIndex].value;
    const html = createBaseHTML(value, className);
    select.insertAdjacentHTML("afterend", html);
};
const renderOption = (html, option, index, active, className)=>{
    const activeClassName = index === active ? `${className}__option--active` : "";
    const val = option.value;
    return `
        ${html}
        <button class="${className}__option ${activeClassName}" type="button" data-value="${val}" data-index="${index}">
            <div class="flex items-center">
                <img src="${val === "Ru" ? ruIcon : val === "En" ? enIcon : kzIcon}" alt="${val}" />
                ${option.textContent}
            </div>
            <img src="${checkIcon}" class="option-check" alt="Selected item" />
        </button>
    `;
};
const renderOptions = (options, active, className)=>{
    return [
        ...options
    ].reduce((acc, option, index)=>renderOption(acc, option, index, active, className), "");
};
const pickOption = (object)=>{
    const instance = object;
    const { select , active , customOptions , className  } = instance;
    select.selectedIndex = active;
    instance.optionActive.classList.remove(`${className}__option--active`);
    instance.optionActive = customOptions[active];
    instance.optionActive.classList.add(`${className}__option--active`);
    instance.toggle.innerHTML = `
        <img src="${langIcon}" alt="Language">
        ${instance.optionActive.getAttribute("data-value")}
    `;
};
const onOptionsClick = (event, object)=>{
    event.preventDefault();
    const instance = object;
    const { select , hideDropdown  } = instance;
    const { target  } = event;
    if (isOption(target, instance)) {
        instance.active = target.dataset.index;
        pickOption(instance);
    }
    if (shouldDropdown(target, instance)) hideDropdown();
};
const initOptionsEvents = (instance)=>{
    instance.holder.addEventListener("click", (event)=>onOptionsClick(event, instance));
};
const render = (object)=>{
    const instance = object;
    const { holder , options , className , active  } = instance;
    const html = renderOptions(options, active, className);
    holder.insertAdjacentHTML("afterbegin", html);
    instance.customOptions = [
        ...holder.children
    ];
    instance.optionActive = instance.customOptions[active];
    initOptionsEvents(instance);
};
const hideSelect = ({ node , select  })=>node.appendChild(select);
const wrapSelect = (object)=>{
    const instance = object;
    const { select , className  } = instance;
    return new Promise((resolve)=>{
        requestIdleCallback(()=>{
            insertBase(select, className);
            instance.node = select.nextElementSibling;
            hideSelect(instance);
            resolve(instance);
        });
    });
};
const unsubscribeDocument = ({ hideDropdown  })=>document.removeEventListener("click", hideDropdown);
const subscribeDocument = ({ hideDropdown  })=>document.addEventListener("click", hideDropdown);
const hideOptions = (object)=>{
    const instance = object;
    const { node , className  } = instance;
    instance.isActive = false;
    node.classList.remove(`${className}--active`);
    unsubscribeDocument(instance);
};
const showOptions = (object)=>{
    const instance = object;
    const { node , className  } = instance;
    instance.isActive = true;
    node.classList.add(`${className}--active`);
    subscribeDocument(instance);
};
const toggleOptions = (instance)=>{
    if (instance.isActive) hideOptions(instance);
    else showOptions(instance);
};
const onNodeClick = (event)=>event.stopPropagation();
const initEvents = (object)=>{
    const instance = object;
    const { node , toggle  } = instance;
    const showDropdown = ()=>{
        showOptions(instance);
    };
    const hideDropdown = ()=>{
        hideOptions(instance);
    };
    const toggleDropdown = ()=>{
        toggleOptions(instance);
    };
    instance.showDropdown = showDropdown;
    instance.hideDropdown = hideDropdown;
    instance.toggleDropdown = toggleDropdown;
    toggle.addEventListener("click", toggleDropdown);
    node.addEventListener("click", onNodeClick);
    return instance;
};
const constructor = (select)=>{
    const instance = {
        select,
        className: select.dataset.customSelectClass
    };
    const init = ()=>{
        wrapSelect(instance).then(findElements).then(initEvents).then(render);
    };
    init();
};
const selects = document.querySelectorAll("[data-custom-select-class]");
selects.forEach(constructor);

},{}]},["7FyJT","hXYZu"], "hXYZu", "parcelRequire51d9")

//# sourceMappingURL=index.5ce2908c.js.map
