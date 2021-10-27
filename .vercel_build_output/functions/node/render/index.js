var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var decode = decodeURIComponent;
    var encode = encodeURIComponent;
    var pairSplitRegExp = /; */;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var pairs = str.split(pairSplitRegExp);
      var dec = opt.decode || decode;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var eq_idx = pair.indexOf("=");
        if (eq_idx < 0) {
          continue;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        if (val[0] == '"') {
          val = val.slice(1, -1);
        }
        if (obj[key] == void 0) {
          obj[key] = tryDecode(val, dec);
        }
      }
      return obj;
    }
    function serialize(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (opt.maxAge != null) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== "function") {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/workbox-window/build/workbox-window.prod.umd.js
var require_workbox_window_prod_umd = __commonJS({
  "node_modules/workbox-window/build/workbox-window.prod.umd.js"(exports, module2) {
    !function(n, t) {
      typeof exports == "object" && typeof module2 != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((n = typeof globalThis != "undefined" ? globalThis : n || self).workbox = {});
    }(exports, function(n) {
      "use strict";
      try {
        self["workbox:window:6.1.5"] && _();
      } catch (n2) {
      }
      function t(n2, t2) {
        return new Promise(function(r2) {
          var e2 = new MessageChannel();
          e2.port1.onmessage = function(n3) {
            r2(n3.data);
          }, n2.postMessage(t2, [e2.port2]);
        });
      }
      function r(n2, t2) {
        for (var r2 = 0; r2 < t2.length; r2++) {
          var e2 = t2[r2];
          e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
        }
      }
      function e(n2, t2) {
        (t2 == null || t2 > n2.length) && (t2 = n2.length);
        for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
          e2[r2] = n2[r2];
        return e2;
      }
      function i(n2, t2) {
        var r2;
        if (typeof Symbol == "undefined" || n2[Symbol.iterator] == null) {
          if (Array.isArray(n2) || (r2 = function(n3, t3) {
            if (n3) {
              if (typeof n3 == "string")
                return e(n3, t3);
              var r3 = Object.prototype.toString.call(n3).slice(8, -1);
              return r3 === "Object" && n3.constructor && (r3 = n3.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(n3) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? e(n3, t3) : void 0;
            }
          }(n2)) || t2 && n2 && typeof n2.length == "number") {
            r2 && (n2 = r2);
            var i2 = 0;
            return function() {
              return i2 >= n2.length ? {done: true} : {done: false, value: n2[i2++]};
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        return (r2 = n2[Symbol.iterator]()).next.bind(r2);
      }
      try {
        self["workbox:core:6.1.5"] && _();
      } catch (n2) {
      }
      var o = function() {
        var n2 = this;
        this.promise = new Promise(function(t2, r2) {
          n2.resolve = t2, n2.reject = r2;
        });
      };
      function u(n2, t2) {
        var r2 = location.href;
        return new URL(n2, r2).href === new URL(t2, r2).href;
      }
      var a = function(n2, t2) {
        this.type = n2, Object.assign(this, t2);
      };
      function c(n2, t2, r2) {
        return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
      }
      function f() {
      }
      var s2 = {type: "SKIP_WAITING"};
      function v(n2, t2) {
        if (!t2)
          return n2 && n2.then ? n2.then(f) : Promise.resolve();
      }
      var h = function(n2) {
        var e2, i2;
        function f2(t2, r2) {
          var e3, i3;
          return r2 === void 0 && (r2 = {}), (e3 = n2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new o(), e3.en = new o(), e3.on = new o(), e3.un = 0, e3.an = new Set(), e3.cn = function() {
            var n3 = e3.fn, t3 = n3.installing;
            e3.tn > 0 || !u(t3.scriptURL, e3.sn) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
          }, e3.ln = function(n3) {
            var t3 = e3.fn, r3 = n3.target, i4 = r3.state, o2 = r3 === e3.vn, u2 = {sw: r3, isExternal: o2, originalEvent: n3};
            !o2 && e3.dn && (u2.isUpdate = true), e3.dispatchEvent(new a(i4, u2)), i4 === "installed" ? e3.mn = self.setTimeout(function() {
              i4 === "installed" && t3.waiting === r3 && e3.dispatchEvent(new a("waiting", u2));
            }, 200) : i4 === "activating" && (clearTimeout(e3.mn), o2 || e3.en.resolve(r3));
          }, e3.wn = function(n3) {
            var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
            e3.dispatchEvent(new a("controlling", {isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.dn})), r3 || e3.on.resolve(t3);
          }, e3.gn = (i3 = function(n3) {
            var t3 = n3.data, r3 = n3.source;
            return c(e3.getSW(), function() {
              e3.an.has(r3) && e3.dispatchEvent(new a("message", {data: t3, sw: r3, originalEvent: n3}));
            });
          }, function() {
            for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
              n3[t3] = arguments[t3];
            try {
              return Promise.resolve(i3.apply(this, n3));
            } catch (n4) {
              return Promise.reject(n4);
            }
          }), e3.sn = t2, e3.nn = r2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
        }
        i2 = n2, (e2 = f2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, e2.__proto__ = i2;
        var h2, l, d, m = f2.prototype;
        return m.register = function(n3) {
          var t2 = (n3 === void 0 ? {} : n3).immediate, r2 = t2 !== void 0 && t2;
          try {
            var e3 = this;
            return function(n4, t3) {
              var r3 = n4();
              if (r3 && r3.then)
                return r3.then(t3);
              return t3(r3);
            }(function() {
              if (!r2 && document.readyState !== "complete")
                return v(new Promise(function(n4) {
                  return window.addEventListener("load", n4);
                }));
            }, function() {
              return e3.dn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), c(e3.bn(), function(n4) {
                e3.fn = n4, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, {once: true}));
                var t3 = e3.fn.waiting;
                return t3 && u(t3.scriptURL, e3.sn) && (e3.hn = t3, Promise.resolve().then(function() {
                  e3.dispatchEvent(new a("waiting", {sw: t3, wasWaitingBeforeRegister: true}));
                }).then(function() {
                })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.wn, {once: true}), e3.fn;
              });
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, m.update = function() {
          try {
            return this.fn ? v(this.fn.update()) : void 0;
          } catch (n3) {
            return Promise.reject(n3);
          }
        }, m.getSW = function() {
          return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise;
        }, m.messageSW = function(n3) {
          try {
            return c(this.getSW(), function(r2) {
              return t(r2, n3);
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, m.messageSkipWaiting = function() {
          this.fn && this.fn.waiting && t(this.fn.waiting, s2);
        }, m.pn = function() {
          var n3 = navigator.serviceWorker.controller;
          return n3 && u(n3.scriptURL, this.sn) ? n3 : void 0;
        }, m.bn = function() {
          try {
            var n3 = this;
            return function(n4, t2) {
              try {
                var r2 = n4();
              } catch (n5) {
                return t2(n5);
              }
              if (r2 && r2.then)
                return r2.then(void 0, t2);
              return r2;
            }(function() {
              return c(navigator.serviceWorker.register(n3.sn, n3.nn), function(t2) {
                return n3.un = performance.now(), t2;
              });
            }, function(n4) {
              throw n4;
            });
          } catch (n4) {
            return Promise.reject(n4);
          }
        }, h2 = f2, (l = [{key: "active", get: function() {
          return this.en.promise;
        }}, {key: "controlling", get: function() {
          return this.on.promise;
        }}]) && r(h2.prototype, l), d && r(h2, d), f2;
      }(function() {
        function n2() {
          this.Pn = new Map();
        }
        var t2 = n2.prototype;
        return t2.addEventListener = function(n3, t3) {
          this.jn(n3).add(t3);
        }, t2.removeEventListener = function(n3, t3) {
          this.jn(n3).delete(t3);
        }, t2.dispatchEvent = function(n3) {
          n3.target = this;
          for (var t3, r2 = i(this.jn(n3.type)); !(t3 = r2()).done; ) {
            (0, t3.value)(n3);
          }
        }, t2.jn = function(n3) {
          return this.Pn.has(n3) || this.Pn.set(n3, new Set()), this.Pn.get(n3);
        }, n2;
      }());
      n.Workbox = h, n.messageSW = t, Object.defineProperty(n, "__esModule", {value: true});
    });
  }
});

// .svelte-kit/vercel/entry.js
__markAsModule(exports);
__export(exports, {
  default: () => entry_default
});

// node_modules/@sveltejs/kit/dist/node.js
function getRawBody(req) {
  return new Promise((fulfil, reject) => {
    const h = req.headers;
    if (!h["content-type"]) {
      fulfil(null);
      return;
    }
    req.on("error", reject);
    const length = Number(h["content-length"]);
    let data2;
    if (!isNaN(length)) {
      data2 = new Uint8Array(length);
      let i = 0;
      req.on("data", (chunk) => {
        data2.set(chunk, i);
        i += chunk.length;
      });
    } else {
      if (h["transfer-encoding"] === void 0) {
        fulfil(null);
        return;
      }
      data2 = new Uint8Array(0);
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data2.length + chunk.length);
        new_data.set(data2);
        new_data.set(chunk, data2.length);
        data2 = new_data;
      });
    }
    req.on("end", () => {
      const [type] = h["content-type"].split(/;\s*/);
      if (type === "application/octet-stream") {
        fulfil(data2);
      }
      const decoder = new TextDecoder(h["content-encoding"] || "utf-8");
      fulfil(decoder.decode(data2));
    });
  });
}

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data2 = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data2, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var {Readable} = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data2 = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data2.set(chunk, offset);
      offset += chunk.length;
    }
    return data2.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const {size} = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], {type: String(type).toLowerCase()});
    Object.assign(wm.get(blob), {size: span, parts: blobParts});
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error3 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error3;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const {buffer, byteOffset, byteLength} = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
async function consumeBody(data2) {
  if (data2[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data2.url}`);
  }
  data2[INTERNALS$2].disturbed = true;
  if (data2[INTERNALS$2].error) {
    throw data2[INTERNALS$2].error;
  }
  let {body} = data2;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data2.size > 0 && accumBytes + chunk.length > data2.size) {
        const err = new FetchError(`content size at ${data2.url} over limit: ${data2.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error3) {
    if (error3 instanceof FetchBaseError) {
      throw error3;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data2.url}: ${error3.message}`, "system", error3);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error3) {
      throw new FetchError(`Could not create Buffer from response body for ${data2.url}: ${error3.message}`, "system", error3);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data2.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let {body} = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({highWaterMark});
    p2 = new import_stream.PassThrough({highWaterMark});
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const {body} = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, {body}) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_HTTP_TOKEN"});
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_CHAR"});
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = {enumerable: true};
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
var getNodeRequestOptions = (request) => {
  const {parsedURL} = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let {agent} = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data2 = src(request.url);
      const response2 = new Response2(data2, {headers: {"Content-Type": data2.typeFull}});
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const {signal} = request;
    let response = null;
    const abort = () => {
      const error3 = new AbortError("The operation was aborted.");
      reject(error3);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error3);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error3);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location2 = headers.get("Location");
        const locationURL = location2 === null ? null : new URL(location2, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error3) {
                reject(error3);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
        reject(error3);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error3) => {
          reject(error3);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error3) => {
              reject(error3);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error3) => {
              reject(error3);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error3) => {
          reject(error3);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error3,
  branch,
  page
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error3) {
    error3.stack = options2.get_stack(error3);
  }
  if (branch) {
    branch.forEach(({node, loaded, fetched, uses_credentials}) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page,
      components: branch.map(({node}) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = {head: "", html: "", css: {code: "", map: null}};
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"></script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error4) => {
      throw new Error(`Failed to serialize session data: ${error4.message}`);
    })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error3)},
					nodes: [
						${branch.map(({node}) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page.path)},
						query: new URLSearchParams(${s$1(page.query.toString())}),
						params: ${s$1(page.params)}
					}
				}` : "null"}
			});
		</script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({url, body: body2, json}) => {
    return body2 ? `<script type="svelte-data" url="${url}" body="${hash(body2)}">${json}</script>` : `<script type="svelte-data" url="${url}">${json}</script>`;
  }).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({head, body})
  };
}
function try_serialize(data2, fail) {
  try {
    return devalue(data2);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error3) {
  if (!error3)
    return null;
  let serialized = try_serialize(error3);
  if (!serialized) {
    const {name, message, stack} = error3;
    serialized = try_serialize({name, message, stack});
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error3 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error3 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error3}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return {status: 500, error: error3};
    }
    return {status, error: error3};
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base, path) {
  const baseparts = path[0] === "/" ? [] : base.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error3
}) {
  const {module: module2} = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = {...opts.headers};
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: {...context}
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error3;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({request, options: options2, state, $session, status, error: error3}) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error3
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error3,
      branch,
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return {
      status: 500,
      headers: {},
      body: error4.stack
    };
  }
}
async function respond$1({request, options: options2, state, $session, route}) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error3;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              };
            }
            if (loaded.loaded.error) {
              ({status, error: error3} = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error3 = e;
          }
          if (error3) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error3
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error3
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error3,
      branch: branch && branch.filter(Boolean),
      page
    });
  } catch (error4) {
    options2.handle_error(error4);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error4
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession(request);
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler({...request, params});
    if (response) {
      if (typeof response !== "object") {
        return error(`Invalid response from route ${request.path}: expected an object, got ${typeof response}`);
      }
      let {status = 200, body, headers = {}} = response;
      headers = lowercase_keys(headers);
      const type = headers["content-type"];
      if (type === "application/octet-stream" && !(body instanceof Uint8Array)) {
        return error(`Invalid response from route ${request.path}: body must be an instance of Uint8Array if content type is application/octet-stream`);
      }
      if (body instanceof Uint8Array && type !== "application/octet-stream") {
        return error(`Invalid response from route ${request.path}: Uint8Array body must be accompanied by content-type: application/octet-stream header`);
      }
      let normalized_body;
      if (typeof body === "object" && (!type || type === "application/json")) {
        headers = {...headers, "content-type": "application/json"};
        normalized_body = JSON.stringify(body);
      } else {
        normalized_body = body;
      }
      return {status, body: normalized_body, headers};
    }
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(req) {
  const raw = req.rawBody;
  if (!raw)
    return raw;
  const [type, ...directives] = req.headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const {data: data2, append} = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data2;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const {data: data2, append} = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data2;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !incoming.path.split("/").pop().includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: encodeURI(path + (q ? `?${q}` : ""))
        }
      };
    }
  }
  try {
    return await options2.hooks.handle({
      request: {
        ...incoming,
        headers: lowercase_keys(incoming.headers),
        body: parse_body(incoming),
        params: null,
        locals: {}
      },
      render: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request),
            page_config: {ssr: false, router: true, hydrate: true},
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
var tasks = new Set();
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({$$});
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {$$slots = {}, context = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      const {on_mount} = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// .svelte-kit/output/server/app.js
var import_cookie = __toModule(require_cookie());

// node_modules/@lukeed/uuid/dist/index.mjs
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--)
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
  var i = 0, num, out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = Array(i = 256);
    while (i--)
      BUFFER[i] = 256 * Math.random() | 0;
    i = IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i == 6)
      out += HEX[num & 15 | 64];
    else if (i == 8)
      out += HEX[num & 63 | 128];
    else
      out += HEX[num];
    if (i & 1 && i > 1 && i < 11)
      out += "-";
  }
  IDX++;
  return out;
}

// .svelte-kit/output/server/app.js
var import_workbox_window = __toModule(require_workbox_window_prod_umd());

// node_modules/svelte/store/index.mjs
var subscriber_queue2 = [];
function writable2(value, start = noop2) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue2.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue2.length; i += 2) {
            subscriber_queue2[i][0](subscriber_queue2[i + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}

// .svelte-kit/output/server/app.js
var css$7 = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$7);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var handle = async ({request, render: render2}) => {
  const cookies = import_cookie.default.parse(request.headers.cookie || "");
  request.locals.userid = cookies.userid || v4();
  if (request.query.has("_method")) {
    request.method = request.query.get("_method").toUpperCase();
  }
  const response = await render2(request);
  if (!cookies.userid) {
    response.headers["set-cookie"] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
  }
  return response;
};
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  handle
});
var template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-07fb00c7.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-07fb00c7.js", "/./_app/chunks/vendor-6db0aecf.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error22) => String(error22),
    handle_error: (error22) => {
      console.error(error22.stack);
      error22.stack = options.get_stack(error22);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var empty = () => ({});
var manifest = {
  assets: [{"file": "apple-icon-180.png", "size": 5234, "type": "image/png"}, {"file": "apple-splash-1125-2436.jpg", "size": 48897, "type": "image/jpeg"}, {"file": "apple-splash-1136-640.jpg", "size": 17398, "type": "image/jpeg"}, {"file": "apple-splash-1170-2532.jpg", "size": 51811, "type": "image/jpeg"}, {"file": "apple-splash-1242-2208.jpg", "size": 52599, "type": "image/jpeg"}, {"file": "apple-splash-1242-2688.jpg", "size": 56170, "type": "image/jpeg"}, {"file": "apple-splash-1284-2778.jpg", "size": 58403, "type": "image/jpeg"}, {"file": "apple-splash-1334-750.jpg", "size": 21159, "type": "image/jpeg"}, {"file": "apple-splash-1536-2048.jpg", "size": 63142, "type": "image/jpeg"}, {"file": "apple-splash-1620-2160.jpg", "size": 67883, "type": "image/jpeg"}, {"file": "apple-splash-1668-2224.jpg", "size": 70051, "type": "image/jpeg"}, {"file": "apple-splash-1668-2388.jpg", "size": 72176, "type": "image/jpeg"}, {"file": "apple-splash-1792-828.jpg", "size": 23547, "type": "image/jpeg"}, {"file": "apple-splash-2048-1536.jpg", "size": 52834, "type": "image/jpeg"}, {"file": "apple-splash-2048-2732.jpg", "size": 92017, "type": "image/jpeg"}, {"file": "apple-splash-2160-1620.jpg", "size": 56842, "type": "image/jpeg"}, {"file": "apple-splash-2208-1242.jpg", "size": 40976, "type": "image/jpeg"}, {"file": "apple-splash-2224-1668.jpg", "size": 59104, "type": "image/jpeg"}, {"file": "apple-splash-2388-1668.jpg", "size": 59760, "type": "image/jpeg"}, {"file": "apple-splash-2436-1125.jpg", "size": 35559, "type": "image/jpeg"}, {"file": "apple-splash-2532-1170.jpg", "size": 38062, "type": "image/jpeg"}, {"file": "apple-splash-2688-1242.jpg", "size": 41567, "type": "image/jpeg"}, {"file": "apple-splash-2732-2048.jpg", "size": 78153, "type": "image/jpeg"}, {"file": "apple-splash-2778-1284.jpg", "size": 43582, "type": "image/jpeg"}, {"file": "apple-splash-640-1136.jpg", "size": 23426, "type": "image/jpeg"}, {"file": "apple-splash-750-1334.jpg", "size": 28014, "type": "image/jpeg"}, {"file": "apple-splash-828-1792.jpg", "size": 33344, "type": "image/jpeg"}, {"file": "assets/draw.png", "size": 155427, "type": "image/png"}, {"file": "assets/head.svg", "size": 8851, "type": "image/svg+xml"}, {"file": "assets/logo.png", "size": 28790, "type": "image/png"}, {"file": "assets/moon.webp", "size": 1402, "type": "image/webp"}, {"file": "favicon.ico", "size": 28790, "type": "image/vnd.microsoft.icon"}, {"file": "manifest.webmanifest", "size": 421, "type": "application/manifest+json"}, {"file": "pwa-192x192.png", "size": 5537, "type": "image/png"}, {"file": "pwa-512x512.png", "size": 18707, "type": "image/png"}, {"file": "robots.txt", "size": 67, "type": "text/plain"}, {"file": "svelte-welcome.png", "size": 360807, "type": "image/png"}, {"file": "svelte-welcome.webp", "size": 115470, "type": "image/webp"}],
  layout: "src/routes/__layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/reminder\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/reminder.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/about\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/table\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/table.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/info\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/info.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error2;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/reminder.svelte": () => Promise.resolve().then(function() {
    return reminder;
  }),
  "src/routes/about.svelte": () => Promise.resolve().then(function() {
    return about;
  }),
  "src/routes/table.svelte": () => Promise.resolve().then(function() {
    return table;
  }),
  "src/routes/info.svelte": () => Promise.resolve().then(function() {
    return info;
  })
};
var metadata_lookup = {"src/routes/__layout.svelte": {"entry": "/./_app/pages/__layout.svelte-a1f0c600.js", "css": ["/./_app/assets/pages/__layout.svelte-31b2e99a.css"], "js": ["/./_app/pages/__layout.svelte-a1f0c600.js", "/./_app/chunks/vendor-6db0aecf.js"], "styles": null}, ".svelte-kit/build/components/error.svelte": {"entry": "/./_app/error.svelte-a7904490.js", "css": [], "js": ["/./_app/error.svelte-a7904490.js", "/./_app/chunks/vendor-6db0aecf.js"], "styles": null}, "src/routes/index.svelte": {"entry": "/./_app/pages/index.svelte-fc8051c6.js", "css": ["/./_app/assets/pages/index.svelte-4b048925.css"], "js": ["/./_app/pages/index.svelte-fc8051c6.js", "/./_app/chunks/vendor-6db0aecf.js", "/./_app/chunks/store-76b6127c.js"], "styles": null}, "src/routes/reminder.svelte": {"entry": "/./_app/pages/reminder.svelte-9deffa8c.js", "css": ["/./_app/assets/pages/reminder.svelte-1dff886d.css"], "js": ["/./_app/pages/reminder.svelte-9deffa8c.js", "/./_app/chunks/vendor-6db0aecf.js"], "styles": null}, "src/routes/about.svelte": {"entry": "/./_app/pages/about.svelte-d9652c03.js", "css": ["/./_app/assets/pages/about.svelte-884e0f8c.css"], "js": ["/./_app/pages/about.svelte-d9652c03.js", "/./_app/chunks/vendor-6db0aecf.js"], "styles": null}, "src/routes/table.svelte": {"entry": "/./_app/pages/table.svelte-a512a291.js", "css": ["/./_app/assets/pages/table.svelte-1b52939d.css"], "js": ["/./_app/pages/table.svelte-a512a291.js", "/./_app/chunks/vendor-6db0aecf.js", "/./_app/chunks/store-76b6127c.js"], "styles": null}, "src/routes/info.svelte": {"entry": "/./_app/pages/info.svelte-4525e4cc.js", "css": ["/./_app/assets/pages/info.svelte-0511e98a.css"], "js": ["/./_app/pages/info.svelte-4525e4cc.js", "/./_app/chunks/vendor-6db0aecf.js", "/./_app/chunks/store-76b6127c.js"], "styles": null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {"base": "", "assets": "/."}});
function render(request, {
  prerender: prerender2
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender: prerender2});
}
var css$6 = {
  code: ".pwa-toast.svelte-1q69697.svelte-1q69697{position:fixed;right:0;bottom:0;margin:16px;padding:12px;border:1px solid #8885;border-radius:4px;z-index:1;text-align:left;background-color:aqua;box-shadow:3px 4px 5px 0px #8885}.pwa-toast.svelte-1q69697 .message.svelte-1q69697{margin-bottom:8px}.pwa-toast.svelte-1q69697 button.svelte-1q69697{border:1px solid #8885;outline:none;margin-right:5px;border-radius:2px;padding:3px 10px}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { dev, browser } from '$app/env';\\r\\nimport { Workbox, messageSW } from 'workbox-window';\\r\\nlet wb;\\r\\nlet registration;\\r\\nlet offlineReady = false;\\r\\nlet needRefresh = false;\\r\\nfunction showSkipWaitingPrompt(event) {\\r\\n    // \\\\\`event.wasWaitingBeforeRegister\\\\\` will be false if this is\\r\\n    // the first time the updated service worker is waiting.\\r\\n    // When \\\\\`event.wasWaitingBeforeRegister\\\\\` is true, a previously\\r\\n    // updated service worker is still waiting.\\r\\n    // You may want to customize the UI prompt accordingly.\\r\\n    // Assumes your app has some sort of prompt UI element\\r\\n    // that a user can either accept or reject.\\r\\n    needRefresh = true;\\r\\n}\\r\\nfunction updateServiceWorker() {\\r\\n    // Assuming the user accepted the update, set up a listener\\r\\n    // that will reload the page as soon as the previously waiting\\r\\n    // service worker has taken control.\\r\\n    if (wb) {\\r\\n        wb.addEventListener('controlling', (event) => {\\r\\n            if (event.isUpdate)\\r\\n                window.location.reload();\\r\\n        });\\r\\n    }\\r\\n    if (registration && registration.waiting) {\\r\\n        // Send a message to the waiting service worker,\\r\\n        // instructing it to activate.\\r\\n        // Note: for this to work, you have to add a message\\r\\n        // listener in your service worker. See below.\\r\\n        messageSW(registration.waiting, { type: 'SKIP_WAITING' }).then(() => {\\r\\n            // console.log(\\"NOTIFIED SKIP_WAITING\\");\\r\\n        }).catch(e => {\\r\\n            console.error(\\"NOTIFIED SKIP_WAITING WITH ERROR\\", e);\\r\\n        });\\r\\n    }\\r\\n}\\r\\nfunction close() {\\r\\n    offlineReady = false;\\r\\n    needRefresh = false;\\r\\n}\\r\\nif (!dev && browser) {\\r\\n    if ('serviceWorker' in navigator) {\\r\\n        wb = new Workbox('/service-worker.js', { scope: '/' });\\r\\n        wb.addEventListener('activated', (event) => {\\r\\n            // this will only controls the offline request.\\r\\n            // event.isUpdate will be true if another version of the service\\r\\n            // worker was controlling the page when this version was registered.\\r\\n            if (!event.isUpdate) {\\r\\n                offlineReady = true;\\r\\n            }\\r\\n        });\\r\\n        // Add an event listener to detect when the registered\\r\\n        // service worker has installed but is waiting to activate.\\r\\n        wb.addEventListener('waiting', showSkipWaitingPrompt);\\r\\n        // eslint-disable-next-line\\r\\n        // @ts-ignore\\r\\n        wb.addEventListener('externalwaiting', showSkipWaitingPrompt);\\r\\n        // register the service worker\\r\\n        wb.register({ immediate: true }).then(r => registration = r).catch(e => {\\r\\n            console.error(\\"cannot register service worker\\", e);\\r\\n        });\\r\\n    }\\r\\n    else {\\r\\n        console.warn('Service workers are not supported.');\\r\\n    }\\r\\n}\\r\\n$: toast = offlineReady || needRefresh;\\r\\n</script>\\n\\n{#if toast}\\n  <div\\n      class=\\"pwa-toast\\"\\n      role=\\"alert\\"\\n  >\\n    <div class=\\"message\\">\\n      {#if offlineReady}\\n      <span>\\n        App ready to work offline\\n      </span>\\n      {:else}\\n      <span>\\n        New content available, click on reload button to update.\\n      </span>\\n      {/if}\\n    </div>\\n    {#if needRefresh}\\n    <button on:click={updateServiceWorker}>\\n      Reload\\n    </button>\\n    {/if}\\n    <button on:click={close}>\\n      Close\\n    </button>\\n  </div>\\n{/if}\\n\\n<style>\\n    .pwa-toast {\\n        position: fixed;\\n        right: 0;\\n        bottom: 0;\\n        margin: 16px;\\n        padding: 12px;\\n        border: 1px solid #8885;\\n        border-radius: 4px;\\n        z-index: 1;\\n        text-align: left;\\n        background-color: aqua;\\n        box-shadow: 3px 4px 5px 0px #8885;\\n    }\\n    .pwa-toast .message {\\n        margin-bottom: 8px;\\n    }\\n    .pwa-toast button {\\n        border: 1px solid #8885;\\n        outline: none;\\n        margin-right: 5px;\\n        border-radius: 2px;\\n        padding: 3px 10px;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAmGI,UAAU,8BAAC,CAAC,AACR,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,gBAAgB,CAAE,IAAI,CACtB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,AACrC,CAAC,AACD,yBAAU,CAAC,QAAQ,eAAC,CAAC,AACjB,aAAa,CAAE,GAAG,AACtB,CAAC,AACD,yBAAU,CAAC,MAAM,eAAC,CAAC,AACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,AACrB,CAAC"}`
};
var ReloadPrompt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toast;
  let needRefresh = false;
  $$result.css.add(css$6);
  toast = needRefresh;
  return `${toast ? `<div class="${"pwa-toast svelte-1q69697"}" role="${"alert"}"><div class="${"message svelte-1q69697"}">${`<span>New content available, click on reload button to update.
      </span>`}</div>
    ${``}
    <button class="${"svelte-1q69697"}">Close
    </button></div>` : ``}`;
});
var css$5 = {
  code: "body{color:blue;margin:0;padding:0;box-sizing:border-box}:root{--bc:#f5f5f5;--tc:hsl(0, 0%, 25%);--lc:seashell;--bl:#2699fb;--fb:#EBF1F6;--fm:#d3dee7;--tbc:#d3dee7}#layout.svelte-lg8p40 .nav-one.svelte-lg8p40{z-index:99;position:fixed;width:100%;background:var(--bc);top:0;left:0}#layout.svelte-lg8p40 .nav-one .nv.svelte-lg8p40{box-shadow:#0000002c 0px 3px 11px 0px;display:flex;align-items:center;background:var(--bc)}#layout.svelte-lg8p40 .nav-one .nv .menu.svelte-lg8p40{padding:20px;position:relative;z-index:100;background:#00000007}#layout.svelte-lg8p40 .nav-one .nv .menu div.svelte-lg8p40{width:20px;height:3px;background:var(--tc)}#layout.svelte-lg8p40 .nav-one .nv .menu .line-2.svelte-lg8p40{margin:5px 0px;width:12px}#layout.svelte-lg8p40 .nav-one .nv .brand.svelte-lg8p40{padding:0px 10px}#layout.svelte-lg8p40 .nav-one .nv .brand a.svelte-lg8p40{display:flex;align-items:center;padding:3px 15px;text-decoration:none}#layout.svelte-lg8p40 .nav-one .nv .brand a h1.svelte-lg8p40{padding:0px 15px;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:1rem;font-weight:500}#layout.svelte-lg8p40 .nav-one .nv .open.svelte-lg8p40{width:100% !important;transition:all 1s ease !important;opacity:100% !important;pointer-events:all !important}#layout.svelte-lg8p40 .nav-one .nv .nav-bar.svelte-lg8p40{z-index:99;position:fixed;top:0;left:0;background:#0000001e;opacity:0;width:0;height:100vh;overflow:hidden;padding:0;transition:all 0.5s ease;pointer-events:none}#layout.svelte-lg8p40 .nav-one .nv .nav-bar .navlist.svelte-lg8p40{background:var(--fb);height:100vh;width:65%}#layout.svelte-lg8p40 .nav-one .nv .nav-bar .navlist .navDisplay.svelte-lg8p40{background:#00000085;background-blend-mode:multiply;display:flex;padding-top:50px;flex-direction:column;align-items:center;justify-content:center;background-size:contain;background-repeat:no-repeat}#layout.svelte-lg8p40 .nav-one .nv .nav-bar .navlist .navDisplay h1.svelte-lg8p40{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--lc);font-size:1rem;font-weight:400}#layout.svelte-lg8p40 .nav-one .nv .nav-bar ul.svelte-lg8p40{margin:0;padding:0}#layout.svelte-lg8p40 .nav-one .nv .nav-bar ul li.svelte-lg8p40{list-style:none;padding:20px 10px;overflow:hidden}#layout.svelte-lg8p40 .nav-one .nv .nav-bar ul li a.svelte-lg8p40{text-decoration:none;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.95rem;font-weight:500;padding-top:20px;padding-bottom:20px;padding-left:10px;padding-right:35px}#layout.svelte-lg8p40 .nav-one .nv .nav-bar ul li a span.svelte-lg8p40{padding:0px 5px}#layout.svelte-lg8p40 .nav-one .nv .nav-bar ul li a span svg.svelte-lg8p40{filter:grayscale(50%)}#layout.svelte-lg8p40 .nav-one .nv .nav-bar ul li.svelte-lg8p40:hover{background:#2699fb}#layout.svelte-lg8p40 .nav-two.svelte-lg8p40{box-shadow:#00000040 0px -3px 9px;background:var(--bc);position:fixed;z-index:2;left:0;bottom:0;width:100%}#layout.svelte-lg8p40 .nav-two .nv.svelte-lg8p40{padding:0px 20px;display:flex;justify-content:space-between;align-items:center}#layout.svelte-lg8p40 .nav-two .nv .nv-left .date.svelte-lg8p40{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:1rem;font-weight:400}#layout.svelte-lg8p40 .nav-two .nv .nv-right.svelte-lg8p40{width:50%;height:auto}#layout.svelte-lg8p40 .nav-two .nv .nv-right ul.svelte-lg8p40{padding:10px;margin:0}#layout.svelte-lg8p40 .nav-two .nv .nv-right .nav-links.svelte-lg8p40{display:flex;align-items:center;justify-content:space-between}#layout.svelte-lg8p40 .nav-two .nv .nv-right .nav-links li.svelte-lg8p40{list-style:none;padding:0;margin:0}#layout.svelte-lg8p40 .nav-two .nv .nv-right .nav-links li a.svelte-lg8p40{filter:grayscale(35%);padding:10px}",
  map: `{"version":3,"file":"__layout.svelte","sources":["__layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import ReloadPrompt from '$lib/ReloadPrompt/index.svelte';\\r\\nimport '../app.css';\\r\\nconst date = new Date();\\r\\nlet day = date.toLocaleDateString(\\"en-US\\", { day: \\"numeric\\" });\\r\\nlet weekday = date.toLocaleDateString(\\"en-US\\", { weekday: \\"long\\" }).toUpperCase();\\r\\n$: open = false;\\r\\n</script>\\n\\n<svelte:head>\\n\\t<link rel=\\"manifest\\" href=\\"/manifest.webmanifest\\" />\\n\\t<link rel=\\"apple-touch-icon\\" href=\\"/apple-icon-180.png\\" />\\n\\n\\t<meta\\n\\t\\tname=\\"description\\"\\n\\t\\tcontent=\\"This is a Svelte-Kit PWA skeleton app based on the regular Svelte-kit app.\\"\\n\\t/>\\n\\t<meta name=\\"apple-mobile-web-app-capable\\" content=\\"yes\\" />\\n\\t<!-- <link rel=\\"icon\\" href=\\"/favicon.svg\\" type=\\"image/svg+xml\\"> -->\\n\\t<link rel=\\"apple-touch-icon\\" href=\\"/pwa-192x192.png\\" />\\n\\t<!-- <link rel=\\"mask-icon\\" href=\\"/safari-pinned-tab.svg\\" color=\\"#00aba9\\"> -->\\n\\t<meta name=\\"msapplication-TileColor\\" content=\\"#00aba9\\" />\\n\\t<meta name=\\"theme-color\\" content=\\"#ffffff\\" />\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2048-2732.jpg\\"\\n\\t\\tmedia=\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2732-2048.jpg\\"\\n\\t\\tmedia=\\"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1668-2388.jpg\\"\\n\\t\\tmedia=\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2388-1668.jpg\\"\\n\\t\\tmedia=\\"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1536-2048.jpg\\"\\n\\t\\tmedia=\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2048-1536.jpg\\"\\n\\t\\tmedia=\\"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1668-2224.jpg\\"\\n\\t\\tmedia=\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2224-1668.jpg\\"\\n\\t\\tmedia=\\"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1620-2160.jpg\\"\\n\\t\\tmedia=\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2160-1620.jpg\\"\\n\\t\\tmedia=\\"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1284-2778.jpg\\"\\n\\t\\tmedia=\\"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2778-1284.jpg\\"\\n\\t\\tmedia=\\"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1170-2532.jpg\\"\\n\\t\\tmedia=\\"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2532-1170.jpg\\"\\n\\t\\tmedia=\\"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1125-2436.jpg\\"\\n\\t\\tmedia=\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2436-1125.jpg\\"\\n\\t\\tmedia=\\"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1242-2688.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2688-1242.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-828-1792.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1792-828.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1242-2208.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-2208-1242.jpg\\"\\n\\t\\tmedia=\\"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-750-1334.jpg\\"\\n\\t\\tmedia=\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1334-750.jpg\\"\\n\\t\\tmedia=\\"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-640-1136.jpg\\"\\n\\t\\tmedia=\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)\\"\\n\\t/>\\n\\t<link\\n\\t\\trel=\\"apple-touch-startup-image\\"\\n\\t\\thref=\\"/apple-splash-1136-640.jpg\\"\\n\\t\\tmedia=\\"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)\\"\\n\\t/>\\n</svelte:head>\\n\\n<section  id=\\"layout\\">\\n    <nav class=\\"nav-one\\">\\n        <div class=\\"nv\\">\\n            <div on:click={() => {open = !open}} class=\\"menu\\">\\n                <div class=\\"line-1\\"></div>\\n                <div class=\\"line-2\\"></div>\\n                <div class=\\"line-3\\"></div>\\n            </div>\\n            <div class=\\"brand\\">\\n                <a  href=\\"/\\">\\n                    <span>             \\n                        <img src=\\"assets/logo.png\\" width=\\"50px\\" alt=\\"logo\\">\\n                    </span>\\n                    <span>\\n                        <h1>BDEC</h1>\\n                    </span>    \\n              </a>        \\n            </div>\\n            <div class:open={open} on:click={() => {open = !open}} class=\\"nav-bar\\">\\n                <ul on:click={() => {open = open}} class=\\"navlist\\">\\n                    <div style=\\"background-image: url('assets/draw.png')\\" class=\\"navDisplay\\">\\n                        <img src=\\"assets/head.svg\\" width=\\"60px\\" alt=\\"avatar\\">\\n                        <h1>FAITH LAKALAKA</h1>\\n                    </div>\\n\\n                    <li><a  href=\\"https://www.bdec.vercel.app\\"><span><svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\"><defs><clipPath id=\\"a\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/></clipPath></defs><g clip-path=\\"url(#a)\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/><path d=\\"M-937.766-17060.707h-1.411a4.815,4.815,0,0,1-4.234-2.637l-1.694-3.295a2.783,2.783,0,0,0-2.544-1.6H-950v-1.881h2.351a4.817,4.817,0,0,1,4.238,2.637l1.694,3.293a2.773,2.773,0,0,0,2.54,1.6h1.411v-1.883l3.766,2.826-3.766,2.822Zm-12.234,0v-1.883h2.351a2.766,2.766,0,0,0,2.073-.848l.375.941a5.282,5.282,0,0,0,.472.754,4.414,4.414,0,0,1-2.919,1.035Zm12.234-7.529h-1.411a2.78,2.78,0,0,0-2.073.848l-.375-.939a5.184,5.184,0,0,0-.472-.754,4.414,4.414,0,0,1,2.919-1.035h1.411V-17072l3.766,2.82-3.766,2.828Z\\" transform=\\"translate(950 17074)\\" fill=\\"#2699fb\\"/></g></svg></span><span>UPDATES</span></a></li>\\n\\n                    <li><a   href=\\"/info\\"><span><svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"16.003\\" height=\\"16.002\\" viewBox=\\"0 0 16.003 16.002\\"><defs><clipPath id=\\"a\\"><rect width=\\"16.003\\" height=\\"16.002\\" fill=\\"none\\"/></clipPath></defs><g clip-path=\\"url(#a)\\"><path d=\\"M12,16V4h4V16ZM6,16V0h4V16ZM0,16V8H4v8Z\\" fill=\\"#2699fb\\"/></g></svg></span><span>INFORMATION</span></a></li>\\n\\n                    <li><a   href=\\"/about\\"><span><svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\"><defs><clipPath id=\\"a\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/></clipPath></defs><g clip-path=\\"url(#a)\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/><path d=\\"M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM7.92,13.28a1.12,1.12,0,1,1,1.12-1.12A1.094,1.094,0,0,1,7.92,13.28Zm2.16-6.24L9.2,8a.977.977,0,0,0-.32.72.973.973,0,0,1-.96.96.924.924,0,0,1-.96-.96A1.785,1.785,0,0,1,7.6,7.28l.72-.88a1.816,1.816,0,0,0,.56-1.12A.839.839,0,0,0,8,4.4a.941.941,0,0,0-.96.72,1.045,1.045,0,0,1-.96.56A.839.839,0,0,1,5.2,4.8a.87.87,0,0,1,.08-.4A2.666,2.666,0,0,1,8,2.72a2.592,2.592,0,0,1,2.8,2.56A2.625,2.625,0,0,1,10.08,7.04Z\\" fill=\\"#2699fb\\"/></g></svg></span><span>ABOUT</span></a></li>\\n                </ul>\\n            </div>\\n        </div>\\n    </nav>\\n\\t<main>\\n\\t\\t<slot />\\n\\t</main>\\n\\n    <nav class=\\"nav-two\\">\\n        <div class=\\"nv\\">\\n            <div class=\\"nv-left\\">\\n                <div class=\\"date\\">\\n                    <p>{day} | {weekday}</p>\\n                </div>\\n            </div>\\n            <div class=\\"nv-right\\">\\n                <ul class=\\"nav-links\\">\\n                    <li><a   href=\\"/reminder\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"14\\" height=\\"14\\" viewBox=\\"0 0 14 14\\"><defs><clipPath id=\\"a\\"><rect width=\\"14\\" height=\\"14\\" fill=\\"none\\"/></clipPath></defs><g clip-path=\\"url(#a)\\"><path d=\\"M0,0V3.5H14V0ZM2.625,2.625H.875V.875h1.75ZM0,8.75H14V5.25H0ZM.875,6.125h1.75v1.75H.875ZM0,14H14V10.5H0Zm.875-2.625h1.75v1.75H.875Z\\" fill=\\"#2699fb\\"/></g></svg></a></li>\\n                    <li><a  href=\\"/table\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\"><defs><clipPath id=\\"a\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/></clipPath></defs><g clip-path=\\"url(#a)\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/><path d=\\"M2,5v9H14V5ZM13,2h2a.945.945,0,0,1,1,1V15a.945.945,0,0,1-1,1H1a.945.945,0,0,1-1-1V3A.945.945,0,0,1,1,2H3V1A.945.945,0,0,1,4,0,.945.945,0,0,1,5,1V2h6V1a1,1,0,0,1,2,0ZM12,12H10V10h2ZM9,12H7V10H9Zm3-3H10V7h2ZM9,9H7V7H9ZM6,12H4V10H6Z\\" fill=\\"#2699fb\\" fill-rule=\\"evenodd\\"/></g></svg></a></li>\\n                   \\n                </ul>\\n            </div>\\n        </div>\\n        \\n    </nav>\\n</section>\\n\\n<ReloadPrompt />\\n<style lang=\\"scss\\">:global(body) {\\n  color: blue;\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n:root {\\n  --bc:#f5f5f5;\\n  --tc:hsl(0, 0%, 25%);\\n  --lc:seashell;\\n  --bl:#2699fb;\\n  --fb:#EBF1F6;\\n  --fm: #d3dee7;\\n  --tbc: #d3dee7;\\n}\\n\\n#layout .nav-one {\\n  z-index: 99;\\n  position: fixed;\\n  width: 100%;\\n  background: var(--bc);\\n  top: 0;\\n  left: 0;\\n}\\n#layout .nav-one .nv {\\n  box-shadow: #0000002c 0px 3px 11px 0px;\\n  display: flex;\\n  align-items: center;\\n  background: var(--bc);\\n}\\n#layout .nav-one .nv .menu {\\n  padding: 20px;\\n  position: relative;\\n  z-index: 100;\\n  background: #00000007;\\n}\\n#layout .nav-one .nv .menu div {\\n  width: 20px;\\n  height: 3px;\\n  background: var(--tc);\\n}\\n#layout .nav-one .nv .menu .line-2 {\\n  margin: 5px 0px;\\n  width: 12px;\\n}\\n#layout .nav-one .nv .brand {\\n  padding: 0px 10px;\\n}\\n#layout .nav-one .nv .brand a {\\n  display: flex;\\n  align-items: center;\\n  padding: 3px 15px;\\n  text-decoration: none;\\n}\\n#layout .nav-one .nv .brand a h1 {\\n  padding: 0px 15px;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 1rem;\\n  font-weight: 500;\\n}\\n#layout .nav-one .nv .open {\\n  width: 100% !important;\\n  transition: all 1s ease !important;\\n  opacity: 100% !important;\\n  pointer-events: all !important;\\n}\\n#layout .nav-one .nv .nav-bar {\\n  z-index: 99;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  background: #0000001e;\\n  opacity: 0;\\n  width: 0;\\n  height: 100vh;\\n  overflow: hidden;\\n  padding: 0;\\n  transition: all 0.5s ease;\\n  pointer-events: none;\\n}\\n#layout .nav-one .nv .nav-bar .navlist {\\n  background: var(--fb);\\n  height: 100vh;\\n  width: 65%;\\n}\\n#layout .nav-one .nv .nav-bar .navlist .navDisplay {\\n  background: #00000085;\\n  background-blend-mode: multiply;\\n  display: flex;\\n  padding-top: 50px;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n#layout .nav-one .nv .nav-bar .navlist .navDisplay h1 {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--lc);\\n  font-size: 1rem;\\n  font-weight: 400;\\n}\\n#layout .nav-one .nv .nav-bar ul {\\n  margin: 0;\\n  padding: 0;\\n}\\n#layout .nav-one .nv .nav-bar ul li {\\n  list-style: none;\\n  padding: 20px 10px;\\n  overflow: hidden;\\n}\\n#layout .nav-one .nv .nav-bar ul li a {\\n  text-decoration: none;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.95rem;\\n  font-weight: 500;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  padding-left: 10px;\\n  padding-right: 35px;\\n}\\n#layout .nav-one .nv .nav-bar ul li a span {\\n  padding: 0px 5px;\\n}\\n#layout .nav-one .nv .nav-bar ul li a span svg {\\n  filter: grayscale(50%);\\n}\\n#layout .nav-one .nv .nav-bar ul li:hover {\\n  background: #2699fb;\\n}\\n#layout .nav-two {\\n  box-shadow: #00000040 0px -3px 9px;\\n  background: var(--bc);\\n  position: fixed;\\n  z-index: 2;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n}\\n#layout .nav-two .nv {\\n  padding: 0px 20px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n#layout .nav-two .nv .nv-left .date {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 1rem;\\n  font-weight: 400;\\n}\\n#layout .nav-two .nv .nv-right {\\n  width: 50%;\\n  height: auto;\\n}\\n#layout .nav-two .nv .nv-right ul {\\n  padding: 10px;\\n  margin: 0;\\n}\\n#layout .nav-two .nv .nv-right .nav-links {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n#layout .nav-two .nv .nv-right .nav-links li {\\n  list-style: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n#layout .nav-two .nv .nv-right .nav-links li a {\\n  filter: grayscale(35%);\\n  padding: 10px;\\n}</style>"],"names":[],"mappings":"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"}`
};
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  const date = new Date();
  let day = date.toLocaleDateString("en-US", {day: "numeric"});
  let weekday = date.toLocaleDateString("en-US", {weekday: "long"}).toUpperCase();
  $$result.css.add(css$5);
  open = false;
  return `${$$result.head += `<link rel="${"manifest"}" href="${"/manifest.webmanifest"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-icon"}" href="${"/apple-icon-180.png"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><meta name="${"description"}" content="${"This is a Svelte-Kit PWA skeleton app based on the regular Svelte-kit app."}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><meta name="${"apple-mobile-web-app-capable"}" content="${"yes"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-icon"}" href="${"/pwa-192x192.png"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><meta name="${"msapplication-TileColor"}" content="${"#00aba9"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><meta name="${"theme-color"}" content="${"#ffffff"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2048-2732.jpg"}" media="${"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2732-2048.jpg"}" media="${"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1668-2388.jpg"}" media="${"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2388-1668.jpg"}" media="${"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1536-2048.jpg"}" media="${"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2048-1536.jpg"}" media="${"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1668-2224.jpg"}" media="${"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2224-1668.jpg"}" media="${"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1620-2160.jpg"}" media="${"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2160-1620.jpg"}" media="${"(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1284-2778.jpg"}" media="${"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2778-1284.jpg"}" media="${"(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1170-2532.jpg"}" media="${"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2532-1170.jpg"}" media="${"(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1125-2436.jpg"}" media="${"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2436-1125.jpg"}" media="${"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1242-2688.jpg"}" media="${"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2688-1242.jpg"}" media="${"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-828-1792.jpg"}" media="${"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1792-828.jpg"}" media="${"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1242-2208.jpg"}" media="${"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-2208-1242.jpg"}" media="${"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-750-1334.jpg"}" media="${"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1334-750.jpg"}" media="${"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-640-1136.jpg"}" media="${"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54"><link rel="${"apple-touch-startup-image"}" href="${"/apple-splash-1136-640.jpg"}" media="${"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}" class="${"svelte-lg8p40"}" data-svelte="svelte-qoiy54">`, ""}

<section id="${"layout"}" class="${"svelte-lg8p40"}"><nav class="${"nav-one svelte-lg8p40"}"><div class="${"nv svelte-lg8p40"}"><div class="${"menu svelte-lg8p40"}"><div class="${"line-1 svelte-lg8p40"}"></div>
                <div class="${"line-2 svelte-lg8p40"}"></div>
                <div class="${"line-3 svelte-lg8p40"}"></div></div>
            <div class="${"brand svelte-lg8p40"}"><a href="${"/"}" class="${"svelte-lg8p40"}"><span class="${"svelte-lg8p40"}"><img src="${"assets/logo.png"}" width="${"50px"}" alt="${"logo"}" class="${"svelte-lg8p40"}"></span>
                    <span class="${"svelte-lg8p40"}"><h1 class="${"svelte-lg8p40"}">BDEC</h1></span></a></div>
            <div class="${["nav-bar svelte-lg8p40", open ? "open" : ""].join(" ").trim()}"><ul class="${"navlist svelte-lg8p40"}"><div style="${"background-image: url('assets/draw.png')"}" class="${"navDisplay svelte-lg8p40"}"><img src="${"assets/head.svg"}" width="${"60px"}" alt="${"avatar"}" class="${"svelte-lg8p40"}">
                        <h1 class="${"svelte-lg8p40"}">FAITH LAKALAKA</h1></div>

                    <li class="${"svelte-lg8p40"}"><a href="${"https://www.bdec.vercel.app"}" class="${"svelte-lg8p40"}"><span class="${"svelte-lg8p40"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 16 16"}" class="${"svelte-lg8p40"}"><defs class="${"svelte-lg8p40"}"><clipPath id="${"a"}" class="${"svelte-lg8p40"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}" class="${"svelte-lg8p40"}"></rect></clipPath></defs><g clip-path="${"url(#a)"}" class="${"svelte-lg8p40"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}" class="${"svelte-lg8p40"}"></rect><path d="${"M-937.766-17060.707h-1.411a4.815,4.815,0,0,1-4.234-2.637l-1.694-3.295a2.783,2.783,0,0,0-2.544-1.6H-950v-1.881h2.351a4.817,4.817,0,0,1,4.238,2.637l1.694,3.293a2.773,2.773,0,0,0,2.54,1.6h1.411v-1.883l3.766,2.826-3.766,2.822Zm-12.234,0v-1.883h2.351a2.766,2.766,0,0,0,2.073-.848l.375.941a5.282,5.282,0,0,0,.472.754,4.414,4.414,0,0,1-2.919,1.035Zm12.234-7.529h-1.411a2.78,2.78,0,0,0-2.073.848l-.375-.939a5.184,5.184,0,0,0-.472-.754,4.414,4.414,0,0,1,2.919-1.035h1.411V-17072l3.766,2.82-3.766,2.828Z"}" transform="${"translate(950 17074)"}" fill="${"#2699fb"}" class="${"svelte-lg8p40"}"></path></g></svg></span><span class="${"svelte-lg8p40"}">UPDATES</span></a></li>

                    <li class="${"svelte-lg8p40"}"><a href="${"/info"}" class="${"svelte-lg8p40"}"><span class="${"svelte-lg8p40"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16.003"}" height="${"16.002"}" viewBox="${"0 0 16.003 16.002"}" class="${"svelte-lg8p40"}"><defs class="${"svelte-lg8p40"}"><clipPath id="${"a"}" class="${"svelte-lg8p40"}"><rect width="${"16.003"}" height="${"16.002"}" fill="${"none"}" class="${"svelte-lg8p40"}"></rect></clipPath></defs><g clip-path="${"url(#a)"}" class="${"svelte-lg8p40"}"><path d="${"M12,16V4h4V16ZM6,16V0h4V16ZM0,16V8H4v8Z"}" fill="${"#2699fb"}" class="${"svelte-lg8p40"}"></path></g></svg></span><span class="${"svelte-lg8p40"}">INFORMATION</span></a></li>

                    <li class="${"svelte-lg8p40"}"><a href="${"/about"}" class="${"svelte-lg8p40"}"><span class="${"svelte-lg8p40"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 16 16"}" class="${"svelte-lg8p40"}"><defs class="${"svelte-lg8p40"}"><clipPath id="${"a"}" class="${"svelte-lg8p40"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}" class="${"svelte-lg8p40"}"></rect></clipPath></defs><g clip-path="${"url(#a)"}" class="${"svelte-lg8p40"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}" class="${"svelte-lg8p40"}"></rect><path d="${"M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM7.92,13.28a1.12,1.12,0,1,1,1.12-1.12A1.094,1.094,0,0,1,7.92,13.28Zm2.16-6.24L9.2,8a.977.977,0,0,0-.32.72.973.973,0,0,1-.96.96.924.924,0,0,1-.96-.96A1.785,1.785,0,0,1,7.6,7.28l.72-.88a1.816,1.816,0,0,0,.56-1.12A.839.839,0,0,0,8,4.4a.941.941,0,0,0-.96.72,1.045,1.045,0,0,1-.96.56A.839.839,0,0,1,5.2,4.8a.87.87,0,0,1,.08-.4A2.666,2.666,0,0,1,8,2.72a2.592,2.592,0,0,1,2.8,2.56A2.625,2.625,0,0,1,10.08,7.04Z"}" fill="${"#2699fb"}" class="${"svelte-lg8p40"}"></path></g></svg></span><span class="${"svelte-lg8p40"}">ABOUT</span></a></li></ul></div></div></nav>
	<main class="${"svelte-lg8p40"}">${slots.default ? slots.default({}) : ``}</main>

    <nav class="${"nav-two svelte-lg8p40"}"><div class="${"nv svelte-lg8p40"}"><div class="${"nv-left svelte-lg8p40"}"><div class="${"date svelte-lg8p40"}"><p class="${"svelte-lg8p40"}">${escape2(day)} | ${escape2(weekday)}</p></div></div>
            <div class="${"nv-right svelte-lg8p40"}"><ul class="${"nav-links svelte-lg8p40"}"><li class="${"svelte-lg8p40"}"><a href="${"/reminder"}" class="${"svelte-lg8p40"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"14"}" height="${"14"}" viewBox="${"0 0 14 14"}" class="${"svelte-lg8p40"}"><defs class="${"svelte-lg8p40"}"><clipPath id="${"a"}" class="${"svelte-lg8p40"}"><rect width="${"14"}" height="${"14"}" fill="${"none"}" class="${"svelte-lg8p40"}"></rect></clipPath></defs><g clip-path="${"url(#a)"}" class="${"svelte-lg8p40"}"><path d="${"M0,0V3.5H14V0ZM2.625,2.625H.875V.875h1.75ZM0,8.75H14V5.25H0ZM.875,6.125h1.75v1.75H.875ZM0,14H14V10.5H0Zm.875-2.625h1.75v1.75H.875Z"}" fill="${"#2699fb"}" class="${"svelte-lg8p40"}"></path></g></svg></a></li>
                    <li class="${"svelte-lg8p40"}"><a href="${"/table"}" class="${"svelte-lg8p40"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 16 16"}" class="${"svelte-lg8p40"}"><defs class="${"svelte-lg8p40"}"><clipPath id="${"a"}" class="${"svelte-lg8p40"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}" class="${"svelte-lg8p40"}"></rect></clipPath></defs><g clip-path="${"url(#a)"}" class="${"svelte-lg8p40"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}" class="${"svelte-lg8p40"}"></rect><path d="${"M2,5v9H14V5ZM13,2h2a.945.945,0,0,1,1,1V15a.945.945,0,0,1-1,1H1a.945.945,0,0,1-1-1V3A.945.945,0,0,1,1,2H3V1A.945.945,0,0,1,4,0,.945.945,0,0,1,5,1V2h6V1a1,1,0,0,1,2,0ZM12,12H10V10h2ZM9,12H7V10H9Zm3-3H10V7h2ZM9,9H7V7H9ZM6,12H4V10H6Z"}" fill="${"#2699fb"}" fill-rule="${"evenodd"}" class="${"svelte-lg8p40"}"></path></g></svg></a></li></ul></div></div></nav></section>

${validate_component(ReloadPrompt, "ReloadPrompt").$$render($$result, {}, {}, {})}`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout
});
function load({error: error22, status}) {
  return {props: {error: error22, status}};
}
var Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error22} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error22 !== void 0)
    $$bindings.error(error22);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error22.message)}</p>


${error22.stack ? `<pre>${escape2(error22.stack)}</pre>` : ``}`;
});
var error2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Error2,
  load
});
var WeekdayObj = class {
  constructor(wd, dy, intm, fntm, loc, typ, hrs) {
    this.weekday = wd, this.day = dy;
    this.initialTime = intm, this.finalTime = fntm, this.location = loc, this.type = typ, this.hours = hrs;
  }
};
var CourseObj = class {
  constructor(crs, cd, typ, gpa, lct, wd) {
    this.id = CourseObj.uuid();
    this.date = CourseObj.date();
    this.course = crs;
    this.type = typ;
    this.gpa = gpa;
    this.code = cd;
    this.lecturer = lct;
    this.weekdays = wd;
  }
  static date() {
    return new Date().getDate();
  }
  static idOne() {
    const str = "abcdefghijklm";
    const num = Math.floor(Math.random() * 13);
    const strNum = num - 1;
    const subStr = str.substring(strNum, num);
    const idNum = Math.floor(Math.random() * 9);
    return `${subStr}${idNum}`;
  }
  static idTwo() {
    const str = "nopqrstuvwxyz";
    const num = Math.floor(Math.random() * 13);
    const strNum = num - 1;
    const subStr = str.substring(strNum, num);
    const idNum = Math.floor(Math.random() * 9);
    return `${subStr}${idNum}`;
  }
  static uuid() {
    const idOne = this.idOne();
    const idTwo = this.idTwo();
    const id = `${idOne}${idTwo}`;
    if (id.length == 3) {
      const num = `${Math.floor(Math.random() * 9)}`;
      const idMod = id + num;
      return idMod;
    } else if (id.length == 2) {
      const numM1 = `${Math.floor(Math.random() * 9)}`;
      const numM2 = `${Math.floor(Math.random() * 9)}`;
      const idMod2 = id + numM1 + numM2;
      return idMod2;
    } else {
      return id;
    }
  }
};
var courses = [
  new CourseObj("agriculture economics", "AAE211", "core", 2.5, "___", [
    new WeekdayObj("Monday", 1, "06:00", "07:00", "mph", "lecture", 2),
    new WeekdayObj("Thursday", 4, "06:00", "07:00", "mph", "lecture", 2),
    new WeekdayObj("Friday", 5, "06:00", "07:00", "mph", "lecture", 2)
  ]),
  new CourseObj("introduction to nutrition", "NFS212", "___", 3.5, "___", [
    new WeekdayObj("Monday", 1, "07:00", "10:00", "nut lad", "practical", 2),
    new WeekdayObj("Friday", 5, "10:00", "12:00", "Lt1", "lecture", 2)
  ]),
  new CourseObj("introduction to development economics", "DEC211", "___", 2, "___", [
    new WeekdayObj("Monday", 1, "10:00", "12:00", "Lt4", "lecture", 2)
  ]),
  new CourseObj("communication skills", "LDC211", "___", 3.5, "___", [
    new WeekdayObj("Monday", 1, "12:00", "13:00", "hall", "lecture", 1),
    new WeekdayObj("Monday", 1, "17:00", "19:00", "hall", "tutorial", 2)
  ]),
  new CourseObj("mathematics for economists", "AAE212", "core", 2.5, "___", [
    new WeekdayObj("Tuesday", 2, "07:00", "09:00", "Lt2", "lecture", 2),
    new WeekdayObj("Thursday", 4, "11:00", "12:00", "Lt2", "lecture", 1)
  ]),
  new CourseObj("soil and water conservation", "AGE214", "___", 3.5, "DODOMA MWASINGA", [
    new WeekdayObj("Wednesday", 3, "07:00", "09:00", "hall", "lecture", 2),
    new WeekdayObj("Wednesday", 3, "10:00", "12:00", "field", "pracical", 2)
  ]),
  new CourseObj("statistics for economists", "SAT213", "___", 3.5, "___", [
    new WeekdayObj("Wednesday", 3, "16:00", "18:00", "Lt3", "lecture", 2),
    new WeekdayObj("Thursday", 4, "08:00", "10:00", "hall", "tutorial", 2)
  ]),
  new CourseObj("introduction to financial accounting", "ABM211", "___", 3.5, "___", [
    new WeekdayObj("Thursday", 4, "12:00", "14:00", "Lt2", "lecture", 2),
    new WeekdayObj("Thursday", 4, "15:00", "16:00", "Lt1", "lecture", 1)
  ]),
  new CourseObj("enterpreneurship", "ABM213", "___", 2.5, "___", [
    new WeekdayObj("Thursday", 4, "16:00", "17:00", "hall", "lecture", 1),
    new WeekdayObj("Friday", 5, "13:00", "15:00", "hall", "lecture", 2)
  ])
];
var data = writable2(courses);
var css$4 = {
  code: "article.svelte-x39f4e.svelte-x39f4e{background:var(--bc);min-height:100vh}article.svelte-x39f4e .content.svelte-x39f4e{padding-top:14vh}article.svelte-x39f4e .content main.svelte-x39f4e{padding:10px;padding-bottom:100px}article.svelte-x39f4e .content main .card.svelte-x39f4e{padding:5px 10px;margin:15px 0px;background-color:var(--fb);box-shadow:#00000017 3px 2px 5px 2px}article.svelte-x39f4e .content main .card .title.svelte-x39f4e{display:flex;line-height:25px;justify-content:space-between;align-items:center}article.svelte-x39f4e .content main .card .title h1.svelte-x39f4e{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:1rem;font-weight:550}article.svelte-x39f4e .content main .card .details.svelte-x39f4e{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.75rem;font-weight:800;padding-top:30px}article.svelte-x39f4e .content main .card .details p.svelte-x39f4e{margin:0}article.svelte-x39f4e .content main .card .details .space.svelte-x39f4e{padding:10px;color:var(--bl)}article.svelte-x39f4e .content main .card .details .p-2.svelte-x39f4e{margin:6px 0px}article.svelte-x39f4e .content header.svelte-x39f4e{padding:0px 10px;text-align:end;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.89rem;font-weight:800;border-right:2px solid var(--bl)}",
  map: '{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script context=\\"module\\" lang=\\"ts\\">export const prerender = true;\\r\\n</script>\\n\\n<script>\\n\\timport {data} from \\"../stores/store.js\\"\\n\\t\\n\\tlet date = new Date();\\n\\tlet day = date.getDay();\\n\\t\\n\\n\\tconst arr = $data.map((element) => {\\n\\treturn {...element, weekdays: element.weekdays.filter((weekdays) => weekdays.day === day)}\\n\\t}).filter((item)=>{ return item.weekdays.length !== 0   })\\n\\n\\t\\n\\tconst todaycrs = arr.map((element) => {\\n\\t\\tlet time = \\"\\"\\n\\t\\telement.weekdays.forEach((weekdays) => time = weekdays.initialTime.substring(0,2));      \\n\\t\\treturn {...element, time}\\n\\t}).sort((a,b)=>{\\n\\t\\treturn a.time.localeCompare(b.time)\\n\\t}).map((item)=>{\\n\\t\\treturn item\\n\\t})\\n\\n</script>\\n\\n\\n<article>\\n\\t\\t\\n\\t<div class=\\"content\\">\\n\\t<header>\\n\\t\\t<p>TODAYS CLASSES</p>\\n\\t\\t<p>{date.getHours()} : {date.getMinutes()}<p>\\n\\t</header>\\n\\t<main>\\n\\t{#if todaycrs.length === 0}\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t<h1>No Course Avalable For <strong>{date.toLocaleDateString(\\"en-US\\", {weekday: \\"long\\"}).toUpperCase()}</strong></h1>\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\"><defs><clipPath id=\\"a\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/></clipPath></defs><g clip-path=\\"url(#a)\\"><path d=\\"M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM9.1,12.2H6.9V10.3H9.2v1.9Zm.1-7.4L8.6,9.2H7.4L6.8,4.8v-1H9.3v1Z\\" fill=\\"#707070\\"/></g></svg>\\n\\t\\t\\t</div>\\n\\t\\t\\t\\n\\n\\t\\t</div>\\n\\t{/if}\\n\\t{#each todaycrs as crs}\\n\\t\\t<div class=\\"card\\">\\n\\t\\t\\t<div class=\\"title\\">\\n\\t\\t\\t\\t<h1>{crs.course.toUpperCase()}</h1>\\n\\n\\t\\t\\t\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"16\\" height=\\"16\\" viewBox=\\"0 0 16 16\\"><defs><clipPath id=\\"a\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/></clipPath></defs><g clip-path=\\"url(#a)\\"><path d=\\"M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM9.1,12.2H6.9V10.3H9.2v1.9Zm.1-7.4L8.6,9.2H7.4L6.8,4.8v-1H9.3v1Z\\" fill=\\"#707070\\"/></g></svg>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t{#each crs.weekdays as rc}\\n\\t\\t\\t\\t\\t<p>{rc.initialTime} | {rc.finalTime}</p>\\n\\t\\t\\t\\t\\t<p class=\\"p-2\\" >{rc.hours}\\tHOURS</p>\\n\\t\\t\\t\\t\\t<p >{rc.location.toUpperCase()}</p>\\t\\n\\t\\t\\t\\t\\t<div class=\\"space\\">____</div>\\t\\t\\t\\t\\n\\t\\t\\t\\t{/each}\\t\\t\\t\\t\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{/each}\\n\\t</main>\\n\\t</div>\\n</article>\\n\\n\\n\\n<style lang=\\"scss\\">article {\\n  background: var(--bc);\\n  min-height: 100vh;\\n}\\narticle .content {\\n  padding-top: 14vh;\\n}\\narticle .content main {\\n  padding: 10px;\\n  padding-bottom: 100px;\\n}\\narticle .content main .card {\\n  padding: 5px 10px;\\n  margin: 15px 0px;\\n  background-color: var(--fb);\\n  box-shadow: #00000017 3px 2px 5px 2px;\\n}\\narticle .content main .card .title {\\n  display: flex;\\n  line-height: 25px;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\narticle .content main .card .title h1 {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 1rem;\\n  font-weight: 550;\\n}\\narticle .content main .card .details {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.75rem;\\n  font-weight: 800;\\n  padding-top: 30px;\\n}\\narticle .content main .card .details p {\\n  margin: 0;\\n}\\narticle .content main .card .details .space {\\n  padding: 10px;\\n  color: var(--bl);\\n}\\narticle .content main .card .details .p-2 {\\n  margin: 6px 0px;\\n}\\narticle .content header {\\n  padding: 0px 10px;\\n  text-align: end;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.89rem;\\n  font-weight: 800;\\n  border-right: 2px solid var(--bl);\\n}</style>"],"names":[],"mappings":"AAsEmB,OAAO,4BAAC,CAAC,AAC1B,UAAU,CAAE,IAAI,IAAI,CAAC,CACrB,UAAU,CAAE,KAAK,AACnB,CAAC,AACD,qBAAO,CAAC,QAAQ,cAAC,CAAC,AAChB,WAAW,CAAE,IAAI,AACnB,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,IAAI,cAAC,CAAC,AACrB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,KAAK,AACvB,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,IAAI,CAAC,KAAK,cAAC,CAAC,AAC3B,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,gBAAgB,CAAE,IAAI,IAAI,CAAC,CAC3B,UAAU,CAAE,SAAS,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,AACvC,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,IAAI,CAAC,KAAK,CAAC,MAAM,cAAC,CAAC,AAClC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,AACrB,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,EAAE,cAAC,CAAC,AACrC,WAAW,CAAE,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACjD,sBAAsB,CAAE,WAAW,CACnC,uBAAuB,CAAE,SAAS,CAClC,KAAK,CAAE,IAAI,IAAI,CAAC,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AAClB,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,IAAI,CAAC,KAAK,CAAC,QAAQ,cAAC,CAAC,AACpC,WAAW,CAAE,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACjD,sBAAsB,CAAE,WAAW,CACnC,uBAAuB,CAAE,SAAS,CAClC,KAAK,CAAE,IAAI,IAAI,CAAC,CAChB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,IAAI,AACnB,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,CAAC,cAAC,CAAC,AACtC,MAAM,CAAE,CAAC,AACX,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,MAAM,cAAC,CAAC,AAC3C,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,IAAI,CAAC,AAClB,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,IAAI,CAAC,KAAK,CAAC,QAAQ,CAAC,IAAI,cAAC,CAAC,AACzC,MAAM,CAAE,GAAG,CAAC,GAAG,AACjB,CAAC,AACD,qBAAO,CAAC,QAAQ,CAAC,MAAM,cAAC,CAAC,AACvB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,UAAU,CAAE,GAAG,CACf,WAAW,CAAE,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACjD,sBAAsB,CAAE,WAAW,CACnC,uBAAuB,CAAE,SAAS,CAClC,KAAK,CAAE,IAAI,IAAI,CAAC,CAChB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,GAAG,CAChB,YAAY,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,IAAI,CAAC,AACnC,CAAC"}'
};
var prerender = true;
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  let date = new Date();
  let day = date.getDay();
  const arr = $data.map((element) => {
    return {
      ...element,
      weekdays: element.weekdays.filter((weekdays) => weekdays.day === day)
    };
  }).filter((item) => {
    return item.weekdays.length !== 0;
  });
  const todaycrs = arr.map((element) => {
    let time = "";
    element.weekdays.forEach((weekdays) => time = weekdays.initialTime.substring(0, 2));
    return {...element, time};
  }).sort((a, b) => {
    return a.time.localeCompare(b.time);
  }).map((item) => {
    return item;
  });
  $$result.css.add(css$4);
  $$unsubscribe_data();
  return `<article class="${"svelte-x39f4e"}"><div class="${"content svelte-x39f4e"}"><header class="${"svelte-x39f4e"}"><p class="${"svelte-x39f4e"}">TODAYS CLASSES</p>
		<p class="${"svelte-x39f4e"}">${escape2(date.getHours())} : ${escape2(date.getMinutes())}</p><p class="${"svelte-x39f4e"}"></p></header>
	<main class="${"svelte-x39f4e"}">${todaycrs.length === 0 ? `<div class="${"card svelte-x39f4e"}"><div class="${"title svelte-x39f4e"}"><h1 class="${"svelte-x39f4e"}">No Course Avalable For <strong>${escape2(date.toLocaleDateString("en-US", {weekday: "long"}).toUpperCase())}</strong></h1>
				
				<svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 16 16"}"><defs><clipPath id="${"a"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}"></rect></clipPath></defs><g clip-path="${"url(#a)"}"><path d="${"M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM9.1,12.2H6.9V10.3H9.2v1.9Zm.1-7.4L8.6,9.2H7.4L6.8,4.8v-1H9.3v1Z"}" fill="${"#707070"}"></path></g></svg></div></div>` : ``}
	${each(todaycrs, (crs) => `<div class="${"card svelte-x39f4e"}"><div class="${"title svelte-x39f4e"}"><h1 class="${"svelte-x39f4e"}">${escape2(crs.course.toUpperCase())}</h1>

				<svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"16"}" height="${"16"}" viewBox="${"0 0 16 16"}"><defs><clipPath id="${"a"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}"></rect></clipPath></defs><g clip-path="${"url(#a)"}"><path d="${"M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM9.1,12.2H6.9V10.3H9.2v1.9Zm.1-7.4L8.6,9.2H7.4L6.8,4.8v-1H9.3v1Z"}" fill="${"#707070"}"></path></g></svg></div>
			<div class="${"details svelte-x39f4e"}">${each(crs.weekdays, (rc) => `<p class="${"svelte-x39f4e"}">${escape2(rc.initialTime)} | ${escape2(rc.finalTime)}</p>
					<p class="${"p-2 svelte-x39f4e"}">${escape2(rc.hours)}	HOURS</p>
					<p class="${"svelte-x39f4e"}">${escape2(rc.location.toUpperCase())}</p>	
					<div class="${"space svelte-x39f4e"}">____</div>`)}</div>
		</div>`)}</main></div>
</article>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes,
  prerender
});
var css$3 = {
  code: "article.svelte-1408vvg.svelte-1408vvg{min-height:100vh;background:var(--bc)}article.svelte-1408vvg .clip.svelte-1408vvg{clip-path:circle(1500px) !important;-webkit-clip-path:circle(1500px) !important;transition:all 0.5s linear}article.svelte-1408vvg form.svelte-1408vvg{position:fixed;background:var(--bc);top:0;height:100vh;z-index:100;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;clip-path:circle(0);-webkit-clip-path:circle(0);transition:all 0.5s ease}article.svelte-1408vvg form .warn.svelte-1408vvg{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.87rem;font-weight:400;background:rgba(255, 0, 0, 0.131);width:100%;padding:15px 0px;text-align:center}article.svelte-1408vvg form .fm.svelte-1408vvg{margin:20px;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}article.svelte-1408vvg form input.svelte-1408vvg,article.svelte-1408vvg form button.svelte-1408vvg{width:95%;height:50px;margin:20px 0px}article.svelte-1408vvg form input.svelte-1408vvg:focus,article.svelte-1408vvg form button.svelte-1408vvg:focus{outline:none}article.svelte-1408vvg form button.svelte-1408vvg{background:var(--bl);opacity:50%;border:none;color:var(--lc)}article.svelte-1408vvg form .done.svelte-1408vvg{position:absolute;top:0;left:10px;width:50%;background:var(--bc);color:var(--bl);border:var(--bl) solid 1px}article.svelte-1408vvg form input.svelte-1408vvg{border:none;background:var(--fb);border-right:var(--bl) solid 1px}article.svelte-1408vvg .content main.svelte-1408vvg{padding-top:40vh;padding-bottom:10vh}article.svelte-1408vvg .content main table.svelte-1408vvg{width:100%}article.svelte-1408vvg .content header.svelte-1408vvg{padding-top:14vh;position:fixed;background:var(--bc);left:0;width:100%}article.svelte-1408vvg .content header .details.svelte-1408vvg{border-left:var(--bl) solid 2px;padding-left:10px;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.65rem;font-weight:800}article.svelte-1408vvg .content header .add-reminder .add.svelte-1408vvg{display:flex;align-items:center;margin-left:auto;width:50%}article.svelte-1408vvg .content header .add-reminder .add p.svelte-1408vvg{padding:0px 10px;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bl);font-size:0.9rem;font-weight:400}",
  map: '{"version":3,"file":"reminder.svelte","sources":["reminder.svelte"],"sourcesContent":["<script>\\r\\n    class UuidCls{\\r\\n\\r\\n        static idOne() {\\r\\n\\r\\n            const str = \'abcdefghijklm\';\\r\\n            const num = Math.floor(Math.random() * 13);\\r\\n            const strNum = num - 1\\r\\n\\r\\n            const subStr = str.substring(strNum, num);\\r\\n            const idNum = Math.floor(Math.random() * 9);\\r\\n\\r\\n            return `${subStr}${idNum}`\\r\\n\\r\\n        };\\r\\n        static idTwo() {\\r\\n\\r\\n            const str = \'nopqrstuvwxyz\';\\r\\n            const num = Math.floor(Math.random() * 13);\\r\\n            const strNum = num - 1\\r\\n\\r\\n            const subStr = str.substring(strNum, num);\\r\\n            const idNum = Math.floor(Math.random() * 9);\\r\\n\\r\\n            return `${subStr}${idNum}`\\r\\n\\r\\n        };\\r\\n        static uuid() {\\r\\n            const idOne = UuidCls.idOne();\\r\\n            const idTwo = UuidCls.idTwo();\\r\\n\\r\\n            const id  = `${idOne}${idTwo}`;\\r\\n\\r\\n\\r\\n\\r\\n            if (id.length == 3) {\\r\\n\\r\\n                const num = `${Math.floor(Math.random() * 9)}`;\\r\\n\\r\\n                const idMod = id + num ;\\r\\n\\r\\n                return idMod;\\r\\n\\r\\n            }else if(id.length == 2){\\r\\n\\r\\n                const numM1 = `${Math.floor(Math.random() * 9)}`;\\r\\n                const numM2 = `${Math.floor(Math.random() * 9)}`;\\r\\n\\r\\n                const idMod2 = id + numM1 + numM2 ;\\r\\n\\r\\n                return idMod2;\\r\\n\\r\\n                \\r\\n            }else{\\r\\n                return id;\\r\\n            };\\r\\n        };\\r\\n    };\\r\\n\\r\\n    ///storage\\r\\n    class Store{\\r\\n\\r\\n        static getreminder(key){\\r\\n            let reminder;\\r\\n            if(localStorage.getItem(`${key}`) === null){\\r\\n                reminder = localStorage.setItem(`${key}`, \'[]\');\\r\\n            }else{\\r\\n                reminder = JSON.parse(localStorage.getItem(`${key}`));\\r\\n            }\\r\\n            return reminder;\\r\\n        };\\r\\n        static addreminder(reminderdata, key){\\r\\n            const reminders = Store.getreminder(key); \\r\\n            const pusharray = [...reminders, reminderdata] \\r\\n\\r\\n\\r\\n            localStorage.setItem(`${key}`, JSON.stringify(pusharray));\\r\\n\\r\\n        };\\r\\n        static deletereminder(id, key){\\r\\n            const reminders = Store.getreminder(key);\\r\\n\\r\\n            reminders.forEach(function(item, index) {\\r\\n                if(item.id == id) {\\r\\n                    reminders.splice(index, 1);\\r\\n                }\\r\\n            });\\r\\n\\r\\n            localStorage.setItem(`${key}`, JSON.stringify(reminders));\\r\\n        };\\r\\n\\r\\n    };\\r\\n    //ui class\\r\\n\\r\\n    class Ui{\\r\\n        static displayreminder(){\\r\\n            const store = Store.getreminder(\\"rmndkey\\")\\r\\n\\r\\n            store.forEach((item)=>{\\r\\n                Ui.addreminder(item)\\r\\n            })\\r\\n\\r\\n        }\\r\\n        static addreminder(item){\\r\\n            const list = document.querySelector(\'#table\');\\r\\n\\r\\n            const row = document.createElement(\'tr\');\\r\\n            row.classList.add(\\"tablerow\\")\\r\\n\\r\\n            row.innerHTML = `<td class=\\"tabledata\\">               \\r\\n                                <h1 class=\\"tabletitle\\">${item.subject}</h1>\\r\\n                                <p class=\\"com\\">${item.note}</p>                                \\r\\n                                <p class=\\"com\\">${item.startTime}</p>\\r\\n                                <p class=\\"com\\">${item.location}</p>\\r\\n                            </td>\\r\\n                            <td class=\\"delete\\">${item.id}</td>\\r\\n                             `;\\r\\n\\r\\n            list.appendChild(row);\\r\\n\\r\\n        }\\r\\n        static deletereminder(element) {\\r\\n\\r\\n            if(element.classList.contains(\'delete\')) {\\r\\n                element.parentElement.remove();\\r\\n\\r\\n            };\\r\\n            \\r\\n\\r\\n\\r\\n        };\\r\\n\\r\\n    }\\r\\n\\r\\n    \\r\\n \\r\\n    class RemindObj{\\r\\n        constructor(sub, tim, loc, not) {\\r\\n            this.id = UuidCls.uuid();\\r\\n            this.subject = sub;\\r\\n            this.startTime = tim;\\r\\n            this.location = loc;\\r\\n            this.note = not;\\r\\n            this.time = new Date().toLocaleTimeString();\\r\\n            this.date= new Date().toLocaleDateString();\\r\\n        }\\r\\n    }\\r\\n    \\r\\n    let s = \\"\\";\\r\\n    let t = \\"\\";\\r\\n    let l = \\"\\";\\r\\n    let n = \\"\\";\\r\\n    \\r\\n    $: error = false;\\r\\n    $: errortxt = \\"\\";\\r\\n    //events\\r\\n    document.addEventListener(\\"DOMContentLoaded\\", Ui.displayreminder)\\r\\n\\r\\n    function removeEvent(e) {\\r\\n        Ui.deletereminder(e.target)\\r\\n        Store.deletereminder(e.target.textContent, \\"rmndkey\\");\\r\\n    }\\r\\n\\r\\n    function addEvent(e) { \\r\\n        e.preventDefault()              \\r\\n        // validate \\r\\n        if(s === \'\'){\\r\\n            error= true\\r\\n            errortxt = \'SUBJECT CAN NOT BE EMPTY\';\\r\\n    \\r\\n            setTimeout(function(){\\r\\n                errortxt = \\"\\"\\r\\n                error = false\\r\\n            }, 3000);\\r\\n    \\r\\n        }else{\\r\\n    \\r\\n        \\r\\n        \\r\\n    \\r\\n            // instatiate topic\\r\\n    \\r\\n            const reminderobject = new RemindObj(s,t,l,n);\\r\\n            console.log(reminderobject);\\r\\n    \\r\\n            //add to \\r\\n            Ui.addreminder(reminderobject)\\r\\n            Store.addreminder(reminderobject, \\"rmndkey\\")\\r\\n            errortxt = \'REMINDER ADDED\';\\r\\n    \\r\\n    \\r\\n    \\r\\n            // clear filds\\r\\n                \\r\\n            setTimeout(function(){\\r\\n                errortxt=\\"\\";\\r\\n                s = \\"\\";\\r\\n            }, 3000);\\r\\n\\r\\n        }\\r\\n            \\r\\n\\r\\n    };\\r\\n       \\r\\n\\r\\n    let date = new Date();\\r\\n    $: clip = false;\\r\\n</script>\\r\\n<article>\\r\\n    <form class:clip={clip}>\\r\\n        <div id=\\"warn\\" style=\\"width:100%\\" class:warn={error}>{errortxt}</div>\\r\\n        <div class=\\"fm\\">\\r\\n            <button on:click={()=>{clip = !clip}} class=\\"done\\">DONE</button>\\r\\n            <input type=\\"text\\" bind:value={s} placeholder=\\"SUBJECT\\">\\r\\n            <input type=\\"text\\" bind:value={t} placeholder=\\"START TIME\\">\\r\\n            <input type=\\"text\\" bind:value={l} placeholder=\\"LOCATION\\">\\r\\n            <input type=\\"text\\"bind:value={n}  placeholder=\\"NOTE\\">\\r\\n            <button on:click={addEvent} class=\\"button btn\\">SUBMIT</button>\\r\\n        </div>\\r\\n    </form>\\r\\n    <div class=\\"content\\">\\r\\n        <header>\\r\\n            <div class=\\"details\\">\\r\\n                <div class=\\"title\\">\\r\\n                    <p>REMENDERS</p>\\r\\n                </div>\\r\\n                <div class=\\"dates\\">\\r\\n                    <p>AUGUST</p>\\r\\n                    <p>{date.getHours()} : {date.getMinutes()}</p>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div on:click={() => {clip = !clip}} class=\\"add-reminder\\">\\r\\n                <div class=\\"add\\">\\r\\n                    <p>ADD REMINDER</p>\\r\\n                    <svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\"><defs><clipPath id=\\"a\\"><rect width=\\"16\\" height=\\"15.999\\" fill=\\"none\\"/></clipPath></defs><g transform=\\"translate(-309 -221)\\"><rect width=\\"40\\" height=\\"40\\" rx=\\"20\\" transform=\\"translate(309 221)\\" fill=\\"rgba(38,153,251,0.38)\\"/><g transform=\\"translate(321 233)\\" clip-path=\\"url(#a)\\"><path d=\\"M-4613,16V9h-7V7h7V0h2V7h7V9h-7v7Z\\" transform=\\"translate(4620)\\" fill=\\"#fff\\"/></g></g></svg>\\r\\n                </div>\\r\\n            </div>\\r\\n        </header>\\r\\n        <main>\\r\\n            <table>\\r\\n                <tbody on:click={removeEvent} id=\\"table\\">\\r\\n                    \\r\\n\\r\\n                \\r\\n                   \\r\\n                </tbody>\\r\\n            </table>\\r\\n        </main>\\r\\n    </div>\\r\\n</article>\\r\\n\\r\\n\\r\\n\\r\\n<style lang=\\"scss\\">article {\\n  min-height: 100vh;\\n  background: var(--bc);\\n}\\narticle .clip {\\n  clip-path: circle(1500px) !important;\\n  -webkit-clip-path: circle(1500px) !important;\\n  transition: all 0.5s linear;\\n}\\narticle form {\\n  position: fixed;\\n  background: var(--bc);\\n  top: 0;\\n  height: 100vh;\\n  z-index: 100;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  clip-path: circle(0);\\n  -webkit-clip-path: circle(0);\\n  transition: all 0.5s ease;\\n}\\narticle form .warn {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.87rem;\\n  font-weight: 400;\\n  background: rgba(255, 0, 0, 0.131);\\n  width: 100%;\\n  padding: 15px 0px;\\n  text-align: center;\\n}\\narticle form .fm {\\n  margin: 20px;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\narticle form input,\\narticle form button {\\n  width: 95%;\\n  height: 50px;\\n  margin: 20px 0px;\\n}\\narticle form input:focus,\\narticle form button:focus {\\n  outline: none;\\n}\\narticle form button {\\n  background: var(--bl);\\n  opacity: 50%;\\n  border: none;\\n  color: var(--lc);\\n}\\narticle form .done {\\n  position: absolute;\\n  top: 0;\\n  left: 10px;\\n  width: 50%;\\n  background: var(--bc);\\n  color: var(--bl);\\n  border: var(--bl) solid 1px;\\n}\\narticle form input {\\n  border: none;\\n  background: var(--fb);\\n  border-right: var(--bl) solid 1px;\\n}\\narticle .content main {\\n  padding-top: 40vh;\\n  padding-bottom: 10vh;\\n}\\narticle .content main table {\\n  width: 100%;\\n}\\narticle .content header {\\n  padding-top: 14vh;\\n  position: fixed;\\n  background: var(--bc);\\n  left: 0;\\n  width: 100%;\\n}\\narticle .content header .details {\\n  border-left: var(--bl) solid 2px;\\n  padding-left: 10px;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.65rem;\\n  font-weight: 800;\\n}\\narticle .content header .add-reminder .add {\\n  display: flex;\\n  align-items: center;\\n  margin-left: auto;\\n  width: 50%;\\n}\\narticle .content header .add-reminder .add p {\\n  padding: 0px 10px;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--bl);\\n  font-size: 0.9rem;\\n  font-weight: 400;\\n}</style>"],"names":[],"mappings":"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"}'
};
var Reminder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let error22;
  let errortxt;
  let clip;
  class Store {
    static getreminder(key) {
      let reminder2;
      if (localStorage.getItem(`${key}`) === null) {
        reminder2 = localStorage.setItem(`${key}`, "[]");
      } else {
        reminder2 = JSON.parse(localStorage.getItem(`${key}`));
      }
      return reminder2;
    }
    static addreminder(reminderdata, key) {
      const reminders = Store.getreminder(key);
      const pusharray = [...reminders, reminderdata];
      localStorage.setItem(`${key}`, JSON.stringify(pusharray));
    }
    static deletereminder(id, key) {
      const reminders = Store.getreminder(key);
      reminders.forEach(function(item, index2) {
        if (item.id == id) {
          reminders.splice(index2, 1);
        }
      });
      localStorage.setItem(`${key}`, JSON.stringify(reminders));
    }
  }
  class Ui {
    static displayreminder() {
      const store = Store.getreminder("rmndkey");
      store.forEach((item) => {
        Ui.addreminder(item);
      });
    }
    static addreminder(item) {
      const list = document.querySelector("#table");
      const row = document.createElement("tr");
      row.classList.add("tablerow");
      row.innerHTML = `<td class="tabledata">               
                                <h1 class="tabletitle">${item.subject}</h1>
                                <p class="com">${item.note}</p>                                
                                <p class="com">${item.startTime}</p>
                                <p class="com">${item.location}</p>
                            </td>
                            <td class="delete">${item.id}</td>
                             `;
      list.appendChild(row);
    }
    static deletereminder(element) {
      if (element.classList.contains("delete")) {
        element.parentElement.remove();
      }
    }
  }
  let s2 = "";
  let t = "";
  let l = "";
  let n = "";
  document.addEventListener("DOMContentLoaded", Ui.displayreminder);
  let date = new Date();
  $$result.css.add(css$3);
  error22 = false;
  errortxt = "";
  clip = false;
  return `<article class="${"svelte-1408vvg"}"><form class="${["svelte-1408vvg", clip ? "clip" : ""].join(" ").trim()}"><div id="${"warn"}" style="${"width:100%"}" class="${["svelte-1408vvg", error22 ? "warn" : ""].join(" ").trim()}">${escape2(errortxt)}</div>
        <div class="${"fm svelte-1408vvg"}"><button class="${"done svelte-1408vvg"}">DONE</button>
            <input type="${"text"}" placeholder="${"SUBJECT"}" class="${"svelte-1408vvg"}"${add_attribute("value", s2, 1)}>
            <input type="${"text"}" placeholder="${"START TIME"}" class="${"svelte-1408vvg"}"${add_attribute("value", t, 1)}>
            <input type="${"text"}" placeholder="${"LOCATION"}" class="${"svelte-1408vvg"}"${add_attribute("value", l, 1)}>
            <input type="${"text"}" placeholder="${"NOTE"}" class="${"svelte-1408vvg"}"${add_attribute("value", n, 1)}>
            <button class="${"button btn svelte-1408vvg"}">SUBMIT</button></div></form>
    <div class="${"content"}"><header class="${"svelte-1408vvg"}"><div class="${"details svelte-1408vvg"}"><div class="${"title"}"><p class="${"svelte-1408vvg"}">REMENDERS</p></div>
                <div class="${"dates"}"><p class="${"svelte-1408vvg"}">AUGUST</p>
                    <p class="${"svelte-1408vvg"}">${escape2(date.getHours())} : ${escape2(date.getMinutes())}</p></div></div>
            <div class="${"add-reminder"}"><div class="${"add svelte-1408vvg"}"><p class="${"svelte-1408vvg"}">ADD REMINDER</p>
                    <svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"40"}" height="${"40"}" viewBox="${"0 0 40 40"}"><defs><clipPath id="${"a"}"><rect width="${"16"}" height="${"15.999"}" fill="${"none"}"></rect></clipPath></defs><g transform="${"translate(-309 -221)"}"><rect width="${"40"}" height="${"40"}" rx="${"20"}" transform="${"translate(309 221)"}" fill="${"rgba(38,153,251,0.38)"}"></rect><g transform="${"translate(321 233)"}" clip-path="${"url(#a)"}"><path d="${"M-4613,16V9h-7V7h7V0h2V7h7V9h-7v7Z"}" transform="${"translate(4620)"}" fill="${"#fff"}"></path></g></g></svg></div></div></header>
        <main class="${"svelte-1408vvg"}"><table class="${"svelte-1408vvg"}"><tbody id="${"table"}"></tbody></table></main></div>
</article>`;
});
var reminder = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Reminder
});
var css$2 = {
  code: "article.svelte-8wfip.svelte-8wfip{background:var(--bc);min-height:100vh;position:fixed;z-index:150;width:100%;top:0}article.svelte-8wfip .content.svelte-8wfip{padding-top:5vh}article.svelte-8wfip .content main .main ul.svelte-8wfip{padding:0;margin:0}article.svelte-8wfip .content main .main ul p.svelte-8wfip{padding:10px;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bl);font-size:0.95rem;font-weight:200;background:var(--fb);border-radius:8px;margin:10px;box-shadow:rgba(0, 0, 0, 0.315) 3px 4px 4px 3px}article.svelte-8wfip .content main .main ul li.svelte-8wfip{list-style:none;padding:5px}article.svelte-8wfip .content main .main ul li h1.svelte-8wfip{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bl);font-size:1rem;font-weight:500}article.svelte-8wfip .content main .main ul li a.svelte-8wfip{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.95rem;font-weight:500;text-decoration:none;padding:10px}article.svelte-8wfip .content main .main ul li svg.svelte-8wfip{padding:10px}article.svelte-8wfip .content header .head.svelte-8wfip{display:flex;align-items:center;flex-direction:column;justify-content:center;text-align:center}article.svelte-8wfip .content header .head h1.svelte-8wfip{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:1rem;font-weight:500}article.svelte-8wfip .content header .head h2.svelte-8wfip{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.75rem;font-weight:800}article.svelte-8wfip .content header .head p.svelte-8wfip{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.85rem;font-weight:400;padding-top:15px}",
  map: '{"version":3,"file":"about.svelte","sources":["about.svelte"],"sourcesContent":["\\r\\n<article>\\r\\n    <div class=\\"content\\">\\r\\n        <header>\\r\\n            <div class=\\"head\\">\\r\\n                <a href=\\"/\\">                \\r\\n                    <div class=\\"logo\\">\\r\\n                        <img src=\\"assets/logo.png\\" width=\\"60px\\" alt=\\"logo\\">\\r\\n                    </div>\\r\\n                </a>\\r\\n                <div class=\\"head-content\\">\\r\\n                    <h1>BDEC TIME TABLE</h1>\\r\\n                    <h2>VERSION 1.0.1</h2>\\r\\n                    <p>\xA9 COPYRIGHT | 2021 BUTAO UX / UI DEV</p>\\r\\n                </div>\\r\\n            </div>\\r\\n        </header>\\r\\n\\r\\n        <main>\\r\\n            <div class=\\"main\\">\\r\\n\\r\\n                <ul>\\r\\n                    <li><h1>APP INFO</h1></li>\\r\\n                    <li><a href=\\"./readme.html\\">Read Me</a></li>\\r\\n                    <li><a href=\\"./licence.html\\">Licence</a></li>\\r\\n                </ul>\\r\\n                <ul>\\r\\n                    <li><h1>DEV</h1></li>\\r\\n                    <p>click the links below to get in touch with the development team</p>\\r\\n                    <li><a href=\\"mailto:peterethanbutao@gmail.com\\">peterethanbutao@gmail.com</a></li>\\r\\n                    <li><a href=\\"https://www.butaopeter.netlify.app\\">peterbutao.netlify.app</a></li>\\r\\n                    <li><a href=\\"tel://0880164455\\">0880164455</a></li>\\r\\n                </ul>\\r\\n                <ul>\\r\\n                    <li><h1>RATING</h1></li>\\r\\n                    <li><svg xmlns=\\"http://www.w3.org/2000/svg\\" xmlns:xlink=\\"http://www.w3.org/1999/xlink\\" width=\\"112\\" height=\\"16\\" viewBox=\\"0 0 112 16\\"><defs><clipPath id=\\"a\\"><rect width=\\"16\\" height=\\"16\\" fill=\\"none\\"/></clipPath><linearGradient id=\\"e\\" x1=\\"0.124\\" y1=\\"0.42\\" x2=\\"0.544\\" y2=\\"0.454\\" gradientUnits=\\"objectBoundingBox\\"><stop offset=\\"0\\" stop-color=\\"#2699fb\\"/><stop offset=\\"0.498\\" stop-color=\\"#175b95\\"/><stop offset=\\"1\\"/></linearGradient></defs><g transform=\\"translate(-54 -618)\\" opacity=\\"0.52\\"><g transform=\\"translate(54 618)\\" clip-path=\\"url(#a)\\"><path d=\\"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z\\" fill=\\"#2699fb\\"/><rect width=\\"16\\" height=\\"16\\" transform=\\"translate(0 0)\\" fill=\\"none\\"/></g><g transform=\\"translate(78 618)\\" clip-path=\\"url(#a)\\"><path d=\\"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z\\" fill=\\"#2699fb\\"/><rect width=\\"16\\" height=\\"16\\" transform=\\"translate(0 0)\\" fill=\\"none\\"/></g><g transform=\\"translate(102 618)\\" clip-path=\\"url(#a)\\"><path d=\\"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z\\" fill=\\"#2699fb\\"/><rect width=\\"16\\" height=\\"16\\" transform=\\"translate(0 0)\\" fill=\\"none\\"/></g><g transform=\\"translate(126 618)\\" clip-path=\\"url(#a)\\"><path d=\\"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z\\" fill=\\"url(#e)\\"/><rect width=\\"16\\" height=\\"16\\" transform=\\"translate(0 0)\\" fill=\\"none\\"/></g><g transform=\\"translate(150 618)\\" clip-path=\\"url(#a)\\"><path d=\\"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z\\"/><rect width=\\"16\\" height=\\"16\\" transform=\\"translate(0 0)\\" fill=\\"none\\"/></g></g></svg></li>\\r\\n                </ul>\\r\\n\\r\\n            </div>\\r\\n        </main>\\r\\n    </div>\\r\\n</article>\\r\\n\\r\\n\\r\\n<style lang=\\"scss\\">article {\\n  background: var(--bc);\\n  min-height: 100vh;\\n  position: fixed;\\n  z-index: 150;\\n  width: 100%;\\n  top: 0;\\n}\\narticle .content {\\n  padding-top: 5vh;\\n}\\narticle .content main .main ul {\\n  padding: 0;\\n  margin: 0;\\n}\\narticle .content main .main ul p {\\n  padding: 10px;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--bl);\\n  font-size: 0.95rem;\\n  font-weight: 200;\\n  background: var(--fb);\\n  border-radius: 8px;\\n  margin: 10px;\\n  box-shadow: rgba(0, 0, 0, 0.315) 3px 4px 4px 3px;\\n}\\narticle .content main .main ul li {\\n  list-style: none;\\n  padding: 5px;\\n}\\narticle .content main .main ul li h1 {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--bl);\\n  font-size: 1rem;\\n  font-weight: 500;\\n}\\narticle .content main .main ul li a {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.95rem;\\n  font-weight: 500;\\n  text-decoration: none;\\n  padding: 10px;\\n}\\narticle .content main .main ul li svg {\\n  padding: 10px;\\n}\\narticle .content header .head {\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  justify-content: center;\\n  text-align: center;\\n}\\narticle .content header .head h1 {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 1rem;\\n  font-weight: 500;\\n}\\narticle .content header .head h2 {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.75rem;\\n  font-weight: 800;\\n}\\narticle .content header .head p {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.85rem;\\n  font-weight: 400;\\n  padding-top: 15px;\\n}</style>"],"names":[],"mappings":"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"}'
};
var About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<article class="${"svelte-8wfip"}"><div class="${"content svelte-8wfip"}"><header><div class="${"head svelte-8wfip"}"><a href="${"/"}" class="${"svelte-8wfip"}"><div class="${"logo"}"><img src="${"assets/logo.png"}" width="${"60px"}" alt="${"logo"}"></div></a>
                <div class="${"head-content"}"><h1 class="${"svelte-8wfip"}">BDEC TIME TABLE</h1>
                    <h2 class="${"svelte-8wfip"}">VERSION 1.0.1</h2>
                    <p class="${"svelte-8wfip"}">\xA9 COPYRIGHT | 2021 BUTAO UX / UI DEV</p></div></div></header>

        <main><div class="${"main"}"><ul class="${"svelte-8wfip"}"><li class="${"svelte-8wfip"}"><h1 class="${"svelte-8wfip"}">APP INFO</h1></li>
                    <li class="${"svelte-8wfip"}"><a href="${"./readme.html"}" class="${"svelte-8wfip"}">Read Me</a></li>
                    <li class="${"svelte-8wfip"}"><a href="${"./licence.html"}" class="${"svelte-8wfip"}">Licence</a></li></ul>
                <ul class="${"svelte-8wfip"}"><li class="${"svelte-8wfip"}"><h1 class="${"svelte-8wfip"}">DEV</h1></li>
                    <p class="${"svelte-8wfip"}">click the links below to get in touch with the development team</p>
                    <li class="${"svelte-8wfip"}"><a href="${"mailto:peterethanbutao@gmail.com"}" class="${"svelte-8wfip"}">peterethanbutao@gmail.com</a></li>
                    <li class="${"svelte-8wfip"}"><a href="${"https://www.butaopeter.netlify.app"}" class="${"svelte-8wfip"}">peterbutao.netlify.app</a></li>
                    <li class="${"svelte-8wfip"}"><a href="${"tel://0880164455"}" class="${"svelte-8wfip"}">0880164455</a></li></ul>
                <ul class="${"svelte-8wfip"}"><li class="${"svelte-8wfip"}"><h1 class="${"svelte-8wfip"}">RATING</h1></li>
                    <li class="${"svelte-8wfip"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" width="${"112"}" height="${"16"}" viewBox="${"0 0 112 16"}" class="${"svelte-8wfip"}"><defs><clipPath id="${"a"}"><rect width="${"16"}" height="${"16"}" fill="${"none"}"></rect></clipPath><linearGradient id="${"e"}" x1="${"0.124"}" y1="${"0.42"}" x2="${"0.544"}" y2="${"0.454"}" gradientUnits="${"objectBoundingBox"}"><stop offset="${"0"}" stop-color="${"#2699fb"}"></stop><stop offset="${"0.498"}" stop-color="${"#175b95"}"></stop><stop offset="${"1"}"></stop></linearGradient></defs><g transform="${"translate(-54 -618)"}" opacity="${"0.52"}"><g transform="${"translate(54 618)"}" clip-path="${"url(#a)"}"><path d="${"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z"}" fill="${"#2699fb"}"></path><rect width="${"16"}" height="${"16"}" transform="${"translate(0 0)"}" fill="${"none"}"></rect></g><g transform="${"translate(78 618)"}" clip-path="${"url(#a)"}"><path d="${"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z"}" fill="${"#2699fb"}"></path><rect width="${"16"}" height="${"16"}" transform="${"translate(0 0)"}" fill="${"none"}"></rect></g><g transform="${"translate(102 618)"}" clip-path="${"url(#a)"}"><path d="${"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z"}" fill="${"#2699fb"}"></path><rect width="${"16"}" height="${"16"}" transform="${"translate(0 0)"}" fill="${"none"}"></rect></g><g transform="${"translate(126 618)"}" clip-path="${"url(#a)"}"><path d="${"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z"}" fill="${"url(#e)"}"></path><rect width="${"16"}" height="${"16"}" transform="${"translate(0 0)"}" fill="${"none"}"></rect></g><g transform="${"translate(150 618)"}" clip-path="${"url(#a)"}"><path d="${"M8,0l2.5,5,5.5.8L12,9.7l.9,5.5L8,12.6,3.1,15.2,4,9.7,0,5.8,5.5,5Z"}"></path><rect width="${"16"}" height="${"16"}" transform="${"translate(0 0)"}" fill="${"none"}"></rect></g></g></svg></li></ul></div></main></div>
</article>`;
});
var about = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": About
});
var css$1 = {
  code: "article.svelte-6skf6d.svelte-6skf6d{background:var(--tbc);min-height:100vh}article.svelte-6skf6d .time-t.svelte-6skf6d{padding-top:15vh;padding-bottom:10vh}table.svelte-6skf6d.svelte-6skf6d{border-spacing:2px;width:100%;padding:0px 3px;padding-bottom:20px}table.svelte-6skf6d thead tr.svelte-6skf6d{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:13.5px;font-weight:700}table.svelte-6skf6d thead tr th.svelte-6skf6d{width:50px !important;height:45px !important}table.svelte-6skf6d tbody tr.svelte-6skf6d{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:black;font-size:13px;font-weight:450;text-align:center;background-color:white}table.svelte-6skf6d tbody tr td.svelte-6skf6d{width:50px !important;height:45px !important}",
  map: '{"version":3,"file":"table.svelte","sources":["table.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n\\timport {data} from \\"../stores/store.js\\"\\r\\n\\t\\r\\n\\tlet date = new Date()\\r\\n   \\r\\n    function datarow( timeP, dayP){\\r\\n        \\r\\n        const store = $data.map(element => { return {...element, weekdays: element.weekdays.filter(weekdays => weekdays.initialTime == timeP)}}\\r\\n         ).filter(item =>{ return item.weekdays.length !== 0 })\\r\\n\\r\\n         let code = []\\r\\n        \\r\\n\\r\\n        store.forEach(item => {item.weekdays.forEach(element => {\\r\\n            if(dayP == element.day){\\r\\n                code = [...code, item.code.substring(0,3)]\\r\\n                \\r\\n            }\\r\\n\\r\\n        })})\\r\\n        return code\\r\\n    }\\r\\n\\r\\n  \\r\\n\\r\\n</script>\\r\\n\\r\\n\\r\\n<article id=\\"timetable\\">\\r\\n    <div class=\\"time-t\\">\\r\\n        <table class=\\"table\\">\\r\\n            <thead>\\r\\n                <tr>\\r\\n                    <th></th>\\r\\n                    <th>MON</th>\\r\\n                    <th>TUE</th>\\r\\n                    <th>WED</th>\\r\\n                    <th>THU</th>\\r\\n                    <th>FRI</th>\\r\\n                    <th>SAT</th>\\r\\n                    <th>SUN</th>\\r\\n                </tr>\\r\\n            </thead>\\r\\n            <tbody>\\r\\n                <tr>\\r\\n                    <td class=\\"h06\\" >6 : 00</td>\\r\\n                   <td class=\\"mo6\\" >{datarow(\\"06:00\\",1)}</td>\\r\\n                    <td class=\\"tu6\\">{datarow(\\"06:00\\",2)}</td>\\r\\n                    <td class=\\"we6\\">{datarow(\\"06:00\\",3)}</td>\\r\\n                    <td class=\\"th6\\">{datarow(\\"06:00\\",4)}</td>\\r\\n                    <td class=\\"fr6\\">{datarow(\\"06:00\\",5)}</td>\\r\\n                    <td class=\\"sa6\\"></td>\\r\\n                    <td class=\\"su6\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h07\\" >7 : 00</td>\\r\\n                    <td class=\\"mo7\\">{datarow(\\"07:00\\",1)}</td>\\r\\n                    <td class=\\"tu7\\">{datarow(\\"07:00\\",2)}</td>\\r\\n                    <td class=\\"we7\\">{datarow(\\"07:00\\",3)}</td>\\r\\n                    <td class=\\"th7\\">{datarow(\\"07:00\\",4)}</td>\\r\\n                    <td class=\\"fr7\\">{datarow(\\"07:00\\",5)}</td>\\r\\n                    <td class=\\"sa7\\"></td>\\r\\n                    <td class=\\"su7\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h08\\">8 : 00</td>\\r\\n                    <td class=\\"mo8\\">{datarow(\\"08:00\\",1)}</td>\\r\\n                    <td class=\\"tu8\\">{datarow(\\"08:00\\",2)}</td>\\r\\n                    <td class=\\"we8\\">{datarow(\\"08:00\\",3)}</td>\\r\\n              \\r\\n                    <td class=\\"th8\\">{datarow(\\"08:00\\",4)}</td>\\r\\n                    <td class=\\"fr8\\">{datarow(\\"08:00\\",5)}</td>\\r\\n                    <td class=\\"sa8\\"></td>\\r\\n                    <td class=\\"su8\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h09\\">9 : 00</td>\\r\\n                    <td class=\\"mo9\\">{datarow(\\"09:00\\",1)}</td>\\r\\n                    <td class=\\"tu9\\">{datarow(\\"09:00\\",2)}</td>\\r\\n                    <td class=\\"we9\\">{datarow(\\"09:00\\",3)}</td>\\r\\n                    <td class=\\"th9\\">{datarow(\\"09:00\\",4)}</td>\\r\\n                    <td class=\\"fr9\\">{datarow(\\"09:00\\",5)}</td>\\r\\n                    <td class=\\"sa9\\"></td>\\r\\n                    <td class=\\"su9\\"></td>\\r\\n\\r\\n                </tr>       \\r\\n                <tr>\\r\\n                    <td class=\\"h10\\">10:00</td>\\r\\n                    <td class=\\"mo10\\">{datarow(\\"10:00\\",1)}</td>\\r\\n                    <td class=\\"tu10\\">{datarow(\\"10:00\\",2)}</td>\\r\\n                    <td class=\\"we10\\">{datarow(\\"10:00\\",3)}</td>\\r\\n                    <td class=\\"th10\\">{datarow(\\"10:00\\",4)}</td>\\r\\n                    <td class=\\"fr10\\">{datarow(\\"10:00\\",5)}</td>\\r\\n                    <td class=\\"sa10\\"></td>\\r\\n                    <td class=\\"su10\\"></td>\\r\\n                    \\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h11\\">11:00</td>\\r\\n                    <td class=\\"mo11\\">{datarow(\\"11:00\\",1)}</td>\\r\\n                    <td class=\\"tu11\\">{datarow(\\"11:00\\",2)}</td>\\r\\n                    <td class=\\"we11\\">{datarow(\\"11:00\\",3)}</td>\\r\\n                    <td class=\\"th11\\">{datarow(\\"11:00\\",4)}</td>\\r\\n                    <td class=\\"fr11\\">{datarow(\\"11:00\\",5)}</td>\\r\\n                    <td class=\\"sa11\\"></td>\\r\\n                    <td class=\\"su11\\"></td>\\r\\n                </tr>\\r\\n\\r\\n                <tr>\\r\\n                    <td class=\\"h12\\">12:00</td>\\r\\n                    <td class=\\"mo12\\">{datarow(\\"12:00\\",1)}</td>\\r\\n                    <td class=\\"tu12\\">{datarow(\\"12:00\\",2)}</td>\\r\\n                    <td class=\\"we12\\">{datarow(\\"12:00\\",3)}</td>\\r\\n                    <td class=\\"th12\\">{datarow(\\"12:00\\",4)}</td>\\r\\n                    <td class=\\"fr12\\">{datarow(\\"12:00\\",5)}</td>\\r\\n                    <td class=\\"sa12\\"></td>\\r\\n                    <td class=\\"su12\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h12-50\\">12:50</td>\\r\\n                    <td class=\\"mo12-50\\"></td>\\r\\n                    <td class=\\"tu12-50\\"></td>\\r\\n                    <td class=\\"we12-50\\"></td>\\r\\n                    <td class=\\"th12-50\\"></td>\\r\\n                    <td class=\\"fr12-50\\"></td>\\r\\n                    <td class=\\"sa12-50\\"></td>\\r\\n                    <td class=\\"su12-50\\"></td>\\r\\n                </tr>\\r\\n             \\r\\n                <tr>\\r\\n                    <td>___</td>\\r\\n                    <td></td>\\r\\n                    <td class=\\"t_b12\\"></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h13\\">1 : 00</td>\\r\\n                    <td class=\\"mo13\\">{datarow(\\"13:00\\",1)}</td>\\r\\n                    <td class=\\"tu13\\">{datarow(\\"13:00\\",2)}</td>\\r\\n                    <td class=\\"we13\\">{datarow(\\"13:00\\",3)}</td>\\r\\n                    <td class=\\"th13\\">{datarow(\\"13:00\\",4)}</td>\\r\\n                    <td class=\\"fr13\\">{datarow(\\"13:00\\",5)}</td>\\r\\n                    <td class=\\"sa13\\"></td>\\r\\n                    <td class=\\"su13\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h14\\">2 : 00</td>\\r\\n                    <td class=\\"mo14\\">{datarow(\\"14:00\\",1)}</td>\\r\\n                    <td class=\\"tu14\\">{datarow(\\"14:00\\",2)}</td>\\r\\n                    <td class=\\"we14\\">{datarow(\\"14:00\\",3)}</td>\\r\\n                    <td class=\\"th14\\">{datarow(\\"14:00\\",4)}</td>\\r\\n                    <td class=\\"fr14\\">{datarow(\\"14:00\\",5)}</td>\\r\\n                    <td class=\\"sa14\\"></td>\\r\\n                    <td class=\\"su14\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h15\\">3 : 00</td>\\r\\n                    <td class=\\"mo15\\">{datarow(\\"15:00\\",1)}</td>\\r\\n                    <td class=\\"tu15\\">{datarow(\\"15:00\\",2)}</td>\\r\\n                    <td class=\\"we15\\">{datarow(\\"15:00\\",3)}</td>\\r\\n                    <td class=\\"th15\\">{datarow(\\"15:00\\",4)}</td>\\r\\n                    <td class=\\"fr15\\">{datarow(\\"15:00\\",5)}</td>\\r\\n                    <td class=\\"sa15\\"></td>\\r\\n                    <td class=\\"su15\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h16\\">4 : 00</td>\\r\\n                    <td class=\\"mo16\\">{datarow(\\"16:00\\",1)}</td>\\r\\n                    <td class=\\"tu16\\">{datarow(\\"16:00\\",2)}</td>\\r\\n                    <td class=\\"we16\\">{datarow(\\"16:00\\",3)}</td>\\r\\n                    <td class=\\"th16\\">{datarow(\\"16:00\\",4)}</td>\\r\\n                    <td class=\\"fr16\\">{datarow(\\"16:00\\",5)}</td>\\r\\n                    <td class=\\"sa16\\"></td>\\r\\n                    <td class=\\"su16\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h17\\">5 : 00</td>\\r\\n                    <td class=\\"mo17\\">{datarow(\\"17:00\\",1)}</td>\\r\\n                    <td class=\\"tu17\\">{datarow(\\"17:00\\",2)}</td>\\r\\n                    <td class=\\"we17\\">{datarow(\\"17:00\\",3)}</td>\\r\\n                    <td class=\\"th17\\">{datarow(\\"17:00\\",4)}</td>\\r\\n                    <td class=\\"fr17\\">{datarow(\\"17:00\\",5)}</td>\\r\\n                    <td class=\\"sa17\\"></td>\\r\\n                    <td class=\\"su17\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td class=\\"h18\\">6 : 00</td>\\r\\n                    <td class=\\"mo18\\">{datarow(\\"18:00\\",1)}</td>\\r\\n                    <td class=\\"tu18\\">{datarow(\\"18:00\\",2)}</td>\\r\\n                    <td class=\\"we18\\">{datarow(\\"18:00\\",3)}</td>\\r\\n                    <td class=\\"th18\\">{datarow(\\"18:00\\",4)}</td>\\r\\n                    <td class=\\"fr18\\">{datarow(\\"18:00\\",5)}</td>\\r\\n                    <td class=\\"sa18\\"></td>\\r\\n                    <td class=\\"su18\\"></td>\\r\\n                </tr>\\r\\n                <tr>\\r\\n                    <td>___</td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    <td></td>\\r\\n                    \\r\\n                </tr>\\r\\n\\r\\n                <!--night-->\\r\\n\\r\\n                <tr>\\r\\n                    <td class=\\"h20\\">8 : 00</td>\\r\\n                    <td class=\\"mo20\\"></td>\\r\\n                    <td class=\\"tu20\\"></td>\\r\\n                    <td class=\\"we20\\"></td>\\r\\n                    <td class=\\"th20\\"></td>\\r\\n                    <td class=\\"fr20\\"></td>\\r\\n                    <td class=\\"sa20\\"></td>\\r\\n                    <td class=\\"su20\\"></td>\\r\\n                </tr>\\r\\n               \\r\\n\\r\\n            </tbody>\\r\\n        </table>\\r\\n    </div>\\r\\n</article>  \\r\\n<style lang=\\"scss\\">article {\\n  background: var(--tbc);\\n  min-height: 100vh;\\n}\\narticle .time-t {\\n  padding-top: 15vh;\\n  padding-bottom: 10vh;\\n}\\n\\ntable {\\n  border-spacing: 2px;\\n  width: 100%;\\n  padding: 0px 3px;\\n  padding-bottom: 20px;\\n}\\ntable thead tr {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 13.5px;\\n  font-weight: 700;\\n}\\ntable thead tr th {\\n  width: 50px !important;\\n  height: 45px !important;\\n}\\ntable tbody tr {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: black;\\n  font-size: 13px;\\n  font-weight: 450;\\n  text-align: center;\\n  background-color: white;\\n}\\ntable tbody tr td {\\n  width: 50px !important;\\n  height: 45px !important;\\n}</style>"],"names":[],"mappings":"AAsOmB,OAAO,4BAAC,CAAC,AAC1B,UAAU,CAAE,IAAI,KAAK,CAAC,CACtB,UAAU,CAAE,KAAK,AACnB,CAAC,AACD,qBAAO,CAAC,OAAO,cAAC,CAAC,AACf,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,AACtB,CAAC,AAED,KAAK,4BAAC,CAAC,AACL,cAAc,CAAE,GAAG,CACnB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,GAAG,CAAC,GAAG,CAChB,cAAc,CAAE,IAAI,AACtB,CAAC,AACD,mBAAK,CAAC,KAAK,CAAC,EAAE,cAAC,CAAC,AACd,WAAW,CAAE,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACjD,sBAAsB,CAAE,WAAW,CACnC,uBAAuB,CAAE,SAAS,CAClC,KAAK,CAAE,IAAI,IAAI,CAAC,CAChB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,GAAG,AAClB,CAAC,AACD,mBAAK,CAAC,KAAK,CAAC,EAAE,CAAC,EAAE,cAAC,CAAC,AACjB,KAAK,CAAE,IAAI,CAAC,UAAU,CACtB,MAAM,CAAE,IAAI,CAAC,UAAU,AACzB,CAAC,AACD,mBAAK,CAAC,KAAK,CAAC,EAAE,cAAC,CAAC,AACd,WAAW,CAAE,MAAM,CAAC,CAAC,SAAS,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CACjD,sBAAsB,CAAE,WAAW,CACnC,uBAAuB,CAAE,SAAS,CAClC,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,KAAK,AACzB,CAAC,AACD,mBAAK,CAAC,KAAK,CAAC,EAAE,CAAC,EAAE,cAAC,CAAC,AACjB,KAAK,CAAE,IAAI,CAAC,UAAU,CACtB,MAAM,CAAE,IAAI,CAAC,UAAU,AACzB,CAAC"}'
};
var Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  function datarow(timeP, dayP) {
    const store = $data.map((element) => {
      return {
        ...element,
        weekdays: element.weekdays.filter((weekdays) => weekdays.initialTime == timeP)
      };
    }).filter((item) => {
      return item.weekdays.length !== 0;
    });
    let code = [];
    store.forEach((item) => {
      item.weekdays.forEach((element) => {
        if (dayP == element.day) {
          code = [...code, item.code.substring(0, 3)];
        }
      });
    });
    return code;
  }
  $$result.css.add(css$1);
  $$unsubscribe_data();
  return `<article id="${"timetable"}" class="${"svelte-6skf6d"}"><div class="${"time-t svelte-6skf6d"}"><table class="${"table svelte-6skf6d"}"><thead><tr class="${"svelte-6skf6d"}"><th class="${"svelte-6skf6d"}"></th>
                    <th class="${"svelte-6skf6d"}">MON</th>
                    <th class="${"svelte-6skf6d"}">TUE</th>
                    <th class="${"svelte-6skf6d"}">WED</th>
                    <th class="${"svelte-6skf6d"}">THU</th>
                    <th class="${"svelte-6skf6d"}">FRI</th>
                    <th class="${"svelte-6skf6d"}">SAT</th>
                    <th class="${"svelte-6skf6d"}">SUN</th></tr></thead>
            <tbody><tr class="${"svelte-6skf6d"}"><td class="${"h06 svelte-6skf6d"}">6 : 00</td>
                   <td class="${"mo6 svelte-6skf6d"}">${escape2(datarow("06:00", 1))}</td>
                    <td class="${"tu6 svelte-6skf6d"}">${escape2(datarow("06:00", 2))}</td>
                    <td class="${"we6 svelte-6skf6d"}">${escape2(datarow("06:00", 3))}</td>
                    <td class="${"th6 svelte-6skf6d"}">${escape2(datarow("06:00", 4))}</td>
                    <td class="${"fr6 svelte-6skf6d"}">${escape2(datarow("06:00", 5))}</td>
                    <td class="${"sa6 svelte-6skf6d"}"></td>
                    <td class="${"su6 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h07 svelte-6skf6d"}">7 : 00</td>
                    <td class="${"mo7 svelte-6skf6d"}">${escape2(datarow("07:00", 1))}</td>
                    <td class="${"tu7 svelte-6skf6d"}">${escape2(datarow("07:00", 2))}</td>
                    <td class="${"we7 svelte-6skf6d"}">${escape2(datarow("07:00", 3))}</td>
                    <td class="${"th7 svelte-6skf6d"}">${escape2(datarow("07:00", 4))}</td>
                    <td class="${"fr7 svelte-6skf6d"}">${escape2(datarow("07:00", 5))}</td>
                    <td class="${"sa7 svelte-6skf6d"}"></td>
                    <td class="${"su7 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h08 svelte-6skf6d"}">8 : 00</td>
                    <td class="${"mo8 svelte-6skf6d"}">${escape2(datarow("08:00", 1))}</td>
                    <td class="${"tu8 svelte-6skf6d"}">${escape2(datarow("08:00", 2))}</td>
                    <td class="${"we8 svelte-6skf6d"}">${escape2(datarow("08:00", 3))}</td>
              
                    <td class="${"th8 svelte-6skf6d"}">${escape2(datarow("08:00", 4))}</td>
                    <td class="${"fr8 svelte-6skf6d"}">${escape2(datarow("08:00", 5))}</td>
                    <td class="${"sa8 svelte-6skf6d"}"></td>
                    <td class="${"su8 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h09 svelte-6skf6d"}">9 : 00</td>
                    <td class="${"mo9 svelte-6skf6d"}">${escape2(datarow("09:00", 1))}</td>
                    <td class="${"tu9 svelte-6skf6d"}">${escape2(datarow("09:00", 2))}</td>
                    <td class="${"we9 svelte-6skf6d"}">${escape2(datarow("09:00", 3))}</td>
                    <td class="${"th9 svelte-6skf6d"}">${escape2(datarow("09:00", 4))}</td>
                    <td class="${"fr9 svelte-6skf6d"}">${escape2(datarow("09:00", 5))}</td>
                    <td class="${"sa9 svelte-6skf6d"}"></td>
                    <td class="${"su9 svelte-6skf6d"}"></td></tr>       
                <tr class="${"svelte-6skf6d"}"><td class="${"h10 svelte-6skf6d"}">10:00</td>
                    <td class="${"mo10 svelte-6skf6d"}">${escape2(datarow("10:00", 1))}</td>
                    <td class="${"tu10 svelte-6skf6d"}">${escape2(datarow("10:00", 2))}</td>
                    <td class="${"we10 svelte-6skf6d"}">${escape2(datarow("10:00", 3))}</td>
                    <td class="${"th10 svelte-6skf6d"}">${escape2(datarow("10:00", 4))}</td>
                    <td class="${"fr10 svelte-6skf6d"}">${escape2(datarow("10:00", 5))}</td>
                    <td class="${"sa10 svelte-6skf6d"}"></td>
                    <td class="${"su10 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h11 svelte-6skf6d"}">11:00</td>
                    <td class="${"mo11 svelte-6skf6d"}">${escape2(datarow("11:00", 1))}</td>
                    <td class="${"tu11 svelte-6skf6d"}">${escape2(datarow("11:00", 2))}</td>
                    <td class="${"we11 svelte-6skf6d"}">${escape2(datarow("11:00", 3))}</td>
                    <td class="${"th11 svelte-6skf6d"}">${escape2(datarow("11:00", 4))}</td>
                    <td class="${"fr11 svelte-6skf6d"}">${escape2(datarow("11:00", 5))}</td>
                    <td class="${"sa11 svelte-6skf6d"}"></td>
                    <td class="${"su11 svelte-6skf6d"}"></td></tr>

                <tr class="${"svelte-6skf6d"}"><td class="${"h12 svelte-6skf6d"}">12:00</td>
                    <td class="${"mo12 svelte-6skf6d"}">${escape2(datarow("12:00", 1))}</td>
                    <td class="${"tu12 svelte-6skf6d"}">${escape2(datarow("12:00", 2))}</td>
                    <td class="${"we12 svelte-6skf6d"}">${escape2(datarow("12:00", 3))}</td>
                    <td class="${"th12 svelte-6skf6d"}">${escape2(datarow("12:00", 4))}</td>
                    <td class="${"fr12 svelte-6skf6d"}">${escape2(datarow("12:00", 5))}</td>
                    <td class="${"sa12 svelte-6skf6d"}"></td>
                    <td class="${"su12 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h12-50 svelte-6skf6d"}">12:50</td>
                    <td class="${"mo12-50 svelte-6skf6d"}"></td>
                    <td class="${"tu12-50 svelte-6skf6d"}"></td>
                    <td class="${"we12-50 svelte-6skf6d"}"></td>
                    <td class="${"th12-50 svelte-6skf6d"}"></td>
                    <td class="${"fr12-50 svelte-6skf6d"}"></td>
                    <td class="${"sa12-50 svelte-6skf6d"}"></td>
                    <td class="${"su12-50 svelte-6skf6d"}"></td></tr>
             
                <tr class="${"svelte-6skf6d"}"><td class="${"svelte-6skf6d"}">___</td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"t_b12 svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h13 svelte-6skf6d"}">1 : 00</td>
                    <td class="${"mo13 svelte-6skf6d"}">${escape2(datarow("13:00", 1))}</td>
                    <td class="${"tu13 svelte-6skf6d"}">${escape2(datarow("13:00", 2))}</td>
                    <td class="${"we13 svelte-6skf6d"}">${escape2(datarow("13:00", 3))}</td>
                    <td class="${"th13 svelte-6skf6d"}">${escape2(datarow("13:00", 4))}</td>
                    <td class="${"fr13 svelte-6skf6d"}">${escape2(datarow("13:00", 5))}</td>
                    <td class="${"sa13 svelte-6skf6d"}"></td>
                    <td class="${"su13 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h14 svelte-6skf6d"}">2 : 00</td>
                    <td class="${"mo14 svelte-6skf6d"}">${escape2(datarow("14:00", 1))}</td>
                    <td class="${"tu14 svelte-6skf6d"}">${escape2(datarow("14:00", 2))}</td>
                    <td class="${"we14 svelte-6skf6d"}">${escape2(datarow("14:00", 3))}</td>
                    <td class="${"th14 svelte-6skf6d"}">${escape2(datarow("14:00", 4))}</td>
                    <td class="${"fr14 svelte-6skf6d"}">${escape2(datarow("14:00", 5))}</td>
                    <td class="${"sa14 svelte-6skf6d"}"></td>
                    <td class="${"su14 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h15 svelte-6skf6d"}">3 : 00</td>
                    <td class="${"mo15 svelte-6skf6d"}">${escape2(datarow("15:00", 1))}</td>
                    <td class="${"tu15 svelte-6skf6d"}">${escape2(datarow("15:00", 2))}</td>
                    <td class="${"we15 svelte-6skf6d"}">${escape2(datarow("15:00", 3))}</td>
                    <td class="${"th15 svelte-6skf6d"}">${escape2(datarow("15:00", 4))}</td>
                    <td class="${"fr15 svelte-6skf6d"}">${escape2(datarow("15:00", 5))}</td>
                    <td class="${"sa15 svelte-6skf6d"}"></td>
                    <td class="${"su15 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h16 svelte-6skf6d"}">4 : 00</td>
                    <td class="${"mo16 svelte-6skf6d"}">${escape2(datarow("16:00", 1))}</td>
                    <td class="${"tu16 svelte-6skf6d"}">${escape2(datarow("16:00", 2))}</td>
                    <td class="${"we16 svelte-6skf6d"}">${escape2(datarow("16:00", 3))}</td>
                    <td class="${"th16 svelte-6skf6d"}">${escape2(datarow("16:00", 4))}</td>
                    <td class="${"fr16 svelte-6skf6d"}">${escape2(datarow("16:00", 5))}</td>
                    <td class="${"sa16 svelte-6skf6d"}"></td>
                    <td class="${"su16 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h17 svelte-6skf6d"}">5 : 00</td>
                    <td class="${"mo17 svelte-6skf6d"}">${escape2(datarow("17:00", 1))}</td>
                    <td class="${"tu17 svelte-6skf6d"}">${escape2(datarow("17:00", 2))}</td>
                    <td class="${"we17 svelte-6skf6d"}">${escape2(datarow("17:00", 3))}</td>
                    <td class="${"th17 svelte-6skf6d"}">${escape2(datarow("17:00", 4))}</td>
                    <td class="${"fr17 svelte-6skf6d"}">${escape2(datarow("17:00", 5))}</td>
                    <td class="${"sa17 svelte-6skf6d"}"></td>
                    <td class="${"su17 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"h18 svelte-6skf6d"}">6 : 00</td>
                    <td class="${"mo18 svelte-6skf6d"}">${escape2(datarow("18:00", 1))}</td>
                    <td class="${"tu18 svelte-6skf6d"}">${escape2(datarow("18:00", 2))}</td>
                    <td class="${"we18 svelte-6skf6d"}">${escape2(datarow("18:00", 3))}</td>
                    <td class="${"th18 svelte-6skf6d"}">${escape2(datarow("18:00", 4))}</td>
                    <td class="${"fr18 svelte-6skf6d"}">${escape2(datarow("18:00", 5))}</td>
                    <td class="${"sa18 svelte-6skf6d"}"></td>
                    <td class="${"su18 svelte-6skf6d"}"></td></tr>
                <tr class="${"svelte-6skf6d"}"><td class="${"svelte-6skf6d"}">___</td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td>
                    <td class="${"svelte-6skf6d"}"></td></tr>

                

                <tr class="${"svelte-6skf6d"}"><td class="${"h20 svelte-6skf6d"}">8 : 00</td>
                    <td class="${"mo20 svelte-6skf6d"}"></td>
                    <td class="${"tu20 svelte-6skf6d"}"></td>
                    <td class="${"we20 svelte-6skf6d"}"></td>
                    <td class="${"th20 svelte-6skf6d"}"></td>
                    <td class="${"fr20 svelte-6skf6d"}"></td>
                    <td class="${"sa20 svelte-6skf6d"}"></td>
                    <td class="${"su20 svelte-6skf6d"}"></td></tr></tbody></table></div>
</article>`;
});
var table = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Table
});
var css = {
  code: "article.svelte-10rl4ak.svelte-10rl4ak{min-height:100vh;background:var(--bc);position:relative;z-index:150;width:100%;top:0;left:0}article.svelte-10rl4ak .content main.svelte-10rl4ak{padding-top:50vh;padding-bottom:10vh;background:var(--tbc)}article.svelte-10rl4ak .content main table.svelte-10rl4ak{width:100%}article.svelte-10rl4ak .content main table tbody tr.svelte-10rl4ak{background:var(--fb)}article.svelte-10rl4ak .content main table tbody tr td.svelte-10rl4ak{padding:0px 5px;margin:10px}article.svelte-10rl4ak .content main table tbody tr td h1.svelte-10rl4ak{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:1rem;font-weight:400}article.svelte-10rl4ak .content main table tbody tr td h2.svelte-10rl4ak{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--bl);font-size:0.75rem;font-weight:600}article.svelte-10rl4ak .content main table tbody tr td p.svelte-10rl4ak{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.95rem;font-weight:400;text-align:right}article.svelte-10rl4ak .content header.svelte-10rl4ak{padding-top:5vh;position:fixed;background:var(--bc);left:0;top:0;width:100%}article.svelte-10rl4ak .content header .title h1.svelte-10rl4ak{text-align:right;padding:0 10px;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:1rem;font-weight:400}article.svelte-10rl4ak .content header .details.svelte-10rl4ak{padding:5px;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:0.95rem;font-weight:400}article.svelte-10rl4ak .content header .details .dt.svelte-10rl4ak{border-right:var(--bl) 1px solid;padding-left:5px;color:var(--bl)}article.svelte-10rl4ak .content header .details .title.svelte-10rl4ak{font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:var(--tc);font-size:1rem;font-weight:400}",
  map: '{"version":3,"file":"info.svelte","sources":["info.svelte"],"sourcesContent":["<script>\\r\\nimport {data} from \\"../stores/store.js\\"\\r\\n\\r\\nlet core  = $data.filter((items)=>{\\r\\n    return items.type == \\"core\\"\\r\\n})\\r\\nlet len = core.length\\r\\n    \\r\\n\\r\\n</script>\\r\\n<article>\\r\\n\\r\\n    <div class=\\"content\\">\\r\\n        <header>\\r\\n            <div class=\\"title\\">\\r\\n                <h1>INFORMATION</h1>\\r\\n            </div>\\r\\n            <div class=\\"details\\">\\r\\n                <div class=\\"title\\">\\r\\n                    <p>SUMMARY</p>\\r\\n                </div>\\r\\n                <div class=\\"dt\\">\\r\\n                    <p>{$data.length} COURSES</p>\\r\\n                    <p>{len} CORES</p>\\r\\n                </div>\\r\\n            </div>\\r\\n           \\r\\n         \\r\\n        </header>\\r\\n        <main>\\r\\n            <table>\\r\\n                <tbody>\\r\\n                   {#each $data as crs}\\r\\n                    <tr>\\r\\n                        <td>\\r\\n                            <h1>{crs.course.toUpperCase()}</h1>\\r\\n                            <h2>{crs.type}</h2>\\r\\n                            <p>{crs.gpa} GPA</p>\\r\\n                            <p>{crs.lecturer}</p>\\r\\n                            <p>{crs.code}</p>\\r\\n                        </td>\\r\\n                        \\r\\n                     \\r\\n\\r\\n                    </tr>\\r\\n                    <tr><td style=\\"background:var(--tbc);opacity:100%\\" ><br></td></tr>\\r\\n                    {/each}\\r\\n                </tbody>\\r\\n            </table>\\r\\n        </main>\\r\\n    </div>\\r\\n</article>\\r\\n<style lang=\\"scss\\">article {\\n  min-height: 100vh;\\n  background: var(--bc);\\n  position: relative;\\n  z-index: 150;\\n  width: 100%;\\n  top: 0;\\n  left: 0;\\n}\\narticle .content main {\\n  padding-top: 50vh;\\n  padding-bottom: 10vh;\\n  background: var(--tbc);\\n}\\narticle .content main table {\\n  width: 100%;\\n}\\narticle .content main table tbody tr {\\n  background: var(--fb);\\n}\\narticle .content main table tbody tr td {\\n  padding: 0px 5px;\\n  margin: 10px;\\n}\\narticle .content main table tbody tr td h1 {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 1rem;\\n  font-weight: 400;\\n}\\narticle .content main table tbody tr td h2 {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--bl);\\n  font-size: 0.75rem;\\n  font-weight: 600;\\n}\\narticle .content main table tbody tr td p {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.95rem;\\n  font-weight: 400;\\n  text-align: right;\\n}\\narticle .content header {\\n  padding-top: 5vh;\\n  position: fixed;\\n  background: var(--bc);\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n}\\narticle .content header .title h1 {\\n  text-align: right;\\n  padding: 0 10px;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 1rem;\\n  font-weight: 400;\\n}\\narticle .content header .details {\\n  padding: 5px;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 0.95rem;\\n  font-weight: 400;\\n}\\narticle .content header .details .dt {\\n  border-right: var(--bl) 1px solid;\\n  padding-left: 5px;\\n  color: var(--bl);\\n}\\narticle .content header .details a {\\n  text-decoration: none;\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--bl);\\n  font-size: 0.95rem;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\narticle .content header .details .title {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: var(--tc);\\n  font-size: 1rem;\\n  font-weight: 400;\\n}</style>"],"names":[],"mappings":"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"}'
};
var Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  $$unsubscribe_data = subscribe(data, (value) => $data = value);
  let core = $data.filter((items) => {
    return items.type == "core";
  });
  let len = core.length;
  $$result.css.add(css);
  $$unsubscribe_data();
  return `<article class="${"svelte-10rl4ak"}"><div class="${"content"}"><header class="${"svelte-10rl4ak"}"><div class="${"title svelte-10rl4ak"}"><h1 class="${"svelte-10rl4ak"}">INFORMATION</h1></div>
            <div class="${"details svelte-10rl4ak"}"><div class="${"title svelte-10rl4ak"}"><p class="${"svelte-10rl4ak"}">SUMMARY</p></div>
                <div class="${"dt svelte-10rl4ak"}"><p class="${"svelte-10rl4ak"}">${escape2($data.length)} COURSES</p>
                    <p class="${"svelte-10rl4ak"}">${escape2(len)} CORES</p></div></div></header>
        <main class="${"svelte-10rl4ak"}"><table class="${"svelte-10rl4ak"}"><tbody>${each($data, (crs) => `<tr class="${"svelte-10rl4ak"}"><td class="${"svelte-10rl4ak"}"><h1 class="${"svelte-10rl4ak"}">${escape2(crs.course.toUpperCase())}</h1>
                            <h2 class="${"svelte-10rl4ak"}">${escape2(crs.type)}</h2>
                            <p class="${"svelte-10rl4ak"}">${escape2(crs.gpa)} GPA</p>
                            <p class="${"svelte-10rl4ak"}">${escape2(crs.lecturer)}</p>
                            <p class="${"svelte-10rl4ak"}">${escape2(crs.code)}</p>
                        </td></tr>
                    <tr class="${"svelte-10rl4ak"}"><td style="${"background:var(--tbc);opacity:100%"}" class="${"svelte-10rl4ak"}"><br></td></tr>`)}</tbody></table></main></div>
</article>`;
});
var info = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Info
});

// .svelte-kit/vercel/entry.js
var entry_default = async (req, res) => {
  const {pathname, searchParams} = new URL(req.url || "", "http://localhost");
  const rendered = await render({
    method: req.method,
    headers: req.headers,
    path: pathname,
    query: searchParams,
    rawBody: await getRawBody(req)
  });
  if (rendered) {
    const {status, headers, body} = rendered;
    return res.writeHead(status, headers).end(body);
  }
  return res.writeHead(404).end();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
