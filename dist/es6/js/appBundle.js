/*
 App version: 1.0.0
 SDK version: 5.5.0
 CLI version: 2.13.0

 gmtDate: Fri, 08 Dec 2023 22:52:28 GMT
*/
var APP_com_domain_app_mySecondLngApp = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all4) => {
    for (var name2 in all4)
      __defProp(target, name2, { get: all4[name2], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/deepmerge/dist/cjs.js
  var require_cjs = __commonJS({
    "node_modules/deepmerge/dist/cjs.js"(exports, module) {
      "use strict";
      var isMergeableObject = function isMergeableObject2(value) {
        return isNonNullObject(value) && !isSpecial(value);
      };
      function isNonNullObject(value) {
        return !!value && typeof value === "object";
      }
      function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);
        return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
      }
      var canUseSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
      function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
      }
      function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
      }
      function cloneUnlessOtherwiseSpecified(value, options2) {
        return options2.clone !== false && options2.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options2) : value;
      }
      function defaultArrayMerge(target, source, options2) {
        return target.concat(source).map(function(element) {
          return cloneUnlessOtherwiseSpecified(element, options2);
        });
      }
      function getMergeFunction(key, options2) {
        if (!options2.customMerge) {
          return deepmerge;
        }
        var customMerge = options2.customMerge(key);
        return typeof customMerge === "function" ? customMerge : deepmerge;
      }
      function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
          return Object.propertyIsEnumerable.call(target, symbol);
        }) : [];
      }
      function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
      }
      function propertyIsOnObject(object, property) {
        try {
          return property in object;
        } catch (_2) {
          return false;
        }
      }
      function propertyIsUnsafe(target, key) {
        return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
      }
      function mergeObject(target, source, options2) {
        var destination = {};
        if (options2.isMergeableObject(target)) {
          getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options2);
          });
        }
        getKeys(source).forEach(function(key) {
          if (propertyIsUnsafe(target, key)) {
            return;
          }
          if (propertyIsOnObject(target, key) && options2.isMergeableObject(source[key])) {
            destination[key] = getMergeFunction(key, options2)(target[key], source[key], options2);
          } else {
            destination[key] = cloneUnlessOtherwiseSpecified(source[key], options2);
          }
        });
        return destination;
      }
      function deepmerge(target, source, options2) {
        options2 = options2 || {};
        options2.arrayMerge = options2.arrayMerge || defaultArrayMerge;
        options2.isMergeableObject = options2.isMergeableObject || isMergeableObject;
        options2.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
        if (!sourceAndTargetTypesMatch) {
          return cloneUnlessOtherwiseSpecified(source, options2);
        } else if (sourceIsArray) {
          return options2.arrayMerge(target, source, options2);
        } else {
          return mergeObject(target, source, options2);
        }
      }
      deepmerge.all = function deepmergeAll(array, options2) {
        if (!Array.isArray(array)) {
          throw new Error("first argument should be an array");
        }
        return array.reduce(function(prev, next) {
          return deepmerge(prev, next, options2);
        }, {});
      };
      var deepmerge_1 = deepmerge;
      module.exports = deepmerge_1;
    }
  });

  // src/index.js
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });

  // node_modules/@lightningjs/sdk/src/Settings/index.js
  var settings = {};
  var subscribers = {};
  var initSettings = (appSettings, platformSettings) => {
    settings["app"] = appSettings;
    settings["platform"] = platformSettings;
    settings["user"] = {};
  };
  var publish = (key, value) => {
    subscribers[key] && subscribers[key].forEach((subscriber) => subscriber(value));
  };
  var dotGrab = function() {
    let obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : void 0;
    if (obj === null)
      return void 0;
    const keys2 = key.split(".");
    for (let i2 = 0; i2 < keys2.length; i2++) {
      obj = obj[keys2[i2]] = obj[keys2[i2]] !== void 0 ? obj[keys2[i2]] : {};
    }
    return typeof obj === "object" && obj !== null ? Object.keys(obj).length ? obj : void 0 : obj;
  };
  var Settings_default = {
    get(type2, key) {
      let fallback = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
      const val = dotGrab(settings[type2], key);
      return val !== void 0 ? val : fallback;
    },
    has(type2, key) {
      return !!this.get(type2, key);
    },
    set(key, value) {
      settings["user"][key] = value;
      publish(key, value);
    },
    subscribe(key, callback2) {
      subscribers[key] = subscribers[key] || [];
      subscribers[key].push(callback2);
    },
    unsubscribe(key, callback2) {
      if (callback2) {
        const index = subscribers[key] && subscribers[key].findIndex((cb) => cb === callback2);
        index > -1 && subscribers[key].splice(index, 1);
      } else {
        if (key in subscribers) {
          subscribers[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers)) {
        delete subscribers[key];
      }
    }
  };

  // node_modules/@lightningjs/sdk/src/Log/index.js
  var prepLog = (type2, args) => {
    const colors2 = {
      Info: "green",
      Debug: "gray",
      Warn: "orange",
      Error: "red"
    };
    args = Array.from(args);
    return ["%c" + (args.length > 1 && typeof args[0] === "string" ? args.shift() : type2), "background-color: " + colors2[type2] + "; color: white; padding: 2px 4px; border-radius: 2px", args];
  };
  var Log_default = {
    info() {
      Settings_default.get("platform", "log") && console.log.apply(console, prepLog("Info", arguments));
    },
    debug() {
      Settings_default.get("platform", "log") && console.debug.apply(console, prepLog("Debug", arguments));
    },
    error() {
      Settings_default.get("platform", "log") && console.error.apply(console, prepLog("Error", arguments));
    },
    warn() {
      Settings_default.get("platform", "log") && console.warn.apply(console, prepLog("Warn", arguments));
    }
  };

  // C:/Users/diego/AppData/Roaming/npm/node_modules/@lightningjs/cli/src/alias/lightningjs-core.js
  var lightningjs_core_default = window.lng;

  // node_modules/@lightningjs/sdk/src/Lightning/index.js
  var Lightning_default = lightningjs_core_default;

  // node_modules/@lightningjs/sdk/src/Accessibility/shaders/ColorShift.js
  var ColorShift = class extends Lightning_default.shaders.WebGLDefaultShader {
    set brightness(v2) {
      this._brightness = (v2 - 50) / 100;
      this.redraw();
    }
    set contrast(v2) {
      this._contrast = (v2 + 50) / 100;
      this.redraw();
    }
    set gamma(v2) {
      this._gamma = (v2 + 50) / 100;
      this.redraw();
    }
    setupUniforms(operation) {
      super.setupUniforms(operation);
      const gl = this.gl;
      this._setUniform("colorAdjust", [this._brightness || 0, this._contrast || 1, this._gamma || 1], gl.uniform3fv);
    }
  };
  ColorShift.before = "\n    #ifdef GL_ES\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision lowp float;\n    # endif\n    #endif\n        \n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n    uniform vec3 colorAdjust;\n    \n    const mat3 RGBtoOpponentMat = mat3(0.2814, -0.0971, -0.0930, 0.6938, 0.1458,-0.2529, 0.0638, -0.0250, 0.4665);\n    const mat3 OpponentToRGBMat = mat3(1.1677, 0.9014, 0.7214, -6.4315, 2.5970, 0.1257, -0.5044, 0.0159, 2.0517);    \n";
  ColorShift.after = "    \n    vec3 brightnessContrast(vec3 value, float brightness, float contrast)\n    {\n        return (value - 0.5) * contrast + 0.5 + brightness;\n    }   \n    \n    vec3 updateGamma(vec3 value, float param)\n    {\n        return vec3(pow(abs(value.r), param),pow(abs(value.g), param),pow(abs(value.b), param));\n    } \n       \n    void main(void){\n        vec4 fragColor = texture2D(uSampler, vTextureCoord);        \n        vec4 color = filter(fragColor) * vColor;       \n        \n        vec3 bc = brightnessContrast(color.rgb,colorAdjust[0],colorAdjust[1]);        \n        vec3 ga = updateGamma(bc.rgb, colorAdjust[2]);  \n              \n        gl_FragColor = vec4(ga.rgb, color.a);          \n    }    \n";

  // node_modules/@lightningjs/sdk/src/Accessibility/shaders/ProtanopiaShader.js
  var ProtanopiaShader = class extends ColorShift {
  };
  ProtanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.20,  0.99, -0.19, 0.0);\n        vec4 g = vec4( 0.16,  0.79,  0.04, 0.0);\n        vec4 b = vec4( 0.01, -0.01,  1.00, 0.0);\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);	\n    }\n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));      \n    }    \n    ").concat(ColorShift.after, " \n");

  // node_modules/@lightningjs/sdk/src/Accessibility/shaders/DeuteranopiaShader.js
  var DeuteranopiaShader = class extends ColorShift {
  };
  DeuteranopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.43,  0.72, -0.15, 0.0 );\n        vec4 g = vec4( 0.34,  0.57,  0.09, 0.0 );\n        vec4 b = vec4(-0.02,  0.03,  1.00, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);	\n    }\n       \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= opponentColor.y * 1.5; \n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));    \n    }\n    ").concat(ColorShift.after, "    \n");

  // node_modules/@lightningjs/sdk/src/Accessibility/shaders/TritanopiaShader.js
  var TritanopiaShader = class extends ColorShift {
  };
  TritanopiaShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "    \n    vec4 vision(vec4 color)\n    {\n        vec4 r = vec4( 0.97,  0.11, -0.08, 0.0 );\n        vec4 g = vec4( 0.02,  0.82,  0.16, 0.0 );\n        vec4 b = vec4(-0.06,  0.88,  0.18, 0.0 );\n       \n        return vec4(dot(color, r), dot(color, g), dot(color, b), color.a);	\n    }   \n    \n    vec4 filter( vec4 color )\n    {   \n        vec3 opponentColor = RGBtoOpponentMat * vec3(color.r, color.g, color.b);\n        opponentColor.x -= ((3.0 * opponentColor.z) - opponentColor.y) * 0.25;\n        vec3 rgbColor = OpponentToRGBMat * opponentColor;\n        return vision(vec4(rgbColor.r, rgbColor.g, rgbColor.b, color.a));\n    }   \n    ").concat(ColorShift.after, " \n");

  // node_modules/@lightningjs/sdk/src/Accessibility/shaders/NormalShader.js
  var NeutralShader = class extends ColorShift {
  };
  NeutralShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {\n        return color;\n    }\n    ").concat(ColorShift.after, "\n");

  // node_modules/@lightningjs/sdk/src/Accessibility/shaders/MonochromacyShader.js
  var MonochromacyShader = class extends ColorShift {
  };
  MonochromacyShader.fragmentShaderSource = "\n    ".concat(ColorShift.before, "\n    vec4 filter( vec4 color )\n    {   \n        float grey = dot(color.rgb, vec3(0.299, 0.587, 0.114));\n        return vec4(vec3(grey, grey, grey), 1.0 ); \n    }\n    ").concat(ColorShift.after, "\n");

  // node_modules/@lightningjs/sdk/src/Accessibility/shaders/index.js
  var colorshiftShader = (type2) => {
    const shadersMap = {
      normal: NeutralShader,
      monochromacy: MonochromacyShader,
      deuteranopia: DeuteranopiaShader,
      tritanopia: TritanopiaShader,
      protanopia: ProtanopiaShader
    };
    type2 = typeof type2 === "string" && type2.toLowerCase() || null;
    return Object.keys(shadersMap).indexOf(type2) > -1 ? shadersMap[type2] : false;
  };

  // node_modules/@lightningjs/sdk/src/Accessibility/Announcer/Speech.js
  function flattenStrings() {
    let series = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    const flattenedSeries = [];
    for (var i2 = 0; i2 < series.length; i2++) {
      if (typeof series[i2] === "string" && !series[i2].includes("PAUSE-")) {
        flattenedSeries.push(series[i2]);
      } else {
        break;
      }
    }
    return [flattenedSeries.join(",\b ")].concat(series.slice(i2));
  }
  function delay(pause) {
    return new Promise((resolve) => {
      setTimeout(resolve, pause);
    });
  }
  function speak(phrase, utterances) {
    let lang = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "en-US";
    const synth = window.speechSynthesis;
    return new Promise((resolve, reject) => {
      const utterance = new SpeechSynthesisUtterance(phrase);
      utterance.lang = lang;
      utterance.onend = () => {
        resolve();
      };
      utterance.onerror = (e) => {
        reject(e);
      };
      utterances.push(utterance);
      synth.speak(utterance);
    });
  }
  function speakSeries(series, lang) {
    let root2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const synth = window.speechSynthesis;
    const remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
    const nestedSeriesResults = [];
    const utterances = [];
    let active = true;
    const seriesChain = (async () => {
      try {
        while (active && remainingPhrases.length) {
          const phrase = await Promise.resolve(remainingPhrases.shift());
          if (!active) {
            break;
          } else if (typeof phrase === "string" && phrase.includes("PAUSE-")) {
            let pause = phrase.split("PAUSE-")[1] * 1e3;
            if (isNaN(pause)) {
              pause = 0;
            }
            await delay(pause);
          } else if (typeof phrase === "string" && phrase.length) {
            const totalRetries = 3;
            let retriesLeft = totalRetries;
            while (active && retriesLeft > 0) {
              try {
                await speak(phrase, utterances, lang);
                retriesLeft = 0;
              } catch (e) {
                if (e instanceof SpeechSynthesisErrorEvent) {
                  if (e.error === "network") {
                    retriesLeft--;
                    console.warn("Speech synthesis network error. Retries left: ".concat(retriesLeft));
                    await delay(500 * (totalRetries - retriesLeft));
                  } else if (e.error === "canceled" || e.error === "interrupted") {
                    retriesLeft = 0;
                  } else {
                    throw new Error("SpeechSynthesisErrorEvent: ".concat(e.error));
                  }
                } else {
                  throw e;
                }
              }
            }
          } else if (typeof phrase === "function") {
            const seriesResult = speakSeries(phrase(), lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          } else if (Array.isArray(phrase)) {
            const seriesResult = speakSeries(phrase, lang, false);
            nestedSeriesResults.push(seriesResult);
            await seriesResult.series;
          }
        }
      } finally {
        active = false;
      }
    })();
    return {
      series: seriesChain,
      get active() {
        return active;
      },
      append: (toSpeak) => {
        remainingPhrases.push(toSpeak);
      },
      cancel: () => {
        if (!active) {
          return;
        }
        if (root2) {
          synth.cancel();
        }
        nestedSeriesResults.forEach((nestedSeriesResults2) => {
          nestedSeriesResults2.cancel();
        });
        active = false;
      }
    };
  }
  var currentSeries;
  function Speech_default(toSpeak, lang) {
    currentSeries && currentSeries.cancel();
    currentSeries = speakSeries(toSpeak, lang);
    return currentSeries;
  }

  // node_modules/@lightningjs/sdk/src/Accessibility/Announcer/utils.js
  function getElmName(elm) {
    return elm.ref || elm.constructor.name;
  }
  function debounce(func, wait, immediate) {
    var timeout2, args, context, timestamp, result;
    if (null == wait)
      wait = 100;
    function later() {
      var last = Date.now() - timestamp;
      if (last < wait && last >= 0) {
        timeout2 = setTimeout(later, wait - last);
      } else {
        timeout2 = null;
        if (!immediate) {
          result = func.apply(context, args);
          context = args = null;
        }
      }
    }
    var debounced = function() {
      context = this;
      args = arguments;
      timestamp = Date.now();
      var callNow = immediate && !timeout2;
      if (!timeout2)
        timeout2 = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }
      return result;
    };
    debounced.clear = function() {
      if (timeout2) {
        clearTimeout(timeout2);
        timeout2 = null;
      }
    };
    debounced.flush = function() {
      if (timeout2) {
        result = func.apply(context, args);
        context = args = null;
        clearTimeout(timeout2);
        timeout2 = null;
      }
    };
    return debounced;
  }

  // node_modules/@lightningjs/sdk/src/Accessibility/Announcer/index.js
  var resetFocusPathTimer;
  var prevFocusPath = [];
  var currentlySpeaking;
  var voiceOutDisabled = false;
  var fiveMinutes = 3e5;
  function onFocusChangeCore() {
    let focusPath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (!Announcer.enabled) {
      return;
    }
    const loaded = focusPath.every((elm) => !elm.loading);
    const focusDiff = focusPath.filter((elm) => !prevFocusPath.includes(elm));
    resetFocusPathTimer();
    if (!loaded) {
      Announcer.onFocusChange();
      return;
    }
    prevFocusPath = focusPath.slice(0);
    let toAnnounceText = [];
    let toAnnounce = focusDiff.reduce((acc, elm) => {
      if (elm.announce) {
        acc.push([getElmName(elm), "Announce", elm.announce]);
        toAnnounceText.push(elm.announce);
      } else if (elm.title) {
        acc.push([getElmName(elm), "Title", elm.title]);
        toAnnounceText.push(elm.title);
      }
      return acc;
    }, []);
    focusDiff.reverse().reduce((acc, elm) => {
      if (elm.announceContext) {
        acc.push([getElmName(elm), "Context", elm.announceContext]);
        toAnnounceText.push(elm.announceContext);
      } else {
        acc.push([getElmName(elm), "No Context", ""]);
      }
      return acc;
    }, toAnnounce);
    if (Announcer.debug) {
      console.table(toAnnounce);
    }
    if (toAnnounceText.length) {
      return Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), []));
    }
  }
  function textToSpeech(toSpeak) {
    if (voiceOutDisabled) {
      return;
    }
    return currentlySpeaking = Speech_default(toSpeak);
  }
  var Announcer = {
    enabled: true,
    debug: false,
    cancel: function() {
      currentlySpeaking && currentlySpeaking.cancel();
    },
    clearPrevFocus: function() {
      let depth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      prevFocusPath = prevFocusPath.slice(0, depth);
      resetFocusPathTimer();
    },
    speak: function(text) {
      let {
        append: append2 = false,
        notification = false
      } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Announcer.enabled) {
        Announcer.onFocusChange.flush();
        if (append2 && currentlySpeaking && currentlySpeaking.active) {
          currentlySpeaking.append(text);
        } else {
          Announcer.cancel();
          textToSpeech(text);
        }
        if (notification) {
          voiceOutDisabled = true;
          currentlySpeaking.series.finally(() => {
            voiceOutDisabled = false;
            Announcer.refresh();
          });
        }
      }
      return currentlySpeaking;
    },
    setupTimers: function() {
      let {
        focusDebounce = 400,
        focusChangeTimeout = fiveMinutes
      } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Announcer.onFocusChange = debounce(onFocusChangeCore, focusDebounce);
      resetFocusPathTimer = debounce(() => {
        prevFocusPath = [];
      }, focusChangeTimeout);
    }
  };
  Announcer.setupTimers();
  var Announcer_default = Announcer;

  // node_modules/@lightningjs/sdk/src/Accessibility/index.js
  var Accessibility_default = {
    Announcer: Announcer_default,
    colorshift(component) {
      let type2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      let config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        brightness: 50,
        contrast: 50,
        gamma: 50
      };
      config = {
        ...{
          brightness: 50,
          contrast: 50,
          gamma: 50
        },
        ...config
      };
      const shader = type2 && colorshiftShader(type2);
      if (shader) {
        Log_default.info("Accessibility Colorshift", type2, config);
        component.rtt = true;
        component.shader = {
          type: shader,
          ...config
        };
      } else {
        Log_default.info("Accessibility Colorshift", "Disabled");
        component.rtt = false;
        component.shader = null;
      }
    }
  };

  // node_modules/@metrological/sdk/src/Metadata/index.js
  var metadata = {};
  var initMetadata = (metadataObj) => {
    metadata = metadataObj;
  };

  // node_modules/@metrological/sdk/src/LightningSdkPlugins/index.js
  var Log;
  var Settings;
  var ApplicationInstance;
  var Ads;
  var Lightning;
  var initLightningSdkPlugin = {
    set log(v2) {
      Log = v2;
    },
    set settings(v2) {
      Settings = v2;
    },
    set ads(v2) {
      Ads = v2;
    },
    set lightning(v2) {
      Lightning = v2;
    },
    set appInstance(v2) {
      ApplicationInstance = v2;
    }
  };

  // node_modules/@metrological/sdk/src/Metrics/index.js
  var initMetrics = (config) => {
    sendMetric = config.sendMetric;
  };
  var sendMetric = (type2, event2, params) => {
    Log.info("Sending metric", type2, event2, params);
  };
  var metrics = {
    app: ["launch", "loaded", "ready", "close"],
    page: ["view", "leave"],
    user: ["click", "input"],
    media: [
      "abort",
      "canplay",
      "ended",
      "pause",
      "play",
      // with some videos there occur almost constant suspend events ... should investigate
      // 'suspend',
      "volumechange",
      "waiting",
      "seeking",
      "seeked"
    ]
  };
  var errorMetric = function(type2, message, code, visible) {
    let params = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
    params = {
      params,
      ...{
        message,
        code,
        visible
      }
    };
    sendMetric(type2, "error", params);
  };
  var Metric = function(type2, events2) {
    let options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return events2.reduce((obj, event2) => {
      obj[event2] = function(name2) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        params = {
          ...options2,
          ...name2 ? {
            name: name2
          } : {},
          ...params
        };
        sendMetric(type2, event2, params);
      };
      return obj;
    }, {
      error(message, code, params) {
        errorMetric(type2, message, code, params);
      },
      event(name2, params) {
        sendMetric(type2, name2, params);
      }
    });
  };
  var Metrics = (types) => {
    return Object.keys(types).reduce((obj, type2) => {
      type2 === "media" ? obj[type2] = (url) => Metric(type2, types[type2], {
        url
      }) : obj[type2] = Metric(type2, types[type2]);
      return obj;
    }, {
      error: errorMetric,
      event: sendMetric
    });
  };
  var Metrics_default = Metrics(metrics);

  // node_modules/@metrological/sdk/src/Profile/helpers.js
  var formatLocale = (locale) => {
    if (locale && locale.length === 2) {
      return "".concat(locale.toLowerCase(), "-").concat(locale.toUpperCase());
    } else {
      return locale;
    }
  };
  var getLocale = (defaultValue) => {
    if ("language" in navigator) {
      const locale = formatLocale(navigator.language);
      return Promise.resolve(locale);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var getLanguage = (defaultValue) => {
    if ("language" in navigator) {
      const language2 = formatLocale(navigator.language).slice(0, 2);
      return Promise.resolve(language2);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var getCountryCode = (defaultValue) => {
    if ("language" in navigator) {
      const countryCode = formatLocale(navigator.language).slice(3, 5);
      return Promise.resolve(countryCode);
    } else {
      return Promise.resolve(defaultValue);
    }
  };
  var hasOrAskForGeoLocationPermission = () => {
    return new Promise((resolve) => {
      if (Settings.get("platform", "forceBrowserGeolocation") === true)
        resolve(true);
      if ("permissions" in navigator && typeof navigator.permissions.query === "function") {
        navigator.permissions.query({
          name: "geolocation"
        }).then((status) => {
          resolve(status.state === "granted" || status.status === "granted");
        });
      } else {
        resolve(false);
      }
    });
  };
  var getLatLon = (defaultValue) => {
    return new Promise((resolve) => {
      hasOrAskForGeoLocationPermission().then((granted) => {
        if (granted === true) {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
              // success
              (result) => result && result.coords && resolve([result.coords.latitude, result.coords.longitude]),
              // error
              () => resolve(defaultValue),
              // options
              {
                enableHighAccuracy: true,
                timeout: 5e3,
                maximumAge: 0
              }
            );
          } else {
            return queryForLatLon().then((result) => resolve(result || defaultValue));
          }
        } else {
          return queryForLatLon().then((result) => resolve(result || defaultValue));
        }
      });
    });
  };
  var queryForLatLon = () => {
    return new Promise((resolve) => {
      fetch("https://geolocation-db.com/json/").then((response) => response.json()).then((_ref) => {
        let {
          latitude,
          longitude
        } = _ref;
        return latitude && longitude ? resolve([latitude, longitude]) : resolve(false);
      }).catch(() => resolve(false));
    });
  };

  // node_modules/@metrological/sdk/src/Profile/defaults.js
  var defaultProfile = {
    ageRating: "adult",
    city: "New York",
    zipCode: "27505",
    countryCode: () => getCountryCode("US"),
    ip: "127.0.0.1",
    household: "b2244e9d4c04826ccd5a7b2c2a50e7d4",
    language: () => getLanguage("en"),
    latlon: () => getLatLon([40.7128, 74.006]),
    locale: () => getLocale("en-US"),
    mac: "00:00:00:00:00:00",
    operator: "metrological",
    platform: "metrological",
    packages: [],
    uid: "ee6723b8-7ab3-462c-8d93-dbf61227998e",
    stbType: "metrological"
  };

  // node_modules/@metrological/sdk/src/Profile/index.js
  var getInfo = (key) => {
    const profile = {
      ...defaultProfile,
      ...Settings.get("platform", "profile")
    };
    return Promise.resolve(typeof profile[key] === "function" ? profile[key]() : profile[key]);
  };
  var setInfo = (key, params) => {
    if (key in defaultProfile)
      return defaultProfile[key] = params;
  };
  var initProfile = (config) => {
    getInfo = config.getInfo ? config.getInfo : getInfo;
    setInfo = config.setInfo ? config.setInfo : setInfo;
  };

  // node_modules/@metrological/sdk/src/Purchase/index.js
  var billingUrl = "https://payment-sdk.metrological.com/";
  var initPurchase = (config) => {
    if (config.billingUrl)
      billingUrl = config.billingUrl;
  };

  // node_modules/@metrological/sdk/src/TV/defaults.js
  var defaultChannels = [{
    number: 1,
    name: "Metro News 1",
    description: "New York Cable News Channel",
    entitled: true,
    program: {
      title: "The Morning Show",
      description: "New York's best morning show",
      startTime: new Date(/* @__PURE__ */ new Date() - 60 * 5 * 1e3).toUTCString(),
      // started 5 minutes ago
      duration: 60 * 30,
      // 30 minutes
      ageRating: 0
    }
  }, {
    number: 2,
    name: "MTV",
    description: "Music Television",
    entitled: true,
    program: {
      title: "Beavis and Butthead",
      description: "American adult animated sitcom created by Mike Judge",
      startTime: new Date(/* @__PURE__ */ new Date() - 60 * 20 * 1e3).toUTCString(),
      // started 20 minutes ago
      duration: 60 * 45,
      // 45 minutes
      ageRating: 18
    }
  }, {
    number: 3,
    name: "NBC",
    description: "NBC TV Network",
    entitled: false,
    program: {
      title: "The Tonight Show Starring Jimmy Fallon",
      description: "Late-night talk show hosted by Jimmy Fallon on NBC",
      startTime: new Date(/* @__PURE__ */ new Date() - 60 * 10 * 1e3).toUTCString(),
      // started 10 minutes ago
      duration: 60 * 60,
      // 1 hour
      ageRating: 10
    }
  }];
  var channels = () => Settings.get("platform", "tv", defaultChannels);
  var randomChannel = () => channels()[~~(channels.length * Math.random())];

  // node_modules/@metrological/sdk/src/TV/index.js
  var currentChannel;
  var callbacks = {};
  var emit = function(event2) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    callbacks[event2] && callbacks[event2].forEach((cb) => {
      cb.apply(null, args);
    });
  };
  var methods = {
    getChannel() {
      if (!currentChannel)
        currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        if (currentChannel) {
          const channel = {
            ...currentChannel
          };
          delete channel.program;
          resolve(channel);
        } else {
          reject("No channel found");
        }
      });
    },
    getProgram() {
      if (!currentChannel)
        currentChannel = randomChannel();
      return new Promise((resolve, reject) => {
        currentChannel.program ? resolve(currentChannel.program) : reject("No program found");
      });
    },
    setChannel(number) {
      return new Promise((resolve, reject) => {
        if (number) {
          const newChannel = channels().find((c2) => c2.number === number);
          if (newChannel) {
            currentChannel = newChannel;
            const channel = {
              ...currentChannel
            };
            delete channel.program;
            emit("channelChange", channel);
            resolve(channel);
          } else {
            reject("Channel not found");
          }
        } else {
          reject("No channel number supplied");
        }
      });
    }
  };
  var initTV = (config) => {
    methods = {};
    if (config.getChannel && typeof config.getChannel === "function") {
      methods.getChannel = config.getChannel;
    }
    if (config.getProgram && typeof config.getProgram === "function") {
      methods.getProgram = config.getProgram;
    }
    if (config.setChannel && typeof config.setChannel === "function") {
      methods.setChannel = config.setChannel;
    }
    if (config.emit && typeof config.emit === "function") {
      config.emit(emit);
    }
  };

  // node_modules/@metrological/sdk/src/Pin/index.js
  var unlocked = false;
  var submit = (pin, context) => {
    return new Promise((resolve, reject) => {
      if (pin.toString() === Settings.get("platform", "pin", "0000").toString()) {
        unlocked = true;
        resolve(unlocked);
      } else {
        reject("Incorrect pin");
      }
    });
  };
  var check = (context) => {
    return new Promise((resolve) => {
      resolve(unlocked);
    });
  };
  var initPin = (config) => {
    if (config.submit && typeof config.submit === "function") {
      submit = config.submit;
    }
    if (config.check && typeof config.check === "function") {
      check = config.check;
    }
  };

  // node_modules/@michieljs/execute-as-promise/src/execute-as-promise.js
  var execute_as_promise_default = function(method) {
    let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    let context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    let result;
    if (method && typeof method === "function") {
      try {
        result = method.apply(context, args);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    if (result !== null && typeof result === "object" && result.then && typeof result.then === "function") {
      return result;
    } else {
      return new Promise((resolve, reject) => {
        if (result instanceof Error) {
          reject(result);
        } else {
          resolve(result);
        }
      });
    }
  };

  // node_modules/@metrological/sdk/src/VideoPlayer/events.js
  var events_default = {
    abort: "Abort",
    canplay: "CanPlay",
    canplaythrough: "CanPlayThrough",
    durationchange: "DurationChange",
    emptied: "Emptied",
    encrypted: "Encrypted",
    ended: "Ended",
    error: "Error",
    interruptbegin: "InterruptBegin",
    interruptend: "InterruptEnd",
    loadeddata: "LoadedData",
    loadedmetadata: "LoadedMetadata",
    loadstart: "LoadStart",
    pause: "Pause",
    play: "Play",
    playing: "Playing",
    progress: "Progress",
    ratechange: "Ratechange",
    seeked: "Seeked",
    seeking: "Seeking",
    stalled: "Stalled",
    // suspend: 'Suspend', // this one is called a looooot for some videos
    timeupdate: "TimeUpdate",
    volumechange: "VolumeChange",
    waiting: "Waiting"
  };

  // node_modules/@metrological/sdk/src/helpers/autoSetupMixin.js
  var autoSetupMixin_default = function(sourceObject) {
    let setup2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : () => {
    };
    let ready3 = false;
    const doSetup = () => {
      if (ready3 === false) {
        setup2();
        ready3 = true;
      }
    };
    return Object.keys(sourceObject).reduce((obj, key) => {
      if (typeof sourceObject[key] === "function") {
        obj[key] = function() {
          doSetup();
          return sourceObject[key].apply(sourceObject, arguments);
        };
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).get === "function") {
        obj.__defineGetter__(key, function() {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).get.apply(sourceObject);
        });
      } else if (typeof Object.getOwnPropertyDescriptor(sourceObject, key).set === "function") {
        obj.__defineSetter__(key, function() {
          doSetup();
          return Object.getOwnPropertyDescriptor(sourceObject, key).set.sourceObject[key].apply(sourceObject, arguments);
        });
      } else {
        obj[key] = sourceObject[key];
      }
      return obj;
    }, {});
  };

  // node_modules/@metrological/sdk/src/helpers/easeExecution.js
  var timeout = null;
  var easeExecution_default = (cb, delay2) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, delay2);
  };

  // node_modules/@metrological/sdk/src/VideoPlayer/VideoTexture.js
  var VideoTexture_default = () => {
    return class VideoTexture extends Lightning.Component {
      static _template() {
        return {
          Video: {
            alpha: 1,
            visible: false,
            pivot: 0.5,
            texture: {
              type: Lightning.textures.StaticTexture,
              options: {}
            }
          }
        };
      }
      set videoEl(v2) {
        this._videoEl = v2;
      }
      get videoEl() {
        return this._videoEl;
      }
      get videoView() {
        return this.tag("Video");
      }
      get videoTexture() {
        return this.videoView.texture;
      }
      get isVisible() {
        return this.videoView.alpha === 1 && this.videoView.visible === true;
      }
      _init() {
        this._createVideoTexture();
      }
      _createVideoTexture() {
        const stage2 = this.stage;
        const gl = stage2.gl;
        const glTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        this.videoTexture.options = {
          source: glTexture,
          w: this.videoEl.width,
          h: this.videoEl.height
        };
        this.videoView.w = this.videoEl.width / this.stage.getRenderPrecision();
        this.videoView.h = this.videoEl.height / this.stage.getRenderPrecision();
      }
      start() {
        const stage2 = this.stage;
        this._lastTime = 0;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage2.gl;
              const currentTime = (/* @__PURE__ */ new Date()).getTime();
              const getVideoPlaybackQuality = this.videoEl.getVideoPlaybackQuality();
              const frameCount = getVideoPlaybackQuality ? getVideoPlaybackQuality.totalVideoFrames : this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoView.visible = true;
                  this.videoTexture.options.w = this.videoEl.width;
                  this.videoTexture.options.h = this.videoEl.height;
                  const expectedAspectRatio = this.videoView.w / this.videoView.h;
                  const realAspectRatio = this.videoEl.width / this.videoEl.height;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoView.scaleY = 1;
                  } else {
                    this.videoView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoView.scaleX = 1;
                  }
                } catch (e) {
                  Log.error("texImage2d video", e);
                  this.stop();
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage2.on("frameStart", this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
      stop() {
        const stage2 = this.stage;
        stage2.removeListener("frameStart", this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage2.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
      position(top, left2) {
        this.videoView.patch({
          smooth: {
            x: left2,
            y: top
          }
        });
      }
      size(width, height) {
        this.videoView.patch({
          smooth: {
            w: width,
            h: height
          }
        });
      }
      show() {
        this.videoView.setSmooth("alpha", 1);
      }
      hide() {
        this.videoView.setSmooth("alpha", 0);
      }
    };
  };

  // node_modules/@metrological/sdk/src/VideoPlayer/index.js
  var mediaUrl = (url) => url;
  var videoEl;
  var videoTexture;
  var metrics2;
  var consumer;
  var precision = 1;
  var textureMode = false;
  var initVideoPlayer = (config) => {
    if (config.mediaUrl) {
      mediaUrl = config.mediaUrl;
    }
  };
  var eventHandlers = {};
  var state = {
    adsEnabled: false,
    playing: false,
    _playingAds: false,
    get playingAds() {
      return this._playingAds;
    },
    set playingAds(val) {
      if (this._playingAds !== val) {
        this._playingAds = val;
        fireOnConsumer(val === true ? "AdStart" : "AdEnd");
      }
    },
    skipTime: false,
    playAfterSeek: null
  };
  var hooks = {
    play() {
      state.playing = true;
    },
    pause() {
      state.playing = false;
    },
    seeked() {
      state.playAfterSeek === true && videoPlayerPlugin.play();
      state.playAfterSeek = null;
    },
    abort() {
      deregisterEventListeners();
    }
  };
  var withPrecision = (val) => Math.round(precision * val) + "px";
  var fireOnConsumer = (event2, args) => {
    if (consumer) {
      consumer.fire("$videoPlayer" + event2, args, videoEl.currentTime);
      consumer.fire("$videoPlayerEvent", event2, args, videoEl.currentTime);
    }
  };
  var fireHook = (event2, args) => {
    hooks[event2] && typeof hooks[event2] === "function" && hooks[event2].call(null, event2, args);
  };
  var customLoader = null;
  var customUnloader = null;
  var loader = (url, videoEl2, config) => {
    return customLoader && typeof customLoader === "function" ? customLoader(url, videoEl2, config) : new Promise((resolve) => {
      url = mediaUrl(url);
      videoEl2.setAttribute("src", url);
      videoEl2.load();
      resolve();
    });
  };
  var unloader = (videoEl2) => {
    return customUnloader && typeof customUnloader === "function" ? customUnloader(videoEl2) : new Promise((resolve) => {
      videoEl2.removeAttribute("src");
      videoEl2.load();
      resolve();
    });
  };
  var setupVideoTag = () => {
    const videoEls = document.getElementsByTagName("video");
    if (videoEls && videoEls.length) {
      return videoEls[0];
    } else {
      const videoEl2 = document.createElement("video");
      const platformSettingsWidth = Settings.get("platform", "width") ? Settings.get("platform", "width") : 1920;
      const platformSettingsHeight = Settings.get("platform", "height") ? Settings.get("platform", "height") : 1080;
      videoEl2.setAttribute("id", "video-player");
      videoEl2.setAttribute("width", withPrecision(platformSettingsWidth));
      videoEl2.setAttribute("height", withPrecision(platformSettingsHeight));
      videoEl2.style.position = "absolute";
      videoEl2.style.zIndex = "1";
      videoEl2.style.display = "none";
      videoEl2.style.visibility = "hidden";
      videoEl2.style.top = withPrecision(0);
      videoEl2.style.left = withPrecision(0);
      videoEl2.style.width = withPrecision(platformSettingsWidth);
      videoEl2.style.height = withPrecision(platformSettingsHeight);
      document.body.appendChild(videoEl2);
      return videoEl2;
    }
  };
  var setUpVideoTexture = () => {
    if (!ApplicationInstance.tag("VideoTexture")) {
      const el = ApplicationInstance.stage.c({
        type: VideoTexture_default(),
        ref: "VideoTexture",
        zIndex: 0,
        videoEl
      });
      ApplicationInstance.childList.addAt(el, 0);
    }
    return ApplicationInstance.tag("VideoTexture");
  };
  var registerEventListeners = () => {
    Log.info("VideoPlayer", "Registering event listeners");
    Object.keys(events_default).forEach((event2) => {
      const handler = (e) => {
        if (metrics2 && metrics2[event2] && typeof metrics2[event2] === "function") {
          metrics2[event2]({
            currentTime: videoEl.currentTime
          });
        }
        fireHook(event2, {
          videoElement: videoEl,
          event: e
        });
        fireOnConsumer(events_default[event2], {
          videoElement: videoEl,
          event: e
        });
      };
      eventHandlers[event2] = handler;
      videoEl.addEventListener(event2, handler);
    });
  };
  var deregisterEventListeners = () => {
    Log.info("VideoPlayer", "Deregistering event listeners");
    Object.keys(eventHandlers).forEach((event2) => {
      videoEl.removeEventListener(event2, eventHandlers[event2]);
    });
    eventHandlers = {};
  };
  var videoPlayerPlugin = {
    consumer(component) {
      consumer = component;
    },
    loader(loaderFn) {
      customLoader = loaderFn;
    },
    unloader(unloaderFn) {
      customUnloader = unloaderFn;
    },
    position() {
      let top = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      let left2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      videoEl.style.left = withPrecision(left2);
      videoEl.style.top = withPrecision(top);
      if (textureMode === true) {
        videoTexture.position(top, left2);
      }
    },
    size() {
      let width = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1920;
      let height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1080;
      videoEl.style.width = withPrecision(width);
      videoEl.style.height = withPrecision(height);
      videoEl.width = parseFloat(videoEl.style.width);
      videoEl.height = parseFloat(videoEl.style.height);
      if (textureMode === true) {
        videoTexture.size(width, height);
      }
    },
    area() {
      let top = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      let right2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1920;
      let bottom = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1080;
      let left2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      this.position(top, left2);
      this.size(right2 - left2, bottom - top);
    },
    open(url) {
      let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!this.canInteract)
        return;
      metrics2 = Metrics_default.media(url);
      this.hide();
      deregisterEventListeners();
      if (this.src == url) {
        this.clear().then(this.open(url, config));
      } else {
        const adConfig = {
          enabled: state.adsEnabled,
          duration: 300
        };
        if (config.videoId) {
          adConfig.caid = config.videoId;
        }
        Ads.get(adConfig, consumer).then((ads) => {
          state.playingAds = true;
          ads.prerolls().then(() => {
            state.playingAds = false;
            loader(url, videoEl, config).then(() => {
              registerEventListeners();
              this.show();
              this.play();
            }).catch((e) => {
              fireOnConsumer("error", {
                videoElement: videoEl,
                event: e
              });
            });
          });
        });
      }
    },
    reload() {
      if (!this.canInteract)
        return;
      const url = videoEl.getAttribute("src");
      this.close();
      this.open(url);
    },
    close() {
      Ads.cancel();
      if (state.playingAds) {
        state.playingAds = false;
        Ads.stop();
        setTimeout(() => {
          this.close();
        });
      }
      if (!this.canInteract)
        return;
      this.clear();
      this.hide();
      deregisterEventListeners();
    },
    clear() {
      if (!this.canInteract)
        return;
      this.pause();
      if (textureMode === true)
        videoTexture.stop();
      return unloader(videoEl).then(() => {
        fireOnConsumer("Clear", {
          videoElement: videoEl
        });
      });
    },
    play() {
      if (!this.canInteract)
        return;
      if (textureMode === true)
        videoTexture.start();
      execute_as_promise_default(videoEl.play, null, videoEl).catch((e) => {
        fireOnConsumer("error", {
          videoElement: videoEl,
          event: e
        });
      });
    },
    pause() {
      if (!this.canInteract)
        return;
      videoEl.pause();
    },
    playPause() {
      if (!this.canInteract)
        return;
      this.playing === true ? this.pause() : this.play();
    },
    mute() {
      let muted = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      if (!this.canInteract)
        return;
      videoEl.muted = muted;
    },
    loop() {
      let looped = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      videoEl.loop = looped;
    },
    seek(time) {
      if (!this.canInteract)
        return;
      if (!this.src)
        return;
      if (state.playAfterSeek === null) {
        state.playAfterSeek = !!state.playing;
      }
      this.pause();
      videoEl.currentTime = Math.max(0, Math.min(time, this.duration - 0.1));
    },
    skip(seconds) {
      if (!this.canInteract)
        return;
      if (!this.src)
        return;
      state.skipTime = (state.skipTime || videoEl.currentTime) + seconds;
      easeExecution_default(() => {
        this.seek(state.skipTime);
        state.skipTime = false;
      }, 300);
    },
    show() {
      if (!this.canInteract)
        return;
      if (textureMode === true) {
        videoTexture.show();
      } else {
        videoEl.style.display = "block";
        videoEl.style.visibility = "visible";
      }
    },
    hide() {
      if (!this.canInteract)
        return;
      if (textureMode === true) {
        videoTexture.hide();
      } else {
        videoEl.style.display = "none";
        videoEl.style.visibility = "hidden";
      }
    },
    enableAds() {
      let enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      state.adsEnabled = enabled;
    },
    /* Public getters */
    get duration() {
      return videoEl && (isNaN(videoEl.duration) ? Infinity : videoEl.duration);
    },
    get currentTime() {
      return videoEl && videoEl.currentTime;
    },
    get muted() {
      return videoEl && videoEl.muted;
    },
    get looped() {
      return videoEl && videoEl.loop;
    },
    get src() {
      return videoEl && videoEl.getAttribute("src");
    },
    get playing() {
      return state.playing;
    },
    get playingAds() {
      return state.playingAds;
    },
    get canInteract() {
      return state.playingAds === false;
    },
    get top() {
      return videoEl && parseFloat(videoEl.style.top);
    },
    get left() {
      return videoEl && parseFloat(videoEl.style.left);
    },
    get bottom() {
      return videoEl && parseFloat(videoEl.style.top - videoEl.style.height);
    },
    get right() {
      return videoEl && parseFloat(videoEl.style.left - videoEl.style.width);
    },
    get width() {
      return videoEl && parseFloat(videoEl.style.width);
    },
    get height() {
      return videoEl && parseFloat(videoEl.style.height);
    },
    get visible() {
      if (textureMode === true) {
        return videoTexture.isVisible;
      } else {
        return videoEl && videoEl.style.display === "block";
      }
    },
    get adsEnabled() {
      return state.adsEnabled;
    },
    // prefixed with underscore to indicate 'semi-private'
    // because it's not recommended to interact directly with the video element
    get _videoEl() {
      return videoEl;
    },
    get _consumer() {
      return consumer;
    }
  };
  var VideoPlayer_default = autoSetupMixin_default(videoPlayerPlugin, () => {
    precision = ApplicationInstance && ApplicationInstance.stage && ApplicationInstance.stage.getRenderPrecision() || precision;
    videoEl = setupVideoTag();
    textureMode = Settings.get("platform", "textureMode", false);
    if (textureMode === true) {
      videoEl.setAttribute("crossorigin", "anonymous");
      videoTexture = setUpVideoTexture();
    }
  });

  // node_modules/@lightningjs/sdk/src/Ads/index.js
  var consumer2;
  var getAds = () => {
    return Promise.resolve({
      prerolls: [],
      midrolls: [],
      postrolls: []
    });
  };
  var initAds = (config) => {
    if (config.getAds) {
      getAds = config.getAds;
    }
  };
  var state2 = {
    active: false
  };
  var playSlot = function() {
    let slot = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return slot.reduce((promise, ad) => {
      return promise.then(() => {
        return playAd(ad);
      });
    }, Promise.resolve(null));
  };
  var playAd = (ad) => {
    return new Promise((resolve) => {
      if (state2.active === false) {
        Log_default.info("Ad", "Skipping add due to inactive state");
        return resolve();
      }
      const videoEl2 = document.getElementsByTagName("video")[0];
      videoEl2.style.display = "block";
      videoEl2.style.visibility = "visible";
      videoEl2.src = mediaUrl(ad.url);
      videoEl2.load();
      let timeEvents = null;
      let timeout2;
      const cleanup = () => {
        Object.keys(handlers).forEach((handler) => videoEl2.removeEventListener(handler, handlers[handler]));
        resolve();
      };
      const handlers = {
        play() {
          Log_default.info("Ad", "Play ad", ad.url);
          fireOnConsumer2("Play", ad);
          sendBeacon(ad.callbacks, "defaultImpression");
        },
        ended() {
          fireOnConsumer2("Ended", ad);
          sendBeacon(ad.callbacks, "complete");
          cleanup();
        },
        timeupdate() {
          if (!timeEvents && videoEl2.duration) {
            timeEvents = {
              firstQuartile: videoEl2.duration / 4,
              midPoint: videoEl2.duration / 2,
              thirdQuartile: videoEl2.duration / 4 * 3
            };
            Log_default.info("Ad", "Calculated quartiles times", {
              timeEvents
            });
          }
          if (timeEvents && timeEvents.firstQuartile && videoEl2.currentTime >= timeEvents.firstQuartile) {
            fireOnConsumer2("FirstQuartile", ad);
            delete timeEvents.firstQuartile;
            sendBeacon(ad.callbacks, "firstQuartile");
          }
          if (timeEvents && timeEvents.midPoint && videoEl2.currentTime >= timeEvents.midPoint) {
            fireOnConsumer2("MidPoint", ad);
            delete timeEvents.midPoint;
            sendBeacon(ad.callbacks, "midPoint");
          }
          if (timeEvents && timeEvents.thirdQuartile && videoEl2.currentTime >= timeEvents.thirdQuartile) {
            fireOnConsumer2("ThirdQuartile", ad);
            delete timeEvents.thirdQuartile;
            sendBeacon(ad.callbacks, "thirdQuartile");
          }
        },
        stalled() {
          fireOnConsumer2("Stalled", ad);
          timeout2 = setTimeout(() => {
            cleanup();
          }, 5e3);
        },
        canplay() {
          timeout2 && clearTimeout(timeout2);
        },
        error() {
          fireOnConsumer2("Error", ad);
          cleanup();
        },
        // this doesn't work reliably on sky box, moved logic to timeUpdate event
        // loadedmetadata() {
        //   // calculate when to fire the time based events (now that duration is known)
        //   timeEvents = {
        //     firstQuartile: videoEl.duration / 4,
        //     midPoint: videoEl.duration / 2,
        //     thirdQuartile: (videoEl.duration / 4) * 3,
        //   }
        // },
        abort() {
          cleanup();
        }
        // todo: pause, resume, mute, unmute beacons
      };
      Object.keys(handlers).forEach((handler) => videoEl2.addEventListener(handler, handlers[handler]));
      videoEl2.play();
    });
  };
  var sendBeacon = (callbacks2, event2) => {
    if (callbacks2 && callbacks2[event2]) {
      Log_default.info("Ad", "Sending beacon", event2, callbacks2[event2]);
      return callbacks2[event2].reduce((promise, url) => {
        return promise.then(() => fetch(url).then((response) => {
          if (response.status === 200) {
            fireOnConsumer2("Beacon" + event2 + "Sent");
          } else {
            fireOnConsumer2("Beacon" + event2 + "Failed" + response.status);
          }
          Promise.resolve(null);
        }).catch(() => {
          Promise.resolve(null);
        }));
      }, Promise.resolve(null));
    } else {
      Log_default.info("Ad", "No callback found for " + event2);
    }
  };
  var fireOnConsumer2 = (event2, args) => {
    if (consumer2) {
      consumer2.fire("$ad" + event2, args);
      consumer2.fire("$adEvent", event2, args);
    }
  };
  var Ads_default = {
    get(config, videoPlayerConsumer) {
      if (config.enabled === false) {
        return Promise.resolve({
          prerolls() {
            return Promise.resolve();
          }
        });
      }
      consumer2 = videoPlayerConsumer;
      return new Promise((resolve) => {
        Log_default.info("Ad", "Starting session");
        getAds(config).then((ads) => {
          Log_default.info("Ad", "API result", ads);
          resolve({
            prerolls() {
              if (ads.preroll) {
                state2.active = true;
                fireOnConsumer2("PrerollSlotImpression", ads);
                sendBeacon(ads.preroll.callbacks, "slotImpression");
                return playSlot(ads.preroll.ads).then(() => {
                  fireOnConsumer2("PrerollSlotEnd", ads);
                  sendBeacon(ads.preroll.callbacks, "slotEnd");
                  state2.active = false;
                });
              }
              return Promise.resolve();
            },
            midrolls() {
              return Promise.resolve();
            },
            postrolls() {
              return Promise.resolve();
            }
          });
        });
      });
    },
    cancel() {
      Log_default.info("Ad", "Cancel Ad");
      state2.active = false;
    },
    stop() {
      Log_default.info("Ad", "Stop Ad");
      state2.active = false;
      const videoEl2 = document.getElementsByTagName("video")[0];
      videoEl2.pause();
      videoEl2.removeAttribute("src");
    }
  };

  // node_modules/@lightningjs/sdk/src/Application/index.js
  var import_deepmerge = __toESM(require_cjs());

  // node_modules/is-plain-object/dist/is-plain-object.mjs
  function isObject(o2) {
    return Object.prototype.toString.call(o2) === "[object Object]";
  }
  function isPlainObject(o2) {
    var ctor, prot;
    if (isObject(o2) === false)
      return false;
    ctor = o2.constructor;
    if (ctor === void 0)
      return true;
    prot = ctor.prototype;
    if (isObject(prot) === false)
      return false;
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
      return false;
    }
    return true;
  }

  // node_modules/@lightningjs/sdk/src/Locale/index.js
  var warned = false;
  var deprecated = function() {
    let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (force === true || warned === false) {
      console.warn(["The 'Locale'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'Language'-plugin instead.", "https://rdkcentral.github.io/Lightning-SDK/#/plugins/language"].join("\n\n"));
    }
    warned = true;
  };
  var Locale = class {
    constructor() {
      this.__enabled = false;
    }
    /**
     * Loads translation object from external json file.
     *
     * @param {String} path Path to resource.
     * @return {Promise}
     */
    async load(path) {
      if (!this.__enabled) {
        return;
      }
      await fetch(path).then((resp) => resp.json()).then((resp) => {
        this.loadFromObject(resp);
      });
    }
    /**
     * Sets language used by module.
     *
     * @param {String} lang
     */
    setLanguage(lang) {
      deprecated();
      this.__enabled = true;
      this.language = lang;
    }
    /**
     * Returns reference to translation object for current language.
     *
     * @return {Object}
     */
    get tr() {
      deprecated(true);
      return this.__trObj[this.language];
    }
    /**
     * Loads translation object from existing object (binds existing object).
     *
     * @param {Object} trObj
     */
    loadFromObject(trObj) {
      deprecated();
      const fallbackLanguage = "en";
      if (Object.keys(trObj).indexOf(this.language) === -1) {
        Log_default.warn("No translations found for: " + this.language);
        if (Object.keys(trObj).indexOf(fallbackLanguage) > -1) {
          Log_default.warn("Using fallback language: " + fallbackLanguage);
          this.language = fallbackLanguage;
        } else {
          const error = "No translations found for fallback language: " + fallbackLanguage;
          Log_default.error(error);
          throw Error(error);
        }
      }
      this.__trObj = trObj;
      for (const lang of Object.values(this.__trObj)) {
        for (const str of Object.keys(lang)) {
          lang[str] = new LocalizedString(lang[str]);
        }
      }
    }
  };
  var LocalizedString = class _LocalizedString extends String {
    /**
     * Returns formatted LocalizedString.
     * Replaces each placeholder value (e.g. {0}, {1}) with corresponding argument.
     *
     * E.g.:
     * > new LocalizedString('{0} and {1} and {0}').format('A', 'B');
     * A and B and A
     *
     * @param  {...any} args List of arguments for placeholders.
     */
    format() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const sub = args.reduce((string, arg, index) => string.split("{".concat(index, "}")).join(arg), this);
      return new _LocalizedString(sub);
    }
  };
  var Locale_default = new Locale();

  // node_modules/@lightningjs/sdk/src/Metrics/index.js
  var Metrics_default2 = Metrics_default;

  // node_modules/@lightningjs/sdk/src/VersionLabel/index.js
  var VersionLabel = class extends Lightning_default.Component {
    static _template() {
      return {
        rect: true,
        color: 3137370284,
        h: 40,
        w: 100,
        x: (w) => w - 50,
        y: (h2) => h2 - 50,
        mount: 1,
        Text: {
          w: (w) => w,
          h: (h2) => h2,
          y: 5,
          x: 20,
          text: {
            fontSize: 22,
            lineHeight: 26
          }
        }
      };
    }
    _firstActive() {
      this.tag("Text").text = "APP - v".concat(this.version, "\nSDK - v").concat(this.sdkVersion);
      this.tag("Text").loadTexture();
      this.w = this.tag("Text").renderWidth + 40;
      this.h = this.tag("Text").renderHeight + 5;
    }
  };

  // node_modules/@lightningjs/sdk/src/FpsCounter/index.js
  var FpsIndicator = class extends Lightning_default.Component {
    static _template() {
      return {
        rect: true,
        color: 4294967295,
        texture: Lightning_default.Tools.getRoundRect(80, 80, 40),
        h: 80,
        w: 80,
        x: 100,
        y: 100,
        mount: 1,
        Background: {
          x: 3,
          y: 3,
          texture: Lightning_default.Tools.getRoundRect(72, 72, 36),
          color: 4278222848
        },
        Counter: {
          w: (w) => w,
          h: (h2) => h2,
          y: 10,
          text: {
            fontSize: 32,
            textAlign: "center"
          }
        },
        Text: {
          w: (w) => w,
          h: (h2) => h2,
          y: 48,
          text: {
            fontSize: 15,
            textAlign: "center",
            text: "FPS"
          }
        }
      };
    }
    _setup() {
      this.config = {
        ...{
          log: false,
          interval: 500,
          threshold: 1
        },
        ...Settings_default.get("platform", "showFps")
      };
      this.fps = 0;
      this.lastFps = this.fps - this.config.threshold;
      const fpsCalculator = () => {
        this.fps = ~~(1 / this.stage.dt);
      };
      this.stage.on("frameStart", fpsCalculator);
      this.stage.off("framestart", fpsCalculator);
      this.interval = setInterval(this.showFps.bind(this), this.config.interval);
    }
    _firstActive() {
      this.showFps();
    }
    _detach() {
      clearInterval(this.interval);
    }
    showFps() {
      if (Math.abs(this.lastFps - this.fps) <= this.config.threshold)
        return;
      this.lastFps = this.fps;
      let bgColor = 4278222848;
      if (this.fps <= 40 && this.fps > 20)
        bgColor = 4294944e3;
      else if (this.fps <= 20)
        bgColor = 4294901760;
      this.tag("Background").setSmooth("color", bgColor);
      this.tag("Counter").text = "".concat(this.fps);
      this.config.log && Log_default.info("FPS", this.fps);
    }
  };

  // node_modules/@lightningjs/sdk/src/helpers/fetchJson.js
  var fetchJson_default = (file) => {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status === 0 || xhr.status === 200)
            resolve(JSON.parse(xhr.responseText));
          else
            reject(xhr.statusText);
        }
      };
      xhr.open("GET", file);
      xhr.send(null);
    });
  };

  // node_modules/@lightningjs/sdk/src/Utils/index.js
  var basePath;
  var proxyUrl;
  var initUtils = (config) => {
    basePath = ensureUrlWithProtocol(makeFullStaticPath(window.location.pathname, config.path || "/"));
    if (config.proxyUrl) {
      proxyUrl = ensureUrlWithProtocol(config.proxyUrl);
    }
  };
  var Utils_default = {
    asset(relPath) {
      return basePath + relPath;
    },
    proxyUrl(url) {
      let options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return proxyUrl ? proxyUrl + "?" + makeQueryString(url, options2) : url;
    },
    makeQueryString() {
      return makeQueryString(...arguments);
    },
    // since imageworkers don't work without protocol
    ensureUrlWithProtocol() {
      return ensureUrlWithProtocol(...arguments);
    }
  };
  var ensureUrlWithProtocol = (url) => {
    if (/^\/[^/]/i.test(url) && /^(?:file:)/i.test(window.location.protocol)) {
      return window.location.protocol + "//" + url;
    }
    if (/^\/\//.test(url)) {
      return window.location.protocol + url;
    }
    if (!/^(?:https?:)/i.test(url)) {
      return window.location.origin + url;
    }
    return url;
  };
  var makeFullStaticPath = function() {
    let pathname = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "/";
    let path = arguments.length > 1 ? arguments[1] : void 0;
    path = path.charAt(path.length - 1) !== "/" ? path + "/" : path;
    if (/^(?:https?:)?(?:\/\/)/.test(path)) {
      return path;
    }
    if (path.charAt(0) === "/") {
      return path;
    } else {
      pathname = cleanUpPathName(pathname);
      path = path.charAt(0) === "." ? path.substr(1) : path;
      path = path.charAt(0) !== "/" ? "/" + path : path;
      return pathname + path;
    }
  };
  var cleanUpPathName = (pathname) => {
    if (pathname.slice(-1) === "/")
      return pathname.slice(0, -1);
    const parts = pathname.split("/");
    if (parts[parts.length - 1].indexOf(".") > -1)
      parts.pop();
    return parts.join("/");
  };
  var makeQueryString = function(url) {
    let options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let type2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "url";
    options2.operator = "metrological";
    options2[type2] = url;
    return Object.keys(options2).map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent("" + options2[key]);
    }).join("&");
  };

  // node_modules/@lightningjs/sdk/src/Language/index.js
  var meta = {};
  var translations = {};
  var language = null;
  var dictionary = null;
  var initLanguage = function(file) {
    let language2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return new Promise((resolve, reject) => {
      fetchJson_default(file).then((json) => {
        setTranslations(json);
        typeof language2 === "object" && "then" in language2 && typeof language2.then === "function" ? language2.then((lang) => setLanguage(lang).then(resolve).catch(reject)).catch((e) => {
          Log_default.error(e);
          reject(e);
        }) : setLanguage(language2).then(resolve).catch(reject);
      }).catch(() => {
        const error = "Language file " + file + " not found";
        Log_default.error(error);
        reject(error);
      });
    });
  };
  var setTranslations = (obj) => {
    if ("meta" in obj) {
      meta = {
        ...obj.meta
      };
      delete obj.meta;
    }
    translations = obj;
  };
  var setLanguage = (lng) => {
    language = null;
    dictionary = null;
    return new Promise((resolve, reject) => {
      if (lng in translations) {
        language = lng;
      } else {
        if ("map" in meta && lng in meta.map && meta.map[lng] in translations) {
          language = meta.map[lng];
        } else if ("default" in meta && meta.default in translations) {
          const error = "Translations for Language " + language + " not found. Using default language " + meta.default;
          Log_default.warn(error);
          language = meta.default;
        } else {
          const error = "Translations for Language " + language + " not found.";
          Log_default.error(error);
          reject(error);
        }
      }
      if (language) {
        Log_default.info("Setting language to", language);
        const translationsObj = translations[language];
        if (typeof translationsObj === "object") {
          dictionary = translationsObj;
          resolve();
        } else if (typeof translationsObj === "string") {
          const url = Utils_default.asset(translationsObj);
          fetchJson_default(url).then((json) => {
            translations[language] = json;
            dictionary = json;
            resolve();
          }).catch((e) => {
            const error = "Error while fetching " + url;
            Log_default.error(error, e);
            reject(error);
          });
        }
      }
    });
  };

  // node_modules/@lightningjs/sdk/src/Registry/index.js
  var registry = {
    eventListeners: [],
    timeouts: [],
    intervals: [],
    targets: []
  };
  var Registry_default = {
    // Timeouts
    setTimeout(cb, timeout2) {
      for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        params[_key - 2] = arguments[_key];
      }
      const timeoutId = setTimeout(() => {
        registry.timeouts = registry.timeouts.filter((id2) => id2 !== timeoutId);
        cb.apply(null, params);
      }, timeout2, params);
      Log_default.info("Set Timeout", "ID: " + timeoutId);
      registry.timeouts.push(timeoutId);
      return timeoutId;
    },
    clearTimeout(timeoutId) {
      if (registry.timeouts.indexOf(timeoutId) > -1) {
        registry.timeouts = registry.timeouts.filter((id2) => id2 !== timeoutId);
        Log_default.info("Clear Timeout", "ID: " + timeoutId);
        clearTimeout(timeoutId);
      } else {
        Log_default.error("Clear Timeout", "ID " + timeoutId + " not found");
      }
    },
    clearTimeouts() {
      registry.timeouts.forEach((timeoutId) => {
        this.clearTimeout(timeoutId);
      });
    },
    // Intervals
    setInterval(cb, interval) {
      for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }
      const intervalId = setInterval(() => {
        registry.intervals.filter((id2) => id2 !== intervalId);
        cb.apply(null, params);
      }, interval, params);
      Log_default.info("Set Interval", "ID: " + intervalId);
      registry.intervals.push(intervalId);
      return intervalId;
    },
    clearInterval(intervalId) {
      if (registry.intervals.indexOf(intervalId) > -1) {
        registry.intervals = registry.intervals.filter((id2) => id2 !== intervalId);
        Log_default.info("Clear Interval", "ID: " + intervalId);
        clearInterval(intervalId);
      } else {
        Log_default.error("Clear Interval", "ID " + intervalId + " not found");
      }
    },
    clearIntervals() {
      registry.intervals.forEach((intervalId) => {
        this.clearInterval(intervalId);
      });
    },
    // Event listeners
    addEventListener(target, event2, handler) {
      target.addEventListener(event2, handler);
      const targetIndex = registry.targets.indexOf(target) > -1 ? registry.targets.indexOf(target) : registry.targets.push(target) - 1;
      registry.eventListeners[targetIndex] = registry.eventListeners[targetIndex] || {};
      registry.eventListeners[targetIndex][event2] = registry.eventListeners[targetIndex][event2] || [];
      registry.eventListeners[targetIndex][event2].push(handler);
      Log_default.info("Add eventListener", "Target:", target, "Event: " + event2, "Handler:", handler.toString());
    },
    removeEventListener(target, event2, handler) {
      const targetIndex = registry.targets.indexOf(target);
      if (targetIndex > -1 && registry.eventListeners[targetIndex] && registry.eventListeners[targetIndex][event2] && registry.eventListeners[targetIndex][event2].indexOf(handler) > -1) {
        registry.eventListeners[targetIndex][event2] = registry.eventListeners[targetIndex][event2].filter((fn2) => fn2 !== handler);
        Log_default.info("Remove eventListener", "Target:", target, "Event: " + event2, "Handler:", handler.toString());
        target.removeEventListener(event2, handler);
        Object.keys(registry.eventListeners[targetIndex]).forEach((event3) => {
          if (registry.eventListeners[targetIndex][event3].length === 0) {
            delete registry.eventListeners[targetIndex][event3];
          }
        });
        if (Object.keys(registry.eventListeners[targetIndex]).length === 0) {
          registry.targets.splice(targetIndex, 1);
          registry.eventListeners.splice(targetIndex, 1);
        }
      } else {
        Log_default.error("Remove eventListener", "Not found", "Target", target, "Event: " + event2, "Handler", handler.toString());
      }
    },
    // if `event` is omitted, removes all registered event listeners for target
    // if `target` is also omitted, removes all registered event listeners
    removeEventListeners(target, event2) {
      if (target && event2) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          registry.eventListeners[targetIndex][event2].forEach((handler) => {
            this.removeEventListener(target, event2, handler);
          });
        }
      } else if (target) {
        const targetIndex = registry.targets.indexOf(target);
        if (targetIndex > -1) {
          Object.keys(registry.eventListeners[targetIndex]).forEach((_event) => {
            this.removeEventListeners(target, _event);
          });
        }
      } else {
        Object.keys(registry.eventListeners).forEach((targetIndex) => {
          this.removeEventListeners(registry.targets[targetIndex]);
        });
      }
    },
    // Clear everything (to be called upon app close for proper cleanup)
    clear() {
      this.clearTimeouts();
      this.clearIntervals();
      this.removeEventListeners();
      registry.eventListeners = [];
      registry.timeouts = [];
      registry.intervals = [];
      registry.targets = [];
    }
  };

  // node_modules/@lightningjs/sdk/src/Colors/utils.js
  var isObject2 = (v2) => {
    return typeof v2 === "object" && v2 !== null;
  };
  var isString = (v2) => {
    return typeof v2 === "string";
  };

  // node_modules/@lightningjs/sdk/src/Colors/index.js
  var colors = {
    white: "#ffffff",
    black: "#000000",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    yellow: "#feff00",
    cyan: "#00feff",
    magenta: "#ff00ff"
  };
  var normalizedColors = {
    //store for normalized colors
  };
  var addColors = (colorsToAdd, value) => {
    if (isObject2(colorsToAdd)) {
      Object.keys(colorsToAdd).forEach((color) => cleanUpNormalizedColors(color));
      colors = Object.assign({}, colors, colorsToAdd);
    } else if (isString(colorsToAdd) && value) {
      cleanUpNormalizedColors(colorsToAdd);
      colors[colorsToAdd] = value;
    }
  };
  var cleanUpNormalizedColors = (color) => {
    for (let c2 in normalizedColors) {
      if (c2.indexOf(color) > -1) {
        delete normalizedColors[c2];
      }
    }
  };
  var initColors = (file) => {
    return new Promise((resolve, reject) => {
      if (typeof file === "object") {
        addColors(file);
        return resolve();
      }
      fetchJson_default(file).then((json) => {
        addColors(json);
        return resolve();
      }).catch(() => {
        const error = "Colors file " + file + " not found";
        Log_default.error(error);
        return reject(error);
      });
    });
  };

  // node_modules/@lightningjs/sdk/src/Application/index.js
  var packageInfo = {
    name: "@lightningjs/sdk",
    version: "5.5.0",
    license: "Apache-2.0",
    types: "index.d.ts",
    scripts: {
      postinstall: "node ./scripts/postinstall.js",
      lint: "eslint '**/*.js'",
      release: "npm publish --access public",
      typedoc: "typedoc --tsconfig tsconfig.typedoc.json",
      tsd: "tsd"
    },
    "lint-staged": {
      "*.js": ["eslint --fix"],
      "src/startApp.js": ["rollup -c ./rollup.config.js"]
    },
    husky: {
      hooks: {
        "pre-commit": "lint-staged"
      }
    },
    dependencies: {
      "@babel/polyfill": "^7.11.5",
      "@lightningjs/core": "^2.7.0",
      "@metrological/sdk": "^1.0.0",
      "@michieljs/execute-as-promise": "^1.0.0",
      deepmerge: "^4.2.2",
      "is-plain-object": "^5.0.0",
      localcookies: "^2.0.0",
      shelljs: "^0.8.5",
      "url-polyfill": "^1.1.10",
      "whatwg-fetch": "^3.0.0"
    },
    devDependencies: {
      "@babel/core": "^7.11.6",
      "@babel/plugin-transform-parameters": "^7.10.5 ",
      "@babel/plugin-transform-spread": "^7.11.0",
      "@babel/preset-env": "^7.11.5",
      "babel-eslint": "^10.1.0",
      eslint: "^7.10.0",
      "eslint-config-prettier": "^6.12.0",
      "eslint-plugin-prettier": "^3.1.4",
      husky: "^4.3.0",
      "lint-staged": "^10.4.0",
      prettier: "^1.19.1",
      rollup: "^1.32.1",
      "rollup-plugin-babel": "^4.4.0",
      tsd: "^0.22.0",
      typedoc: "^0.23.9"
    },
    repository: {
      type: "git",
      url: "git@github.com:rdkcentral/Lightning-SDK.git"
    },
    bugs: {
      url: "https://github.com/rdkcentral/Lightning-SDK/issues"
    }
  };
  var AppInstance;
  var AppData;
  var defaultOptions = {
    stage: {
      w: 1920,
      h: 1080,
      precision: 1,
      clearColor: 0,
      canvas2d: false
    },
    debug: false,
    defaultFontFace: "RobotoRegular",
    keys: {
      8: "Back",
      13: "Enter",
      27: "Menu",
      37: "Left",
      38: "Up",
      39: "Right",
      40: "Down",
      174: "ChannelDown",
      175: "ChannelUp",
      178: "Stop",
      250: "PlayPause",
      191: "Search",
      // Use "/" for keyboard
      409: "Search"
    }
  };
  var customFontFaces = [];
  var fontLoader = (fonts, store2) => new Promise((resolve, reject) => {
    fonts.map((_ref) => {
      let {
        family,
        url,
        urls,
        descriptors: descriptors2
      } = _ref;
      return () => {
        const src = urls ? urls.map((url2) => {
          return "url(" + url2 + ")";
        }) : "url(" + url + ")";
        const fontFace = new FontFace(family, src, descriptors2 || {});
        store2.push(fontFace);
        Log_default.info("Loading font", family);
        document.fonts.add(fontFace);
        return fontFace.load();
      };
    }).reduce((promise, method) => {
      return promise.then(() => method());
    }, Promise.resolve(null)).then(resolve).catch(reject);
  });
  function Application_default(App2, appData, platformSettings) {
    const {
      width,
      height
    } = platformSettings;
    if (width && height) {
      defaultOptions.stage["w"] = width;
      defaultOptions.stage["h"] = height;
      defaultOptions.stage["precision"] = width / 1920;
    }
    if (!width && !height && window.innerHeight === 720) {
      defaultOptions.stage["w"] = 1280;
      defaultOptions.stage["h"] = 720;
      defaultOptions.stage["precision"] = 1280 / 1920;
    }
    return class Application extends Lightning_default.Application {
      constructor(options2) {
        const config = (0, import_deepmerge.default)(defaultOptions, options2, {
          isMergeableObject: isPlainObject
        });
        super(config);
        this.config = config;
      }
      static _template() {
        return {
          w: 1920,
          h: 1080
        };
      }
      colorshift() {
        let type2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Accessibility_default.colorshift(this, type2, config);
      }
      get keymapping() {
        return this.stage.application.config.keys;
      }
      /**
       * This function overrides the default keymap with the latest keymap.
       * @param customKeyMap
       * @param keepDuplicates
       */
      overrideKeyMap(customKeyMap) {
        let keepDuplicates = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const baseKeyMap = this.stage.application.config.keys;
        Object.keys(customKeyMap).reduce((keymapping, key) => {
          if (!keepDuplicates) {
            Object.keys(baseKeyMap).forEach((baseKey) => {
              if (baseKey != key && baseKeyMap[baseKey] == customKeyMap[key]) {
                delete keymapping[baseKey];
              }
            });
          }
          keymapping[key] = customKeyMap[key];
          return keymapping;
        }, baseKeyMap);
        return baseKeyMap;
      }
      _setup() {
        Promise.all([
          this.loadFonts(App2.config && App2.config.fonts || App2.getFonts && App2.getFonts() || []),
          // to be deprecated
          Locale_default.load(App2.config && App2.config.locale || App2.getLocale && App2.getLocale()),
          App2.language && this.loadLanguage(App2.language()),
          App2.colors && this.loadColors(App2.colors())
        ]).then(() => {
          Metrics_default2.app.loaded();
          this.w = this.config.stage.w / this.config.stage.precision;
          this.h = this.config.stage.h / this.config.stage.precision;
          AppData = appData;
          AppInstance = this.stage.c({
            ref: "App",
            type: App2,
            zIndex: 1,
            forceZIndexContext: !!platformSettings.showVersion || !!platformSettings.showFps
          });
          this.childList.a(AppInstance);
          this._refocus();
          Log_default.info("App version", this.config.version);
          Log_default.info("SDK version", packageInfo.version);
          if (platformSettings.showVersion) {
            this.childList.a({
              ref: "VersionLabel",
              type: VersionLabel,
              version: this.config.version,
              sdkVersion: packageInfo.version,
              zIndex: 1
            });
          }
          if (platformSettings.showFps) {
            this.childList.a({
              ref: "FpsCounter",
              type: FpsIndicator,
              zIndex: 1
            });
          }
          super._setup();
        }).catch(console.error);
      }
      _handleBack() {
        this.closeApp();
      }
      _handleExit() {
        this.closeApp();
      }
      closeApp() {
        Log_default.info("Signaling App Close");
        if (platformSettings.onClose && typeof platformSettings.onClose === "function") {
          platformSettings.onClose(...arguments);
        } else {
          this.close();
        }
      }
      close() {
        Log_default.info("Closing App");
        Settings_default.clearSubscribers();
        Registry_default.clear();
        this.childList.remove(this.tag("App"));
        this.cleanupFonts();
        this.stage.gc();
        this.destroy();
      }
      loadFonts(fonts) {
        return platformSettings.fontLoader && typeof platformSettings.fontLoader === "function" ? platformSettings.fontLoader(fonts, customFontFaces) : fontLoader(fonts, customFontFaces);
      }
      cleanupFonts() {
        if ("delete" in document.fonts) {
          customFontFaces.forEach((fontFace) => {
            Log_default.info("Removing font", fontFace.family);
            document.fonts.delete(fontFace);
          });
        } else {
          Log_default.info("No support for removing manually-added fonts");
        }
      }
      loadLanguage(config) {
        let file = Utils_default.asset("translations.json");
        let language2 = config;
        if (typeof language2 === "object") {
          language2 = config.language || null;
          file = config.file || file;
        }
        return initLanguage(file, language2);
      }
      loadColors(config) {
        let file = Utils_default.asset("colors.json");
        if (config && (typeof config === "string" || typeof config === "object")) {
          file = config;
        }
        return initColors(file);
      }
      set focus(v2) {
        this._focussed = v2;
        this._refocus();
      }
      _getFocused() {
        return this._focussed || this.tag("App");
      }
    };
  }

  // node_modules/@lightningjs/sdk/src/Img/ScaledImageTexture.js
  var ScaledImageTexture = class extends Lightning_default.textures.ImageTexture {
    constructor(stage2) {
      super(stage2);
      this._scalingOptions = void 0;
    }
    set options(options2) {
      this.resizeMode = this._scalingOptions = options2;
    }
    _getLookupId() {
      return "".concat(this._src, "-").concat(this._scalingOptions.type, "-").concat(this._scalingOptions.w, "-").concat(this._scalingOptions.h);
    }
    getNonDefaults() {
      const obj = super.getNonDefaults();
      if (this._src) {
        obj.src = this._src;
      }
      return obj;
    }
  };

  // node_modules/@lightningjs/sdk/src/MediaPlayer/index.js
  var events = ["timeupdate", "error", "ended", "loadeddata", "canplay", "play", "playing", "pause", "loadstart", "seeking", "seeked", "encrypted"];
  var mediaUrl2 = (url) => url;
  var initMediaPlayer = (config) => {
    if (config.mediaUrl) {
      mediaUrl2 = config.mediaUrl;
    }
  };
  var Mediaplayer = class extends Lightning_default.Component {
    _construct() {
      this._skipRenderToTexture = false;
      this._metrics = null;
      this._textureMode = Settings_default.get("platform", "textureMode") || false;
      Log_default.info("Texture mode: " + this._textureMode);
      console.warn(["The 'MediaPlayer'-plugin in the Lightning-SDK is deprecated and will be removed in future releases.", "Please consider using the new 'VideoPlayer'-plugin instead.", "https://rdkcentral.github.io/Lightning-SDK/#/plugins/videoplayer"].join("\n\n"));
    }
    static _template() {
      return {
        Video: {
          VideoWrap: {
            VideoTexture: {
              visible: false,
              pivot: 0.5,
              texture: {
                type: Lightning_default.textures.StaticTexture,
                options: {}
              }
            }
          }
        }
      };
    }
    set skipRenderToTexture(v2) {
      this._skipRenderToTexture = v2;
    }
    get textureMode() {
      return this._textureMode;
    }
    get videoView() {
      return this.tag("Video");
    }
    _init() {
      const videoEls = document.getElementsByTagName("video");
      if (videoEls && videoEls.length > 0)
        this.videoEl = videoEls[0];
      else {
        this.videoEl = document.createElement("video");
        this.videoEl.setAttribute("id", "video-player");
        this.videoEl.style.position = "absolute";
        this.videoEl.style.zIndex = "1";
        this.videoEl.style.display = "none";
        this.videoEl.setAttribute("width", "100%");
        this.videoEl.setAttribute("height", "100%");
        this.videoEl.style.visibility = this.textureMode ? "hidden" : "visible";
        document.body.appendChild(this.videoEl);
      }
      if (this.textureMode && !this._skipRenderToTexture) {
        this._createVideoTexture();
      }
      this.eventHandlers = [];
    }
    _registerListeners() {
      events.forEach((event2) => {
        const handler = (e) => {
          if (this._metrics && this._metrics[event2] && typeof this._metrics[event2] === "function") {
            this._metrics[event2]({
              currentTime: this.videoEl.currentTime
            });
          }
          this.fire(event2, {
            videoElement: this.videoEl,
            event: e
          });
        };
        this.eventHandlers.push(handler);
        this.videoEl.addEventListener(event2, handler);
      });
    }
    _deregisterListeners() {
      Log_default.info("Deregistering event listeners MediaPlayer");
      events.forEach((event2, index) => {
        this.videoEl.removeEventListener(event2, this.eventHandlers[index]);
      });
      this.eventHandlers = [];
    }
    _attach() {
      this._registerListeners();
    }
    _detach() {
      this._deregisterListeners();
      this.close();
    }
    _createVideoTexture() {
      const stage2 = this.stage;
      const gl = stage2.gl;
      const glTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      this.videoTexture.options = {
        source: glTexture,
        w: this.videoEl.width,
        h: this.videoEl.height
      };
    }
    _startUpdatingVideoTexture() {
      if (this.textureMode && !this._skipRenderToTexture) {
        const stage2 = this.stage;
        if (!this._updateVideoTexture) {
          this._updateVideoTexture = () => {
            if (this.videoTexture.options.source && this.videoEl.videoWidth && this.active) {
              const gl = stage2.gl;
              const currentTime = (/* @__PURE__ */ new Date()).getTime();
              const frameCount = this.videoEl.webkitDecodedFrameCount;
              const mustUpdate = frameCount ? this._lastFrame !== frameCount : this._lastTime < currentTime - 30;
              if (mustUpdate) {
                this._lastTime = currentTime;
                this._lastFrame = frameCount;
                try {
                  gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
                  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.videoEl);
                  this._lastFrame = this.videoEl.webkitDecodedFrameCount;
                  this.videoTextureView.visible = true;
                  this.videoTexture.options.w = this.videoEl.videoWidth;
                  this.videoTexture.options.h = this.videoEl.videoHeight;
                  const expectedAspectRatio = this.videoTextureView.w / this.videoTextureView.h;
                  const realAspectRatio = this.videoEl.videoWidth / this.videoEl.videoHeight;
                  if (expectedAspectRatio > realAspectRatio) {
                    this.videoTextureView.scaleX = realAspectRatio / expectedAspectRatio;
                    this.videoTextureView.scaleY = 1;
                  } else {
                    this.videoTextureView.scaleY = expectedAspectRatio / realAspectRatio;
                    this.videoTextureView.scaleX = 1;
                  }
                } catch (e) {
                  Log_default.error("texImage2d video", e);
                  this._stopUpdatingVideoTexture();
                  this.videoTextureView.visible = false;
                }
                this.videoTexture.source.forceRenderUpdate();
              }
            }
          };
        }
        if (!this._updatingVideoTexture) {
          stage2.on("frameStart", this._updateVideoTexture);
          this._updatingVideoTexture = true;
        }
      }
    }
    _stopUpdatingVideoTexture() {
      if (this.textureMode) {
        const stage2 = this.stage;
        stage2.removeListener("frameStart", this._updateVideoTexture);
        this._updatingVideoTexture = false;
        this.videoTextureView.visible = false;
        if (this.videoTexture.options.source) {
          const gl = stage2.gl;
          gl.bindTexture(gl.TEXTURE_2D, this.videoTexture.options.source);
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
      }
    }
    updateSettings() {
      let settings3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this._consumer = settings3.consumer;
      if (this._consumer && this._consumer.getMediaplayerSettings) {
        settings3 = Object.assign(settings3, this._consumer.getMediaplayerSettings());
      }
      if (!Lightning_default.Utils.equalValues(this._stream, settings3.stream)) {
        if (settings3.stream && settings3.stream.keySystem) {
          navigator.requestMediaKeySystemAccess(settings3.stream.keySystem.id, settings3.stream.keySystem.config).then((keySystemAccess) => {
            return keySystemAccess.createMediaKeys();
          }).then((createdMediaKeys) => {
            return this.videoEl.setMediaKeys(createdMediaKeys);
          }).then(() => {
            if (settings3.stream && settings3.stream.src)
              this.open(settings3.stream.src);
          }).catch(() => {
            console.error("Failed to set up MediaKeys");
          });
        } else if (settings3.stream && settings3.stream.src) {
          if (Settings_default.get("app", "hls")) {
            if (!window.Hls) {
              window.Hls = class Hls {
                static isSupported() {
                  console.warn("hls-light not included");
                  return false;
                }
              };
            }
            if (window.Hls.isSupported()) {
              if (!this._hls)
                this._hls = new window.Hls({
                  liveDurationInfinity: true
                });
              this._hls.loadSource(settings3.stream.src);
              this._hls.attachMedia(this.videoEl);
              this.videoEl.style.display = "block";
            }
          } else {
            this.open(settings3.stream.src);
          }
        } else {
          this.close();
        }
        this._stream = settings3.stream;
      }
      this._setHide(settings3.hide);
      this._setVideoArea(settings3.videoPos);
    }
    _setHide(hide) {
      if (this.textureMode) {
        this.tag("Video").setSmooth("alpha", hide ? 0 : 1);
      } else {
        this.videoEl.style.visibility = hide ? "hidden" : "visible";
      }
    }
    open(url) {
      let settings3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        hide: false,
        videoPosition: null
      };
      url = mediaUrl2(url);
      this._metrics = Metrics_default2.media(url);
      Log_default.info("Playing stream", url);
      if (this.application.noVideo) {
        Log_default.info("noVideo option set, so ignoring: " + url);
        return;
      }
      if (this.videoEl.getAttribute("src") === url) {
        this.close();
      }
      this.videoEl.setAttribute("src", url);
      this.videoEl.style.visibility = "hidden";
      this.videoEl.style.display = "none";
      setTimeout(() => {
        this.videoEl.style.display = "block";
        this.videoEl.style.visibility = "visible";
      });
      this._setHide(settings3.hide);
      this._setVideoArea(settings3.videoPosition || [0, 0, 1920, 1080]);
    }
    close() {
      this.videoEl.pause();
      this.videoEl.removeAttribute("src");
      this.videoEl.load();
      this._clearSrc();
      this.videoEl.style.display = "none";
    }
    playPause() {
      if (this.isPlaying()) {
        this.doPause();
      } else {
        this.doPlay();
      }
    }
    get muted() {
      return this.videoEl.muted;
    }
    set muted(v2) {
      this.videoEl.muted = v2;
    }
    get loop() {
      return this.videoEl.loop;
    }
    set loop(v2) {
      this.videoEl.loop = v2;
    }
    isPlaying() {
      return this._getState() === "Playing";
    }
    doPlay() {
      this.videoEl.play();
    }
    doPause() {
      this.videoEl.pause();
    }
    reload() {
      var url = this.videoEl.getAttribute("src");
      this.close();
      this.videoEl.src = url;
    }
    getPosition() {
      return Promise.resolve(this.videoEl.currentTime);
    }
    setPosition(pos) {
      this.videoEl.currentTime = pos;
    }
    getDuration() {
      return Promise.resolve(this.videoEl.duration);
    }
    seek(time) {
      let absolute = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (absolute) {
        this.videoEl.currentTime = time;
      } else {
        this.videoEl.currentTime += time;
      }
    }
    get videoTextureView() {
      return this.tag("Video").tag("VideoTexture");
    }
    get videoTexture() {
      return this.videoTextureView.texture;
    }
    _setVideoArea(videoPos) {
      if (Lightning_default.Utils.equalValues(this._videoPos, videoPos)) {
        return;
      }
      this._videoPos = videoPos;
      if (this.textureMode) {
        this.videoTextureView.patch({
          smooth: {
            x: videoPos[0],
            y: videoPos[1],
            w: videoPos[2] - videoPos[0],
            h: videoPos[3] - videoPos[1]
          }
        });
      } else {
        const precision2 = this.stage.getRenderPrecision();
        this.videoEl.style.left = Math.round(videoPos[0] * precision2) + "px";
        this.videoEl.style.top = Math.round(videoPos[1] * precision2) + "px";
        this.videoEl.style.width = Math.round((videoPos[2] - videoPos[0]) * precision2) + "px";
        this.videoEl.style.height = Math.round((videoPos[3] - videoPos[1]) * precision2) + "px";
      }
    }
    _fireConsumer(event2, args) {
      if (this._consumer) {
        this._consumer.fire(event2, args);
      }
    }
    _equalInitData(buf1, buf2) {
      if (!buf1 || !buf2)
        return false;
      if (buf1.byteLength != buf2.byteLength)
        return false;
      const dv1 = new Int8Array(buf1);
      const dv2 = new Int8Array(buf2);
      for (let i2 = 0; i2 != buf1.byteLength; i2++)
        if (dv1[i2] != dv2[i2])
          return false;
      return true;
    }
    error(args) {
      this._fireConsumer("$mediaplayerError", args);
      this._setState("");
      return "";
    }
    loadeddata(args) {
      this._fireConsumer("$mediaplayerLoadedData", args);
    }
    play(args) {
      this._fireConsumer("$mediaplayerPlay", args);
    }
    playing(args) {
      this._fireConsumer("$mediaplayerPlaying", args);
      this._setState("Playing");
    }
    canplay(args) {
      this.videoEl.play();
      this._fireConsumer("$mediaplayerStart", args);
    }
    loadstart(args) {
      this._fireConsumer("$mediaplayerLoad", args);
    }
    seeked() {
      this._fireConsumer("$mediaplayerSeeked", {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    seeking() {
      this._fireConsumer("$mediaplayerSeeking", {
        currentTime: this.videoEl.currentTime,
        duration: this.videoEl.duration || 1
      });
    }
    durationchange(args) {
      this._fireConsumer("$mediaplayerDurationChange", args);
    }
    encrypted(args) {
      const video = args.videoElement;
      const event2 = args.event;
      if (video.mediaKeys && !this._equalInitData(this._previousInitData, event2.initData)) {
        this._previousInitData = event2.initData;
        this._fireConsumer("$mediaplayerEncrypted", args);
      }
    }
    static _states() {
      return [class Playing extends this {
        $enter() {
          this._startUpdatingVideoTexture();
        }
        $exit() {
          this._stopUpdatingVideoTexture();
        }
        timeupdate() {
          this._fireConsumer("$mediaplayerProgress", {
            currentTime: this.videoEl.currentTime,
            duration: this.videoEl.duration || 1
          });
        }
        ended(args) {
          this._fireConsumer("$mediaplayerEnded", args);
          this._setState("");
        }
        pause(args) {
          this._fireConsumer("$mediaplayerPause", args);
          this._setState("Playing.Paused");
        }
        _clearSrc() {
          this._fireConsumer("$mediaplayerStop", {});
          this._setState("");
        }
        static _states() {
          return [class Paused extends this {
          }];
        }
      }];
    }
  };

  // node_modules/localcookies/module/localCookie.js
  var localCookie = class {
    constructor(e) {
      return e = e || {}, this.forceCookies = e.forceCookies || false, true === this._checkIfLocalStorageWorks() && true !== e.forceCookies ? {
        getItem: this._getItemLocalStorage,
        setItem: this._setItemLocalStorage,
        removeItem: this._removeItemLocalStorage,
        clear: this._clearLocalStorage,
        keys: this._getLocalStorageKeys
      } : {
        getItem: this._getItemCookie,
        setItem: this._setItemCookie,
        removeItem: this._removeItemCookie,
        clear: this._clearCookies,
        keys: this._getCookieKeys
      };
    }
    _checkIfLocalStorageWorks() {
      if ("undefined" == typeof localStorage)
        return false;
      try {
        return localStorage.setItem("feature_test", "yes"), "yes" === localStorage.getItem("feature_test") && (localStorage.removeItem("feature_test"), true);
      } catch (e) {
        return false;
      }
    }
    _getItemLocalStorage(e) {
      return window.localStorage.getItem(e);
    }
    _setItemLocalStorage(e, t) {
      return window.localStorage.setItem(e, t);
    }
    _removeItemLocalStorage(e) {
      return window.localStorage.removeItem(e);
    }
    _clearLocalStorage() {
      return window.localStorage.clear();
    }
    _getLocalStorageKeys() {
      return Object.keys(window.localStorage);
    }
    _getItemCookie(e) {
      var t = document.cookie.match(RegExp("(?:^|;\\s*)" + function(e2) {
        return e2.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1");
      }(e) + "=([^;]*)"));
      return t && "" === t[1] && (t[1] = null), t ? t[1] : null;
    }
    _setItemCookie(e, t) {
      var o2 = /* @__PURE__ */ new Date(), r2 = new Date(o2.getTime() + 15768e7);
      document.cookie = "".concat(e, "=").concat(t, "; expires=").concat(r2.toUTCString(), ";");
    }
    _removeItemCookie(e) {
      document.cookie = "".concat(e, "=;Max-Age=-99999999;");
    }
    _clearCookies() {
      document.cookie.split(";").forEach((e) => {
        document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=Max-Age=-99999999");
      });
    }
    _getCookieKeys() {
      return document.cookie.split(";").map((e) => e.split("=")[0]);
    }
  };
  var localCookie_default = localCookie;

  // node_modules/@lightningjs/sdk/src/Storage/index.js
  var namespace;
  var lc;
  var initStorage = () => {
    namespace = Settings_default.get("platform", "id");
    lc = new localCookie_default();
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/regex.js
  var hasRegex = /\{\/(.*?)\/([igm]{0,3})\}/g;
  var isWildcard = /^[!*$]$/;
  var hasLookupId = /\/:\w+?@@([0-9]+?)@@/;
  var isNamedGroup = /^\/:/;
  var stripRegex = function(route) {
    let char = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "R";
    if (hasRegex.test(route)) {
      route = route.replace(hasRegex, char);
    }
    return route;
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/register.js
  var createRegister = (flags) => {
    const reg = /* @__PURE__ */ new Map();
    [...Object.keys(flags), ...Object.getOwnPropertySymbols(flags)].forEach((key) => {
      reg.set(key, flags[key]);
    });
    return reg;
  };

  // node_modules/@lightningjs/sdk/src/Router/model/Request.js
  var Request = class {
    constructor() {
      let hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      let navArgs = arguments.length > 1 ? arguments[1] : void 0;
      let storeCaller = arguments.length > 2 ? arguments[2] : void 0;
      this._hash = hash;
      this._storeCaller = storeCaller;
      this._register = /* @__PURE__ */ new Map();
      this._isCreated = false;
      this._isSharedInstance = false;
      this._cancelled = false;
      this._copiedHistoryState = null;
      if (isObject3(navArgs)) {
        this._register = createRegister(navArgs);
      } else if (isBoolean(navArgs)) {
        this._storeCaller = navArgs;
      }
      this._register.set(symbols.store, this._storeCaller);
    }
    cancel() {
      Log_default.debug("[router]:", "cancelled ".concat(this._hash));
      this._cancelled = true;
    }
    get url() {
      return this._hash;
    }
    get register() {
      return this._register;
    }
    get hash() {
      return this._hash;
    }
    set hash(args) {
      this._hash = args;
    }
    get route() {
      return this._route;
    }
    set route(args) {
      this._route = args;
    }
    get provider() {
      return this._provider;
    }
    set provider(args) {
      this._provider = args;
    }
    get providerType() {
      return this._providerType;
    }
    set providerType(args) {
      this._providerType = args;
    }
    set page(args) {
      this._page = args;
    }
    get page() {
      return this._page;
    }
    set isCreated(args) {
      this._isCreated = args;
    }
    get isCreated() {
      return this._isCreated;
    }
    get isSharedInstance() {
      return this._isSharedInstance;
    }
    set isSharedInstance(args) {
      this._isSharedInstance = args;
    }
    get isCancelled() {
      return this._cancelled;
    }
    set copiedHistoryState(v2) {
      this._copiedHistoryState = v2;
    }
    get copiedHistoryState() {
      return this._copiedHistoryState;
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/model/Route.js
  var Route = class {
    constructor() {
      let config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let type2 = ["on", "before", "after"].reduce((acc, type3) => {
        return isFunction(config[type3]) ? type3 : acc;
      }, void 0);
      this._cfg = config;
      if (type2) {
        this._provider = {
          type: type2,
          request: config[type2]
        };
      }
    }
    get path() {
      return this._cfg.path;
    }
    get name() {
      return this._cfg.name;
    }
    get component() {
      return this._cfg.component;
    }
    get options() {
      return this._cfg.options;
    }
    get widgets() {
      return this._cfg.widgets;
    }
    get cache() {
      return this._cfg.cache;
    }
    get hook() {
      return this._cfg.hook;
    }
    get beforeNavigate() {
      return this._cfg.beforeNavigate;
    }
    get provider() {
      return this._provider;
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/route.js
  var getFloor = (route) => {
    return stripRegex(route).split("/").length;
  };
  var getRoutesByFloor = (floor) => {
    const matches = [];
    for (let [route] of routes.entries()) {
      if (getFloor(route) === floor) {
        matches.push(route);
      }
    }
    return matches;
  };
  var getRouteByHash = (hash) => {
    hash = hash.replace(/^#/, "");
    const getUrlParts = /(\/?:?[^/]+)/g;
    const candidates = getRoutesByFloor(getFloor(hash));
    const hashParts = hash.match(getUrlParts) || [];
    let regexStore = [];
    let matches = candidates.filter((route) => {
      let isMatching = true;
      if (hasRegex.test(route)) {
        const regMatches = route.match(hasRegex);
        if (regMatches && regMatches.length) {
          route = regMatches.reduce((fullRoute, regex) => {
            const lookupId = regexStore.length;
            fullRoute = fullRoute.replace(regex, "@@".concat(lookupId, "@@"));
            regexStore.push(regex.substring(1, regex.length - 1));
            return fullRoute;
          }, route);
        }
      }
      const routeParts = route.match(getUrlParts) || [];
      for (let i2 = 0, j = routeParts.length; i2 < j; i2++) {
        const routePart = routeParts[i2];
        const hashPart = hashParts[i2];
        if (hasLookupId.test(routePart)) {
          const routeMatches = hasLookupId.exec(routePart);
          const storeId = routeMatches[1];
          const routeRegex = regexStore[storeId];
          const regMatches = /\/([^\/]+)\/([igm]{0,3})/.exec(routeRegex);
          if (regMatches && regMatches.length) {
            const expression = regMatches[1];
            const modifiers = regMatches[2];
            const regex = new RegExp("^/".concat(expression, "$"), modifiers);
            if (!regex.test(hashPart)) {
              isMatching = false;
            }
          }
        } else if (isNamedGroup.test(routePart)) {
          continue;
        } else if (hashPart && routePart.toLowerCase() !== hashPart.toLowerCase()) {
          isMatching = false;
        }
      }
      return isMatching;
    });
    if (matches.length) {
      if (matches.indexOf(hash) !== -1) {
        const match = matches[matches.indexOf(hash)];
        return routes.get(match);
      } else {
        matches = matches.sort((a2) => {
          return isNamedGroup.test(a2) ? -1 : 1;
        });
        if (routeExists(matches[0])) {
          return routes.get(matches[0]);
        }
      }
    }
    return false;
  };
  var getValuesFromHash = function() {
    let hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    let path = arguments.length > 1 ? arguments[1] : void 0;
    path = stripRegex(path, "");
    const getUrlParts = /(\/?:?[\w%\s:.-]+)/g;
    const hashParts = hash.match(getUrlParts) || [];
    const routeParts = path.match(getUrlParts) || [];
    const getNamedGroup = /^\/:([\w-]+)\/?/;
    return routeParts.reduce((storage, value, index) => {
      const match = getNamedGroup.exec(value);
      if (match && match.length) {
        storage.set(match[1], decodeURIComponent(hashParts[index].replace(/^\//, "")));
      }
      return storage;
    }, /* @__PURE__ */ new Map());
  };
  var getOption = (stack, prop2) => {
    if (stack && stack.hasOwnProperty(prop2)) {
      return stack[prop2];
    }
  };
  var createRoute = (config) => {
    if (config.path === "$") {
      let options2 = {
        preventStorage: true
      };
      if (isObject3(config.options)) {
        options2 = {
          ...config.options,
          ...options2
        };
      }
      config.options = options2;
      if (bootRequest) {
        config.after = bootRequest;
      }
    }
    return new Route(config);
  };
  var createRequest = (url, args, store2) => {
    return new Request(url, args, store2);
  };
  var getHashByName = (obj) => {
    if (!obj.to && !obj.name) {
      return false;
    }
    const route = getRouteByName(obj.to || obj.name);
    const hasDynamicGroup = /\/:([\w-]+)\/?/;
    let hash = route;
    if (hasDynamicGroup.test(route)) {
      if (obj.params) {
        const keys2 = Object.keys(obj.params);
        hash = keys2.reduce((acc, key) => {
          return acc.replace(":".concat(key), obj.params[key]);
        }, route);
      }
      if (obj.query) {
        return "".concat(hash).concat(objectToQueryString(obj.query));
      }
    }
    return hash;
  };
  var getRouteByName = (name2) => {
    for (let [path, route] of routes.entries()) {
      if (route.name === name2) {
        return path;
      }
    }
    return false;
  };
  var keepActivePageAlive = (route, request) => {
    if (isString2(route)) {
      const routes2 = getRoutes();
      if (routes2.has(route)) {
        route = routes2.get(route);
      } else {
        return false;
      }
    }
    const register = request.register;
    const routeOptions = route.options;
    if (register.has("keepAlive")) {
      return register.get("keepAlive");
    } else if (routeOptions && routeOptions.keepAlive) {
      return routeOptions.keepAlive;
    }
    return false;
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/emit.js
  var emit_default = function(page) {
    let events2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!isArray(events2)) {
      events2 = [events2];
    }
    events2.forEach((e) => {
      const event2 = "_on".concat(ucfirst(e));
      if (isFunction(page[event2])) {
        page[event2](params);
      }
    });
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/widgets.js
  var activeWidget = null;
  var getReferences = () => {
    if (!widgetsHost) {
      return;
    }
    return widgetsHost.get().reduce((storage, widget) => {
      const key = widget.ref.toLowerCase();
      storage[key] = widget;
      return storage;
    }, {});
  };
  var updateWidgets = (widgets, page) => {
    const configured = (widgets || []).map((ref) => ref.toLowerCase());
    widgetsHost.forEach((widget) => {
      widget.visible = configured.indexOf(widget.ref.toLowerCase()) !== -1;
      if (widget.visible) {
        emit_default(widget, ["activated"], page);
      }
    });
    if (app.state === "Widgets" && activeWidget && !activeWidget.visible) {
      app._setState("");
    }
  };
  var getWidgetByName = (name2) => {
    name2 = ucfirst(name2);
    return widgetsHost.getByRef(name2) || false;
  };
  var focusWidget = (name2) => {
    const widget = getWidgetByName(name2);
    if (widget) {
      setActiveWidget(widget);
      if (app.state === "Widgets") {
        app.reload(activeWidget);
      } else {
        app._setState("Widgets", [activeWidget]);
      }
    }
  };
  var restoreFocus = () => {
    activeWidget = null;
    app._setState("");
  };
  var getActiveWidget = () => {
    return activeWidget;
  };
  var setActiveWidget = (instance) => {
    activeWidget = instance;
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/components.js
  var createComponent = (stage2, type2) => {
    return stage2.c({
      type: type2,
      visible: false,
      widgets: getReferences()
    });
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/history.js
  var history = [];
  var updateHistory = (request) => {
    const hash = getActiveHash();
    if (!hash) {
      return;
    }
    const register = request.register;
    const forceNavigateStore = register.get(symbols.store);
    const activeRoute2 = getRouteByHash(hash);
    const preventStorage = getOption(activeRoute2.options, "preventStorage");
    let store2 = isBoolean(forceNavigateStore) ? forceNavigateStore : !preventStorage;
    if (store2) {
      const toStore = hash.replace(/^\//, "");
      const location = locationInHistory(toStore);
      const stateObject = getStateObject(getActivePage(), request);
      const routerConfig2 = getRouterConfig();
      if (location === -1 || routerConfig2.get("storeSameHash")) {
        history.push({
          hash: toStore,
          state: stateObject
        });
      } else {
        const prev = history.splice(location, 1)[0];
        history.push({
          hash: prev.hash,
          state: stateObject
        });
      }
    }
  };
  var locationInHistory = (hash) => {
    for (let i2 = 0; i2 < history.length; i2++) {
      if (history[i2].hash === hash) {
        return i2;
      }
    }
    return -1;
  };
  var getHistoryState = (hash) => {
    let state4 = null;
    if (history.length) {
      if (!hash) {
        const record = history[history.length - 1];
        state4 = record.state;
      } else {
        if (locationInHistory(hash) !== -1) {
          const record = history[locationInHistory(hash)];
          state4 = record.state;
        }
      }
    }
    return state4;
  };
  var replaceHistoryState = function() {
    let state4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    let hash = arguments.length > 1 ? arguments[1] : void 0;
    if (!history.length) {
      return;
    }
    const location = hash ? locationInHistory(hash) : history.length - 1;
    if (location !== -1 && isObject3(state4)) {
      history[location].state = state4;
    }
  };
  var getStateObject = (page, request) => {
    if (request.isSharedInstance) {
      if (request.copiedHistoryState) {
        return request.copiedHistoryState;
      }
    } else if (page && isFunction(page.historyState)) {
      return page.historyState();
    }
    return null;
  };
  var getHistory = () => {
    return history.slice(0);
  };
  var setHistory = function() {
    let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (isArray(arr)) {
      history = arr;
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/router.js
  var application;
  var app;
  var pagesHost;
  var stage;
  var routerConfig;
  var widgetsHost;
  var rootHash;
  var bootRequest;
  var updateHash = true;
  var beforeEachRoute = async (from, to) => {
    return true;
  };
  var afterEachRoute = () => {
  };
  var routes = /* @__PURE__ */ new Map();
  var components = /* @__PURE__ */ new Map();
  var initialised = false;
  var activePage = null;
  var activeHash;
  var activeRoute;
  var lastAcceptedHash;
  var previousState;
  var mixin = (app2) => {
    if (app2.pages) {
      pagesHost = app2.pages.childList;
    }
    if (app2.widgets && app2.widgets.children) {
      widgetsHost = app2.widgets.childList;
      widgetsHost.forEach((w) => w.visible = false);
    }
    app2._handleBack = (e) => {
      step(-1);
      e.preventDefault();
    };
  };
  var bootRouter = (config, instance) => {
    let {
      appInstance,
      routes: routes2
    } = config;
    if (instance && isPage(instance)) {
      app = instance;
    }
    if (!app) {
      app = appInstance || AppInstance;
    }
    application = app.application;
    pagesHost = application.childList;
    stage = app.stage;
    routerConfig = getConfigMap();
    mixin(app);
    if (isArray(routes2)) {
      setup(config);
    } else if (isFunction(routes2)) {
      console.warn("[Router]: Calling Router.route() directly is deprecated.");
      console.warn("Use object config: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    }
  };
  var setup = (config) => {
    if (!initialised) {
      init(config);
    }
    config.routes.forEach((r2) => {
      const path = cleanHash(r2.path);
      if (!routeExists(path)) {
        const route = createRoute(r2);
        routes.set(path, route);
        if (route.component) {
          let type2 = route.component;
          if (isComponentConstructor(type2)) {
            if (!routerConfig.get("lazyCreate")) {
              type2 = createComponent(stage, type2);
              pagesHost.a(type2);
            }
          }
          components.set(path, type2);
        }
      } else {
        console.error("".concat(path, " already exists in routes configuration"));
      }
    });
  };
  var init = (config) => {
    rootHash = config.root;
    if (isFunction(config.boot)) {
      bootRequest = config.boot;
    }
    if (isBoolean(config.updateHash)) {
      updateHash = config.updateHash;
    }
    if (isFunction(config.beforeEachRoute)) {
      beforeEachRoute = config.beforeEachRoute;
    }
    if (isFunction(config.afterEachRoute)) {
      afterEachRoute = config.afterEachRoute;
    }
    if (config.bootComponent) {
      console.warn("[Router]: Boot Component is now available as a special router: https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration?id=special-routes");
      console.warn("[Router]: setting { bootComponent } property will be deprecated in a future release");
      if (isPage(config.bootComponent)) {
        config.routes.push({
          path: "$",
          component: config.bootComponent,
          // we try to assign the bootRequest as after data-provider
          // so it will behave as any other component
          after: bootRequest || null,
          options: {
            preventStorage: true
          }
        });
      } else {
        console.error("[Router]: ".concat(config.bootComponent, " is not a valid boot component"));
      }
    }
    config.routes.forEach((item) => {
      const strippedPath = stripRegex(item.path);
      const pattern = /.*\/:.*?\?$/u;
      if (pattern.test(strippedPath)) {
        const optionalPath = item.path.substring(0, item.path.lastIndexOf("/"));
        const originalPath = item.path.substring(0, item.path.lastIndexOf("?"));
        item.path = originalPath;
        let optionalItem = {
          ...item
        };
        optionalItem.path = optionalPath;
        config.routes.push(optionalItem);
      }
    });
    initialised = true;
  };
  var storeComponent = (route, type2) => {
    if (components.has(route)) {
      components.set(route, type2);
    }
  };
  var getComponent = (route) => {
    if (components.has(route)) {
      return components.get(route);
    }
    return null;
  };
  var deleteCurrentInstance = (route) => {
    if (components.has(route) && pagesHost.getIndex(components.get(route)) !== -1) {
      pagesHost.remove(components.get(route));
      storeComponent(route, components.get(route)._routedType || components.get(route).constructor);
    }
  };
  var mustUpdateLocationHash = () => {
    if (!routerConfig || !routerConfig.size) {
      return false;
    }
    const updateConfig = routerConfig.get("updateHash");
    return !(isBoolean(updateConfig) && !updateConfig || isBoolean(updateHash) && !updateHash);
  };
  var onRequestResolved = (request) => {
    const hash = request.hash;
    const route = request.route;
    const register = request.register;
    const page = request.page;
    if (getOption(route.options, "clearHistory")) {
      setHistory([]);
    } else if (hash && !isWildcard.test(route.path)) {
      updateHistory(request);
    }
    storeComponent(route.path, page);
    if (request.isSharedInstance || !request.isCreated) {
      emit_default(page, "changed");
    } else if (request.isCreated) {
      emit_default(page, "mounted");
    }
    if (widgetsHost) {
      updateWidgets(route.widgets, page);
    }
    if (getActivePage() && !request.isSharedInstance) {
      cleanUp(activePage, request);
    }
    if (register.get(symbols.historyState) && isFunction(page.historyState)) {
      page.historyState(register.get(symbols.historyState));
    }
    setActivePage(page);
    activeHash = request.hash;
    activeRoute = route.path;
    for (let request2 of navigateQueue.values()) {
      if (request2.isCancelled && request2.hash) {
        navigateQueue.delete(request2.hash);
      }
    }
    afterEachRoute(request);
    Log_default.info("[route]:", route.path);
    Log_default.info("[hash]:", hash);
  };
  var cleanUp = (page, request) => {
    const route = activeRoute;
    const register = request.register;
    const lazyDestroy = routerConfig.get("lazyDestroy");
    const destroyOnBack = routerConfig.get("destroyOnHistoryBack");
    const keepAlive = register.get("keepAlive");
    const isFromHistory = register.get(symbols.backtrack);
    let doCleanup = false;
    if (isFromHistory && (destroyOnBack || lazyDestroy)) {
      doCleanup = true;
    }
    if (lazyDestroy && !keepAlive) {
      doCleanup = true;
    }
    if (activeRoute === request.route.path) {
      doCleanup = true;
    }
    if (doCleanup) {
      storeComponent(route, page._routedType || page.constructor);
      pagesHost.remove(page);
      if (routerConfig.get("gcOnUnload")) {
        stage.gc();
      }
    } else {
      page.patch({
        x: 0,
        y: 0,
        scale: 1,
        visible: false,
        alpha: 1
      });
    }
  };
  var getActiveHash = () => {
    return activeHash;
  };
  var setActivePage = (page) => {
    activePage = page;
  };
  var getActivePage = () => {
    return activePage;
  };
  var getActiveRoute = () => {
    return activeRoute;
  };
  var getLastHash = () => {
    return lastAcceptedHash;
  };
  var setLastHash = (hash) => {
    lastAcceptedHash = hash;
  };
  var setPreviousState = (state4) => {
    previousState = state4;
  };
  var getPreviousState = () => {
    return previousState;
  };
  var routeExists = (key) => {
    return routes.has(key);
  };
  var getRootHash = () => {
    return rootHash;
  };
  var getBootRequest = () => {
    return bootRequest;
  };
  var getRouterConfig = () => {
    return routerConfig;
  };
  var getRoutes = () => {
    return routes;
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/helpers.js
  var isFunction = (v2) => {
    return typeof v2 === "function";
  };
  var isObject3 = (v2) => {
    return typeof v2 === "object" && v2 !== null;
  };
  var isBoolean = (v2) => {
    return typeof v2 === "boolean";
  };
  var isPage = (v2) => {
    if (v2 instanceof Lightning_default.Element || isComponentConstructor(v2)) {
      return true;
    }
    return false;
  };
  var isComponentConstructor = (type2) => {
    return type2.prototype && "isComponent" in type2.prototype;
  };
  var isArray = (v2) => {
    return Array.isArray(v2);
  };
  var ucfirst = (v2) => {
    return "".concat(v2.charAt(0).toUpperCase()).concat(v2.slice(1));
  };
  var isString2 = (v2) => {
    return typeof v2 === "string";
  };
  var isPromise = (method) => {
    let result;
    if (isFunction(method)) {
      try {
        result = method.apply(null);
      } catch (e) {
        result = e;
      }
    } else {
      result = method;
    }
    return isObject3(result) && isFunction(result.then);
  };
  var cleanHash = function() {
    let hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return hash.replace(/^#/, "").replace(/\/+$/, "");
  };
  var getConfigMap = () => {
    const routerSettings = Settings_default.get("platform", "router");
    const isObj = isObject3(routerSettings);
    return ["backtrack", "gcOnUnload", "destroyOnHistoryBack", "lazyCreate", "lazyDestroy", "reuseInstance", "autoRestoreRemote", "numberNavigation", "updateHash", "storeSameHash"].reduce((config, key) => {
      config.set(key, isObj ? routerSettings[key] : Settings_default.get("platform", key));
      return config;
    }, /* @__PURE__ */ new Map());
  };
  var getQueryStringParams = function() {
    let hash = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActiveHash();
    const resumeHash2 = getResumeHash();
    if ((hash === "$" || !hash) && resumeHash2) {
      if (isString2(resumeHash2)) {
        hash = resumeHash2;
      }
    }
    let parse = "";
    const getQuery = /([?&].*)/;
    const matches = getQuery.exec(hash);
    const params = {};
    if (document.location && document.location.search) {
      parse = document.location.search;
    }
    if (matches && matches.length) {
      let hashParams = matches[1];
      if (parse) {
        hashParams = hashParams.replace(/^\?/, "");
        parse = "".concat(parse, "&").concat(hashParams);
      } else {
        parse = hashParams;
      }
    }
    if (parse) {
      const urlParams = new URLSearchParams(parse);
      for (const [key, value] of urlParams.entries()) {
        params[key] = value;
      }
      return params;
    } else {
      return false;
    }
  };
  var objectToQueryString = (obj) => {
    if (!isObject3(obj)) {
      return "";
    }
    return "?" + Object.keys(obj).map((key) => {
      return "".concat(key, "=").concat(obj[key]);
    }).join("&");
  };
  var symbols = {
    route: Symbol("route"),
    hash: Symbol("hash"),
    store: Symbol("store"),
    fromHistory: Symbol("fromHistory"),
    expires: Symbol("expires"),
    resume: Symbol("resume"),
    backtrack: Symbol("backtrack"),
    historyState: Symbol("historyState"),
    queryParams: Symbol("queryParams")
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/provider.js
  var dataHooks = {
    on: (request) => {
      setPreviousState(app.state || "");
      app._setState("Loading");
      return execProvider(request);
    },
    before: (request) => {
      return execProvider(request);
    },
    after: (request) => {
      try {
        execProvider(request, true);
      } catch (e) {
      }
      return Promise.resolve();
    }
  };
  var execProvider = (request, emitProvided) => {
    const route = request.route;
    const provider = route.provider;
    const expires = route.cache ? route.cache * 1e3 : 0;
    const params = addPersistData(request);
    return provider.request(request.page, {
      ...params
    }).then(() => {
      request.page[symbols.expires] = Date.now() + expires;
      if (emitProvided) {
        emit_default(request.page, "dataProvided");
      }
    }).catch((e) => {
      request.page[symbols.expires] = Date.now();
      throw e;
    });
  };
  var addPersistData = (_ref) => {
    let {
      page,
      route,
      hash,
      register = /* @__PURE__ */ new Map()
    } = _ref;
    const urlValues = getValuesFromHash(hash, route.path);
    const queryParams = getQueryStringParams(hash);
    const pageData = new Map([...urlValues, ...register]);
    const params = {};
    for (let [name2, value] of pageData) {
      params[name2] = value;
    }
    if (queryParams) {
      params[symbols.queryParams] = queryParams;
    }
    if (register.size) {
      const obj = {};
      for (let [k2, v2] of register) {
        obj[k2] = v2;
      }
      page.persist = obj;
    }
    page.params = params;
    emit_default(page, ["urlParams"], params);
    return params;
  };
  var isPageExpired = (page) => {
    if (!page[symbols.expires]) {
      return false;
    }
    const expires = page[symbols.expires];
    const now = Date.now();
    return now >= expires;
  };
  var hasProvider = (path) => {
    if (routeExists(path)) {
      const record = routes.get(path);
      return !!record.provider;
    }
    return false;
  };
  var getProvider = (route) => {
    if (routeExists(route.path)) {
      const {
        provider
      } = routes.get(route.path);
      return {
        type: provider.type,
        provider: provider.request
      };
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/transitions.js
  var fade = (i2, o2) => {
    return new Promise((resolve) => {
      i2.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      i2.transition("alpha").on("finish", () => {
        if (o2) {
          o2.visible = false;
        }
        resolve();
      });
    });
  };
  var crossFade = (i2, o2) => {
    return new Promise((resolve) => {
      i2.patch({
        alpha: 0,
        visible: true,
        smooth: {
          alpha: [1, {
            duration: 0.5,
            delay: 0.1
          }]
        }
      });
      if (o2) {
        o2.patch({
          smooth: {
            alpha: [0, {
              duration: 0.5,
              delay: 0.3
            }]
          }
        });
      }
      i2.transition("alpha").on("finish", () => {
        resolve();
      });
    });
  };
  var moveOnAxes = (axis, direction, i2, o2) => {
    const bounds = axis === "x" ? 1920 : 1080;
    return new Promise((resolve) => {
      i2.patch({
        ["".concat(axis)]: direction ? bounds * -1 : bounds,
        visible: true,
        smooth: {
          ["".concat(axis)]: [0, {
            duration: 0.4,
            delay: 0.2
          }]
        }
      });
      if (o2) {
        o2.patch({
          ["".concat(axis)]: 0,
          smooth: {
            ["".concat(axis)]: [direction ? bounds : bounds * -1, {
              duration: 0.4,
              delay: 0.2
            }]
          }
        });
      }
      i2.transition(axis).on("finish", () => {
        resolve();
      });
    });
  };
  var up = (i2, o2) => {
    return moveOnAxes("y", 0, i2, o2);
  };
  var down = (i2, o2) => {
    return moveOnAxes("y", 1, i2, o2);
  };
  var left = (i2, o2) => {
    return moveOnAxes("x", 0, i2, o2);
  };
  var right = (i2, o2) => {
    return moveOnAxes("x", 1, i2, o2);
  };
  var transitions_default = {
    fade,
    crossFade,
    up,
    down,
    left,
    right
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/transition.js
  var executeTransition = function(pageIn) {
    let pageOut = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    const transition = pageIn.pageTransition || pageIn.easing;
    const hasCustomTransitions = !!(pageIn.smoothIn || pageIn.smoothInOut || transition);
    const transitionsDisabled = getRouterConfig().get("disableTransitions");
    if (pageIn.easing) {
      console.warn("easing() method is deprecated and will be removed. Use pageTransition()");
    }
    if (!hasCustomTransitions || transitionsDisabled) {
      pageIn.visible = true;
      if (pageOut) {
        pageOut.visible = false;
      }
      return Promise.resolve();
    }
    if (transition) {
      let type2;
      try {
        type2 = transition.call(pageIn, pageIn, pageOut);
      } catch (e) {
        type2 = "crossFade";
      }
      if (isPromise(type2)) {
        return type2;
      }
      if (isString2(type2)) {
        const fn2 = transitions_default[type2];
        if (fn2) {
          return fn2(pageIn, pageOut);
        }
      }
      if (pageIn.smoothIn) {
        const smooth = function(p2, v2) {
          let args = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return new Promise((resolve) => {
            pageIn.visible = true;
            pageIn.setSmooth(p2, v2, args);
            pageIn.transition(p2).on("finish", () => {
              resolve();
            });
          });
        };
        return pageIn.smoothIn({
          pageIn,
          smooth
        });
      }
    }
    return transitions_default.crossFade(pageIn, pageOut);
  };

  // node_modules/@lightningjs/sdk/src/Router/utils/loader.js
  var load = async (request) => {
    let expired = false;
    try {
      request = await loader2(request);
      if (request && !request.isCancelled) {
        if (app.state === "Loading") {
          if (getPreviousState() === "Widgets") {
            app._setState("Widgets", [getActiveWidget()]);
          } else {
            app._setState("");
          }
        }
        if (!request.isSharedInstance && !request.isCancelled) {
          await executeTransition(request.page, getActivePage());
        }
      } else {
        expired = true;
      }
      if (expired || request.isCancelled) {
        Log_default.debug("[router]:", "Rejected ".concat(request.hash, " because route to ").concat(getLastHash(), " started"));
        if (request.isCreated && !request.isSharedInstance) {
          pagesHost.remove(request.page);
        }
      } else {
        onRequestResolved(request);
        return request.page;
      }
    } catch (request2) {
      if (!request2.route) {
        console.error(request2);
      } else if (!expired) {
        const {
          route
        } = request2;
        if (getOption(route.options, "clearHistory")) {
          setHistory([]);
        } else if (!isWildcard.test(route.path)) {
          updateHistory(request2);
        }
        if (request2.isCreated && !request2.isSharedInstance) {
          pagesHost.remove(request2.page);
        }
        handleError(request2);
      }
    }
  };
  var loader2 = async (request) => {
    const route = request.route;
    const hash = request.hash;
    const register = request.register;
    let type2 = getComponent(route.path);
    let isConstruct = isComponentConstructor(type2);
    let provide = false;
    if (!isConstruct && !register.get(symbols.backtrack)) {
      if (!mustReuse(route)) {
        type2 = type2.constructor;
        isConstruct = true;
      }
    }
    if (!isConstruct) {
      request.page = type2;
      if (hasProvider(route.path)) {
        if (isPageExpired(type2) || type2[symbols.hash] !== hash) {
          provide = true;
        }
      }
      let currentRoute = getActivePage() && getActivePage()[symbols.route];
      if (route.path === currentRoute) {
        request.isSharedInstance = true;
        if (isFunction(request.page.historyState)) {
          request.copiedHistoryState = request.page.historyState();
        }
      }
    } else {
      request.page = createComponent(stage, type2);
      pagesHost.a(request.page);
      if (hasProvider(route.path)) {
        provide = true;
      }
      request.isCreated = true;
    }
    request.page[symbols.hash] = hash;
    request.page[symbols.route] = route.path;
    try {
      if (provide) {
        const {
          type: loadType,
          provider
        } = getProvider(route);
        request.provider = provider;
        request.providerType = loadType;
        await dataHooks[loadType](request);
        if (hash !== getLastHash()) {
          return false;
        } else {
          if (request.providerType !== "after") {
            emit_default(request.page, "dataProvided");
          }
          return request;
        }
      } else {
        addPersistData(request);
        return request;
      }
    } catch (e) {
      request.error = e;
      return Promise.reject(request);
    }
  };
  var handleError = (request) => {
    if (request && request.error) {
      console.error(request.error);
    } else if (request) {
      Log_default.error(request);
    }
    if (request.page && routeExists("!")) {
      navigate("!", {
        request
      }, false);
    }
  };
  var mustReuse = (route) => {
    const opt = getOption(route.options, "reuseInstance");
    const config = routerConfig.get("reuseInstance");
    if (isBoolean(opt)) {
      return opt;
    }
    return !(isBoolean(config) && config === false);
  };

  // node_modules/@lightningjs/sdk/src/Router/base.js
  var RoutedApp = class extends Lightning_default.Component {
    static _template() {
      return {
        Pages: {
          forceZIndexContext: true
        },
        /**
         * This is a default Loading page that will be made visible
         * during data-provider on() you CAN override in child-class
         */
        Loading: {
          rect: true,
          w: 1920,
          h: 1080,
          color: 4278190080,
          visible: false,
          zIndex: 99,
          Label: {
            mount: 0.5,
            x: 960,
            y: 540,
            text: {
              text: "Loading.."
            }
          }
        }
      };
    }
    static _states() {
      return [class Loading extends this {
        $enter() {
          this.tag("Loading").visible = true;
        }
        $exit() {
          this.tag("Loading").visible = false;
        }
      }, class Widgets extends this {
        $enter(args, widget) {
          this._widget = widget;
          this._refocus();
        }
        _getFocused() {
          return this._widget;
        }
        // if we want to widget to widget focus delegation
        reload(widget) {
          this._widget = widget;
          this._refocus();
        }
        _handleKey() {
          const restoreFocus2 = routerConfig.get("autoRestoreRemote");
          if (!isBoolean(restoreFocus2) || restoreFocus2 === true) {
            Router_default.focusPage();
          }
        }
      }];
    }
    /**
     * Return location where pages need to be stored
     */
    get pages() {
      return this.tag("Pages");
    }
    /**
     * Tell router where widgets are stored
     */
    get widgets() {
      return this.tag("Widgets");
    }
    /**
     * we MUST register _handleBack method so the Router
     * can override it
     * @private
     */
    _handleBack() {
    }
    /**
     * We MUST return Router.activePage() so the new Page
     * can listen to the remote-control.
     */
    _getFocused() {
      return Router_default.getActivePage();
    }
  };

  // node_modules/@lightningjs/sdk/src/Router/index.js
  var navigateQueue = /* @__PURE__ */ new Map();
  var forcedHash = "";
  var resumeHash = "";
  var startRouter = (config, instance) => {
    bootRouter(config, instance);
    registerListener();
    start();
  };
  var start = () => {
    let hash = (getHash() || "").replace(/^#/, "");
    const bootKey = "$";
    const params = getQueryStringParams(hash);
    const bootRequest2 = getBootRequest();
    const rootHash2 = getRootHash();
    const isDirectLoad = hash.indexOf(bootKey) !== -1;
    if (isWildcard.test(hash) && hash !== bootKey) {
      hash = "";
    }
    resumeHash = isDirectLoad ? rootHash2 : hash || rootHash2;
    const ready3 = () => {
      if (!hash && rootHash2) {
        if (isString2(rootHash2)) {
          navigate(rootHash2);
        } else if (isFunction(rootHash2)) {
          rootHash2().then((res) => {
            if (isObject3(res)) {
              navigate(res.path, res.params);
            } else {
              navigate(res);
            }
          });
        }
      } else {
        queue(hash);
        handleHashChange().then(() => {
          app._refocus();
        }).catch((e) => {
          console.error(e);
        });
      }
    };
    if (routeExists(bootKey)) {
      if (hash && !isDirectLoad) {
        if (!getRouteByHash(hash)) {
          navigate("*", {
            failedHash: hash
          });
          return;
        }
      }
      navigate(bootKey, {
        resume: resumeHash,
        reload: bootKey === hash
      }, false);
    } else if (isFunction(bootRequest2)) {
      bootRequest2(params).then(() => {
        ready3();
      }).catch((e) => {
        handleBootError(e);
      });
    } else {
      ready3();
    }
  };
  var handleBootError = (e) => {
    if (routeExists("!")) {
      navigate("!", {
        request: {
          error: e
        }
      });
    } else {
      console.error(e);
    }
  };
  var navigate = function(url) {
    let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let store2 = arguments.length > 2 ? arguments[2] : void 0;
    if (isObject3(url)) {
      url = getHashByName(url);
      if (!url) {
        return;
      }
    }
    let hash = getHash();
    if (!mustUpdateLocationHash() && forcedHash) {
      hash = forcedHash;
    }
    if (hash.replace(/^#/, "") !== url) {
      queue(url, args, store2);
      if (mustUpdateLocationHash()) {
        setHash(url);
      } else {
        forcedHash = url;
        handleHashChange(url).then(() => {
          app._refocus();
        }).catch((e) => {
          console.error(e);
        });
      }
    } else if (args.reload) {
      queue(url, args, store2);
      handleHashChange(url).then(() => {
        app._refocus();
      }).catch((e) => {
        console.error(e);
      });
    }
  };
  var queue = function(hash) {
    let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let store2 = arguments.length > 2 ? arguments[2] : void 0;
    hash = cleanHash(hash);
    if (!navigateQueue.has(hash)) {
      for (let request2 of navigateQueue.values()) {
        request2.cancel();
      }
      const request = createRequest(hash, args, store2);
      navigateQueue.set(decodeURIComponent(hash), request);
      return request;
    }
    return false;
  };
  var handleHashChange = async (override) => {
    const hash = cleanHash(override || getHash());
    const queueId = decodeURIComponent(hash);
    let request = navigateQueue.get(queueId);
    if (!request && !navigateQueue.size) {
      request = queue(hash);
    }
    const route = getRouteByHash(hash);
    if (!route) {
      if (routeExists("*")) {
        navigate("*", {
          failedHash: hash
        });
      } else {
        console.error("Unable to navigate to: ".concat(hash));
      }
      return;
    }
    request.hash = hash;
    request.route = route;
    let result = await beforeEachRoute(getActiveHash(), request);
    if (result && route.beforeNavigate) {
      result = await route.beforeNavigate(getActiveHash(), request);
    }
    if (isBoolean(result)) {
      if (result) {
        return resolveHashChange(request);
      }
    } else {
      request.cancel();
      navigateQueue.delete(queueId);
      if (isString2(result)) {
        navigate(result);
      } else if (isObject3(result)) {
        let store2 = true;
        if (isBoolean(result.store)) {
          store2 = result.store;
        }
        navigate(result.path, result.params, store2);
      }
    }
  };
  var resolveHashChange = (request) => {
    const hash = request.hash;
    const route = request.route;
    const queueId = decodeURIComponent(hash);
    setLastHash(hash);
    if (route.path) {
      const component = getComponent(route.path);
      if (isFunction(route.hook)) {
        const urlParams = getValuesFromHash(hash, route.path);
        const params = {};
        for (const key of urlParams.keys()) {
          params[key] = urlParams.get(key);
        }
        route.hook(app, {
          ...params
        });
      }
      if (component) {
        const activePage2 = getActivePage();
        if (activePage2) {
          const keepAlive = keepActivePageAlive(getActiveRoute(), request);
          if (activePage2 && route.path === getActiveRoute() && !keepAlive) {
            activePage2._setState("");
          }
        }
        if (isPage(component, stage)) {
          load(request).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        } else {
          component().then((contents) => {
            return contents.default;
          }).then((module) => {
            storeComponent(route.path, module);
            return load(request);
          }).then(() => {
            app._refocus();
            navigateQueue.delete(queueId);
          });
        }
      } else {
        navigateQueue.delete(queueId);
      }
    }
  };
  var step = function() {
    let level = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    if (!level || isNaN(level)) {
      return false;
    }
    const history2 = getHistory();
    level = Math.abs(level);
    if (history2.length) {
      const route = history2.splice(history2.length - level, level)[0];
      setHistory(history2);
      return navigate(route.hash, {
        [symbols.backtrack]: true,
        [symbols.historyState]: route.state
      }, false);
    } else if (routerConfig.get("backtrack")) {
      const hashLastPart = /(\/:?[\w%\s-]+)$/;
      let hash = stripRegex(getHash());
      let floor = getFloor(hash);
      if (floor > 1) {
        while (floor--) {
          hash = hash.replace(hashLastPart, "");
          if (getRouteByHash(hash)) {
            return navigate(hash, {
              [symbols.backtrack]: true
            }, false);
          }
        }
      }
    }
    if (level > history2.length) {
      if (isFunction(app._handleAppClose)) {
        return app._handleAppClose();
      }
      return app.application.closeApp();
    }
    return false;
  };
  var resume = () => {
    if (isString2(resumeHash)) {
      navigate(resumeHash, false);
      resumeHash = "";
    } else if (isFunction(resumeHash)) {
      resumeHash().then((res) => {
        resumeHash = "";
        if (isObject3(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    } else {
      console.warn("[Router]: resume() called but no hash found");
    }
  };
  var reload = () => {
    if (!isNavigating()) {
      const hash = getActiveHash();
      navigate(hash, {
        reload: true
      }, false);
    }
  };
  var isNavigating = () => {
    if (navigateQueue.size) {
      let isProcessing = false;
      for (let request of navigateQueue.values()) {
        if (!request.isCancelled) {
          isProcessing = true;
        }
      }
      return isProcessing;
    }
    return false;
  };
  var getResumeHash = () => {
    return resumeHash;
  };
  var getHash = () => {
    return document.location.hash;
  };
  var setHash = (url) => {
    document.location.hash = url;
  };
  var initRouter = (config) => {
    if (config.getHash) {
      getHash = config.getHash;
    }
    if (config.setHash) {
      setHash = config.setHash;
    }
  };
  var registerListener = () => {
    Registry_default.addEventListener(window, "hashchange", async () => {
      if (mustUpdateLocationHash()) {
        try {
          await handleHashChange();
        } catch (e) {
          console.error(e);
        }
      }
    });
  };
  var root = () => {
    const rootHash2 = getRootHash();
    if (isString2(rootHash2)) {
      navigate(rootHash2);
    } else if (isFunction(rootHash2)) {
      rootHash2().then((res) => {
        if (isObject3(res)) {
          navigate(res.path, res.params);
        } else {
          navigate(res);
        }
      });
    }
  };
  var deletePage = (param) => {
    deleteCurrentInstance(param);
  };
  var Router_default = {
    startRouter,
    navigate,
    resume,
    step,
    go: step,
    back: step.bind(null, -1),
    activePage: getActivePage,
    getActivePage() {
      return getActivePage();
    },
    deletePage,
    getActiveRoute,
    getActiveHash,
    focusWidget,
    getActiveWidget,
    restoreFocus,
    isNavigating,
    getHistory,
    setHistory,
    getHistoryState,
    replaceHistoryState,
    getQueryStringParams,
    reload,
    symbols,
    App: RoutedApp,
    // keep backwards compatible
    focusPage: restoreFocus,
    root,
    /**
     * Deprecated api methods
     */
    setupRoutes() {
      console.warn("Router: setupRoutes is deprecated, consolidate your configuration");
      console.warn("https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    },
    on() {
      console.warn("Router.on() is deprecated, consolidate your configuration");
      console.warn("https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    },
    before() {
      console.warn("Router.before() is deprecated, consolidate your configuration");
      console.warn("https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    },
    after() {
      console.warn("Router.after() is deprecated, consolidate your configuration");
      console.warn("https://rdkcentral.github.io/Lightning-SDK/#/plugins/router/configuration");
    }
  };

  // node_modules/@lightningjs/sdk/src/Launch/index.js
  var ApplicationInstance2;
  var Launch_default = (App2, appSettings, platformSettings, appData) => {
    initSettings(appSettings, platformSettings);
    initUtils(platformSettings);
    initMetadata(appSettings);
    initStorage();
    if (platformSettings.plugins) {
      platformSettings.plugins.profile && initProfile(platformSettings.plugins.profile);
      platformSettings.plugins.metrics && initMetrics(platformSettings.plugins.metrics);
      platformSettings.plugins.mediaPlayer && initMediaPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.mediaPlayer && initVideoPlayer(platformSettings.plugins.mediaPlayer);
      platformSettings.plugins.ads && initAds(platformSettings.plugins.ads);
      platformSettings.plugins.router && initRouter(platformSettings.plugins.router);
      platformSettings.plugins.tv && initTV(platformSettings.plugins.tv);
      platformSettings.plugins.purchase && initPurchase(platformSettings.plugins.purchase);
      platformSettings.plugins.pin && initPin(platformSettings.plugins.pin);
    }
    const app2 = Application_default(App2, appData, platformSettings);
    initLightningSdkPlugin.log = Log_default;
    initLightningSdkPlugin.settings = Settings_default;
    initLightningSdkPlugin.ads = Ads_default;
    initLightningSdkPlugin.lightning = Lightning_default;
    ApplicationInstance2 = new app2(appSettings);
    initLightningSdkPlugin.appInstance = ApplicationInstance2;
    return ApplicationInstance2;
  };

  // node_modules/@lightningjs/sdk/src/Subtitles/SubtitleComponent.js
  var SubtitleComponent = class extends Lightning_default.Component {
    static _template() {
      return {
        visible: false,
        rect: true,
        color: 2415919104,
        shader: {
          type: Lightning_default.shaders.RoundedRectangle,
          radius: 5
        },
        Text: {
          y: 5,
          x: 20,
          text: {
            textColor: 4294967295,
            fontSize: 38,
            lineHeight: 38 * 1.4,
            textAlign: "center",
            wordWrap: true,
            maxLines: 3,
            shadow: true,
            shadowColor: 4281545523
          }
        }
      };
    }
    _init() {
      this._textTextureDefaults = new Lightning_default.textures.TextTexture(this.stage).cloneArgs();
      this.tag("Text").on("txLoaded", (_ref) => {
        let {
          _source
        } = _ref;
        this.w = _source.w + this.tag("Text").x * 2;
        this.h = _source.h;
        this.position();
      });
    }
    get textFormat() {
      const textTag = this.tag("Text").text;
      return {
        fontFace: textTag.fontFace || "sans-serif",
        fontSize: textTag.fontSize,
        lineHeight: textTag.lineHeight,
        textAlign: textTag.textAlign,
        wordWrap: true,
        maxLines: textTag.maxLines
      };
    }
    show() {
      this.visible = true;
    }
    hide() {
      this.visible = false;
    }
    position() {
      this.x = this._calculateX(this.xPos);
      this.y = this._calculateY(this.yPos);
    }
    set viewportW(v2) {
      this._viewportW = v2;
      this.x = this._calculateX(this.xPos);
    }
    get viewportW() {
      return this._viewportW || this.application.finalW;
    }
    set viewportH(v2) {
      this._viewportH = v2;
      this.y = this._calculateY(this.yPos);
    }
    get viewportH() {
      return this._viewportH || this.application.finalH;
    }
    _calculateX(x) {
      if (x === "center") {
        x = (this.viewportW - this.finalW) / 2;
      } else if (x === "left") {
        x = 60;
      } else if (x === "right") {
        x = this.viewportW - this.finalW - 60;
      }
      return x;
    }
    set xPos(v2) {
      this._x = v2;
      this.x = this._calculateX(v2);
    }
    get xPos() {
      return this._x || "center";
    }
    _calculateY(y) {
      if (y === "center") {
        return (this.viewportH - this.finalH) / 2;
      } else if (y === "top") {
        return 60;
      } else if (y === "bottom") {
        return this.viewportH - this.finalH - 60;
      }
      return y;
    }
    set yPos(v2) {
      this._y = v2;
      this.y = this._calculateY(v2);
    }
    get yPos() {
      return this._y || "bottom";
    }
    set fontFamily(v2) {
      this.tag("Text").text.fontFace = v2;
    }
    set fontSize(v2) {
      this.tag("Text").text.fontSize = v2;
      this.tag("Text").text.lineHeight = v2 * 1.3;
    }
    set fontColor(v2) {
      this.tag("Text").color = v2;
    }
    set backgroundColor(v2) {
      this.color = v2;
    }
    _defineBreakpoint(text, breakpoint) {
      if (breakpoint >= this.maxWidth)
        return this.maxWidth;
      const info = Lightning_default.textures.TextTexture.renderer(this.stage, this.stage.platform.getDrawingCanvas(), {
        ...this._textTextureDefaults,
        ...this.textFormat,
        ...{
          wordWrapWidth: breakpoint
        },
        text
      })._calculateRenderInfo();
      if (info.width <= breakpoint && info.lines.length <= 2) {
        return breakpoint;
      } else {
        return this._defineBreakpoint(text, breakpoint * 1.25);
      }
    }
    set text(v2) {
      this.alpha = 0;
      if (v2 && v2.length) {
        const breakpoint = this._defineBreakpoint(v2, 640);
        this.tag("Text").text.wordWrapWidth = breakpoint;
        this.tag("Text").text = v2;
        this.alpha = 1;
      }
    }
    set textAlign(v2) {
      this._textAlign = v2;
      this.tag("Text").text.textAlign = v2;
    }
    set maxWidth(v2) {
      this._maxWidth = v2;
    }
    get maxWidth() {
      return (this._maxWidth || 1200) - this.tag("Text").x * 2;
    }
    set maxLines(v2) {
      this.tag("Text").text.maxLines = v2;
    }
  };

  // node_modules/axios/lib/helpers/bind.js
  function bind(fn2, thisArg) {
    return function wrap() {
      return fn2.apply(thisArg, arguments);
    };
  }

  // node_modules/axios/lib/utils.js
  var {
    toString
  } = Object.prototype;
  var {
    getPrototypeOf
  } = Object;
  var kindOf = /* @__PURE__ */ ((cache) => (thing) => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null));
  var kindOfTest = (type2) => {
    type2 = type2.toLowerCase();
    return (thing) => kindOf(thing) === type2;
  };
  var typeOfTest = (type2) => (thing) => typeof thing === type2;
  var {
    isArray: isArray2
  } = Array;
  var isUndefined = typeOfTest("undefined");
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction2(val.constructor.isBuffer) && val.constructor.isBuffer(val);
  }
  var isArrayBuffer = kindOfTest("ArrayBuffer");
  function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && isArrayBuffer(val.buffer);
    }
    return result;
  }
  var isString3 = typeOfTest("string");
  var isFunction2 = typeOfTest("function");
  var isNumber = typeOfTest("number");
  var isObject4 = (thing) => thing !== null && typeof thing === "object";
  var isBoolean2 = (thing) => thing === true || thing === false;
  var isPlainObject2 = (val) => {
    if (kindOf(val) !== "object") {
      return false;
    }
    const prototype3 = getPrototypeOf(val);
    return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
  };
  var isDate = kindOfTest("Date");
  var isFile = kindOfTest("File");
  var isBlob = kindOfTest("Blob");
  var isFileList = kindOfTest("FileList");
  var isStream = (val) => isObject4(val) && isFunction2(val.pipe);
  var isFormData = (thing) => {
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction2(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction2(thing.toString) && thing.toString() === "[object FormData]"));
  };
  var isURLSearchParams = kindOfTest("URLSearchParams");
  var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function forEach(obj, fn2) {
    let {
      allOwnKeys = false
    } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    let i2;
    let l2;
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray2(obj)) {
      for (i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        fn2.call(null, obj[i2], i2, obj);
      }
    } else {
      const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
      const len = keys2.length;
      let key;
      for (i2 = 0; i2 < len; i2++) {
        key = keys2[i2];
        fn2.call(null, obj[key], key, obj);
      }
    }
  }
  function findKey(obj, key) {
    key = key.toLowerCase();
    const keys2 = Object.keys(obj);
    let i2 = keys2.length;
    let _key;
    while (i2-- > 0) {
      _key = keys2[i2];
      if (key === _key.toLowerCase()) {
        return _key;
      }
    }
    return null;
  }
  var _global = (() => {
    if (typeof globalThis !== "undefined")
      return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
  })();
  var isContextDefined = (context) => !isUndefined(context) && context !== _global;
  function merge() {
    const {
      caseless
    } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key) => {
      const targetKey = caseless && findKey(result, key) || key;
      if (isPlainObject2(result[targetKey]) && isPlainObject2(val)) {
        result[targetKey] = merge(result[targetKey], val);
      } else if (isPlainObject2(val)) {
        result[targetKey] = merge({}, val);
      } else if (isArray2(val)) {
        result[targetKey] = val.slice();
      } else {
        result[targetKey] = val;
      }
    };
    for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
      arguments[i2] && forEach(arguments[i2], assignValue);
    }
    return result;
  }
  var extend = function(a2, b2, thisArg) {
    let {
      allOwnKeys
    } = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    forEach(b2, (val, key) => {
      if (thisArg && isFunction2(val)) {
        a2[key] = bind(val, thisArg);
      } else {
        a2[key] = val;
      }
    }, {
      allOwnKeys
    });
    return a2;
  };
  var stripBOM = (content) => {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  };
  var inherits = (constructor, superConstructor, props, descriptors2) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
      value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
  };
  var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
    let props;
    let i2;
    let prop2;
    const merged = {};
    destObj = destObj || {};
    if (sourceObj == null)
      return destObj;
    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i2 = props.length;
      while (i2-- > 0) {
        prop2 = props[i2];
        if ((!propFilter || propFilter(prop2, sourceObj, destObj)) && !merged[prop2]) {
          destObj[prop2] = sourceObj[prop2];
          merged[prop2] = true;
        }
      }
      sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
  };
  var endsWith = (str, searchString, position) => {
    str = String(str);
    if (position === void 0 || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
  var toArray = (thing) => {
    if (!thing)
      return null;
    if (isArray2(thing))
      return thing;
    let i2 = thing.length;
    if (!isNumber(i2))
      return null;
    const arr = new Array(i2);
    while (i2-- > 0) {
      arr[i2] = thing[i2];
    }
    return arr;
  };
  var isTypedArray = /* @__PURE__ */ ((TypedArray) => {
    return (thing) => {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
  var forEachEntry = (obj, fn2) => {
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while ((result = iterator.next()) && !result.done) {
      const pair = result.value;
      fn2.call(obj, pair[0], pair[1]);
    }
  };
  var matchAll = (regExp, str) => {
    let matches;
    const arr = [];
    while ((matches = regExp.exec(str)) !== null) {
      arr.push(matches);
    }
    return arr;
  };
  var isHTMLForm = kindOfTest("HTMLFormElement");
  var toCamelCase = (str) => {
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer2(m2, p1, p2) {
      return p1.toUpperCase() + p2;
    });
  };
  var hasOwnProperty = ((_ref) => {
    let {
      hasOwnProperty: hasOwnProperty2
    } = _ref;
    return (obj, prop2) => hasOwnProperty2.call(obj, prop2);
  })(Object.prototype);
  var isRegExp = kindOfTest("RegExp");
  var reduceDescriptors = (obj, reducer) => {
    const descriptors2 = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors2, (descriptor, name2) => {
      let ret;
      if ((ret = reducer(descriptor, name2, obj)) !== false) {
        reducedDescriptors[name2] = ret || descriptor;
      }
    });
    Object.defineProperties(obj, reducedDescriptors);
  };
  var freezeMethods = (obj) => {
    reduceDescriptors(obj, (descriptor, name2) => {
      if (isFunction2(obj) && ["arguments", "caller", "callee"].indexOf(name2) !== -1) {
        return false;
      }
      const value = obj[name2];
      if (!isFunction2(value))
        return;
      descriptor.enumerable = false;
      if ("writable" in descriptor) {
        descriptor.writable = false;
        return;
      }
      if (!descriptor.set) {
        descriptor.set = () => {
          throw Error("Can not rewrite read-only method '" + name2 + "'");
        };
      }
    });
  };
  var toObjectSet = (arrayOrString, delimiter) => {
    const obj = {};
    const define = (arr) => {
      arr.forEach((value) => {
        obj[value] = true;
      });
    };
    isArray2(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
  };
  var noop = () => {
  };
  var toFiniteNumber = (value, defaultValue) => {
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
  };
  var ALPHA = "abcdefghijklmnopqrstuvwxyz";
  var DIGIT = "0123456789";
  var ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
  };
  var generateString = function() {
    let size = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 16;
    let alphabet = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ALPHABET.ALPHA_DIGIT;
    let str = "";
    const {
      length
    } = alphabet;
    while (size--) {
      str += alphabet[Math.random() * length | 0];
    }
    return str;
  };
  function isSpecCompliantForm(thing) {
    return !!(thing && isFunction2(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
  }
  var toJSONObject = (obj) => {
    const stack = new Array(10);
    const visit = (source, i2) => {
      if (isObject4(source)) {
        if (stack.indexOf(source) >= 0) {
          return;
        }
        if (!("toJSON" in source)) {
          stack[i2] = source;
          const target = isArray2(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value, i2 + 1);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
          stack[i2] = void 0;
          return target;
        }
      }
      return source;
    };
    return visit(obj, 0);
  };
  var isAsyncFn = kindOfTest("AsyncFunction");
  var isThenable = (thing) => thing && (isObject4(thing) || isFunction2(thing)) && isFunction2(thing.then) && isFunction2(thing.catch);
  var utils_default = {
    isArray: isArray2,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString: isString3,
    isNumber,
    isBoolean: isBoolean2,
    isObject: isObject4,
    isPlainObject: isPlainObject2,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction: isFunction2,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    // an alias to avoid ESLint no-prototype-builtins detection
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
  };

  // node_modules/axios/lib/core/AxiosError.js
  function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
  }
  utils_default.inherits(AxiosError, Error, {
    toJSON: function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: utils_default.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }
  });
  var prototype = AxiosError.prototype;
  var descriptors = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
    // eslint-disable-next-line func-names
  ].forEach((code) => {
    descriptors[code] = {
      value: code
    };
  });
  Object.defineProperties(AxiosError, descriptors);
  Object.defineProperty(prototype, "isAxiosError", {
    value: true
  });
  AxiosError.from = (error, code, config, request, response, customProps) => {
    const axiosError = Object.create(prototype);
    utils_default.toFlatObject(error, axiosError, function filter2(obj) {
      return obj !== Error.prototype;
    }, (prop2) => {
      return prop2 !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  };
  var AxiosError_default = AxiosError;

  // node_modules/axios/lib/helpers/null.js
  var null_default = null;

  // node_modules/axios/lib/helpers/toFormData.js
  function isVisitable(thing) {
    return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
  }
  function removeBrackets(key) {
    return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
  }
  function renderKey(path, key, dots) {
    if (!path)
      return key;
    return path.concat(key).map(function each(token, i2) {
      token = removeBrackets(token);
      return !dots && i2 ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
  }
  function isFlatArray(arr) {
    return utils_default.isArray(arr) && !arr.some(isVisitable);
  }
  var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop2) {
    return /^is[A-Z]/.test(prop2);
  });
  function toFormData(obj, formData, options2) {
    if (!utils_default.isObject(obj)) {
      throw new TypeError("target must be an object");
    }
    formData = formData || new (null_default || FormData)();
    options2 = utils_default.toFlatObject(options2, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function defined(option, source) {
      return !utils_default.isUndefined(source[option]);
    });
    const metaTokens = options2.metaTokens;
    const visitor = options2.visitor || defaultVisitor;
    const dots = options2.dots;
    const indexes = options2.indexes;
    const _Blob = options2.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
    if (!utils_default.isFunction(visitor)) {
      throw new TypeError("visitor must be a function");
    }
    function convertValue(value) {
      if (value === null)
        return "";
      if (utils_default.isDate(value)) {
        return value.toISOString();
      }
      if (!useBlob && utils_default.isBlob(value)) {
        throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
      }
      if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
        return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
      }
      return value;
    }
    function defaultVisitor(value, key, path) {
      let arr = value;
      if (value && !path && typeof value === "object") {
        if (utils_default.endsWith(key, "{}")) {
          key = metaTokens ? key : key.slice(0, -2);
          value = JSON.stringify(value);
        } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
          key = removeBrackets(key);
          arr.forEach(function each(el, index) {
            !(utils_default.isUndefined(el) || el === null) && formData.append(
              // eslint-disable-next-line no-nested-ternary
              indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
              convertValue(el)
            );
          });
          return false;
        }
      }
      if (isVisitable(value)) {
        return true;
      }
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
      defaultVisitor,
      convertValue,
      isVisitable
    });
    function build(value, path) {
      if (utils_default.isUndefined(value))
        return;
      if (stack.indexOf(value) !== -1) {
        throw Error("Circular reference detected in " + path.join("."));
      }
      stack.push(value);
      utils_default.forEach(value, function each(el, key) {
        const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(formData, el, utils_default.isString(key) ? key.trim() : key, path, exposedHelpers);
        if (result === true) {
          build(el, path ? path.concat(key) : [key]);
        }
      });
      stack.pop();
    }
    if (!utils_default.isObject(obj)) {
      throw new TypeError("data must be an object");
    }
    build(obj);
    return formData;
  }
  var toFormData_default = toFormData;

  // node_modules/axios/lib/helpers/AxiosURLSearchParams.js
  function encode(str) {
    const charMap = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer2(match) {
      return charMap[match];
    });
  }
  function AxiosURLSearchParams(params, options2) {
    this._pairs = [];
    params && toFormData_default(params, this, options2);
  }
  var prototype2 = AxiosURLSearchParams.prototype;
  prototype2.append = function append(name2, value) {
    this._pairs.push([name2, value]);
  };
  prototype2.toString = function toString2(encoder) {
    const _encode = encoder ? function(value) {
      return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
      return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
  };
  var AxiosURLSearchParams_default = AxiosURLSearchParams;

  // node_modules/axios/lib/helpers/buildURL.js
  function encode2(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url, params, options2) {
    if (!params) {
      return url;
    }
    const _encode = options2 && options2.encode || encode2;
    const serializeFn = options2 && options2.serialize;
    let serializedParams;
    if (serializeFn) {
      serializedParams = serializeFn(params, options2);
    } else {
      serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options2).toString(_encode);
    }
    if (serializedParams) {
      const hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  }

  // node_modules/axios/lib/core/InterceptorManager.js
  var InterceptorManager = class {
    constructor() {
      this.handlers = [];
    }
    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    use(fulfilled, rejected, options2) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options2 ? options2.synchronous : false,
        runWhen: options2 ? options2.runWhen : null
      });
      return this.handlers.length - 1;
    }
    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
    eject(id2) {
      if (this.handlers[id2]) {
        this.handlers[id2] = null;
      }
    }
    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
    clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }
    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
    forEach(fn2) {
      utils_default.forEach(this.handlers, function forEachHandler(h2) {
        if (h2 !== null) {
          fn2(h2);
        }
      });
    }
  };
  var InterceptorManager_default = InterceptorManager;

  // node_modules/axios/lib/defaults/transitional.js
  var transitional_default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  // node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
  var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

  // node_modules/axios/lib/platform/browser/classes/FormData.js
  var FormData_default = typeof FormData !== "undefined" ? FormData : null;

  // node_modules/axios/lib/platform/browser/classes/Blob.js
  var Blob_default = typeof Blob !== "undefined" ? Blob : null;

  // node_modules/axios/lib/platform/browser/index.js
  var browser_default = {
    isBrowser: true,
    classes: {
      URLSearchParams: URLSearchParams_default,
      FormData: FormData_default,
      Blob: Blob_default
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };

  // node_modules/axios/lib/platform/common/utils.js
  var utils_exports = {};
  __export(utils_exports, {
    hasBrowserEnv: () => hasBrowserEnv,
    hasStandardBrowserEnv: () => hasStandardBrowserEnv,
    hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv
  });
  var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
  var hasStandardBrowserEnv = ((product) => {
    return hasBrowserEnv && ["ReactNative", "NativeScript", "NS"].indexOf(product) < 0;
  })(typeof navigator !== "undefined" && navigator.product);
  var hasStandardBrowserWebWorkerEnv = (() => {
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
  })();

  // node_modules/axios/lib/platform/index.js
  var platform_default = {
    ...utils_exports,
    ...browser_default
  };

  // node_modules/axios/lib/helpers/toURLEncodedForm.js
  function toURLEncodedForm(data, options2) {
    return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
      visitor: function(value, key, path, helpers) {
        if (platform_default.isNode && utils_default.isBuffer(value)) {
          this.append(key, value.toString("base64"));
          return false;
        }
        return helpers.defaultVisitor.apply(this, arguments);
      }
    }, options2));
  }

  // node_modules/axios/lib/helpers/formDataToJSON.js
  function parsePropPath(name2) {
    return utils_default.matchAll(/\w+|\[(\w*)]/g, name2).map((match) => {
      return match[0] === "[]" ? "" : match[1] || match[0];
    });
  }
  function arrayToObject(arr) {
    const obj = {};
    const keys2 = Object.keys(arr);
    let i2;
    const len = keys2.length;
    let key;
    for (i2 = 0; i2 < len; i2++) {
      key = keys2[i2];
      obj[key] = arr[key];
    }
    return obj;
  }
  function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
      let name2 = path[index++];
      const isNumericKey = Number.isFinite(+name2);
      const isLast = index >= path.length;
      name2 = !name2 && utils_default.isArray(target) ? target.length : name2;
      if (isLast) {
        if (utils_default.hasOwnProp(target, name2)) {
          target[name2] = [target[name2], value];
        } else {
          target[name2] = value;
        }
        return !isNumericKey;
      }
      if (!target[name2] || !utils_default.isObject(target[name2])) {
        target[name2] = [];
      }
      const result = buildPath(path, value, target[name2], index);
      if (result && utils_default.isArray(target[name2])) {
        target[name2] = arrayToObject(target[name2]);
      }
      return !isNumericKey;
    }
    if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
      const obj = {};
      utils_default.forEachEntry(formData, (name2, value) => {
        buildPath(parsePropPath(name2), value, obj, 0);
      });
      return obj;
    }
    return null;
  }
  var formDataToJSON_default = formDataToJSON;

  // node_modules/axios/lib/defaults/index.js
  function stringifySafely(rawValue, parser, encoder) {
    if (utils_default.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils_default.trim(rawValue);
      } catch (e) {
        if (e.name !== "SyntaxError") {
          throw e;
        }
      }
    }
    return (encoder || JSON.stringify)(rawValue);
  }
  var defaults = {
    transitional: transitional_default,
    adapter: ["xhr", "http"],
    transformRequest: [function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils_default.isObject(data);
      if (isObjectPayload && utils_default.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils_default.isFormData(data);
      if (isFormData2) {
        if (!hasJSONContentType) {
          return data;
        }
        return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
      }
      if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
        return data;
      }
      if (utils_default.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils_default.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData_default(isFileList2 ? {
            "files[]": data
          } : data, _FormData && new _FormData(), this.formSerializer);
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }],
    transformResponse: [function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: platform_default.classes.FormData,
      Blob: platform_default.classes.Blob
    },
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
    defaults.headers[method] = {};
  });
  var defaults_default = defaults;

  // node_modules/axios/lib/helpers/parseHeaders.js
  var ignoreDuplicateOf = utils_default.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
  var parseHeaders_default = (rawHeaders) => {
    const parsed = {};
    let key;
    let val;
    let i2;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
      i2 = line.indexOf(":");
      key = line.substring(0, i2).trim().toLowerCase();
      val = line.substring(i2 + 1).trim();
      if (!key || parsed[key] && ignoreDuplicateOf[key]) {
        return;
      }
      if (key === "set-cookie") {
        if (parsed[key]) {
          parsed[key].push(val);
        } else {
          parsed[key] = [val];
        }
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    });
    return parsed;
  };

  // node_modules/axios/lib/core/AxiosHeaders.js
  var $internals = Symbol("internals");
  function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
  }
  function normalizeValue(value) {
    if (value === false || value == null) {
      return value;
    }
    return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
  }
  function parseTokens(str) {
    const tokens = /* @__PURE__ */ Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while (match = tokensRE.exec(str)) {
      tokens[match[1]] = match[2];
    }
    return tokens;
  }
  var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
  function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
    if (utils_default.isFunction(filter2)) {
      return filter2.call(this, value, header);
    }
    if (isHeaderNameFilter) {
      value = header;
    }
    if (!utils_default.isString(value))
      return;
    if (utils_default.isString(filter2)) {
      return value.indexOf(filter2) !== -1;
    }
    if (utils_default.isRegExp(filter2)) {
      return filter2.test(value);
    }
  }
  function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
  }
  function buildAccessors(obj, header) {
    const accessorName = utils_default.toCamelCase(" " + header);
    ["get", "set", "has"].forEach((methodName) => {
      Object.defineProperty(obj, methodName + accessorName, {
        value: function(arg1, arg2, arg3) {
          return this[methodName].call(this, header, arg1, arg2, arg3);
        },
        configurable: true
      });
    });
  }
  var AxiosHeaders = class {
    constructor(headers) {
      headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
      const self2 = this;
      function setHeader(_value, _header, _rewrite) {
        const lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error("header name must be a non-empty string");
        }
        const key = utils_default.findKey(self2, lHeader);
        if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
          self2[key || _header] = normalizeValue(_value);
        }
      }
      const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
      if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders_default(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
    get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        if (key) {
          const value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils_default.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils_default.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        const key = utils_default.findKey(this, header);
        return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
    delete(header, matcher) {
      const self2 = this;
      let deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          const key = utils_default.findKey(self2, _header);
          if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
            delete self2[key];
            deleted = true;
          }
        }
      }
      if (utils_default.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
    clear(matcher) {
      const keys2 = Object.keys(this);
      let i2 = keys2.length;
      let deleted = false;
      while (i2--) {
        const key = keys2[i2];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
    normalize(format) {
      const self2 = this;
      const headers = {};
      utils_default.forEach(this, (value, header) => {
        const key = utils_default.findKey(headers, header);
        if (key) {
          self2[key] = normalizeValue(value);
          delete self2[header];
          return;
        }
        const normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self2[header];
        }
        self2[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
    concat() {
      for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
        targets[_key] = arguments[_key];
      }
      return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
      const obj = /* @__PURE__ */ Object.create(null);
      utils_default.forEach(this, (value, header) => {
        value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
      });
      return obj;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map((_ref) => {
        let [header, value] = _ref;
        return header + ": " + value;
      }).join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
    static concat(first) {
      const computed = new this(first);
      for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        targets[_key2 - 1] = arguments[_key2];
      }
      targets.forEach((target) => computed.set(target));
      return computed;
    }
    static accessor(header) {
      const internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      const accessors = internals.accessors;
      const prototype3 = this.prototype;
      function defineAccessor(_header) {
        const lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype3, _header);
          accessors[lHeader] = true;
        }
      }
      utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  };
  AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
  utils_default.reduceDescriptors(AxiosHeaders.prototype, (_ref2, key) => {
    let {
      value
    } = _ref2;
    let mapped = key[0].toUpperCase() + key.slice(1);
    return {
      get: () => value,
      set(headerValue) {
        this[mapped] = headerValue;
      }
    };
  });
  utils_default.freezeMethods(AxiosHeaders);
  var AxiosHeaders_default = AxiosHeaders;

  // node_modules/axios/lib/core/transformData.js
  function transformData(fns, response) {
    const config = this || defaults_default;
    const context = response || config;
    const headers = AxiosHeaders_default.from(context.headers);
    let data = context.data;
    utils_default.forEach(fns, function transform2(fn2) {
      data = fn2.call(config, data, headers.normalize(), response ? response.status : void 0);
    });
    headers.normalize();
    return data;
  }

  // node_modules/axios/lib/cancel/isCancel.js
  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  // node_modules/axios/lib/cancel/CanceledError.js
  function CanceledError(message, config, request) {
    AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
    this.name = "CanceledError";
  }
  utils_default.inherits(CanceledError, AxiosError_default, {
    __CANCEL__: true
  });
  var CanceledError_default = CanceledError;

  // node_modules/axios/lib/core/settle.js
  function settle(resolve, reject, response) {
    const validateStatus2 = response.config.validateStatus;
    if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError_default("Request failed with status code " + response.status, [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
    }
  }

  // node_modules/axios/lib/helpers/cookies.js
  var cookies_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs support document.cookie
    {
      write(name2, value, expires, path, domain, secure) {
        const cookie = [name2 + "=" + encodeURIComponent(value)];
        utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
        utils_default.isString(path) && cookie.push("path=" + path);
        utils_default.isString(domain) && cookie.push("domain=" + domain);
        secure === true && cookie.push("secure");
        document.cookie = cookie.join("; ");
      },
      read(name2) {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name2 + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove(name2) {
        this.write(name2, "", Date.now() - 864e5);
      }
    }
  ) : (
    // Non-standard browser env (web workers, react-native) lack needed support.
    {
      write() {
      },
      read() {
        return null;
      },
      remove() {
      }
    }
  );

  // node_modules/axios/lib/helpers/isAbsoluteURL.js
  function isAbsoluteURL(url) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  }

  // node_modules/axios/lib/helpers/combineURLs.js
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }

  // node_modules/axios/lib/core/buildFullPath.js
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }

  // node_modules/axios/lib/helpers/isURLSameOrigin.js
  var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? (
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    function standardBrowserEnv() {
      const msie = /(msie|trident)/i.test(navigator.userAgent);
      const urlParsingNode = document.createElement("a");
      let originURL;
      function resolveURL(url) {
        let href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }()
  ) : (
    // Non standard browser envs (web workers, react-native) lack needed support.
    /* @__PURE__ */ function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }()
  );

  // node_modules/axios/lib/helpers/parseProtocol.js
  function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  }

  // node_modules/axios/lib/helpers/speedometer.js
  function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== void 0 ? min : 1e3;
    return function push(chunkLength) {
      const now = Date.now();
      const startedAt = timestamps[tail];
      if (!firstSampleTS) {
        firstSampleTS = now;
      }
      bytes[head] = chunkLength;
      timestamps[head] = now;
      let i2 = tail;
      let bytesCount = 0;
      while (i2 !== head) {
        bytesCount += bytes[i2++];
        i2 = i2 % samplesCount;
      }
      head = (head + 1) % samplesCount;
      if (head === tail) {
        tail = (tail + 1) % samplesCount;
      }
      if (now - firstSampleTS < min) {
        return;
      }
      const passed = startedAt && now - startedAt;
      return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
    };
  }
  var speedometer_default = speedometer;

  // node_modules/axios/lib/adapters/xhr.js
  function progressEventReducer(listener2, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = speedometer_default(50, 250);
    return (e) => {
      const loaded = e.loaded;
      const total = e.lengthComputable ? e.total : void 0;
      const progressBytes = loaded - bytesNotified;
      const rate = _speedometer(progressBytes);
      const inRange = loaded <= total;
      bytesNotified = loaded;
      const data = {
        loaded,
        total,
        progress: total ? loaded / total : void 0,
        bytes: progressBytes,
        rate: rate ? rate : void 0,
        estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
        event: e
      };
      data[isDownloadStream ? "download" : "upload"] = true;
      listener2(data);
    };
  }
  var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
  var xhr_default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      let requestData = config.data;
      const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
      let {
        responseType,
        withXSRFToken
      } = config;
      let onCanceled;
      function done() {
        if (config.cancelToken) {
          config.cancelToken.unsubscribe(onCanceled);
        }
        if (config.signal) {
          config.signal.removeEventListener("abort", onCanceled);
        }
      }
      let contentType;
      if (utils_default.isFormData(requestData)) {
        if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
          requestHeaders.setContentType(false);
        } else if ((contentType = requestHeaders.getContentType()) !== false) {
          const [type2, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
          requestHeaders.setContentType([type2 || "multipart/form-data", ...tokens].join("; "));
        }
      }
      let request = new XMLHttpRequest();
      if (config.auth) {
        const username = config.auth.username || "";
        const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
        requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
      }
      const fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
      request.timeout = config.timeout;
      function onloadend() {
        if (!request) {
          return;
        }
        const responseHeaders = AxiosHeaders_default.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
        const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
        const response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config,
          request
        };
        settle(function _resolve(value) {
          resolve(value);
          done();
        }, function _reject(err) {
          reject(err);
          done();
        }, response);
        request = null;
      }
      if ("onloadend" in request) {
        request.onloadend = onloadend;
      } else {
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
        reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      request.onerror = function handleError2() {
        reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
        request = null;
      };
      request.ontimeout = function handleTimeout() {
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitional_default;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(timeoutErrorMessage, transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED, config, request));
        request = null;
      };
      if (platform_default.hasStandardBrowserEnv) {
        withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(config));
        if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(fullPath)) {
          const xsrfValue = config.xsrfHeaderName && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
          if (xsrfValue) {
            requestHeaders.set(config.xsrfHeaderName, xsrfValue);
          }
        }
      }
      requestData === void 0 && requestHeaders.setContentType(null);
      if ("setRequestHeader" in request) {
        utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
          request.setRequestHeader(key, val);
        });
      }
      if (!utils_default.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request.responseType = config.responseType;
      }
      if (typeof config.onDownloadProgress === "function") {
        request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
      }
      if (typeof config.onUploadProgress === "function" && request.upload) {
        request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
      }
      if (config.cancelToken || config.signal) {
        onCanceled = (cancel) => {
          if (!request) {
            return;
          }
          reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
          request.abort();
          request = null;
        };
        config.cancelToken && config.cancelToken.subscribe(onCanceled);
        if (config.signal) {
          config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
      }
      const protocol = parseProtocol(fullPath);
      if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
        reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
        return;
      }
      request.send(requestData || null);
    });
  };

  // node_modules/axios/lib/adapters/adapters.js
  var knownAdapters = {
    http: null_default,
    xhr: xhr_default
  };
  utils_default.forEach(knownAdapters, (fn2, value) => {
    if (fn2) {
      try {
        Object.defineProperty(fn2, "name", {
          value
        });
      } catch (e) {
      }
      Object.defineProperty(fn2, "adapterName", {
        value
      });
    }
  });
  var renderReason = (reason) => "- ".concat(reason);
  var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
  var adapters_default = {
    getAdapter: (adapters) => {
      adapters = utils_default.isArray(adapters) ? adapters : [adapters];
      const {
        length
      } = adapters;
      let nameOrAdapter;
      let adapter;
      const rejectedReasons = {};
      for (let i2 = 0; i2 < length; i2++) {
        nameOrAdapter = adapters[i2];
        let id2;
        adapter = nameOrAdapter;
        if (!isResolvedHandle(nameOrAdapter)) {
          adapter = knownAdapters[(id2 = String(nameOrAdapter)).toLowerCase()];
          if (adapter === void 0) {
            throw new AxiosError_default("Unknown adapter '".concat(id2, "'"));
          }
        }
        if (adapter) {
          break;
        }
        rejectedReasons[id2 || "#" + i2] = adapter;
      }
      if (!adapter) {
        const reasons = Object.entries(rejectedReasons).map((_ref) => {
          let [id2, state4] = _ref;
          return "adapter ".concat(id2, " ") + (state4 === false ? "is not supported by the environment" : "is not available in the build");
        });
        let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
        throw new AxiosError_default("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT");
      }
      return adapter;
    },
    adapters: knownAdapters
  };

  // node_modules/axios/lib/core/dispatchRequest.js
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
    if (config.signal && config.signal.aborted) {
      throw new CanceledError_default(null, config);
    }
  }
  function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = AxiosHeaders_default.from(config.headers);
    config.data = transformData.call(config, config.transformRequest);
    if (["post", "put", "patch"].indexOf(config.method) !== -1) {
      config.headers.setContentType("application/x-www-form-urlencoded", false);
    }
    const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
      response.data = transformData.call(config, config.transformResponse, response);
      response.headers = AxiosHeaders_default.from(response.headers);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
        if (reason && reason.response) {
          reason.response.data = transformData.call(config, config.transformResponse, reason.response);
          reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    });
  }

  // node_modules/axios/lib/core/mergeConfig.js
  var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
  function mergeConfig(config1, config2) {
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
      if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
        return utils_default.merge.call({
          caseless
        }, target, source);
      } else if (utils_default.isPlainObject(source)) {
        return utils_default.merge({}, source);
      } else if (utils_default.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(a2, b2, caseless) {
      if (!utils_default.isUndefined(b2)) {
        return getMergedValue(a2, b2, caseless);
      } else if (!utils_default.isUndefined(a2)) {
        return getMergedValue(void 0, a2, caseless);
      }
    }
    function valueFromConfig2(a2, b2) {
      if (!utils_default.isUndefined(b2)) {
        return getMergedValue(void 0, b2);
      }
    }
    function defaultToConfig2(a2, b2) {
      if (!utils_default.isUndefined(b2)) {
        return getMergedValue(void 0, b2);
      } else if (!utils_default.isUndefined(a2)) {
        return getMergedValue(void 0, a2);
      }
    }
    function mergeDirectKeys(a2, b2, prop2) {
      if (prop2 in config2) {
        return getMergedValue(a2, b2);
      } else if (prop2 in config1) {
        return getMergedValue(void 0, a2);
      }
    }
    const mergeMap = {
      url: valueFromConfig2,
      method: valueFromConfig2,
      data: valueFromConfig2,
      baseURL: defaultToConfig2,
      transformRequest: defaultToConfig2,
      transformResponse: defaultToConfig2,
      paramsSerializer: defaultToConfig2,
      timeout: defaultToConfig2,
      timeoutMessage: defaultToConfig2,
      withCredentials: defaultToConfig2,
      withXSRFToken: defaultToConfig2,
      adapter: defaultToConfig2,
      responseType: defaultToConfig2,
      xsrfCookieName: defaultToConfig2,
      xsrfHeaderName: defaultToConfig2,
      onUploadProgress: defaultToConfig2,
      onDownloadProgress: defaultToConfig2,
      decompress: defaultToConfig2,
      maxContentLength: defaultToConfig2,
      maxBodyLength: defaultToConfig2,
      beforeRedirect: defaultToConfig2,
      transport: defaultToConfig2,
      httpAgent: defaultToConfig2,
      httpsAgent: defaultToConfig2,
      cancelToken: defaultToConfig2,
      socketPath: defaultToConfig2,
      responseEncoding: defaultToConfig2,
      validateStatus: mergeDirectKeys,
      headers: (a2, b2) => mergeDeepProperties(headersToObject(a2), headersToObject(b2), true)
    };
    utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop2) {
      const merge2 = mergeMap[prop2] || mergeDeepProperties;
      const configValue = merge2(config1[prop2], config2[prop2], prop2);
      utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop2] = configValue);
    });
    return config;
  }

  // node_modules/axios/lib/env/data.js
  var VERSION = "1.6.2";

  // node_modules/axios/lib/helpers/validator.js
  var validators = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach((type2, i2) => {
    validators[type2] = function validator(thing) {
      return typeof thing === type2 || "a" + (i2 < 1 ? "n " : " ") + type2;
    };
  });
  var deprecatedWarnings = {};
  validators.transitional = function transitional(validator, version2, message) {
    function formatMessage(opt, desc) {
      return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    return (value, opt, opts) => {
      if (validator === false) {
        throw new AxiosError_default(formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")), AxiosError_default.ERR_DEPRECATED);
      }
      if (version2 && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        console.warn(formatMessage(opt, " has been deprecated since v" + version2 + " and will be removed in the near future"));
      }
      return validator ? validator(value, opt, opts) : true;
    };
  };
  function assertOptions(options2, schema, allowUnknown) {
    if (typeof options2 !== "object") {
      throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
    }
    const keys2 = Object.keys(options2);
    let i2 = keys2.length;
    while (i2-- > 0) {
      const opt = keys2[i2];
      const validator = schema[opt];
      if (validator) {
        const value = options2[opt];
        const result = value === void 0 || validator(value, opt, options2);
        if (result !== true) {
          throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
      }
    }
  }
  var validator_default = {
    assertOptions,
    validators
  };

  // node_modules/axios/lib/core/Axios.js
  var validators2 = validator_default.validators;
  var Axios = class {
    constructor(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager_default(),
        response: new InterceptorManager_default()
      };
    }
    /**
     * Dispatch a request
     *
     * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
     * @param {?Object} config
     *
     * @returns {Promise} The Promise to be fulfilled
     */
    request(configOrUrl, config) {
      if (typeof configOrUrl === "string") {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      const {
        transitional: transitional2,
        paramsSerializer,
        headers
      } = config;
      if (transitional2 !== void 0) {
        validator_default.assertOptions(transitional2, {
          silentJSONParsing: validators2.transitional(validators2.boolean),
          forcedJSONParsing: validators2.transitional(validators2.boolean),
          clarifyTimeoutError: validators2.transitional(validators2.boolean)
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils_default.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator_default.assertOptions(paramsSerializer, {
            encode: validators2.function,
            serialize: validators2.function
          }, true);
        }
      }
      config.method = (config.method || this.defaults.method || "get").toLowerCase();
      let contextHeaders = headers && utils_default.merge(headers.common, headers[config.method]);
      headers && utils_default.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (method) => {
        delete headers[method];
      });
      config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
      const requestInterceptorChain = [];
      let synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      const responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      let promise;
      let i2 = 0;
      let len;
      if (!synchronousRequestInterceptors) {
        const chain = [dispatchRequest.bind(this), void 0];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i2 < len) {
          promise = promise.then(chain[i2++], chain[i2++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      let newConfig = config;
      i2 = 0;
      while (i2 < len) {
        const onFulfilled = requestInterceptorChain[i2++];
        const onRejected = requestInterceptorChain[i2++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i2 = 0;
      len = responseInterceptorChain.length;
      while (i2 < len) {
        promise = promise.then(responseInterceptorChain[i2++], responseInterceptorChain[i2++]);
      }
      return promise;
    }
    getUri(config) {
      config = mergeConfig(this.defaults, config);
      const fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  };
  utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        url,
        data: (config || {}).data
      }));
    };
  });
  utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        }));
      };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
  });
  var Axios_default = Axios;

  // node_modules/axios/lib/cancel/CancelToken.js
  var CancelToken = class _CancelToken {
    constructor(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      let resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      const token = this;
      this.promise.then((cancel) => {
        if (!token._listeners)
          return;
        let i2 = token._listeners.length;
        while (i2-- > 0) {
          token._listeners[i2](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = (onfulfilled) => {
        let _resolve;
        const promise = new Promise((resolve) => {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message, config, request) {
        if (token.reason) {
          return;
        }
        token.reason = new CanceledError_default(message, config, request);
        resolvePromise(token.reason);
      });
    }
    /**
     * Throws a `CanceledError` if cancellation has been requested.
     */
    throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }
    /**
     * Subscribe to the cancel signal
     */
    subscribe(listener2) {
      if (this.reason) {
        listener2(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener2);
      } else {
        this._listeners = [listener2];
      }
    }
    /**
     * Unsubscribe from the cancel signal
     */
    unsubscribe(listener2) {
      if (!this._listeners) {
        return;
      }
      const index = this._listeners.indexOf(listener2);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }
    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
    static source() {
      let cancel;
      const token = new _CancelToken(function executor(c2) {
        cancel = c2;
      });
      return {
        token,
        cancel
      };
    }
  };
  var CancelToken_default = CancelToken;

  // node_modules/axios/lib/helpers/spread.js
  function spread(callback2) {
    return function wrap(arr) {
      return callback2.apply(null, arr);
    };
  }

  // node_modules/axios/lib/helpers/isAxiosError.js
  function isAxiosError(payload) {
    return utils_default.isObject(payload) && payload.isAxiosError === true;
  }

  // node_modules/axios/lib/helpers/HttpStatusCode.js
  var HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(HttpStatusCode).forEach((_ref) => {
    let [key, value] = _ref;
    HttpStatusCode[value] = key;
  });
  var HttpStatusCode_default = HttpStatusCode;

  // node_modules/axios/lib/axios.js
  function createInstance(defaultConfig) {
    const context = new Axios_default(defaultConfig);
    const instance = bind(Axios_default.prototype.request, context);
    utils_default.extend(instance, Axios_default.prototype, context, {
      allOwnKeys: true
    });
    utils_default.extend(instance, context, null, {
      allOwnKeys: true
    });
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
  }
  var axios = createInstance(defaults_default);
  axios.Axios = Axios_default;
  axios.CanceledError = CanceledError_default;
  axios.CancelToken = CancelToken_default;
  axios.isCancel = isCancel;
  axios.VERSION = VERSION;
  axios.toFormData = toFormData_default;
  axios.AxiosError = AxiosError_default;
  axios.Cancel = axios.CanceledError;
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = spread;
  axios.isAxiosError = isAxiosError;
  axios.mergeConfig = mergeConfig;
  axios.AxiosHeaders = AxiosHeaders_default;
  axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
  axios.getAdapter = adapters_default.getAdapter;
  axios.HttpStatusCode = HttpStatusCode_default;
  axios.default = axios;
  var axios_default = axios;

  // node_modules/axios/index.js
  var {
    Axios: Axios2,
    AxiosError: AxiosError2,
    CanceledError: CanceledError2,
    isCancel: isCancel2,
    CancelToken: CancelToken2,
    VERSION: VERSION2,
    all: all2,
    Cancel,
    isAxiosError: isAxiosError2,
    spread: spread2,
    toFormData: toFormData2,
    AxiosHeaders: AxiosHeaders2,
    HttpStatusCode: HttpStatusCode2,
    formToJSON,
    getAdapter,
    mergeConfig: mergeConfig2
  } = axios_default;

  // node_modules/@lightningjs/ui-components/dist/lightning-ui-components.min.mjs
  function set(t, i2, o2, r2) {
    return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function set2(t2, i3, o3, r3) {
      var a2, l2 = _superPropBase(t2, i3);
      if (l2) {
        if ((a2 = Object.getOwnPropertyDescriptor(l2, i3)).set)
          return a2.set.call(r3, o3), true;
        if (!a2.writable)
          return false;
      }
      if (a2 = Object.getOwnPropertyDescriptor(r3, i3)) {
        if (!a2.writable)
          return false;
        a2.value = o3, Object.defineProperty(r3, i3, a2);
      } else
        _defineProperty(r3, i3, o3);
      return true;
    }, set(t, i2, o2, r2);
  }
  function _set(t, i2, o2, r2, a2) {
    if (!set(t, i2, o2, r2 || t) && a2)
      throw new TypeError("failed to set property");
    return o2;
  }
  function _createForOfIteratorHelper(t, i2) {
    var o2 = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!o2) {
      if (Array.isArray(t) || (o2 = _unsupportedIterableToArray(t)) || i2 && t && "number" == typeof t.length) {
        o2 && (t = o2);
        var r2 = 0, a2 = function F() {
        };
        return {
          s: a2,
          n: function n() {
            return r2 >= t.length ? {
              done: true
            } : {
              done: false,
              value: t[r2++]
            };
          },
          e: function e(t2) {
            throw t2;
          },
          f: a2
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var l2, c2 = true, u2 = false;
    return {
      s: function s() {
        o2 = o2.call(t);
      },
      n: function n() {
        var t2 = o2.next();
        return c2 = t2.done, t2;
      },
      e: function e(t2) {
        u2 = true, l2 = t2;
      },
      f: function f() {
        try {
          c2 || null == o2.return || o2.return();
        } finally {
          if (u2)
            throw l2;
        }
      }
    };
  }
  function _get() {
    return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function _get2(t, i2, o2) {
      var r2 = _superPropBase(t, i2);
      if (r2) {
        var a2 = Object.getOwnPropertyDescriptor(r2, i2);
        return a2.get ? a2.get.call(arguments.length < 3 ? t : o2) : a2.value;
      }
    }, _get.apply(this, arguments);
  }
  function _superPropBase(t, i2) {
    for (; !Object.prototype.hasOwnProperty.call(t, i2) && null !== (t = _getPrototypeOf(t)); )
      ;
    return t;
  }
  function _inherits(t, i2) {
    if ("function" != typeof i2 && null !== i2)
      throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(i2 && i2.prototype, {
      constructor: {
        value: t,
        writable: true,
        configurable: true
      }
    }), Object.defineProperty(t, "prototype", {
      writable: false
    }), i2 && _setPrototypeOf(t, i2);
  }
  function _setPrototypeOf(t, i2) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(t2, i3) {
      return t2.__proto__ = i3, t2;
    }, _setPrototypeOf(t, i2);
  }
  function _createSuper(t) {
    var i2 = function _isNativeReflectConstruct() {
      if ("undefined" == typeof Reflect || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if ("function" == typeof Proxy)
        return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), true;
      } catch (t2) {
        return false;
      }
    }();
    return function _createSuperInternal() {
      var o2, r2 = _getPrototypeOf(t);
      if (i2) {
        var a2 = _getPrototypeOf(this).constructor;
        o2 = Reflect.construct(r2, arguments, a2);
      } else
        o2 = r2.apply(this, arguments);
      return function _possibleConstructorReturn(t2, i3) {
        if (i3 && ("object" === _typeof(i3) || "function" == typeof i3))
          return i3;
        if (void 0 !== i3)
          throw new TypeError("Derived constructors may only return object or undefined");
        return function _assertThisInitialized(t3) {
          if (void 0 === t3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t3;
        }(t2);
      }(this, o2);
    };
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(t2) {
      return t2.__proto__ || Object.getPrototypeOf(t2);
    }, _getPrototypeOf(t);
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function _regeneratorRuntime2() {
      return i2;
    };
    var t, i2 = {}, o2 = Object.prototype, r2 = o2.hasOwnProperty, a2 = Object.defineProperty || function(t2, i3, o3) {
      t2[i3] = o3.value;
    }, l2 = "function" == typeof Symbol ? Symbol : {}, c2 = l2.iterator || "@@iterator", u2 = l2.asyncIterator || "@@asyncIterator", h2 = l2.toStringTag || "@@toStringTag";
    function define(t2, i3, o3) {
      return Object.defineProperty(t2, i3, {
        value: o3,
        enumerable: true,
        configurable: true,
        writable: true
      }), t2[i3];
    }
    try {
      define({}, "");
    } catch (t2) {
      define = function define2(t3, i3, o3) {
        return t3[i3] = o3;
      };
    }
    function wrap(t2, i3, o3, r3) {
      var l3 = i3 && i3.prototype instanceof Generator ? i3 : Generator, c3 = Object.create(l3.prototype), u3 = new Context(r3 || []);
      return a2(c3, "_invoke", {
        value: makeInvokeMethod(t2, o3, u3)
      }), c3;
    }
    function tryCatch(t2, i3, o3) {
      try {
        return {
          type: "normal",
          arg: t2.call(i3, o3)
        };
      } catch (t3) {
        return {
          type: "throw",
          arg: t3
        };
      }
    }
    i2.wrap = wrap;
    var d2 = "suspendedStart", p2 = "suspendedYield", _2 = "executing", g2 = "completed", m2 = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var v2 = {};
    define(v2, c2, function() {
      return this;
    });
    var k2 = Object.getPrototypeOf, b2 = k2 && k2(k2(values([])));
    b2 && b2 !== o2 && r2.call(b2, c2) && (v2 = b2);
    var S2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(v2);
    function defineIteratorMethods(t2) {
      ["next", "throw", "return"].forEach(function(i3) {
        define(t2, i3, function(t3) {
          return this._invoke(i3, t3);
        });
      });
    }
    function AsyncIterator(t2, i3) {
      function invoke(o4, a3, l3, c3) {
        var u3 = tryCatch(t2[o4], t2, a3);
        if ("throw" !== u3.type) {
          var h3 = u3.arg, d3 = h3.value;
          return d3 && "object" == _typeof(d3) && r2.call(d3, "__await") ? i3.resolve(d3.__await).then(function(t3) {
            invoke("next", t3, l3, c3);
          }, function(t3) {
            invoke("throw", t3, l3, c3);
          }) : i3.resolve(d3).then(function(t3) {
            h3.value = t3, l3(h3);
          }, function(t3) {
            return invoke("throw", t3, l3, c3);
          });
        }
        c3(u3.arg);
      }
      var o3;
      a2(this, "_invoke", {
        value: function value(t3, r3) {
          function callInvokeWithMethodAndArg() {
            return new i3(function(i4, o4) {
              invoke(t3, r3, i4, o4);
            });
          }
          return o3 = o3 ? o3.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(i3, o3, r3) {
      var a3 = d2;
      return function(l3, c3) {
        if (a3 === _2)
          throw new Error("Generator is already running");
        if (a3 === g2) {
          if ("throw" === l3)
            throw c3;
          return {
            value: t,
            done: true
          };
        }
        for (r3.method = l3, r3.arg = c3; ; ) {
          var u3 = r3.delegate;
          if (u3) {
            var h3 = maybeInvokeDelegate(u3, r3);
            if (h3) {
              if (h3 === m2)
                continue;
              return h3;
            }
          }
          if ("next" === r3.method)
            r3.sent = r3._sent = r3.arg;
          else if ("throw" === r3.method) {
            if (a3 === d2)
              throw a3 = g2, r3.arg;
            r3.dispatchException(r3.arg);
          } else
            "return" === r3.method && r3.abrupt("return", r3.arg);
          a3 = _2;
          var v3 = tryCatch(i3, o3, r3);
          if ("normal" === v3.type) {
            if (a3 = r3.done ? g2 : p2, v3.arg === m2)
              continue;
            return {
              value: v3.arg,
              done: r3.done
            };
          }
          "throw" === v3.type && (a3 = g2, r3.method = "throw", r3.arg = v3.arg);
        }
      };
    }
    function maybeInvokeDelegate(i3, o3) {
      var r3 = o3.method, a3 = i3.iterator[r3];
      if (a3 === t)
        return o3.delegate = null, "throw" === r3 && i3.iterator.return && (o3.method = "return", o3.arg = t, maybeInvokeDelegate(i3, o3), "throw" === o3.method) || "return" !== r3 && (o3.method = "throw", o3.arg = new TypeError("The iterator does not provide a '" + r3 + "' method")), m2;
      var l3 = tryCatch(a3, i3.iterator, o3.arg);
      if ("throw" === l3.type)
        return o3.method = "throw", o3.arg = l3.arg, o3.delegate = null, m2;
      var c3 = l3.arg;
      return c3 ? c3.done ? (o3[i3.resultName] = c3.value, o3.next = i3.nextLoc, "return" !== o3.method && (o3.method = "next", o3.arg = t), o3.delegate = null, m2) : c3 : (o3.method = "throw", o3.arg = new TypeError("iterator result is not an object"), o3.delegate = null, m2);
    }
    function pushTryEntry(t2) {
      var i3 = {
        tryLoc: t2[0]
      };
      1 in t2 && (i3.catchLoc = t2[1]), 2 in t2 && (i3.finallyLoc = t2[2], i3.afterLoc = t2[3]), this.tryEntries.push(i3);
    }
    function resetTryEntry(t2) {
      var i3 = t2.completion || {};
      i3.type = "normal", delete i3.arg, t2.completion = i3;
    }
    function Context(t2) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t2.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(i3) {
      if (i3 || "" === i3) {
        var o3 = i3[c2];
        if (o3)
          return o3.call(i3);
        if ("function" == typeof i3.next)
          return i3;
        if (!isNaN(i3.length)) {
          var a3 = -1, l3 = function next() {
            for (; ++a3 < i3.length; )
              if (r2.call(i3, a3))
                return next.value = i3[a3], next.done = false, next;
            return next.value = t, next.done = true, next;
          };
          return l3.next = l3;
        }
      }
      throw new TypeError(_typeof(i3) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, a2(S2, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), a2(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, h2, "GeneratorFunction"), i2.isGeneratorFunction = function(t2) {
      var i3 = "function" == typeof t2 && t2.constructor;
      return !!i3 && (i3 === GeneratorFunction || "GeneratorFunction" === (i3.displayName || i3.name));
    }, i2.mark = function(t2) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, h2, "GeneratorFunction")), t2.prototype = Object.create(S2), t2;
    }, i2.awrap = function(t2) {
      return {
        __await: t2
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, u2, function() {
      return this;
    }), i2.AsyncIterator = AsyncIterator, i2.async = function(t2, o3, r3, a3, l3) {
      void 0 === l3 && (l3 = Promise);
      var c3 = new AsyncIterator(wrap(t2, o3, r3, a3), l3);
      return i2.isGeneratorFunction(o3) ? c3 : c3.next().then(function(t3) {
        return t3.done ? t3.value : c3.next();
      });
    }, defineIteratorMethods(S2), define(S2, h2, "Generator"), define(S2, c2, function() {
      return this;
    }), define(S2, "toString", function() {
      return "[object Generator]";
    }), i2.keys = function(t2) {
      var i3 = Object(t2), o3 = [];
      for (var r3 in i3)
        o3.push(r3);
      return o3.reverse(), function next() {
        for (; o3.length; ) {
          var t3 = o3.pop();
          if (t3 in i3)
            return next.value = t3, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, i2.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(i3) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !i3)
          for (var o3 in this)
            "t" === o3.charAt(0) && r2.call(this, o3) && !isNaN(+o3.slice(1)) && (this[o3] = t);
      },
      stop: function stop() {
        this.done = true;
        var t2 = this.tryEntries[0].completion;
        if ("throw" === t2.type)
          throw t2.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(i3) {
        if (this.done)
          throw i3;
        var o3 = this;
        function handle2(r3, a4) {
          return c3.type = "throw", c3.arg = i3, o3.next = r3, a4 && (o3.method = "next", o3.arg = t), !!a4;
        }
        for (var a3 = this.tryEntries.length - 1; a3 >= 0; --a3) {
          var l3 = this.tryEntries[a3], c3 = l3.completion;
          if ("root" === l3.tryLoc)
            return handle2("end");
          if (l3.tryLoc <= this.prev) {
            var u3 = r2.call(l3, "catchLoc"), h3 = r2.call(l3, "finallyLoc");
            if (u3 && h3) {
              if (this.prev < l3.catchLoc)
                return handle2(l3.catchLoc, true);
              if (this.prev < l3.finallyLoc)
                return handle2(l3.finallyLoc);
            } else if (u3) {
              if (this.prev < l3.catchLoc)
                return handle2(l3.catchLoc, true);
            } else {
              if (!h3)
                throw new Error("try statement without catch or finally");
              if (this.prev < l3.finallyLoc)
                return handle2(l3.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t2, i3) {
        for (var o3 = this.tryEntries.length - 1; o3 >= 0; --o3) {
          var a3 = this.tryEntries[o3];
          if (a3.tryLoc <= this.prev && r2.call(a3, "finallyLoc") && this.prev < a3.finallyLoc) {
            var l3 = a3;
            break;
          }
        }
        l3 && ("break" === t2 || "continue" === t2) && l3.tryLoc <= i3 && i3 <= l3.finallyLoc && (l3 = null);
        var c3 = l3 ? l3.completion : {};
        return c3.type = t2, c3.arg = i3, l3 ? (this.method = "next", this.next = l3.finallyLoc, m2) : this.complete(c3);
      },
      complete: function complete(t2, i3) {
        if ("throw" === t2.type)
          throw t2.arg;
        return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && i3 && (this.next = i3), m2;
      },
      finish: function finish(t2) {
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var o3 = this.tryEntries[i3];
          if (o3.finallyLoc === t2)
            return this.complete(o3.completion, o3.afterLoc), resetTryEntry(o3), m2;
        }
      },
      catch: function _catch(t2) {
        for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
          var o3 = this.tryEntries[i3];
          if (o3.tryLoc === t2) {
            var r3 = o3.completion;
            if ("throw" === r3.type) {
              var a3 = r3.arg;
              resetTryEntry(o3);
            }
            return a3;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(i3, o3, r3) {
        return this.delegate = {
          iterator: values(i3),
          resultName: o3,
          nextLoc: r3
        }, "next" === this.method && (this.arg = t), m2;
      }
    }, i2;
  }
  function asyncGeneratorStep(t, i2, o2, r2, a2, l2, c2) {
    try {
      var u2 = t[l2](c2), h2 = u2.value;
    } catch (t2) {
      return void o2(t2);
    }
    u2.done ? i2(h2) : Promise.resolve(h2).then(r2, a2);
  }
  function _asyncToGenerator(t) {
    return function() {
      var i2 = this, o2 = arguments;
      return new Promise(function(r2, a2) {
        var l2 = t.apply(i2, o2);
        function _next(t2) {
          asyncGeneratorStep(l2, r2, a2, _next, _throw, "next", t2);
        }
        function _throw(t2) {
          asyncGeneratorStep(l2, r2, a2, _next, _throw, "throw", t2);
        }
        _next(void 0);
      });
    };
  }
  function _toConsumableArray(t) {
    return function _arrayWithoutHoles(t2) {
      if (Array.isArray(t2))
        return _arrayLikeToArray(t2);
    }(t) || function _iterableToArray(t2) {
      if ("undefined" != typeof Symbol && null != t2[Symbol.iterator] || null != t2["@@iterator"])
        return Array.from(t2);
    }(t) || _unsupportedIterableToArray(t) || function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function ownKeys(t, i2) {
    var o2 = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(t);
      i2 && (r2 = r2.filter(function(i3) {
        return Object.getOwnPropertyDescriptor(t, i3).enumerable;
      })), o2.push.apply(o2, r2);
    }
    return o2;
  }
  function _objectSpread(t) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var o2 = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? ownKeys(Object(o2), true).forEach(function(i3) {
        _defineProperty(t, i3, o2[i3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o2)) : ownKeys(Object(o2)).forEach(function(i3) {
        Object.defineProperty(t, i3, Object.getOwnPropertyDescriptor(o2, i3));
      });
    }
    return t;
  }
  function _defineProperty(t, i2, o2) {
    return (i2 = _toPropertyKey(i2)) in t ? Object.defineProperty(t, i2, {
      value: o2,
      enumerable: true,
      configurable: true,
      writable: true
    }) : t[i2] = o2, t;
  }
  function _slicedToArray(t, i2) {
    return function _arrayWithHoles(t2) {
      if (Array.isArray(t2))
        return t2;
    }(t) || function _iterableToArrayLimit(t2, i3) {
      var o2 = null == t2 ? null : "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
      if (null != o2) {
        var r2, a2, l2, c2, u2 = [], h2 = true, d2 = false;
        try {
          if (l2 = (o2 = o2.call(t2)).next, 0 === i3) {
            if (Object(o2) !== o2)
              return;
            h2 = false;
          } else
            for (; !(h2 = (r2 = l2.call(o2)).done) && (u2.push(r2.value), u2.length !== i3); h2 = true)
              ;
        } catch (t3) {
          d2 = true, a2 = t3;
        } finally {
          try {
            if (!h2 && null != o2.return && (c2 = o2.return(), Object(c2) !== c2))
              return;
          } finally {
            if (d2)
              throw a2;
          }
        }
        return u2;
      }
    }(t, i2) || _unsupportedIterableToArray(t, i2) || function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function _unsupportedIterableToArray(t, i2) {
    if (t) {
      if ("string" == typeof t)
        return _arrayLikeToArray(t, i2);
      var o2 = Object.prototype.toString.call(t).slice(8, -1);
      return "Object" === o2 && t.constructor && (o2 = t.constructor.name), "Map" === o2 || "Set" === o2 ? Array.from(t) : "Arguments" === o2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o2) ? _arrayLikeToArray(t, i2) : void 0;
    }
  }
  function _arrayLikeToArray(t, i2) {
    (null == i2 || i2 > t.length) && (i2 = t.length);
    for (var o2 = 0, r2 = new Array(i2); o2 < i2; o2++)
      r2[o2] = t[o2];
    return r2;
  }
  function _typeof(t) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
      return typeof t2;
    } : function(t2) {
      return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
    }, _typeof(t);
  }
  function _classCallCheck(t, i2) {
    if (!(t instanceof i2))
      throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(t, i2) {
    for (var o2 = 0; o2 < i2.length; o2++) {
      var r2 = i2[o2];
      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t, _toPropertyKey(r2.key), r2);
    }
  }
  function _createClass(t, i2, o2) {
    return i2 && _defineProperties(t.prototype, i2), o2 && _defineProperties(t, o2), Object.defineProperty(t, "prototype", {
      writable: false
    }), t;
  }
  function _toPropertyKey(t) {
    var i2 = function _toPrimitive(t2, i3) {
      if ("object" !== _typeof(t2) || null === t2)
        return t2;
      var o2 = t2[Symbol.toPrimitive];
      if (void 0 !== o2) {
        var r2 = o2.call(t2, i3 || "default");
        if ("object" !== _typeof(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === i3 ? String : Number)(t2);
    }(t, "string");
    return "symbol" === _typeof(i2) ? i2 : String(i2);
  }
  var i = new (function() {
    function Logger() {
      _classCallCheck(this, Logger), this._logCallback = void 0, this._prefix = "LightningUI", this._debug = false;
    }
    return _createClass(Logger, [{
      key: "debug",
      get: function get() {
        return this._debug;
      },
      set: function set2(t) {
        this._debug = Boolean(t);
      }
    }, {
      key: "logCallback",
      get: function get() {
        return this._logCallback;
      },
      set: function set2(t) {
        "function" == typeof t ? this._logCallback = t : this.warn("logCallback value must be a function, instead received ".concat(_typeof(t)));
      }
    }, {
      key: "log",
      value: function log() {
        for (var t = arguments.length, i2 = new Array(t), o2 = 0; o2 < t; o2++)
          i2[o2] = arguments[o2];
        var r2;
        (this._logCallback && this._logCallback({
          level: "log",
          payload: i2
        }), this.debug) && (r2 = console).log.apply(r2, [this._prefix].concat(i2));
      }
    }, {
      key: "info",
      value: function info() {
        for (var t = arguments.length, i2 = new Array(t), o2 = 0; o2 < t; o2++)
          i2[o2] = arguments[o2];
        var r2;
        (this._logCallback && this._logCallback({
          level: "info",
          payload: i2
        }), this.debug) && (r2 = console).info.apply(r2, [this._prefix].concat(i2));
      }
    }, {
      key: "warn",
      value: function warn() {
        for (var t = arguments.length, i2 = new Array(t), o2 = 0; o2 < t; o2++)
          i2[o2] = arguments[o2];
        var r2;
        (this._logCallback && this._logCallback({
          level: "warn",
          payload: i2
        }), this.debug) && (r2 = console).warn.apply(r2, [this._prefix].concat(i2));
      }
    }, {
      key: "error",
      value: function error() {
        for (var t = arguments.length, i2 = new Array(t), o2 = 0; o2 < t; o2++)
          i2[o2] = arguments[o2];
        var r2;
        (this._logCallback && this._logCallback({
          level: "error",
          payload: i2
        }), this.debug) && (r2 = console).error.apply(r2, [this._prefix].concat(i2));
      }
    }]), Logger;
  }())();
  function getEuclideanDistance(t, i2, o2, r2) {
    var a2 = t - o2, l2 = i2 - r2;
    return Math.sqrt(Math.pow(a2, 2) + Math.sqrt(Math.pow(l2, 2)));
  }
  function isComponentOnScreen(t) {
    var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!t)
      return false;
    var o2 = t.w, r2 = t.h, a2 = t.core, l2 = void 0 === a2 ? {} : a2, c2 = l2.renderContext, u2 = c2.px, h2 = c2.py, d2 = l2._scissor, p2 = void 0 === d2 ? [] : d2, _2 = t.stage.h / t.stage.getRenderPrecision(), g2 = t.stage.w / t.stage.getRenderPrecision(), m2 = u2, v2 = h2, k2 = u2 - t.x, b2 = h2 - t.y, S2 = i2.offsetX - k2 || 0, C2 = i2.offsetY - b2 || 0;
    if (t.transition("x") && (m2 = u2 - t.x + t.transition("x").targetValue), t.transition("y") && (v2 = h2 - t.y + t.transition("y").targetValue), v2 += C2, !((m2 += S2) >= 0 && m2 + o2 <= g2) || !(v2 >= 0 && v2 + r2 <= _2))
      return false;
    if (p2 && p2.length) {
      var T2 = _slicedToArray(p2, 4), I2 = T2[0], A2 = void 0 === I2 ? null : I2, P = T2[1], L = void 0 === P ? null : P, B = T2[2], O2 = void 0 === B ? null : B, W2 = T2[3], j = void 0 === W2 ? null : W2, M = Math.round(m2 + o2) >= Math.round(A2), R2 = Math.round(m2) <= Math.round(A2 + O2), D2 = Math.round(v2 + r2) >= Math.round(L), N2 = Math.round(v2 + r2) <= Math.round(L + j);
      return M && R2 && D2 && N2;
    }
    return true;
  }
  function getWidthByUpCount(t) {
    var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, o2 = t.layout.screenW, r2 = t.layout.columnCount, a2 = t.layout.marginX, l2 = t.layout.gutterX;
    if (!(i2 < 1 || i2 > r2))
      return (o2 - 2 * a2 - (i2 - 1) * l2) / i2;
    console.error("Column expects a number between 1 & ".concat(r2, ". Received ").concat(i2));
  }
  function getWidthByColumnSpan(t, i2) {
    var o2 = t.layout.columnCount, r2 = t.layout.gutterX;
    return getWidthByUpCount(t, o2) * i2 + r2 * (i2 - 1);
  }
  function getDimensions(t) {
    var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = i2.w, a2 = i2.h, l2 = i2.ratioX, c2 = i2.ratioY, u2 = i2.upCount, h2 = o2.w || 0, d2 = o2.h || 0, p2 = {};
    return p2 = r2 && a2 ? {
      w: r2,
      h: a2
    } : a2 && l2 && c2 ? {
      w: Math.round(a2 * l2 / c2),
      h: a2
    } : l2 && c2 && u2 ? function getItemRatioDimensions(t2, i3, o3, r3) {
      var a3, l3;
      i3 && o3 && r3 ? (a3 = Math.round(getWidthByUpCount(t2, r3)), l3 = Math.round(a3 / i3 * o3)) : (a3 = 0, l3 = 0);
      return {
        w: a3,
        h: l3
      };
    }(t, l2, c2, u2) : a2 && u2 ? {
      w: Math.round(getWidthByUpCount(t, u2)),
      h: a2
    } : a2 ? {
      w: h2,
      h: a2
    } : r2 ? {
      w: r2,
      h: d2
    } : {
      w: h2,
      h: d2
    }, p2 = _objectSpread(_objectSpread({}, p2), {}, {
      ratioX: l2,
      ratioY: c2,
      upCount: u2
    });
  }
  function getHexColor(t) {
    var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    if (!t)
      return 0;
    "number" == typeof t && (t = t.toString(16).slice(2)), t = t.replace("#", "");
    var o2 = Math.round(255 * i2).toString(16), r2 = "0x".concat(o2).concat(t);
    return Number(r2);
  }
  function getValidColor(i2) {
    if (/^0x[0-9a-fA-F]{8}/g.test(i2))
      return Number(i2);
    if (/^#[0-9a-fA-F]{6}/g.test(i2))
      return getHexColor(i2.substr(1, 6));
    if ("string" == typeof i2 && /^[0-9]{8,10}/g.test(i2))
      return parseInt(i2);
    if ("number" == typeof i2 && /^[0-9]{8,10}/g.test(i2.toString()))
      return i2;
    if ("string" == typeof i2 && i2.indexOf("rgba") > -1)
      return rgba2argb(i2);
    if ("string" == typeof i2 && i2.indexOf("rgb") > -1) {
      var o2 = [].concat(_toConsumableArray(i2.replace(/rgb\(|\)/g, "").split(",")), ["255"]);
      return lightningjs_core_default.StageUtils.getArgbNumber(o2);
    }
    return null;
  }
  function reduceFraction(t) {
    return function simplifyFraction(t2) {
      for (var i2 = _slicedToArray(t2, 2), o2 = i2[0], r2 = i2[1], a2 = o2; a2 > 0; a2--)
        if (!(o2 % a2 || r2 % a2))
          return [o2 / a2, r2 / a2];
    }(t.split("/").map(function(t2) {
      return +t2;
    })).join("/");
  }
  var o = function getValFromObjPath(t, i2) {
    return "string" == typeof i2 && (i2 = i2.split(".").filter(function(t2) {
      return t2.length;
    })), i2.reduce(function(t2, i3) {
      return t2 && t2[i3];
    }, t);
  };
  function rgba2argb(i2) {
    var o2 = i2.replace(/rgba\(|\)/g, "").split(",");
    return o2[3] = 255 * o2[3], lightningjs_core_default.StageUtils.getArgbNumber(o2);
  }
  function capitalizeFirstLetter(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  var r = {
    getWidth: function getWidth(t) {
      var i2 = _objectSpread({
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0,
        strokeWidth: 0
      }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), o2 = i2.padding, r2 = i2.paddingLeft, a2 = i2.paddingRight, l2 = i2.strokeWidth;
      return t ? t - (r2 || o2) - (a2 || o2) - l2 : 0;
    },
    getHeight: function getHeight(t) {
      var i2 = _objectSpread({
        padding: 0,
        paddingBottom: 0,
        paddingTop: 0,
        strokeWidth: 0
      }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), o2 = i2.padding, r2 = i2.paddingBottom, a2 = i2.paddingTop, l2 = i2.strokeWidth;
      return t ? t - (r2 || o2) - (a2 || o2) - l2 : 0;
    }
  };
  function clone(t, i2) {
    var o2 = Object.create(Object.getPrototypeOf(t));
    if (Object.defineProperties(o2, Object.getOwnPropertyDescriptors(t)), !i2 || t === i2)
      return o2;
    for (var r2 in i2) {
      var a2 = i2[r2];
      t.hasOwnProperty(r2) ? o2[r2] = getMergeValue(r2, t, i2) : o2[r2] = a2;
    }
    return o2;
  }
  function getMergeValue(t, i2, o2) {
    var r2 = i2[t], a2 = o2[t], l2 = _typeof(r2), c2 = _typeof(a2);
    return l2 !== c2 || "function" === c2 || Array.isArray(a2) ? a2 : a2 && "object" === c2 ? clone(r2, a2) : a2;
  }
  function measureTextWidth() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i2 = document.createElement("canvas").getContext("2d"), o2 = t.fontStyle, r2 = t.fontWeight, a2 = t.fontSize, l2 = t.fontFamily, c2 = void 0 === l2 ? t.fontFace || "sans-serif" : l2, u2 = [o2, r2, a2 ? "".concat(a2, "px") : "0", "'".concat(c2, "'")].filter(Boolean).join(" ");
    i2.font = u2;
    var h2 = i2.measureText(t.text || "");
    return Math.round(h2.width);
  }
  function getDimension(t, i2) {
    if (!i2)
      return 0;
    var o2 = i2.transition(t);
    return o2.isRunning() ? o2.targetValue : i2[t];
  }
  var a = getDimension.bind(null, "x");
  var l = getDimension.bind(null, "y");
  function flatten(t) {
    return t.reduce(function(t2, i2) {
      return t2.concat(Array.isArray(i2) ? flatten(i2) : i2);
    }, []);
  }
  function stringifyCompare(t, i2) {
    return JSON.stringify(t) === JSON.stringify(i2);
  }
  function delayForAnimation(t) {
    setTimeout(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16);
  }
  var c = function degreesToRadians(t) {
    return t * (Math.PI / 180);
  };
  var u = /({ICON.*?}|{BADGE:.*?}|{NEWLINE}|{TEXT:.*?})/g;
  function max() {
    if (arguments) {
      var t = Array.from(arguments).filter(function(t2) {
        return !isNaN(t2) && null != t2;
      });
      if (t.length)
        return Math.max.apply(Math, _toConsumableArray(t));
    }
  }
  function watchForUpdates(t) {
    var o2, r2 = t.element, a2 = t.watchProps, l2 = void 0 === a2 ? [] : a2, c2 = t.sideEffect, u2 = void 0 === c2 ? function() {
    } : c2;
    null != r2 && r2.isElement || i.error("watchForUpdates: Expected a Lightning Element passed to element parameter, received ".concat(_typeof(r2)));
    var h2 = null === (o2 = r2.__core) || void 0 === o2 ? void 0 : o2._onAfterUpdate;
    return r2.onAfterUpdate = function(t2) {
      var i2 = false;
      l2.forEach(function(o3) {
        if (!t2.transition(o3) || !t2.transition(o3).isRunning()) {
          var r3 = "__watchPrev".concat(o3), a3 = t2[o3];
          a3 !== t2[r3] && (t2[r3] = a3, i2 = true);
        }
      }), i2 && u2(), h2 && h2(t2);
    }.bind(this), r2;
  }
  var h = {
    isMarkupString: function isMarkupString() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      return "string" == typeof t && u.test(t);
    },
    capitalizeFirstLetter,
    degreesToRadians: c,
    downloadFile: function downloadFile(t, i2, o2) {
      ["plain", "json"].includes(o2) || (o2 = "plain");
      var r2 = "data:text/".concat(o2, ";charset=utf-8,") + encodeURIComponent(JSON.stringify(t)), a2 = document.createElement("a");
      a2.setAttribute("href", r2), a2.setAttribute("download", i2), a2.click();
    },
    delayForAnimation,
    stringifyCompare,
    objectPropertyOf: function objectPropertyOf(t, i2) {
      return i2.reduce(function(t2, i3) {
        return t2 && "undefined" !== t2[i3] ? t2[i3] : void 0;
      }, t);
    },
    flatten,
    getDimension,
    getFirstNumber: function getFirstNumber() {
      for (var t = arguments.length, i2 = new Array(t), o2 = 0; o2 < t; o2++)
        i2[o2] = arguments[o2];
      return i2.find(Number.isFinite);
    },
    measureTextWidth,
    clone,
    getMergeValue,
    RoundRect: r,
    rgba2argb,
    getValFromObjPath: o,
    reduceFraction,
    getValidColor,
    getHexColor,
    getAspectRatioH: function getAspectRatioH(t) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ":", o2 = _slicedToArray((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "16:9").split(i2), 2);
      return t / (o2[0] / o2[1]);
    },
    getAspectRatioW: function getAspectRatioW(t) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ":", o2 = _slicedToArray((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "16:9").split(i2), 2);
      return t * (o2[0] / o2[1]);
    },
    getWidthByUpCount,
    getDimensions,
    getWidthByColumnSpan,
    createConditionalZContext: function createConditionalZContext(t, i2) {
      t.zIndex || void 0 === i2 || 0 === i2 || (t.forceZIndexContext = true, t.zIndex = 0);
    },
    watchForUpdates,
    convertTextAlignToFlexJustify: function convertTextAlignToFlexJustify(t) {
      switch (t) {
        case "left":
          return "flex-start";
        case "center":
          return "center";
        case "right":
          return "flex-end";
        default:
          return console.warn('Expected "textAlign" values are "left," "center," and "right," but instead, '.concat(t, ' was received and will fall back to "left."')), "flex-start";
      }
    }
  };
  var d = new (function() {
    function Metrics2() {
      _classCallCheck(this, Metrics2), this._keyMetricsCallback = void 0;
    }
    return _createClass(Metrics2, [{
      key: "keyMetricsCallback",
      get: function get() {
        return this._keyMetricsCallback;
      },
      set: function set2(t) {
        -1 < ["undefined", "function"].indexOf(_typeof(t)) ? this._keyMetricsCallback = t : i.warn("context keyMetricsCallback expected a function. Received ".concat(_typeof(t)));
      }
    }]), Metrics2;
  }())();
  var p = new lightningjs_core_default.EventEmitter();
  var _ = {
    name: "Base Lightning TV",
    alpha: {
      primary: 1,
      secondary: 0.7,
      tertiary: 0.1,
      inactive: 0.5,
      full: 1,
      none: 0,
      alpha1: 0.1,
      alpha2: 0.3,
      alpha3: 0.5,
      alpha4: 0.7,
      alpha5: 0.9
    },
    animation: {
      duration: {
        none: 0,
        xfast: 0.1,
        fast: 0.25,
        normal: 0.5,
        slow: 0.75,
        xslow: 0.9
      },
      delay: {
        none: 0,
        xfast: 0.01,
        fast: 0.025,
        normal: 0.05,
        slow: 0.075,
        xslow: 0.09
      },
      expressive: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      },
      expressiveEntrance: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      },
      expressiveExit: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      },
      standard: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      },
      standardEntrance: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      },
      standardExit: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      },
      utility: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      },
      utilityEntrance: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      },
      utilityExit: {
        timingFunction: "cubic-bezier(0, 0, 1, 1)",
        delay: 0,
        duration: 0.25
      }
    },
    asset: {
      arrowLeft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==",
      arrowRight: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=",
      backspaceOutline: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC",
      check: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=="
    },
    color: {
      white: ["#ffffff", 1],
      black: ["#000000", 1],
      grey: ["#929096", 1],
      red: ["#e74c3c", 1],
      orange: ["#dc7633", 1],
      yellow: ["#f7dc6f", 1],
      green: ["#2Ecc71", 1],
      blue: ["#93a9fd", 1],
      purple: ["#663399", 1],
      palette: {
        "grey-05": ["#f8f7fa", 1],
        "grey-40": ["#929096", 1],
        "grey-70": ["#48474b", 1],
        "grey-90": ["#181819", 1],
        "blue-20": ["#becffe", 1],
        "blue-40": ["#93a9fd", 1],
        "blue-90": ["#000033", 1]
      },
      material: ["#181819", 1],
      materialBrand: ["#000033", 1],
      overlay: ["#181819", 0.7],
      textNeutral: ["#f8f7fa", 1],
      textNeutralSecondary: ["#f8f7fa", 0.7],
      textNeutralTertiary: ["#f8f7fa", 0.1],
      textNeutralDisabled: ["#f8f7fa", 0.5],
      textInverse: ["#181819", 1],
      textInverseSecondary: ["#181819", 0.7],
      textInverseTertiary: ["#181819", 0.1],
      textInverseDisabled: ["#181819", 0.5],
      textBrand: ["#93a9fd", 1],
      textBrandSecondary: ["#93a9fd", 0.7],
      textBrandTertiary: ["#93a9fd", 0.1],
      textBrandDisabled: ["#93a9fd", 0.5],
      textPositive: ["#2Ecc71", 1],
      textNegative: ["#e74c3c", 1],
      textInfo: ["#93a9fd", 1],
      textCaution: ["#dc7633", 1],
      fillTransparent: ["#ffffff", 0],
      fillNeutral: ["#f8f7fa", 1],
      fillNeutralSecondary: ["#f8f7fa", 0.7],
      fillNeutralTertiary: ["#f8f7fa", 0.1],
      fillNeutralDisabled: ["#f8f7fa", 0.5],
      fillInverse: ["#181819", 1],
      fillInverseSecondary: ["#181819", 0.7],
      fillInverseTertiary: ["#181819", 0.1],
      fillInverseDisabled: ["#181819", 0.5],
      fillBrand: ["#93a9fd", 1],
      fillBrandSecondary: ["#93a9fd", 0.7],
      fillBrandTertiary: ["#93a9fd", 0.1],
      fillBrandDisabled: ["#93a9fd", 0.5],
      fillPositive: ["#2Ecc71", 1],
      fillNegative: ["#e74c3c", 1],
      fillInfo: ["#93a9fd", 1],
      fillCaution: ["#dc7633", 1],
      strokeNeutral: ["#f8f7fa", 1],
      strokeNeutralSecondary: ["#f8f7fa", 0.7],
      strokeNeutralTertiary: ["#f8f7fa", 0.1],
      strokeNeutralDisabled: ["#f8f7fa", 0.5],
      strokeInverse: ["#181819", 1],
      strokeInverseSecondary: ["#181819", 0.7],
      strokeInverseTertiary: ["#181819", 0.1],
      strokeInverseDisabled: ["#181819", 0.5],
      strokeBrand: ["#93a9fd", 1],
      strokeBrandSecondary: ["#93a9fd", 0.7],
      strokeBrandTertiary: ["#93a9fd", 0.1],
      strokeBrandDisabled: ["#93a9fd", 0.5],
      strokePositive: ["#2Ecc71", 1],
      strokeNegative: ["#e74c3c", 1],
      strokeInfo: ["#93a9fd", 1],
      strokeCaution: ["#dc7633", 1],
      interactiveNeutral: ["#ffffff", 0.1],
      interactiveNeutralFocus: ["#ffffff", 1],
      interactiveNeutralFocusSoft: ["#ffffff", 0.1],
      interactiveInverse: ["#48474b", void 0],
      interactiveInverseFocus: ["#48474b", 1],
      interactiveInverseFocusSoft: ["#48474b", 0.1],
      interactiveBrand: ["#becffe", 0.1],
      interactiveBrandFocus: ["#becffe", 1],
      interactiveBrandFocusSoft: ["#becffe", 0.1],
      shadowNeutral: ["#000000", 0.7],
      shadowNeutralFocus: ["#000000", 0.7],
      shadowNeutralFocusSoft: ["#000000", 0.7],
      shadowNeutralText: ["#000000", 1],
      shadowInverse: ["#000000", 0.7],
      shadowInverseFocus: ["#000000", 0.7],
      shadowInverseFocusSoft: ["#000000", 0.7],
      shadowInverseText: ["#000000", 1],
      shadowBrand: ["#000000", 0.7],
      shadowBrandFocus: ["#000000", 0.7],
      shadowBrandFocusSoft: ["#000000", 0.7],
      shadowBrandText: ["#000000", 1]
    },
    componentConfig: {
      Keyboard: {
        style: {
          keyProps: {
            delete: {
              title: null,
              icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC"
            }
          }
        }
      }
    },
    font: [],
    layout: {
      columnCount: 10,
      focusScale: 1.2,
      gutterX: 20,
      gutterY: 20,
      marginX: 150,
      marginY: 150,
      safe: 50,
      screenW: 1920,
      screenH: 1080
    },
    radius: {
      none: 0,
      xs: 2,
      sm: 4,
      md: 8,
      lg: 16,
      xl: 24
    },
    spacer: {
      none: 0,
      xxs: 2,
      xs: 4,
      sm: 8,
      md: 10,
      lg: 20,
      xl: 30,
      xxl: 40,
      xxxl: 50
    },
    stroke: {
      none: 0,
      sm: 2,
      md: 4,
      lg: 6,
      xl: 8
    },
    typography: {
      display1: {
        fontFamily: "Arial",
        fontSize: 75,
        lineHeight: 85,
        fontStyle: "500",
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      display2: {
        fontFamily: "Arial",
        fontSize: 50,
        lineHeight: 60,
        fontStyle: "500",
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      headline1: {
        fontFamily: "Arial",
        fontSize: 35,
        fontStyle: "500",
        lineHeight: 48,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      headline2: {
        fontFamily: "Arial",
        fontSize: 30,
        fontStyle: "500",
        lineHeight: 40,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      headline3: {
        fontFamily: "Arial",
        fontSize: 25,
        fontStyle: "500",
        lineHeight: 36,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      body1: {
        fontFamily: "Arial",
        fontSize: 25,
        fontStyle: "300",
        lineHeight: 40,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      body2: {
        fontFamily: "Arial",
        fontSize: 22,
        fontStyle: "300",
        lineHeight: 32,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      body3: {
        fontFamily: "Arial",
        fontSize: 20,
        fontStyle: "300",
        lineHeight: 32,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      button1: {
        fontFamily: "Arial",
        fontSize: 25,
        fontStyle: "500",
        lineHeight: 32,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      button2: {
        fontFamily: "Arial",
        fontSize: 20,
        fontStyle: "500",
        lineHeight: 32,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      callout1: {
        fontFamily: "Arial",
        fontSize: 20,
        fontStyle: "500",
        lineHeight: 32,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      caption1: {
        fontFamily: "Arial",
        fontSize: 15,
        fontStyle: "500",
        lineHeight: 24,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      tag1: {
        fontFamily: "Arial",
        fontSize: 20,
        fontStyle: "500",
        lineHeight: 24,
        verticalAlign: "middle",
        textBaseline: "bottom"
      },
      footnote1: {
        fontFamily: "Arial",
        fontSize: 22,
        fontStyle: "300",
        lineHeight: 30,
        verticalAlign: "middle",
        textBaseline: "bottom"
      }
    }
  };
  var g = [];
  var m = function fontLoader2(t) {
    for (var o2 = [], r2 = function _loop() {
      var r3 = t[a2], l2 = r3.family, c2 = r3.src, u2 = r3.descriptors, h2 = c2 && Array.isArray(c2) && c2.length ? c2.map(function(t2) {
        return "local" === t2.substr(0, 5) ? t2 : "url(".concat(t2, ")");
      }).join(",") : "url(" + c2 + ")", d2 = new FontFace(l2, h2, u2 || {});
      i.info("Loading font", l2), document.fonts.add(d2), o2.push(new Promise(function(t2) {
        d2.load().then(function() {
          g.push(d2), t2(l2);
        }).catch(function(i2) {
          t2(new Error("".concat(l2, ": ").concat(i2.message)));
        });
      }));
    }, a2 = 0; a2 < t.length; a2++)
      r2();
    return Promise.all(o2).then(function(t2) {
      var o3 = t2.filter(function(t3) {
        return !(t3 instanceof Error);
      }).join(", ");
      o3 && i.log("Fonts loaded: ".concat(o3));
      var r3 = t2.filter(function(t3) {
        return t3 instanceof Error;
      }).map(function(t3) {
        return t3.message;
      }).join(", ");
      r3 && i.error("Unable to load fonts: ".concat(r3));
    });
  };
  var v = function() {
    var t = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(t2) {
      return _regeneratorRuntime().wrap(function _callee$(o2) {
        for (; ; )
          switch (o2.prev = o2.next) {
            case 0:
              if (!document.fonts || !("delete" in document.fonts)) {
                o2.next = 6;
                break;
              }
              if (g.length) {
                o2.next = 3;
                break;
              }
              return o2.abrupt("return");
            case 3:
              g = g.filter(function(o3) {
                return t2.find(function(t3) {
                  return t3.family === o3.family;
                }) ? o3 : (i.info("Removing font", o3.family), document.fonts.delete(o3), false);
              }), o2.next = 7;
              break;
            case 6:
              i.info("Unable to remove manually-added fonts");
            case 7:
            case "end":
              return o2.stop();
          }
      }, _callee);
    }));
    return function cleanupFonts(i2) {
      return t.apply(this, arguments);
    };
  }();
  var k = {
    fontFamily: "fontFace"
  };
  var b = function all3(t) {
    for (var i2 = {}, o2 = 0; o2 < t.length; o2++)
      i2 = clone(i2, t[o2]);
    return i2;
  };
  var S = [];
  var C = function isSubTheme(t) {
    return "subTheme" === t.slice(0, 8);
  };
  var T = new (function() {
    function ThemeManager() {
      _classCallCheck(this, ThemeManager), this._cache = /* @__PURE__ */ new Map(), "undefined" != typeof window && (window.LUI || (window.LUI = {}), window.LUI.themeManagerInstances ? window.LUI.themeManagerInstances.push({
        themeManager: this,
        events: p
      }) : window.LUI.themeManagerInstances = [{
        themeManager: this,
        events: p
      }]);
    }
    var t, r2, a2, l2, c2;
    return _createClass(ThemeManager, [{
      key: "_setCache",
      value: function _setCache(t2, i2) {
        "undefined" != typeof window && window.LUI.themeManagerInstances.forEach(function(o2) {
          var r3 = o2.themeManager;
          r3 && r3._cache.set(t2, i2);
        });
      }
    }, {
      key: "_deleteCache",
      value: function _deleteCache(t2) {
        "undefined" != typeof window && window.LUI.themeManagerInstances.forEach(function(i2) {
          var o2 = i2.themeManager;
          o2 && o2._cache.delete(t2);
        });
      }
    }, {
      key: "_emit",
      value: function _emit(t2, i2) {
        "undefined" != typeof window && window.LUI.themeManagerInstances.forEach(function(o2) {
          o2.events.emit(t2, i2);
        });
      }
    }, {
      key: "getTheme",
      value: function getTheme() {
        if (this._cache.has("theme"))
          return this._cache.get("theme");
        var t2 = this._processTheme.call(this);
        return this._setCache("theme", t2), t2;
      }
    }, {
      key: "setTheme",
      value: (c2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(t2) {
        var o2, r3;
        return _regeneratorRuntime().wrap(function _callee2$(a3) {
          for (; ; )
            switch (a3.prev = a3.next) {
              case 0:
                if ("object" === _typeof(o2 = Array.isArray(t2) ? b(t2) : t2) && null !== o2) {
                  a3.next = 4;
                  break;
                }
                return i.warn("context theme expected an object. Received ".concat(_typeof(o2))), a3.abrupt("return");
              case 4:
                return this._clearCache(), r3 = this._processTheme.call(this, [o2], o2.extensions), this._setCache("theme", r3), a3.next = 9, v(r3.font);
              case 9:
                if (!r3.font || !r3.font.length) {
                  a3.next = 12;
                  break;
                }
                return a3.next = 12, this._loadFonts(r3.font);
              case 12:
                return this._refreshSubThemes(), this._emit("themeExtensionsUpdate"), this._emit("themeUpdate"), a3.abrupt("return", r3);
              case 16:
              case "end":
                return a3.stop();
            }
        }, _callee2, this);
      })), function setTheme(t2) {
        return c2.apply(this, arguments);
      })
    }, {
      key: "getSubTheme",
      value: function getSubTheme2(t2) {
        if (this._cache.has("subTheme".concat(t2)))
          return this._cache.get("subTheme".concat(t2)).result;
      }
    }, {
      key: "setSubTheme",
      value: (l2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(t2, o2) {
        var r3, a3, l3, c3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(u2) {
          for (; ; )
            switch (u2.prev = u2.next) {
              case 0:
                if (r3 = !(c3.length > 2 && void 0 !== c3[2]) || c3[2], t2) {
                  u2.next = 4;
                  break;
                }
                return i.warn("Sub theme name not specified"), u2.abrupt("return");
              case 4:
                if ("string" == typeof t2) {
                  u2.next = 7;
                  break;
                }
                return i.warn("Sub theme name must be a string. Received an ".concat(_typeof(t2))), u2.abrupt("return");
              case 7:
                if ("object" === _typeof(o2) && Object.keys(o2).length) {
                  u2.next = 10;
                  break;
                }
                return i.warn("Could not set subTheme ".concat(t2, ", value should be an object with properties. Received an ").concat(_typeof(o2))), u2.abrupt("return");
              case 10:
                if (a3 = this.getTheme(), !(l3 = this._processTheme.call(this, [a3, o2])).font || !l3.font.length) {
                  u2.next = 15;
                  break;
                }
                return u2.next = 15, this._loadFonts(l3.font);
              case 15:
                return this._setCache("subTheme".concat(t2), {
                  original: o2,
                  result: l3
                }), r3 && this._emit("themeUpdate".concat(t2)), u2.abrupt("return", l3);
              case 18:
              case "end":
                return u2.stop();
            }
        }, _callee3, this);
      })), function setSubTheme(t2, i2) {
        return l2.apply(this, arguments);
      })
    }, {
      key: "_refreshSubThemes",
      value: function _refreshSubThemes() {
        var t2 = this;
        _toConsumableArray(this._cache.keys()).forEach(function(i2) {
          if ("string" == typeof i2 && C(i2)) {
            var o2 = t2._cache.get(i2);
            o2.original && t2.updateSubTheme(i2.replace(/^subTheme/, ""), o2.original);
          }
        });
      }
    }, {
      key: "_loadFonts",
      value: (a2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4(t2) {
        return _regeneratorRuntime().wrap(function _callee4$(o2) {
          for (; ; )
            switch (o2.prev = o2.next) {
              case 0:
                return o2.prev = 0, o2.next = 3, m(t2);
              case 3:
                o2.next = 8;
                break;
              case 5:
                o2.prev = 5, o2.t0 = o2.catch(0), i.error("Unable to load font: ".concat(o2.t0));
              case 8:
              case "end":
                return o2.stop();
            }
        }, _callee4, null, [[0, 5]]);
      })), function _loadFonts(t2) {
        return a2.apply(this, arguments);
      })
    }, {
      key: "updateTheme",
      value: (r2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5(t2) {
        var i2, o2, r3;
        return _regeneratorRuntime().wrap(function _callee5$(a3) {
          for (; ; )
            switch (a3.prev = a3.next) {
              case 0:
                if (i2 = Array.isArray(t2) ? b(t2) : t2, o2 = {}, this._cache.has("theme") && (o2 = this._cache.get("theme")), this._clearCache(), r3 = this._processTheme.call(this, [o2, i2], i2.extensions || o2.extensions), this._setCache("theme", r3), !r3.font || !r3.font.length) {
                  a3.next = 9;
                  break;
                }
                return a3.next = 9, this._loadFonts(r3.font);
              case 9:
                return this._refreshSubThemes(), i2.extensions && this._emit("themeExtensionsUpdate"), this._emit("themeUpdate"), a3.abrupt("return", r3);
              case 13:
              case "end":
                return a3.stop();
            }
        }, _callee5, this);
      })), function updateTheme(t2) {
        return r2.apply(this, arguments);
      })
    }, {
      key: "_clearCache",
      value: function _clearCache() {
        var t2 = this;
        S.filter(function(t3) {
          return window.URL && "function" == typeof window.URL.revokeObjectURL && URL.revokeObjectURL(t3), false;
        }), this._cache.forEach(function(i2, o2) {
          "string" == typeof o2 && C(o2) || t2._deleteCache(o2);
        }), this._cache.forEach(function(i2, o2) {
          "string" == typeof o2 && C(o2) && t2.setSubTheme(o2.replace("subTheme", ""), i2.original, false);
        });
      }
    }, {
      key: "updateSubTheme",
      value: (t = _asyncToGenerator(_regeneratorRuntime().mark(function _callee6(t2, o2) {
        var r3, a3, l3, c3, u2 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(h2) {
          for (; ; )
            switch (h2.prev = h2.next) {
              case 0:
                if (r3 = !(u2.length > 2 && void 0 !== u2[2]) || u2[2], t2) {
                  h2.next = 4;
                  break;
                }
                return i.warn("Sub theme name not specified"), h2.abrupt("return");
              case 4:
                if ("object" === _typeof(o2) && Object.keys(o2).length) {
                  h2.next = 7;
                  break;
                }
                return i.warn("Could not update subTheme ".concat(t2, " due to invalid value")), h2.abrupt("return");
              case 7:
                if (a3 = this.getTheme(), l3 = {}, this._cache.has("subTheme".concat(t2)) && (l3 = this._cache.get("subTheme".concat(t2)).original), !(c3 = this._processTheme.call(this, [a3, l3, o2])).font || !c3.font.length) {
                  h2.next = 14;
                  break;
                }
                return h2.next = 14, this._loadFonts(c3.font);
              case 14:
                return this._setCache("subTheme".concat(t2), {
                  original: clone(l3, o2),
                  result: c3
                }), r3 && this._emit("themeUpdate".concat(t2)), h2.abrupt("return", c3);
              case 17:
              case "end":
                return h2.stop();
            }
        }, _callee6, this);
      })), function updateSubTheme(i2, o2) {
        return t.apply(this, arguments);
      })
    }, {
      key: "removeSubTheme",
      value: function removeSubTheme(t2) {
        this._cache.has("subTheme".concat(t2)) && this._deleteCache("subTheme".concat(t2)), this._emit("themeUpdate".concat(t2));
      }
    }, {
      key: "_getComponentUUID",
      value: function _getComponentUUID(t2) {
        return "componentStyle".concat(t2);
      }
    }, {
      key: "_processTheme",
      value: function _processTheme() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], r3 = arguments.length > 1 ? arguments[1] : void 0;
        if (!Array.isArray(t2))
          throw new Error("context processTheme expected an array. Received ".concat(_typeof(t2)));
        var a3 = b([_].concat(_toConsumableArray(t2))), l3 = {}, c3 = JSON.stringify(a3, function(t3, r4) {
          var c4 = r4;
          if (c4 && "object" === _typeof(c4)) {
            var u2 = r4;
            for (var h2 in c4)
              Object.hasOwnProperty.call(c4, h2) && k[h2] && (u2[h2 && k[h2]] = c4[h2], delete u2[h2]);
            c4 = u2;
          }
          var d2 = function checkBase64EncodedImage(t4) {
            var i2 = /^data:image\/(jpeg|jpg|png|gif);base64,/, o2 = i2.test(t4);
            return {
              isImage: o2,
              mimeType: o2 ? function getMimeTypeFromDataUri(t5) {
                var i3 = t5.match(/^data:(.*?);base64,/);
                return i3 && 2 === i3.length ? i3[1] : null;
              }(t4.match(i2)[0]) : null
            };
          }(c4), p2 = d2.isImage, _2 = d2.mimeType;
          if (window.URL && "function" == typeof window.URL.createObjectURL && p2)
            try {
              var g2 = function base64ToBlobURL(t4, o2) {
                var r5 = atob(t4.substring(t4.indexOf(",") + 1)), a4 = [];
                try {
                  for (var l4 = 0; l4 < r5.length; l4 += 512) {
                    for (var c5 = r5.slice(l4, l4 + 512), u3 = new Array(c5.length), h3 = 0; h3 < c5.length; h3++)
                      u3[h3] = c5.charCodeAt(h3);
                    var d3 = new Uint8Array(u3);
                    a4.push(d3);
                  }
                  var p3 = new Blob(a4, {
                    type: o2
                  });
                  return URL.createObjectURL(p3);
                } catch (t5) {
                  return i.info("Unable to convert base64 image to URL"), null;
                }
              }(c4, _2);
              return S.push(g2), g2;
            } catch (t4) {
              return c4;
            }
          if (Array.isArray(c4) && 2 === c4.length && !c4[0].targetComponent && c4[0].length && "#" === c4[0].substr(0, 1))
            return getHexColor(c4[0], c4[1]);
          if ("extensions" !== t3 && "function" != typeof c4 && ("object" !== _typeof(c4) || null === c4 || "Object" === c4.constructor.name || Array.isArray(c4))) {
            if ("string" == typeof c4 && c4.includes("theme.")) {
              var m2 = o({
                theme: a3
              }, c4);
              return m2 || c4;
            }
            var v2 = getValidColor(c4);
            return v2 || c4;
          }
          l3[t3] = c4;
        });
        return _objectSpread(_objectSpread(_objectSpread({}, JSON.parse(c3)), l3), {}, {
          extensions: r3
        });
      }
    }]), ThemeManager;
  }())();
  var I = new (function() {
    function Context() {
      _classCallCheck(this, Context);
    }
    return _createClass(Context, [{
      key: "theme",
      get: function get() {
        return T.getTheme();
      },
      set: function set2(t) {
        i.warn("Context.theme must be set using context.setTheme or context.updateTheme");
      }
    }, {
      key: "keyMetricsCallback",
      get: function get() {
        return d.keyMetricsCallback;
      },
      set: function set2(t) {
        i.warn("Context.keyMetricsCallback must be set using context.setKeyMetricsCallback");
      }
    }, {
      key: "debug",
      get: function get() {
        return i.debug;
      },
      set: function set2(t) {
        i.debug = t;
      }
    }, {
      key: "on",
      value: function on() {
        return p.on.apply(p, arguments);
      }
    }, {
      key: "off",
      value: function off() {
        return p.off.apply(p, arguments);
      }
    }, {
      key: "emit",
      value: function emit4() {
        return p.emit.apply(p, arguments);
      }
    }, {
      key: "log",
      value: function log() {
        i.log.apply(i, arguments);
      }
    }, {
      key: "info",
      value: function info() {
        i.info.apply(i, arguments);
      }
    }, {
      key: "warn",
      value: function warn() {
        i.warn.apply(i, arguments);
      }
    }, {
      key: "error",
      value: function error() {
        for (var t = arguments.length, o2 = new Array(t), r2 = 0; r2 < t; r2++)
          o2[r2] = arguments[r2];
        i.error(o2);
      }
    }, {
      key: "setTheme",
      value: function setTheme(t) {
        return T.setTheme(t);
      }
    }, {
      key: "updateTheme",
      value: function updateTheme(t) {
        return T.updateTheme(t);
      }
    }, {
      key: "getSubTheme",
      value: function getSubTheme2(t) {
        return T.getSubTheme(t);
      }
    }, {
      key: "setSubThemes",
      value: function setSubThemes(t) {
        if ("object" === _typeof(t))
          for (var o2 in t)
            T.setSubTheme(o2, t[o2]);
        else
          i.warn("subThemes must be an object");
      }
    }, {
      key: "setSubTheme",
      value: function setSubTheme(t, i2) {
        return T.setSubTheme(t, i2);
      }
    }, {
      key: "updateSubTheme",
      value: function updateSubTheme(t, i2) {
        return T.updateSubTheme(t, i2);
      }
    }, {
      key: "removeSubTheme",
      value: function removeSubTheme(t) {
        T.removeSubTheme(t);
      }
    }, {
      key: "setLogCallback",
      value: function setLogCallback(t) {
        i.logCallback = t;
      }
    }, {
      key: "setKeyMetricsCallback",
      value: function setKeyMetricsCallback(t) {
        d.keyMetricsCallback = t;
      }
    }, {
      key: "config",
      value: function config() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i2 = Object.keys(t), o2 = 0; o2 < i2.length; o2++) {
          var r2 = this["set" + capitalizeFirstLetter(i2[o2])];
          r2 && r2(t[i2[o2]]);
        }
        return this;
      }
    }]), Context;
  }())();
  var A = new (function() {
    function GlobalUpdateManager() {
      _classCallCheck(this, GlobalUpdateManager), this._updateThemeSet = /* @__PURE__ */ new Set(), this._requestUpdateSet = /* @__PURE__ */ new Set(), this._timeout = null, this._runUpdatesTimeoutHandler = this._runUpdatesTimeoutHandler.bind(this);
    }
    return _createClass(GlobalUpdateManager, [{
      key: "_runUpdatesTimeoutHandler",
      value: function _runUpdatesTimeoutHandler() {
        this._timeout = null, this._updateThemeSet.forEach(function(t) {
          try {
            t._updateThemeComponent();
          } catch (t2) {
            I.error("Error updating component themes", t2);
          }
        }), this._updateThemeSet.clear(), this._requestUpdateSet.forEach(function(t) {
          try {
            t.requestUpdate();
          } catch (t2) {
            I.error("Error updating component", t2);
          }
        }), this._requestUpdateSet.clear();
      }
    }, {
      key: "flush",
      value: function flush() {
        this._timeout && (clearTimeout(this._timeout), this._runUpdatesTimeoutHandler());
      }
    }, {
      key: "addUpdateTheme",
      value: function addUpdateTheme(t) {
        this._updateThemeSet.add(t), this._timeout || (this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0));
      }
    }, {
      key: "deleteUpdateTheme",
      value: function deleteUpdateTheme(t) {
        this._updateThemeSet.delete(t);
      }
    }, {
      key: "addRequestUpdate",
      value: function addRequestUpdate(t) {
        this._requestUpdateSet.add(t), this._timeout || (this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0));
      }
    }, {
      key: "deleteRequestUpdate",
      value: function deleteRequestUpdate(t) {
        this._requestUpdateSet.delete(t);
      }
    }]), GlobalUpdateManager;
  }())();
  var O = [{
    pattern: "TV-14",
    replacer: "Rated TV-14"
  }, {
    pattern: "CC",
    replacer: "Closed Captions available"
  }, {
    pattern: "HD",
    replacer: "High Definition available"
  }, {
    pattern: /ENG(?!\+)/,
    replacer: "English Available"
  }, {
    pattern: /ENG\+ES/,
    replacer: "Available in English and Spanish"
  }, {
    pattern: "AD",
    replacer: "Audio Description available"
  }, {
    pattern: "RT",
    replacer: "Rotten Tomatoes"
  }, {
    pattern: /(S)+(\d+)+(E)+(\d+)+/,
    replacer: function replacer(t, i2, o2, r2, a2) {
      return "Season ".concat(o2, " Episode ").concat(a2);
    }
  }];
  var W = generateAbbrevConfig(O);
  function wrapWithBoundary(t) {
    return "\\b".concat(t, "\\b");
  }
  function generateAbbrevConfig() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O, i2 = (arguments.length > 1 ? arguments[1] : void 0) ? [].concat(O, _toConsumableArray(t)) : t, o2 = {}, r2 = {}, a2 = "", l2 = 0;
    return i2.forEach(function(t2, i3) {
      var c2, u2 = t2.pattern, h2 = t2.replacer;
      u2 instanceof RegExp ? (r2[i3 + l2] = {
        pattern: u2,
        replacer: h2
      }, c2 = wrapWithBoundary(u2.source), l2 += function getNumberOfCaptureGroups(t3) {
        return new RegExp(t3.toString() + "|").exec("").length - 1;
      }(u2)) : (o2[u2] = {
        replacer: h2
      }, c2 = wrapWithBoundary(u2));
      a2 = "" === a2 ? "(".concat(c2, ")") : "".concat(a2, "|(").concat(c2, ")");
    }), {
      abbreviationsPattern: a2 = new RegExp(a2, "g"),
      stringPatternMap: o2,
      regExpPatternMap: r2
    };
  }
  function withHandleKey(t) {
    return function(i2) {
      _inherits(_class2, i2);
      var o2 = _createSuper(_class2);
      function _class2() {
        return _classCallCheck(this, _class2), o2.apply(this, arguments);
      }
      return _createClass(_class2, [{
        key: "_handleKey",
        value: function _handleKey(t2) {
          return this._processEvent(t2);
        }
      }, {
        key: "_handleKeyRelease",
        value: function _handleKeyRelease(t2) {
          return this._processEvent(t2, "Release");
        }
      }, {
        key: "_processEvent",
        value: function _processEvent(t2) {
          var i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o3 = (this.stage.application.__keymap || {})[t2.keyCode];
          return o3 || (o3 = t2.key), !(!o3 || "function" != typeof this["on".concat(o3).concat(i3)]) && (this._invokeKeyPayloadCallback(o3 + i3), this["on".concat(o3).concat(i3)].call(this, this, t2));
        }
      }, {
        key: "_invokeKeyPayloadCallback",
        value: function _invokeKeyPayloadCallback(t2) {
          this.metricsPayload && "function" == typeof I.keyMetricsCallback && I.keyMetricsCallback(t2, this.metricsPayload);
        }
      }], [{
        key: "name",
        get: function get() {
          return t.name;
        }
      }]), _class2;
    }(t);
  }
  function withLayout(t) {
    return function(t2) {
      _inherits(_class3, t2);
      var i2 = _createSuper(_class3);
      function _class3() {
        return _classCallCheck(this, _class3), i2.apply(this, arguments);
      }
      return _createClass(_class3, [{
        key: "_construct",
        value: function _construct() {
          _get(_getPrototypeOf(_class3.prototype), "_construct", this) && _get(_getPrototypeOf(_class3.prototype), "_construct", this).call(this), this._previousDimensionData = null;
        }
      }, {
        key: "itemLayout",
        get: function get() {
          return this._itemLayout;
        },
        set: function set2(t3) {
          var i3, o2 = this.constructor._componentName || this.constructor.name;
          t3 && (i3 = JSON.parse(JSON.stringify(t3, function(t4, i4) {
            if (!("circle" !== t4 && i4 < 0))
              return "circle" === t4 ? Boolean(i4) : i4;
            I.error("itemLayout for ".concat(o2, " received an invalid value of ").concat(i4, " for ").concat(t4));
          }))), stringifyCompare(this._itemLayout, i3) || (i3 && !i3.upCount ? (this._originalW = this.w, this._originalH = this.h, this._itemLayout = _objectSpread({
            w: this._originalW,
            h: this._originalH
          }, i3)) : this._itemLayout = i3, this._updateItemLayout());
        }
      }, {
        key: "_allowUpdate",
        value: function _allowUpdate() {
          var t3 = this._itemLayout || {}, i3 = t3.w, o2 = void 0 === i3 ? "" : i3, r2 = t3.h, a2 = void 0 === r2 ? "" : r2, l2 = t3.circle, c2 = void 0 === l2 ? "" : l2, u2 = t3.ratioX, h2 = void 0 === u2 ? "" : u2, d2 = t3.ratioY, p2 = void 0 === d2 ? "" : d2, _2 = t3.upCount, g2 = void 0 === _2 ? "" : _2, m2 = Object.values(I.theme.layout).join("") + "".concat(o2).concat(a2).concat(c2 ? 1 : 0).concat(h2).concat(p2).concat(g2);
          return m2 !== this._previousDimensionData && (this._previousDimensionData = m2, true);
        }
      }, {
        key: "_updateItemLayout",
        value: function _updateItemLayout() {
          if (this._allowUpdate()) {
            var t3 = getDimensions(this.theme, this._itemLayout), i3 = t3.w, o2 = t3.h;
            if (o2 || i3) {
              var r2 = I.theme.layout.screenW, a2 = I.theme.layout.screenH, l2 = i3 || o2 * (r2 / a2), c2 = o2 || i3 * (a2 / r2);
              this.w = this._itemLayout && this._itemLayout.circle ? c2 : l2, this.h = c2, this._itemLayout && this._itemLayout.circle && this.style.radius ? (this._circleSet = true, this._originalRadius = this.style.radius, this.style = _objectSpread(_objectSpread({}, this.style), {}, {
                radius: c2 / 2
              })) : this._circleSet && (this.style = _objectSpread(_objectSpread({}, this.style), {}, {
                radius: this._originalRadius
              }), this._originalRadius = void 0, this._circleSet = false), this.queueRequestUpdate && this.queueRequestUpdate(), this.fireAncestors("$itemChanged");
            }
          }
        }
      }]), _class3;
    }(t);
  }
  function withMarqueeSync(t) {
    return function(o2) {
      _inherits(_class4, o2);
      var r2 = _createSuper(_class4);
      function _class4() {
        return _classCallCheck(this, _class4), r2.apply(this, arguments);
      }
      return _createClass(_class4, [{
        key: "_init",
        value: function _init() {
          _get(_getPrototypeOf(_class4.prototype), "_init", this).call(this), this._shouldSync && this._updateSignals();
        }
      }, {
        key: "_update",
        value: function _update() {
          _get(_getPrototypeOf(_class4.prototype), "_update", this).call(this), this._shouldSync ? this._updateSignals() : this._cleanupSyncValues();
        }
      }, {
        key: "_cleanupSyncValues",
        value: function _cleanupSyncValues() {
          this.syncArray.map(function(t2) {
            t2.marqueeOverrideLoopX = void 0, t2.signals && t2.signals.willMarquee && delete t2.signals.willMarquee;
          });
        }
      }, {
        key: "_updateSignals",
        value: function _updateSignals() {
          this.syncArray && this.syncArray.map(function(t2) {
            t2.signals = _objectSpread(_objectSpread({}, t2.signals), {}, {
              willMarquee: "_willMarquee"
            });
          });
        }
      }, {
        key: "_willMarquee",
        value: function _willMarquee(t2) {
          var i2 = this;
          this._shouldSync && (this._longestMarqueeWidth = Math.max(t2._textRenderedW || 0, this._longestMarqueeWidth || 0), this.syncArray.map(function(t3) {
            t3.marqueeOverrideLoopX = i2._longestMarqueeWidth;
          }));
        }
      }, {
        key: "_shouldSync",
        get: function get() {
          return false !== this.style.marqueeSync && (this.syncArray ? Array.isArray(this.syncArray) ? !(this.syncArray.length < 2) || (i.warn("warning: syncArray must contain at least two component references."), false) : (i.warn("warning: syncArray must be typeof array."), false) : (i.warn("warning: components using MarqueeSync must have a syncArray getter defined."), false));
        }
      }], [{
        key: "name",
        get: function get() {
          return t.name;
        }
      }]), _class4;
    }(t);
  }
  var R = function getCharacterValue(t, i2) {
    return t.charCodeAt(0) * (i2 + 1);
  };
  var D = function sortObject(t) {
    var i2 = {};
    return Object.keys(t).sort().forEach(function(o2) {
      "object" !== _typeof(t[o2]) || null === t[o2] || Array.isArray(t[o2]) ? i2[o2] = t[o2] : i2[o2] = sortObject(t[o2]);
    }), i2;
  };
  var N = function getCharacterSum(t) {
    for (var i2 = D(t), o2 = JSON.stringify(i2).replace(/[{}:",\s]/g, ""), r2 = 0, a2 = 0; a2 < o2.length; a2++)
      r2 += R(o2[a2], a2);
    return r2;
  };
  function executeWithContextRecursive(t, i2) {
    if ("function" == typeof t)
      return executeWithContextRecursive(t(i2), i2);
    if (Array.isArray(t))
      return t.map(function(t2) {
        return executeWithContextRecursive(t2, i2);
      });
    if ("object" === _typeof(t) && null !== t) {
      var o2 = {};
      for (var r2 in t)
        t.hasOwnProperty(r2) && (o2[r2] = executeWithContextRecursive(t[r2], i2));
      return o2;
    }
    return t;
  }
  function isPlainObject3(t) {
    return !("object" !== _typeof(t) || null === t || Array.isArray(t) || t instanceof Date || t instanceof RegExp || t instanceof Function || t instanceof Error);
  }
  var E = function getSubTheme(t) {
    for (; t && (!t.subTheme || "string" != typeof t.subTheme); )
      t = t.p;
    return t ? t.subTheme : void 0;
  };
  var z = function getComponentConfig(t) {
    var i2;
    return isPlainObject3(t) && (null == t || null === (i2 = t.theme) || void 0 === i2 || null === (i2 = i2.componentConfig) || void 0 === i2 ? void 0 : i2[t.constructor.__componentName]) || {};
  };
  function removeEmptyObjects(t) {
    for (var i2 in t)
      t.hasOwnProperty(i2) && isPlainObject3(t[i2]) && (removeEmptyObjects(t[i2]), 0 === Object.keys(t[i2]).length && delete t[i2]);
    return t;
  }
  function getUniqueProperties() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    if (!Array.isArray(t))
      throw new TypeError("Expected defaultProps to be an array of strings.");
    return _toConsumableArray(new Set(t));
  }
  function generatePayload(t, i2, o2, r2, a2, l2) {
    var c2, u2, h2 = clone(i2, t);
    return h2 = clone(h2, null == a2 ? void 0 : a2[o2]), h2 = clone(h2, null == l2 ? void 0 : l2[r2]), h2 = clone(h2, (null == a2 || null === (c2 = a2[o2]) || void 0 === c2 || null === (c2 = c2.mode) || void 0 === c2 ? void 0 : c2[r2]) || {}), h2 = clone(h2, (null == l2 || null === (u2 = l2[r2]) || void 0 === u2 || null === (u2 = u2.tone) || void 0 === u2 ? void 0 : u2[o2]) || {});
  }
  function findNestedKeys(t, i2) {
    var o2 = [];
    function searchNestedKeys(t2) {
      if ("object" === _typeof(t2) && null !== t2)
        for (var i3 in t2)
          t2.hasOwnProperty(i3) && o2.push(i3);
    }
    return function searchForKey(t2) {
      if ("object" === _typeof(t2) && null !== t2) {
        for (var o3 in t2)
          if (t2.hasOwnProperty(o3)) {
            if (o3 === i2) {
              searchNestedKeys(t2[o3]);
              break;
            }
            searchForKey(t2[o3]);
          }
      }
    }(t), o2;
  }
  var H = ["unfocused_neutral", "unfocused_inverse", "unfocused_brand", "focused_neutral", "focused_inverse", "focused_brand", "disabled_neutral", "disabled_inverse", "disabled_brand"];
  var U = function generateComponentStyleSource() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i2 = t.theme, o2 = void 0 === i2 ? {} : i2, r2 = t.styleChain, a2 = void 0 === r2 ? [] : r2, l2 = t.inlineStyle, c2 = void 0 === l2 ? {} : l2, u2 = t.alias, h2 = void 0 === u2 ? [] : u2;
    if ("object" !== _typeof(o2))
      throw new Error("Expected theme to be an object");
    if (!Array.isArray(a2))
      throw new Error("Expected styleChain to be an array");
    if ("object" !== _typeof(c2))
      throw new Error("Expected inlineStyle to be an object");
    if (!Array.isArray(h2))
      throw new Error("Expected alias to be an array");
    var d2, p2 = a2.map(function(t2) {
      var i3 = t2.style;
      if ("object" !== _typeof(i3) || i3.base || i3.mode || i3.tone || i3.default) {
        var o3, r3 = i3.base, a3 = void 0 === r3 ? {} : r3, l3 = i3.mode, c3 = void 0 === l3 ? {} : l3, u3 = i3.tone, h3 = void 0 === u3 ? {} : u3;
        if (i3) {
          var d3 = JSON.parse(JSON.stringify(i3));
          delete d3.base, delete d3.tone, delete d3.mode, o3 = d3;
        }
        return {
          defaultStyle: o3 || {},
          base: a3,
          mode: c3,
          tone: h3
        };
      }
      return {
        base: i3
      };
    });
    if (c2) {
      var _2 = JSON.parse(JSON.stringify(c2));
      delete _2.base, delete _2.tone, delete _2.mode, d2 = _2;
    }
    var g2 = {
      defaultStyle: d2 || {},
      base: (null == c2 ? void 0 : c2.base) || {},
      mode: (null == c2 ? void 0 : c2.mode) || {},
      tone: (null == c2 ? void 0 : c2.tone) || {}
    }, m2 = [].concat(_toConsumableArray(p2), [g2]).map(function(t2) {
      return executeWithContextRecursive(t2, o2);
    }), v2 = findNestedKeys(m2, "mode"), k2 = findNestedKeys(m2, "tone"), b2 = m2.reduce(function(t2, i3) {
      return clone(t2, function generateSolution(t3) {
        var i4, o3 = t3.base, r3 = void 0 === o3 ? {} : o3, a3 = t3.tone, l3 = void 0 === a3 ? {} : a3, c3 = t3.mode, u3 = void 0 === c3 ? {} : c3, h3 = t3.defaultStyle, d3 = void 0 === h3 ? {} : h3, p3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], _3 = {}, g3 = getUniqueProperties(["focused", "disabled"].concat(_toConsumableArray(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []), ["unfocused"])), m3 = getUniqueProperties(["neutral", "inverse", "brand"].concat(_toConsumableArray(p3))), v3 = _createForOfIteratorHelper(g3);
        try {
          for (v3.s(); !(i4 = v3.n()).done; ) {
            var k3, b3 = i4.value, S3 = _createForOfIteratorHelper(m3);
            try {
              for (S3.s(); !(k3 = S3.n()).done; ) {
                var C2 = k3.value, T2 = generatePayload(r3, d3, C2, b3, l3, u3);
                _3["".concat(b3, "_").concat(C2)] = T2;
              }
            } catch (t4) {
              S3.e(t4);
            } finally {
              S3.f();
            }
          }
        } catch (t4) {
          v3.e(t4);
        } finally {
          v3.f();
        }
        return _3;
      }(i3, v2, k2));
    }, {}), S2 = function createSharedReferences() {
      var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i3 = /* @__PURE__ */ new Map();
      return function process(t3) {
        for (var o3 in t3)
          if (t3.hasOwnProperty(o3)) {
            var r3 = t3[o3];
            if ("object" === _typeof(r3) && null !== r3) {
              var a3 = (l3 = r3, JSON.stringify(l3, Object.keys(l3).sort()));
              i3.has(a3) ? t3[o3] = i3.get(a3) : (i3.set(a3, r3), process(r3));
            }
          }
        var l3;
      }(t2), t2;
    }(Y(removeEmptyObjects(K({
      theme: o2
    }, b2)) || {}, h2));
    return function enforceContract(t2) {
      for (var i3 = {}, o3 = 0, r3 = [].concat(H, _toConsumableArray(Object.keys(t2))); o3 < r3.length; o3++) {
        var a3 = r3[o3];
        if (t2.hasOwnProperty(a3))
          "object" !== _typeof(t2[a3]) ? i3[a3] = {} : i3[a3] = t2[a3];
        else {
          var l3 = H.find(function(i4) {
            return t2.hasOwnProperty(i4);
          });
          if (l3) {
            var c3 = t2[l3];
            i3[a3] = "object" !== _typeof(c3) ? {} : c3;
          } else
            i3[a3] = {};
        }
      }
      return i3;
    }(S2);
  };
  var K = function colorParser(t, i2) {
    if ("object" !== _typeof(t) || null === t)
      throw new TypeError("targetObject must be an object.");
    if ("object" !== _typeof(i2) || null === i2)
      throw new TypeError("styleObj must be an object.");
    var r2 = JSON.stringify(i2, function(i3, r3) {
      if (!(-1 < ["tone", "mode"].indexOf(i3)))
        return "string" == typeof r3 && r3.startsWith("theme.") ? o(t, r3) : Array.isArray(r3) && 2 === r3.length ? getHexColor(r3[0], r3[1]) : r3;
    });
    return JSON.parse(r2 || {});
  };
  function generateNameFromPrototypeChain(t) {
    var i2, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (!t)
      return o2;
    var r2 = Object.getPrototypeOf(t);
    return r2 && r2.constructor ? generateNameFromPrototypeChain(r2, "".concat(o2 ? o2 + "." : "").concat((null == r2 || null === (i2 = r2.constructor) || void 0 === i2 ? void 0 : i2.__componentName) || "").replace(/\.*$/, "").trim()) : o2;
  }
  var q = {};
  var V = function getStyleChainMemoized(t) {
    var i2 = generateNameFromPrototypeChain(t);
    if (q[i2])
      return q[i2];
    var o2 = X(t);
    return q[i2] = o2, o2;
  };
  var X = function getStyleChain(t) {
    var i2, o2 = /* @__PURE__ */ new Map();
    do {
      var r2;
      if ((null === (r2 = i2 = i2 ? Object.getPrototypeOf(i2) : t) || void 0 === r2 ? void 0 : r2.constructor) === Object)
        break;
      if (i2 && "object" === _typeof(i2) && i2.hasOwnProperty("constructor")) {
        var a2 = z(i2).style;
        Object.keys(a2 || {}).length && (o2.has(a2) || o2.set(a2, {
          style: a2
        }));
        var l2 = i2.constructor.hasOwnProperty("__themeStyle") && i2.constructor.__themeStyle;
        Object.keys(l2 || {}).length ? o2.has(l2) || o2.set(l2, {
          style: _objectSpread({}, l2)
        }) : "function" == typeof l2 && (o2.has(l2) || o2.set(l2, {
          style: l2
        }));
        var c2 = i2.constructor.hasOwnProperty("__mixinStyle") && i2.constructor.__mixinStyle;
        Object.keys(c2 || {}).length && (o2.has(c2) || o2.set(c2, {
          style: c2
        }));
      }
    } while (i2);
    return Array.from(o2.values()).map(function(t2) {
      return t2;
    }).reverse();
  };
  var Y = function formatStyleObj(t) {
    var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if ("object" !== _typeof(t) || null === t)
      throw new Error("The originalObj parameter must be an object.");
    var o2 = /* @__PURE__ */ new Set();
    return o2.add([G, [i2]]), Array.from(o2).reduce(function(t2, i3) {
      var o3 = _slicedToArray(i3, 2), r2 = o3[0], a2 = o3[1];
      return r2.apply(void 0, [t2].concat(_toConsumableArray(a2)));
    }, t);
  };
  var G = function replaceAliasValues(t) {
    var o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if ("object" !== _typeof(t) || null === t)
      throw new Error("Value must be an object");
    if (!Array.isArray(o2))
      throw new Error("Alias styles must be an array");
    var r2 = JSON.stringify(t);
    return [{
      prev: "height",
      curr: "h",
      skipWarn: true
    }, {
      prev: "width",
      curr: "w",
      skipWarn: true
    }].concat(_toConsumableArray(o2 || [])).forEach(function(t2) {
      t2 && "string" == typeof t2.prev && "string" == typeof t2.curr && (!t2.skipWarn && r2.search('"'.concat(t2.prev, '":')) >= 0 && i.warn('The style property "'.concat(t2.prev, '" is deprecated and will be removed in a future release. Please use "').concat(t2.curr, '" instead.')), r2 = r2.replace(new RegExp('"'.concat(t2.prev, '":'), "gi"), '"'.concat(t2.curr, '":')));
    }), JSON.parse(r2);
  };
  var Q = /* @__PURE__ */ new Map();
  I.on("themeUpdate", function() {
    Q.clear();
  });
  var $ = Q;
  var J = function(i2) {
    _inherits(StyleManager, lightningjs_core_default.EventEmitter);
    var o2 = _createSuper(StyleManager);
    function StyleManager() {
      var t, i3 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).component, r2 = void 0 === i3 ? {} : i3;
      return _classCallCheck(this, StyleManager), (t = o2.apply(this, arguments)).init(r2), t;
    }
    return _createClass(StyleManager, [{
      key: "init",
      value: function init3(t) {
        this.isActive = true, this.component = t, this.setupListeners(), this._style = {}, this.update();
      }
    }, {
      key: "setupListeners",
      value: function setupListeners() {
        this._boundThemeUpdate = this._onThemeUpdate.bind(this), this._hasSubTheme = Boolean(this.component._targetSubTheme), this.component._targetSubTheme ? I.on("themeUpdate".concat(this.component._targetSubTheme), this._boundThemeUpdate) : I.on("themeUpdate", this._boundThemeUpdate);
      }
    }, {
      key: "clearListeners",
      value: function clearListeners() {
        this._boundThemeUpdate && (this.component._targetSubTheme ? I.off("themeUpdate".concat(this.component._targetSubTheme), this._boundThemeUpdate) : I.off("themeUpdate", this._boundThemeUpdate));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.isActive = false, this._cleanupCache(), this.clearListeners(), this._styleCache = null, this._boundThemeUpdate = null, this.component = null;
      }
    }, {
      key: "_onThemeUpdate",
      value: function _onThemeUpdate() {
        !function clearStyleChainCache() {
          for (var t in q)
            q.hasOwnProperty(t) && delete q[t];
        }(), this.clearSourceCache(), this.clearStyleCache(), this.update();
      }
    }, {
      key: "clearSourceCache",
      value: function clearSourceCache() {
        if (this.component) {
          var t = this._generateCacheKey("styleSource");
          this._removeCache(t);
        }
      }
    }, {
      key: "clearStyleCache",
      value: function clearStyleCache() {
        if (this.component) {
          var t = this.component, i3 = t.tone, o3 = t.mode, r2 = this._generateCacheKey("style_".concat(o3, "_").concat(i3));
          $.delete(r2);
        }
      }
    }, {
      key: "_generateCacheKey",
      value: function _generateCacheKey(t) {
        return [t, this.component.constructor.__componentName, this._customStyleHash].filter(Boolean).join("_");
      }
    }, {
      key: "_addCache",
      value: function _addCache(t, i3) {
        var o3 = this._generateCacheKey(t), r2 = $.get(o3);
        $.set(o3, {
          ids: _toConsumableArray(new Set([].concat(_toConsumableArray((null == r2 ? void 0 : r2.ids) || []), [this.component.__id]))),
          payload: i3
        });
      }
    }, {
      key: "_cleanupCache",
      value: function _cleanupCache() {
        var t = this;
        this.component && $.forEach(function(i3, o3) {
          var r2 = i3.ids, a2 = i3.payload, l2 = r2 && r2.length && r2.indexOf(t.component.__id);
          l2 > -1 && r2.length > 1 ? $.set(o3, {
            ids: r2.slice(0, l2).concat(r2.slice(l2 + 1)),
            payload: a2
          }) : l2 > -1 && $.delete(o3);
        });
      }
    }, {
      key: "_removeCache",
      value: function _removeCache(t) {
        $.delete(t);
      }
    }, {
      key: "_getCache",
      value: function _getCache(t) {
        var i3 = this._generateCacheKey(t);
        return $.get(i3);
      }
    }, {
      key: "update",
      value: function update() {
        if (this.component) {
          var t = this.component, i3 = t.mode, o3 = t.tone;
          try {
            var r2, a2, l2 = null === (r2 = this._getCache("styleSource")) || void 0 === r2 ? void 0 : r2.payload;
            l2 || (l2 = U({
              alias: this.component.constructor.aliasStyles,
              componentConfig: this.component._componentConfig,
              inlineStyle: this.component._componentLevelStyle,
              styleChain: V(this.component),
              theme: this.component.theme
            }), this._addCache("styleSource", l2));
            var c2 = null === (a2 = this._getCache("style_".concat(i3, "_").concat(o3))) || void 0 === a2 ? void 0 : a2.payload;
            c2 || (c2 = function generateStyle(t2) {
              var i4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!isPlainObject3(t2))
                return {};
              var o4 = t2.mode, r3 = void 0 === o4 ? "unfocused" : o4, a3 = t2.tone, l3 = void 0 === a3 ? "neutral" : a3;
              return i4["".concat(r3, "_").concat(l3)] || i4.unfocused_neutral || {};
            }(this.component, l2), this._addCache("style_".concat(i3, "_").concat(o3), c2)), this._style = c2, this.emit("styleUpdate", this.style);
          } catch (t2) {
            I.error("styleManager: ", t2.message);
          }
        }
      }
    }, {
      key: "style",
      get: function get() {
        return this._style;
      },
      set: function set2(t) {
        I.warn("styleManager: Cannot mutate style directly");
      }
    }, {
      key: "props",
      get: function get() {
        var t = this;
        return Object.keys(this.component._componentConfig).reduce(function(i3, o3) {
          return ["base", "tone", "mode", "style", "styleConfig"].includes(o3) || (i3[o3] = t.component._componentConfig[o3]), i3;
        }, {});
      },
      set: function set2(t) {
        I.warn("styleManager: Cannot mutate props directly");
      }
    }, {
      key: "_customStyleHash",
      get: function get() {
        if (Boolean(Object.keys(this.component.constructor.__mixinStyle || {}).length) || Boolean(Object.keys(this.component._componentLevelStyle || {}).length))
          return function getHash2(t) {
            return JSON.stringify(t).length + "-" + N(t);
          }(clone(this.component.constructor.__mixinStyle || {}, this.component._componentLevelStyle || {}));
      }
    }]), StyleManager;
  }();
  function mergeObjectsWithSecondDominant(t, i2) {
    if (null !== t && "object" === _typeof(t)) {
      if (Array.isArray(t))
        return t.map(function(t2, o3) {
          return mergeObjectsWithSecondDominant(t2, Array.isArray(i2) ? i2[o3] : void 0);
        });
      var o2 = {};
      return new Set([].concat(_toConsumableArray(Object.keys(t)), _toConsumableArray(Object.keys(i2)))).forEach(function(r2) {
        "object" === _typeof(t[r2]) && null !== t[r2] ? o2[r2] = mergeObjectsWithSecondDominant(t[r2], i2[r2] || {}) : "object" === _typeof(i2[r2]) && null !== i2[r2] ? o2[r2] = mergeObjectsWithSecondDominant(t[r2] || {}, i2[r2]) : o2[r2] = i2.hasOwnProperty(r2) ? i2[r2] : void 0;
      }), o2;
    }
    return t;
  }
  function withThemeStyles(t) {
    var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return function(o2) {
      _inherits(_class6, o2);
      var r2 = _createSuper(_class6);
      function _class6() {
        return _classCallCheck(this, _class6), r2.apply(this, arguments);
      }
      return _createClass(_class6, [{
        key: "_construct",
        value: function _construct() {
          var t2 = this;
          this._withThemeStylesSetupComplete ? _get(_getPrototypeOf(_class6.prototype), "_construct", this).call(this) : (_get(_getPrototypeOf(_class6.prototype), "_construct", this).call(this), this._hSetByUser = false, this._wSetByUser = false, this._styleManager = new J({
            component: this
          }), this._style = this._styleManager.style, this._updatePropDefaults(), this._styleManager.on("styleUpdate", function() {
            t2._style = t2._styleManager.style, t2._updatePropDefaults(), t2.queueThemeUpdate();
          }), this._withThemeStylesSetupComplete = true);
        }
      }, {
        key: "_setup",
        value: function _setup() {
          _get(_getPrototypeOf(_class6.prototype), "_setup", this) && _get(_getPrototypeOf(_class6.prototype), "_setup", this).call(this), this._targetSubTheme = E(this), this._targetSubTheme && (this._styleManager.clearListeners(), this._styleManager.setupListeners(), this._styleManager.clearStyleCache(), this._styleManager.clearSourceCache(), this._styleManager.update());
        }
      }, {
        key: "_updatePropDefaults",
        value: function _updatePropDefaults() {
          if (JSON.stringify(this._styleManager.props) !== JSON.stringify(this._prevComponentConfigProps)) {
            var t2 = this._prevComponentConfigProps ? mergeObjectsWithSecondDominant(this._prevComponentConfigProps || {}, this._styleManager.props || {}) : this._styleManager.props || {};
            this._prevComponentConfigProps = this._styleManager.props && JSON.parse(JSON.stringify(this._styleManager.props)), this.__componentConfigProps = t2;
          }
        }
      }, {
        key: "_attach",
        value: function _attach() {
          _get(_getPrototypeOf(_class6.prototype), "_attach", this).call(this), this._styleManager.isActive || this._styleManager.init(this);
        }
      }, {
        key: "_detach",
        value: function _detach() {
          _get(_getPrototypeOf(_class6.prototype), "_detach", this).call(this), this._styleManager.destroy();
        }
      }, {
        key: "_unfocus",
        value: function _unfocus() {
          this._isFocusedMode && (this.mode = "unfocused"), _get(_getPrototypeOf(_class6.prototype), "_unfocus", this).call(this);
        }
      }, {
        key: "_focus",
        value: function _focus() {
          this._isDisabledMode || (this.mode = "focused"), _get(_getPrototypeOf(_class6.prototype), "_focus", this).call(this);
        }
      }, {
        key: "_checkDimensionUpdates",
        value: function _checkDimensionUpdates() {
          var t2 = false;
          !this._wSetByUser && this.style.w && this._w !== this.style.w && (this._w = this.style.w, t2 = true), !this._hSetByUser && this.style.h && this._h !== this.style.h && (this._h = this.style.h, t2 = true), t2 && this._updateDimensions();
        }
      }, {
        key: "_updateThemeComponent",
        value: function _updateThemeComponent() {
          this.style && this._isAttached() && (this._checkDimensionUpdates(), this.queueRequestUpdate ? this.queueRequestUpdate() : this._update && this._update(), this._updateItemLayout && this._updateItemLayout());
        }
      }, {
        key: "queueThemeUpdate",
        value: function queueThemeUpdate() {
          A.addUpdateTheme(this);
        }
      }, {
        key: "theme",
        get: function get() {
          return this._targetSubTheme && I.getSubTheme(this._targetSubTheme) || I.theme;
        }
      }, {
        key: "style",
        get: function get() {
          return this._style;
        },
        set: function set2(t2) {
          "[object Object]" === Object.prototype.toString.call(t2) ? (this._componentLevelStyle = t2, this._styleManager.clearStyleCache(), this._styleManager.update()) : I.error("style must be an object");
        }
      }, {
        key: "_componentStyle",
        get: function get() {
          return I.info("_componentStyle will soon be deprecated. Please use Component.style"), this._style;
        }
      }, {
        key: "styleConfig",
        get: function get() {
          return this._styleConfig;
        },
        set: function set2(t2) {
          I.info("style config is deprecated. Please use style = { base: {}, tone: {}, mode: {} }"), this._styleConfig = t2, this._styleManager.update();
        }
      }, {
        key: "_componentConfig",
        get: function get() {
          return z(this);
        }
      }, {
        key: "mode",
        get: function get() {
          var t2;
          return this._mode || (null === (t2 = this._componentConfig) || void 0 === t2 ? void 0 : t2.mode) || "unfocused";
        },
        set: function set2(t2) {
          if ("string" == typeof t2 && this._mode !== t2) {
            this._mode = t2;
            var i3 = this["on".concat(capitalizeFirstLetter(t2))];
            i3 && "function" == typeof i3 && i3.call(this), this._styleManager.update();
          }
        }
      }, {
        key: "tone",
        get: function get() {
          return this._tone || this._componentConfig.tone || "neutral";
        },
        set: function set2(t2) {
          "string" == typeof t2 && this._tone !== t2 && (this._tone = t2, this._styleManager.update());
        }
      }, {
        key: "w",
        get: function get() {
          var t2;
          return this._wSetByUser && this._w || (null === (t2 = this.style) || void 0 === t2 ? void 0 : t2.w) || 0;
        },
        set: function set2(t2) {
          this._w !== t2 && (_set(_getPrototypeOf(_class6.prototype), "w", t2, this, true), this._wSetByUser = true, this._styleManager.clearStyleCache(), this._styleManager.update());
        }
      }, {
        key: "h",
        get: function get() {
          var t2;
          return this._hSetByUser && this._h || (null === (t2 = this.style) || void 0 === t2 ? void 0 : t2.h) || this._h || 0;
        },
        set: function set2(t2) {
          this._h !== t2 && (_set(_getPrototypeOf(_class6.prototype), "h", t2, this, true), this._hSetByUser = true, this._styleManager.clearStyleCache(), this._styleManager.update());
        }
      }], [{
        key: "name",
        get: function get() {
          return t.name;
        }
      }, {
        key: "__componentName",
        get: function get() {
          if (!_get(_getPrototypeOf(_class6), "__componentName", this))
            throw new Error("A valid static __componentName property is required for theming to work properly. Please add this to the ".concat(this.constructor.name, " class."));
          return _get(_getPrototypeOf(_class6), "__componentName", this);
        }
      }, {
        key: "__mixinStyle",
        get: function get() {
          return i2;
        }
      }]), _class6;
    }(t);
  }
  function withTags(t) {
    return function(i2) {
      _inherits(_class7, i2);
      var o2 = _createSuper(_class7);
      function _class7() {
        return _classCallCheck(this, _class7), o2.apply(this, arguments);
      }
      return _createClass(_class7, [{
        key: "_construct",
        value: function _construct() {
          var t2 = this;
          (this.constructor.tags || []).forEach(function(i3) {
            if ("object" === _typeof(i3))
              var o3 = i3.name, r2 = i3.path;
            else
              o3 = i3, r2 = i3;
            var a2 = "_" + o3, l2 = /* @__PURE__ */ function getPropertyDescriptor$1(t3) {
              return {
                get: function get() {
                  return this.tag(t3);
                },
                configurable: true,
                enumerable: true
              };
            }(r2);
            Object.defineProperty(Object.getPrototypeOf(t2), a2, l2);
          }), _get(_getPrototypeOf(_class7.prototype), "_construct", this) && _get(_getPrototypeOf(_class7.prototype), "_construct", this).call(this);
        }
      }], [{
        key: "name",
        get: function get() {
          return t.name;
        }
      }]), _class7;
    }(t);
  }
  function capital(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function mergeProps(t, i2) {
    var o2, r2 = i2;
    return "object" === _typeof(t) && Object.keys(t).length && "object" === _typeof(i2) && (r2 = clone(t, i2)), null !== (o2 = r2) && void 0 !== o2 ? o2 : t;
  }
  function withUpdates(t) {
    return function(i2) {
      _inherits(_class8, i2);
      var o2 = _createSuper(_class8);
      function _class8() {
        return _classCallCheck(this, _class8), o2.apply(this, arguments);
      }
      return _createClass(_class8, [{
        key: "_construct",
        value: function _construct() {
          var t2 = this, i3 = Object.getPrototypeOf(this);
          i3._withUpdatesInitialized || ((this.constructor.properties || []).forEach(function(t3) {
            var o3 = /* @__PURE__ */ function getPropertyDescriptor(t4, i4) {
              return {
                get: function get() {
                  var o4, r2 = this["_get".concat(capital(t4))];
                  if (r2 && "function" == typeof r2) {
                    var a2, l2, c2 = r2.call(this, this[i4]);
                    return this[i4] = c2 || (null === (a2 = this.__componentConfigProps) || void 0 === a2 ? void 0 : a2[t4]), mergeProps(null === (l2 = this.__componentConfigProps) || void 0 === l2 ? void 0 : l2[t4], c2);
                  }
                  return mergeProps(null === (o4 = this.__componentConfigProps) || void 0 === o4 ? void 0 : o4[t4], this[i4]);
                },
                set: function set2(o4) {
                  if (o4 !== this[i4]) {
                    var r2 = this["_set".concat(capital(t4))];
                    r2 && "function" == typeof r2 && (o4 = r2.call(this, o4));
                    var a2 = "style" === i4 ? clone(this[i4], o4) : o4;
                    if ("object" === _typeof(this[i4]) && null !== this[i4] && this[i4].style) {
                      var l2 = clone(this[i4].style, o4.style || {});
                      a2.style = l2;
                    }
                    this[i4] = a2, this.queueRequestUpdate();
                  }
                },
                configurable: true,
                enumerable: true
              };
            }(t3, "_" + t3);
            void 0 !== o3 && Object.defineProperty(i3, t3, o3);
          }), (this.constructor.aliasProperties || []).forEach(function(t3) {
            if (t3 && "string" == typeof t3.prev && "string" == typeof t3.curr) {
              var o3 = function getAliasPropertyDescriptor(t4, i4) {
                var o4 = 'The property "'.concat(t4, '" is deprecated and will be removed in a future release. Please use "').concat(i4, '" instead.');
                return {
                  get: function get() {
                    return console.warn(o4), this[i4];
                  },
                  set: function set2(t5) {
                    console.warn(o4), this[i4] = t5;
                  }
                };
              }(t3.prev, t3.curr);
              void 0 !== o3 && Object.defineProperty(i3, t3.prev, o3);
            }
          }), i3._withUpdatesInitialized = true);
          this._whenEnabled = new Promise(function(i4) {
            t2._whenEnabledResolver = i4;
          }), _get(_getPrototypeOf(_class8.prototype), "_construct", this) && _get(_getPrototypeOf(_class8.prototype), "_construct", this).call(this);
        }
      }, {
        key: "queueRequestUpdate",
        value: function queueRequestUpdate() {
          this._isAttached() && A.addRequestUpdate(this);
        }
      }, {
        key: "_firstEnable",
        value: function _firstEnable() {
          this._readyForUpdates = true, this._whenEnabledResolver(), A.deleteRequestUpdate(this), this.requestUpdate(), _get(_getPrototypeOf(_class8.prototype), "_firstEnable", this) && _get(_getPrototypeOf(_class8.prototype), "_firstEnable", this).call(this);
        }
      }, {
        key: "_detach",
        value: function _detach() {
          _get(_getPrototypeOf(_class8.prototype), "_detach", this).call(this), A.deleteRequestUpdate(this);
        }
      }, {
        key: "requestUpdate",
        value: function requestUpdate() {
          var t2 = this, i3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (this._readyForUpdates || i3) {
            var o3 = this._update();
            "object" === _typeof(o3) && null !== o3 && o3.catch && o3.catch(function(i4) {
              I.error("asyncronous _update() error in '".concat(t2.constructor.__componentName, "'"), t2, i4);
            });
          }
        }
      }, {
        key: "logPropTable",
        value: function logPropTable() {
          console.table(this._propTable);
        }
      }, {
        key: "_propTable",
        get: function get() {
          var t2 = this;
          return this.constructor.properties.reduce(function(i3, o3) {
            return i3[o3] = t2[o3], i3;
          }, {});
        }
      }], [{
        key: "name",
        get: function get() {
          return t.name;
        }
      }]), _class8;
    }(t);
  }
  var Z = "__original";
  function withExtensions(t) {
    return t.prototype.constructor._withExtensionsApplied ? t : function(i2) {
      _inherits(_class10, i2);
      var o2 = _createSuper(_class10);
      function _class10() {
        return _classCallCheck(this, _class10), o2.apply(this, arguments);
      }
      return _createClass(_class10, [{
        key: "_prototypeChain",
        get: function get() {
          if (this.__prototypeChain)
            return this.__prototypeChain;
          var t2 = /* @__PURE__ */ new Set(), i3 = this;
          do {
            if (null !== (i3 = Object.getPrototypeOf(i3)) && "object" === _typeof(i3))
              try {
                i3.constructor.__componentName && t2.add(i3.constructor.__componentName);
              } catch (t3) {
              }
          } while (i3);
          return this.__prototypeChain = t2, t2;
        }
      }, {
        key: "_extensions",
        get: function get() {
          var t2 = I && I.theme && I.theme.extensions;
          return !t2 || !Array.isArray(t2) || Array.isArray(t2) && !t2.length ? [] : t2.filter(function(t3) {
            var i3 = t3.targetComponent, o3 = t3.extension;
            return ("string" == typeof i3 || Array.isArray(i3)) && "function" == typeof o3;
          }).slice().reverse() || [];
        }
      }, {
        key: "_componentExtensions",
        get: function get() {
          var t2 = this;
          return this._extensions.filter(function(i3) {
            var o3 = i3.targetComponent;
            return "string" == typeof o3 ? o3 === t2.constructor.__componentName || t2._prototypeChain.has(o3) : !!Array.isArray(o3) && o3.find(function(i4) {
              if (i4.startsWith("/") && i4.endsWith("/")) {
                var o4 = new RegExp(i4.slice(1, -1));
                return Array.from(t2._prototypeChain).some(function(t3) {
                  return o4.test(t3);
                });
              }
              return t2._prototypeChain.has(i4);
            });
          }).reduce(function(t3, i3) {
            var o3 = i3.extension;
            return t3.push(o3), t3;
          }, []);
        }
      }, {
        key: "_extensionApplied",
        get: function get() {
          return this._currentComponentExtensionLength === this._appliedExtensionLength;
        }
      }, {
        key: "_construct",
        value: function _construct() {
          this._appliedExtensionLength = 0, this._extendedList = {}, this._extensionInstance = {}, this._setupExtensionBound = this._setupExtension.bind(this), I.on("themeUpdate", this._setupExtensionBound), this._currentComponentExtensionLength = this._calculateComponentExtensionLength(), this._createExtension(), _get(_getPrototypeOf(_class10.prototype), "_construct", this).call(this);
        }
      }, {
        key: "_detach",
        value: function _detach() {
          _get(_getPrototypeOf(_class10.prototype), "_detach", this).call(this), I.off("themeUpdate", this._setupExtensionBound);
        }
      }, {
        key: "_setupExtension",
        value: function _setupExtension() {
          this._currentComponentExtensionLength = this._calculateComponentExtensionLength(), this._createExtension.call(this);
        }
      }, {
        key: "_resetComponent",
        value: function _resetComponent() {
          var t2 = this;
          this._extensionInstance._extensionCleanup && this._extensionInstance._extensionCleanup.call(this), (Object.keys(this._extendedList) || []).forEach(function(i3) {
            delete t2[i3], delete t2[i3 + Z];
          }), this._extensionInstance = {}, this._extendedList = {};
        }
      }, {
        key: "_calculateComponentExtensionLength",
        value: function _calculateComponentExtensionLength() {
          return this._componentExtensions.reduce(function(t2, i3) {
            return t2 += i3.toString().length;
          }, 0);
        }
      }, {
        key: "_createExtension",
        value: function _createExtension() {
          if (!this._extensionApplied) {
            this._resetComponent();
            var t2 = new (this._createExtensionClass())();
            this._extendedList = this._createExtensionAliases(t2), this._extensionInstance = t2, this._setComponentAliases(this._extendedList);
          }
        }
      }, {
        key: "_createExtensionClass",
        value: function _createExtensionClass() {
          var t2 = this._componentExtensions.reduce(function(t3, i3) {
            return i3(t3);
          }, function ExtensionBase() {
          });
          return this._appliedExtensionLength = this._calculateComponentExtensionLength(), t2;
        }
      }, {
        key: "_createExtensionAliases",
        value: function _createExtensionAliases(t2) {
          for (var i3 = t2, o3 = 0; o3 < this._componentExtensions.length + 1; o3++)
            i3 = Object.getPrototypeOf(i3);
          var r2 = {}, a2 = this._componentExtensions.reduce(function(t3, i4) {
            var o4 = new new i4(_createClass(function FakeClass() {
              _classCallCheck(this, FakeClass);
            }))(), a3 = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(o4));
            return Object.keys(a3).forEach(function(i5) {
              if (!["constructor"].includes(i5)) {
                if (a3[i5].get || a3[i5].set)
                  return r2[i5] = {
                    type: "accessor"
                  }, void (t3[i5] = {
                    get: function get() {
                      return this[i5 + Z];
                    },
                    set: function set2(t4) {
                      this[i5 + Z] = t4;
                    }
                  });
                r2[i5] = {
                  type: "method"
                }, t3[i5] = {
                  value: function value() {
                    this[i5 + Z] && this[i5 + Z]();
                  }
                };
              }
            }), t3;
          }, {});
          return Object.defineProperties(i3, a2), Object.setPrototypeOf(i3, this), r2;
        }
      }, {
        key: "_setComponentAliases",
        value: function _setComponentAliases(t2) {
          var i3 = this;
          Object.keys(t2).forEach(function(o3) {
            i3[o3 + Z] = i3[o3], "method" === t2[o3].type ? i3[o3] = i3._extensionInstance[o3] : "accessor" === t2[o3].type && Object.defineProperty(i3, o3, {
              configurable: true,
              get: function get() {
                return this._extensionInstance[o3];
              },
              set: function set2(t3) {
                this._extensionInstance[o3] = t3;
              }
            });
          });
        }
      }], [{
        key: "name",
        get: function get() {
          return t.name;
        }
      }, {
        key: "__componentName",
        get: function get() {
          if (!_get(_getPrototypeOf(_class10), "__componentName", this))
            throw new Error("A valid static __componentName property is required for theming to work properly. Please add this to the ".concat(this.constructor.name, " class."));
          return _get(_getPrototypeOf(_class10), "__componentName", this);
        }
      }, {
        key: "_withExtensionsApplied",
        get: function get() {
          return true;
        }
      }]), _class10;
    }(t);
  }
  var tt = function withMixins(t) {
    return withExtensions(withLayout(withThemeStyles(withUpdates(withTags(withHandleKey(t))))));
  }(function(i2) {
    _inherits(Base, lightningjs_core_default.Component);
    var o2 = _createSuper(Base);
    function Base() {
      return _classCallCheck(this, Base), o2.apply(this, arguments);
    }
    return _createClass(Base, [{
      key: "_construct",
      value: function _construct() {
        this.skipPlinko = false, this.centerInParent = false, this.loaded || (this.loaded = Promise.resolve());
      }
    }, {
      key: "_init",
      value: function _init() {
        this.queueRequestUpdate();
      }
    }, {
      key: "_resetLoadedPromise",
      value: function _resetLoadedPromise() {
        var t = this;
        this.loaded = new Promise(function(i3, o3) {
          t._resolveLoadedPromise = i3, t._rejectLoadedPromise = o3;
        });
      }
    }, {
      key: "_update",
      value: function _update() {
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this._updateShouldSmooth(), this.queueRequestUpdate();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.queueRequestUpdate();
      }
    }, {
      key: "_updateShouldSmooth",
      value: function _updateShouldSmooth() {
        void 0 === this.shouldSmooth && (this.shouldSmooth = true);
      }
    }, {
      key: "applySmooth",
      value: function applySmooth(t, i3, o3) {
        this.shouldSmooth ? t.smooth = o3 || i3 : t.patch(i3);
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce;
      },
      set: function set2(t) {
        this._announce = t;
      }
    }, {
      key: "announceContext",
      get: function get() {
        return this._announceContext;
      },
      set: function set2(t) {
        this._announceContext = t;
      }
    }, {
      key: "shouldSmooth",
      get: function get() {
        return this._shouldSmooth;
      },
      set: function set2(t) {
        this._shouldSmooth = t;
      }
    }, {
      key: "_isDisabledMode",
      get: function get() {
        return "disabled" === this.mode;
      }
    }, {
      key: "_isUnfocusedMode",
      get: function get() {
        return "unfocused" === this.mode;
      }
    }, {
      key: "_isFocusedMode",
      get: function get() {
        return "focused" === this.mode;
      }
    }, {
      key: "isFullyOnScreen",
      value: function isFullyOnScreen(t) {
        return isComponentOnScreen(this, t);
      }
    }, {
      key: "getFocusScale",
      value: function getFocusScale() {
        return I.theme.layout.focusScale;
      }
    }, {
      key: "getUnfocusScale",
      value: function getUnfocusScale() {
        return 1;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Base";
      }
    }]), Base;
  }());
  var et = Object.freeze({
    __proto__: null,
    base: function base$R(t) {
      return {
        gradientTop: t.color.fillTransparent,
        radius: t.radius.none
      };
    },
    tone: function tone$p(t) {
      return {
        neutral: {
          gradientColor: t.color.material
        },
        inverse: {
          gradientColor: t.color.fillNeutral
        },
        brand: {
          gradientColor: t.color.fillBrand
        }
      };
    }
  });
  var nt = function(i2) {
    _inherits(Gradient, tt);
    var o2 = _createSuper(Gradient);
    function Gradient() {
      return _classCallCheck(this, Gradient), o2.apply(this, arguments);
    }
    return _createClass(Gradient, [{
      key: "_update",
      value: function _update() {
        this.patch({
          rect: true,
          rtt: true,
          colorTop: this.style.gradientTop,
          colorBottom: this.style.gradientColor,
          texture: lightningjs_core_default.Tools.getRoundRect(this.w, this.h, this.style.radius)
        });
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Gradient";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return et;
      }
    }]), Gradient;
  }();
  var it = Object.freeze({
    __proto__: null,
    base: function base$Q(t) {
      return {
        animationBlurEntrance: t.animation.utilityEntrance,
        animationBlurExit: t.animation.utilityExit,
        animationComponentEntrance: t.animation.utilityEntrance,
        animationGradientEntrance: t.animation.utilityEntrance,
        animationGradientExit: t.animation.utilityExit,
        animationImageScaleEntrance: t.animation.standardEntrance,
        animationImageScaleExit: t.animation.standardEntrance,
        blur: 4,
        centerImageRadius: t.radius.md,
        fallbackSrc: void 0,
        fillColor: t.color.overlay,
        gradientColor: t.color.material,
        imageScale: void 0,
        imageScalePivotX: 0.5,
        imageScalePivotY: 0.5,
        padding: t.spacer.md,
        radius: 0,
        zIndexSet: {
          image: 1,
          blur: 2,
          centerImage: 3,
          fill: 4,
          gradient: 5,
          foreground: 6
        }
      };
    }
  });
  var ot = function(i2) {
    _inherits(CustomImageTexture, lightningjs_core_default.Texture);
    var o2 = _createSuper(CustomImageTexture);
    function CustomImageTexture(t) {
      var i3;
      return _classCallCheck(this, CustomImageTexture), (i3 = o2.call(this, t))._src = void 0, i3._hasAlpha = false, i3;
    }
    return _createClass(CustomImageTexture, [{
      key: "src",
      get: function get() {
        return this._src;
      },
      set: function set2(t) {
        this._src !== t && (this._src = t, this._changed());
      }
    }, {
      key: "hasAlpha",
      get: function get() {
        return this._hasAlpha;
      },
      set: function set2(t) {
        this._hasAlpha !== t && (this._hasAlpha = t, this._changed());
      }
    }, {
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set2(t) {
        this._w = t, this._changed();
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      },
      set: function set2(t) {
        this._h = t, this._changed();
      }
    }, {
      key: "_getIsValid",
      value: function _getIsValid() {
        return !!this._src;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return this._src;
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var i3 = this, o3 = this._w, r2 = this._h, a2 = this._src, l2 = this._hasAlpha;
        if (this.stage.getOption("srcBasePath")) {
          var c2 = a2.charCodeAt(0);
          -1 === a2.indexOf("//") && (c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || 46 == c2) && (a2 = this.stage.getOption("srcBasePath") + a2);
        }
        return function(c3) {
          switch (function checkFileType(t) {
            return t.startsWith("<svg") ? "SVG" : t.startsWith("blob:") ? "Blob" : /\.(jpeg|jpg|gif|png|svg)$/i.test(t) ? "Image" : "Unknown";
          }(a2)) {
            case "SVG":
              return function createSvg(i4, o4, r3, a3, l3) {
                var c4 = o4.platform.getDrawingCanvas(), u2 = c4.getContext("2d");
                u2.imageSmoothingEnabled = true;
                var h2 = new Image();
                h2.onload = function() {
                  c4.width = a3, c4.height = l3, u2.drawImage(h2, 0, 0, c4.width, c4.height), i4(null, {
                    source: c4,
                    w: a3,
                    h: l3
                  });
                }, h2.onerror = function(t) {
                  i4(t);
                }, lightningjs_core_default.Utils.isPS4 || (h2.crossOrigin = "Anonymous"), h2.src = r3;
              }(c3, i3.stage, "data:image/svg+xml,".concat(encodeURIComponent(a2)), o3, r2);
            case "Blob":
              return function imageLoader(i4, o4) {
                var r3 = i4.src, a3 = new Image();
                return "data:" == r3.substr(0, 5) || lightningjs_core_default.Utils.isPS4 || (a3.crossOrigin = "Anonymous"), a3.onerror = function() {
                  if (a3.src)
                    return o4("Image load error");
                }, a3.onload = function() {
                  o4(null, {
                    source: a3,
                    renderInfo: {
                      src: r3,
                      compressed: false
                    },
                    hasAlpha: true
                  });
                }, a3.src = r3, function() {
                  a3.onerror = null, a3.onload = null, a3.removeAttribute("src");
                };
              }({
                src: a2
              }, c3);
            default:
              return i3.stage.platform.loadSrcTexture({
                src: a2,
                hasAlpha: l2
              }, c3);
          }
        };
      }
    }, {
      key: "getNonDefaults",
      value: function getNonDefaults() {
        var t = _get(_getPrototypeOf(CustomImageTexture.prototype), "getNonDefaults", this).call(this);
        return this._src && (t.src = this._src), t;
      }
    }]), CustomImageTexture;
  }();
  var rt = function(i2) {
    _inherits(Artwork, tt);
    var o2, r2, a2, l2, c2 = _createSuper(Artwork);
    function Artwork() {
      return _classCallCheck(this, Artwork), c2.apply(this, arguments);
    }
    return _createClass(Artwork, [{
      key: "_shouldBlur",
      get: function get() {
        var t = this._blur || this._hasCenterImage;
        return this._Image.rtt = t, t;
      }
    }, {
      key: "_hasCenterImage",
      get: function get() {
        return -1 < ["circle", "square"].indexOf(this.format) || "contain" === this.format && !this._aspectRatioEqual;
      }
    }, {
      key: "w",
      get: function get() {
        return _get(_getPrototypeOf(Artwork.prototype), "w", this);
      },
      set: function set2(t) {
        t !== _get(_getPrototypeOf(Artwork.prototype), "w", this) && (_set(_getPrototypeOf(Artwork.prototype), "w", t, this, true), this._componentSrc = this._generatePromise());
      }
    }, {
      key: "h",
      get: function get() {
        return _get(_getPrototypeOf(Artwork.prototype), "h", this);
      },
      set: function set2(t) {
        t !== _get(_getPrototypeOf(Artwork.prototype), "h", this) && (_set(_getPrototypeOf(Artwork.prototype), "h", t, this, true), this._componentSrc = this._generatePromise());
      }
    }, {
      key: "_actualAspectRatio",
      get: function get() {
        return this.w && this.h ? reduceFraction("".concat(this.w, "/").concat(this.h)).replace("/", "x") : null;
      }
    }, {
      key: "_supportedAspectRatioHeights",
      get: function get() {
        var t = this;
        return this.srcCallbackAspectRatios.map(function(i3) {
          var o3 = _slicedToArray(i3.split("x").map(function(t2) {
            return parseInt(t2);
          }), 2), r3 = o3[0], a3 = o3[1];
          return t.w / r3 * a3;
        });
      }
    }, {
      key: "_closestSupportedAspectRatio",
      get: function get() {
        var t = this, i3 = this._supportedAspectRatioHeights.reduce(function(i4, o3) {
          return Math.abs(o3 - t.h) < Math.abs(i4 - t.h) ? o3 : i4;
        });
        return this.srcCallbackAspectRatios[this._supportedAspectRatioHeights.indexOf(i3)];
      }
    }, {
      key: "_processedImageSrc",
      get: function get() {
        var t = this.src || this.fallbackSrc;
        return t !== this.fallbackSrc && this.srcCallback && "function" == typeof this.srcCallback && (t = this.srcCallback({
          closestAspectRatio: this._closestSupportedAspectRatio,
          aspectRatio: this._actualAspectRatio,
          src: this.src,
          w: this.w,
          h: this.h
        })), t && t.then ? t : Promise.resolve(t);
      }
    }, {
      key: "_gradientPatch",
      get: function get() {
        return {
          alpha: !this._Gradient && this.shouldSmooth ? 1e-3 : 1,
          style: {
            gradientColor: getValidColor(this.style.gradientColor)
          },
          h: this.h + 4,
          type: nt,
          w: this.w + 4,
          x: -2,
          y: -2,
          zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.gradient
        };
      }
    }, {
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Artwork.prototype), "_construct", this).call(this), this._srcCallbackAspectRatios = ["16x9", "3x4", "4x3", "2x1", "1x1"];
      }
    }, {
      key: "_setSrc",
      value: function _setSrc(t) {
        return this._componentSrc = this._generatePromise(), t;
      }
    }, {
      key: "_getFallbackSrc",
      value: function _getFallbackSrc() {
        return this._fallbackSrc || this.style && this.style.fallbackSrc;
      }
    }, {
      key: "_generatePromise",
      value: function _generatePromise() {
        var t, i3;
        return {
          complete: new Promise(function(o3, r3) {
            t = o3, i3 = r3;
          }),
          resolve: t,
          reject: i3
        };
      }
    }, {
      key: "_setup",
      value: function _setup() {
        this.alpha = 1e-3, this._componentSrc = this._generatePromise(), this._aspectRatioEqual = false, this._Image.on("txLoaded", this._resolveLoading.bind(this)), this._Image.on("txError", this._rejectLoading.bind(this));
      }
    }, {
      key: "_resolveLoading",
      value: function _resolveLoading() {
        this._aspectRatioEqual = !!this._Image.texture.source && parseFloat(this.finalW / this.finalH).toFixed(2) === parseFloat(this._Image.texture.source.w / this._Image.texture.source.h).toFixed(2), this._componentSrc.resolve && this._componentSrc.resolve(), this.signal("imageLoaded");
      }
    }, {
      key: "_rejectLoading",
      value: function _rejectLoading(t) {
        this._componentSrc.reject && this._componentSrc.reject(t);
      }
    }, {
      key: "_update",
      value: (l2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(t) {
          for (; ; )
            switch (t.prev = t.next) {
              case 0:
                return this._updateRadius(), this._updateGradient(), t.next = 4, this._updateImage();
              case 4:
                if (this._updateFillColor(), this._updateForegroundImage(), this.src) {
                  t.next = 9;
                  break;
                }
                return this._showComponent(), t.abrupt("return");
              case 9:
                return t.prev = 9, t.next = 12, this._componentSrc.complete;
              case 12:
                return t.next = 14, this._updateCenterImage();
              case 14:
                this._updateBlur(), this._showComponent(), this._updateScale(), t.next = 22;
                break;
              case 19:
                t.prev = 19, t.t0 = t.catch(9), this._handleImageLoadError();
              case 22:
                void 0 === this.shouldSmooth && (this.shouldSmooth = true);
              case 23:
              case "end":
                return t.stop();
            }
        }, _callee9, this, [[9, 19]]);
      })), function _update() {
        return l2.apply(this, arguments);
      })
    }, {
      key: "_updateScale",
      value: function _updateScale() {
        if (this.shouldScale) {
          var t;
          switch (_typeof(this.style.imageScale)) {
            case "function":
              t = this.style.imageScale(this.w);
              break;
            case "number":
              t = this.style.imageScale;
              break;
            default:
              t = 1;
          }
          this._Image.smooth = {
            pivotX: this.style.imageScalePivotX,
            pivotY: this.style.imageScalePivotY,
            scale: [t, this._Image.scale < t ? this.style.animationImageScaleEntrance : this.style.animationImageScaleExit]
          };
        } else {
          this._Image.smooth = {
            scale: [1, this.style.animationImageScaleExit]
          };
        }
      }
    }, {
      key: "_handleImageLoadError",
      value: function _handleImageLoadError() {
        this.src !== this.fallbackSrc && (I.error("Image ".concat(this._src, " failed to load")), this.fallbackSrc && this.fallbackSrc !== this.src && (this.src = this.fallbackSrc));
      }
    }, {
      key: "_showComponent",
      value: function _showComponent() {
        this.smooth = {
          alpha: [1, this.style.animationComponentEntrance]
        };
      }
    }, {
      key: "_updateForegroundImage",
      value: (a2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee10() {
        var t, i3 = this;
        return _regeneratorRuntime().wrap(function _callee10$(o3) {
          for (; ; )
            switch (o3.prev = o3.next) {
              case 0:
                if (this._foregroundSrc) {
                  o3.next = 3;
                  break;
                }
                return this._ForegroundImage && this.patch({
                  ForegroundImage: void 0
                }), o3.abrupt("return");
              case 3:
                t = {
                  mount: 0.5,
                  x: this.w / 2,
                  y: this.h / 2,
                  zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.foreground,
                  texture: {
                    type: ot,
                    src: this._foregroundSrc,
                    hasAlpha: true
                  }
                }, this.foregroundWidth && this.foregroundHeight ? (t.h = this.foregroundHeight, t.w = this.foregroundWidth, this.patch({
                  ForegroundImage: t
                })) : (this.foregroundWidth || this.foregroundHeight) && (this.patch({
                  ForegroundImage: _objectSpread(_objectSpread({}, t), {}, {
                    alpha: 1e-3
                  })
                }), this._ForegroundImage.once("txLoaded", function() {
                  var t2 = i3._ForegroundImage.texture.getRenderWidth(), o4 = i3._ForegroundImage.texture.getRenderHeight();
                  i3._ForegroundImage.patch({
                    alpha: 1,
                    w: i3.foregroundHeight ? i3.foregroundHeight * (t2 / o4) : i3.foregroundWidth,
                    h: i3.foregroundWidth ? i3.foregroundWidth * (o4 / t2) : i3.foregroundHeight
                  });
                })), this.patch({
                  ForegroundImage: t
                });
              case 6:
              case "end":
                return o3.stop();
            }
        }, _callee10, this);
      })), function _updateForegroundImage() {
        return a2.apply(this, arguments);
      })
    }, {
      key: "_updateBlur",
      value: function _updateBlur() {
        var i3 = this;
        (!this._shouldBlur || this._Image && this._Image.texture && this._Image.texture.src === this.fallbackSrc) && this._Blur ? this.shouldSmooth ? (this._Blur._getTransition("alpha").once("finish", function() {
          i3.patch({
            Blur: void 0
          });
        }), this._Blur.smooth = {
          alpha: [0, this.style.animationBlurExit]
        }) : this.patch({
          Blur: void 0
        }) : !this._srcFailed && this._shouldBlur && (this.patch({
          Blur: {
            alpha: !this._Blur && this.shouldSmooth ? 1e-3 : 1,
            amount: this.style.blur,
            zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.blur,
            content: {
              Image: {
                h: this.h,
                texture: this._Image.getTexture(),
                w: this.w
              }
            },
            h: this.h,
            rtt: true,
            type: lightningjs_core_default.components.FastBlurComponent,
            w: this.w
          }
        }), this._Blur.alpha < 1 && (this._Blur.smooth = {
          alpha: [1, this.style.animationBlurEntrance]
        }));
      }
    }, {
      key: "_updateCenterImage",
      value: function _updateCenterImage() {
        "contain" === this.format ? this._updateFormatContain() : "circle" === this.format || "square" === this.format ? this._updateFormatSquareCircle() : this._CenterImage && this.patch({
          CenterImage: void 0
        });
      }
    }, {
      key: "_updateFormatContain",
      value: (r2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee11() {
        var t, i3, o3, r3, a3;
        return _regeneratorRuntime().wrap(function _callee11$(l3) {
          for (; ; )
            switch (l3.prev = l3.next) {
              case 0:
                if (!(this._CenterImage && this._CenterImage.mode !== this.format || this.src === this.fallbackSrc || this._aspectRatioEqual)) {
                  l3.next = 5;
                  break;
                }
                if (this.patch({
                  CenterImage: void 0
                }), this.src !== this.fallbackSrc && !this._aspectRatioEqual) {
                  l3.next = 5;
                  break;
                }
                return this._Image.alpha = 1, l3.abrupt("return");
              case 5:
                return o3 = Math.abs(this._Image.texture.source.w / this._Image.texture.source.h), r3 = Math.abs(this._Image.texture.source.h / this._Image.texture.source.w), this._Image.texture.source.w < this._Image.texture.source.h ? this.h * o3 < this.w ? (t = this.h * o3, i3 = this.h) : (t = this.w, i3 = this.w * r3) : this._Image.texture.source.w > this._Image.texture.source.h ? this.w * r3 < this.h ? (t = this.w, i3 = this.w * r3) : (t = this.h * o3, i3 = this.h) : (t = Math.min(this.w, this.h), i3 = t), l3.next = 10, this._processedImageSrc;
              case 10:
                a3 = l3.sent, this.patch({
                  CenterImage: {
                    format: this.format,
                    mount: 0.5,
                    w: t,
                    h: i3,
                    x: this.w / 2,
                    y: this.h / 2,
                    zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.centerImage,
                    texture: {
                      src: a3,
                      resizeMode: {
                        h: i3,
                        type: "cover",
                        w: t
                      },
                      type: ot
                    }
                  }
                });
              case 12:
              case "end":
                return l3.stop();
            }
        }, _callee11, this);
      })), function _updateFormatContain() {
        return r2.apply(this, arguments);
      })
    }, {
      key: "_updateFormatSquareCircle",
      value: function _updateFormatSquareCircle() {
        if (!(this._CenterImage && this._CenterImage.mode !== this.format || this.src === this.fallbackSrc) || (this.patch({
          CenterImage: void 0
        }), this.src !== this.fallbackSrc)) {
          var i3 = Math.min(this.w, this.h) - 2 * this.style.padding;
          this.patch({
            CenterImage: {
              format: this.format,
              h: i3,
              shader: {
                radius: "circle" === this.format ? i3 / 2 : this.style.centerImageRadius,
                type: lightningjs_core_default.shaders.RoundedRectangle
              },
              w: i3,
              zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.centerImage,
              Image: {
                h: i3,
                mount: 0.5,
                rtt: true,
                w: i3,
                x: this.w / 2,
                y: this.h / 2,
                texture: {
                  src: this._Image.texture.src,
                  resizeMode: {
                    h: i3,
                    type: "cover",
                    w: i3
                  },
                  type: ot
                }
              }
            }
          });
        }
      }
    }, {
      key: "_updateGradient",
      value: function _updateGradient() {
        var t = this;
        this.gradient ? this._createGradient() : this._Gradient && (this.shouldSmooth ? (this._Gradient._getTransition("alpha").once("finish", function() {
          var i3 = t._Gradient && t._Gradient._getTransition("alpha");
          !t.gradient && i3 && 1 === i3.p && t.patch({
            Gradient: void 0
          });
        }), this._Gradient.patch(this._gradientPatch), this._Gradient.smooth = {
          alpha: [0, this.style.animationGradientExit]
        }) : this.patch({
          Gradient: void 0
        }));
      }
    }, {
      key: "_createGradient",
      value: function _createGradient() {
        this.patch({
          Gradient: this._gradientPatch
        }), this.shouldSmooth && this.applySmooth(this._Gradient, {
          alpha: [1, this.style.animationGradientEntrance]
        });
      }
    }, {
      key: "_updateImage",
      value: (o2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee12() {
        var t;
        return _regeneratorRuntime().wrap(function _callee12$(i3) {
          for (; ; )
            switch (i3.prev = i3.next) {
              case 0:
                if (this._aspectRatioEqual = false, this._processedImageSrc) {
                  i3.next = 4;
                  break;
                }
                return this._Image && (this._Image.texture = void 0), i3.abrupt("return");
              case 4:
                return i3.next = 6, this._processedImageSrc;
              case 6:
                t = i3.sent, this._Image.patch({
                  alpha: this.src !== this.fallbackSrc && (this._blur || this._hasCenterImage) ? 1e-3 : 1,
                  h: this.h,
                  texture: {
                    type: ot,
                    src: t,
                    resizeMode: {
                      type: "cover",
                      w: this.w,
                      h: this.h
                    }
                  },
                  w: this.w,
                  zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.image
                });
              case 8:
              case "end":
                return i3.stop();
            }
        }, _callee12, this);
      })), function _updateImage() {
        return o2.apply(this, arguments);
      })
    }, {
      key: "_updateFillColor",
      value: function _updateFillColor() {
        this.fill ? this.patch({
          FillColor: {
            rect: true,
            w: this.w,
            h: this.h,
            color: this.style.fillColor,
            zIndex: 5
          }
        }) : this.patch({
          FillColor: void 0
        });
      }
    }, {
      key: "_updateRadius",
      value: function _updateRadius() {
        this.patch(this.style.radius ? {
          shader: {
            type: lightningjs_core_default.shaders.RoundedRectangle,
            radius: this.style.radius
          }
        } : {
          shader: void 0
        });
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Artwork";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return it;
      }
    }, {
      key: "properties",
      get: function get() {
        return ["blur", "fallbackSrc", "foregroundHeight", "foregroundSrc", "foregroundWidth", "gradient", "format", "src", "fill", "shouldScale", "srcCallback", "srcCallbackAspectRatios"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Blur", "CenterImage", "FillColor", "ForegroundImage", "Gradient", "Image", "Item"];
      }
    }, {
      key: "aliasProperties",
      get: function get() {
        return [{
          prev: "foregroundH",
          curr: "foregroundHeight"
        }, {
          prev: "foregroundW",
          curr: "foregroundWidth"
        }];
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          rtt: true,
          Image: {}
        };
      }
    }]), Artwork;
  }();
  var at = Object.freeze({
    __proto__: null,
    tone: function tone$o(t) {
      return {
        neutral: {
          color: t.color.fillNeutral
        },
        inverse: {
          color: t.color.fillInverse
        },
        brand: {
          color: t.color.fillBrand
        }
      };
    }
  });
  var st = function(i2) {
    _inherits(Icon, tt);
    var o2 = _createSuper(Icon);
    function Icon() {
      return _classCallCheck(this, Icon), o2.apply(this, arguments);
    }
    return _createClass(Icon, [{
      key: "_init",
      value: function _init() {
        var t = this;
        this.on("txLoaded", function() {
          t.fixed || t._notify.bind(t)();
        }), this.on("txError", this._handleTxtError.bind(this));
      }
    }, {
      key: "_getColor",
      value: function _getColor() {
        return this._color || this.style.color;
      }
    }, {
      key: "_notify",
      value: function _notify() {
        this.w = this.finalW, this.h = this.finalH, this.signal("itemChanged", this), this.fireAncestors("$itemChanged");
      }
    }, {
      key: "_handleTxtError",
      value: function _handleTxtError() {
        I.error("Unable to load icon ".concat(this._icon)), this._icon = null, this.texture = null;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._icon ? this.patch(this._iconPatch) : this.texture = null;
      }
    }, {
      key: "_iconPatch",
      get: function get() {
        var i3, o3 = _slicedToArray([/^<svg.*<\/svg>$/, /\.svg$/].map(function(t) {
          return RegExp.prototype.test.bind(t);
        }), 2), r2 = o3[0], a2 = o3[1], l2 = r2(this.icon), c2 = a2(this.icon);
        i3 = l2 ? lightningjs_core_default.Tools.getSvgTexture("data:image/svg+xml,".concat(encodeURIComponent(this.icon)), this.w, this.h) : c2 ? lightningjs_core_default.Tools.getSvgTexture(this.icon, this.w, this.h) : {
          type: ot,
          w: this.w,
          h: this.h,
          src: this.icon
        };
        var u2 = getValidColor(this._color || this.style.color);
        return _objectSpread({
          texture: i3,
          shader: this.radius || this.style.radius ? {
            radius: this.radius || this.style.radius,
            type: lightningjs_core_default.shaders.RoundedRectangle
          } : void 0
        }, u2 ? {
          colorUl: u2,
          colorUr: u2,
          colorBl: u2,
          colorBr: u2
        } : {});
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Icon";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return at;
      }
    }, {
      key: "properties",
      get: function get() {
        return ["icon", "fixed", "color"];
      }
    }]), Icon;
  }();
  var lt = Object.freeze({
    __proto__: null,
    base: function base$P(t) {
      return {
        contentSpacing: t.spacer.xs,
        offsetY: 1,
        paddingX: t.spacer.md,
        paddingY: t.spacer.xs,
        radius: t.radius.sm,
        strokeWidth: t.stroke.sm,
        textStyle: _objectSpread(_objectSpread({}, t.typography.tag1), {}, {
          textAlign: "center"
        })
      };
    },
    tone: function tone$n(t) {
      return {
        neutral: {
          backgroundColor: t.color.fillInverseSecondary,
          iconColor: t.color.textNeutral,
          textStyle: {
            textColor: t.color.textNeutral
          },
          strokeColor: t.color.strokeNeutralSecondary
        },
        inverse: {
          backgroundColor: t.color.fillNeutralSecondary,
          iconColor: t.color.textInverse,
          textStyle: {
            textColor: t.color.textInverse
          },
          strokeColor: t.color.strokeInverseSecondary
        },
        brand: {
          backgroundColor: t.color.fillBrand,
          iconColor: t.color.textNeutral,
          textStyle: {
            textColor: t.color.textNeutral
          },
          strokeColor: t.color.strokeInverseSecondary
        }
      };
    }
  });
  var ct = function(i2) {
    _inherits(Badge, tt);
    var o2 = _createSuper(Badge);
    function Badge() {
      return _classCallCheck(this, Badge), o2.apply(this, arguments);
    }
    return _createClass(Badge, [{
      key: "_init",
      value: function _init() {
        this._Text.on("txLoaded", this._updateLayout.bind(this)), _get(_getPrototypeOf(Badge.prototype), "_init", this).call(this);
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateText(), this._updateIcon(), this._updateLayout(), this._updateVisibility();
      }
    }, {
      key: "_updateVisibility",
      value: function _updateVisibility() {
        this.alpha = this.title || this.icon ? 1 : 0;
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout() {
        this._updateWidth(), this._updateBackground(), this._updatePositions(), this.signal("loadedBadge", this);
      }
    }, {
      key: "_updateBackground",
      value: function _updateBackground() {
        var i3 = Math.max(this._Text.renderHeight, this._Icon.h) + 2 * this.style.paddingY;
        this.patch({
          h: i3,
          texture: lightningjs_core_default.Tools.getRoundRect(this.w, i3, this.style.radius, this.style.strokeWidth, this.style.strokeColor, true, this.style.backgroundColor)
        });
      }
    }, {
      key: "_updateText",
      value: function _updateText() {
        this._Text && this._Text.patch({
          text: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
            text: this.title || ""
          })
        });
      }
    }, {
      key: "_updateIcon",
      value: function _updateIcon() {
        this._Icon.patch({
          icon: this.icon,
          w: this.iconWidth,
          h: this.iconHeight,
          style: {
            color: getHexColor(this.style.iconColor)
          }
        });
      }
    }, {
      key: "_updateWidth",
      value: function _updateWidth() {
        var t = 0;
        this.title && this.icon ? t = this._Text.renderWidth + this._Icon.finalW + this.style.contentSpacing + 2 * this.style.paddingX : this.title ? t = this._Text.renderWidth + 2 * this.style.paddingX : this.icon && (t = this._Icon.finalW + 2 * this.style.paddingX), this.w = t;
      }
    }, {
      key: "_updatePositions",
      value: function _updatePositions() {
        this._Icon.y = this.h / 2, "left" === this.iconAlign && this.title && this.icon ? (this._Icon.x = this.style.paddingX, this._Text.x = this._Icon.x + this._Icon.finalW + this.style.contentSpacing) : "right" === this.iconAlign && this.title && this.icon ? (this._Text.x = this.style.paddingX, this._Icon.x = this._Text.x + this._Text.renderWidth + this.style.contentSpacing) : (this._Text.x = this.style.paddingX, this._Icon.x = this.style.paddingX), this._Text.y = this._h / 2 + this.style.offsetY;
      }
    }, {
      key: "_getIconHeight",
      value: function _getIconHeight() {
        return this.icon ? !this._Icon.finalH && this._Text ? this._Text.text.lineHeight : this._Icon.finalH : 0;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this.title;
      },
      set: function set2(t) {
        _set(_getPrototypeOf(Badge.prototype), "announce", t, this, true);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Text: {
            mountY: 0.5
          },
          Icon: {
            type: st,
            mountY: 0.5,
            signals: {
              itemChanged: "_updateLayout"
            }
          }
        };
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "Badge";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return lt;
      }
    }, {
      key: "properties",
      get: function get() {
        return ["title", "icon", "iconAlign", "iconWidth", "iconHeight"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Background", "Text", "Icon"];
      }
    }]), Badge;
  }();
  var ut = Object.freeze({
    __proto__: null,
    base: function base$O(t) {
      return {
        width: 0,
        justify: "center",
        minWidth: getWidthByColumnSpan(t, 3),
        paddingX: t.spacer.xxxl,
        paddingXNoTitle: t.spacer.xl,
        paddingY: t.spacer.xl,
        radius: t.radius.sm,
        contentSpacing: t.spacer.md,
        itemSpacing: t.spacer.md,
        textStyle: _objectSpread(_objectSpread({}, t.typography.button1), {}, {
          maxLines: 1,
          textColor: t.color.textNeutral
        }),
        contentColor: t.color.fillNeutral
      };
    },
    mode: function mode$g(t) {
      return {
        focused: {
          textStyle: {
            textColor: t.color.textInverse
          },
          contentColor: t.color.fillInverse,
          tone: {
            inverse: {
              textStyle: {
                textColor: t.color.textNeutral
              },
              contentColor: t.color.fillNeutral
            },
            brand: {
              contentColor: t.color.fillNeutral
            }
          }
        },
        disabled: {
          textStyle: {
            textColor: t.color.textNeutralDisabled
          },
          contentColor: t.color.fillNeutralDisabled
        }
      };
    }
  });
  var ht = function(t) {
    _inherits(FocusManager, tt);
    var i2 = _createSuper(FocusManager);
    function FocusManager() {
      return _classCallCheck(this, FocusManager), i2.apply(this, arguments);
    }
    return _createClass(FocusManager, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(FocusManager.prototype), "_construct", this).call(this), this._selectedIndex = 0, this._itemPosX = 0, this._itemPosY = 0, this.direction = this.direction || "row";
      }
    }, {
      key: "_init",
      value: function _init() {
        this._checkSkipFocus();
      }
    }, {
      key: "Items",
      get: function get() {
        return this.tag("Items") || this.patch({
          Items: {}
        }), this._Items;
      }
    }, {
      key: "_setDirection",
      value: function _setDirection(t2) {
        var i3 = {
          none: "None",
          column: "Column",
          row: "Row"
        }[t2];
        return i3 && this._setState(i3), t2;
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return this._Items.children;
      }
    }, {
      key: "items",
      get: function get() {
        return this.Items.children;
      },
      set: function set2(t2) {
        this._resetItems(), this._selectedIndex = 0, this.appendItems(t2), this._checkSkipFocus();
      }
    }, {
      key: "itemPosX",
      get: function get() {
        return this._itemPosX;
      },
      set: function set2(t2) {
        this.Items.x = this._itemPosX = t2;
      }
    }, {
      key: "itemPosY",
      get: function get() {
        return this._itemPosY;
      },
      set: function set2(t2) {
        this.Items.y = this._itemPosY = t2;
      }
    }, {
      key: "_resetItems",
      value: function _resetItems() {
        this.Items.childList.clear(), this.Items.patch({
          w: 0,
          h: 0,
          x: this.itemPosX,
          y: this.itemPosY
        });
      }
    }, {
      key: "_appendLazyItem",
      value: function _appendLazyItem(t2) {
        this.appendItems([t2]);
      }
    }, {
      key: "appendItems",
      value: function appendItems() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        this.Items.childList.a(t2), this._refocus();
      }
    }, {
      key: "appendItemsAt",
      value: function appendItemsAt() {
        var t2 = this, i3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], o2 = arguments.length > 1 ? arguments[1] : void 0, r2 = Number.isInteger(o2) ? o2 : this.Items.children.length;
        this.shouldSmooth = false, this._lastAppendedIdx = r2, i3.forEach(function(i4, o3) {
          t2.Items.childList.addAt(_objectSpread(_objectSpread({}, i4), {}, {
            parentFocus: t2.hasFocus()
          }), r2 + o3);
        }), this.selectedIndex >= this._lastAppendedIdx && (this._selectedIndex += i3.length), this.requestUpdate(), this._refocus();
      }
    }, {
      key: "prependItems",
      value: function prependItems(t2) {
        this.appendItemsAt(t2, 0);
      }
    }, {
      key: "removeItemAt",
      value: function removeItemAt(t2) {
        this.shouldSmooth = false, this.Items.childList.removeAt(t2), (this.selectedIndex > t2 || this.selectedIndex === this.Items.children.length) && this._selectedIndex--, this.requestUpdate(), this._refocus();
      }
    }, {
      key: "_checkSkipFocus",
      value: function _checkSkipFocus() {
        var t2 = this.Items.children[this.selectedIndex];
        t2 && t2.skipFocus && this.selectNext();
      }
    }, {
      key: "selected",
      get: function get() {
        return this.Items.children[this.selectedIndex];
      }
    }, {
      key: "selectedIndex",
      get: function get() {
        return this._selectedIndex;
      },
      set: function set2(t2) {
        this.prevSelected = this.selected, this.Items.children.length && this.Items.children[t2] && this.Items.children[t2].skipFocus || (t2 !== this._selectedIndex && (this._selectedIndex = t2), this.selected && this._selectedChange(this.selected, this.prevSelected), this._refocus());
      }
    }, {
      key: "_selectedChange",
      value: function _selectedChange(t2, i3) {
        this._render(t2, i3), this.signal("selectedChange", t2, i3);
      }
    }, {
      key: "_render",
      value: function _render() {
      }
    }, {
      key: "_firstFocusableIndex",
      value: function _firstFocusableIndex() {
        return this.items.length ? this.items.reduce(function(t2, i3, o2) {
          return i3.skipFocus || t2.push(_objectSpread(_objectSpread({}, i3), {}, {
            originalIdx: o2
          })), t2;
        }, []).shift().originalIdx : 0;
      }
    }, {
      key: "_lastFocusableIndex",
      value: function _lastFocusableIndex() {
        return this.items.length ? this.items.reduce(function(t2, i3, o2) {
          return i3.skipFocus || t2.push(_objectSpread(_objectSpread({}, i3), {}, {
            originalIdx: o2
          })), t2;
        }, []).pop().originalIdx : 0;
      }
    }, {
      key: "selectPrevious",
      value: function selectPrevious() {
        this.shouldSmooth = true;
        var t2 = !!(this.items || []).filter(function(t3) {
          return !t3.skipFocus;
        }).length;
        if (0 === this.selectedIndex && !this.wrapSelected || !t2)
          return false;
        var i3 = this.items.map(function(t3) {
          return !!t3.skipFocus;
        }).lastIndexOf(false, this._selectedIndex - 1);
        return i3 > -1 ? (this.selectedIndex = i3, true) : !!this.wrapSelected && (this.selectedIndex = this._lastFocusableIndex(), true);
      }
    }, {
      key: "selectNext",
      value: function selectNext() {
        var t2 = this;
        this.shouldSmooth = true, this._lazyItems && this._lazyItems.length && delayForAnimation(function() {
          t2._appendLazyItem(t2._lazyItems.splice(0, 1)[0]);
        });
        var i3 = !!(this.items || []).filter(function(t3) {
          return !t3.skipFocus;
        }).length;
        if (this.selectedIndex === this.Items.children.length - 1 && !this.wrapSelected || !i3)
          return false;
        var o2 = this.items.findIndex(function(i4, o3) {
          return !i4.skipFocus && o3 > t2._selectedIndex;
        });
        return o2 > -1 ? (this.selectedIndex = o2, true) : !!this.wrapSelected && (this.selectedIndex = this._firstFocusableIndex(), true);
      }
    }, {
      key: "_getIndexOfItemNear",
      value: function _getIndexOfItemNear(t2, i3) {
        var o2 = i3.selected;
        if (!(t2 && t2.items && t2.items.length && o2))
          return 0;
        var r2 = _slicedToArray(o2.core.getAbsoluteCoords(0, 0), 2), a2 = r2[0], l2 = r2[1], c2 = [a2 + o2.w / 2, l2 + o2.h / 2], u2 = t2.items.map(function(t3, i4) {
          return {
            index: i4,
            distance: t3.skipFocus ? null : (o3 = c2, r3 = t3, a3 = _slicedToArray(o3, 2), l3 = a3[0], u3 = a3[1], h2 = _slicedToArray(r3.core ? r3.core.getAbsoluteCoords(0, 0) : [0, 0], 2), d2 = h2[0], p2 = h2[1], _2 = getEuclideanDistance(l3, u3, d2, p2), g2 = getEuclideanDistance(l3, u3, d2 + r3.w / 2, p2 + r3.h / 2), m2 = getEuclideanDistance(l3, u3, d2 + r3.w, p2 + r3.h), Math.min(_2, g2, m2))
          };
          var o3, r3, a3, l3, u3, h2, d2, p2, _2, g2, m2;
        }).filter(function(t3) {
          return null !== t3.distance;
        }).sort(function(t3, i4) {
          return t3.distance - i4.distance;
        });
        return u2[0].index;
      }
    }, {
      key: "_focus",
      value: function _focus() {
        _get(_getPrototypeOf(FocusManager.prototype), "_focus", this).call(this), this.items.forEach(function(t2) {
          return t2.parentFocus = true;
        });
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        _get(_getPrototypeOf(FocusManager.prototype), "_unfocus", this).call(this), this.items.forEach(function(t2) {
          return t2.parentFocus = false;
        });
      }
    }, {
      key: "_updateShouldSmooth",
      value: function _updateShouldSmooth() {
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        var t2 = this.selected;
        if (t2) {
          if (t2.focusRef)
            return t2.tag(t2.focusRef);
          if (t2.cparent)
            return t2;
        }
        return this;
      }
    }, {
      key: "_updateTransitionTarget",
      value: function _updateTransitionTarget(t2, i3, o2) {
        t2 && t2.transition(i3) && !t2.transition(i3).isRunning() && t2.transition(i3).targetValue !== o2 && t2.transition(i3).updateTargetValue(o2);
      }
    }, {
      key: "onScreenItems",
      get: function get() {
        var t2 = this;
        return this.Items.children.filter(function(i3) {
          return t2._isOnScreen(i3);
        });
      }
    }, {
      key: "_isOnScreenCompletely",
      value: function _isOnScreenCompletely(t2) {
        return t2.isFullyOnScreen ? t2.isFullyOnScreen() : isComponentOnScreen(t2);
      }
    }, {
      key: "fullyOnScreenItems",
      get: function get() {
        var t2 = this;
        return this.Items.children.reduce(function(i3, o2) {
          return o2 instanceof FocusManager ? [].concat(_toConsumableArray(i3), _toConsumableArray(o2.Items.children.filter(t2._isOnScreenCompletely))) : t2._isOnScreenCompletely(o2) ? [].concat(_toConsumableArray(i3), [o2]) : i3;
        }, []);
      }
    }, {
      key: "_isOnScreen",
      value: function _isOnScreen() {
        throw new Error("'_isOnScreen' must be implemented by 'row'/'column'");
      }
    }, {
      key: "_isComponentHorizontallyVisible",
      value: function _isComponentHorizontallyVisible(t2) {
        var i3 = a(t2);
        if (!Number.isFinite(i3))
          return false;
        var o2 = this.getTransitionXTargetValue(), r2 = this.core.renderContext.px + o2 + i3, l2 = _slicedToArray(this.core._scissor || [], 3), c2 = l2[0], u2 = void 0 === c2 ? null : c2, h2 = l2[2], d2 = void 0 === h2 ? null : h2, p2 = this.stage.w / this.stage.getRenderPrecision(), _2 = t2.w;
        if (!(r2 >= 0) || !(r2 + _2 <= p2))
          return false;
        var g2 = true, m2 = true;
        return Number.isFinite(u2) && (g2 = Math.round(r2 + _2) >= Math.round(u2), m2 = Math.round(r2) <= Math.round(u2 + d2)), g2 && m2;
      }
    }, {
      key: "_isComponentVerticallyVisible",
      value: function _isComponentVerticallyVisible(t2) {
        var i3 = l(t2);
        if (!Number.isFinite(i3))
          return false;
        var o2 = this.getTransitionYTargetValue(), r2 = this.core.renderContext.py, a2 = _slicedToArray(this.core._scissor || [], 4), c2 = a2[1], u2 = void 0 === c2 ? null : c2, h2 = a2[3], d2 = void 0 === h2 ? null : h2, p2 = t2.h, _2 = r2 + o2 + i3, g2 = this.stage.h / this.stage.getRenderPrecision();
        if (!(_2 + p2 >= 0) || !(_2 <= g2))
          return false;
        var m2 = true, v2 = true;
        return Number.isFinite(u2) && (m2 = Math.round(_2 + p2) > Math.round(u2), v2 = Math.round(_2) < Math.round(u2 + d2)), m2 && v2;
      }
    }, {
      key: "getTransitionXTargetValue",
      value: function getTransitionXTargetValue() {
        return this.Items.transition("x").targetValue;
      }
    }, {
      key: "getTransitionYTargetValue",
      value: function getTransitionYTargetValue() {
        return this.Items.transition("y").targetValue;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "FocusManager";
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Items"];
      }
    }, {
      key: "properties",
      get: function get() {
        return ["direction", "wrapSelected"];
      }
    }, {
      key: "_states",
      value: function _states() {
        return [function(t2) {
          _inherits(None, t2);
          var i3 = _createSuper(None);
          function None() {
            return _classCallCheck(this, None), i3.apply(this, arguments);
          }
          return _createClass(None);
        }(this), function(t2) {
          _inherits(Row, t2);
          var i3 = _createSuper(Row);
          function Row() {
            return _classCallCheck(this, Row), i3.apply(this, arguments);
          }
          return _createClass(Row, [{
            key: "_handleLeft",
            value: function _handleLeft() {
              return "function" == typeof this.onLeft ? this.onLeft(this) : this.selectPrevious();
            }
          }, {
            key: "_handleRight",
            value: function _handleRight() {
              return "function" == typeof this.onRight ? this.onRight(this) : this.selectNext();
            }
          }]), Row;
        }(this), function(t2) {
          _inherits(Column, t2);
          var i3 = _createSuper(Column);
          function Column() {
            return _classCallCheck(this, Column), i3.apply(this, arguments);
          }
          return _createClass(Column, [{
            key: "_handleUp",
            value: function _handleUp() {
              return "function" == typeof this.onUp ? this.onUp(this) : this.selectPrevious();
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              return "function" == typeof this.onDown ? this.onDown(this) : this.selectNext();
            }
          }]), Column;
        }(this)];
      }
    }]), FocusManager;
  }();
  var dt = Object.freeze({
    __proto__: null,
    base: function base$N(t) {
      return {
        alwaysScroll: false,
        itemSpacing: t.layout.gutterX,
        itemTransition: t.animation.utility,
        neverScroll: false,
        scrollIndex: 0
      };
    }
  });
  var pt = {
    row: {
      axis: "x",
      crossAxis: "y",
      lengthDimension: "w",
      crossDimension: "h",
      innerLengthDimension: "innerW",
      innerCrossDimension: "innerH"
    },
    column: {
      axis: "y",
      crossAxis: "x",
      lengthDimension: "h",
      crossDimension: "w",
      innerLengthDimension: "innerH",
      innerCrossDimension: "innerW"
    }
  };
  var _t = function(t) {
    _inherits(NavigationManager, ht);
    var i2 = _createSuper(NavigationManager);
    function NavigationManager() {
      return _classCallCheck(this, NavigationManager), i2.apply(this, arguments);
    }
    return _createClass(NavigationManager, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(NavigationManager.prototype), "_construct", this).call(this), this.shouldSmooth = false, this._lazyUpCountBuffer = 2;
      }
    }, {
      key: "_init",
      value: function _init() {
        var t2 = this._directionPropNames, i3 = t2.lengthDimension, o2 = t2.axis;
        this[i3] || this._initComponentSize(), this.Items.transition(o2).on("finish", this._transitionListener.bind(this)), _get(_getPrototypeOf(NavigationManager.prototype), "_init", this).call(this);
      }
    }, {
      key: "_initComponentSize",
      value: function _initComponentSize() {
        var t2 = this._directionPropNames.lengthDimension;
        if ((null == this ? void 0 : this.parent.parent) instanceof NavigationManager && null != this && this.parent.parent[t2])
          this[t2] = this.parent.parent[t2];
        else {
          for (var i3 = this.parent; i3 && !i3[t2]; )
            i3 = i3.parent;
          this[t2] = i3 && i3[t2] || this.stage.h / this.stage.getRenderPrecision();
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateLayout();
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout() {
        for (var t2, i3 = this._directionPropNames, o2 = i3.lengthDimension, r2 = i3.crossDimension, a2 = i3.crossAxis, l2 = i3.innerCrossDimension, c2 = 0, u2 = 0, h2 = 0, d2 = [], p2 = 0; p2 < this.Items.children.length; p2++) {
          var _2 = this.Items.children[p2];
          if (u2 = max(u2, this._calcCrossDimensionSize(_2)), h2 = max(h2, _2[l2] || 0), this.updatePositionOnAxis(_2, c2), c2 += _2[o2], p2 < this.Items.children.length - 1) {
            var g2 = _2.extraItemSpacing || 0;
            c2 += this.style.itemSpacing + g2;
          }
          if (_2.centerInParent) {
            var m2 = _2.Items && _2.Items[r2] || _2[r2];
            (m2 < this[r2] || !this.Items[l2]) && d2.push({
              childIdx: p2,
              childCrossDimensionSize: m2
            });
          } else
            _2[a2] = 0;
        }
        var v2 = this.Items[r2] !== u2 || this.Items[o2] !== c2;
        this.Items.patch((_defineProperty(t2 = {}, r2, u2), _defineProperty(t2, l2, h2 || u2), _defineProperty(t2, o2, c2 + (this._totalAddedWidth || 0)), t2)), this._autoResize(), this._centerItemsInParent(d2), this._updateLastScrollIndex(), v2 && (this._performRender(), this.fireAncestors("$itemChanged"));
      }
    }, {
      key: "_centerItemsInParent",
      value: function _centerItemsInParent(t2) {
        var i3 = this, o2 = this._directionPropNames, r2 = o2.crossDimension, a2 = o2.crossAxis, l2 = o2.innerCrossDimension;
        if (t2.length) {
          var c2 = [this.Items[r2], this.Items[l2]];
          1 === this.children.length && c2.push(this[r2]);
          var u2 = Math.max.apply(Math, c2);
          t2.forEach(function(t3) {
            var o3 = t3.childIdx, r3 = t3.childCrossDimensionSize;
            i3.Items.children[o3][a2] = (u2 - r3) / 2;
          });
        }
      }
    }, {
      key: "_autoResize",
      value: function _autoResize() {
        this.autoResizeWidth && (this.w = this.Items.w), this.autoResizeHeight && (this.h = this.Items.h);
      }
    }, {
      key: "_updateLastScrollIndex",
      value: function _updateLastScrollIndex() {
        var t2 = this._directionPropNames, i3 = t2.axis, o2 = t2.lengthDimension;
        if (this.alwaysScroll)
          this._lastScrollIndex = this.Items.children.length - 1;
        else {
          var r2 = (this.Items.children[this.scrollIndex] || _defineProperty({}, i3, 0))[i3], a2 = this.Items.childList.last, l2 = a2 ? this._calcAxisPosition(a2) + a2[o2] : 0;
          if (l2 > this[o2]) {
            for (var c2, u2 = this.Items.children.length - 1; u2 >= 0; u2--) {
              if (!(this._calcAxisPosition(this.Items.children[u2]) + this[o2] - r2 > l2))
                break;
              c2 = u2;
            }
            this._lastScrollIndex = c2;
          } else
            this._lastScrollIndex > this.items.length && (this._lastScrollIndex = this.items.length - 1);
        }
      }
    }, {
      key: "_calcCrossDimensionSize",
      value: function _calcCrossDimensionSize(t2) {
        return this._isRow ? function getH(t3) {
          return getDimension("h", t3) || t3.renderHeight;
        }(t2) : this._isColumn ? function getW(t3) {
          return getDimension("w", t3) || t3.renderWidth;
        }(t2) : void 0;
      }
    }, {
      key: "_calcAxisPosition",
      value: function _calcAxisPosition(t2) {
        return this._isRow ? a(t2) : this._isColumn ? l(t2) : void 0;
      }
    }, {
      key: "_transitionListener",
      value: function _transitionListener() {
        this.shouldSmooth = false, this.transitionDone();
      }
    }, {
      key: "_withAfterUpdate",
      value: function _withAfterUpdate(t2) {
        return watchForUpdates({
          element: t2,
          watchProps: [this._directionPropNames.crossAxis, "w", "h", "innerW", "innerH"],
          sideEffect: this.queueRequestUpdate.bind(this)
        });
      }
    }, {
      key: "_performRender",
      value: function _performRender() {
      }
    }, {
      key: "_appendItem",
      value: function _appendItem(t2) {
        this.shouldSmooth = false, t2.parentFocus = this.hasFocus(), t2 = this.Items.childList.a(t2);
        var i3 = this._directionPropNames.crossDimension;
        if (!t2[i3]) {
          var o2 = this._isRow ? this.renderHeight : this.renderWidth;
          t2[i3] = t2[i3] || o2;
        }
        t2 = this._withAfterUpdate(t2);
      }
    }, {
      key: "_appendLazyItem",
      value: function _appendLazyItem(t2) {
        this._appendItem(t2), this.queueRequestUpdate(), this._refocus();
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        this.queueRequestUpdate();
      }
    }, {
      key: "appendItems",
      value: function appendItems() {
        var t2, i3 = this, o2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        (this.shouldSmooth = false, this._lazyItems) ? (t2 = this._lazyItems).push.apply(t2, _toConsumableArray(o2)) : (o2.length > this.lazyUpCount + this.lazyUpCountBuffer && (this._lazyItems = o2.splice(this.lazyUpCount + this.lazyUpCountBuffer)), o2.forEach(function(t3) {
          return i3._appendItem(t3);
        }), this.queueRequestUpdate(), this._refocus());
      }
    }, {
      key: "appendItemsAt",
      value: function appendItemsAt() {
        var t2 = this, i3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], o2 = arguments.length > 1 ? arguments[1] : void 0;
        if (this._lazyItems && o2 > this.items.length - 1) {
          var r2, a2 = o2 - this.items.length;
          (r2 = this._lazyItems).splice.apply(r2, [a2, 0].concat(_toConsumableArray(i3)));
        } else {
          var l2 = this._directionPropNames, c2 = l2.crossDimension, u2 = l2.lengthDimension, h2 = l2.innerLengthDimension, d2 = Number.isInteger(o2) ? o2 : this.Items.children.length;
          this.shouldSmooth = false, this._lastAppendedIdx = d2, this._totalAddedLength = 0, i3.forEach(function(i4, o3) {
            var r3 = _objectSpread(_objectSpread({}, t2._withAfterUpdate(i4)), {}, {
              parentFocus: t2.hasFocus()
            });
            i4[c2] || (r3[c2] = i4[c2] || t2.Items[c2]), t2.Items.childList.addAt(r3, d2 + o3);
            var a3 = i4[u2] || i4[h2] || 0, l3 = i4.extraItemSpacing || 0;
            t2._totalAddedLength += a3 + t2.style.itemSpacing + l3;
          }), this.selectedIndex >= this._lastAppendedIdx && (this._selectedPastAdded = true, this._selectedIndex += i3.length), this.requestUpdate(), this._refocus();
        }
      }
    }, {
      key: "updatePositionOnAxis",
      value: function updatePositionOnAxis(t2, i3) {
        var o2 = this._directionPropNames.axis;
        this.applySmooth(t2, _defineProperty({}, o2, i3), _defineProperty({}, o2, [i3, this.style.itemTransition])), this.shouldSmooth || this._updateTransitionTarget(t2, o2, i3);
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(t2) {
        var i3 = this, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100 * this.style.itemTransition.duration;
        if (null != t2)
          if (0 !== o2)
            for (var r2 = 0; r2 !== Math.abs(this.selectedIndex - t2); r2++)
              setTimeout(function() {
                i3.selectedIndex > t2 ? i3.selectPrevious() : i3.selectNext();
              }, o2 * r2);
          else
            this.selectedIndex = t2;
      }
    }, {
      key: "transitionDone",
      value: function transitionDone() {
      }
    }, {
      key: "shouldScrollLeft",
      value: function shouldScrollLeft() {
        return this._isRow && this._canScrollBack;
      }
    }, {
      key: "shouldScrollRight",
      value: function shouldScrollRight() {
        return this._isRow && this._canScrollNext;
      }
    }, {
      key: "shouldScrollUp",
      value: function shouldScrollUp() {
        return this._isColumn && this._canScrollBack;
      }
    }, {
      key: "shouldScrollDown",
      value: function shouldScrollDown() {
        return this._isColumn && this._canScrollNext;
      }
    }, {
      key: "_directionPropNames",
      get: function get() {
        return pt[this.direction];
      }
    }, {
      key: "_canScrollBack",
      get: function get() {
        var t2 = false;
        return this._lastScrollIndex ? (t2 = this.selectedIndex < this._lastScrollIndex, void 0 !== this._prevLastScrollIndex && this._prevLastScrollIndex !== this._lastScrollIndex && (t2 = true)) : t2 = this.selectedIndex >= this.scrollIndex, (this._isRow ? this._itemsX : this._itemsY) < 0 && t2;
      }
    }, {
      key: "_canScrollNext",
      get: function get() {
        var t2, i3 = this._directionPropNames, o2 = i3.axis, r2 = i3.lengthDimension, a2 = this.Items.childList.last;
        return this._isRow && (t2 = Math.abs(this._itemsX - this.w)), this._isColumn && (t2 = Math.abs(this.itemPosY - this.h)), this.selectedIndex > this.scrollIndex && t2 < a2[o2] + a2[r2];
      }
    }, {
      key: "_isColumn",
      get: function get() {
        return "column" === this.direction;
      }
    }, {
      key: "_isRow",
      get: function get() {
        return "row" === this.direction;
      }
    }, {
      key: "_itemsX",
      get: function get() {
        return a(this.Items);
      }
    }, {
      key: "_getAlwaysScroll",
      value: function _getAlwaysScroll() {
        return void 0 !== this._alwaysScroll ? this._alwaysScroll : this.style.alwaysScroll;
      }
    }, {
      key: "_getNeverScroll",
      value: function _getNeverScroll() {
        return !this.alwaysScroll && (void 0 !== this._neverScroll ? this._neverScroll : this.style.neverScroll);
      }
    }, {
      key: "_setScrollIndex",
      value: function _setScrollIndex(t2) {
        return t2 >= 0 ? t2 : 0;
      }
    }, {
      key: "_getScrollIndex",
      value: function _getScrollIndex() {
        return void 0 !== this._scrollIndex ? this._scrollIndex : this.style.scrollIndex;
      }
    }, {
      key: "isFullyOnScreen",
      value: function isFullyOnScreen() {
        var t2, i3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o2 = i3.offsetX, r2 = void 0 === o2 ? 0 : o2, a2 = i3.offsetY, l2 = void 0 === a2 ? 0 : a2, c2 = null === (t2 = this.parent) || void 0 === t2 ? void 0 : t2.parent;
        return c2 instanceof ht && (r2 += c2.Items.transition("x").targetValue || 0, l2 += c2.Items.transition("y").targetValue || 0), _get(_getPrototypeOf(NavigationManager.prototype), "isFullyOnScreen", this).call(this, {
          offsetX: r2,
          offsetY: l2
        });
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "NavigationManager";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return dt;
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(NavigationManager), "properties", this)), ["alwaysScroll", "neverScroll", "scrollIndex", "autoResizeWidth", "autoResizeHeight", "lazyUpCount", "lazyUpCountBuffer"]);
      }
    }]), NavigationManager;
  }();
  var yt = Object.freeze({
    __proto__: null,
    base: function base$M(t) {
      return {
        itemSpacing: t.layout.gutterX,
        scrollIndex: 0,
        alwaysScroll: false,
        neverScroll: false,
        itemTransition: _objectSpread(_objectSpread({}, t.animation.standardEntrance), {}, {
          duration: t.animation.duration.fast
        })
      };
    }
  });
  var ft = function(t) {
    _inherits(Row, _t);
    var i2 = _createSuper(Row);
    function Row() {
      return _classCallCheck(this, Row), i2.apply(this, arguments);
    }
    return _createClass(Row, [{
      key: "_isOnScreenForScrolling",
      value: function _isOnScreenForScrolling(t2) {
        if (!t2)
          return false;
        var i3 = a(t2);
        if (!Number.isFinite(i3))
          return false;
        var o2 = this.getTransitionXTargetValue(), r2 = this.core.renderContext.px, l2 = r2 + o2 + i3;
        return t2.transition("x") && (l2 -= t2.x - t2.transition("x").targetValue), l2 >= r2 && l2 + t2.w <= r2 + this.w;
      }
    }, {
      key: "_shouldScroll",
      value: function _shouldScroll() {
        var t2 = this.Items.childList.getIndex(this.prevSelected);
        if (this.lazyScroll && (this.selectedIndex < this.startLazyScrollIndex || this.selectedIndex > this.stopLazyScrollIndex || t2 < this.startLazyScrollIndex && this.selectedIndex === this.startLazyScrollIndex || t2 > this.stopLazyScrollIndex && this.selectedIndex === this.stopLazyScrollIndex))
          return true;
        var i3 = this.alwaysScroll || this._selectedPastAdded;
        if (!i3 && !this.neverScroll) {
          var o2 = this._isOnScreenForScrolling(this.selected);
          if (this.lazyScroll)
            i3 = !o2;
          else
            i3 = this.Items.childList.last && (this.shouldScrollLeft() || this.shouldScrollRight() || !o2);
        }
        return i3;
      }
    }, {
      key: "_getPrependedOffset",
      value: function _getPrependedOffset() {
        return this._selectedPastAdded = false, this.Items.x - this._totalAddedWidth;
      }
    }, {
      key: "_getLazyScrollX",
      value: function _getLazyScrollX(t2) {
        var i3 = this.Items.childList.getIndex(this.prevSelected);
        if (this._selectedPastAdded)
          return this._getPrependedOffset();
        if (this.selectedIndex <= this.startLazyScrollIndex)
          return this._getScrollX();
        if (this.selectedIndex >= this.stopLazyScrollIndex && this.selectedIndex < i3)
          return this.Items.x + (this.prevSelected.w + this.style.itemSpacing + (this.selected.extraItemSpacing || 0));
        if (t2 && this.selectedIndex > this.stopLazyScrollIndex)
          return -t2.x + this.prevSelected.w + this.style.itemSpacing + (this.selected.extraItemSpacing || 0);
        if (t2) {
          var o2, r2 = this.Items.childList.getIndex(t2), a2 = this.selected.x;
          if (-1 === r2)
            return;
          return r2 > this.selectedIndex ? o2 = -a2 : r2 < this.selectedIndex && (o2 = this.w - a2 - this.selected.w), o2;
        }
        return this._getScrollX();
      }
    }, {
      key: "_getScrollX",
      value: function _getScrollX() {
        if (this._selectedPastAdded)
          return this._getPrependedOffset();
        var t2, i3 = this.selectedIndex - this.scrollIndex;
        return (i3 = i3 < 0 ? 0 : i3) === this._firstFocusableIndex() && (i3 = 0), this.Items.children[i3] && (t2 = this.Items.children[i3].transition("x") ? -this.Items.children[i3].transition("x").targetValue : -this.Items.children[i3].x), t2;
      }
    }, {
      key: "_render",
      value: function _render(t2, i3) {
        var o2;
        this.plinko && i3 && i3.selected && (t2.selectedIndex = this._getIndexOfItemNear(t2, i3)), this._prevLastScrollIndex = this._lastScrollIndex, this.Items.children.length ? this._shouldScroll() && (o2 = this.lazyScroll && i3 ? this._getLazyScrollX(i3) : this._getScrollX()) : o2 = this.itemPosX, void 0 !== o2 && this.updatePositionOnAxis(this.Items, o2), this.onScreenEffect(this.onScreenItems);
      }
    }, {
      key: "_performRender",
      value: function _performRender() {
        this._render(this.selected, this.prevSelected);
      }
    }, {
      key: "_isOnScreen",
      value: function _isOnScreen(t2) {
        return !!t2 && this._isComponentHorizontallyVisible(t2);
      }
    }, {
      key: "onScreenEffect",
      value: function onScreenEffect() {
      }
    }, {
      key: "_totalAddedWidth",
      get: function get() {
        return this._totalAddedLength;
      }
    }, {
      key: "_getLazyScroll",
      value: function _getLazyScroll() {
        return !this.alwaysScroll && (void 0 !== this._lazyScroll ? this._lazyScroll : this.style.lazyScroll);
      }
    }, {
      key: "_getNeverScroll",
      value: function _getNeverScroll() {
        return !this.alwaysScroll && !this.lazyScroll && (void 0 !== this._neverScroll ? this._neverScroll : this.style.neverScroll);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Row";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return yt;
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Row), "_template", this).call(this)), {}, {
          direction: "row"
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Row), "properties", this)), ["lazyScroll", "startLazyScrollIndex", "stopLazyScrollIndex"]);
      }
    }]), Row;
  }();
  var gt = Object.freeze({
    __proto__: null,
    base: function base$L(t) {
      return {
        backgroundColor: t.color.interactiveNeutral,
        radius: t.radius.md,
        animation: {}
      };
    },
    mode: function mode$f(t) {
      return {
        focused: {
          backgroundColor: t.color.interactiveNeutralFocus,
          tone: {
            inverse: {
              backgroundColor: t.color.interactiveInverseFocus
            }
          }
        },
        disabled: {
          backgroundColor: t.color.fillNeutralDisabled
        }
      };
    },
    tone: function tone$m(t) {
      return {
        inverse: {
          backgroundColor: t.color.interactiveInverse
        }
      };
    }
  });
  var mt = function(i2) {
    _inherits(Surface, tt);
    var o2 = _createSuper(Surface);
    function Surface() {
      return _classCallCheck(this, Surface), o2.apply(this, arguments);
    }
    return _createClass(Surface, [{
      key: "innerH",
      get: function get() {
        return this.h;
      }
    }, {
      key: "innerW",
      get: function get() {
        return this.w;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateLayout(), this._updateScale();
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout() {
        this._Background.patch({
          texture: lightningjs_core_default.Tools.getRoundRect(this.innerW - 2, this.innerH - 2, this.style.radius, 0, null, true, this.style.backgroundColor)
        });
      }
    }, {
      key: "_updateScale",
      value: function _updateScale() {
        var t = this._isFocusedMode ? this.getFocusScale(this.w, this.h) : this.getUnfocusScale(this.w, this.h);
        this.applySmooth(this, {
          scale: t
        }, {
          scale: [t, this.style.animation]
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Background: {}
        };
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "Surface";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return gt;
      }
    }, {
      key: "properties",
      get: function get() {
        return [];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Background"];
      }
    }]), Surface;
  }();
  var vt = Object.freeze({
    __proto__: null,
    base: function base$K(t) {
      return {
        offsetY: t.spacer.xxs,
        offsetX: 0,
        textStyle: t.typography.body1
      };
    },
    tone: function tone$l(t) {
      return {
        neutral: {
          textStyle: {
            textColor: t.color.fillNeutral
          }
        },
        inverse: {
          textStyle: {
            textColor: t.color.fillInverse
          }
        },
        brand: {
          textStyle: {
            textColor: t.color.fillBrand
          }
        }
      };
    }
  });
  var xt = Object.freeze({
    __proto__: null,
    base: function base$J(t) {
      return {
        textY: 0,
        iconWidth: t.spacer.xxl + t.spacer.xs,
        iconHeight: t.spacer.xxl + t.spacer.xs,
        contentSpacing: t.spacer.md,
        marginBottom: t.typography.body1.lineHeight / -10,
        textStyle: _objectSpread(_objectSpread({}, t.typography.body1), {}, {
          verticalAlign: "bottom"
        }),
        maxLines: 1,
        justify: "flex-start"
      };
    }
  });
  var kt = function isText(t) {
    return "string" == typeof t || !!t.text;
  };
  var bt = function isIcon(t) {
    return !!t.icon;
  };
  var St = function(t) {
    _inherits(InlineContent, tt);
    var i2 = _createSuper(InlineContent);
    function InlineContent() {
      return _classCallCheck(this, InlineContent), i2.apply(this, arguments);
    }
    return _createClass(InlineContent, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(InlineContent.prototype), "_construct", this).call(this), this._maxLinesSuffix = "..";
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateContent(), this._waitForComponentLoad();
      }
    }, {
      key: "_updateContent",
      value: function _updateContent() {
        var t2 = this;
        this.childList.clear(), this._shouldTruncate && (this.alpha = 1e-3), this._parsedContent && this._parsedContent.length && (this.patch({
          flex: {
            direction: "row",
            wrap: !!this.contentWrap,
            justifyContent: null != this.justify ? this.justify : this.style.justify
          }
        }), this._parsedContent.forEach(function(i3, o2) {
          var r2 = o2 === t2._parsedContent.length - 1, a2 = {
            flexItem: _objectSpread(_objectSpread({}, t2.contentProperties), {}, {
              marginBottom: r2 ? 0 : t2._marginBottom,
              marginRight: r2 ? 0 : t2.contentProperties.marginRight || t2.style.contentSpacing
            })
          };
          if (kt(i3)) {
            var l2 = t2._parsedContent[o2 + 1];
            l2 && kt(l2) && (a2.flexItem.marginRight = 0), t2.childList.a(t2._createText(a2, i3));
          } else
            bt(i3) ? t2.childList.a(t2._createIcon(a2, i3)) : !function isBadge(t3) {
              return !!t3.badge;
            }(i3) ? i3.newline && t2.contentWrap && t2.childList.a({
              h: 0,
              w: t2.w
            }) : t2.childList.a(t2._createBadge(a2, i3.badge));
        }));
      }
    }, {
      key: "_waitForComponentLoad",
      value: function _waitForComponentLoad() {
        var t2 = this;
        this.children.length ? Promise.all(this.children.map(function(i3) {
          return new Promise(function(o2) {
            0 === i3.h && i3.w === t2.w ? o2() : i3.on("txLoaded", o2);
          });
        })).finally(function() {
          return t2._contentLoaded();
        }) : (this.h = 0, this._contentLoaded());
      }
    }, {
      key: "_notifyAncestors",
      value: function _notifyAncestors() {
        this.fireAncestors("$loadedInlineContent", this), this.signal("loadedInlineContent", this.finalW, this.multiLineHeight);
      }
    }, {
      key: "_contentLoaded",
      value: function _contentLoaded() {
        var t2 = this;
        this.children.length ? setTimeout(function() {
          t2.multiLineHeight = t2.finalH, t2.flex && t2.flex._layout && t2.flex._layout._lineLayouter && t2.flex._layout._lineLayouter._lines ? (t2.multiLineHeight = t2.style.textStyle.lineHeight * t2.flex._layout._lineLayouter._lines.length, t2.h = t2.multiLineHeight, t2._shouldTruncate && t2._renderMaxLines(), t2._notifyAncestors()) : t2._contentLoaded();
        }, 10) : this._notifyAncestors();
      }
    }, {
      key: "_renderMaxLines",
      value: function _renderMaxLines() {
        var t2 = this, i3 = this._calcChildrenDimensions();
        this.childList.clear();
        var o2 = false;
        i3.forEach(function(r2, a2) {
          if (!o2) {
            var l2 = i3[a2 + 1];
            if (l2) {
              var c2 = r2.line === t2.maxLines, u2 = c2 && l2.line > t2.maxLines && r2.hasSpaceForSuffix, h2 = c2 && r2.hasSpaceForSuffix && !l2.hasSpaceForSuffix, d2 = !l2 || u2 || h2;
              r2.line <= t2.maxLines && (d2 && a2 !== i3.length - 1 ? (t2.childList.add(t2._addSuffix(r2)), o2 = true) : t2.childList.add(r2.component));
            } else
              t2.childList.add(r2.component);
          }
        }), this.alpha = 1;
      }
    }, {
      key: "_calcChildrenDimensions",
      value: function _calcChildrenDimensions() {
        var t2 = this, i3 = measureTextWidth(_objectSpread(_objectSpread({}, this.style.textStyle), {}, {
          text: this.maxLinesSuffix
        })), o2 = 0, r2 = 1;
        return this.children.reduce(function(a2, l2) {
          var c2, u2, h2, d2 = l2;
          if (l2.w == t2.w && 0 === l2.h) {
            r2++, o2 = 0;
            var p2 = {
              type: "linebreak",
              component: d2,
              content: u2,
              line: r2,
              hasSpaceForSuffix: true
            };
            return a2.push(p2), a2;
          }
          kt(l2) ? (c2 = "text", u2 = l2.text.text, h2 = l2.texture.getRenderWidth()) : bt(l2) ? (c2 = "icon", h2 = l2.w) : "Badge" === l2.constructor.__componentName && (c2 = "badge", h2 = l2.w), o2 += h2, o2 += l2.flexItem.marginRight, Math.ceil(o2) >= t2.w && (r2++, o2 = h2);
          var _2 = Math.ceil(o2) + i3 <= t2.w, g2 = {
            type: c2,
            component: d2,
            content: u2,
            line: r2,
            hasSpaceForSuffix: _2
          };
          return a2.push(g2), a2;
        }, []);
      }
    }, {
      key: "_addSuffix",
      value: function _addSuffix(t2) {
        var i3, o2 = t2.type, r2 = t2.component, a2 = t2.content, l2 = -1 * r2.flexItem.marginRight;
        return "text" === o2 ? i3 = this._createText({
          flexItem: this.contentProperties
        }, "".concat(a2.trim()).concat(this.maxLinesSuffix)) : (this.childList.add(r2), i3 = this._createText({
          flexItem: _objectSpread(_objectSpread({}, this.contentProperties), {}, {
            marginLeft: l2
          })
        }, this.maxLinesSuffix)), i3;
      }
    }, {
      key: "_createIcon",
      value: function _createIcon(t2, i3) {
        var o2 = (this.textHeight > this.style.textStyle.lineHeight ? this.textHeight : this.style.textStyle.lineHeight) - this.style.iconHeight;
        return _objectSpread(_objectSpread({}, t2), {}, {
          type: st,
          y: o2,
          w: this.style.iconWidth,
          h: this.style.iconHeight,
          signals: {
            itemChanged: "_updateIconPosition"
          }
        }, i3);
      }
    }, {
      key: "_createText",
      value: function _createText(t2, i3) {
        var o2 = "string" == typeof i3.style ? this.customStyleMappings[i3.style] : i3.style;
        return _objectSpread(_objectSpread({}, t2), {}, {
          y: void 0 !== this.textY ? this.textY : this.style.textY,
          h: this.textHeight,
          text: _objectSpread(_objectSpread(_objectSpread({}, this.style.textStyle), o2), {}, {
            text: i3.text || i3
          })
        });
      }
    }, {
      key: "_createBadge",
      value: function _createBadge(t2, i3) {
        return _objectSpread(_objectSpread(_objectSpread({}, t2), {}, {
          y: this.badgeY || 0
        }, this.badgeProperties), {}, {
          type: ct,
          title: i3,
          signals: {
            loadedBadge: "_loadedBadge"
          }
        });
      }
    }, {
      key: "_updateIconPosition",
      value: function _updateIconPosition(t2) {
        t2.y = this.style.textStyle.lineHeight - t2.h;
      }
    }, {
      key: "_loadedBadge",
      value: function _loadedBadge(t2) {
        void 0 === this.badgeY && (t2.y = this.style.textStyle.lineHeight - t2.h);
      }
    }, {
      key: "_formatSpaces",
      value: function _formatSpaces(t2) {
        var i3 = /(.+?\s+)/;
        return flatten((t2 || []).reduce(function(t3, o2) {
          var r2 = o2;
          if (kt(o2)) {
            if ("object" === _typeof(o2)) {
              var a2 = o2.text.split(i3).map(function(t4) {
                return t4 && _objectSpread(_objectSpread({}, o2), {}, {
                  text: t4
                });
              });
              return t3.push.apply(t3, _toConsumableArray(a2)), t3;
            }
            r2 = o2.split(i3);
          }
          return t3.push(r2), t3;
        }, [])).map(function(t3, i4, o2) {
          return " " !== t3 && (" " === o2[i4 + 1] ? t3 + " " : t3);
        }).filter(Boolean);
      }
    }, {
      key: "_setContent",
      value: function _setContent(t2) {
        if (t2 !== this._content) {
          this._content = t2;
          var i3 = this._content;
          t2 && !Array.isArray(t2) && (i3 = function parseInlineContent() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", i4 = [];
            if (t3 && "string" == typeof t3 || t3.text) {
              var o2 = "string" == typeof t3 ? t3 : t3.text, r2 = /^{ICON:(.*?)?\|(.*?)?}$/g, a2 = /^{BADGE:(.*?)}$/g, l2 = /^{NEWLINE}$/g, c2 = /^{TEXT:(.*?)?\|(.*?)?}$/g, h2 = o2.split(u);
              h2 && h2.length && h2.forEach(function(t4) {
                var o3 = t4, u2 = a2.exec(t4), h3 = r2.exec(t4), d2 = l2.exec(t4), p2 = c2.exec(t4);
                u2 && u2[1] ? o3 = {
                  badge: u2[1]
                } : h3 && h3[1] ? o3 = {
                  title: h3[1],
                  icon: h3[2] || h3[1]
                } : d2 ? o3 = {
                  newline: true
                } : p2 && p2[1] && (o3 = {
                  text: p2[1],
                  style: p2[2]
                }), i4.push(o3);
              });
            }
            return i4;
          }(t2)), this._parsedContent = this._formatSpaces(i3);
        }
        return t2;
      }
    }, {
      key: "_setBadgeProperties",
      value: function _setBadgeProperties(t2) {
        if ("object" === _typeof(t2))
          return t2;
      }
    }, {
      key: "_getBadgeProperties",
      value: function _getBadgeProperties() {
        return this._badgeProperties || {};
      }
    }, {
      key: "_setContentProperties",
      value: function _setContentProperties(t2) {
        if ("object" === _typeof(t2))
          return t2;
      }
    }, {
      key: "_getContentProperties",
      value: function _getContentProperties() {
        return this._contentProperties || {};
      }
    }, {
      key: "_setCustomStyleMappings",
      value: function _setCustomStyleMappings(t2) {
        if ("object" === _typeof(t2))
          return t2;
      }
    }, {
      key: "_getCustomStyleMappings",
      value: function _getCustomStyleMappings() {
        return this._customStyleMappings || {};
      }
    }, {
      key: "_setMaxLines",
      value: function _setMaxLines(t2) {
        return t2 >= 1 ? Math.floor(t2) : 0;
      }
    }, {
      key: "textHeight",
      get: function get() {
        return this.style.textStyle.lineHeight || this.style.textStyle.fontSize;
      }
    }, {
      key: "_marginBottom",
      get: function get() {
        return void 0 !== this.contentProperties.marginBottom ? this.contentProperties.marginBottom : this.style.marginBottom ? this.style.marginBottom : 0;
      }
    }, {
      key: "_shouldTruncate",
      get: function get() {
        return this.contentWrap && this.maxLines;
      }
    }, {
      key: "announce",
      get: function get() {
        if (this._announce)
          return this._announce;
        var t2 = this._parsedContent && this._parsedContent.reduce(function(t3, i3) {
          return "string" == typeof i3 ? t3 += i3 : i3.announce ? t3 += i3.announce : i3.text ? t3 += i3.text : i3.title ? t3 += i3.title : i3.badge && (t3 += i3.badge), t3 + " ";
        }, "");
        return t2 ? t2.replace(/\s+(?=\s)|\s$/g, "") : "";
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(InlineContent.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "properties",
      get: function get() {
        return ["content", "contentProperties", "badgeY", "badgeProperties", "justify", "contentWrap", "customStyleMappings", "maxLines", "maxLinesSuffix"];
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "InlineContent";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return xt;
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "iconH",
          curr: "iconHeight"
        }, {
          prev: "iconW",
          curr: "iconWidth"
        }];
      }
    }]), InlineContent;
  }();
  var Ct = Object.freeze({
    __proto__: null,
    base: function base$I(t) {
      return {
        fadeWidth: 100,
        offset: t.spacer.xxl,
        shouldSmooth: false,
        textStyle: t.typography.body1
      };
    }
  });
  var wt = function(i2) {
    _inherits(FadeShader, lightningjs_core_default.shaders.WebGLDefaultShader);
    var o2 = _createSuper(FadeShader);
    function FadeShader(t) {
      var i3;
      return _classCallCheck(this, FadeShader), (i3 = o2.call(this, t))._margin = {
        left: 0,
        right: 0
      }, i3;
    }
    return _createClass(FadeShader, [{
      key: "positionLeft",
      set: function set2(t) {
        this._positionLeft = t;
      }
    }, {
      key: "positionRight",
      set: function set2(t) {
        this._positionRight = t;
      }
    }, {
      key: "setupUniforms",
      value: function setupUniforms(t) {
        _get(_getPrototypeOf(FadeShader.prototype), "setupUniforms", this).call(this, t);
        var i3 = t.shaderOwner;
        0 === this._positionLeft && (this._positionLeft = 1e-3), 0 === this._positionRight && (this._positionRight = 1e-3);
        var o3 = this.ctx.stage.getRenderPrecision();
        this._setUniform("margin", [this._positionLeft * o3, this._positionRight * o3], this.gl.uniform1fv), this._setUniform("resolution", new Float32Array([i3._w * o3, i3._h * o3]), this.gl.uniform2fv);
      }
    }]), FadeShader;
  }();
  wt.fragmentShaderSource = "\n  #ifdef GL_ES\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision lowp float;\n  # endif\n  #endif\n\n  #define PI 3.14159265359\n\n  varying vec2 vTextureCoord;\n  varying vec4 vColor;\n\n  uniform sampler2D uSampler;\n  uniform vec2 resolution;\n  uniform float margin[2];\n\n  void main() {\n      vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n      vec2 halfRes = 0.5 * resolution.xy;\n      vec2 point = vTextureCoord.xy * resolution;\n\n\n      vec2 pos1 = vec2(point.x, point.y);\n      vec2 pos2 = pos1;\n      pos2.x += margin[0];\n\n      vec2 d = pos2 - pos1;\n      float t = dot(pos1, d) / dot(d, d);\n      t = smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));\n\n      vec2 pos3 = vec2(vTextureCoord.x * resolution.x, vTextureCoord.y);\n      pos3.x -= resolution.x - margin[1];\n      vec2 pos4 = vec2(vTextureCoord.x + margin[1], vTextureCoord.y);\n\n      vec2 d2 = pos4 - pos3;\n      float t2 = dot(pos3, d2) / dot(d2, d2);\n      t2 = smoothstep(0.0, 1.0, clamp(t2, 0.0, 1.0));\n\n      color = mix(vec4(0.0), color, t);\n      color = mix(color, vec4(0.0), t2);\n\n      gl_FragColor = color;\n  }\n";
  var Tt = function(t) {
    _inherits(Marquee, tt);
    var i2 = _createSuper(Marquee);
    function Marquee() {
      return _classCallCheck(this, Marquee), i2.apply(this, arguments);
    }
    return _createClass(Marquee, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Marquee.prototype), "_construct", this).call(this), this._scrolling = false, this._autoStart = false, this._centerAlign = false;
      }
    }, {
      key: "_init",
      value: function _init() {
        this._Content.on("txLoaded", this._updateContentTexture.bind(this)), _get(_getPrototypeOf(Marquee.prototype), "_init", this).call(this);
      }
    }, {
      key: "_updateContentTexture",
      value: function _updateContentTexture() {
        var t2 = this._restartScrolling;
        this.stopScrolling(), this._currentTexture.h || (this._ContentClipper.h = this._currentTexture.text && this._currentTexture.text.lineHeight ? this._currentTexture.text.lineHeight : this._Content.finalH), this._shouldClip ? this._updateShader() : (this._ContentClipper.shader = null, this._positionTexture()), t2 && this.startScrolling(), this.signal("marqueeContentLoaded");
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateColor(), this._updateTexture(), this._updateShader(), this._restartScrolling && this.startScrolling();
      }
    }, {
      key: "_restartScrolling",
      get: function get() {
        return this.autoStart || this._scrolling || this._shouldTryScrolling;
      }
    }, {
      key: "_updateColor",
      value: function _updateColor() {
        this.color && (this._Content.smooth = {
          color: h.getValidColor(this.color)
        });
      }
    }, {
      key: "_currentTexture",
      get: function get() {
        return this._Content.text || this._Content.texture || {};
      }
    }, {
      key: "_updateTexture",
      value: function _updateTexture() {
        var t2 = {
          rtt: true
        };
        this.contentTexture ? t2.texture = this.contentTexture : this.title && (t2.text = _objectSpread(_objectSpread(_objectSpread({}, this.style.textStyle), this.title), {}, {
          text: this.textContent
        })), this.patch({
          ContentClipper: {
            w: this.w + 14,
            ContentBox: {
              Content: t2,
              ContentLoopTexture: {}
            }
          }
        }), this.signal("marqueeContentLoaded");
      }
    }, {
      key: "_updateShader",
      value: function _updateShader() {
        this._ContentClipper.patch({
          w: this.w > 0 ? this.w + this.style.fadeWidth / 2 : 0,
          shader: {
            type: wt,
            positionLeft: 0,
            positionRight: this.style.fadeWidth
          },
          rtt: true
        });
      }
    }, {
      key: "_updateAnimation",
      value: function _updateAnimation() {
        this._scrollAnimation && this._scrollAnimation.stopNow(), this._scrollAnimation = this.animation({
          duration: this._loopWidth / 50,
          delay: isNaN(this.delay) ? 1.5 : this.delay,
          repeat: isNaN(this.repeat) ? -1 : this.repeat,
          actions: [{
            t: "ContentBox",
            p: "x",
            v: {
              sm: 0,
              0: {
                v: 0
              },
              0.5: {
                v: -(this._loopWidth + this.style.offset)
              }
            }
          }, {
            t: "ContentClipper",
            p: "shader.positionLeft",
            v: {
              sm: 0,
              0: {
                v: 0
              },
              0.1: {
                v: this.style.fadeWidth
              },
              0.4: {
                v: this.style.fadeWidth
              },
              0.5: {
                v: 0
              }
            }
          }]
        });
      }
    }, {
      key: "_positionTexture",
      value: function _positionTexture() {
        var t2 = this._shouldCenter() ? (this.w - this._textRenderedW) / 2 : 0;
        this.style.shouldSmooth ? this._ContentBox.smooth = {
          x: t2
        } : this._ContentBox.x = t2;
      }
    }, {
      key: "startScrolling",
      value: function startScrolling() {
        this._Content.off("txLoaded", this.startScrolling.bind(this)), this._shouldTryScrolling = true, 0 === this._textRenderedW && this._Content.on("txLoaded", this.startScrolling.bind(this)), this._shouldClip ? (this._scrolling = true, this._ContentLoopTexture.x = this._loopWidth + this.style.offset, this._ContentLoopTexture.texture = this._Content.getTexture(), this._updateAnimation(), this._scrollAnimation.start()) : this._scrolling = false;
      }
    }, {
      key: "stopScrolling",
      value: function stopScrolling() {
        this._shouldTryScrolling = false, this._scrolling = false, this._scrollAnimation && (this._scrollAnimation.stopNow(), this._ContentLoopTexture.texture = null);
      }
    }, {
      key: "_shouldClip",
      get: function get() {
        return this._textRenderedW > this.w - this.style.fadeWidth / 4;
      }
    }, {
      key: "_shouldCenter",
      value: function _shouldCenter() {
        return this._centerAlign || this._Content.text && "center" === this._Content.text.textAlign;
      }
    }, {
      key: "_setAutoStart",
      value: function _setAutoStart(t2) {
        return this.autoStart && !t2 && this._updateContentTexture(), t2;
      }
    }, {
      key: "_setCenterAlign",
      value: function _setCenterAlign(t2) {
        return this._centerAlign = t2, this._updateContentTexture(), t2;
      }
    }, {
      key: "textContent",
      get: function get() {
        var t2, i3, o2;
        return null !== (t2 = null !== (i3 = null === (o2 = this.title) || void 0 === o2 ? void 0 : o2.text) && void 0 !== i3 ? i3 : this.title) && void 0 !== t2 ? t2 : "";
      }
    }, {
      key: "_loopWidth",
      get: function get() {
        return this.overrideLoopX || this._textRenderedW;
      }
    }, {
      key: "_textRenderedW",
      get: function get() {
        return this._Content.renderWidth;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this.title && this.title.text;
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Marquee.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ContentClipper: {
            boundsMargin: [],
            ContentBox: {
              Content: {},
              ContentLoopTexture: {}
            }
          }
        };
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "Marquee";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ct;
      }
    }, {
      key: "tags",
      get: function get() {
        return ["ContentClipper", {
          name: "ContentBox",
          path: "ContentClipper.ContentBox"
        }, {
          name: "Content",
          path: "ContentClipper.ContentBox.Content"
        }, {
          name: "ContentLoopTexture",
          path: "ContentClipper.ContentBox.ContentLoopTexture"
        }];
      }
    }, {
      key: "properties",
      get: function get() {
        return ["autoStart", "title", "contentTexture", "color", "centerAlign", "delay", "repeat", "overrideLoopX"];
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "fadeW",
          curr: "fadeWidth"
        }];
      }
    }]), Marquee;
  }();
  var It = Object.entries(Object.getOwnPropertyDescriptors(lightningjs_core_default.textures.TextTexture.prototype)).reduce(function(i2, o2) {
    var r2 = _slicedToArray(o2, 1)[0], a2 = lightningjs_core_default.textures.TextTexture.prototype[r2];
    return r2.startsWith("_") || ["undefined", "function"].includes(_typeof(a2)) ? i2 : _objectSpread(_defineProperty({}, r2, a2), i2);
  }, {});
  var At = function(t) {
    _inherits(TextBox, tt);
    var i2 = _createSuper(TextBox);
    function TextBox() {
      return _classCallCheck(this, TextBox), i2.apply(this, arguments);
    }
    return _createClass(TextBox, [{
      key: "_setDimensions",
      value: function _setDimensions(t2, i3) {
        var o2 = t2, r2 = i3;
        this._isInlineContent || (o2 = this._Text.texture.getRenderWidth(), r2 = this._Text.texture.getRenderHeight());
        var a2 = this.w !== o2 || this.h !== r2;
        o2 && r2 && a2 && (this.h = r2, this.fixed || (this.w = o2), !this.hideOnLoad && this.alpha < 1 && (this.alpha = 1), this._notifyAncestors());
      }
    }, {
      key: "_setContent",
      value: function _setContent(t2) {
        return this._isInlineContent = false, (Array.isArray(t2) || h.isMarkupString(t2)) && (this._isInlineContent = true), "string" == typeof t2 || this._isInlineContent ? t2 : "";
      }
    }, {
      key: "title",
      get: function get() {
        return this._content;
      }
    }, {
      key: "_notifyAncestors",
      value: function _notifyAncestors() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.w, i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.h;
        this.fireAncestors("$itemChanged"), this.signal("textBoxChanged", {
          w: t2,
          h: i3
        });
      }
    }, {
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(TextBox.prototype), "_construct", this).call(this), this._marqueeContentListenerAttached = false, this._marqueeOverrideLoopX = void 0, this._resetMarqueePromise();
      }
    }, {
      key: "_update",
      value: function _update() {
        this.content ? (this._isInlineContent ? this._updateInlineContent() : this._updateText(), this._updateMarquee()) : (this._Text || this._InlineContent) && (this.w = this.h = 0, this._notifyAncestors(), this._updateMarquee(), this.patch({
          Text: void 0,
          InlineContent: void 0
        }));
      }
    }, {
      key: "_updateInlineContent",
      value: function _updateInlineContent() {
        var t2 = this;
        this.patch({
          Text: void 0
        });
        var i3 = St.properties.reduce(function(i4, o2) {
          return null != t2[o2] && (i4[o2] = t2[o2]), i4;
        }, {
          style: _objectSpread(_objectSpread({}, this.style), {}, {
            textStyle: this._textStyleSet
          })
        });
        this._textStyleSet.wordWrapWidth && (i3.w = this._textStyleSet.wordWrapWidth, i3.rtt = true), this._textStyleSet.maxLines && (i3.maxLines = this._textStyleSet.maxLines), this._textStyleSet.maxLinesSuffix && (i3.maxLinesSuffix = this._textStyleSet.maxLinesSuffix), this.patch({
          alpha: 1,
          InlineContent: _objectSpread(_objectSpread({
            type: St,
            w: this.w
          }, i3), {}, {
            signals: {
              loadedInlineContent: "_setDimensions"
            }
          })
        });
      }
    }, {
      key: "_updateText",
      value: function _updateText() {
        this.patch({
          InlineContent: void 0
        }), this._Text || (this.patch({
          Text: {}
        }), this._Text.on("txLoaded", this._setDimensions.bind(this)));
        var t2 = this._textStyleSet;
        this._Text && this._Text.patch({
          y: this.style.offsetY,
          x: this.style.offsetX,
          text: _objectSpread(_objectSpread({}, It), t2)
        });
      }
    }, {
      key: "marqueeOverrideLoopX",
      get: function get() {
        return this._marqueeOverrideLoopX;
      },
      set: function set2(t2) {
        this._marqueeOverrideLoopX = t2, this._Marquee && (this._Marquee.overrideLoopX = this._marqueeOverrideLoopX), this._resolveAwaitMarqueeOverrideX();
      }
    }, {
      key: "_resetMarqueePromise",
      value: function _resetMarqueePromise() {
        var t2 = this;
        this._awaitMarqueeOverrideX = new Promise(function(i3, o2) {
          t2._resolveAwaitMarqueeOverrideX = i3, t2._rejectAwaitMarqueeOverrideX = o2;
        });
      }
    }, {
      key: "_loadedMarqueeContent",
      value: function _loadedMarqueeContent() {
        this.signal("willMarquee", this._Marquee);
      }
    }, {
      key: "_updateMarquee",
      value: function _updateMarquee() {
        var t2 = this;
        if (this._Marquee && !this.marquee && this._toggleMarquee(this._contentTag), this.marquee) {
          this._resetMarqueePromise();
          var i3 = _objectSpread(_objectSpread({}, this.marqueeProps), {}, {
            w: this._textStyleSet.wordWrapWidth || this.w,
            h: this.h,
            y: this.style.offsetY,
            x: this.style.offsetX,
            signals: {
              marqueeContentLoaded: "_loadedMarqueeContent"
            }
          });
          this._Marquee || (i3.type = Tt), this._isInlineContent ? (this._InlineContent.w = 0, i3.title = void 0, i3.contentTexture = this._contentTag.getTexture(), i3.w = this._textStyleSet.wordWrapWidth || this.w) : (i3.contentTexture = void 0, i3.title = _objectSpread(_objectSpread({
            text: this._contentTag.text.text
          }, this._textStyleSet), {}, {
            wordWrapWidth: 0,
            maxLines: 1
          })), this.patch({
            Marquee: i3
          }), this._marqueeContentListenerAttached || (this._marqueeContentListenerAttached = true), void 0 !== this._marqueeOverrideLoopX ? this._awaitMarqueeOverrideX.then(function() {
            t2._toggleMarquee(t2._contentTag);
          }) : this._toggleMarquee(this._contentTag);
        }
      }
    }, {
      key: "_getMarqueeProps",
      value: function _getMarqueeProps() {
        var t2;
        return null !== (t2 = this._marqueeProps) && void 0 !== t2 ? t2 : {};
      }
    }, {
      key: "_textStyleSet",
      get: function get() {
        var t2 = this, i3 = _objectSpread(_objectSpread({}, this.theme.typography.body1), null !== this.style.textStyle && "object" === _typeof(this.style.textStyle) && Object.keys(this.style.textStyle) ? this.style.textStyle : this.theme.typography[this.style.textStyle]);
        return this.constructor.properties.forEach(function(o2) {
          "fontStyle" !== o2 && void 0 !== t2["_".concat(o2)] && (i3["content" === o2 ? "text" : o2] = t2["_".concat(o2)]);
        }), this.w && !this._isInlineContent && !this.style.textStyle.wordWrapWidth && this.fixed && (i3.wordWrapWidth = this.w), i3;
      }
    }, {
      key: "_contentTag",
      get: function get() {
        return this._isInlineContent ? this._InlineContent : this._Text;
      }
    }, {
      key: "_toggleMarquee",
      value: function _toggleMarquee(t2) {
        this.marquee ? (t2.alpha = 1e-3, this._Marquee.alpha = 1, this._Marquee.startScrolling()) : (t2.alpha = 1, this._Marquee.alpha = 1e-3, this._Marquee.stopScrolling());
      }
    }, {
      key: "toggleMarquee",
      value: function toggleMarquee() {
        this._toggleMarquee(this._contentTag);
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || (this._isInlineContent && this._InlineContent ? this._InlineContent.announce : this.content);
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(TextBox.prototype), "announce", t2, this, true);
      }
    }, {
      key: "smooth",
      set: function set2(t2) {
        I.warn("warning: value smoothing is known to cause bugs with the TextBox - patch updated values instead."), _set(_getPrototypeOf(TextBox.prototype), "smooth", t2, this, true);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          alpha: 1e-3
        };
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "TextBox";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return vt;
      }
    }, {
      key: "tags",
      get: function get() {
        return ["InlineContent", "Marquee", "Text"];
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(St.properties), ["content", "fixed", "marquee", "marqueeProps", "hideOnLoad"]);
      }
    }]), TextBox;
  }();
  var Pt = function(t) {
    _inherits(Button, mt);
    var i2 = _createSuper(Button);
    function Button() {
      return _classCallCheck(this, Button), i2.apply(this, arguments);
    }
    return _createClass(Button, [{
      key: "_update",
      value: function _update() {
        this._updatePrefix(), this._updateTitle(), this._updateSuffix(), this._updateAllPositioning(), this._updateTruncation();
      }
    }, {
      key: "_updateAllPositioning",
      value: function _updateAllPositioning() {
        this._updatePositions(), this._updateContentDimensions(), this._updateSurfaceDimensions(), this._updateContentPosition(), _get(_getPrototypeOf(Button.prototype), "_update", this).call(this);
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        this._updateAllPositioning(), this._updateTruncation();
      }
    }, {
      key: "_onTitleTextBoxChanged",
      value: function _onTitleTextBoxChanged() {
        this._updateAllPositioning();
      }
    }, {
      key: "_updatePositions",
      value: function _updatePositions() {
        this._hasPrefix && (this._Prefix.x = this._prefixX), this._hasTitle && (this._TextWrapper.x = this._titleX), this._hasSuffix && (this._Suffix.x = this._suffixX);
      }
    }, {
      key: "_updatePrefix",
      value: function _updatePrefix() {
        var t2 = JSON.stringify(this.prefix);
        if (this.prefix) {
          var i3 = {
            style: {
              itemSpacing: this.style.itemSpacing
            }
          };
          this._Prefix || (i3 = _objectSpread(_objectSpread({}, this._rowProps), i3)), this._Content.patch({
            Prefix: i3
          }), this._updatePrefixSuffixStyles("prefix");
        } else
          this._Content.patch({
            Prefix: void 0
          });
        this._prevPrefix = t2;
      }
    }, {
      key: "_updatePrefixSuffixStyles",
      value: function _updatePrefixSuffixStyles() {
        var t2 = this, i3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "prefix", o2 = {
          prefix: {
            tag: this._Prefix,
            prop: this.prefix,
            prevProp: this._prevPrefix
          },
          suffix: {
            tag: this._Suffix,
            prop: this.suffix,
            prevProp: this._prevSuffix
          }
        }, r2 = o2[i3], a2 = r2.tag, l2 = r2.prop, c2 = o2[i3].prevProp, u2 = JSON.stringify(l2);
        u2 !== c2 ? (c2 = u2, a2.items = this._addButtonProps(l2)) : a2.Items.children.forEach(function(i4, o3) {
          i4.color = Array.isArray(l2) ? l2[o3].color : l2.color, i4.style = _objectSpread(_objectSpread({}, i4.style), {}, {
            color: t2.style.contentColor
          });
        });
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        if (this._hasTitle) {
          var t2 = {
            content: this.title,
            style: {
              textStyle: this.style.textStyle
            }
          };
          this._Title || (t2 = _objectSpread({
            type: At,
            mountY: 0.5,
            y: function y(t3) {
              return t3 / 2;
            },
            signals: {
              textBoxChanged: "_onTitleTextBoxChanged"
            }
          }, t2)), this._Content.patch({
            TextWrapper: {
              mountY: 0.5,
              Title: t2
            }
          });
        } else
          this._Content.patch({
            TextWrapper: {
              Title: void 0
            }
          });
      }
    }, {
      key: "_updateSuffix",
      value: function _updateSuffix() {
        if (this.suffix) {
          var t2 = {
            style: {
              itemSpacing: this.style.itemSpacing
            }
          };
          this._Suffix || (t2 = _objectSpread(_objectSpread({}, this._rowProps), t2)), this._Content.patch({
            Suffix: t2
          }), this._updatePrefixSuffixStyles("suffix");
        } else
          this._Content.patch({
            Suffix: void 0
          });
      }
    }, {
      key: "_updateTruncation",
      value: function _updateTruncation() {
        this._Title && this._Title.patch({
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
              wordWrap: this.fixed,
              wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
            })
          }
        });
      }
    }, {
      key: "_updateContentDimensions",
      value: function _updateContentDimensions() {
        var t2 = {}, i3 = this.h / 2;
        this._Content.transition("w").targetValue !== this._contentW && (this._Content.w = this._contentW), this._Content.y !== i3 && (t2.y = i3), Object.keys(t2).length > 0 && this._Content.patch(t2);
      }
    }, {
      key: "_updateContentPosition",
      value: function _updateContentPosition() {
        this._Content.patch(this._contentProps);
      }
    }, {
      key: "_updateSurfaceDimensions",
      value: function _updateSurfaceDimensions() {
        var t2 = this.w;
        (t2 = this.fixed ? this._w : this._calcDynamicWidth()) !== this.w && (this.w = t2), this._hSetByUser || this.style.h || (this._h = this.style.textStyle.lineHeight + 2 * this.style.paddingY), this.fireAncestors("$itemChanged");
      }
    }, {
      key: "_calcDynamicWidth",
      value: function _calcDynamicWidth() {
        return !this._hasTitle && (this._hasPrefix || this._hasSuffix) || this._Title && !this._Title.visible && (this._hasPrefix || this._hasSuffix) ? this._contentW + this._paddingX : Math.max(this._contentW + this._paddingX, this.style.minWidth);
      }
    }, {
      key: "_addButtonProps",
      value: function _addButtonProps(t2) {
        var i3 = this;
        return (Array.isArray(t2) ? t2 : [t2]).map(function(t3) {
          return _objectSpread(_objectSpread(_objectSpread({}, i3._buttonProps), t3), {}, {
            style: _objectSpread({
              color: i3.style.contentColor
            }, t3.style)
          });
        });
      }
    }, {
      key: "_getJustify",
      value: function _getJustify() {
        return this._justify ? this._justify : this.style.justify;
      }
    }, {
      key: "_contentProps",
      get: function get() {
        var t2, i3;
        switch (this.justify) {
          case "left":
            t2 = 0, i3 = this._paddingLeft;
            break;
          case "right":
            t2 = 1, i3 = this.w - this._paddingRight;
            break;
          default:
            t2 = 0.5, i3 = this.w / 2;
        }
        return {
          mountX: t2,
          x: i3
        };
      }
    }, {
      key: "_buttonProps",
      get: function get() {
        return {
          centerInParent: true,
          mode: this.mode
        };
      }
    }, {
      key: "_hasPrefix",
      get: function get() {
        return !(!this.prefix || !Object.keys(this.prefix).length);
      }
    }, {
      key: "_prefixW",
      get: function get() {
        return this._hasPrefix ? this._Prefix.w : 0;
      }
    }, {
      key: "_prefixX",
      get: function get() {
        return 0;
      }
    }, {
      key: "_hasTitle",
      get: function get() {
        return !!this.title;
      }
    }, {
      key: "_titleW",
      get: function get() {
        return this._hasTitle && this._Title && this._Title._Text && this._Title.visible ? this._Title.w : 0;
      }
    }, {
      key: "_titleX",
      get: function get() {
        return this._hasPrefix ? this._prefixW + this.style.contentSpacing : 0;
      }
    }, {
      key: "_hasSuffix",
      get: function get() {
        return !(!this.suffix || !Object.keys(this.suffix).length);
      }
    }, {
      key: "_suffixW",
      get: function get() {
        return this._hasSuffix ? this._Suffix.w : 0;
      }
    }, {
      key: "_suffixX",
      get: function get() {
        return this._hasTitle ? this._titleW + this._TextWrapper.x + this.style.contentSpacing : this._hasPrefix ? this._prefixW + this.style.itemSpacing : 0;
      }
    }, {
      key: "_contentW",
      get: function get() {
        return this._hasSuffix ? this._suffixX + this._suffixW : this._hasTitle && this._Title && this._Title.visible ? this._titleX + this._titleW : this._hasPrefix ? this._prefixX + this._prefixW : 0;
      }
    }, {
      key: "_rowProps",
      get: function get() {
        return {
          type: ft,
          mountY: 0.5,
          autoResizeHeight: true,
          autoResizeWidth: true
        };
      }
    }, {
      key: "_totalTitlePaddingX",
      get: function get() {
        var t2 = 0;
        return this._hasPrefix && (t2 += this.style.contentSpacing), this._hasSuffix && (t2 += this.style.contentSpacing), t2;
      }
    }, {
      key: "_fixedWordWrapWidth",
      get: function get() {
        var t2 = this.w, i3 = this._paddingX + this._prefixW + this._suffixW + this._totalTitlePaddingX;
        return Math.max(1, t2 - i3);
      }
    }, {
      key: "announce",
      get: function get() {
        if (this._announce)
          return this._announce;
        var t2 = [];
        return this.title && t2.push(this.title), t2.push(this._announceComponentName), this._hasPrefix && this._Prefix.items.length && t2.push.apply(t2, _toConsumableArray(this._Prefix.items.map(function(t3) {
          return t3.announce;
        }))), this._hasSuffix && this._Suffix.items.length && t2.push.apply(t2, _toConsumableArray(this._Suffix.items.map(function(t3) {
          return t3.announce;
        }))), t2;
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Button.prototype), "announce", t2, this, true);
      }
    }, {
      key: "_announceComponentName",
      get: function get() {
        return Button.__componentName;
      }
    }, {
      key: "_paddingX",
      get: function get() {
        return this._paddingLeft + this._paddingRight;
      }
    }, {
      key: "_paddingLeft",
      get: function get() {
        return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
      }
    }, {
      key: "_paddingRight",
      get: function get() {
        return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Button";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return ut;
      }
    }, {
      key: "properties",
      get: function get() {
        return ["fixed", "justify", "prefix", "suffix", "title"];
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "titlePadding",
          curr: "contentSpacing"
        }];
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Button), "tags", this)), ["Content", {
          name: "TextWrapper",
          path: "Content.TextWrapper"
        }, {
          name: "Title",
          path: "Content.TextWrapper.Title"
        }, {
          name: "Prefix",
          path: "Content.Prefix"
        }, {
          name: "Suffix",
          path: "Content.Suffix"
        }]);
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Button), "_template", this).call(this)), {}, {
          Content: {
            mount: 0.5,
            x: function x(t2) {
              return t2 / 2;
            },
            y: function y(t2) {
              return t2 / 2;
            },
            zIndex: 2
          }
        });
      }
    }]), Button;
  }();
  var Lt = Object.freeze({
    __proto__: null,
    base: function base$H(t) {
      return {
        minWidth: getWidthByColumnSpan(t, 1),
        paddingX: t.spacer.xxl,
        paddingXNoTitle: t.spacer.lg,
        paddingY: t.spacer.lg,
        textStyle: t.typography.button2
      };
    }
  });
  var Bt = function(t) {
    _inherits(ButtonSmall, Pt);
    var i2 = _createSuper(ButtonSmall);
    function ButtonSmall() {
      return _classCallCheck(this, ButtonSmall), i2.apply(this, arguments);
    }
    return _createClass(ButtonSmall, null, [{
      key: "__componentName",
      get: function get() {
        return "ButtonSmall";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Lt;
      }
    }]), ButtonSmall;
  }();
  var Ot = Object.freeze({
    __proto__: null,
    base: function base$G(t) {
      return {
        height: 12 * t.spacer.xxl,
        paddingHorizontal: t.spacer.xl,
        paddingVertical: t.spacer.xl,
        radius: t.radius.md,
        titleTextStyle: _objectSpread(_objectSpread({}, t.typography.headline1), {}, {
          wordWrap: true,
          maxLines: 2,
          textColor: t.color.textNeutral
        }),
        width: h.getWidthByUpCount(t, 6)
      };
    },
    mode: function mode$e(t) {
      return {
        focused: {
          tone: {
            neutral: {
              backgroundColor: t.color.interactiveNeutralFocusSoft
            },
            inverse: {
              backgroundColor: t.color.interactiveInverseFocusSoft
            },
            brand: {
              backgroundColor: t.color.interactiveBrandFocusSoft
            }
          }
        },
        disabled: {
          titleTextStyle: {
            textColor: t.color.textNeutralDisabled
          }
        }
      };
    }
  });
  var Wt = function(t) {
    _inherits(Card, mt);
    var i2 = _createSuper(Card);
    function Card() {
      return _classCallCheck(this, Card), i2.apply(this, arguments);
    }
    return _createClass(Card, [{
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(Card.prototype), "_update", this).call(this), this._updateTitle(), this._updatePositions();
      }
    }, {
      key: "_updatePositions",
      value: function _updatePositions() {
        this._updateTitlePosition();
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        this._Title.patch({
          content: this.title,
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.titleTextStyle), {}, {
              wordWrapWidth: this._calculateTextWidth()
            })
          }
        });
      }
    }, {
      key: "_calculateTextWidth",
      value: function _calculateTextWidth() {
        return this.w - 2 * this.style.paddingHorizontal;
      }
    }, {
      key: "_updateTitlePosition",
      value: function _updateTitlePosition() {
        this._Title.x = this.style.paddingHorizontal, this._Title.y = this.style.paddingVertical;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this._Title && this._Title.announce;
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Card.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Card";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ot;
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Card), "properties", this)), ["title"]);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Card), "tags", this)), ["Title"]);
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Card), "_template", this).call(this)), {}, {
          Title: {
            type: At,
            signals: {
              textBoxChanged: "_updatePositions"
            }
          }
        });
      }
    }]), Card;
  }();
  var jt = Object.freeze({
    __proto__: null,
    base: function base$F(t) {
      return {
        descriptionTextStyle: _objectSpread(_objectSpread({}, t.typography.body2), {}, {
          textColor: t.color.textNeutralSecondary,
          wordWrap: true,
          maxLines: 3
        }),
        detailsTextStyle: _objectSpread(_objectSpread({}, t.typography.body3), {}, {
          textColor: t.color.textNeutral,
          wordWrap: true,
          maxLines: 1
        })
      };
    },
    mode: function mode$d(t) {
      return {
        disabled: {
          descriptionTextStyle: {
            textColor: t.color.textNeutralDisabled
          },
          detailsTextStyle: {
            textColor: t.color.textNeutralDisabled
          }
        }
      };
    }
  });
  var Mt = function(t) {
    _inherits(CardTitle, Wt);
    var i2 = _createSuper(CardTitle);
    function CardTitle() {
      return _classCallCheck(this, CardTitle), i2.apply(this, arguments);
    }
    return _createClass(CardTitle, [{
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(CardTitle.prototype), "_update", this).call(this), this._updateDescription(), this._updateDetails(), this._updatePositions();
      }
    }, {
      key: "_updatePositions",
      value: function _updatePositions() {
        _get(_getPrototypeOf(CardTitle.prototype), "_updatePositions", this).call(this), this._updateDescriptionPosition(), this._updateDetailsPosition();
      }
    }, {
      key: "_updateDescription",
      value: function _updateDescription() {
        this._Description.patch({
          content: this.description,
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.descriptionTextStyle), {}, {
              wordWrapWidth: this._calculateTextWidth()
            })
          }
        });
      }
    }, {
      key: "_updateDescriptionPosition",
      value: function _updateDescriptionPosition() {
        this._Description.x = this.style.paddingHorizontal, this._Description.y = this.style.paddingVertical + this._Title.h;
      }
    }, {
      key: "_updateDetails",
      value: function _updateDetails() {
        this._Details.patch({
          content: this.details,
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.detailsTextStyle), {}, {
              wordWrapWidth: this._calculateTextWidth()
            })
          }
        });
      }
    }, {
      key: "_updateDetailsPosition",
      value: function _updateDetailsPosition() {
        this._Details.x = this.style.paddingHorizontal, this._Details.y = this.h - this.style.paddingVertical;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || [this._Title && this._Title.announce, this._Description && this._Description.announce, this._Details && this._Details.announce];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(CardTitle.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "CardTitle";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return jt;
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardTitle), "tags", this)), ["Description", "Details"]);
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardTitle), "properties", this)), ["description", "details"]);
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(CardTitle), "_template", this).call(this)), {}, {
          Description: {
            type: At,
            signals: {
              textBoxChanged: "_updatePositions"
            }
          },
          Details: {
            type: At,
            mountY: 1
          }
        });
      }
    }]), CardTitle;
  }();
  var Rt = Object.freeze({
    __proto__: null,
    base: function base$E(t) {
      return {
        descriptionTextStyle: _objectSpread(_objectSpread({}, t.typography.body2), {}, {
          textColor: t.color.textNeutralSecondary,
          wordWrap: true,
          maxLines: 8
        }),
        height: 15 * t.spacer.xxxl,
        subtitleTextStyle: _objectSpread(_objectSpread({}, t.typography.body3), {}, {
          maxLines: 2,
          textColor: t.color.textNeutral,
          wordWrap: true
        }),
        width: h.getWidthByColumnSpan(t, 4)
      };
    },
    mode: function mode$c(t) {
      return {
        disabled: {
          descriptionTextStyle: {
            textColor: t.color.textNeutralDisabled
          },
          subtitleTextStyle: {
            textColor: t.color.textNeutralDisabled
          }
        }
      };
    }
  });
  var Dt = Object.freeze({
    __proto__: null,
    base: function base$D(t) {
      var i2 = t.spacer.xxl;
      return {
        alpha: t.alpha.primary,
        width: i2,
        height: i2,
        knobHeight: i2 / 2,
        knobWidth: i2 / 2,
        radius: i2 / 2,
        strokeWidth: t.stroke.sm
      };
    },
    mode: function mode$b(t) {
      return {
        disabled: {
          alpha: t.alpha.inactive
        }
      };
    },
    tone: function tone$k(t) {
      return {
        neutral: {
          backgroundColor: t.color.fillInverseSecondary,
          backgroundColorChecked: t.color.fillNeutral,
          knobColor: t.color.fillInverse,
          strokeColor: t.color.strokeNeutralSecondary
        },
        inverse: {
          backgroundColor: t.color.fillNeutralSecondary,
          backgroundColorChecked: t.color.fillInverse,
          knobColor: t.color.fillNeutral,
          strokeColor: t.color.strokeInverseSecondary
        },
        brand: {
          backgroundColor: t.color.fillNeutralSecondary,
          backgroundColorChecked: t.color.fillBrand,
          knobColor: t.color.fillInverse,
          strokeColor: t.color.strokeNeutralSecondary
        }
      };
    }
  });
  var Nt = function(i2) {
    _inherits(Radio, tt);
    var o2 = _createSuper(Radio);
    function Radio() {
      return _classCallCheck(this, Radio), o2.apply(this, arguments);
    }
    return _createClass(Radio, [{
      key: "_update",
      value: function _update() {
        this._updateBody(), this._updateStroke(), this._updateKnob(), this._checkedChanged && (this.fireAncestors("$announce", this.announce), this._checkedChanged = false), this._updateOpacity();
      }
    }, {
      key: "_updateBody",
      value: function _updateBody() {
        var i3 = this.checked ? this.style.backgroundColorChecked : this.style.backgroundColor, o3 = this.style.radius >= this.w / 2 ? (this.w - this.style.strokeWidth - 2) / 2 : 0;
        this._Body.patch({
          texture: lightningjs_core_default.Tools.getRoundRect(this.w - 2 * this.style.strokeWidth - 2, this.h - 2 * this.style.strokeWidth - 2, o3, null, null, true, i3)
        });
      }
    }, {
      key: "_updateStroke",
      value: function _updateStroke() {
        this._Stroke.patch({
          texture: lightningjs_core_default.Tools.getRoundRect(this.w - 2, this.h - 2, this.style.radius, this.style.strokeWidth, this.style.strokeColor, false)
        });
      }
    }, {
      key: "_updateKnob",
      value: function _updateKnob() {
        this._Knob.patch({
          texture: lightningjs_core_default.Tools.getRoundRect(this.style.knobWidth, this.style.knobHeight, this.style.knobWidth / 2, null, null, true, this.style.knobColor)
        }), this.applySmooth(this._Knob, {
          alpha: this.checked ? 1 : 0
        });
      }
    }, {
      key: "_updateOpacity",
      value: function _updateOpacity() {
        this.applySmooth(this, {
          alpha: this.style.alpha
        });
      }
    }, {
      key: "_setChecked",
      value: function _setChecked(t) {
        return this._checkedChanged = t !== this._checked, t;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        return this._isDisabledMode || (this.checked = !this.checked), this;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        return "function" == typeof this.onEnter ? this.onEnter(this) : (this.toggle(), false);
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || (this.checked ? "Checked" : "Unchecked");
      },
      set: function set2(t) {
        _set(_getPrototypeOf(Radio.prototype), "announce", t, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Radio";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Dt;
      }
    }, {
      key: "_template",
      value: function _template() {
        var t = {
          mount: 0.5,
          x: function x(t2) {
            return t2 / 2;
          },
          y: function y(t2) {
            return t2 / 2;
          }
        };
        return {
          Body: _objectSpread(_objectSpread({
            rtt: true
          }, t), {}, {
            Knob: _objectSpread(_objectSpread({}, t), {}, {
              alpha: 0
            })
          }),
          Stroke: t
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Knob", "Body", "Stroke"];
      }
    }, {
      key: "properties",
      get: function get() {
        return ["checked"];
      }
    }]), Radio;
  }();
  var Et = Object.freeze({
    __proto__: null,
    base: function base$C(t) {
      var i2 = t.spacer.xl;
      return {
        width: i2,
        height: i2,
        knobHeight: i2 / 2,
        knobWidth: i2 / 2,
        radius: i2 / 2
      };
    }
  });
  var zt = function(t) {
    _inherits(RadioSmall, Nt);
    var i2 = _createSuper(RadioSmall);
    function RadioSmall() {
      return _classCallCheck(this, RadioSmall), i2.apply(this, arguments);
    }
    return _createClass(RadioSmall, null, [{
      key: "__componentName",
      get: function get() {
        return "RadioSmall";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Et;
      }
    }]), RadioSmall;
  }();
  var Ft = function(t) {
    _inherits(CardRadio, Mt);
    var i2 = _createSuper(CardRadio);
    function CardRadio() {
      return _classCallCheck(this, CardRadio), i2.apply(this, arguments);
    }
    return _createClass(CardRadio, [{
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(CardRadio.prototype), "_update", this).call(this), this._updateRadio(), this._updateSubtitle(), this._updatePositions();
      }
    }, {
      key: "_updatePositions",
      value: function _updatePositions() {
        _get(_getPrototypeOf(CardRadio.prototype), "_updatePositions", this).call(this), this._updateSubtitlePosition();
      }
    }, {
      key: "_updateSubtitle",
      value: function _updateSubtitle() {
        this._Subtitle.patch({
          content: this.subtitle,
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.subtitleTextStyle), {}, {
              wordWrapWidth: this._calculateTextWidth()
            })
          }
        });
      }
    }, {
      key: "_updateRadio",
      value: function _updateRadio() {
        var t2 = _objectSpread(_objectSpread({}, this.radio), {}, {
          mode: this.mode,
          mountX: 1,
          x: this.w - this.style.paddingHorizontal,
          y: this.style.paddingVertical
        });
        this._Radio || (t2.type = Nt), this.patch({
          Radio: t2
        });
      }
    }, {
      key: "_updateSubtitlePosition",
      value: function _updateSubtitlePosition() {
        this._Subtitle.x = this.style.paddingHorizontal, this._Subtitle.y = this.style.paddingVertical + this._Title.h;
      }
    }, {
      key: "_updateDescriptionPosition",
      value: function _updateDescriptionPosition() {
        this._Description.x = this.style.paddingHorizontal, this._Description.y = 2 * this.style.paddingVertical + this._Title.h + this._Subtitle.h;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || [this._Title && this._Title.announce, this._Subtitle && this._Subtitle.announce, this._Description && this._Description.announce, this._Details && this._Details.announce];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(CardRadio.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "CardRadio";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Rt;
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardRadio), "properties", this)), ["radio", "subtitle"]);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardRadio), "tags", this)), ["Radio", "Subtitle"]);
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(CardRadio), "_template", this).call(this)), {}, {
          Subtitle: {
            type: At,
            signals: {
              textBoxChanged: "_updatePositions"
            }
          }
        });
      }
    }]), CardRadio;
  }();
  var Ht = Object.freeze({
    __proto__: null,
    base: function base$B(t) {
      return {
        height: 5 * t.spacer.xxl,
        iconWidth: t.spacer.xxl,
        iconHeight: t.spacer.xxl,
        width: h.getWidthByColumnSpan(t, 3)
      };
    }
  });
  var Ut = function(t) {
    _inherits(CardSection, Wt);
    var i2 = _createSuper(CardSection);
    function CardSection() {
      return _classCallCheck(this, CardSection), i2.apply(this, arguments);
    }
    return _createClass(CardSection, [{
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(CardSection.prototype), "_update", this).call(this), this._updateIcon();
      }
    }, {
      key: "_updateIcon",
      value: function _updateIcon() {
        var t2 = this.style, i3 = t2.iconWidth, o2 = t2.iconHeight, r2 = {
          w: i3,
          h: o2,
          icon: this.iconSrc,
          x: this.w - i3 - this.style.paddingHorizontal,
          y: (this._Title.style.textStyle.lineHeight - o2) / 2 + this.style.paddingVertical
        };
        this._Icon || (r2.type = st), this.patch({
          Icon: r2
        });
      }
    }, {
      key: "_calculateTextWidth",
      value: function _calculateTextWidth() {
        var t2 = this.w - 2 * this.style.paddingHorizontal;
        return this.iconSrc ? t2 - this.iconWidth : t2;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "CardSection";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ht;
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardSection), "tags", this)), ["Icon"]);
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardSection), "properties", this)), ["iconWidth", "iconHeight", "iconSrc"]);
      }
    }]), CardSection;
  }();
  var Kt = Object.freeze({
    __proto__: null,
    base: function base$A(t) {
      var i2 = t.stroke.sm, o2 = t.spacer.xxl;
      return {
        alpha: t.alpha.primary,
        width: o2,
        height: o2,
        iconWidth: t.spacer.lg,
        iconHeight: t.spacer.lg,
        icon: t.asset.check,
        radius: t.radius.xs,
        strokeWidth: i2
      };
    },
    mode: function mode$a(t) {
      return {
        disabled: {
          alpha: t.alpha.inactive
        }
      };
    },
    tone: function tone$j(t) {
      return {
        neutral: {
          strokeColor: t.color.strokeNeutralSecondary,
          checkColor: t.color.fillInverse,
          backgroundColor: t.color.fillInverseSecondary,
          backgroundColorChecked: t.color.fillNeutral
        },
        inverse: {
          strokeColor: t.color.strokeInverseSecondary,
          checkColor: t.color.fillNeutral,
          backgroundColor: t.color.fillNeutralSecondary,
          backgroundColorChecked: t.color.fillInverse
        },
        brand: {
          strokeColor: t.color.strokeNeutralSecondary,
          checkColor: t.color.fillInverse,
          backgroundColor: t.color.fillNeutralSecondary,
          backgroundColorChecked: t.color.fillBrand
        }
      };
    }
  });
  var qt = function(i2) {
    _inherits(Checkbox, tt);
    var o2 = _createSuper(Checkbox);
    function Checkbox() {
      return _classCallCheck(this, Checkbox), o2.apply(this, arguments);
    }
    return _createClass(Checkbox, [{
      key: "_update",
      value: function _update() {
        this._updateBody(), this._updateStroke(), this._updateCheck(), this._checkedChanged && (this.fireAncestors("$announce", this.announce), this._checkedChanged = false), this._updateOpacity();
      }
    }, {
      key: "_updateCheck",
      value: function _updateCheck() {
        this._Check.patch({
          w: this.style.iconWidth,
          h: this.style.iconHeight,
          icon: this.style.icon,
          style: {
            color: this.style.checkColor
          }
        });
        var t = {
          alpha: this.checked ? 1 : 0
        };
        this.applySmooth(this._Check, t);
      }
    }, {
      key: "_updateBody",
      value: function _updateBody() {
        var i3 = this.checked ? this.style.backgroundColorChecked : this.style.backgroundColor, o3 = this.style.radius >= this.w / 2 ? (this.w - this.style.strokeWidth - 2) / 2 : 0;
        this._Body.patch({
          texture: lightningjs_core_default.Tools.getRoundRect(this.w - 2 * this.style.strokeWidth - 2, this.h - 2 * this.style.strokeWidth - 2, o3, 0, null, true, i3)
        });
      }
    }, {
      key: "_updateStroke",
      value: function _updateStroke() {
        this._Stroke.patch({
          texture: lightningjs_core_default.Tools.getRoundRect(this.w - 2, this.h - 2, this.style.radius, this.style.strokeWidth, this.style.strokeColor, false)
        });
      }
    }, {
      key: "_updateOpacity",
      value: function _updateOpacity() {
        this.applySmooth(this, {
          alpha: this.style.alpha
        });
      }
    }, {
      key: "_setChecked",
      value: function _setChecked(t) {
        return this._checkedChanged = t !== this._checked, t;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        return this._isDisabledMode || (this.checked = !this.checked), this;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        return "function" == typeof this.onEnter ? this.onEnter(this) : (this.toggle(), false);
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || (this.checked ? "Checked" : "Unchecked");
      },
      set: function set2(t) {
        _set(_getPrototypeOf(Checkbox.prototype), "announce", t, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Checkbox";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Kt;
      }
    }, {
      key: "_template",
      value: function _template() {
        var t = {
          mount: 0.5,
          x: function x(t2) {
            return t2 / 2;
          },
          y: function y(t2) {
            return t2 / 2;
          }
        };
        return {
          Body: _objectSpread(_objectSpread({
            rtt: true
          }, t), {}, {
            Check: _objectSpread(_objectSpread({
              type: st
            }, t), {}, {
              alpha: 0
            })
          }),
          Stroke: t
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Check", "Body", "Stroke"];
      }
    }, {
      key: "properties",
      get: function get() {
        return ["checked"];
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "checkSrc",
          curr: "icon"
        }, {
          prev: "checkH",
          curr: "iconHeight"
        }, {
          prev: "checkW",
          curr: "iconWidth"
        }, {
          prev: "checkHeight",
          curr: "iconHeight"
        }, {
          prev: "checkWidth",
          curr: "iconWidth"
        }];
      }
    }]), Checkbox;
  }();
  var Vt = Object.freeze({
    __proto__: null,
    base: function base$z(t) {
      return {
        radius: [t.radius.md, t.radius.md, t.radius.md, t.radius.none],
        paddingX: t.spacer.lg,
        paddingY: t.spacer.md,
        offsetY: t.spacer.xxs,
        textStyle: t.typography.caption1
      };
    },
    tone: function tone$i(t) {
      return {
        neutral: {
          textStyle: {
            textColor: t.color.textInverse
          },
          backgroundColor: t.color.fillNeutral
        },
        inverse: {
          textStyle: {
            textColor: t.color.textNeutral
          },
          backgroundColor: t.color.fillInverse
        },
        brand: {
          textStyle: {
            textColor: t.color.textNeutral
          },
          backgroundColor: t.color.fillBrand
        }
      };
    }
  });
  var Xt = function(i2) {
    _inherits(Label, tt);
    var o2 = _createSuper(Label);
    function Label() {
      return _classCallCheck(this, Label), o2.apply(this, arguments);
    }
    return _createClass(Label, [{
      key: "_init",
      value: function _init() {
        this._Text.on("txLoaded", this._updateBackground.bind(this)), _get(_getPrototypeOf(Label.prototype), "_init", this).call(this);
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateBackground(), this._updateText();
      }
    }, {
      key: "_updateText",
      value: function _updateText() {
        this._Text && this._Text.patch({
          text: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
            text: this.title
          })
        });
      }
    }, {
      key: "_updateBackground",
      value: function _updateBackground() {
        this._Text.x = this.w / 2, this._Text.y = this.h / 2 + this.style.offsetY, this.h = this.title ? this._Text.renderHeight + 2 * this.style.paddingY : 0, this.w = this.title ? this._Text.renderWidth + 2 * this.style.paddingX : 0, this._Background.patch({
          texture: lightningjs_core_default.Tools.getRoundRect(this.w - 2, this.h - 2, this.style.radius, 0, null, true, this.style.backgroundColor)
        }), this.signal("loadedLabel", this);
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this._Text && this._Text.text.text;
      },
      set: function set2(t) {
        _set(_getPrototypeOf(Label.prototype), "announce", t, this, true);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Background: {},
          Text: {
            mountY: 0.5,
            mountX: 0.5,
            text: {}
          }
        };
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "Label";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Vt;
      }
    }, {
      key: "properties",
      get: function get() {
        return ["title"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Background", "Text"];
      }
    }]), Label;
  }();
  var Yt = Object.freeze({
    __proto__: null,
    base: function base$y(t) {
      return {
        descriptionTextStyle: _objectSpread(_objectSpread({}, t.typography.body2), {}, {
          maxLines: 1
        }),
        fadeWidth: 100,
        logoWidth: t.typography.body3.lineHeight,
        logoHeight: t.typography.body3.lineHeight,
        logoPadding: t.spacer.lg,
        detailsTextStyle: t.typography.body3,
        titleTextStyle: _objectSpread(_objectSpread({}, t.typography.headline1), {}, {
          maxLines: 1
        }),
        marqueeSync: true,
        alpha: t.alpha.primary
      };
    },
    mode: function mode$9(t) {
      return {
        disabled: {
          detailsTextStyle: {
            textColor: t.color.textNeutralDisabled
          },
          alpha: t.alpha.inactive
        }
      };
    },
    tone: function tone$h(t) {
      return {
        neutral: {
          titleTextStyle: {
            textColor: t.color.textNeutral
          },
          detailsTextStyle: {
            textColor: t.color.textNeutral
          },
          descriptionTextStyle: {
            textColor: t.color.textNeutralSecondary
          },
          mode: {
            disabled: {
              titleTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              descriptionTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        },
        inverse: {
          titleTextStyle: {
            textColor: t.color.textInverse
          },
          detailsTextStyle: {
            textColor: t.color.textInverse
          },
          descriptionTextStyle: {
            textColor: t.color.textInverseSecondary
          },
          mode: {
            disabled: {
              titleTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              descriptionTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        },
        brand: {
          titleTextStyle: {
            textColor: t.color.textNeutral
          },
          detailsTextStyle: {
            textColor: t.color.textNeutral
          },
          descriptionTextStyle: {
            textColor: t.color.textNeutralSecondary
          },
          mode: {
            disabled: {
              titleTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              descriptionTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        }
      };
    }
  });
  var Gt = withMarqueeSync(function(t) {
    _inherits(MetadataBase, tt);
    var i2 = _createSuper(MetadataBase);
    function MetadataBase() {
      return _classCallCheck(this, MetadataBase), i2.apply(this, arguments);
    }
    return _createClass(MetadataBase, [{
      key: "_init",
      value: function _init() {
        this.requestUpdate(true);
      }
    }, {
      key: "_titleLoaded",
      value: function _titleLoaded() {
        this._updateLayout();
      }
    }, {
      key: "_detailsLoaded",
      value: function _detailsLoaded(t2) {
        var i3 = t2.w, o2 = t2.h;
        this._updateDetailsLayout({
          w: i3,
          h: o2
        }), this._updateLayout();
      }
    }, {
      key: "_descriptionLoaded",
      value: function _descriptionLoaded() {
        this._updateLayout();
      }
    }, {
      key: "_updateDetailsLayout",
      value: function _updateDetailsLayout(t2) {
        var i3 = t2.w, o2 = t2.h;
        this._DetailsWrapper.alpha = this.style.alpha, this._DetailsWrapper.w = i3, this._DetailsWrapper.h = o2;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateLines(), this._updateLayout();
      }
    }, {
      key: "_updateLines",
      value: function _updateLines() {
        this._Text.w = this._textW(), this._updateTitle(), this._updateDetails(), this._updateDescription();
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout() {
        this._updatePositions(), this._updateMetadataHeight(), this._updateLogo();
      }
    }, {
      key: "_updatePositions",
      value: function _updatePositions() {
        this._Text.h = this._textH(), this._Text.x = this.logo && "left" === this.logoPosition ? this.logoWidth + this.style.logoPadding : 0, this._Text.y = (this.h - this._Text.h) / 2;
      }
    }, {
      key: "_updateMetadataHeight",
      value: function _updateMetadataHeight() {
        var t2 = Math.max(this.logoHeight, this._Text.h);
        this.h !== t2 && (this.h = t2, this.signal("updateComponentDimensions"));
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        this._Title.patch({
          content: this.title,
          marquee: this.marquee,
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.titleTextStyle), {}, {
              maxLines: 1,
              wordWrap: true,
              wordWrapWidth: this._Text.w
            })
          }
        });
      }
    }, {
      key: "resetMarquee",
      value: function resetMarquee() {
        this.marquee && (this.title && this._Title.toggleMarquee(), this.description && this._Description.toggleMarquee());
      }
    }, {
      key: "_updateDetails",
      value: function _updateDetails() {
        this._Details.patch({
          content: this.details,
          style: {
            textStyle: this.style.detailsTextStyle
          }
        }), this._Details.finalW > this._textW() ? this._Details.patch({
          w: this._textW() + this.style.fadeWidth / 2,
          shader: {
            type: wt,
            positionLeft: 0,
            positionRight: this.style.fadeWidth
          },
          rtt: true
        }) : this._DetailsWrapper.shader = void 0, this._DetailsWrapper.visible = !!this.details, this._DetailsWrapper.alpha = this.style.alpha;
      }
    }, {
      key: "_updateDescription",
      value: function _updateDescription() {
        this._Description.patch({
          content: this.description,
          marquee: this.marquee,
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.descriptionTextStyle), {}, {
              maxLines: 1,
              wordWrap: true,
              wordWrapWidth: this._Text.w
            })
          }
        });
      }
    }, {
      key: "_updateLogo",
      value: function _updateLogo() {
        this.logoPosition = this.logoPosition || "right", this._Logo.patch({
          type: st,
          w: this.logoWidth,
          h: this.logoHeight,
          icon: this.logo,
          alpha: this.style.alpha
        }), this._Logo.x = "left" === this.logoPosition ? 0 : this.w - this._Logo.w, this._Logo.y = (this.h - this.logoHeight) / 2;
      }
    }, {
      key: "_textW",
      value: function _textW() {
        return this.w - (this.logo ? this.logoWidth + this.style.logoPadding : 0);
      }
    }, {
      key: "_textH",
      value: function _textH() {
        return (this.title && this._Title && this._Title.h || 0) + (this.details && this._DetailsWrapper && this._DetailsWrapper.h || 0) + (this.description && this._Description && this._Description.h || 0);
      }
    }, {
      key: "_getLogoWidth",
      value: function _getLogoWidth() {
        return void 0 !== this._logoWidth ? this._logoWidth : this.style.logoWidth;
      }
    }, {
      key: "_setLogoWidth",
      value: function _setLogoWidth(t2) {
        return void 0 !== t2 ? t2 : this.logoWidth;
      }
    }, {
      key: "_getLogoHeight",
      value: function _getLogoHeight() {
        return void 0 !== this._logoHeight ? this._logoHeight : this.style.logoHeight;
      }
    }, {
      key: "_setLogoHeight",
      value: function _setLogoHeight(t2) {
        return void 0 !== t2 ? t2 : this.logoHeight;
      }
    }, {
      key: "syncArray",
      get: function get() {
        return [].concat(_toConsumableArray(this.title ? [this._Title] : []), _toConsumableArray(this.description ? [this._Description] : []), _toConsumableArray(this.details ? [this._Details] : []));
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || [this._Title && this._Title.announce, this._Details && this._Details.announce, this._Description && this._Description.announce, this.logoTitle];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(MetadataBase.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "MetadataBase";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Yt;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Text: {
            flex: {
              direction: "column",
              justifyContent: "flex-start"
            },
            Title: {
              type: At,
              signals: {
                textBoxChanged: "_titleLoaded"
              }
            },
            DetailsWrapper: {
              Details: {
                type: At,
                signals: {
                  textBoxChanged: "_detailsLoaded"
                }
              }
            },
            Description: {
              type: At,
              signals: {
                textBoxChanged: "_descriptionLoaded"
              }
            }
          },
          Logo: {
            flexItem: false,
            type: st
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ["description", "logo", "logoHeight", "logoPosition", "logoTitle", "logoWidth", "details", "title", "marquee"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Text", {
          name: "Title",
          path: "Text.Title"
        }, {
          name: "DetailsWrapper",
          path: "Text.DetailsWrapper"
        }, {
          name: "Details",
          path: "Text.DetailsWrapper.Details"
        }, {
          name: "Description",
          path: "Text.Description"
        }, "Logo"];
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "subtitleTextStyle",
          curr: "detailsTextStyle"
        }];
      }
    }, {
      key: "aliasProperties",
      get: function get() {
        return [{
          prev: "subtitle",
          curr: "details"
        }];
      }
    }]), MetadataBase;
  }());
  var Qt = Object.freeze({
    __proto__: null,
    base: function base$x(t) {
      return {
        titleTextStyle: t.typography.headline3,
        descriptionTextStyle: t.typography.body3
      };
    },
    tone: function tone$g(t) {
      return {
        neutral: {
          detailsTextStyle: {
            textColor: t.color.textNeutralSecondary
          },
          descriptionTextStyle: {
            textColor: t.color.textNeutral
          },
          mode: {
            disabled: {
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              descriptionTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        },
        inverse: {
          detailsTextStyle: {
            textColor: t.color.textInverseSecondary
          },
          descriptionTextStyle: {
            textColor: t.color.textInverse
          },
          mode: {
            disabled: {
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              descriptionTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        },
        brand: {
          detailsTextStyle: {
            textColor: t.color.textNeutralSecondary
          },
          descriptionTextStyle: {
            textColor: t.color.textNeutral
          },
          mode: {
            disabled: {
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              },
              descriptionTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        }
      };
    }
  });
  var $t = function(t) {
    _inherits(MetadataTile, Gt);
    var i2 = _createSuper(MetadataTile);
    function MetadataTile() {
      return _classCallCheck(this, MetadataTile), i2.apply(this, arguments);
    }
    return _createClass(MetadataTile, [{
      key: "_updateDetails",
      value: function _updateDetails() {
        this.description ? (this._Details.patch({
          content: ""
        }), this._Details.alpha = 0, this._Details.visible = false) : (this._Details.alpha = 1, this._Details.visible = true, _get(_getPrototypeOf(MetadataTile.prototype), "_updateDetails", this).call(this));
      }
    }, {
      key: "_updateDetailsLayout",
      value: function _updateDetailsLayout(t2) {
        var i3 = t2.h;
        this._Details && !this.description ? (this._DetailsWrapper.h = i3, this._DetailsWrapper.alpha = this.style.alpha) : this._DetailsWrapper.h = 0;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || [this._Title && this._Title.announce, this._Details && this._Details.announce || this._Description && this._Description.announce, this.logoTitle];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(MetadataTile.prototype), "announce", t2, this, true);
      }
    }, {
      key: "_textH",
      value: function _textH() {
        return (this.title && this._Title && this._Title.h || 0) + (this.details && this._Details && this._Details.visible && this._DetailsWrapper.h || 0) + (this.description && this._Description && this._Description.h || 0);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "MetadataTile";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Qt;
      }
    }]), MetadataTile;
  }();
  var Jt = Object.freeze({
    __proto__: null,
    base: function base$w(t) {
      return {
        height: t.spacer.md,
        animation: t.animation.utility,
        radius: t.radius.xs
      };
    },
    tone: function tone$f(t) {
      return {
        neutral: {
          barColor: t.color.fillNeutralTertiary,
          progressColor: t.color.fillNeutral
        },
        inverse: {
          barColor: t.color.fillInverseTertiary,
          progressColor: t.color.fillInverse
        },
        brand: {
          barColor: t.color.fillNeutralTertiary,
          progressColor: t.color.fillBrand
        }
      };
    }
  });
  var Zt = function(i2) {
    _inherits(ProgressBar, tt);
    var o2 = _createSuper(ProgressBar);
    function ProgressBar() {
      return _classCallCheck(this, ProgressBar), o2.apply(this, arguments);
    }
    return _createClass(ProgressBar, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ProgressBar.prototype), "_construct", this) && _get(_getPrototypeOf(ProgressBar.prototype), "_construct", this).call(this), this._progress = 0;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateTextures(), this._updateProgress(), this._progressChanged && (this.fireAncestors("$announce", this.announce), this._progressChanged = false);
      }
    }, {
      key: "_updateTextures",
      value: function _updateTextures() {
        var i3 = this._getProgressWidth();
        this._Bar.texture = lightningjs_core_default.Tools.getRoundRect(this.w - 2, this.h, this.style.radius, 0, 0, true, this.style.barColor), this._Progress.texture = lightningjs_core_default.Tools.getRoundRect(i3 + 1, this.h, this.style.radius, 0, 0, true, this.style.progressColor);
      }
    }, {
      key: "_updateProgress",
      value: function _updateProgress() {
        var t = this._getProgressWidth();
        this._Progress.smooth = {
          w: [t, this.style.animation],
          alpha: Number(t > 0)
        };
      }
    }, {
      key: "_setProgress",
      value: function _setProgress(t) {
        return this._progressChanged = t !== this._progress, t;
      }
    }, {
      key: "announce",
      get: function get() {
        if (void 0 !== this._announce && null !== this._announce)
          return this._announce;
        var t = this.progress;
        return t > 1 ? t = 1 : t < 0 && (t = 0), "".concat(Math.round(100 * t), "%");
      },
      set: function set2(t) {
        _set(_getPrototypeOf(ProgressBar.prototype), "announce", t, this, true);
      }
    }, {
      key: "_getProgressWidth",
      value: function _getProgressWidth() {
        var t = this.w * this._progress;
        return t <= 0 ? 0 : Math.min(t, this.w);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Bar: {
            zIndex: 1
          },
          Progress: {
            alpha: 0,
            zIndex: 2
          }
        };
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Jt;
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "ProgressBar";
      }
    }, {
      key: "properties",
      get: function get() {
        return ["progress"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Bar", "Progress"];
      }
    }]), ProgressBar;
  }();
  var te = Object.freeze({
    __proto__: null,
    base: function base$v(t) {
      return {
        animationEntrance: t.animation.standardEntrance,
        animationExit: t.animation.standardExit,
        logoWidth: 5 * t.spacer.lg,
        logoHeight: t.spacer.xxl + t.spacer.md,
        metadataLocation: "standard",
        paddingX: t.spacer.xl,
        paddingY: t.spacer.lg,
        paddingYProgress: t.spacer.xl,
        paddingYBetweenContent: t.spacer.md,
        radius: t.radius.md,
        alpha: t.alpha.primary
      };
    },
    mode: function mode$8(t) {
      return {
        disabled: {
          alpha: t.alpha.inactive
        }
      };
    },
    tone: function tone$e(t) {
      return {
        neutral: {
          mode: {
            focused: {
              backgroundColor: t.color.interactiveNeutralFocusSoft
            }
          }
        },
        inverse: {
          mode: {
            focused: {
              backgroundColor: t.color.interactiveInverseFocusSoft
            }
          }
        },
        brand: {
          mode: {
            focused: {
              backgroundColor: t.color.interactiveBrandFocusSoft
            }
          }
        }
      };
    }
  });
  var ee = function(t) {
    _inherits(Tile, mt);
    var i2 = _createSuper(Tile);
    function Tile() {
      return _classCallCheck(this, Tile), i2.apply(this, arguments);
    }
    return _createClass(Tile, [{
      key: "announce",
      get: function get() {
        return this._announce || [this._Metadata && this._Metadata.announce, this._Badge && this._Badge.announce, this._Label && this._Label.announce, this._ProgressBar && this._ProgressBar.announce];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Tile.prototype), "announce", t2, this, true);
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(Tile.prototype), "_update", this).call(this), this._updateTileColor(), this._updateContent(), this._updateArtwork(), this._updateBadge(), this._updateLabel(), this._updateCheckbox(), this._updateProgressBar(), this._updateLogo(), this._updateMetadata();
      }
    }, {
      key: "_getRenderHeight",
      value: function _getRenderHeight() {
        var t2;
        return this._isInsetMetadata ? _get(_getPrototypeOf(Tile.prototype), "_getRenderHeight", this).call(this) : this._h + ((null === (t2 = this._Metadata) || void 0 === t2 ? void 0 : t2.h) + this.style.paddingY || 0);
      }
    }, {
      key: "innerH",
      get: function get() {
        return this._h;
      }
    }, {
      key: "_gradient",
      get: function get() {
        return !this._isCircleLayout && Boolean(this._isInsetMetadata && this._hasMetadata && this._shouldShowMetadata);
      }
    }, {
      key: "_isCircleLayout",
      get: function get() {
        return Boolean(this._itemLayout && this._itemLayout.circle);
      }
    }, {
      key: "_foregroundDefaultWidth",
      get: function get() {
        return parseFloat(this._w / this._h).toFixed(2) === parseFloat(16 / 9).toFixed(2) ? 0.5 * this.innerW : 0.75 * this.innerW;
      }
    }, {
      key: "_updateTileColor",
      value: function _updateTileColor() {
        this._Tile.alpha = this.style.alpha;
      }
    }, {
      key: "_updateContent",
      value: function _updateContent() {
        var t2 = this, i3 = {
          h: this._h,
          w: this._w,
          x: this._w / 2,
          y: this._h / 2
        };
        this.applySmooth(this._Content, i3, Object.keys(i3).reduce(function(o2, r2) {
          return o2[r2] = [i3[r2], t2._isFocusedMode ? t2.style.animationEntrance : t2.style.animationExit], o2;
        }, {}));
      }
    }, {
      key: "_updateLogo",
      value: function _updateLogo() {
        var t2 = {
          w: this.style.logoWidth,
          h: this.style.logoHeight,
          icon: this.logo,
          alpha: this.style.alpha,
          mountY: 1,
          x: this.style.paddingX,
          y: this._calculateLogoYPosition()
        };
        this.logo && (this.persistentMetadata || this._isFocusedMode) ? (this._Logo || (t2.type = st), this.patch({
          Icon: t2
        })) : this.patch({
          Icon: void 0
        });
      }
    }, {
      key: "_calculateLogoYPosition",
      value: function _calculateLogoYPosition() {
        return this._isInsetMetadata ? this._metadataY - (this._Metadata ? this._Metadata.h : 0) : this._progressBarY ? this._progressBarY - this.style.paddingYBetweenContent : this._h - this.style.paddingY;
      }
    }, {
      key: "_updateArtwork",
      value: function _updateArtwork() {
        var t2, i3;
        this._Artwork.patch(_objectSpread(_objectSpread({
          mode: this.mode,
          h: this._h,
          w: this._w,
          x: this._w / 2,
          y: this._h / 2,
          src: this.src
        }, this.artwork || {}), {}, {
          style: _objectSpread({
            radius: null === (t2 = this.style) || void 0 === t2 ? void 0 : t2.radius
          }, null === (i3 = this.artwork) || void 0 === i3 ? void 0 : i3.style),
          gradient: this._gradient,
          shouldScale: this._isFocusedMode
        }));
      }
    }, {
      key: "_getSrc",
      value: function _getSrc() {
        return this.artwork && this.artwork.src || this._src;
      }
    }, {
      key: "_imageLoaded",
      value: function _imageLoaded() {
        this._Background.alpha = 0;
      }
    }, {
      key: "_updateBadge",
      value: function _updateBadge() {
        var t2;
        if (null !== (t2 = this.badge) && void 0 !== t2 && t2.title && !this._isCircleLayout) {
          var i3 = _objectSpread(_objectSpread({}, this.badge), {}, {
            mode: this.mode,
            x: this.style.paddingX,
            y: this.style.paddingY,
            alpha: this._shouldShowBadgeLabel ? 1 : 1e-3
          });
          this._Badge ? (this._Badge.patch(i3), this.applySmooth(this._Badge, i3, _objectSpread(_objectSpread({}, i3), this._badgeLabelTransitions))) : this._Content.patch({
            Badge: _objectSpread(_objectSpread({
              type: ct
            }, i3), {}, {
              signals: {
                loadedBadge: "_updateBadge"
              }
            })
          });
        } else
          this._Badge && this._Content.patch({
            Badge: void 0
          });
      }
    }, {
      key: "_updateLabel",
      value: function _updateLabel() {
        var t2;
        if (null !== (t2 = this.label) && void 0 !== t2 && t2.title && !this._isCircleLayout) {
          var i3 = _objectSpread(_objectSpread({}, this.label), {}, {
            mode: this.mode,
            x: this._w - this.style.paddingX,
            y: this.style.paddingY,
            alpha: this._shouldShowBadgeLabel ? 1 : 1e-3
          });
          this._Label ? (this._Label.patch(i3), this.applySmooth(this._Label, i3, _objectSpread(_objectSpread({}, i3), {}, {
            x: [i3.x, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit]
          }, this._badgeLabelTransitions))) : this._Content.patch({
            Label: _objectSpread(_objectSpread({
              type: Xt,
              mountX: 1
            }, i3), {}, {
              signals: {
                loadedLabel: "_updateLabel"
              }
            })
          });
        } else
          this._Label && this._Content.patch({
            Label: void 0
          });
      }
    }, {
      key: "_shouldShowBadgeLabel",
      get: function get() {
        return this.persistentMetadata || this._isFocusedMode && !this._isCircleLayout;
      }
    }, {
      key: "_badgeLabelTransitions",
      get: function get() {
        return {
          y: [this._shouldShowBadgeLabel ? this.style.paddingY : 0, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit],
          alpha: [this._shouldShowBadgeLabel ? 1 : 1e-3, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit]
        };
      }
    }, {
      key: "_updateCheckbox",
      value: function _updateCheckbox() {
        var t2;
        if ("boolean" == typeof (null === (t2 = this.checkbox) || void 0 === t2 ? void 0 : t2.checked) && this.checkbox.checked && !this._isCircleLayout) {
          var i3 = _objectSpread(_objectSpread({}, this.checkbox), {}, {
            mode: this.mode,
            x: this._w - this.style.paddingX,
            y: this._h - this.style.paddingY
          });
          this._Checkbox ? this.applySmooth(this._Checkbox, i3) : this._Content.patch({
            Checkbox: _objectSpread(_objectSpread({}, i3), {}, {
              type: qt,
              mount: 1
            })
          });
        } else
          this._Checkbox && this._Content.patch({
            Checkbox: void 0
          });
      }
    }, {
      key: "_progressBarY",
      get: function get() {
        return (this._ProgressBar && 0 !== this._ProgressBar._getTransition("alpha")._targetValue ? this._ProgressBar._getTransition("y")._targetValue || this._ProgressBar.y : 0) || 0;
      }
    }, {
      key: "_updateProgressBar",
      value: function _updateProgressBar() {
        var t2, i3 = this;
        if ("number" == typeof (null === (t2 = this.progressBar) || void 0 === t2 ? void 0 : t2.progress) && this.progressBar.progress && !this._isCircleLayout) {
          if (this.progressBar.progress > 0) {
            var o2 = _objectSpread(_objectSpread({}, this.progressBar), {}, {
              mode: this.mode,
              w: this._w - 2 * this.style.paddingX,
              x: this._w / 2,
              y: this._h - this.style.paddingYProgress
            });
            if (!this._ProgressBar)
              return this._Content.patch({
                ProgressBar: _objectSpread(_objectSpread({}, o2), {}, {
                  type: Zt,
                  mountX: 0.5,
                  mountY: 1,
                  alpha: this._hasMetadata && this.shouldSmooth ? 1e-3 : 1
                })
              }), void (this.shouldSmooth && (this._ProgressBar.smooth = {
                alpha: [1, {
                  delay: this.style.animationEntrance.duration
                }]
              }));
            this.applySmooth(this._ProgressBar, o2, Object.keys(o2).reduce(function(t3, r2) {
              return t3[r2] = [o2[r2], i3._isFocusedMode ? i3.style.animationEntrance : i3.style.animationExit], t3;
            }, {}));
          }
        } else
          this._ProgressBar && (this.shouldSmooth ? (this._ProgressBar._getTransition("alpha").once("finish", function() {
            i3._removeProgressBar();
          }), this._ProgressBar.smooth = {
            alpha: 0
          }) : this._removeProgressBar());
      }
    }, {
      key: "_removeProgressBar",
      value: function _removeProgressBar() {
        this._Content.patch({
          ProgressBar: void 0
        }), this._updateMetadata();
      }
    }, {
      key: "_shouldShowMetadata",
      get: function get() {
        return this._hasMetadata && (this.persistentMetadata && !this._isInsetMetadata || this._isFocusedMode && !this._isInsetMetadata || (this.persistentMetadata || this._isFocusedMode) && this._isInsetMetadata && !this._isCircleLayout);
      }
    }, {
      key: "_isInsetMetadata",
      get: function get() {
        return "inset" === this.metadataLocation;
      }
    }, {
      key: "_metadataTransitions",
      get: function get() {
        return {
          y: [this._shouldShowMetadata ? this._metadataY : this._h + this.style.paddingY, this._shouldShowMetadata ? this.style.animationEntrance : this.style.animationExit],
          alpha: [this._metadataAlpha, this._shouldShowMetadata ? this.style.animationEntrance : this.style.animationExit]
        };
      }
    }, {
      key: "_hasMetadata",
      get: function get() {
        var t2 = this;
        return $t.properties.some(function(i3) {
          return t2.metadata && t2.metadata[i3];
        });
      }
    }, {
      key: "_metadataY",
      get: function get() {
        return this._isInsetMetadata ? this._progressBarY ? this._progressBarY - this.style.paddingYBetweenContent : this._h - this.style.paddingY : this._h + this.style.paddingY;
      }
    }, {
      key: "_metadataAlpha",
      get: function get() {
        return this._shouldShowMetadata ? 1 : 1e-3;
      }
    }, {
      key: "_metadataPatch",
      get: function get() {
        return _objectSpread({
          mode: this.mode,
          alpha: this._metadataAlpha,
          mountX: 0.5,
          mountY: this._isInsetMetadata ? 1 : 0,
          marquee: this._isFocusedMode,
          w: this._w - 2 * this.style.paddingX,
          x: this._w / 2,
          y: !this.persistentMetadata && this._isInsetMetadata && this._isFocusedMode ? this._h + this.style.paddingY : this._metadataY
        }, this.metadata || {});
      }
    }, {
      key: "_getMetadataLocation",
      value: function _getMetadataLocation() {
        var t2;
        return null !== (t2 = this.style.metadataLocation) && void 0 !== t2 ? t2 : this._metadataLocation;
      }
    }, {
      key: "_setMetadataLocation",
      value: function _setMetadataLocation(t2) {
        return t2 && (this.style = {
          metadataLocation: t2
        }), t2;
      }
    }, {
      key: "_updateMetadata",
      value: function _updateMetadata() {
        this._hasMetadata ? this._Metadata || !this._hasMetadata ? (this._Metadata.patch(this._metadataPatch), this._animateMetadata()) : this._Content.patch({
          Metadata: _objectSpread({
            type: $t,
            signals: {
              updateComponentDimensions: "_metadataLoaded"
            }
          }, this._metadataPatch)
        }) : this._Content.patch({
          Metadata: void 0
        });
      }
    }, {
      key: "_animateMetadata",
      value: function _animateMetadata() {
        this._Metadata && (this.applySmooth(this._Metadata, this._metadataPatch, this._metadataTransitions), this._isFocusedMode || this._resetMarqueeAnimation());
      }
    }, {
      key: "_metadataLoaded",
      value: function _metadataLoaded() {
        this._animateMetadata(), this._updateLogo(), this._updateDimensions(), this._isInsetMetadata || this.fireAncestors("$itemChanged");
      }
    }, {
      key: "_resetMarqueeAnimation",
      value: function _resetMarqueeAnimation() {
        var t2 = this, i3 = this._Metadata._getTransition("alpha");
        i3 ? i3.on("finish", function() {
          t2._Metadata && t2._Metadata.resetMarquee();
        }) : this._Metadata.resetMarquee();
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Tile";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return te;
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Tile), "_template", this).call(this)), {}, {
          Tile: {
            Artwork: {
              type: rt,
              signals: {
                imageLoaded: "_imageLoaded"
              },
              mount: 0.5
            },
            Content: {
              mount: 0.5
            }
          }
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return ["artwork", "badge", "checkbox", "circle", "label", "logo", "metadata", "metadataLocation", "persistentMetadata", "progressBar", "src"];
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "iconHeight",
          curr: "logoHeight"
        }, {
          prev: "iconWidth",
          curr: "logoWidth"
        }];
      }
    }, {
      key: "aliasProperties",
      get: function get() {
        return [{
          prev: "iconSrc",
          curr: "logo"
        }];
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Tile), "tags", this)), ["Artwork", "Content", "Tile", {
          name: "Badge",
          path: "Content.Badge"
        }, {
          name: "Checkbox",
          path: "Content.Checkbox"
        }, {
          name: "Logo",
          path: "Content.Logo"
        }, {
          name: "Metadata",
          path: "Content.Metadata"
        }, {
          name: "ProgressBar",
          path: "Content.ProgressBar"
        }, {
          name: "Label",
          path: "Content.Label"
        }]);
      }
    }]), Tile;
  }();
  var ne = Object.freeze({
    __proto__: null,
    base: function base$u(t) {
      return {
        alpha: t.alpha.primary,
        counterTextStyle: t.typography.headline3,
        itemSize: 2 * t.layout.gutterX,
        itemSpacing: t.spacer.md,
        radius: t.radius.sm
      };
    },
    mode: function mode$7(t) {
      return {
        disabled: {
          alpha: t.alpha.inactive
        }
      };
    },
    tone: function tone$d(t) {
      return {
        neutral: {
          counterBackgroundColor: t.color.fillInverseSecondary
        },
        inverse: {
          counterBackgroundColor: t.color.fillNeutralSecondary
        },
        brand: {
          counterBackgroundColor: t.color.fillInverseSecondary
        }
      };
    }
  });
  var ie = function(i2) {
    _inherits(Provider, tt);
    var o2 = _createSuper(Provider);
    function Provider() {
      return _classCallCheck(this, Provider), o2.apply(this, arguments);
    }
    return _createClass(Provider, [{
      key: "providersHidden",
      get: function get() {
        return this.providers.length - this._visibleCount;
      }
    }, {
      key: "_construct",
      value: function _construct() {
        this._providers = [], _get(_getPrototypeOf(Provider.prototype), "_construct", this).call(this);
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateProviders(), this._updateCounter();
      }
    }, {
      key: "_updateProviders",
      value: function _updateProviders() {
        var t = this, i3 = [];
        this.providers.slice(0, this.visibleCount).forEach(function(o3) {
          var r2 = {
            centerInParent: true,
            radius: t.disableRadius ? 0 : t.style.radius,
            alpha: t.style.alpha,
            style: o3.style || {}
          };
          if (o3.type === st && o3.icon && o3.w && o3.h) {
            var a2 = o3.w / o3.h;
            r2 = _objectSpread(_objectSpread({
              type: st,
              icon: o3.icon
            }, o3), {}, {
              w: t.style.itemSize * a2,
              h: t.style.itemSize
            }, r2);
          } else
            r2 = _objectSpread({
              type: st,
              w: t.style.itemSize,
              h: t.style.itemSize
            }, r2), "object" === _typeof(o3) ? r2 = _objectSpread(_objectSpread({}, r2), o3) : r2.icon = o3;
          i3.push(r2);
        }), this._Row.patch({
          style: {
            itemSpacing: this.style.itemSpacing
          },
          items: i3,
          h: this.style.itemSize
        });
      }
    }, {
      key: "_updateCounter",
      value: function _updateCounter() {
        if (this.providers.length > this.visibleCount) {
          var i3 = this.providersHidden, o3 = {
            announce: "+".concat(i3),
            alpha: this.style.alpha,
            w: this.style.itemSize,
            h: this.style.itemSize,
            centerInParent: true,
            Background: {
              w: this.style.itemSize,
              h: this.style.itemSize,
              texture: lightningjs_core_default.Tools.getRoundRect(this.style.itemSize, this.style.itemSize, this.style.radius, 0, null, true, this.style.counterBackgroundColor)
            },
            Text: {
              type: At,
              mountX: 0.5,
              mountY: 0.5,
              x: this.style.itemSize / 2,
              y: this.style.itemSize / 2,
              content: this.counterText || "+".concat(i3),
              style: {
                textStyle: this.style.counterTextStyle
              }
            }
          };
          this._Row.appendItems([o3]);
        }
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        this.signal("providerChanged");
      }
    }, {
      key: "_getVisibleCount",
      value: function _getVisibleCount() {
        var t = this.providers.length, i3 = Math.min(Math.max(1, this._visibleCount), t);
        return this._visibleCount < 1 && console.warn("Warning: The specified visible count (".concat(this._visibleCount, ") is less than the minimum value (").concat(1, "). Setting it to ").concat(1, ".")), this._visibleCount > t && console.warn("Warning: The specified visible count (".concat(this._visibleCount, ") is greater than the maximum value (").concat(t, "). Setting it to ").concat(t, ".")), i3;
      }
    }, {
      key: "w",
      get: function get() {
        return this._Row.w;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this._Row.items && this._Row.items.length && this._Row.items.map(function(t) {
          return t.announce;
        });
      },
      set: function set2(t) {
        _set(_getPrototypeOf(Provider.prototype), "announce", t, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Provider";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return ne;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ft,
            autoResizeWidth: true
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ["disableRadius", "counterText", "providers", "visibleCount"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Row"];
      }
    }]), Provider;
  }();
  var oe = Object.freeze({
    __proto__: null,
    base: function base$t(t) {
      return {
        detailsTextStyle: t.typography.body3,
        descriptionTextStyle: {
          maxLines: 3
        },
        fadeWidth: t.spacer.md * t.spacer.md,
        provider: {
          itemSize: t.spacer.xxxl + t.spacer.md
        }
      };
    },
    tone: function tone$c(t) {
      return {
        neutral: {
          detailsTextStyle: {
            textColor: t.color.textNeutral
          },
          mode: {
            disabled: {
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        },
        inverse: {
          detailsTextStyle: {
            textColor: t.color.textInverse
          },
          mode: {
            disabled: {
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        },
        brand: {
          detailsTextStyle: {
            textColor: t.color.textNeutral
          },
          mode: {
            disabled: {
              detailsTextStyle: {
                textColor: t.color.textNeutralDisabled
              }
            }
          }
        }
      };
    }
  });
  var re = function(t) {
    _inherits(MetadataCardContent, Gt);
    var i2, o2 = _createSuper(MetadataCardContent);
    function MetadataCardContent() {
      return _classCallCheck(this, MetadataCardContent), o2.apply(this, arguments);
    }
    return _createClass(MetadataCardContent, [{
      key: "_setDetails",
      value: function _setDetails(t2) {
        var i3 = this;
        return this._detailsPromise = t2 ? new Promise(function(t3) {
          i3._detailsPromiseResolver = t3;
        }) : void 0, t2;
      }
    }, {
      key: "_setProvider",
      value: function _setProvider(t2) {
        var i3 = this;
        return this._providerPromise = t2 ? new Promise(function(t3) {
          i3._providerPromiseResolver = t3;
        }) : void 0, t2;
      }
    }, {
      key: "_update",
      value: (i2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(t2) {
          for (; ; )
            switch (t2.prev = t2.next) {
              case 0:
                return this._updateLines(), this._updateProvider(), t2.next = 4, Promise.all([this._detailsPromise, this._providerPromise].filter(Boolean));
              case 4:
                this._updatePositions();
              case 5:
              case "end":
                return t2.stop();
            }
        }, _callee13, this);
      })), function _update() {
        return i2.apply(this, arguments);
      })
    }, {
      key: "_updateLines",
      value: function _updateLines() {
        this._Text.w = this.w, this._updateTitle(), this._updateDescription(), this._updateDetails();
      }
    }, {
      key: "_updateDescription",
      value: function _updateDescription() {
        this._Description.patch({
          content: this.description,
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.descriptionTextStyle), {}, {
              wordWrap: true,
              wordWrapWidth: this._Text.w
            })
          }
        });
      }
    }, {
      key: "_updateDetails",
      value: function _updateDetails() {
        var t2 = this._detailsMaxW;
        this._Details.patch({
          content: this.details,
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.detailsTextStyle), {}, {
              wordWrap: true,
              maxLines: 1,
              wordWrapWidth: t2 + this.style.fadeWidth / 2
            })
          }
        }), this._Details.finalW > t2 ? this._DetailsFader.patch({
          w: t2 + this.style.fadeWidth / 2,
          shader: {
            type: wt,
            positionLeft: 0,
            positionRight: this.style.fadeWidth
          }
        }) : this._DetailsFader.shader = void 0;
      }
    }, {
      key: "_resolveDetails",
      value: function _resolveDetails() {
        this._detailsPromiseResolver && this._detailsPromiseResolver(), this._updatePositions();
      }
    }, {
      key: "_updateProvider",
      value: function _updateProvider() {
        this.provider && this._Provider.patch(_objectSpread(_objectSpread({
          mode: this.mode
        }, this.provider), {}, {
          style: this.style.provider
        }));
      }
    }, {
      key: "_resolveProvider",
      value: function _resolveProvider() {
        this._providerPromiseResolver && this._providerPromiseResolver(), this._updatePositions();
      }
    }, {
      key: "_updatePositions",
      value: function _updatePositions() {
        this._Text.h = this._textH, this._Text.w = this._textW, this._DetailsWrapper.w = this._textW, this._DetailsWrapper.h = Math.max(this._providerH, this._Details.h), this._DetailsWrapper.y = this.h - this._DetailsWrapper.h, this._Details.y = this._DetailsWrapper.h / 2, this._Provider.x = this._DetailsWrapper.w - this._providerW, this._Provider.y = this._DetailsWrapper.h - this._providerH;
      }
    }, {
      key: "_textW",
      get: function get() {
        return this.w;
      }
    }, {
      key: "_textH",
      get: function get() {
        return this.h - this._providerH;
      }
    }, {
      key: "_providerW",
      get: function get() {
        return this._Provider.w;
      }
    }, {
      key: "_providerH",
      get: function get() {
        return this._Provider._Row._Items.h;
      }
    }, {
      key: "_detailsMaxW",
      get: function get() {
        return this.w - this._providerW - this.style.fadeWidth / 2;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || [this._Title && this._Title.announce, this._Description && this._Description.announce, this._Details && this._Details.announce, this._Provider && this._Provider.announce];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(MetadataCardContent.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "MetadataCardContent";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return oe;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Text: {
            flex: {
              direction: "column",
              justifyContent: "flex-start"
            },
            Title: {
              type: At
            },
            Description: {
              type: At
            }
          },
          DetailsWrapper: {
            DetailsFader: {
              Details: {
                mountY: 0.5,
                type: At,
                signals: {
                  textBoxChanged: "_resolveDetails"
                }
              }
            },
            Provider: {
              mount: 1,
              type: ie,
              signals: {
                providerChanged: "_resolveProvider"
              }
            }
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ["description", "details", "provider", "title"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Text", {
          name: "Title",
          path: "Text.Title"
        }, {
          name: "Description",
          path: "Text.Description"
        }, "DetailsWrapper", {
          name: "DetailsFader",
          path: "DetailsWrapper.DetailsFader"
        }, {
          name: "Details",
          path: "DetailsWrapper.DetailsFader.Details"
        }, {
          name: "Provider",
          path: "DetailsWrapper.Provider"
        }];
      }
    }]), MetadataCardContent;
  }();
  var ae = Object.freeze({
    __proto__: null,
    base: function base$s(t) {
      return {
        expandedWidth: h.getWidthByUpCount(t, 2),
        expandedHeight: h.getDimensions(t, {
          ratioX: 16,
          ratioY: 9,
          upCount: 4
        }).h,
        imageSize: {
          width: h.getDimensions(t, {
            ratioX: 16,
            ratioY: 9,
            upCount: 4
          }).w,
          height: h.getDimensions(t, {
            ratioX: 16,
            ratioY: 9,
            upCount: 4
          }).h
        },
        metadata: {
          descriptionTextStyle: {
            maxLines: 2
          }
        },
        paddingVertical: 1.5 * t.spacer.md
      };
    }
  });
  var se = function(t) {
    _inherits(CardContent, Wt);
    var i2 = _createSuper(CardContent);
    function CardContent() {
      return _classCallCheck(this, CardContent), i2.apply(this, arguments);
    }
    return _createClass(CardContent, [{
      key: "_update",
      value: function _update() {
        this._updateSize(), this._updateTile(), this._updateRadius(), this._updateMetadata(), _get(_getPrototypeOf(CardContent.prototype), "_update", this).call(this);
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
      }
    }, {
      key: "_updateTitlePosition",
      value: function _updateTitlePosition() {
      }
    }, {
      key: "_updateTile",
      value: function _updateTile() {
        var t2 = this.style.imageSize.w, i3 = this.style.expandedHeight;
        "horizontal" !== this._orientation && (t2 = this.style.expandedWidth, i3 = this.style.imageSize.h);
        var o2 = this.tile;
        this.src && (o2 = h.clone({
          src: this.src
        }, this.tile)), this._Tile.patch(_objectSpread(_objectSpread({
          w: t2,
          h: i3
        }, o2), {}, {
          persistentMetadata: true,
          alpha: this._shouldShowTile ? 1 : 0
        }));
      }
    }, {
      key: "_updateMetadata",
      value: function _updateMetadata() {
        var t2 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.metadata), this._metadataPosition), this._metadataDimensions), {}, {
          mode: this.mode,
          alpha: this._shouldShowMetadata ? 1 : 0,
          style: this.style.metadata
        });
        this._Metadata || (t2.type = re), this.patch({
          Metadata: t2
        });
      }
    }, {
      key: "_updateSize",
      value: function _updateSize() {
        var t2 = this.style.expandedWidth, i3 = this.style.expandedHeight;
        this._collapse && ("horizontal" === this._orientation ? t2 = this._collapseW : i3 = this._collapseH), this.w = t2, this.h = i3;
      }
    }, {
      key: "_updateRadius",
      value: function _updateRadius() {
        var t2 = Array.isArray(this.style.radius) && 4 === this.style.radius.length ? this.style.radius : Array(4).fill(this.style.radius), i3 = t2;
        this._collapse || (i3 = "horizontal" === this._orientation ? [t2[0], 0, 0, t2[3]] : [t2[0], t2[1], 0, 0]), this._Tile.patch({
          style: {
            radius: i3
          }
        });
      }
    }, {
      key: "_getSrc",
      value: function _getSrc() {
        return this.tile && (this.tile.artwork && this.tile.artwork.src || this.tile.src) || this._src;
      }
    }, {
      key: "_metadataDimensions",
      get: function get() {
        var t2 = 2 * this.style.paddingHorizontal, i3 = 2 * this.style.paddingVertical, o2 = this.style.expandedWidth - this.style.imageSize.w - t2, r2 = this.style.expandedHeight - i3;
        return "horizontal" !== this.orientation && (o2 = this.style.expandedWidth - t2, r2 = this.style.expandedHeight - this.style.imageSize.h - i3), {
          w: o2,
          h: r2
        };
      }
    }, {
      key: "_metadataPosition",
      get: function get() {
        var t2 = this.style.paddingHorizontal, i3 = this.style.paddingVertical, o2 = t2 + (this._collapse ? 0 : this.style.imageSize.w), r2 = i3;
        return "horizontal" !== this.orientation && (o2 = t2, r2 = i3 + (this._collapse ? 0 : this.style.imageSize.h)), {
          x: o2,
          y: r2
        };
      }
    }, {
      key: "_shouldShowMetadata",
      get: function get() {
        return !this._collapse || this.collapseToMetadata;
      }
    }, {
      key: "_shouldShowTile",
      get: function get() {
        return !this._collapse || this._collapse && !this.collapseToMetadata;
      }
    }, {
      key: "_collapse",
      get: function get() {
        return this.shouldCollapse && !this._isFocusedMode;
      }
    }, {
      key: "_collapseW",
      get: function get() {
        return this.collapseToMetadata ? this.style.expandedWidth - this.style.imageSize.w : this.style.imageSize.w;
      }
    }, {
      key: "_collapseH",
      get: function get() {
        return this.collapseToMetadata ? this.style.expandedHeight - this.style.imageSize.h : this.style.imageSize.h;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || [this._Metadata && this._Metadata.announce, this._Tile && this._Tile.announce];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(CardContent.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "CardContent";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return ae;
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(CardContent), "_template", this).call(this)), {}, {
          Tile: {
            type: ee
          }
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardContent), "properties", this)), ["tile", "metadata", "orientation", "collapseToMetadata", "shouldCollapse", "src"]);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardContent), "tags", this)), ["Metadata", "Tile"]);
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "expandedW",
          curr: "expandedWidth"
        }, {
          prev: "expandedH",
          curr: "expandedHeight"
        }];
      }
    }]), CardContent;
  }();
  var le = function(t) {
    _inherits(CardContentHorizontal, se);
    var i2 = _createSuper(CardContentHorizontal);
    function CardContentHorizontal() {
      return _classCallCheck(this, CardContentHorizontal), i2.apply(this, arguments);
    }
    return _createClass(CardContentHorizontal, [{
      key: "_init",
      value: function _init() {
        this._orientation = "horizontal", _get(_getPrototypeOf(CardContentHorizontal.prototype), "_init", this).call(this);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "CardContentHorizontal";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return ae;
      }
    }]), CardContentHorizontal;
  }();
  var ce = Object.freeze({
    __proto__: null,
    base: function base$r(t) {
      var i2 = h.getDimensions(t, {
        ratioX: 16,
        ratioY: 9,
        upCount: 3
      }), o2 = i2.w, r2 = i2.h;
      return {
        expandedWidth: h.getWidthByColumnSpan(t, 8),
        expandedHeight: r2,
        imageSize: {
          width: o2,
          height: r2
        },
        metadata: {
          descriptionTextStyle: {
            maxLines: 3
          }
        }
      };
    }
  });
  var ue = function(t) {
    _inherits(CardContentHorizontalLarge, le);
    var i2 = _createSuper(CardContentHorizontalLarge);
    function CardContentHorizontalLarge() {
      return _classCallCheck(this, CardContentHorizontalLarge), i2.apply(this, arguments);
    }
    return _createClass(CardContentHorizontalLarge, null, [{
      key: "__componentName",
      get: function get() {
        return "CardContentHorizontalLarge";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return ce;
      }
    }]), CardContentHorizontalLarge;
  }();
  var he = Object.freeze({
    __proto__: null,
    base: function base$q(t) {
      return {
        expandedWidth: h.getWidthByUpCount(t, 4),
        expandedHeight: h.getDimensions(t, {
          ratioX: 16,
          ratioY: 9,
          upCount: 4
        }).h + 7 * t.spacer.xxxl + t.spacer.lg + t.spacer.xxs,
        metadata: {
          descriptionTextStyle: {
            maxLines: 3
          }
        }
      };
    }
  });
  var de = function(t) {
    _inherits(CardContentVertical, se);
    var i2 = _createSuper(CardContentVertical);
    function CardContentVertical() {
      return _classCallCheck(this, CardContentVertical), i2.apply(this, arguments);
    }
    return _createClass(CardContentVertical, [{
      key: "_init",
      value: function _init() {
        this._orientation = "vertical", _get(_getPrototypeOf(CardContentVertical.prototype), "_init", this).call(this);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "CardContentVertical";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return he;
      }
    }]), CardContentVertical;
  }();
  var pe = Object.freeze({
    __proto__: null,
    base: function base$p(t) {
      return {
        expandedHeight: h.getDimensions(t, {
          ratioX: 16,
          ratioY: 9,
          upCount: 4
        }).h + 14 * t.spacer.md,
        metadata: {
          descriptionTextStyle: {
            maxLines: 1
          }
        }
      };
    }
  });
  var _e = function(t) {
    _inherits(CardContentVerticalSmall, de);
    var i2 = _createSuper(CardContentVerticalSmall);
    function CardContentVerticalSmall() {
      return _classCallCheck(this, CardContentVerticalSmall), i2.apply(this, arguments);
    }
    return _createClass(CardContentVerticalSmall, [{
      key: "_setMetadata",
      value: function _setMetadata(t2) {
        return _objectSpread(_objectSpread({}, t2), {}, {
          details: void 0,
          provider: void 0
        });
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "CardContentVerticalSmall";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return pe;
      }
    }]), CardContentVerticalSmall;
  }();
  var ye = Object.freeze({
    __proto__: null,
    base: function base$o(t) {
      var i2 = t.stroke.sm, o2 = t.spacer.xl;
      return {
        width: o2,
        height: o2,
        iconWidth: t.spacer.md,
        iconHeight: t.spacer.md,
        radius: t.radius.xs,
        strokeWidth: i2
      };
    }
  });
  var fe = function(t) {
    _inherits(CheckboxSmall, qt);
    var i2 = _createSuper(CheckboxSmall);
    function CheckboxSmall() {
      return _classCallCheck(this, CheckboxSmall), i2.apply(this, arguments);
    }
    return _createClass(CheckboxSmall, null, [{
      key: "__themeStyle",
      get: function get() {
        return ye;
      }
    }]), CheckboxSmall;
  }();
  var ge = Object.freeze({
    __proto__: null,
    base: function base$n(t) {
      return {
        itemSpacing: t.layout.gutterY,
        scrollIndex: 0,
        itemTransition: _objectSpread(_objectSpread({}, t.animation.standardEntrance), {}, {
          duration: t.animation.duration.fast
        })
      };
    }
  });
  var me = function(t) {
    _inherits(Column, _t);
    var i2 = _createSuper(Column);
    function Column() {
      return _classCallCheck(this, Column), i2.apply(this, arguments);
    }
    return _createClass(Column, [{
      key: "_shouldScroll",
      value: function _shouldScroll() {
        var t2 = this.alwaysScroll;
        t2 || this.neverScroll || (t2 = this.Items.childList.last && (this.shouldScrollUp() || this.shouldScrollDown()));
        return this.selectedIndex < this.scrollIndex && (t2 = false), t2;
      }
    }, {
      key: "_render",
      value: function _render(t2, i3) {
        if (this._prevLastScrollIndex = this._lastScrollIndex, this.plinko && i3 && i3.selected && (0 !== this.items.indexOf(i3) || !i3.skipPlinko)) {
          var o2 = this.checkSkipPlinko(i3, t2);
          t2.selectedIndex = this._getIndexOfItemNear(t2, o2 || i3);
        } else
          t2 && !t2.selectedIndex && (t2.selectedIndex = 0);
        if (this.Items.children.length) {
          if (this._shouldScroll()) {
            var r2 = this.selectedIndex > this._lastScrollIndex ? this.Items.children[this._lastScrollIndex - this.scrollIndex] : this.selected;
            this.Items.children[this._firstFocusableIndex()] === r2 && (r2 = this.Items.children[0]);
            var a2 = (this.Items.children[this.scrollIndex] || {
              y: 0
            }).y, l2 = [-(r2 || this.Items.childList.first).transition("y").targetValue + (r2 === this.selected ? a2 : 0), this.style.itemTransition], c2 = -r2.y + (r2 === this.selected ? a2 : 0);
            this.applySmooth(this.Items, {
              y: c2
            }, {
              y: l2
            }), this.shouldSmooth || this._updateTransitionTarget(this.Items, "y", c2);
          }
        } else
          this.applySmooth(this.Items, {
            y: this.itemPosY
          }), this.shouldSmooth || this._updateTransitionTarget(this.Items, "y", this.itemPosY);
        this.onScreenEffect(this.onScreenItems);
      }
    }, {
      key: "_performRender",
      value: function _performRender() {
        this._render(this.selected, this.prevSelected);
      }
    }, {
      key: "checkSkipPlinko",
      value: function checkSkipPlinko(t2, i3) {
        var o2 = this;
        if (!t2 || !t2.skipPlinko || [0, this.items.length - 1].includes(this.items.indexOf(t2)))
          return null;
        var r2 = this.items.indexOf(t2), a2 = r2 - this.items.indexOf(i3), l2 = (a2 > 0 ? this.items.slice(r2).map(function(t3) {
          return {
            skipPlinko: t3.skipPlinko,
            index: o2.items.indexOf(t3)
          };
        }) : this.items.slice(0, r2 + 1).map(function(t3) {
          return {
            skipPlinko: t3.skipPlinko,
            index: o2.items.indexOf(t3)
          };
        }).reverse()).find(function(t3) {
          return t3.skipPlinko && !o2.items[t3.index + a2].skipPlinko;
        }), c2 = l2 ? l2.index + a2 : r2 + a2;
        return this.items[c2];
      }
    }, {
      key: "_itemsY",
      get: function get() {
        return l(this.Items);
      }
    }, {
      key: "$removeItem",
      value: function $removeItem(t2) {
        if (t2) {
          var i3 = t2 === this.selected;
          this.Items.childList.remove(t2), this.queueRequestUpdate(), (i3 || this.selectedIndex >= this.items.length) && (this.selectedIndex = this._selectedIndex), this.items.length || this.fireAncestors("$columnEmpty");
        }
      }
    }, {
      key: "$columnChanged",
      value: function $columnChanged() {
        this.queueRequestUpdate();
      }
    }, {
      key: "_isOnScreen",
      value: function _isOnScreen(t2) {
        return !!t2 && this._isComponentVerticallyVisible(t2);
      }
    }, {
      key: "onScreenEffect",
      value: function onScreenEffect() {
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Column";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return ge;
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Column), "_template", this).call(this)), {}, {
          direction: "column"
        });
      }
    }]), Column;
  }();
  var ve = function base$m(t) {
    var i2 = t.spacer.lg, o2 = t.radius.xl, r2 = Math.max(o2 - i2 / 2, 0);
    return {
      height: 8 * t.spacer.md,
      iconStyle: {
        radius: o2,
        width: t.spacer.xxxl,
        height: t.spacer.xxxl
      },
      logoStyle: {
        radius: r2,
        width: 7 * t.spacer.md,
        height: 6 * t.spacer.md
      },
      minWidth: 9 * t.spacer.md,
      paddingX: i2,
      paddingXNoTitle: t.spacer.md,
      prefixPadding: t.spacer.md,
      radius: o2,
      contentSpacing: t.spacer.md
    };
  };
  var xe = Object.freeze({
    __proto__: null,
    base: ve
  });
  var ke = function(t) {
    _inherits(Control, Bt);
    var i2 = _createSuper(Control);
    function Control() {
      return _classCallCheck(this, Control), i2.apply(this, arguments);
    }
    return _createClass(Control, [{
      key: "_update",
      value: function _update() {
        this._updatePrefixStyle(), _get(_getPrototypeOf(Control.prototype), "_update", this).call(this), this._updateCollapseStatus();
      }
    }, {
      key: "_updateCollapseStatus",
      value: function _updateCollapseStatus() {
        this._Title && (this._Title.visible = !this._collapse);
      }
    }, {
      key: "_updatePrefixStyle",
      value: function _updatePrefixStyle() {
        this._prefix && (this.logo ? this._updatePrefixObj(this.logo, {
          style: _objectSpread({
            color: void 0
          }, this.style.logoStyle)
        }) : this.icon && this._updatePrefixObj(this.icon, {
          style: this.style.iconStyle
        }));
      }
    }, {
      key: "_patchTitle",
      value: function _patchTitle(t2, i3) {
        this._Title.patch({
          x: t2,
          mountX: i3
        });
      }
    }, {
      key: "_updateContentPosition",
      value: function _updateContentPosition() {
        if (this._prefix && this._Title)
          switch (this._Content.patch({
            mountX: 0,
            x: this._paddingLeft
          }), this._justify) {
            case "left":
              this._patchTitle(0, 0);
              break;
            case "right":
              if (this.w < this._Prefix.w + this._Title.w)
                this._patchTitle(0, 0);
              else {
                var t2 = this.w - (this._paddingLeft + this._paddingRight + this._Prefix.w + this.style.contentSpacing);
                this._patchTitle(t2, 1);
              }
              break;
            default:
              if (this.fixed) {
                if (this.w < this._Prefix.w + this._Title.w)
                  this._patchTitle(0, 0);
                else {
                  var i3 = (this.w - (this._paddingLeft + this._Prefix.w + this._paddingRight)) / 2;
                  this._patchTitle(i3, 0.5);
                }
              } else {
                var o2 = (this.w - (this._paddingLeft + this._Prefix.w + this.style.contentSpacing + this._paddingRight)) / 2;
                this._patchTitle(o2, 0.5);
              }
          }
        else
          _get(_getPrototypeOf(Control.prototype), "_updateContentPosition", this).call(this), this._Title && this._patchTitle(0, 0);
      }
    }, {
      key: "_setPrefix",
      value: function _setPrefix() {
      }
    }, {
      key: "_setSuffix",
      value: function _setSuffix() {
      }
    }, {
      key: "_updatePrefixObj",
      value: function _updatePrefixObj(t2) {
        var i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._prefix = _objectSpread({
          type: st,
          icon: t2
        }, i3);
      }
    }, {
      key: "_setIcon",
      value: function _setIcon(t2) {
        return this.logo || (t2 ? this._updatePrefixObj(t2, {
          style: this.style.iconStyle
        }) : this._prefix = t2), t2;
      }
    }, {
      key: "_setLogo",
      value: function _setLogo(t2) {
        return t2 ? this._updatePrefixObj(t2, {
          style: _objectSpread({
            color: void 0
          }, this.style.logoStyle)
        }) : this.icon ? this._updatePrefixObj(this.icon, {
          style: this.style.iconStyle
        }) : this._prefix = t2, t2;
      }
    }, {
      key: "_paddingLeft",
      get: function get() {
        return this.logo ? this.style.paddingXNoTitle : this.style.paddingX;
      }
    }, {
      key: "_paddingRight",
      get: function get() {
        return !this.logo || this._hasTitle && !this._collapse ? this.style.paddingX : this.style.paddingXNoTitle;
      }
    }, {
      key: "_collapse",
      get: function get() {
        return this.shouldCollapse && !this._isFocusedMode;
      }
    }, {
      key: "_announceComponentName",
      get: function get() {
        return Control.__componentName;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Control";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return xe;
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Control), "properties", this)), ["icon", "logo", "shouldCollapse"]);
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "titlePadding",
          curr: "contentSpacing"
        }];
      }
    }]), Control;
  }();
  var be = Object.freeze({
    __proto__: null,
    base: function base$l(t) {
      var i2 = ve(t), o2 = 7 * t.spacer.md, r2 = (i2.height - o2) / 2, a2 = Math.max(i2.radius - r2, 0);
      return {
        height: o2,
        logoStyle: {
          radius: Math.max(a2 - i2.paddingX / 2, 0),
          height: 5 * t.spacer.md,
          width: 6 * t.spacer.md
        },
        radius: a2,
        minWidth: 8 * t.spacer.md,
        textStyle: t.typography.button2
      };
    }
  });
  var Se = function(t) {
    _inherits(ControlSmall, ke);
    var i2 = _createSuper(ControlSmall);
    function ControlSmall() {
      return _classCallCheck(this, ControlSmall), i2.apply(this, arguments);
    }
    return _createClass(ControlSmall, null, [{
      key: "__componentName",
      get: function get() {
        return "ControlSmall";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return be;
      }
    }]), ControlSmall;
  }();
  var Ce = Object.freeze({
    __proto__: null,
    base: function base$k(t) {
      return {
        width: getWidthByUpCount(t, 1),
        titleMarginLeft: t.layout.gutterX,
        titleTextStyle: _objectSpread(_objectSpread({}, t.typography.headline1), {}, {
          textColor: t.color.textNeutral
        }),
        titleMarginBottom: t.spacer.lg
      };
    },
    tone: function tone$b(t) {
      return {
        neutral: {
          titleTextStyle: {
            textColor: t.color.textNeutral
          }
        },
        inverse: {
          titleTextStyle: {
            textColor: t.color.textInverse
          }
        },
        brand: {
          titleTextStyle: {
            textColor: t.color.textNeutral
          }
        }
      };
    }
  });
  var we = function(t) {
    _inherits(TitleRow, ft);
    var i2 = _createSuper(TitleRow);
    function TitleRow() {
      return _classCallCheck(this, TitleRow), i2.apply(this, arguments);
    }
    return _createClass(TitleRow, [{
      key: "_titleLoaded",
      value: function _titleLoaded() {
        this._updateRow();
      }
    }, {
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(TitleRow.prototype), "_construct", this).call(this), this._autoResizeHeight = true;
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(TitleRow.prototype), "_update", this).call(this), this._updateTitle(), this._updateRow();
      }
    }, {
      key: "_autoResize",
      value: function _autoResize() {
        this.w = this.w || this.style.w, this.h = this.autoResizeHeight ? this.Items.y + this.Items.h : this.h;
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        this.title ? this._Title.patch({
          x: this.style.titleMarginLeft,
          content: this.title,
          style: {
            textStyle: this.style.titleTextStyle
          }
        }) : this._Title && this._Title.patch({
          h: 0,
          content: ""
        });
      }
    }, {
      key: "_updateRow",
      value: function _updateRow() {
        this.Items.patch({
          y: this.title ? this._Title.finalH + this.style.titleMarginBottom : 0
        });
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this._Title && this._Title.announce;
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(TitleRow.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "TitleRow";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ce;
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread({
          Title: {
            type: At,
            signals: {
              textBoxChanged: "_titleLoaded"
            }
          }
        }, _get(_getPrototypeOf(TitleRow), "_template", this).call(this));
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(TitleRow), "properties", this)), ["title"]);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(TitleRow), "tags", this)), ["Title"]);
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "rowMarginTop",
          curr: "titleMarginBottom"
        }];
      }
    }]), TitleRow;
  }();
  var Te = Object.freeze({
    __proto__: null,
    base: function base$j(t) {
      return {
        extraItemSpacing: t.spacer.lg
      };
    }
  });
  var Ie = function(t) {
    _inherits(ControlRow, we);
    var i2 = _createSuper(ControlRow);
    function ControlRow() {
      return _classCallCheck(this, ControlRow), i2.apply(this, arguments);
    }
    return _createClass(ControlRow, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ControlRow.prototype), "_construct", this).call(this), this._leftControls = [], this._contentItems = [], this._rightControls = [], this._lastLeftControlIndex = -1, this._lastItemIndex = -1, this._lazyLoadBuffer = 0;
      }
    }, {
      key: "_updateContent",
      value: function _updateContent() {
        var t2 = [];
        this.leftControls.length && t2.push.apply(t2, _toConsumableArray(this._withExtraSpacing(this.leftControls, true))), this.contentItems.length && t2.push.apply(t2, _toConsumableArray(this._withExtraSpacing(this.contentItems))), this.rightControls.length && t2.push.apply(t2, _toConsumableArray(this.rightControls)), t2.length && this.patch({
          alpha: 1,
          items: t2,
          selectedIndex: this.leftControls.length,
          startLazyScrollIndex: this.leftControls.length,
          stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
        });
      }
    }, {
      key: "_withExtraSpacing",
      value: function _withExtraSpacing(t2) {
        var i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o2 = _toConsumableArray(t2), r2 = i3 ? this._prevLeftControls : this._prevItems;
        return r2 && r2.length && o2[r2.length - 1] && (o2[r2.length - 1].extraItemSpacing = 0), o2[o2.length - 1].extraItemSpacing = null == this.extraItemSpacing ? this.style.extraItemSpacing : this.extraItemSpacing, i3 ? this._prevLeftControls = o2 : this._prevItems = o2, o2;
      }
    }, {
      key: "_getMoreItems",
      value: function _getMoreItems() {
        if (this.lazyLoadBuffer) {
          var t2 = this.contentItems.length - 1 - this.lazyLoadBuffer;
          this.selectedIndex - this.leftControls.length >= t2 && this.selectedIndex < this.leftControls.length + this.contentItems.length && this.loadMoreItems();
        }
      }
    }, {
      key: "loadMoreItems",
      value: function loadMoreItems() {
        this.signal("loadMoreItems");
      }
    }, {
      key: "_selectedChange",
      value: function _selectedChange(t2, i3) {
        _get(_getPrototypeOf(ControlRow.prototype), "_selectedChange", this).call(this, t2, i3), this._getMoreItems();
      }
    }, {
      key: "_appendItemsAt",
      value: function _appendItemsAt(t2, i3, o2) {
        var r2 = _toConsumableArray(t2);
        null != o2 && (this.items[o2].extraItemSpacing = void 0, r2[r2.length - 1].extraItemSpacing = null == this.extraItemSpacing ? this.style.extraItemSpacing : this.extraItemSpacing), this.appendItemsAt(r2, i3);
      }
    }, {
      key: "addContentItems",
      value: function addContentItems(t2) {
        var i3 = this._createContentItems(t2), o2 = this._lastItemIndex + 1;
        this._appendItemsAt(i3, o2, this._lastItemIndex), this._lastItemIndex += i3.length, this._contentItems && (this._contentItems = [].concat(_toConsumableArray(this.contentItems), _toConsumableArray(i3))), this.patch({
          stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
        });
      }
    }, {
      key: "addContentItemsAt",
      value: function addContentItemsAt(t2, i3) {
        var o2 = this._createContentItems(t2), r2 = this._lastLeftControlIndex + 1 + i3;
        if (r2 === this._lastItemIndex + 1)
          this.addContentItems(o2);
        else {
          var a2;
          if (this._appendItemsAt(o2, r2), this._contentItems)
            (a2 = this._contentItems).splice.apply(a2, [r2, 0].concat(_toConsumableArray(o2))), this._lastItemIndex = this.contentItems.length - 1;
          this.patch({
            stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
          });
        }
      }
    }, {
      key: "removeContentItemAt",
      value: function removeContentItemAt(t2) {
        var i3 = this._lastLeftControlIndex + 1 + t2;
        this.removeItemAt(i3), this._lastItemIndex--, this._contentItems && this._contentItems.splice(t2, 1), this.patch({
          startLazyScrollIndex: this.leftControls.length,
          stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
        });
      }
    }, {
      key: "addLeftControls",
      value: function addLeftControls(t2) {
        var i3 = this._createControls(t2), o2 = this._lastLeftControlIndex + 1;
        this._appendItemsAt(i3, o2, this._lastLeftControlIndex), this._leftControls && (this._leftControls = [].concat(_toConsumableArray(this._leftControls), _toConsumableArray(t2)), this._lastLeftControlIndex = this._leftControls.length - 1, this._lastItemIndex += t2.length), this.patch({
          startLazyScrollIndex: this.leftControls.length,
          stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
        });
      }
    }, {
      key: "addLeftControlsAt",
      value: function addLeftControlsAt(t2, i3) {
        var o2 = this._createControls(t2);
        if (i3 === this._lastLeftControlIndex + 1)
          this.addLeftControls(t2);
        else {
          var r2;
          if (this._appendItemsAt(o2, i3), this.leftControls)
            (r2 = this._leftControls).splice.apply(r2, [i3, 0].concat(_toConsumableArray(t2))), this._lastLeftControlIndex = this._leftControls.length - 1, this._lastItemIndex += t2.length;
          this.patch({
            startLazyScrollIndex: this.leftControls.length,
            stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
          });
        }
      }
    }, {
      key: "removeLeftControlAt",
      value: function removeLeftControlAt(t2) {
        this.removeItemAt(t2), this._lastLeftControlIndex--, this._lastItemIndex--, this.leftControls && this._leftControls.splice(t2, 1), this.patch({
          startLazyScrollIndex: this.leftControls.length,
          stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
        });
      }
    }, {
      key: "addRightControls",
      value: function addRightControls(t2) {
        var i3;
        (i3 = this._rightControls).push.apply(i3, _toConsumableArray(t2)), this._appendItemsAt(this._createControls(t2), this.items.length);
      }
    }, {
      key: "addRightControlsAt",
      value: function addRightControlsAt(t2, i3) {
        var o2, r2 = this._leftControls.length + this._contentItems.length + i3;
        (o2 = this._rightControls).splice.apply(o2, [i3, 0].concat(_toConsumableArray(t2))), this._appendItemsAt(this._createControls(t2), r2);
      }
    }, {
      key: "removeRightControlAt",
      value: function removeRightControlAt(t2) {
        var i3 = this.leftControls.length + this.contentItems.length + t2;
        this.removeItemAt(i3), this.rightControls && this._rightControls.splice(t2, 1);
      }
    }, {
      key: "_createControls",
      value: function _createControls(t2) {
        return t2.map(function(t3) {
          return _objectSpread({
            backgroundType: "fill",
            centerInParent: true
          }, t3);
        });
      }
    }, {
      key: "_createContentItems",
      value: function _createContentItems(t2) {
        return t2.map(function(t3) {
          return _objectSpread(_objectSpread({}, t3), {}, {
            centerInParent: true
          });
        });
      }
    }, {
      key: "_setLeftControls",
      value: function _setLeftControls(t2) {
        this._leftControls = this._createControls(t2), this._lastLeftControlIndex = t2.length - 1, this._updateContent();
      }
    }, {
      key: "_getLeftControls",
      value: function _getLeftControls() {
        return this._leftControls;
      }
    }, {
      key: "_setRightControls",
      value: function _setRightControls(t2) {
        this._rightControls = this._createControls(t2), this._updateContent();
      }
    }, {
      key: "_getRightControls",
      value: function _getRightControls() {
        return this._rightControls;
      }
    }, {
      key: "_getContentItems",
      value: function _getContentItems() {
        return this._contentItems;
      }
    }, {
      key: "_setContentItems",
      value: function _setContentItems(t2) {
        this._contentItems = this._createContentItems(t2), this._lastItemIndex = this._lastLeftControlIndex + t2.length, this._updateContent();
      }
    }, {
      key: "_getLeftControlItems",
      value: function _getLeftControlItems() {
        return this.leftControls.length ? this.items.slice(0, this._lastLeftControlIndex + 1) : [];
      }
    }, {
      key: "_getContentItemItems",
      value: function _getContentItemItems() {
        return this.contentItems.length ? this.items.slice(this._lastLeftControlIndex + 1, this._lastItemIndex + 1) : [];
      }
    }, {
      key: "_getRightControlItems",
      value: function _getRightControlItems() {
        if (this.rightControls.length) {
          var t2 = this._lastItemIndex || this._lastLeftControlIndex;
          return t2 ? this.items.slice(t2 + 1) : this.items;
        }
        return [];
      }
    }, {
      key: "leftControls",
      get: function get() {
        return this._getLeftControls();
      },
      set: function set2(t2) {
        this._setLeftControls(t2);
      }
    }, {
      key: "rightControls",
      get: function get() {
        return this._getRightControls();
      },
      set: function set2(t2) {
        this._setRightControls(t2);
      }
    }, {
      key: "contentItems",
      get: function get() {
        return this._getContentItems();
      },
      set: function set2(t2) {
        this._setContentItems(t2);
      }
    }, {
      key: "lazyLoadBuffer",
      get: function get() {
        return this._lazyLoadBuffer;
      },
      set: function set2(t2) {
        this._lazyLoadBuffer = t2, this._getMoreItems();
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "ControlRow";
      }
    }, {
      key: "__themeStyles",
      get: function get() {
        return Te;
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(ControlRow), "_template", this).call(this)), {}, {
          alpha: 0,
          lazyScroll: true,
          signals: {
            selectedChange: "_getMoreItems"
          }
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ControlRow), "properties", this)), ["extraItemSpacing"]);
      }
    }]), ControlRow;
  }();
  var Ae = Object.freeze({
    __proto__: null,
    base: function base$i(t) {
      return {
        propertyTextStyle: _objectSpread(_objectSpread({}, t.typography.headline1), {}, {
          textColor: t.color.textNeutral
        }),
        valueTextStyle: _objectSpread(_objectSpread({}, t.typography.body1), {}, {
          textColor: t.color.textNeutral
        })
      };
    }
  });
  var Pe = function(t) {
    _inherits(Spacer, tt);
    var i2 = _createSuper(Spacer);
    function Spacer() {
      return _classCallCheck(this, Spacer), i2.apply(this, arguments);
    }
    return _createClass(Spacer, [{
      key: "_update",
      value: function _update() {
        this._Line.w = this.w, this._TickRight.x = this._Line.w, this.lineColor && (this._Line.color = this._TickLeft.color = this._TickRight.color = this.lineColor), this.rotation = this.vertical ? Math.PI / 2 : 0, this.signal("spacerLoaded");
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Spacer";
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Line: {
            h: Spacer._lineThickness,
            rect: true,
            mountY: 0.5,
            TickLeft: _objectSpread(_objectSpread({}, Spacer._tick), {}, {
              x: -1 * Spacer._lineThickness
            }),
            TickRight: Spacer._tick
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ["lineColor"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Line", "TickLeft", "TickRight"];
      }
    }, {
      key: "_lineThickness",
      get: function get() {
        return 3;
      }
    }, {
      key: "_tickLength",
      get: function get() {
        return 25;
      }
    }, {
      key: "_tick",
      get: function get() {
        return {
          rect: true,
          mountY: 0.5,
          w: Spacer._lineThickness,
          h: Spacer._tickLength,
          y: Spacer._lineThickness / 2
        };
      }
    }]), Spacer;
  }();
  var Le = function(t) {
    _inherits(GridOverlay, tt);
    var i2 = _createSuper(GridOverlay);
    function GridOverlay() {
      return _classCallCheck(this, GridOverlay), i2.apply(this, arguments);
    }
    return _createClass(GridOverlay, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(GridOverlay.prototype), "_construct", this).call(this), this._showColumns = this._showMargins = this._showSafe = this._showGutters = this._showText = true;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateGlobalThemeProps(), this._updateMargins(), this._updateSafe(), this._updateColumns(), this._updateGutters(), this._updateText(), this._updateVisibility();
      }
    }, {
      key: "_updateVisibility",
      value: function _updateVisibility() {
        this._Columns.smooth = {
          alpha: Number(this.showColumns)
        }, this._Margins.smooth = {
          alpha: Number(this.showMargins)
        }, this._Safe.smooth = {
          alpha: Number(this.showSafe)
        }, this._Gutters.smooth = {
          alpha: Number(this.showGutters)
        }, this._TextPanel.smooth = {
          alpha: Number(this.showText)
        };
      }
    }, {
      key: "_updateGlobalThemeProps",
      value: function _updateGlobalThemeProps() {
        var t2 = I.theme, i3 = t2.layout, o2 = t2.color, r2 = i3.screenW, a2 = i3.screenH, l2 = i3.columnCount, c2 = i3.marginX, u2 = i3.marginY, h2 = i3.gutterX, d2 = i3.gutterY, p2 = i3.safe;
        this._screenW = r2, this._screenH = a2, this._columnCount = l2, this._marginX = c2, this._marginY = u2, this._safe = p2, this._gutterX = h2, this._gutterY = d2, this._columnColor = o2.interactiveNeutralFocusSoft, this._marginColor = o2.green, this._safeColor = o2.red, this._gutterColor = o2.blue;
      }
    }, {
      key: "_updateMargins",
      value: function _updateMargins() {
        var t2 = {
          lineColor: this._marginColor
        }, i3 = _objectSpread(_objectSpread({}, t2), {}, {
          w: this._marginX
        });
        this._MarginHorizontal.y = this._screenH / 2, this._MarginLeft.patch(i3), this._MarginRight.patch(i3), this._MarginRight.x = this._screenW - this._marginX;
        var o2 = _objectSpread(_objectSpread({}, t2), {}, {
          w: this._marginY
        });
        this._MarginVertical.x = this._marginX - o2.w / 2, this._MarginTop.patch(o2), this._MarginTop.patch(o2), this._MarginTop.y = o2.w / 2;
      }
    }, {
      key: "_updateSafe",
      value: function _updateSafe() {
        var t2 = {
          lineColor: this._safeColor,
          w: this._safe
        };
        this._SafeHorizontal.y = this._screenH / 4, this._SafeLeft.patch(t2), this._SafeRight.patch(t2), this._SafeRight.x = this._screenW - this._safe, this._SafeVertical.x = (this._screenW - t2.w) / 2, this._SafeVertical.y = t2.w / 2, this._SafeTop.patch(t2), this._SafeBottom.patch(t2), this._SafeBottom.y = this._screenH - this._safe;
      }
    }, {
      key: "_updateColumns",
      value: function _updateColumns() {
        this._Columns.patch({
          w: this._screenW,
          h: this._screenH,
          x: this._marginX,
          style: {
            itemSpacing: this._gutterX
          },
          items: this._columnRects
        });
      }
    }, {
      key: "_columnRects",
      get: function get() {
        var t2 = this;
        return Array.apply(null, {
          length: this._columnCount
        }).map(function() {
          return {
            rect: true,
            w: getWidthByColumnSpan(t2.theme, 1),
            h: t2._screenH,
            color: t2._columnColor
          };
        });
      }
    }, {
      key: "_updateGutters",
      value: function _updateGutters() {
        var t2 = {
          lineColor: this._gutterColor,
          w: this._gutterY
        };
        this._GutterHorizontal.patch(_objectSpread(_objectSpread({}, t2), {}, {
          x: (this._screenW - t2.w) / 2,
          y: this._screenH / 4
        }));
      }
    }, {
      key: "_updatePropertyTextStyle",
      value: function _updatePropertyTextStyle(t2, i3) {
        var o2 = {
          textStyle: _objectSpread({}, this.style.propertyTextStyle)
        };
        i3 && (o2.textStyle.textColor = i3), t2.Items.tag("Property").style = o2;
      }
    }, {
      key: "_updateValueTextStyle",
      value: function _updateValueTextStyle(t2) {
        t2.Items.tag("Value").style = {
          textStyle: this.style.valueTextStyle
        };
      }
    }, {
      key: "_updateText",
      value: function _updateText() {
        var t2 = "Property", i3 = "Value";
        this._TextPanel.x = this._screenW - this._marginX - getWidthByColumnSpan(this.theme, 3), this._TextPanel.y = this._safe, this._TextScreenW.Items.tag(t2).content = "Screen Width", this._TextScreenW.Items.tag(i3).content = "".concat(this._screenW, "px"), this._updatePropertyTextStyle(this._TextScreenW), this._updateValueTextStyle(this._TextScreenW), this._TextScreenH.Items.tag(t2).content = "Screen Height", this._TextScreenH.Items.tag(i3).content = "".concat(this._screenH, "px"), this._updatePropertyTextStyle(this._TextScreenH), this._updateValueTextStyle(this._TextScreenH), this._TextColumnCount.Items.tag(t2).content = "Columns", this._TextColumnCount.Items.tag(i3).content = "".concat(this._columnCount, ", ").concat(Math.round(getWidthByColumnSpan(this.theme, 1)), "px each"), this._updatePropertyTextStyle(this._TextColumnCount), this._updateValueTextStyle(this._TextColumnCount), this._TextMarginX.Items.tag(t2).content = "Margin-X", this._TextMarginX.Items.tag(i3).content = "".concat(this._marginX, "px"), this._updatePropertyTextStyle(this._TextMarginX, this._marginColor), this._updateValueTextStyle(this._TextMarginX), this._TextMarginY.Items.tag(t2).content = "Margin-Y", this._TextMarginY.Items.tag(i3).content = "".concat(this._marginY, "px"), this._updatePropertyTextStyle(this._TextMarginY, this._marginColor), this._updateValueTextStyle(this._TextMarginY), this._TextGutterX.Items.tag(t2).content = "Gutter-X", this._TextGutterX.Items.tag(i3).content = "".concat(this._gutterX, "px"), this._updatePropertyTextStyle(this._TextGutterX, this._gutterColor), this._updateValueTextStyle(this._TextGutterX), this._TextGutterY.Items.tag(t2).content = "Gutter-Y", this._TextGutterY.Items.tag(i3).content = "".concat(this._gutterY, "px"), this._updatePropertyTextStyle(this._TextGutterY, this._gutterColor), this._updateValueTextStyle(this._TextGutterY), this._TextSafe.Items.tag(t2).content = "Safe", this._TextSafe.Items.tag(i3).content = "".concat(this._safe, "px"), this._updatePropertyTextStyle(this._TextSafe, this._safeColor), this._updateValueTextStyle(this._TextSafe);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "GridOverlay";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ae;
      }
    }, {
      key: "_template",
      value: function _template() {
        var t2 = {
          type: ft,
          autoResizeHeight: true,
          Items: {
            Property: {
              type: At,
              signals: {
                textBoxChanged: "_update"
              }
            },
            Value: {
              type: At,
              signals: {
                textBoxChanged: "_update"
              },
              centerInParent: true
            }
          }
        };
        return {
          Columns: {
            alpha: 1e-3,
            type: ft
          },
          Margins: {
            alpha: 1e-3,
            Horizontal: {
              Left: {
                type: Pe,
                signals: {
                  spacerLoaded: "_update"
                }
              },
              Right: {
                type: Pe,
                signals: {
                  spacerLoaded: "_update"
                }
              }
            },
            Vertical: {
              Top: {
                type: Pe,
                vertical: true
              }
            }
          },
          Safe: {
            alpha: 1e-3,
            Horizontal: {
              Left: {
                type: Pe,
                signals: {
                  spacerLoaded: "_update"
                }
              },
              Right: {
                type: Pe,
                signals: {
                  spacerLoaded: "_update"
                }
              }
            },
            Vertical: {
              Top: {
                type: Pe,
                vertical: true
              },
              Bottom: {
                type: Pe,
                vertical: true
              }
            }
          },
          Gutters: {
            alpha: 1e-3,
            Horizontal: {
              type: Pe,
              signals: {
                spacerLoaded: "_update"
              }
            }
          },
          TextPanel: {
            alpha: 1e-3,
            type: me,
            autoResizeHeight: true,
            Items: {
              ScreenW: t2,
              ScreenH: t2,
              ColumnCount: t2,
              MarginX: t2,
              MarginY: t2,
              GutterX: t2,
              GutterY: t2,
              Safe: t2
            }
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ["showColumns", "showMargins", "showSafe", "showGutters", "showText"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Columns", "Margins", {
          name: "MarginHorizontal",
          path: "Margins.Horizontal"
        }, {
          name: "MarginLeft",
          path: "Margins.Horizontal.Left"
        }, {
          name: "MarginRight",
          path: "Margins.Horizontal.Right"
        }, {
          name: "MarginVertical",
          path: "Margins.Vertical"
        }, {
          name: "MarginTop",
          path: "Margins.Vertical.Top"
        }, "Safe", {
          name: "SafeHorizontal",
          path: "Safe.Horizontal"
        }, {
          name: "SafeLeft",
          path: "Safe.Horizontal.Left"
        }, {
          name: "SafeRight",
          path: "Safe.Horizontal.Right"
        }, {
          name: "SafeVertical",
          path: "Safe.Vertical"
        }, {
          name: "SafeTop",
          path: "Safe.Vertical.Top"
        }, {
          name: "SafeBottom",
          path: "Safe.Vertical.Bottom"
        }, "Gutters", {
          name: "GutterHorizontal",
          path: "Gutters.Horizontal"
        }, "TextPanel", {
          name: "TextScreenW",
          path: "TextPanel.Items.ScreenW"
        }, {
          name: "TextScreenH",
          path: "TextPanel.Items.ScreenH"
        }, {
          name: "TextColumnCount",
          path: "TextPanel.Items.ColumnCount"
        }, {
          name: "TextMarginX",
          path: "TextPanel.Items.MarginX"
        }, {
          name: "TextMarginY",
          path: "TextPanel.Items.MarginY"
        }, {
          name: "TextGutterX",
          path: "TextPanel.Items.GutterX"
        }, {
          name: "TextGutterY",
          path: "TextPanel.Items.GutterY"
        }, {
          name: "TextSafe",
          path: "TextPanel.Items.Safe"
        }];
      }
    }]), GridOverlay;
  }();
  var Be = Object.freeze({
    __proto__: null,
    base: function base$h(t) {
      return {
        cursorStyle: {
          textColor: t.color.textNeutral,
          blink: true,
          width: t.spacer.xs,
          height: t.spacer.xxl
        },
        eyebrowTextStyle: _objectSpread(_objectSpread({}, t.typography.caption1), {}, {
          maxLines: 1,
          textColor: t.color.textNeutral
        }),
        helpTextStyle: _objectSpread(_objectSpread({}, t.typography.caption1), {}, {
          maxLines: 1,
          textColor: t.color.textNeutralSecondary
        }),
        minWidth: getWidthByUpCount(t, 4),
        paddingX: t.spacer.xl,
        paddingY: t.spacer.xl
      };
    },
    mode: function mode$6(t) {
      return {
        disabled: {
          eyebrowTextStyle: {
            textColor: t.color.textNeutralDisabled
          },
          helpTextStyle: {
            textColor: t.color.textNeutralDisabled
          }
        },
        focused: {
          cursorStyle: {
            textColor: t.color.textInverse
          },
          eyebrowTextStyle: {
            textColor: t.color.textNeutral
          },
          helpTextStyle: {
            textColor: t.color.textNeutralSecondary
          }
        }
      };
    },
    tone: function tone$a(t) {
      return {
        inverse: {
          mode: {
            focused: {
              eyebrowTextStyle: {
                textColor: t.color.textNeutral
              },
              helpTextStyle: {
                textColor: t.color.textNeutral
              }
            }
          }
        }
      };
    }
  });
  var Oe = function(t) {
    _inherits(Input, Pt);
    var i2 = _createSuper(Input);
    function Input() {
      return _classCallCheck(this, Input), i2.apply(this, arguments);
    }
    return _createClass(Input, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Input.prototype), "_construct", this).call(this), this._title = "", this.actualTitle = "", this.position = this.title ? this.title.length : 0, this._justify = "left", this._fixed = true, this.w = this.style.minWidth;
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        _get(_getPrototypeOf(Input.prototype), "$itemChanged", this).call(this), this._updateTextWrapper(), this._updateHiddenContent(), this._updateCursorPosition(), this._updateTitleScrollPosition();
      }
    }, {
      key: "_onTitleTextBoxChanged",
      value: function _onTitleTextBoxChanged() {
        this._updateHiddenContent();
      }
    }, {
      key: "_onHiddenTextBoxChanged",
      value: function _onHiddenTextBoxChanged() {
        this._updateCursorPosition();
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updatePassword(), _get(_getPrototypeOf(Input.prototype), "_update", this).call(this), this._updateEyebrow(), this._updateHelpText(), this._updateTextWrapper(), this._updateHiddenContent(), this._updateCursor(), this._updateCursorListening(), this._updateCursorBlink(), this._updateCursorPosition(), this._updateTitleScrollPosition();
      }
    }, {
      key: "_updatePassword",
      value: function _updatePassword() {
        this.title = this.password ? this.mask.repeat(this.actualTitle.length) : this.actualTitle;
      }
    }, {
      key: "_updateTruncation",
      value: function _updateTruncation() {
        this._Title && this._Title.patch({
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
              wordWrap: false
            })
          }
        });
      }
    }, {
      key: "_updateEyebrow",
      value: function _updateEyebrow() {
        this._Eyebrow.patch({
          content: this.eyebrow,
          style: {
            textStyle: this.style.eyebrowTextStyle
          },
          mountY: 1,
          x: this.style.paddingX,
          y: this.y - this.style.paddingY
        });
      }
    }, {
      key: "_updateHelpText",
      value: function _updateHelpText() {
        this._HelpText.patch({
          content: this.helpText,
          style: {
            textStyle: this.style.helpTextStyle
          },
          x: this.style.paddingX,
          y: this.y + this.innerH + this.style.paddingY
        });
      }
    }, {
      key: "_updateTextWrapper",
      value: function _updateTextWrapper() {
        this._TextWrapper.clipping = true, this._TextWrapper.w = this._visibleContentWidth, this._Title && (this._TextWrapper.h = this._Title.h);
      }
    }, {
      key: "_updateHiddenContent",
      value: function _updateHiddenContent() {
        this._HiddenContent || this._Content.patch({
          HiddenContent: {
            type: At,
            mountY: 0.5,
            y: function y(t3) {
              return t3 / 2;
            },
            signals: {
              textBoxChanged: "_onHiddenTextBoxChanged"
            }
          }
        });
        var t2 = this.title, i3 = void 0 === t2 ? "" : t2, o2 = this.position, r2 = this.password, a2 = this.mask, l2 = r2 ? a2.repeat(i3.length).substring(0, o2) : i3.substring(0, o2);
        this._HiddenContent.patch({
          style: {
            textStyle: this.style.textStyle
          },
          content: l2
        }), this._HiddenContent._Text && this._HiddenContent._Text.patch({
          alpha: 1e-3
        });
      }
    }, {
      key: "_updateCursor",
      value: function _updateCursor() {
        this.style.cursorStyle && this.style.cursorStyle.blink && (this._Cursor || (this._Content.patch({
          Cursor: {
            rect: true,
            mountY: 0.5
          }
        }), this.cursorBlink = this._Cursor.animation({
          duration: 1.5,
          repeat: -1,
          actions: [{
            p: "alpha",
            v: {
              0: 0,
              0.5: 1,
              1: 0
            }
          }]
        })), this._Cursor.patch(this.style.cursorStyle));
      }
    }, {
      key: "_updateCursorListening",
      value: function _updateCursorListening() {
        this._isDisabledMode ? this.cursorBlink && (this.isCursorActive ? this.cursorBlink.start() : this.cursorBlink.stop()) : this.cursorBlink && !this.cursorBlink.isPlaying() && this.cursorBlink.start(), this._Cursor.smooth = {
          color: this.style.cursorStyle.textColor
        };
      }
    }, {
      key: "_updateCursorBlink",
      value: function _updateCursorBlink() {
        this.cursorBlink && (this.isCursorActive ? this.cursorBlink.start() : (this.cursorBlink.stop(), this._Cursor.patch({
          alpha: 1e-3
        })));
      }
    }, {
      key: "_updateCursorPosition",
      value: function _updateCursorPosition() {
        this._Cursor.x = this._titleX + (this._isOverflow ? this._TextWrapper.w : this._HiddenContent.w);
      }
    }, {
      key: "_updateTitleScrollPosition",
      value: function _updateTitleScrollPosition() {
        this._Title && (this._Title.x = this._isOverflow ? this._visibleContentWidth - this._HiddenContent.w : 0, this._HiddenContent && this._TextWrapper && (this._HiddenContent.x = this._TextWrapper.x + this._Title.x));
      }
    }, {
      key: "_suffixX",
      get: function get() {
        var t2 = this._hasPrefix ? this.w - this._paddingLeft - this._paddingRight - this._prefixW : this.w - this._paddingLeft - this._paddingRight - this.style.paddingX;
        return t2 > 0 ? t2 : 0;
      }
    }, {
      key: "isCursorActive",
      get: function get() {
        return this.listening && (this._isFocusedMode || this._isUnfocusedMode);
      }
    }, {
      key: "_isOverflow",
      get: function get() {
        return this._HiddenContent.w > this._visibleContentWidth;
      }
    }, {
      key: "_visibleContentWidth",
      get: function get() {
        return this._fixedWordWrapWidth;
      }
    }, {
      key: "value",
      get: function get() {
        return this.actualTitle;
      },
      set: function set2(t2) {
        this.title = this.actualTitle = t2, this.position = 0, this._updatePassword();
      }
    }, {
      key: "clear",
      value: function clear4() {
        this.isCursorActive && (this.title = this.actualTitle = "", this.position = 0);
      }
    }, {
      key: "insert",
      value: function insert(t2) {
        this.isCursorActive && (this.actualTitle = this.actualTitle.slice(0, this.position) + t2 + this.actualTitle.slice(this.position), this._updatePassword(), this.position += t2.length);
      }
    }, {
      key: "backspace",
      value: function backspace() {
        this.isCursorActive && this.position > 0 && (this.actualTitle = this.actualTitle.slice(0, this.position - 1) + this.actualTitle.slice(this.position), this._updatePassword(), this.position--);
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return !this._isDisabledMode && (this.moveLeft(), "function" != typeof this.onLeft || this.onLeft(this));
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return !this._isDisabledMode && (this.moveRight(), "function" != typeof this.onRight || this.onRight(this));
      }
    }, {
      key: "moveLeft",
      value: function moveLeft() {
        return this.position >= 0 && (this.position--, true);
      }
    }, {
      key: "moveRight",
      value: function moveRight() {
        return this.position < this.title.length && (this.position++, true);
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce ? this._announce : this.password ? [this.eyebrow, this.helpText] : [this.eyebrow, "Input: " + this.title, this.helpText];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Input.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Input";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Be;
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Input), "_template", this).call(this)), {}, {
          Eyebrow: {
            type: At
          },
          HelpText: {
            type: At
          }
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Input), "properties", this)), ["actualTitle", "cursor", "eyebrow", "helpText", "listening", "mask", "password", "position"]);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Input), "tags", this)), ["Eyebrow", "HelpText", {
          name: "Cursor",
          path: "Content.Cursor"
        }, {
          name: "HiddenContent",
          path: "Content.HiddenContent"
        }]);
      }
    }]), Input;
  }();
  var We = Object.freeze({
    __proto__: null,
    base: function base$g(t) {
      var i2 = t.typography.headline2;
      return {
        height: 9 * t.spacer.md,
        minWidth: 7 * t.spacer.md,
        paddingX: t.spacer.md,
        textStyle: i2,
        sizes: {
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 5
        },
        baseWidth: 7 * t.spacer.md,
        iconWidth: i2.lineHeight,
        iconHeight: i2.lineHeight
      };
    }
  });
  var je = {
    a: "alpha",
    b: "bravo",
    c: "charlie",
    d: "delta",
    e: "echo",
    f: "foxtrot",
    g: "golf",
    h: "hotel",
    i: "india",
    j: "juliett",
    k: "kilo",
    l: "lima",
    m: "mike",
    n: "november",
    o: "oscar",
    p: "papa",
    q: "quebec",
    r: "romeo",
    s: "sierra",
    t: "tango",
    u: "uniform",
    v: "victor",
    w: "whiskey",
    x: "x-ray",
    y: "yankee",
    z: "zulu"
  };
  function getNato(t) {
    return function isAlphaChar(t2) {
      return /^[A-Za-z]$/.test(t2);
    }(t) ? "".concat(t, ", ").concat(je[t.toLowerCase()]) : t;
  }
  var Me = function(t) {
    _inherits(Key, Pt);
    var i2 = _createSuper(Key);
    function Key() {
      return _classCallCheck(this, Key), i2.apply(this, arguments);
    }
    return _createClass(Key, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Key.prototype), "_construct", this).call(this), this._size = "sm", this._keySpacing = 0;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updatePrefixStyle(), _get(_getPrototypeOf(Key.prototype), "_update", this).call(this);
      }
    }, {
      key: "_calcDynamicWidth",
      value: function _calcDynamicWidth() {
        var t2 = this.style.sizes[this.size || "sm"];
        return this.style.baseWidth * t2 + this.keySpacing * (t2 - 1);
      }
    }, {
      key: "_updatePrefixStyle",
      value: function _updatePrefixStyle() {
        this._prefix && this.icon && this._updatePrefixObj(this.icon, {
          style: this.style.iconStyle
        });
      }
    }, {
      key: "_updatePrefixObj",
      value: function _updatePrefixObj(t2) {
        var i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._prefix = _objectSpread({
          type: st,
          icon: t2,
          w: this.style.iconWidth,
          h: this.style.iconHeight
        }, i3);
      }
    }, {
      key: "_setIcon",
      value: function _setIcon(t2) {
        return t2 ? this._updatePrefixObj(t2, {
          style: this.style.iconStyle
        }) : this._prefix = t2, t2;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce ? this._announce : function isUpperCase(t2) {
          return /^[A-Z]$/.test(t2);
        }(this.title) ? "Capital ".concat(getNato(this.title), ", button") : getNato(this.title) + ", button";
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Key.prototype), "announce", t2, this, true);
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        return "function" == typeof this.onEnter ? this.onEnter(this) : (this.toggle && this.fireAncestors("$toggleKeyboard", this.toggle), this.fireAncestors("$onSoftKey", {
          key: this.keyId || this.title,
          toggle: this.toggle
        }), false);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Key";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return We;
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Key), "properties", this)), ["icon", "size", "toggle", "keySpacing"]);
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "iconH",
          curr: "iconHeight"
        }, {
          prev: "iconW",
          curr: "iconWidth"
        }];
      }
    }]), Key;
  }();
  var Re = Object.freeze({
    __proto__: null,
    base: function base$f(t) {
      return {
        keySpacing: t.spacer.md,
        screenW: t.layout.screenW,
        marginX: t.layout.marginX,
        inputSpacing: 10 * t.spacer.md + t.spacer.md,
        inputStyle: {
          radius: t.radius.md
        }
      };
    }
  });
  var De = function capitalize(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  };
  var Ne = function(t) {
    _inherits(Keyboard, tt);
    var i2 = _createSuper(Keyboard);
    function Keyboard() {
      return _classCallCheck(this, Keyboard), i2.apply(this, arguments);
    }
    return _createClass(Keyboard, [{
      key: "_init",
      value: function _init() {
        this._setShouldUpdateThemeBound = this._setShouldUpdateTheme.bind(this), I.on("themeUpdate", this._setShouldUpdateThemeBound), _get(_getPrototypeOf(Keyboard.prototype), "_init", this).call(this);
      }
    }, {
      key: "_setShouldUpdateTheme",
      value: function _setShouldUpdateTheme() {
        this.shouldUpdateTheme = true;
      }
    }, {
      key: "_detach",
      value: function _detach() {
        _get(_getPrototypeOf(Keyboard.prototype), "_detach", this).call(this), I.off("themeUpdate", this._setShouldUpdateThemeBound);
      }
    }, {
      key: "_focus",
      value: function _focus() {
        _get(_getPrototypeOf(Keyboard.prototype), "_focus", this).call(this), this.fireAncestors("$keyboardFocused", true);
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this._currentKeyboard || this;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._currentFormat || (this._currentFormat = this.defaultFormat), this.centerKeyboard ? this.x = (this.style.screenW - this.w) / 2 - this.style.marginX : this.x = 0, this._formatsChanged || this.shouldUpdateTheme ? (this._createFormat(this._currentFormat), this._refocus(), this._formatsChanged = false, this.shouldUpdateTheme = false) : this._formatKeys();
      }
    }, {
      key: "_createFormat",
      value: function _createFormat(t2) {
        var i3 = this.formats[t2];
        if (i3) {
          var o2 = this._formatKeyboardData(i3);
          this._createKeyboard(t2, this._createRows(o2, t2));
        }
      }
    }, {
      key: "_createKeyboard",
      value: function _createKeyboard(t2) {
        var i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        t2 = De(t2), 1 === i3.length ? this.patch(_defineProperty({}, t2, i3[0])) : this.patch(_defineProperty({}, t2, {
          type: me,
          plinko: true,
          items: i3,
          style: {
            itemSpacing: this.style.keySpacing
          },
          autoResizeWidth: true,
          autoResizeHeight: true,
          neverScroll: true
        }));
      }
    }, {
      key: "_createRows",
      value: function _createRows() {
        var t2 = this, i3 = arguments.length > 1 ? arguments[1] : void 0;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(o2) {
          return {
            type: ft,
            autoResizeHeight: true,
            autoResizeWidth: true,
            centerInParent: t2.centerKeyboard,
            neverScroll: true,
            wrapSelected: void 0 === t2.rowWrap || t2.rowWrap,
            style: {
              itemSpacing: t2.style.keySpacing
            },
            items: t2._createKeys(o2, i3)
          };
        });
      }
    }, {
      key: "_createKeys",
      value: function _createKeys() {
        var t2 = this, i3 = arguments.length > 1 ? arguments[1] : void 0;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(o2) {
          if (!o2)
            return {
              skipFocus: true
            };
          var r2 = {
            type: t2.keyComponent || Me,
            keySpacing: t2.style.keySpacing
          };
          if ("object" === _typeof(o2)) {
            var a2, l2, c2, u2 = o2.keyId || o2.title, h2 = (null === (a2 = t2.style.keyProps) || void 0 === a2 || null === (a2 = a2[i3]) || void 0 === a2 ? void 0 : a2[u2]) || (null === (l2 = t2.style.keyProps) || void 0 === l2 ? void 0 : l2[u2]);
            return h2 && h2.icon ? _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, r2), o2), null === (c2 = t2.style.keyProps) || void 0 === c2 ? void 0 : c2[u2]), {}, {
              style: {
                iconStyle: _objectSpread({}, h2.iconStyle)
              },
              size: h2.size || o2.size
            }) : _objectSpread(_objectSpread({}, r2), o2);
          }
          return _objectSpread(_objectSpread({}, r2), {}, {
            title: o2
          });
        });
      }
    }, {
      key: "_formatKeyboardData",
      value: function _formatKeyboardData() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (Array.isArray(t2) && t2.length) {
          if (!Array.isArray(t2[0]) && !this.inline) {
            var i3, o2, r2 = [];
            for (i3 = 0, o2 = -1; i3 < t2.length; i3++)
              i3 % this.columnCount == 0 && (r2[++o2] = []), r2[o2].push(t2[i3]);
            return r2;
          }
          return this.inline ? [t2] : t2;
        }
      }
    }, {
      key: "_formatKeys",
      value: function _formatKeys() {
        var t2 = this;
        Object.keys(this.formats).forEach(function(i3) {
          var o2 = t2.tag(De(i3));
          o2 && (o2.patch({
            style: {
              itemSpacing: t2.style.keySpacing
            }
          }), o2.items.forEach(function(i4) {
            i4.patch({
              style: {
                itemSpacing: t2.style.keySpacing
              },
              centerInParent: t2.centerKeys,
              wrapSelected: void 0 === t2.rowWrap || t2.rowWrap
            });
          }), o2.queueRequestUpdate());
        });
      }
    }, {
      key: "$toggleKeyboard",
      value: function $toggleKeyboard(t2) {
        var i3 = De(t2);
        if (t2 !== this._currentFormat) {
          this._createFormat(t2);
          var o2 = this.tag(i3);
          this.selectKeyOn(o2), this._currentKeyboard.alpha = 0, o2.alpha = 1, this._currentFormat = t2;
        }
      }
    }, {
      key: "selectKeyOn",
      value: function selectKeyOn(t2) {
        var i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getSelectedKey(), o2 = i3.row, r2 = i3.column;
        t2 && t2.constructor && ("Row" === t2.constructor.name ? t2.selectedIndex = r2 : (t2.selectedIndex = o2, t2.selected.selectedIndex = r2));
      }
    }, {
      key: "getSelectedKey",
      value: function getSelectedKey() {
        var t2, i3, o2 = this._currentKeyboard;
        return "Row" === o2.constructor.name ? (t2 = 0, i3 = o2.selectedIndex) : (t2 = o2.selectedIndex, i3 = o2.selected.selectedIndex), {
          row: t2,
          column: i3
        };
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        this.w = this._currentKeyboard.w, this.fireAncestors("$itemChanged"), this.signal("keyboardWidthChanged");
      }
    }, {
      key: "_setFormats",
      value: function _setFormats() {
        var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return this._formatsChanged = true, t2;
      }
    }, {
      key: "defaultFormat",
      get: function get() {
        return this._defaultFormat || Object.keys(this.formats)[0];
      },
      set: function set2(t2) {
        this._defaultFormat = t2;
      }
    }, {
      key: "_currentKeyboard",
      get: function get() {
        return this.tag(De(this._currentFormat));
      }
    }, {
      key: "columnCount",
      get: function get() {
        return this._columnCount ? this._columnCount : this.rowCount ? this.formats[this.defaultFormat.toLowerCase()].length / this.rowCount : this.inline ? this.formats[this.defaultFormat.toLowerCase()].length : 11;
      },
      set: function set2(t2) {
        this._columnCount = t2;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce ? this._announce : "Keyboard" + (this.title ? ", ".concat(this.title) : "");
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Keyboard.prototype), "announce", t2, this, true);
      }
    }, {
      key: "announceContext",
      get: function get() {
        return this._announceContext || ["PAUSE-2", "Use arrow keys to choose characters, press center to select"];
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Keyboard.prototype), "announceContext", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Keyboard";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Re;
      }
    }, {
      key: "properties",
      get: function get() {
        return ["formats", "centerKeyboard", "rowWrap", "centerKeys", "keyComponent"];
      }
    }]), Keyboard;
  }();
  var Ee = function(t) {
    _inherits(KeyboardEmail, Ne);
    var i2 = _createSuper(KeyboardEmail);
    function KeyboardEmail() {
      return _classCallCheck(this, KeyboardEmail), i2.apply(this, arguments);
    }
    return _createClass(KeyboardEmail, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(KeyboardEmail.prototype), "_construct", this).call(this), this.formats = this.emailFormat;
      }
    }, {
      key: "emailFormat",
      get: function get() {
        return {
          uppercase: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", {
            title: "#@!",
            size: "md",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }], ["A", "S", "D", "F", "G", "H", "J", "K", "L", "@", {
            title: "\xE1\xF6\xFB",
            size: "md",
            toggle: "accents",
            announce: "accents, button",
            keyId: "accents"
          }], ["Z", "X", "C", "V", "B", "N", "M", {
            title: ".",
            announce: "period, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "_",
            announce: "underscore, button"
          }, {
            title: "shift",
            size: "md",
            toggle: "lowercase",
            announce: "shift off, button",
            keyId: "shift"
          }], [{
            title: ".com",
            announce: "dot, com",
            size: "md"
          }, {
            title: ".net",
            announce: "dot, net",
            size: "md"
          }, {
            title: ".edu",
            announce: "dot, edu",
            size: "md"
          }, {
            title: ".org",
            announce: "dot, org",
            size: "md"
          }, {
            title: ".co",
            announce: "dot, co",
            size: "md"
          }, {
            title: ".uk",
            announce: "dot, uk",
            size: "md"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]],
          lowercase: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", {
            title: "#@!",
            size: "md",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }], ["a", "s", "d", "f", "g", "h", "j", "k", "l", "@", {
            title: "\xE1\xF6\xFB",
            size: "md",
            toggle: "accents",
            announce: "accents, button",
            keyId: "accents"
          }], ["z", "x", "c", "v", "b", "n", "m", {
            title: "_",
            announce: "underscore, button"
          }, {
            title: ".",
            announce: "period, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "shift",
            size: "md",
            toggle: "uppercase",
            announce: "shift on, button",
            keyId: "shift"
          }], [{
            title: ".com",
            announce: "dot, com",
            size: "md"
          }, {
            title: ".net",
            announce: "dot, net",
            size: "md"
          }, {
            title: ".edu",
            announce: "dot, edu",
            size: "md"
          }, {
            title: ".org",
            announce: "dot, org",
            size: "md"
          }, {
            title: ".co",
            announce: "dot, co",
            size: "md"
          }, {
            title: ".uk",
            announce: "dot, uk",
            size: "md"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]],
          accents: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], ["\xE4", "\xEB", "\xEF", "\xF6", "\xFC", "\xFF", "\xE0", "\xE8", "\xEC", "\xF2", {
            title: "#@!",
            size: "md",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }], ["\xF9", "\xE1", "\xE9", "\xED", "\xF3", "\xFA", "\xFD", "\xE2", "\xEA", "@", {
            title: "abc",
            size: "md",
            toggle: "lowercase",
            announce: "alpha mode, button"
          }], ["\xEE", "\xF4", "\xFB", "\xE3", "\xF1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", {
            title: "_",
            announce: "underscore, button"
          }, {
            title: ".",
            announce: "period, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "shift",
            size: "md",
            toggle: "accentsUpper",
            announce: "shift off, button",
            keyId: "shift"
          }], [{
            title: ".com",
            announce: "dot, com",
            size: "md"
          }, {
            title: ".net",
            announce: "dot, net",
            size: "md"
          }, {
            title: ".edu",
            announce: "dot, edu",
            size: "md"
          }, {
            title: ".org",
            announce: "dot, org",
            size: "md"
          }, {
            title: ".co",
            announce: "dot, co",
            size: "md"
          }, {
            title: ".uk",
            announce: "dot, uk",
            size: "md"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]],
          accentsUpper: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], ["\xC4", "\xCB", "\xCF", "\xD6", "\xDC", "\u0178", "\xC0", "\xC8", "\xCC", "\xD2", {
            title: "#@!",
            size: "md",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }], ["\xD9", "\xC1", "\xC9", "\xCD", "\xD3", "\xDA", "\xDD", "\xC2", "\xCA", "@", {
            title: "abc",
            size: "md",
            toggle: "lowercase",
            announce: "alpha mode, button"
          }], ["\xCE", "\xD4", "\xDB", "\xC3", "\xD1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", {
            title: "_",
            announce: "underscore, button"
          }, {
            title: ".",
            announce: "period, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "shift",
            size: "md",
            toggle: "accents",
            announce: "shift off, button",
            keyId: "shift"
          }], [{
            title: ".com",
            announce: "dot, com",
            size: "md"
          }, {
            title: ".net",
            announce: "dot, net",
            size: "md"
          }, {
            title: ".edu",
            announce: "dot, edu",
            size: "md"
          }, {
            title: ".org",
            announce: "dot, org",
            size: "md"
          }, {
            title: ".co",
            announce: "dot, co",
            size: "md"
          }, {
            title: ".uk",
            announce: "dot, uk",
            size: "md"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]],
          symbols: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], [{
            title: "!",
            announce: "exclamation, button"
          }, "@", "#", "$", "%", {
            title: "^",
            announce: "caret circumflex, button"
          }, "&", "*", {
            title: "(",
            announce: "open parenthesis, button"
          }, {
            title: ")",
            announce: "close parenthesis, button"
          }, {
            title: "abc",
            size: "md",
            toggle: "lowercase",
            announce: "alpha mode, button"
          }], [{
            title: "{",
            announce: "open brace, button"
          }, {
            title: "}",
            announce: "close brace, button"
          }, {
            title: "[",
            announce: "open bracket, button"
          }, {
            title: "]",
            announce: "close bracket, button"
          }, {
            title: ";",
            announce: "semicolon, button"
          }, {
            title: '"',
            announce: "doublequote, button"
          }, {
            title: ",",
            announce: "comma, button"
          }, {
            title: "|",
            announce: "vertical bar, button"
          }, {
            title: "\\",
            announce: "backslash, button"
          }, {
            title: "/",
            announce: "forwardslash, button"
          }, {
            title: "\xE1\xF6\xFB",
            size: "md",
            toggle: "accents",
            announce: "accents, button",
            keyId: "accents"
          }], [{
            title: "<",
            announce: "less than, button"
          }, {
            title: ">",
            announce: "greater than, button"
          }, {
            title: "?",
            announce: "question mark, button"
          }, {
            title: "=",
            announce: "equal sign, button"
          }, {
            title: "`",
            announce: "grave accent, button"
          }, {
            title: "~",
            announce: "tilde, button"
          }, {
            title: "_",
            announce: "underscore, button"
          }, {
            title: ":",
            announce: "colon, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "+",
            announce: "plus sign, button"
          }], [{
            title: ".com",
            announce: "dot, com",
            size: "md"
          }, {
            title: ".net",
            announce: "dot, net",
            size: "md"
          }, {
            title: ".edu",
            announce: "dot, edu",
            size: "md"
          }, {
            title: ".org",
            announce: "dot, org",
            size: "md"
          }, {
            title: ".co",
            announce: "dot, co",
            size: "md"
          }, {
            title: ".uk",
            announce: "dot, uk",
            size: "md"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]]
        };
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "KeyboardEmail";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Re;
      }
    }]), KeyboardEmail;
  }();
  var ze = function(t) {
    _inherits(KeyboardFullScreen, Ne);
    var i2 = _createSuper(KeyboardFullScreen);
    function KeyboardFullScreen() {
      return _classCallCheck(this, KeyboardFullScreen), i2.apply(this, arguments);
    }
    return _createClass(KeyboardFullScreen, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(KeyboardFullScreen.prototype), "_construct", this).call(this), this.formats = this.fullscreenFormat;
      }
    }, {
      key: "fullscreenFormat",
      get: function get() {
        return {
          letters: [["", "", "", "", "", "", "", "", "", {
            title: "#@!",
            size: "lg",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }, {
            title: "Space",
            size: "lg",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }, "", "", "", "", "", "", "", "", ""], ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]],
          symbols: [["", "", "", "", "", "", "", "", "", {
            title: "ABC",
            size: "lg",
            toggle: "letters",
            announce: "caps on, button"
          }, {
            title: "Space",
            size: "lg",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }, "", "", "", "", "", "", "", "", ""], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "!",
            announce: "exclamation, button"
          }, "@", "#", "$", "%", {
            title: "^",
            announce: "caret circumflex, button"
          }, "&", "*", {
            title: "(",
            announce: "open parenthesis, button"
          }, {
            title: ")",
            announce: "close parenthesis, button"
          }, {
            title: "`",
            announce: "grave accent, button"
          }, "~", "_", ".", "-", "+"]]
        };
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "KeyboardFullScreen";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Re;
      }
    }]), KeyboardFullScreen;
  }();
  var Fe = function(t) {
    _inherits(KeyboardNumbers, Ne);
    var i2 = _createSuper(KeyboardNumbers);
    function KeyboardNumbers() {
      return _classCallCheck(this, KeyboardNumbers), i2.apply(this, arguments);
    }
    return _createClass(KeyboardNumbers, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(KeyboardNumbers.prototype), "_construct", this).call(this), this.formats = this.numbersFormat;
      }
    }, {
      key: "numbersFormat",
      get: function get() {
        return {
          numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
          dialpad: [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["0"]],
          dialpadExtended: [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["0"], [{
            title: "Delete",
            size: "lg",
            keyId: "delete",
            announce: "delete, button"
          }]]
        };
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "KeyboardNumbers";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Re;
      }
    }]), KeyboardNumbers;
  }();
  var He = function(t) {
    _inherits(KeyboardQwerty, Ne);
    var i2 = _createSuper(KeyboardQwerty);
    function KeyboardQwerty() {
      return _classCallCheck(this, KeyboardQwerty), i2.apply(this, arguments);
    }
    return _createClass(KeyboardQwerty, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(KeyboardQwerty.prototype), "_construct", this).call(this), this.formats = this.qwertyFormat;
      }
    }, {
      key: "qwertyFormat",
      get: function get() {
        return {
          uppercase: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", {
            title: "#@!",
            size: "md",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }], ["A", "S", "D", "F", "G", "H", "J", "K", "L", "@", {
            title: "\xE1\xF6\xFB",
            size: "md",
            toggle: "accents",
            announce: "accents, button",
            keyId: "accents"
          }], ["Z", "X", "C", "V", "B", "N", "M", {
            title: "_",
            announce: "underscore, button"
          }, {
            title: ".",
            announce: "period, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "shift",
            size: "md",
            toggle: "lowercase",
            announce: "shift off, button",
            keyId: "shift"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]],
          lowercase: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", {
            title: "#@!",
            size: "md",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }], ["a", "s", "d", "f", "g", "h", "j", "k", "l", "@", {
            title: "\xE1\xF6\xFB",
            size: "md",
            toggle: "accents",
            announce: "accents, button",
            keyId: "accents"
          }], ["z", "x", "c", "v", "b", "n", "m", {
            title: "_",
            announce: "underscore, button"
          }, {
            title: ".",
            announce: "period, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "shift",
            size: "md",
            toggle: "uppercase",
            announce: "shift on, button",
            keyId: "shift"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]],
          accents: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], ["\xE4", "\xEB", "\xEF", "\xF6", "\xFC", "\xFF", "\xE0", "\xE8", "\xEC", "\xF2", {
            title: "#@!",
            size: "md",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }], ["\xF9", "\xE1", "\xE9", "\xED", "\xF3", "\xFA", "\xFD", "\xE2", "\xEA", "@", {
            title: "abc",
            size: "md",
            toggle: "lowercase",
            announce: "alpha mode, button"
          }], ["\xEE", "\xF4", "\xFB", "\xE3", "\xF1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", {
            title: "_",
            announce: "underscore, button"
          }, {
            title: ".",
            announce: "period, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "shift",
            size: "md",
            toggle: "accentsUpper",
            announce: "shift off, button",
            keyId: "shift"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]],
          accentsUpper: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], ["\xC4", "\xCB", "\xCF", "\xD6", "\xDC", "\u0178", "\xC0", "\xC8", "\xCC", "\xD2", {
            title: "#@!",
            size: "md",
            toggle: "symbols",
            announce: "symbol mode, button",
            keyId: "symbols"
          }], ["\xD9", "\xC1", "\xC9", "\xCD", "\xD3", "\xDA", "\xDD", "\xC2", "\xCA", "@", {
            title: "abc",
            size: "md",
            toggle: "lowercase",
            announce: "alpha mode, button"
          }], ["\xCE", "\xD4", "\xDB", "\xC3", "\xD1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", {
            title: ".",
            announce: "period, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "_",
            announce: "underscore, button"
          }, {
            title: "shift",
            size: "md",
            toggle: "accents",
            announce: "shift off, button",
            keyId: "shift"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]],
          symbols: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
            title: "Delete",
            size: "md",
            keyId: "delete",
            announce: "delete, button"
          }], [{
            title: "!",
            announce: "exclamation, button"
          }, "@", "#", "$", "%", {
            title: "^",
            announce: "caret circumflex, button"
          }, "&", "*", {
            title: "(",
            announce: "open parenthesis, button"
          }, {
            title: ")",
            announce: "close parenthesis, button"
          }, {
            title: "abc",
            size: "md",
            toggle: "lowercase",
            announce: "alpha mode, button"
          }], [{
            title: "{",
            announce: "open brace, button"
          }, {
            title: "}",
            announce: "close brace, button"
          }, {
            title: "[",
            announce: "open bracket, button"
          }, {
            title: "]",
            announce: "close bracket, button"
          }, {
            title: ";",
            announce: "semicolon, button"
          }, {
            title: '"',
            announce: "doublequote, button"
          }, {
            title: ",",
            announce: "comma, button"
          }, {
            title: "|",
            announce: "vertical bar, button"
          }, {
            title: "\\",
            announce: "backslash, button"
          }, {
            title: "/",
            announce: "forwardslash, button"
          }, {
            title: "\xE1\xF6\xFB",
            size: "md",
            toggle: "accents",
            announce: "accents, button",
            keyId: "accents"
          }], [{
            title: "<",
            announce: "less than, button"
          }, {
            title: ">",
            announce: "greater than, button"
          }, {
            title: "?",
            announce: "question mark, button"
          }, {
            title: "=",
            announce: "equal sign, button"
          }, {
            title: "`",
            announce: "grave accent, button"
          }, {
            title: "~",
            announce: "tilde, button"
          }, {
            title: "_",
            announce: "underscore, button"
          }, {
            title: ":",
            announce: "colon, button"
          }, {
            title: "-",
            announce: "dash, button"
          }, {
            title: "+",
            announce: "plus sign, button"
          }], [{
            title: "Clear",
            size: "lg",
            keyId: "clear",
            announce: "clear, button"
          }, {
            title: "Space",
            size: "xl",
            keyId: "space",
            announce: "space, button"
          }, {
            title: "Done",
            size: "lg",
            keyId: "done",
            announce: "done, button"
          }]]
        };
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "KeyboardQwerty";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Re;
      }
    }]), KeyboardQwerty;
  }();
  var Ue = function(t) {
    _inherits(KeyboardInput, tt);
    var i2 = _createSuper(KeyboardInput);
    function KeyboardInput() {
      return _classCallCheck(this, KeyboardInput), i2.apply(this, arguments);
    }
    return _createClass(KeyboardInput, [{
      key: "_update",
      value: function _update() {
        this._Wrapper.style.itemSpacing = this.style.inputSpacing, this._updateKeyboardType(), this._updateInput(), this._updateKeyboard(), this._updateCenterKeyboard();
      }
    }, {
      key: "_updateKeyboardType",
      value: function _updateKeyboardType() {
        this._Keyboard.constructor !== this.keyboardType && (this._Wrapper._resetItems(), this._Wrapper.items = [{
          type: Oe,
          ref: "Input"
        }, {
          type: this.keyboardType,
          ref: "Keyboard",
          passSignals: {
            keyboardWidthChanged: true
          }
        }]);
      }
    }, {
      key: "_updateInput",
      value: function _updateInput() {
        this._Input.patch(_objectSpread(_objectSpread({}, this.input), {}, {
          centerInParent: this.centerKeyboard,
          w: this._Keyboard.w,
          style: _objectSpread({}, this.style.inputStyle),
          listening: this._isFocusedMode
        }));
      }
    }, {
      key: "_updateKeyboard",
      value: function _updateKeyboard() {
        this._Keyboard.patch({
          defaultFormat: this.defaultFormat || "lowercase",
          centerKeyboard: this.centerKeyboard
        });
      }
    }, {
      key: "_updateWidth",
      value: function _updateWidth() {
        this._Input.w = this.w = this._Keyboard.w, this.fireAncestors("$itemChanged");
      }
    }, {
      key: "_updateCenterKeyboard",
      value: function _updateCenterKeyboard() {
        this.centerKeyboard ? this.x = (this.style.screenW - this.w) / 2 - this.style.marginX : this.x = 0;
      }
    }, {
      key: "$onSoftKey",
      value: function $onSoftKey(t2) {
        var i3 = t2.key, o2 = void 0 === i3 ? "" : i3;
        if (!t2.toggle)
          switch (o2.toLowerCase()) {
            case "delete":
              this._Input.backspace();
              break;
            case "done":
              break;
            case "space":
              this._Input.insert(" ");
              break;
            case "clear":
              this._Input.clear();
              break;
            default:
              this._Input.insert(o2);
          }
      }
    }, {
      key: "$keyboardFocused",
      value: function $keyboardFocused(t2) {
        this._Input.listening = !!t2;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this._Wrapper || this;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "KeyboardInput";
      }
    }, {
      key: "properties",
      get: function get() {
        return ["centerKeyboard", "defaultFormat", "input", "keyboardType"];
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Re;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Wrapper: {
            type: me,
            neverScroll: true,
            w: this.w,
            items: [{
              type: Oe,
              ref: "Input"
            }, {
              type: Ne,
              ref: "Keyboard",
              passSignals: {
                keyboardWidthChanged: true
              }
            }],
            selectedIndex: 1,
            signals: {
              keyboardWidthChanged: "_updateWidth"
            }
          }
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Wrapper", {
          name: "Input",
          path: "Wrapper.Input"
        }, {
          name: "Keyboard",
          path: "Wrapper.Keyboard"
        }];
      }
    }]), KeyboardInput;
  }();
  var Ke = Object.freeze({
    __proto__: null,
    base: function base$e(t) {
      var i2 = t.spacer.lg;
      return {
        width: i2,
        height: i2,
        radius: i2 / 2
      };
    },
    tone: function tone$9(t) {
      return {
        neutral: {
          circleColor: t.color.interactiveNeutralFocus,
          mode: {
            disabled: {
              circleColor: t.color.fillNeutralDisabled
            }
          }
        },
        inverse: {
          circleColor: t.color.interactiveInverseFocus,
          mode: {
            disabled: {
              circleColor: t.color.fillInverseDisabled
            }
          }
        },
        brand: {
          circleColor: t.color.interactiveBrandFocus,
          mode: {
            disabled: {
              circleColor: t.color.fillInverseDisabled
            }
          }
        }
      };
    }
  });
  var qe = function(i2) {
    _inherits(Knob, tt);
    var o2 = _createSuper(Knob);
    function Knob() {
      return _classCallCheck(this, Knob), o2.apply(this, arguments);
    }
    return _createClass(Knob, [{
      key: "_update",
      value: function _update() {
        this._updateCircleLayout();
      }
    }, {
      key: "_updateCircleLayout",
      value: function _updateCircleLayout() {
        this.patch({
          texture: lightningjs_core_default.Tools.getRoundRect(this.w, this.h, this.style.radius, null, null, true, this.style.circleColor)
        });
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Knob";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ke;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          mount: 0.5
        };
      }
    }]), Knob;
  }();
  var Ve = Object.freeze({
    __proto__: null,
    base: function base$d(t) {
      return {
        alpha: t.alpha.primary,
        descriptionTextStyle: _objectSpread(_objectSpread({}, t.typography.body3), {}, {
          maxLines: 1,
          textColor: t.color.textNeutralSecondary
        }),
        height: 3 * t.spacer.xxl,
        logoStyle: {
          width: 2 * t.spacer.xxl,
          height: 2 * t.spacer.xxl,
          radius: t.radius.sm
        },
        paddingX: t.spacer.xl,
        contentSpacing: t.spacer.lg,
        titleTextStyle: _objectSpread(_objectSpread({}, t.typography.headline3), {}, {
          maxLines: 1,
          textColor: t.color.textNeutral
        }),
        width: h.getWidthByColumnSpan(t, 3)
      };
    },
    mode: function mode$5(t) {
      return {
        disabled: {
          alpha: t.alpha.inactive,
          descriptionTextStyle: {
            textColor: t.color.textNeutralDisabled
          },
          titleTextStyle: {
            textColor: t.color.textNeutralDisabled
          }
        },
        focused: {
          descriptionTextStyle: {
            textColor: t.color.textInverseSecondary
          },
          titleTextStyle: {
            textColor: t.color.textInverse
          }
        }
      };
    },
    tone: function tone$8(t) {
      return {
        inverse: {
          mode: {
            focused: {
              descriptionTextStyle: {
                textColor: t.color.textNeutral
              },
              titleTextStyle: {
                textColor: t.color.textNeutral
              }
            }
          }
        }
      };
    }
  });
  var Xe = function(t) {
    _inherits(ListItem, Pt);
    var i2 = _createSuper(ListItem);
    function ListItem() {
      return _classCallCheck(this, ListItem), i2.apply(this, arguments);
    }
    return _createClass(ListItem, [{
      key: "_onTextBoxChanged",
      value: function _onTextBoxChanged() {
        this._updateTitle(), this._updateDescription(), this._updateTruncation();
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updatePrefixLogo(), this._updateSuffixLogo(), _get(_getPrototypeOf(ListItem.prototype), "_update", this).call(this), this._updateDescription();
      }
    }, {
      key: "_updateTitle",
      value: function _updateTitle() {
        this._TextWrapper.patch({
          Title: {
            content: this.title,
            style: {
              textStyle: this.style.titleTextStyle
            }
          }
        });
      }
    }, {
      key: "_updateDescription",
      value: function _updateDescription() {
        if (this._hasDescription) {
          var t2 = {
            content: this.description,
            style: {
              textStyle: _objectSpread(_objectSpread({}, this.style.descriptionTextStyle), {}, {
                wordWrap: true,
                wordWrapWidth: this._fixedWordWrapWidth
              })
            },
            visible: !this._collapse
          };
          this._Description || (t2 = _objectSpread({
            type: At,
            signals: {
              textBoxChanged: "_onTextBoxChanged"
            }
          }, t2)), this._TextWrapper.patch({
            Description: t2
          });
        } else
          this._TextWrapper.patch({
            Description: void 0
          });
      }
    }, {
      key: "_updateTruncation",
      value: function _updateTruncation() {
        this._Title && this._Title.patch({
          style: {
            textStyle: _objectSpread(_objectSpread({}, this.style.titleTextStyle), {}, {
              wordWrap: this.fixed,
              wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
            })
          }
        });
      }
    }, {
      key: "_updatePrefixLogo",
      value: function _updatePrefixLogo() {
        this._hasPrefixLogo && (this._prefix = this._addLogoProps(this._prefixLogo));
      }
    }, {
      key: "_updateSuffixLogo",
      value: function _updateSuffixLogo() {
        this._hasSuffixLogo && (this._suffix = this._addLogoProps(this._suffixLogo));
      }
    }, {
      key: "_addLogoProps",
      value: function _addLogoProps(t2) {
        return {
          type: st,
          icon: t2,
          style: _objectSpread({
            color: void 0
          }, this.style.logoStyle)
        };
      }
    }, {
      key: "_hasPrefixLogo",
      get: function get() {
        return this.prefixLogo;
      }
    }, {
      key: "_hasSuffixLogo",
      get: function get() {
        return this.suffixLogo;
      }
    }, {
      key: "_rowProps",
      get: function get() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(ListItem.prototype), "_rowProps", this)), {}, {
          autoResizeHeight: true
        });
      }
    }, {
      key: "_buttonProps",
      get: function get() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(ListItem.prototype), "_buttonProps", this)), {}, {
          alpha: this.style.alpha
        });
      }
    }, {
      key: "_hasDescription",
      get: function get() {
        return !!this.description;
      }
    }, {
      key: "_suffixX",
      get: function get() {
        return this.w - this._paddingRight - this._suffixW - this.style.paddingX;
      }
    }, {
      key: "_collapse",
      get: function get() {
        return this.shouldCollapse && !this._isFocusedMode;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce ? this._announce : this.title + this.description + ", List Item";
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(ListItem.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "ListItem";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ve;
      }
    }, {
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(ListItem), "_template", this).call(this)), {}, {
          justify: "left",
          fixed: true,
          Content: _objectSpread(_objectSpread({}, _get(_getPrototypeOf(ListItem), "_template", this).call(this).Content), {}, {
            TextWrapper: {
              mountY: 0.5,
              flex: {
                direction: "column"
              },
              Title: {
                type: At,
                signals: {
                  textBoxChanged: "_onTextBoxChanged"
                }
              }
            }
          })
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem), "properties", this)), ["description", "prefixLogo", "suffixLogo", "shouldCollapse"]);
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "titlePadding",
          curr: "contentSpacing"
        }];
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem), "tags", this)), [{
          name: "Description",
          path: "Content.TextWrapper.Description"
        }]);
      }
    }]), ListItem;
  }();
  var Ye = Object.freeze({
    __proto__: null,
    base: function base$c() {
      return {
        showArrows: false,
        showKnob: false
      };
    },
    mode: function mode$4() {
      return {
        focused: {
          showArrows: true
        }
      };
    },
    tone: function tone$7(t) {
      return {
        neutral: {
          mode: {
            focused: {
              arrowColor: t.color.fillInverse,
              progressBar: {
                barColor: t.color.fillInverseTertiary,
                progressColor: t.color.fillInverse
              }
            }
          }
        },
        inverse: {
          mode: {
            focused: {
              arrowColor: t.color.fillNeutral,
              progressBar: {
                barColor: t.color.fillNeutralTertiary,
                progressColor: t.color.fillNeutral
              }
            }
          }
        },
        brand: {
          mode: {
            focused: {
              arrowColor: t.color.fillInverse,
              progressBar: {
                barColor: t.color.fillBrandTertiary,
                progressColor: t.color.fillBrand
              }
            }
          }
        }
      };
    }
  });
  var Ge = Object.freeze({
    __proto__: null,
    base: function base$b(t) {
      var i2 = t.spacer.lg;
      return {
        arrowAlphaValue: t.alpha.primary,
        arrowAlphaValueLimit: t.alpha.secondary,
        arrowHeight: t.spacer.xxl,
        arrowSpacing: t.spacer.md,
        arrowWidth: t.spacer.xxl,
        arrowColor: t.color.fillNeutral,
        containerHeight: t.spacer.lg + t.spacer.xs,
        iconLeftSrc: t.asset.arrowLeft,
        iconRightSrc: t.asset.arrowRight,
        minWidth: getWidthByColumnSpan(t, 2),
        progressBar: {},
        width: i2,
        height: i2,
        radius: i2 / 2,
        showArrows: true,
        showKnob: true,
        circleAnimation: {}
      };
    },
    mode: function mode$3() {
      return {
        disabled: {
          arrowAlphaValue: 0
        }
      };
    },
    tone: function tone$6(t) {
      return {
        neutral: {
          arrowColor: t.color.fillNeutral,
          circleColor: t.color.interactiveNeutralFocus
        },
        inverse: {
          arrowColor: t.color.fillInverse,
          circleColor: t.color.interactiveInverseFocus
        },
        brand: {
          arrowColor: t.color.fillNeutral,
          circleColor: t.color.interactiveNeutralFocus
        }
      };
    }
  });
  var Qe = function(t) {
    _inherits(Slider, tt);
    var i2 = _createSuper(Slider);
    function Slider() {
      return _classCallCheck(this, Slider), i2.apply(this, arguments);
    }
    return _createClass(Slider, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Slider.prototype), "_construct", this).call(this), this._min = 0, this._max = 100, this._step = 1, this._value = 0, this._vertical = false;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateDirection(), this._updateSliderLayout(), this._updatePositions(), this._updateArrowAlpha(), this._updateArrows(), this.signal("onChange", this.value, this), this._valueChanged && (this.fireAncestors("$announce", this.announce), this._valueChanged = false);
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return !this._isDisabledMode && (this._decrementValue(), "function" != typeof this.onLeft || this.onLeft(this));
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return !this._isDisabledMode && (this._incrementValue(), "function" != typeof this.onRight || this.onRight(this));
      }
    }, {
      key: "_updateDirection",
      value: function _updateDirection() {
        this.patch({
          pivotX: 0,
          rotation: this.vertical ? c(90) : 0,
          mountY: this.vertical ? 0.5 : 0
        });
      }
    }, {
      key: "_updateSliderLayout",
      value: function _updateSliderLayout() {
        var t2 = this.w || this.style.minWidth;
        this._Container.patch({
          h: this.style.containerHeight,
          w: t2,
          Bar: {
            x: this._calculatedSliderX,
            SliderBar: {
              y: this.style.containerHeight / 2,
              w: this._calculatedSliderWidth,
              style: _objectSpread({
                duration: 0
              }, this.style.progressBar)
            }
          }
        }), this.h = Math.max(this.style.containerHeight, this.style.arrowHeight);
      }
    }, {
      key: "_updatePositions",
      value: function _updatePositions() {
        this._updateSliderProgress(), this._updateCirclePosition();
      }
    }, {
      key: "_updateSliderProgress",
      value: function _updateSliderProgress() {
        var t2 = this.value < this.min ? this.min / this.max : this.value / this.max;
        this.value > this.max || this.value - this.step > this.max ? t2 = this._calculatedSliderWidth : (this.min < 0 || this.max < 0) && (t2 = (this.value - this.min) / (this.max - this.min)), this._SliderBar.progress = t2;
      }
    }, {
      key: "_updateCirclePosition",
      value: function _updateCirclePosition() {
        var t2;
        t2 = this.value < this.min || this.value + this.step < this.min ? this.min / this.max * this._calculatedSliderWidth : this.value > this.max || this.value - this.step > this.max ? this._calculatedSliderWidth : this.min < 0 || this.max < 0 ? (this.value - this.min) / (this.max - this.min) * this._calculatedSliderWidth : this.value / this.max * this._calculatedSliderWidth, this._Circle && (this._Circle.patch({
          mode: this.mode,
          style: {
            radius: this.style.radius,
            w: this.style.w,
            h: this.style.h,
            circleColor: this.style.circleColor
          },
          y: this._SliderBar.y + 1,
          alpha: this._isFocusedMode && this.style.showKnob ? 1 : 0
        }), this.style.circleAnimation && Object.keys(this.style.circleAnimation).length ? this._Circle.smooth = {
          x: [t2, this.style.circleAnimation]
        } : this._Circle.x = t2);
      }
    }, {
      key: "_updateArrowAlpha",
      value: function _updateArrowAlpha() {
        var t2, i3, o2 = this.style.showArrows ? this.style.arrowAlphaValue : 1e-3, r2 = this.style.showArrows ? this.style.arrowAlphaValueLimit : 1e-3;
        t2 = i3 = o2, !this._isDisabledMode && this.value <= this.min ? (t2 = r2, i3 = o2) : !this._isDisabledMode && this.value >= this.max && (t2 = o2, i3 = r2), this._LeftArrow.smooth = {
          alpha: t2
        }, this._RightArrow.smooth = {
          alpha: i3
        };
      }
    }, {
      key: "_updateArrows",
      value: function _updateArrows() {
        var t2 = {
          w: this.style.arrowWidth,
          h: this.style.arrowHeight,
          style: {
            color: this.style.arrowColor
          }
        };
        this._LeftArrow.patch(_objectSpread(_objectSpread({}, t2), {}, {
          icon: this.style.iconLeftSrc
        })), this._RightArrow.patch(_objectSpread(_objectSpread({}, t2), {}, {
          icon: this.style.iconRightSrc
        })), this._RightArrow.smooth = {
          x: this.style.arrowSpacing + this._calculatedSliderWidth + this._Bar.x
        };
      }
    }, {
      key: "_decrementValue",
      value: function _decrementValue() {
        var t2 = this.value - this.step;
        this.value = t2 >= this.min ? t2 : this.min, this._updatePositions();
      }
    }, {
      key: "_incrementValue",
      value: function _incrementValue() {
        var t2 = this.value + this.step;
        this.value = t2 <= this.max ? t2 : this.max, this._updatePositions();
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        return false;
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        return false;
      }
    }, {
      key: "_calculatedSliderX",
      get: function get() {
        return this.style.showArrows ? this.style.arrowSpacing + this.style.arrowWidth : 0;
      }
    }, {
      key: "_calculatedSliderWidth",
      get: function get() {
        var t2 = this.style.showArrows ? 2 * this.style.arrowSpacing + 2 * this.style.arrowWidth : 0;
        return this.w < t2 + this._circleW ? this.style.minWidth - t2 : this.w - t2;
      }
    }, {
      key: "_circleW",
      get: function get() {
        return this._Circle ? this._Circle.w : 0;
      }
    }, {
      key: "_setVertical",
      value: function _setVertical(t2) {
        return this._setState(t2 ? "VerticalSlider" : ""), t2;
      }
    }, {
      key: "_setValue",
      value: function _setValue(t2) {
        return this._valueChanged = t2 !== this._value, t2;
      }
    }, {
      key: "announce",
      get: function get() {
        return void 0 !== this._announce && null !== this._announce ? this._announce : this.value.toString();
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Slider.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Slider";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ge;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Container: {
            mountY: 0.5,
            y: function y(t2) {
              return t2 / 2;
            },
            Bar: {
              mountY: 0.5,
              SliderBar: {
                type: Zt,
                progress: 0.5,
                mountY: 0.5,
                announce: ""
              },
              Circle: {
                type: qe,
                zIndex: 5
              }
            },
            LeftArrow: {
              type: st,
              mountY: 0.5,
              y: function y(t2) {
                return t2 / 2;
              }
            },
            RightArrow: {
              type: st,
              mountY: 0.5,
              y: function y(t2) {
                return t2 / 2;
              }
            }
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ["max", "min", "step", "value", "vertical"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Container", {
          name: "Bar",
          path: "Container.Bar"
        }, {
          name: "SliderBar",
          path: "Container.Bar.SliderBar"
        }, {
          name: "Circle",
          path: "Container.Bar.Circle"
        }, {
          name: "LeftArrow",
          path: "Container.LeftArrow"
        }, {
          name: "RightArrow",
          path: "Container.RightArrow"
        }];
      }
    }, {
      key: "_states",
      value: function _states() {
        return [function(t2) {
          _inherits(VerticalSlider, t2);
          var i3 = _createSuper(VerticalSlider);
          function VerticalSlider() {
            return _classCallCheck(this, VerticalSlider), i3.apply(this, arguments);
          }
          return _createClass(VerticalSlider, [{
            key: "_handleLeft",
            value: function _handleLeft() {
              return false;
            }
          }, {
            key: "_handleRight",
            value: function _handleRight() {
              return false;
            }
          }, {
            key: "_handleUp",
            value: function _handleUp() {
              return !this._isDisabledMode && (this._decrementValue(), "function" != typeof this.onUp || this.onUp(this));
            }
          }, {
            key: "_handleDown",
            value: function _handleDown() {
              return !this._isDisabledMode && (this._incrementValue(), "function" != typeof this.onDown || this.onDown(this));
            }
          }]), VerticalSlider;
        }(this)];
      }
    }]), Slider;
  }();
  var $e = function(t) {
    _inherits(NestedSlider, Qe);
    var i2 = _createSuper(NestedSlider);
    function NestedSlider() {
      return _classCallCheck(this, NestedSlider), i2.apply(this, arguments);
    }
    return _createClass(NestedSlider, null, [{
      key: "__componentName",
      get: function get() {
        return "NestedSlider";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Ye;
      }
    }]), NestedSlider;
  }();
  var Je = Object.freeze({
    __proto__: null,
    base: function base$a(t) {
      return {
        paddingY: t.spacer.md + t.spacer.xs,
        valueTextStyle: _objectSpread(_objectSpread({}, t.typography.headline3), {}, {
          maxLines: 1,
          textColor: t.color.textNeutralSecondary
        })
      };
    },
    mode: function mode$2(t) {
      return {
        disabled: {
          valueTextStyle: {
            textColor: t.color.textNeutralDisabled
          }
        },
        focused: {
          valueTextStyle: {
            textColor: t.color.textInverseSecondary
          }
        }
      };
    },
    tone: function tone$5(t) {
      return {
        neutral: {
          mode: {
            focused: {
              valueTextStyle: {
                textColor: t.color.textInverseSecondary
              }
            }
          }
        },
        inverse: {
          mode: {
            focused: {
              valueTextStyle: {
                textColor: t.color.textNeutralSecondary
              }
            }
          }
        },
        brand: {
          mode: {
            focused: {
              valueTextStyle: {
                textColor: t.color.textInverseSecondary
              }
            }
          }
        }
      };
    }
  });
  var Ze = function(t) {
    _inherits(ListItemSlider, Xe);
    var i2 = _createSuper(ListItemSlider);
    function ListItemSlider() {
      return _classCallCheck(this, ListItemSlider), i2.apply(this, arguments);
    }
    return _createClass(ListItemSlider, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ListItemSlider.prototype), "_construct", this).call(this), this.value = 50;
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(ListItemSlider.prototype), "_update", this).call(this), this._updateSliderPosition(), this._updateValue();
      }
    }, {
      key: "_onTextBoxChanged",
      value: function _onTextBoxChanged() {
        _get(_getPrototypeOf(ListItemSlider.prototype), "_onTextBoxChanged", this).call(this), this._TextWrapper.h = Math.max(this._Title ? this._Title.h : 0, this._Value ? this._Value.h : 0);
      }
    }, {
      key: "_updateValue",
      value: function _updateValue() {
        if (this._hasValue) {
          var t2 = {
            content: this.value.toString(),
            style: {
              textStyle: _objectSpread({}, this.style.valueTextStyle)
            },
            mountX: 1,
            x: this.w - this._paddingX
          };
          this._Value || (t2 = _objectSpread({
            type: At,
            signals: {
              textBoxChanged: "_onTextBoxChanged"
            }
          }, t2)), this._TextWrapper.patch({
            Value: t2
          });
        } else
          this._TextWrapper.patch({
            Value: void 0
          });
      }
    }, {
      key: "_updateSliderPosition",
      value: function _updateSliderPosition() {
        var t2 = this.w - this._paddingLeft - this._paddingRight, i3 = _objectSpread(_objectSpread({
          mode: this.mode,
          tone: this.tone,
          w: t2,
          x: t2 / 2,
          visible: !this._collapse,
          alpha: this.style.alpha
        }, this.slider), {}, {
          value: this.value
        });
        this._Slider.patch(i3);
      }
    }, {
      key: "_hasValue",
      get: function get() {
        return null != this.value || null != this.value;
      }
    }, {
      key: "_fixedWordWrapWidth",
      get: function get() {
        return this.w - this._paddingLeft - this._paddingRight - this._paddingX;
      }
    }, {
      key: "_onSliderChanged",
      value: function _onSliderChanged(t2, i3) {
        t2 >= i3.max ? this.value = i3.max : t2 <= i3.min ? this.value = i3.min : this.value = i3.value;
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return "function" == typeof this.onLeft ? this.onLeft(this) : !(!this._Slider || this._isDisabledMode) && this._Slider._handleLeft();
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return "function" == typeof this.onRight ? this.onRight(this) : !(!this._Slider || this._isDisabledMode) && this._Slider._handleRight();
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce ? this._announce : this.title + this.value + ", List Item Slider";
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(ListItemSlider.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "ListItemSlider";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return Je;
      }
    }, {
      key: "_template",
      value: function _template() {
        var t2 = _get(_getPrototypeOf(ListItemSlider), "_template", this);
        return _objectSpread(_objectSpread({}, t2()), {}, {
          Content: _objectSpread(_objectSpread({}, t2().Content), {}, {
            flex: {
              direction: "column"
            },
            TextWrapper: _objectSpread(_objectSpread({}, t2().Content.TextWrapper), {}, {
              mountY: 0,
              flex: void 0
            }),
            Slider: {
              type: $e,
              mountX: 0.5,
              signals: {
                onChange: "_onSliderChanged"
              }
            }
          })
        });
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemSlider), "properties", this)), ["slider", "value"]);
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "titlePadding",
          curr: "contentSpacing"
        }];
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemSlider), "tags", this)), [{
          name: "Slider",
          path: "Content.Slider"
        }, {
          name: "Value",
          path: "Content.TextWrapper.Value"
        }]);
      }
    }]), ListItemSlider;
  }();
  var tn = Object.freeze({
    __proto__: null,
    base: function base$9(t) {
      return {
        arrowAlphaValue: t.alpha.primary,
        arrowAlphaValueLimit: t.alpha.secondary,
        arrowWidth: t.spacer.xxl,
        arrowHeight: t.spacer.xxl,
        iconLeftSrc: t.asset.arrowLeft,
        iconRightSrc: t.asset.arrowRight
      };
    },
    tone: function tone$4(t) {
      return {
        neutral: {
          mode: {
            focused: {
              arrowColor: t.color.fillInverse
            }
          }
        },
        inverse: {
          mode: {
            focused: {
              arrowColor: t.color.fillNeutral
            }
          }
        },
        brand: {
          mode: {
            focused: {
              arrowColor: t.color.fillInverse
            }
          }
        }
      };
    }
  });
  var en = function(t) {
    _inherits(ListItemPicker, Xe);
    var i2 = _createSuper(ListItemPicker);
    function ListItemPicker() {
      return _classCallCheck(this, ListItemPicker), i2.apply(this, arguments);
    }
    return _createClass(ListItemPicker, [{
      key: "_onTextBoxChanged",
      value: function _onTextBoxChanged() {
        _get(_getPrototypeOf(ListItemPicker.prototype), "_onTextBoxChanged", this).call(this), this._alignPicker();
      }
    }, {
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ListItemPicker.prototype), "_construct", this).call(this), this._options = [], this._selectedIndex = 0;
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(ListItemPicker.prototype), "_update", this).call(this), this._updatePicker(), this._updateArrows(), this._updateArrowsAlpha(), this._updateAlignment();
      }
    }, {
      key: "_updateAlignment",
      value: function _updateAlignment() {
        this._isFocusedMode ? this.patch({
          justify: "center"
        }) : this.patch({
          justify: "left"
        });
      }
    }, {
      key: "_updateArrows",
      value: function _updateArrows() {
        if (!this._isFocusedMode) {
          return this._LeftArrow && (this._LeftArrow.alpha = 1e-3), void (this._RightArrow && (this._RightArrow.alpha = 1e-3));
        }
        var t2 = {
          w: this.style.arrowWidth,
          h: this.style.arrowHeight,
          style: {
            color: this.style.arrowColor
          },
          alpha: this.style.arrowAlphaValue
        };
        this._LeftArrow || this.patch({
          LeftArrow: {
            type: st,
            mountY: 0.5,
            y: function y(t3) {
              return t3 / 2;
            }
          }
        }), this._LeftArrow.patch(_objectSpread(_objectSpread({}, t2), {}, {
          icon: this.style.iconLeftSrc
        })), this._LeftArrow.smooth = {
          x: this.style.paddingX
        }, this._RightArrow || this.patch({
          RightArrow: {
            type: st,
            mountY: 0.5,
            mountX: 1,
            y: function y(t3) {
              return t3 / 2;
            }
          }
        }), this._RightArrow.patch(_objectSpread(_objectSpread({}, t2), {}, {
          icon: this.style.iconRightSrc
        })), this._RightArrow.smooth = {
          x: this.w - this.style.paddingX
        };
      }
    }, {
      key: "_updatePicker",
      value: function _updatePicker() {
        var t2 = this, i3 = this.w - this._paddingX - 2 * this.style.arrowWidth;
        this._Picker || this._TextWrapper.patch({
          Picker: {
            type: ft,
            clipping: true,
            alwaysScroll: true,
            signals: {
              selectedChange: "_updateArrowsAlpha"
            }
          }
        }), this._Picker.patch({
          visible: !this._collapse,
          h: this.style.descriptionTextStyle.lineHeight,
          w: i3,
          items: this.options.map(function(o2) {
            return {
              type: Tt,
              h: t2.style.descriptionTextStyle.lineHeight,
              w: i3,
              centerAlign: t2._isFocusedMode,
              title: _objectSpread(_objectSpread({}, t2.style.descriptionTextStyle), {}, {
                text: o2
              })
            };
          }),
          selectedIndex: this.selectedIndex
        }), this._alignPicker();
      }
    }, {
      key: "_alignPicker",
      value: function _alignPicker() {
        this._Picker.patch({
          mountX: this._isFocusedMode ? 0.5 : 0,
          x: this._isFocusedMode ? this._Title.w / 2 : 0
        });
      }
    }, {
      key: "_updateArrowsAlpha",
      value: function _updateArrowsAlpha() {
        this._Picker && (this._selectedIndex = this._Picker.selectedIndex);
        var t2 = this._isFocusedMode ? this.style.arrowAlphaValue : 0;
        this._RightArrow && (this._RightArrow.alpha = this.selectedIndex === this.options.length - 1 && this._isFocusedMode ? this.style.arrowAlphaValueLimit : t2), this._LeftArrow && (this._LeftArrow.alpha = 0 === this.selectedIndex && this._isFocusedMode ? this.style.arrowAlphaValueLimit : t2), this.fireAncestors("$announce", this.announce);
      }
    }, {
      key: "_fixedWordWrapWidth",
      get: function get() {
        var t2 = this.w - this._paddingX - 2 * this.style.arrowWidth - 2 * this.style.contentSpacing, i3 = this.w - this._paddingLeft - this._paddingRight;
        return this._isFocusedMode ? t2 : i3;
      }
    }, {
      key: "_collapse",
      get: function get() {
        return this.shouldCollapse && !this._isFocusedMode;
      }
    }, {
      key: "selectedOption",
      get: function get() {
        return this._Picker.selected;
      }
    }, {
      key: "_handleLeft",
      value: function _handleLeft() {
        return "function" == typeof this.onLeft ? this.onLeft(this) : (this._Picker.selectPrevious(), true);
      }
    }, {
      key: "_handleRight",
      value: function _handleRight() {
        return "function" == typeof this.onRight ? this.onRight(this) : (this._Picker.selectNext(), true);
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce ? this._announce : this.title + this.options[this.selectedIndex] + ", List Item";
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(ListItemPicker.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "ListItemPicker";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return tn;
      }
    }, {
      key: "properties",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemPicker), "properties", this)), ["options", "selectedIndex"]);
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItemPicker), "tags", this)), ["LeftArrow", "RightArrow", {
          name: "Picker",
          path: "Content.TextWrapper.Picker"
        }]);
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "titlePadding",
          curr: "contentSpacing"
        }];
      }
    }]), ListItemPicker;
  }();
  var nn = function(t) {
    _inherits(MetadataCard, Gt);
    var i2 = _createSuper(MetadataCard);
    function MetadataCard() {
      return _classCallCheck(this, MetadataCard), i2.apply(this, arguments);
    }
    return _createClass(MetadataCard, null, [{
      key: "__componentName",
      get: function get() {
        return "MetadataCard";
      }
    }]), MetadataCard;
  }();
  var rn = function base$8(t) {
    return {
      textStyle: t.typography.body2,
      fadeHeight: 100,
      scroll: {
        timingFunction: "linear",
        duration: t.animation.duration.xfast
      },
      contentMarginTop: t.spacer.md,
      contentMarginLeft: t.spacer.xl,
      sliderMarginLeft: t.spacer.lg + t.spacer.xxs
    };
  };
  var an = Object.freeze({
    __proto__: null,
    base: rn
  });
  var sn = Object.freeze({
    __proto__: null,
    base: function base$7(t) {
      var i2 = rn(t).scroll;
      return {
        progressBar: {
          animation: i2
        },
        circleAnimation: i2
      };
    }
  });
  var ln = function(t) {
    _inherits(ScrollSlider, Qe);
    var i2 = _createSuper(ScrollSlider);
    function ScrollSlider() {
      return _classCallCheck(this, ScrollSlider), i2.apply(this, arguments);
    }
    return _createClass(ScrollSlider, null, [{
      key: "__componentName",
      get: function get() {
        return "ScrollSlider";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return sn;
      }
    }]), ScrollSlider;
  }();
  var cn = function(i2) {
    _inherits(ScrollWrapper, tt);
    var o2 = _createSuper(ScrollWrapper);
    function ScrollWrapper() {
      return _classCallCheck(this, ScrollWrapper), o2.apply(this, arguments);
    }
    return _createClass(ScrollWrapper, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ScrollWrapper.prototype), "_construct", this).call(this), this._scrollStep = 10, this._shouldWrap = false, this._flexDirection = "column", this._fadeContent = true, this._sliderWidth = 0;
      }
    }, {
      key: "_afterTextBoxUpdate",
      value: function _afterTextBoxUpdate(t) {
        this._prevW === t.finalW && this._prevH === t.finalH || (this._prevW = t.finalW, this._prevH = t.finalH, this._updateScrollWrapperLayout(), this._updateAlpha());
      }
    }, {
      key: "_resetFlexContainer",
      value: function _resetFlexContainer() {
        this._FadeContainer.patch({
          ScrollContainer: void 0
        }), this._FadeContainer.patch({
          ScrollContainer: {
            w: function w(t) {
              return t;
            },
            wordWrap: true
          }
        });
      }
    }, {
      key: "_update",
      value: function _update() {
        this._contentChanged && (this._resetFlexContainer(), this._updateAutoScroll()), this._updateScrollContainer(), this._updateScrollWrapperLayout(), this._updateAlpha();
      }
    }, {
      key: "_updateAutoScroll",
      value: function _updateAutoScroll() {
        this.resetScroll(), this._setupAutoScroll(), this._contentChanged = false;
      }
    }, {
      key: "_updateScrollWrapperLayout",
      value: function _updateScrollWrapperLayout() {
        this._ScrollContainer.patch({
          w: this._contentWidth
        }), this._updateFadeContainer(), this._updateSlider();
      }
    }, {
      key: "_updateAlpha",
      value: function _updateAlpha() {
        this._Slider.smooth = {
          alpha: this.showScrollBar && this._isFocusedMode ? 1 : 0
        };
      }
    }, {
      key: "_updateFadeContainer",
      value: function _updateFadeContainer() {
        var i3 = this._ScrollContainer.finalH > this.h, o3 = this.fadeContent && i3 && !this._isEndContentVisible;
        this._FadeContainer.patch({
          h: this.h,
          w: this._contentWidth,
          y: this.style.contentMarginTop,
          x: this.style.contentMarginLeft,
          rtt: true,
          shader: o3 ? {
            type: lightningjs_core_default.shaders.FadeOut,
            bottom: this.style.fadeHeight
          } : void 0
        });
      }
    }, {
      key: "_scrollContainerLoaded",
      value: function _scrollContainerLoaded(t) {
        var i3 = t.h;
        this._ScrollContainer.h = i3, this._updateScrollWrapperLayout();
      }
    }, {
      key: "_updateScrollContainer",
      value: function _updateScrollContainer() {
        var t = this;
        if (this.content) {
          if ("string" == typeof this.content)
            this._ScrollContainer.patch({
              flex: {
                direction: "column"
              },
              ScrollableText: {
                h: 0,
                w: this._contentWidth,
                type: At,
                content: this.content,
                style: {
                  textStyle: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
                    wordWrap: true,
                    wordWrapWidth: this._contentWidth
                  })
                },
                signals: {
                  textBoxChanged: "_scrollContainerLoaded"
                },
                onAfterUpdate: this._afterTextBoxUpdate.bind(this)
              }
            });
          else if (Array.isArray(this.content)) {
            var i3 = {};
            this.content.forEach(function(o3, r2) {
              var a2 = "ScrollText".concat(r2);
              i3[a2] = _objectSpread({
                w: t._contentWidth
              }, o3), o3.text && (i3[a2] = {
                type: At,
                content: o3.text,
                style: {
                  textStyle: _objectSpread(_objectSpread(_objectSpread({}, t.style.textStyle), o3.style), {}, {
                    wordWrap: true,
                    wordWrapWidth: t._contentWidth
                  })
                },
                onAfterUpdate: t._afterTextBoxUpdate.bind(t)
              });
            }), this._ScrollContainer.patch(_objectSpread({
              flex: {
                direction: this.flexDirection,
                wrap: this.shouldWrap
              }
            }, i3));
          }
        }
      }
    }, {
      key: "_scrollDown",
      value: function _scrollDown() {
        if (this._scrollContainerY + this._ScrollContainer.finalH > this.renderHeight) {
          var t = this._scrollContainerY - this.scrollStep, i3 = t + this._ScrollContainer.finalH > this.renderHeight, o3 = this.renderHeight - this._ScrollContainer.finalH - this.style.contentMarginTop;
          this._ScrollContainer.patch({
            smooth: {
              y: [i3 ? t : o3, this._scrollAnimation]
            }
          }), this._scrollContainerY + this._ScrollContainer.finalH <= this.h && (this._isEndContentVisible = true, this._autoScrollComplete = true, this.fireAncestors("$scrollChanged", "endDown", this), this._updateFadeContainer());
        }
      }
    }, {
      key: "_scrollUp",
      value: function _scrollUp() {
        if (this._scrollContainerY < 0) {
          var t = this._scrollContainerY + this.scrollStep, i3 = t < 0;
          this._ScrollContainer.patch({
            smooth: {
              y: [i3 ? t : 0, this._scrollAnimation]
            }
          }), this._scrollContainerY + this._ScrollContainer.finalH > this.renderHeight && (this._autoScrollComplete = false), this._scrollContainerY >= 0 && this.fireAncestors("$scrollChanged", "endUp", this), this._isEndContentVisible && (this._isEndContentVisible = false, this._updateFadeContainer());
        }
      }
    }, {
      key: "resetScroll",
      value: function resetScroll() {
        this._ScrollContainer.y = 0, this._Slider.value = 0, this._ScrollContainer.transition("y").finish(), delete this._ScrollContainer._transitions, this._autoScrollComplete = false;
      }
    }, {
      key: "_setAutoScroll",
      value: function _setAutoScroll(t) {
        return this._autoScroll !== t && (this._autoScroll = t), this._setupAutoScroll(), t;
      }
    }, {
      key: "_setupAutoScroll",
      value: function _setupAutoScroll() {
        var t = this;
        clearTimeout(this._startAutoScroll), clearTimeout(this._performAutoScrollTimer), this.autoScroll && (this._startAutoScroll = setTimeout(function() {
          return t._performAutoScroll();
        }, isNaN(this.autoScrollDelay) ? 2e3 : this.autoScrollDelay));
      }
    }, {
      key: "_performAutoScroll",
      value: function _performAutoScroll() {
        var t = this;
        this.autoScroll && !this._autoScrollComplete && (this._Slider._handleDown(), this._performAutoScrollTimer = setTimeout(function() {
          return t._performAutoScroll();
        }, isNaN(this.autoScrollSpeed) ? 200 : this.autoScrollSpeed));
      }
    }, {
      key: "_setContent",
      value: function _setContent(t) {
        return t !== this._content && this.enabled && (this._contentChanged = true), t;
      }
    }, {
      key: "_updateScrollContainerSize",
      value: function _updateScrollContainerSize(t, i3) {
        this._sliderWidth !== i3._Container.h && (this._sliderWidth = i3._Container.h, this._updateScrollContainer());
      }
    }, {
      key: "_updateSlider",
      value: function _updateSlider() {
        var t = this._ScrollContainer.finalH - this.renderHeight, i3 = Math.ceil(t / this.scrollStep), o3 = this.renderHeight, r2 = o3 / i3;
        this._Slider.patch({
          x: this.w - this._sliderWidth,
          w: o3,
          min: 0,
          max: o3,
          step: r2,
          onUp: this._scrollUp.bind(this),
          onDown: this._scrollDown.bind(this)
        });
      }
    }, {
      key: "_contentWidth",
      get: function get() {
        return this.w - this.style.contentMarginLeft - this.style.sliderMarginLeft - this._sliderWidth;
      }
    }, {
      key: "_scrollContainerY",
      get: function get() {
        return this._ScrollContainer.transition("y").targetValue;
      }
    }, {
      key: "_scrollAnimation",
      get: function get() {
        var t = isNaN(this.scrollDuration) ? this.style.scroll.duration : this.scrollDuration;
        return _objectSpread(_objectSpread({}, this.style.scroll), {}, {
          duration: t
        });
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this._Slider;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce ? this._announce : Array.isArray(this.content) ? this._ScrollContainer && this._ScrollContainer.children && this._ScrollContainer.children.length ? this._ScrollContainer.children.map(function(t) {
          return t.announce;
        }) : this.content.map(function(t) {
          return t.announce || t.text;
        }) : this.content;
      },
      set: function set2(t) {
        _set(_getPrototypeOf(ScrollWrapper.prototype), "announce", t, this, true);
      }
    }], [{
      key: "__themeStyle",
      get: function get() {
        return an;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          clipping: true,
          FadeContainer: {
            ScrollContainer: {
              w: function w(t) {
                return t;
              },
              wordWrap: true
            }
          },
          Slider: {
            type: ln,
            vertical: true,
            signals: {
              onChange: "_updateScrollContainerSize"
            },
            announce: " "
          }
        };
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "ScrollWrapper";
      }
    }, {
      key: "properties",
      get: function get() {
        return ["autoScroll", "autoScrollDelay", "autoScrollSpeed", "content", "fadeContent", "scrollDuration", "scrollStep", "showScrollBar", "shouldWrap", "flexDirection"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["FadeContainer", "Slider", {
          name: "ScrollContainer",
          path: "FadeContainer.ScrollContainer"
        }, {
          name: "ScrollableText",
          path: "ScrollContainer.ScrollableText"
        }];
      }
    }]), ScrollWrapper;
  }();
  var un = Object.freeze({
    __proto__: null,
    base: function base$6(t) {
      return {
        alpha: t.alpha.none,
        animation: t.animation.standardEntrance,
        blur: t.spacer.xxl,
        color: t.color.shadowNeutralFocus,
        offsetX: 0,
        offsetY: t.spacer.lg,
        radius: t.radius.md,
        spread: -1 * t.spacer.md,
        maxOffsetY: t.spacer.xxl,
        maxOffsetX: 0
      };
    },
    mode: function mode$1(t) {
      return {
        focused: {
          alpha: t.alpha.secondary,
          offsetY: t.spacer.xxl
        }
      };
    },
    tone: function tone$3(t) {
      return {
        neutral: {
          color: t.color.shadowNeutralFocus
        },
        inverse: {
          color: t.color.shadowInverseFocus
        },
        brand: {
          color: t.color.shadowBrandFocus
        }
      };
    }
  });
  var hn = function(i2) {
    _inherits(Shadow, tt);
    var o2 = _createSuper(Shadow);
    function Shadow() {
      return _classCallCheck(this, Shadow), o2.apply(this, arguments);
    }
    return _createClass(Shadow, [{
      key: "_updateFocusStyle",
      value: function _updateFocusStyle() {
        this._Shadow && this.applySmooth(this._Shadow, {
          alpha: this.style.alpha,
          y: this.style.offsetY,
          x: this.style.offsetX
        }, {
          alpha: [this.style.alpha, this.style.animation],
          y: [this.style.offsetY, this.style.animation],
          x: [this.style.offsetX, this.style.animation]
        });
      }
    }, {
      key: "_update",
      value: function _update() {
        var i3 = this.style.spread + 2 * this.style.blur, o3 = this.style.maxOffsetY, r2 = this.style.maxOffsetX;
        this.patch({
          Frame: {
            w: this.w + 2 * i3 + r2,
            h: this.h + 2 * i3 + o3,
            x: (this.w + r2) / 2,
            y: (this.h + o3) / 2,
            mount: 0.5,
            rtt: this.maskShadow,
            shader: this.maskShadow ? {
              type: lightningjs_core_default.shaders.Hole,
              w: this.w - 4,
              h: this.h - 4,
              x: i3 + 2,
              y: i3 + 2,
              radius: this.style.radius
            } : void 0,
            Shadow: {
              color: this.style.color,
              texture: lightningjs_core_default.Tools.getShadowRect(this.w + 2 * this.style.spread, this.h + 2 * this.style.spread, this.style.radius, this.style.blur)
            }
          }
        }), void 0 === this.shouldSmooth && (this.shouldSmooth = true), this._updateFocusStyle();
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Shadow";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return un;
      }
    }, {
      key: "properties",
      get: function get() {
        return ["maskShadow"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Frame", {
          name: "Shadow",
          path: "Frame.Shadow"
        }];
      }
    }]), Shadow;
  }();
  var dn = Object.freeze({
    __proto__: null,
    base: function base$5(t) {
      var i2 = t.spacer.xxl;
      return {
        width: i2,
        height: i2,
        radius: i2 / 2
      };
    }
  });
  var pn = function(t) {
    _inherits(SliderLarge, Qe);
    var i2 = _createSuper(SliderLarge);
    function SliderLarge() {
      return _classCallCheck(this, SliderLarge), i2.apply(this, arguments);
    }
    return _createClass(SliderLarge, null, [{
      key: "__componentName",
      get: function get() {
        return "SliderLarge";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return dn;
      }
    }]), SliderLarge;
  }();
  var _n = function(t) {
    _inherits(ContentSwitcher, tt);
    var i2 = _createSuper(ContentSwitcher);
    function ContentSwitcher() {
      return _classCallCheck(this, ContentSwitcher), i2.apply(this, arguments);
    }
    return _createClass(ContentSwitcher, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(ContentSwitcher.prototype), "_construct", this).call(this), this._selectedIndex = 0, this._contentItems = [];
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(ContentSwitcher.prototype), "_update", this).call(this), this._updateSelected();
      }
    }, {
      key: "_updateSelected",
      value: function _updateSelected() {
        var t2 = this;
        if (this._preveSelectedIndex !== this.selectedIndex) {
          if (void 0 !== this._preveSelectedIndex) {
            var i3 = this.tag("Content".concat(this._preveSelectedIndex));
            i3.smooth = {
              alpha: 0
            }, this._hasContent ? i3._getTransition("alpha").once("finish", function() {
              t2._fadeInContent();
            }) : void 0 !== this.selectedIndex && this._fadeInContent();
          } else
            this._hasContent && this._fadeInContent();
          this._preveSelectedIndex = this.selectedIndex;
        }
      }
    }, {
      key: "_fadeInContent",
      value: function _fadeInContent() {
        var t2 = this;
        this._selectedContent.smooth = {
          alpha: 1
        }, this._selectedContent._getTransition("alpha").once("finish", function() {
          t2.h = t2._selectedContent.h, t2.signal("contentHeightChange", t2.h);
        });
      }
    }, {
      key: "_updateContent",
      value: function _updateContent() {
        var t2 = this, i3 = this.contentItems.reduce(function(i4, o2, r2) {
          var a2, l2 = "Content".concat(r2);
          if ("function" == typeof o2) {
            var c2 = o2();
            c2.then ? t2._loadAsyncComponent(c2, r2) : a2 = c2;
          } else
            a2 = o2;
          return a2 && (i4[l2] = _objectSpread(_objectSpread({}, a2), {}, {
            alpha: 0
          })), i4;
        }, {});
        this.patch(i3);
      }
    }, {
      key: "_loadAsyncComponent",
      value: function _loadAsyncComponent(t2, i3) {
        var o2 = this;
        t2.then(function(t3) {
          var r2 = "Content".concat(i3);
          o2.patch(_defineProperty({}, r2, _objectSpread(_objectSpread({}, t3), {}, {
            alpha: 0
          })));
        });
      }
    }, {
      key: "contentItems",
      get: function get() {
        return this._contentItems;
      },
      set: function set2(t2) {
        stringifyCompare(t2, this._contentItems) || (this._contentItems = t2, this._updateContent());
      }
    }, {
      key: "_hasContent",
      get: function get() {
        return this._selectedContent && this._selectedContent.children.length > 0;
      }
    }, {
      key: "_selectedContent",
      get: function get() {
        return this.tag("Content".concat(this.selectedIndex));
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        if (this._hasContent)
          return this._selectedContent;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "ContentSwitcher";
      }
    }, {
      key: "properties",
      get: function get() {
        return ["selectedIndex"];
      }
    }]), ContentSwitcher;
  }();
  var yn = Object.freeze({
    __proto__: null,
    base: function base$4(t) {
      return {
        tabSpacing: t.spacer.lg,
        tabsMarginBottom: t.spacer.xxl
      };
    }
  });
  var fn = function(t) {
    _inherits(TabBar, tt);
    var i2 = _createSuper(TabBar);
    function TabBar() {
      return _classCallCheck(this, TabBar), i2.apply(this, arguments);
    }
    return _createClass(TabBar, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(TabBar.prototype), "_construct", this).call(this), this._tabContent = [], this._isTabsFocused = true;
      }
    }, {
      key: "_selectedTabChange",
      value: function _selectedTabChange(t2, i3) {
        return this.fireAncestors("$tabChanged", t2, i3, this), "object" === _typeof(this._tabContent) && "function" == typeof this._tabContent.then ? this._tabContent.then(this.queueRequestUpdate) : this.queueRequestUpdate();
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateTabsLayout(), this._updateTabs(), this._updateTabContent(), this._updateTabBarHeight();
      }
    }, {
      key: "_updateTabsLayout",
      value: function _updateTabsLayout() {
        var t2 = this, i3 = {
          style: {
            itemSpacing: this.style.tabSpacing
          }
        }, o2 = ft.properties.reduce(function(i4, o3) {
          return null != t2[o3] && (i4[o3] = t2[o3]), i4;
        }, i3);
        this._Tabs.patch(o2);
      }
    }, {
      key: "_updateTabs",
      value: function _updateTabs() {
        var t2 = this;
        this._Tabs.wrapSelected = this.wrapSelected, this._Tabs.items.forEach(function(i3) {
          var o2 = i3 === t2._Tabs.selected;
          t2._isUnfocusedMode ? i3.mode = "unfocused" : t2._isFocusedMode && (t2._isTabsFocused ? i3.mode = o2 ? "focused" : "unfocused" : i3.mode = o2 ? "selected" : "unfocused");
        }), this.alphaSelectedTab && this._updateTabAlphas();
      }
    }, {
      key: "_updateTabAlphas",
      value: function _updateTabAlphas() {
        var t2 = this;
        this._isTabsFocused ? this._Tabs.items.forEach(function(t3) {
          t3.patch({
            alpha: 1
          });
        }) : this._Tabs.items.forEach(function(i3) {
          i3.patch({
            alpha: i3 === t2._Tabs.selected ? 1 : 0.3
          });
        });
      }
    }, {
      key: "_updateTabContent",
      value: function _updateTabContent() {
        var t2 = this.style.tabsMarginBottom;
        this._TabContent.patch({
          y: this._Tabs.h + t2,
          contentItems: this._tabContent,
          selectedIndex: this._isFocusedMode ? this._Tabs.selectedIndex : void 0
        });
      }
    }, {
      key: "$itemChanged",
      value: function $itemChanged() {
        this._updateTabBarHeight();
      }
    }, {
      key: "_updateTabBarHeight",
      value: function _updateTabBarHeight() {
        var t2;
        t2 = this.collapse ? this._isFocusedMode && this._tabContent.filter(function(t3) {
          return Object.keys(t3).length;
        }).length ? this._expandedHeight : this._collapsedHeight : this._expandedHeight, this._TabContent.smooth = {
          alpha: !this.collapse || this._isFocusedMode ? 1 : 1e-3
        }, this.h !== t2 && (this.h = t2, this.fireAncestors("$itemChanged"));
      }
    }, {
      key: "selectTabs",
      value: function selectTabs() {
        this._isTabsFocused || (this._isTabsFocused = true, this._updateTabs(), this._updateTabBarHeight());
      }
    }, {
      key: "resetTabs",
      value: function resetTabs() {
        this._Tabs.selectedIndex = 0;
      }
    }, {
      key: "_handleDown",
      value: function _handleDown() {
        return this._isTabsFocused && this._TabContent._hasContent && (this._isTabsFocused = false, this._updateTabs(), this._updateTabBarHeight()), false;
      }
    }, {
      key: "_handleUp",
      value: function _handleUp() {
        return this.selectTabs(), false;
      }
    }, {
      key: "_setTabs",
      value: function _setTabs(t2) {
        return this._tabContent = [], this._tabContent = t2.map(function(t3) {
          return t3.tabContent || {};
        }), this._Tabs.items = t2, t2;
      }
    }, {
      key: "_collapsedHeight",
      get: function get() {
        return this._Tabs.h;
      }
    }, {
      key: "_expandedHeight",
      get: function get() {
        return this._Tabs.h + this.style.tabsMarginBottom + this._TabContent.h;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this._isTabsFocused ? this._Tabs : this._TabContent;
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        _get(_getPrototypeOf(TabBar.prototype), "_unfocus", this).call(this), this.reset && this.resetTabs();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Tabs: {
            type: ft,
            autoResizeHeight: true,
            signals: {
              selectedChange: "_selectedTabChange"
            }
          },
          TabContent: {
            type: _n,
            signals: {
              contentHeightChange: "_updateTabBarHeight"
            }
          }
        };
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return yn;
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "TabBar";
      }
    }, {
      key: "properties",
      get: function get() {
        return ["alphaSelectedTab", "collapse", "reset", "tabs"].concat(_toConsumableArray(ft.properties));
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Tabs", "TabContent"];
      }
    }]), TabBar;
  }();
  var gn = Object.freeze({
    __proto__: null,
    base: function base$3(t) {
      return {
        radius: t.radius.xl,
        paddingX: t.spacer.xxxl + t.spacer.xxs,
        paddingY: t.spacer.md + t.spacer.xs,
        noTitlePaddingX: t.spacer.xl,
        iconSize: t.spacer.xxxl,
        iconMarginRight: t.spacer.md,
        textStyle: _objectSpread(_objectSpread({}, t.typography.headline3), {}, {
          textColor: t.color.textNeutral
        }),
        backgroundColor: t.color.fillTransparent,
        contentColor: t.color.fillNeutral
      };
    },
    mode: function mode(t) {
      return {
        focused: {
          backgroundColor: t.color.interactiveNeutralFocus,
          contentColor: t.color.fillInverse,
          textStyle: {
            textColor: t.color.textInverse
          }
        },
        selected: {
          backgroundColor: t.color.interactiveNeutralFocusSoft,
          contentColor: t.color.fillNeutral,
          textStyle: {
            textColor: t.color.textNeutral
          }
        },
        disabled: {
          backgroundColor: t.color.fillTransparent,
          contentColor: t.color.fillNeutralDisabled,
          textStyle: {
            textColor: t.color.textNeutralDisabled
          }
        }
      };
    },
    tone: function tone$2(t) {
      return {
        neutral: {},
        inverse: {
          mode: {
            focused: {
              contentColor: t.color.fillNeutral,
              textStyle: {
                textColor: t.color.textNeutral
              }
            }
          }
        },
        brand: {
          mode: {
            focused: {
              contentColor: t.color.fillNeutral,
              textStyle: {
                textColor: t.color.textNeutral
              }
            }
          }
        }
      };
    }
  });
  var mn = function(t) {
    _inherits(Tab, mt);
    var i2 = _createSuper(Tab);
    function Tab() {
      return _classCallCheck(this, Tab), i2.apply(this, arguments);
    }
    return _createClass(Tab, [{
      key: "_onTextBoxChanged",
      value: function _onTextBoxChanged() {
        this._updateContent(), this._updateTabSize();
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(Tab.prototype), "_update", this).call(this), this._updateIcon(), this._updateText(), this._updateContent(), this._updateTabSize();
      }
    }, {
      key: "_updateIcon",
      value: function _updateIcon() {
        if (this.icon) {
          var t2 = {
            icon: this.icon,
            w: this.style.iconSize,
            h: this.style.iconSize,
            y: this._Content.h / 2,
            style: {
              color: this.style.contentColor
            }
          };
          this.title ? (t2.x = 0, t2.mountX = 0) : (t2.x = this._Content.w / 2, t2.mountX = 0.5), this._Icon ? this._Icon.patch(t2) : this._Content.patch({
            Icon: _objectSpread({
              type: st,
              mountY: 0.5
            }, t2)
          });
        } else
          this._Content.patch({
            Icon: void 0
          });
      }
    }, {
      key: "_updateText",
      value: function _updateText() {
        var t2 = {
          content: this.title,
          style: {
            textStyle: this.style.textStyle
          },
          y: this._Content.h / 2
        };
        this.icon ? (t2.x = this._iconW + this.style.iconMarginRight, t2.mountX = 0) : (t2.x = this._Content.w / 2, t2.mountX = 0.5), this._Text.patch(t2);
      }
    }, {
      key: "_updateContent",
      value: function _updateContent() {
        this._Content.patch({
          w: this._iconW + (this.title ? this.style.iconMarginRight : 0) + this._textW,
          h: Math.max(this._iconH, this._Text.h)
        });
      }
    }, {
      key: "_updateTabSize",
      value: function _updateTabSize() {
        this.title || this.icon ? this.patch({
          w: 2 * this._paddingX + this._Content.w,
          h: 2 * this.style.paddingY + this._Content.h
        }) : this.patch({
          w: 0,
          h: 0
        });
      }
    }, {
      key: "_textW",
      get: function get() {
        return this.title ? this._Text.w : 0;
      }
    }, {
      key: "_iconW",
      get: function get() {
        return this.icon ? this._Icon.w : 0;
      }
    }, {
      key: "_iconH",
      get: function get() {
        return this.icon ? this._Icon.h : 0;
      }
    }, {
      key: "_paddingX",
      get: function get() {
        return this.title ? this.style.paddingX : this.style.noTitlePaddingX;
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this._Text && this._Text.announce;
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Tab.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(Tab), "_template", this).call(this)), {}, {
          Content: {
            mount: 0.5,
            x: function x(t2) {
              return t2 / 2;
            },
            y: function y(t2) {
              return t2 / 2;
            },
            Text: {
              type: At,
              mountY: 0.5,
              signals: {
                textBoxChanged: "_onTextBoxChanged"
              }
            }
          }
        });
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return gn;
      }
    }, {
      key: "__componentName",
      get: function get() {
        return "Tab";
      }
    }, {
      key: "properties",
      get: function get() {
        return ["icon", "title"];
      }
    }, {
      key: "tags",
      get: function get() {
        return [].concat(_toConsumableArray(_get(_getPrototypeOf(Tab), "tags", this)), ["Content", {
          name: "Icon",
          path: "Content.Icon"
        }, {
          name: "Text",
          path: "Content.Text"
        }]);
      }
    }]), Tab;
  }();
  var vn = Object.freeze({
    __proto__: null,
    base: function base$2(t) {
      var i2 = t.spacer.xl, o2 = t.spacer.xs, r2 = t.stroke.sm;
      return {
        height: i2 + 2 * (o2 + r2),
        knobWidth: i2,
        knobHeight: i2,
        knobRadius: i2 / 2,
        knobPadding: o2,
        strokeWidth: r2,
        width: 2 * (r2 + 2 * o2 + i2)
      };
    },
    tone: function tone$1(t) {
      return {
        neutral: {
          strokeColor: t.color.fillNeutral,
          backgroundColor: t.color.fillInverseTertiary,
          backgroundColorChecked: t.color.fillNeutral,
          knobColor: t.color.fillNeutral,
          knobColorChecked: t.color.fillInverse,
          mode: {
            disabled: {
              strokeColor: t.color.fillNeutralDisabled,
              backgroundColor: t.color.fillInverselDisabled,
              backgroundColorChecked: t.color.fillNeutralDisabled,
              knobColor: t.color.fillNeutralDisabled,
              knobColorChecked: t.color.fillInverseDisabled
            }
          }
        },
        inverse: {
          strokeColor: t.color.fillInverse,
          backgroundColor: t.color.fillNeutralTertiary,
          backgroundColorChecked: t.color.fillInverse,
          knobColor: t.color.fillInverse,
          knobColorChecked: t.color.fillNeutral,
          mode: {
            disabled: {
              strokeColor: t.color.fillInverseDisabled,
              backgroundColor: t.color.fillNeutralDisabled,
              backgroundColorChecked: t.color.fillInverseDisabled,
              knobColor: t.color.fillInverseDisabled,
              knobColorChecked: t.color.fillNeutralDisabled
            }
          }
        },
        brand: {
          strokeColor: t.color.fillBrand,
          backgroundColor: t.color.fillBrandTertiary,
          backgroundColorChecked: t.color.fillBrand,
          knobColor: t.color.fillBrand,
          knobColorChecked: t.color.fillInverse,
          mode: {
            disabled: {
              strokeColor: t.color.fillNeutralDisabled,
              backgroundColor: t.color.fillInverselDisabled,
              backgroundColorChecked: t.color.fillNeutralDisabled,
              knobColor: t.color.fillNeutralDisabled,
              knobColorChecked: t.color.fillInverseDisabled
            }
          }
        }
      };
    }
  });
  var xn = function(i2) {
    _inherits(Toggle, tt);
    var o2 = _createSuper(Toggle);
    function Toggle() {
      return _classCallCheck(this, Toggle), o2.apply(this, arguments);
    }
    return _createClass(Toggle, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(Toggle.prototype), "_construct", this) && _get(_getPrototypeOf(Toggle.prototype), "_construct", this).call(this), this._checked = false;
      }
    }, {
      key: "_update",
      value: function _update() {
        this._updateKnobPosition(), this._updateColors(), this._updateContainer(), this._updateStroke(), this._updateKnob(), this._checkedChanged && (this.fireAncestors("$announce", this.announce), this._checkedChanged = false);
      }
    }, {
      key: "_updateKnobPosition",
      value: function _updateKnobPosition() {
        var t = this.style, i3 = t.knobPadding, o3 = t.knobWidth, r2 = t.strokeWidth;
        this.applySmooth(this._Knob, {
          x: this.checked ? this.w - r2 - i3 - o3 : r2 + i3
        });
      }
    }, {
      key: "_updateColors",
      value: function _updateColors() {
        var t = this.style, i3 = t.backgroundColor, o3 = t.backgroundColorChecked, r2 = t.knobColor, a2 = t.knobColorChecked, l2 = this.checked ? a2 : r2, c2 = this.checked ? o3 : i3;
        this.applySmooth(this._Knob, {
          color: l2
        }), this.applySmooth(this._Container, {
          color: c2
        });
      }
    }, {
      key: "_updateContainer",
      value: function _updateContainer() {
        var i3 = this.style, o3 = i3.knobRadius, r2 = i3.knobPadding, a2 = i3.strokeRadius, l2 = i3.strokeWidth, c2 = void 0 !== a2 ? 0 === a2 ? a2 : Math.max(0, a2 - l2) : Math.max(0, o3 + r2 + l2);
        this._Container.patch({
          w: this.w,
          h: this.h,
          texture: lightningjs_core_default.Tools.getRoundRect(this.w - 2 * l2 - 2, this.h - 2 * l2 - 2, c2, l2, 0, true, false)
        });
      }
    }, {
      key: "_updateStroke",
      value: function _updateStroke() {
        var i3 = this.style, o3 = i3.knobRadius, r2 = i3.knobPadding, a2 = i3.strokeColor, l2 = i3.strokeRadius, c2 = i3.strokeWidth;
        this._Stroke.patch({
          w: this.w,
          h: this.h,
          texture: lightningjs_core_default.Tools.getRoundRect(this.w - 2, this.h - 2, void 0 !== l2 ? l2 : o3 + r2 + c2, c2, a2, false, false)
        });
      }
    }, {
      key: "_updateKnob",
      value: function _updateKnob() {
        var i3 = this.style, o3 = i3.knobHeight, r2 = i3.knobWidth, a2 = i3.knobRadius;
        this._Knob.patch({
          zIndex: 2,
          y: (this.h - o3) / 2,
          texture: lightningjs_core_default.Tools.getRoundRect(r2 - 2, o3 - 2, a2, 0, 0, true, false)
        });
      }
    }, {
      key: "_setChecked",
      value: function _setChecked(t) {
        return this._checkedChanged = t !== this._checked, t;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        return this._isDisabledMode || (this.checked = !this.checked), this;
      }
    }, {
      key: "_handleEnter",
      value: function _handleEnter() {
        return "function" == typeof this.onEnter ? this.onEnter(this) : (this.toggle(), false);
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || (this.checked ? "Checked" : "Unchecked");
      },
      set: function set2(t) {
        _set(_getPrototypeOf(Toggle.prototype), "announce", t, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Toggle";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return vn;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Container: {
            Stroke: {},
            Knob: {}
          }
        };
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Container", {
          name: "Knob",
          path: "Container.Knob"
        }, {
          name: "Stroke",
          path: "Container.Stroke"
        }];
      }
    }, {
      key: "properties",
      get: function get() {
        return ["checked"];
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "strokeWeight",
          curr: "strokeWidth"
        }];
      }
    }]), Toggle;
  }();
  var kn = Object.freeze({
    __proto__: null,
    base: function base$1(t) {
      var i2 = t.spacer.lg, o2 = t.spacer.xxs, r2 = t.stroke.sm;
      return {
        height: i2 + 2 * (o2 + r2),
        knobWidth: i2,
        knobHeight: i2,
        knobRadius: i2 / 2,
        knobPadding: o2,
        strokeWidth: r2,
        width: 2 * (r2 + 2 * o2 + i2)
      };
    }
  });
  var bn = function(t) {
    _inherits(ToggleSmall, xn);
    var i2 = _createSuper(ToggleSmall);
    function ToggleSmall() {
      return _classCallCheck(this, ToggleSmall), i2.apply(this, arguments);
    }
    return _createClass(ToggleSmall, null, [{
      key: "__componentName",
      get: function get() {
        return "ToggleSmall";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return kn;
      }
    }]), ToggleSmall;
  }();
  var Sn = function(i2) {
    _inherits(Circle, lightningjs_core_default.Texture);
    var o2 = _createSuper(Circle);
    function Circle(t) {
      var i3;
      return _classCallCheck(this, Circle), (i3 = o2.call(this, t))._color = "rgb(0,0,0)", i3._fill = true, i3._radius = 100, i3._stroke = false, i3._strokeColor = "rgb(0,0,0)", i3._strokeWidth = 1, i3;
    }
    return _createClass(Circle, [{
      key: "fill",
      get: function get() {
        return this._fill;
      },
      set: function set2(t) {
        this._fill = t, this._changed();
      }
    }, {
      key: "radius",
      get: function get() {
        return this._radius;
      },
      set: function set2(t) {
        this._radius = t, this._changed();
      }
    }, {
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set2(t) {
        this._color = t, this._changed();
      }
    }, {
      key: "stroke",
      get: function get() {
        return this._stroke;
      },
      set: function set2(t) {
        this._stroke = t, this._changed();
      }
    }, {
      key: "strokeWidth",
      get: function get() {
        return this._strokeWidth;
      },
      set: function set2(t) {
        this._strokeWidth = t, this._changed();
      }
    }, {
      key: "strokeColor",
      get: function get() {
        return this._strokeColor;
      },
      set: function set2(t) {
        this._strokeColor = t, this._changed();
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "__circle_".concat(this._radius);
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var t = this._color, i3 = this._fill, o3 = this._radius, r2 = this._stroke, a2 = this._strokeColor, l2 = this._strokeWidth, c2 = this.stage.platform.getDrawingCanvas(), u2 = o3;
        return r2 && (u2 = o3 + 2 * l2), c2.width = 2 * u2, c2.height = 2 * u2, function(h2) {
          var d2 = c2.getContext("2d");
          d2.lineWidth = l2, d2.strokeStyle = a2, d2.fillStyle = t, d2.beginPath(), d2.arc(u2, u2, o3, 0, 2 * Math.PI), i3 && d2.fill(), r2 && d2.stroke(), h2(null, {
            source: c2,
            radius: o3
          });
        };
      }
    }]), Circle;
  }();
  var Cn = function(i2) {
    _inherits(Arrow, lightningjs_core_default.Texture);
    var o2 = _createSuper(Arrow);
    function Arrow(t) {
      var i3;
      return _classCallCheck(this, Arrow), (i3 = o2.call(this, t))._color = "rgb(13, 13, 15)", i3._w = 0, i3._h = 0, i3._direction = "right", i3;
    }
    return _createClass(Arrow, [{
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set2(t) {
        this._w = t, this._changed();
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      },
      set: function set2(t) {
        this._h = t, this._changed();
      }
    }, {
      key: "direction",
      get: function get() {
        return this._direction;
      },
      set: function set2(t) {
        this._direction = t, this._changed();
      }
    }, {
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set2(t) {
        this._color = t, this._changed();
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "__triangle_".concat(this._direction, "_").concat(this._w, "x").concat(this._h);
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var t = this._color, i3 = this._w, o3 = this._h, r2 = this._direction, a2 = this.stage.platform.getDrawingCanvas();
        return function(l2) {
          var c2 = a2.getContext("2d");
          a2.width = i3, a2.height = o3, c2.fillStyle = t, c2.strokeStyle = c2.fillStyle, c2.lineWidth = 2, c2.lineCap = "round", c2.lineJoin = "round";
          var u2 = c2.lineWidth / 2;
          c2.beginPath(), "right" === r2 ? (c2.moveTo(u2, u2), c2.lineTo(u2, o3 - u2), c2.lineTo(i3 - u2, o3 / 2)) : "down" === r2 ? (c2.moveTo(u2, u2), c2.lineTo(i3 - u2, u2), c2.lineTo(i3 / 2, o3 - u2)) : (c2.moveTo(u2, o3 / 2), c2.lineTo(i3 - u2, u2), c2.lineTo(i3 - u2, o3 - u2)), c2.closePath(), c2.stroke(), c2.fill(), l2(null, {
            source: a2,
            w: i3,
            h: o3,
            direction: r2
          });
        };
      }
    }]), Arrow;
  }();
  var wn = function(i2) {
    _inherits(Line, lightningjs_core_default.Texture);
    var o2 = _createSuper(Line);
    function Line(t) {
      var i3;
      return _classCallCheck(this, Line), (i3 = o2.call(this, t))._w = 0, i3._h = 0, i3._rounded = false, i3;
    }
    return _createClass(Line, [{
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set2(t) {
        this._w = t, this._changed();
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      },
      set: function set2(t) {
        this._h = t, this._changed();
      }
    }, {
      key: "rounded",
      get: function get() {
        return this._rounded;
      },
      set: function set2(t) {
        this._rounded = t, this._changed();
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        return "__line_".concat(this._w, "x").concat(this._h).concat(this._rounded ? "_rounded" : "");
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var t = this._w, i3 = this._h, o3 = this._rounded, r2 = this.stage.platform.getDrawingCanvas();
        return function(a2) {
          var l2 = r2.getContext("2d");
          r2.width = t, r2.height = i3, l2.lineWidth = i3, o3 && (l2.lineCap = "round"), l2.strokeStyle = "white", l2.beginPath(), l2.moveTo(o3 ? 2 : 0, i3 / 2), l2.lineTo(o3 ? t - 2 : t, i3 / 2), l2.stroke(), a2(null, {
            source: r2,
            w: t,
            h: i3,
            rounded: o3
          });
        };
      }
    }]), Line;
  }();
  var Tn = function(i2) {
    _inherits(Bubble, lightningjs_core_default.Texture);
    var o2 = _createSuper(Bubble);
    function Bubble(t) {
      var i3;
      return _classCallCheck(this, Bubble), (i3 = o2.call(this, t))._w = 0, i3._h = 0, i3._radius = 0, i3._pointerWidth = 0, i3._pointerHeight = 0, i3._strokeWidth = 0, i3._color = "white", i3;
    }
    return _createClass(Bubble, [{
      key: "w",
      get: function get() {
        return this._w;
      },
      set: function set2(t) {
        this._w = t, this._changed();
      }
    }, {
      key: "h",
      get: function get() {
        return this._h;
      },
      set: function set2(t) {
        this._h = t, this._changed();
      }
    }, {
      key: "radius",
      get: function get() {
        return this._radius;
      },
      set: function set2(t) {
        Array.isArray(t) ? this._radius = new Array(4).fill().map(function(i3, o3) {
          return t[o3] || 0;
        }) : this._radius = t, this._changed();
      }
    }, {
      key: "pointerWidth",
      get: function get() {
        return this._pointerWidth;
      },
      set: function set2(t) {
        this._pointerWidth = t, this._changed();
      }
    }, {
      key: "pointerHeight",
      get: function get() {
        return this._pointerHeight;
      },
      set: function set2(t) {
        this._pointerHeight = t, this._changed();
      }
    }, {
      key: "strokeWidth",
      get: function get() {
        return this._strokeWidth;
      },
      set: function set2(t) {
        this._strokeWidth = t, this._changed();
      }
    }, {
      key: "color",
      get: function get() {
        return this._color;
      },
      set: function set2(i3) {
        this._color = lightningjs_core_default.StageUtils.getRgbaString(i3), this._changed();
      }
    }, {
      key: "createBubble",
      value: function createBubble(t) {
        var i3 = t.stage, o3 = t.w, r2 = void 0 === o3 ? 0 : o3, a2 = t.h, l2 = void 0 === a2 ? 0 : a2, c2 = t.radius, u2 = void 0 === c2 ? 0 : c2, h2 = t.pointerWidth, d2 = void 0 === h2 ? 0 : h2, p2 = t.pointerHeight, _2 = void 0 === p2 ? 0 : p2, g2 = t.strokeWidth, m2 = void 0 === g2 ? 1 : g2, v2 = t.color, k2 = void 0 === v2 ? "white" : v2, b2 = i3.platform.getDrawingCanvas(), S2 = b2.getContext("2d");
        b2.width = r2 + m2 + 4, b2.height = l2 + m2 + 4, S2.imageSmoothingEnabled = true, S2.fillStyle = k2, S2.strokeStyle = k2, S2.lineWidth = m2, S2.lineCap = "round", S2.lineJoin = "round";
        var C2 = 0.5 * m2 + 1, T2 = C2, I2 = T2 + r2, A2 = C2, P = A2 + l2, L = P - _2, B = Array.isArray(u2);
        return S2.beginPath(), S2.moveTo(T2 + (B ? u2[0] : u2), A2), S2.lineTo(I2 - (B ? u2[0] : u2), A2), S2.arcTo(I2, A2, I2, A2 + (B ? u2[1] : u2), B ? u2[1] : u2), S2.lineTo(I2, L - (B ? u2[2] : u2)), S2.arcTo(I2, L, I2 - (B ? u2[2] : u2), L, B ? u2[2] : u2), S2.lineTo(r2 / 2 + d2 / 2, L), S2.arcTo(r2 / 2, P, r2 / 2 - d2 / 2, L, 2), S2.lineTo(r2 / 2 - d2 / 2, L), S2.lineTo(T2 + (B ? u2[3] : u2), L), S2.arcTo(T2, L, T2, L - (B ? u2[3] : u2), B ? u2[3] : u2), S2.lineTo(T2, A2 + (B ? u2[0] : u2)), S2.arcTo(T2, A2, T2 + (B ? u2[0] : u2), A2, B ? u2[0] : u2), S2.stroke(), S2.fill(), b2;
      }
    }, {
      key: "_getLookupId",
      value: function _getLookupId() {
        var t = this.w, i3 = this.h, o3 = this.radius, r2 = this.pointerWidth, a2 = this.pointerHeight, l2 = this.color;
        return "__bubble_".concat(t, "x").concat(i3, "_radius-").concat(o3, "_pointer-").concat(r2, "x").concat(a2, "_fill-").concat(l2);
      }
    }, {
      key: "_getSourceLoader",
      value: function _getSourceLoader() {
        var t = this;
        return function(i3) {
          i3(null, {
            source: t.createBubble(t)
          });
        };
      }
    }]), Bubble;
  }();
  var In = Object.freeze({
    __proto__: null,
    base: function base(t) {
      return {
        marginBottom: t.spacer.xxxl,
        paddingX: t.spacer.lg,
        paddingY: t.spacer.md,
        pointerWidth: t.spacer.xl,
        pointerHeight: t.spacer.md + t.spacer.xs,
        radius: t.radius.md,
        textStyle: _objectSpread(_objectSpread({}, t.typography.caption1), {}, {
          textColor: t.color.textInverse
        }),
        transition: t.animation.utility
      };
    },
    tone: function tone(t) {
      return {
        neutral: {
          backgroundColor: t.color.fillNeutral,
          textStyle: {
            textColor: t.color.textInverse
          }
        },
        inverse: {
          backgroundColor: t.color.fillInverse,
          textStyle: {
            textColor: t.color.textNeutral
          }
        },
        brand: {
          backgroundColor: t.color.fillBrand,
          textStyle: {
            textColor: t.color.textNeutral
          }
        }
      };
    }
  });
  var An = function(t) {
    _inherits(Tooltip, tt);
    var i2 = _createSuper(Tooltip);
    function Tooltip() {
      return _classCallCheck(this, Tooltip), i2.apply(this, arguments);
    }
    return _createClass(Tooltip, [{
      key: "_update",
      value: function _update() {
        this._updateText();
      }
    }, {
      key: "_updateText",
      value: function _updateText() {
        this._Text && this._Text.patch({
          content: this.title,
          style: {
            textStyle: this.style.textStyle
          }
        });
      }
    }, {
      key: "_textLoaded",
      value: function _textLoaded() {
        this._updateBackground(), this._updateTextPosition();
      }
    }, {
      key: "_updateBackground",
      value: function _updateBackground() {
        var t2 = this._Text.finalH + 2 * this.style.paddingY + this.style.pointerHeight, i3 = this._Text.finalW + 2 * this.style.paddingX;
        this.patch({
          w: i3,
          h: t2,
          mountY: 1,
          y: -this.style.marginBottom,
          Background: {
            w: i3,
            h: t2,
            texture: {
              type: Tn,
              w: i3,
              h: t2,
              radius: this.style.radius,
              pointerWidth: this.style.pointerWidth,
              pointerHeight: this.style.pointerHeight,
              color: this.style.backgroundColor
            }
          }
        });
      }
    }, {
      key: "_updateTextPosition",
      value: function _updateTextPosition() {
        this._Text && this._Text.patch({
          mount: 0.5,
          x: this._Background.w / 2,
          y: (this._Background.h - this.style.pointerHeight) / 2
        });
      }
    }, {
      key: "_clearTimers",
      value: function _clearTimers() {
        clearTimeout(this._hideTimer), clearTimeout(this._showTimer);
      }
    }, {
      key: "_transitionIn",
      value: function _transitionIn() {
        var t2 = this, i3 = {
          smooth: {
            alpha: [1, this.style.transition],
            scale: [1, this.style.transition]
          }
        };
        this.delayVisible ? this._showTimer = setTimeout(function() {
          t2.patch({
            smooth: i3
          });
        }, this.delayVisible) : (this._showTimer = void 0, this.patch({
          smooth: i3
        })), this._hideTimer = this.timeVisible ? setTimeout(function() {
          t2._unfocus();
        }, this.timeVisible + (this.delayVisible || 0)) : void 0;
      }
    }, {
      key: "_transitionOut",
      value: function _transitionOut() {
        this.patch({
          smooth: {
            alpha: [0, this.style.transition],
            scale: [0.5, this.style.transition]
          }
        });
      }
    }, {
      key: "_focus",
      value: function _focus() {
        this._clearTimers(), this._transitionIn();
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this._clearTimers(), this._transitionOut();
      }
    }, {
      key: "announce",
      get: function get() {
        return this._announce || this._Text && this._Text.announce;
      },
      set: function set2(t2) {
        _set(_getPrototypeOf(Tooltip.prototype), "announce", t2, this, true);
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return "Tooltip";
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return In;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          alpha: 0,
          scale: 0.5,
          mountX: 0.5,
          x: function x(t2) {
            return t2 / 2;
          },
          Background: {
            Text: {
              type: At,
              signals: {
                textBoxChanged: "_textLoaded"
              }
            }
          }
        };
      }
    }, {
      key: "properties",
      get: function get() {
        return ["title", "delayVisible", "timeVisible"];
      }
    }, {
      key: "tags",
      get: function get() {
        return ["Background", {
          name: "Text",
          path: "Background.Text"
        }];
      }
    }, {
      key: "aliasStyles",
      get: function get() {
        return [{
          prev: "pointerH",
          curr: "pointerHeight"
        }, {
          prev: "pointerW",
          curr: "pointerWidth"
        }];
      }
    }]), Tooltip;
  }();

  // node_modules/@firebolt-js/sdk/dist/lib/Transport/MockTransport.mjs
  var win = typeof window !== "undefined" ? window : {};
  var listener;
  var setMockListener = (func) => {
    listener = func;
  };
  var mock;
  var pending = [];
  var eventMap = {};
  var callback;
  var testHarness;
  if (win.__firebolt && win.__firebolt.testHarness) {
    testHarness = win.__firebolt.testHarness;
  }
  function send(message) {
    console.debug("Sending message to transport: " + message);
    let json = JSON.parse(message);
    if (Array.isArray(json)) {
      json.forEach((j) => send(JSON.stringify(j)));
      return;
    }
    let [module, method] = json.method.split(".");
    if (testHarness && testHarness.onSend) {
      testHarness.onSend(module, method, json.params, json.id);
    }
    if (method.match(/^on[A-Z]/)) {
      if (json.params.listen) {
        eventMap[json.id] = module.toLowerCase() + "." + method[2].toLowerCase() + method.substr(3);
      } else {
        Object.keys(eventMap).forEach((key) => {
          if (eventMap[key] === module.toLowerCase() + "." + method[2].toLowerCase() + method.substr(3)) {
            delete eventMap[key];
          }
        });
      }
    }
    if (mock)
      handle(json);
    else
      pending.push(json);
  }
  function handle(json) {
    let result;
    try {
      result = getResult(json.method, json.params);
    } catch (error) {
      setTimeout(() => callback(JSON.stringify({
        jsonrpc: "2.0",
        error: {
          code: -32602,
          message: "Invalid params (this is a mock error from the mock transport layer)"
        },
        id: json.id
      })));
    }
    setTimeout(() => callback(JSON.stringify({
      jsonrpc: "2.0",
      result,
      id: json.id
    })));
  }
  function receive(_callback) {
    callback = _callback;
    if (testHarness && typeof testHarness.initialize === "function") {
      testHarness.initialize({
        emit: event,
        listen: function() {
          listener(...arguments);
        }
      });
    }
  }
  function event(module, event2, value) {
    const listener2 = Object.entries(eventMap).find((_ref) => {
      let [k2, v2] = _ref;
      return v2.toLowerCase() === module.toLowerCase() + "." + event2.toLowerCase();
    });
    if (listener2) {
      let message = JSON.stringify({
        jsonrpc: "2.0",
        id: parseInt(listener2[0]),
        result: value
      });
      callback(message);
    }
  }
  function dotGrab2() {
    let obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : void 0;
    const keys2 = key.split(".");
    let ref = obj;
    for (let i2 = 0; i2 < keys2.length; i2++) {
      ref = (Object.entries(ref).find((_ref2) => {
        let [k2, v2] = _ref2;
        return k2.toLowerCase() === keys2[i2].toLowerCase();
      }) || [null, {}])[1];
    }
    return ref;
  }
  function getResult(method, params) {
    let api = dotGrab2(mock, method);
    if (method.match(/^[a-zA-Z]+\.on[A-Za-z]+$/)) {
      api = {
        event: method,
        listening: true
      };
    }
    if (typeof api === "function") {
      return params == null ? api() : api(params);
    } else
      return api;
  }
  function setMockResponses(m2) {
    mock = m2;
    pending.forEach((json) => handle(json));
    pending.length = 0;
  }
  var MockTransport_default = {
    send,
    receive,
    event
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Prop/Router.mjs
  function Router_default2(params, callbackOrValue, contextParameterCount) {
    const numArgs = params ? Object.values(params).length : 0;
    if (numArgs === contextParameterCount && callbackOrValue === void 0) {
      return "getter";
    } else if (numArgs === contextParameterCount && typeof callbackOrValue === "function") {
      return "subscriber";
    } else if (numArgs === contextParameterCount && callbackOrValue !== void 0) {
      return "setter";
    }
    return null;
  }

  // node_modules/@firebolt-js/sdk/dist/lib/Prop/MockProps.mjs
  var mocks = {};
  function mock2(module, method, params, value, contextParameterCount, def) {
    const type2 = Router_default2(params, value, contextParameterCount);
    const hash = contextParameterCount ? "." + Object.keys(params).filter((key2) => key2 !== "value").map((key2) => params[key2]).join(".") : "";
    const key = "".concat(module, ".").concat(method).concat(hash);
    if (type2 === "getter") {
      const value2 = mocks.hasOwnProperty(key) ? mocks[key] : def;
      return value2;
    } else if (type2 === "subscriber") {
    } else if (type2 === "setter") {
      mocks[key] = value;
      MockTransport_default.event(module, "".concat(method, "Changed"), {
        value
      });
      return null;
    }
  }
  var MockProps_default = {
    mock: mock2
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Accessibility/defaults.mjs
  var defaults_default2 = {
    closedCaptions: {
      "enabled": true,
      "styles": {
        "fontFamily": "monospaced_sanserif",
        "fontSize": 1,
        "fontColor": "#ffffff",
        "fontEdge": "none",
        "fontEdgeColor": "#7F7F7F",
        "fontOpacity": 100,
        "backgroundColor": "#000000",
        "backgroundOpacity": 100,
        "textAlign": "center",
        "textAlignVertical": "middle",
        "windowColor": "white",
        "windowOpacity": 50
      },
      "preferredLanguages": ["eng", "spa"]
    },
    closedCaptionsSettings: function(params) {
      return MockProps_default.mock("Accessibility", "closedCaptionsSettings", params, void 0, 0, {
        "enabled": true,
        "styles": {
          "fontFamily": "monospaced_sanserif",
          "fontSize": 1,
          "fontColor": "#ffffff",
          "fontEdge": "none",
          "fontEdgeColor": "#7F7F7F",
          "fontOpacity": 100,
          "backgroundColor": "#000000",
          "backgroundOpacity": 100,
          "textAlign": "center",
          "textAlignVertical": "middle",
          "windowColor": "white",
          "windowOpacity": 50
        },
        "preferredLanguages": ["eng", "spa"]
      });
    },
    voiceGuidance: {
      "enabled": true,
      "speed": 2
    },
    voiceGuidanceSettings: function(params) {
      return MockProps_default.mock("Accessibility", "voiceGuidanceSettings", params, void 0, 0, {
        "enabled": true,
        "speed": 2
      });
    },
    audioDescriptionSettings: function(params) {
      return MockProps_default.mock("Accessibility", "audioDescriptionSettings", params, void 0, 0, {
        "enabled": true
      });
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Account/defaults.mjs
  var defaults_default3 = {
    id: function(params) {
      return MockProps_default.mock("Account", "id", params, void 0, 0, "123");
    },
    uid: function(params) {
      return MockProps_default.mock("Account", "uid", params, void 0, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e");
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Advertising/defaults.mjs
  var defaults_default4 = {
    config: {
      "adServerUrl": "https://demo.v.fwmrm.net/ad/p/1",
      "adServerUrlTemplate": "https://demo.v.fwmrm.net/ad/p/1?flag=+sltp+exvt+slcb+emcr+amcb+aeti&prof=12345:caf_allinone_profile &nw=12345&mode=live&vdur=123&caid=a110523018&asnw=372464&csid=gmott_ios_tablet_watch_live_ESPNU&ssnw=372464&vip=198.205.92.1&resp=vmap1&metr=1031&pvrn=12345&vprn=12345&vcid=1X0Ce7L3xRWlTeNhc7br8Q%3D%3D",
      "adNetworkId": "519178",
      "adProfileId": "12345:caf_allinone_profile",
      "adSiteSectionId": "caf_allinone_profile_section",
      "adOptOut": true,
      "privacyData": "ew0KICAicGR0IjogImdkcDp2MSIsDQogICJ1c19wcml2YWN5IjogIjEtTi0iLA0KICAibG10IjogIjEiIA0KfQ0K",
      "ifaValue": "01234567-89AB-CDEF-GH01-23456789ABCD",
      "ifa": "ewogICJ2YWx1ZSI6ICIwMTIzNDU2Ny04OUFCLUNERUYtR0gwMS0yMzQ1Njc4OUFCQ0QiLAogICJpZmFfdHlwZSI6ICJzc3BpZCIsCiAgImxtdCI6ICIwIgp9Cg==",
      "appName": "FutureToday",
      "appBundleId": "FutureToday.comcast",
      "distributorAppId": "1001",
      "deviceAdAttributes": "ewogICJib0F0dHJpYnV0ZXNGb3JSZXZTaGFyZUlkIjogIjEyMzQiCn0=",
      "coppa": 0,
      "authenticationEntity": "60f72475281cfba3852413bd53e957f6"
    },
    policy: function(params) {
      return MockProps_default.mock("Advertising", "policy", params, void 0, 0, {
        "skipRestriction": "adsUnwatched",
        "limitAdTracking": false
      });
    },
    advertisingId: {
      "ifa": "01234567-89AB-CDEF-GH01-23456789ABCD",
      "ifa_type": "idfa",
      "lmt": "0"
    },
    deviceAttributes: {},
    appBundleId: "operator.app"
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Authentication/defaults.mjs
  var defaults_default5 = {
    token: {
      "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      "expires": "2022-04-23T18:25:43.511Z",
      "type": "platform"
    },
    device: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    session: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    root: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Capabilities/defaults.mjs
  var defaults_default6 = {
    supported: true,
    available: true,
    permitted: true,
    granted: true,
    info: [{
      "capability": "xrn:firebolt:capability:device:model",
      "supported": true,
      "available": true,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      }
    }, {
      "capability": "xrn:firebolt:capability:input:keyboard",
      "supported": true,
      "available": true,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      }
    }, {
      "capability": "xrn:firebolt:capability:protocol:bluetoothle",
      "supported": false,
      "available": false,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      },
      "details": ["unsupported"]
    }, {
      "capability": "xrn:firebolt:capability:token:device",
      "supported": true,
      "available": true,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      }
    }, {
      "capability": "xrn:firebolt:capability:token:platform",
      "supported": true,
      "available": false,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      },
      "details": ["unavailable"]
    }, {
      "capability": "xrn:firebolt:capability:protocol:moca",
      "supported": true,
      "available": false,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      },
      "details": ["disabled", "unavailable"]
    }, {
      "capability": "xrn:firebolt:capability:wifi:scan",
      "supported": true,
      "available": true,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      },
      "details": ["unpermitted"]
    }, {
      "capability": "xrn:firebolt:capability:localization:postal-code",
      "supported": true,
      "available": true,
      "use": {
        "permitted": true,
        "granted": null
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      },
      "details": ["ungranted"]
    }, {
      "capability": "xrn:firebolt:capability:localization:postal-code",
      "supported": true,
      "available": true,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      },
      "details": ["ungranted"]
    }, {
      "capability": "xrn:firebolt:capability:localization:locality",
      "supported": true,
      "available": true,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      },
      "details": ["grantDenied", "ungranted"]
    }],
    request: [{
      "capability": "xrn:firebolt:capability:commerce:purchase",
      "supported": true,
      "available": true,
      "use": {
        "permitted": true,
        "granted": true
      },
      "manage": {
        "permitted": true,
        "granted": true
      },
      "provide": {
        "permitted": true,
        "granted": true
      }
    }]
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Device/defaults.mjs
  var defaults_default7 = {
    id: function(params) {
      return MockProps_default.mock("Device", "id", params, void 0, 0, "123");
    },
    distributor: function(params) {
      return MockProps_default.mock("Device", "distributor", params, void 0, 0, "Company");
    },
    platform: function(params) {
      return MockProps_default.mock("Device", "platform", params, void 0, 0, "WPE");
    },
    uid: function(params) {
      return MockProps_default.mock("Device", "uid", params, void 0, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e");
    },
    type: function(params) {
      return MockProps_default.mock("Device", "type", params, void 0, 0, "STB");
    },
    model: function(params) {
      return MockProps_default.mock("Device", "model", params, void 0, 0, "xi6");
    },
    sku: function(params) {
      return MockProps_default.mock("Device", "sku", params, void 0, 0, "AX061AEI");
    },
    make: function(params) {
      return MockProps_default.mock("Device", "make", params, void 0, 0, "Arris");
    },
    version: function(params) {
      return MockProps_default.mock("Device", "version", params, void 0, 0, {
        "sdk": {
          "major": 0,
          "minor": 8,
          "patch": 0,
          "readable": "Firebolt JS SDK v0.8.0"
        },
        "api": {
          "major": 0,
          "minor": 8,
          "patch": 0,
          "readable": "Firebolt API v0.8.0"
        },
        "firmware": {
          "major": 1,
          "minor": 2,
          "patch": 3,
          "readable": "Device Firmware v1.2.3"
        },
        "os": {
          "major": 0,
          "minor": 1,
          "patch": 0,
          "readable": "Firebolt OS v0.1.0"
        },
        "debug": "Non-parsable build info for error logging only."
      });
    },
    hdcp: function(params) {
      return MockProps_default.mock("Device", "hdcp", params, void 0, 0, {
        "hdcp1.4": true,
        "hdcp2.2": true
      });
    },
    hdr: function(params) {
      return MockProps_default.mock("Device", "hdr", params, void 0, 0, {
        "hdr10": true,
        "hdr10Plus": true,
        "dolbyVision": true,
        "hlg": true
      });
    },
    audio: function(params) {
      return MockProps_default.mock("Device", "audio", params, void 0, 0, {
        "stereo": true,
        "dolbyDigital5.1": true,
        "dolbyDigital5.1+": true,
        "dolbyAtmos": true
      });
    },
    screenResolution: function(params) {
      return MockProps_default.mock("Device", "screenResolution", params, void 0, 0, [1920, 1080]);
    },
    videoResolution: function(params) {
      return MockProps_default.mock("Device", "videoResolution", params, void 0, 0, [1920, 1080]);
    },
    name: function(params) {
      return MockProps_default.mock("Device", "name", params, void 0, 0, "Living Room");
    },
    network: function(params) {
      return MockProps_default.mock("Device", "network", params, void 0, 0, {
        "state": "connected",
        "type": "wifi"
      });
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Discovery/defaults.mjs
  var defaults_default8 = {
    policy: function(params) {
      return MockProps_default.mock("Discovery", "policy", params, void 0, 0, {
        "enableRecommendations": true,
        "shareWatchHistory": true,
        "rememberWatchedPrograms": true
      });
    },
    entityInfo: true,
    purchasedContent: true,
    watched: true,
    watchNext: true,
    entitlements: true,
    contentAccess: null,
    clearContentAccess: null,
    launch: true,
    signIn: true,
    signOut: true
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Keyboard/defaults.mjs
  var defaults_default9 = {
    email: "user@domain.com",
    password: "abc123",
    standard: "Living Room"
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Lifecycle/defaults.mjs
  var inactive = {
    "state": "inactive",
    "previous": "initializing"
  };
  var foreground = {
    "state": "foreground",
    "previous": "inactive"
  };
  var unloading = {
    "state": "unloading",
    "previous": "inactive"
  };
  var emit2 = (value) => {
    MockTransport_default.event("Lifecycle", value.state, value);
  };
  var win2 = typeof window !== "undefined" ? window : {};
  var automation = win2.__firebolt ? !!win2.__firebolt.automation : false;
  var defaults_default10 = {
    ready: function() {
      inactive.previous = "initializing";
      setTimeout(() => emit2(inactive), automation ? 1 : 500);
      foreground.previous = "inactive";
      setTimeout(() => emit2(foreground), automation ? 2 : 1e3);
    },
    close: function(params) {
      let reason = params.reason;
      if (reason === "remoteButton") {
        inactive.previous = "foreground";
        setTimeout(() => emit2(inactive), automation ? 1 : 500);
      } else if (["userExit", "error"].includes(reason)) {
        inactive.previous = "foreground";
        unloading.previous = "inactive";
        setTimeout(() => emit2(inactive), automation ? 1 : 500);
        setTimeout(() => emit2(unloading), automation ? 2 : 1e3);
      } else {
        throw "Invalid close reason";
      }
    },
    finished: function() {
      if (win2.location)
        win2.location.href = "about:blank";
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Localization/defaults.mjs
  var defaults_default11 = {
    locality: function(params) {
      return MockProps_default.mock("Localization", "locality", params, void 0, 0, "Philadelphia");
    },
    postalCode: function(params) {
      return MockProps_default.mock("Localization", "postalCode", params, void 0, 0, "19103");
    },
    countryCode: function(params) {
      return MockProps_default.mock("Localization", "countryCode", params, void 0, 0, "US");
    },
    language: function(params) {
      return MockProps_default.mock("Localization", "language", params, void 0, 0, "en");
    },
    preferredAudioLanguages: function(params) {
      return MockProps_default.mock("Localization", "preferredAudioLanguages", params, void 0, 0, ["spa", "eng"]);
    },
    locale: function(params) {
      return MockProps_default.mock("Localization", "locale", params, void 0, 0, "en-US");
    },
    latlon: [39.9549, 75.1699],
    additionalInfo: {}
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Metrics/defaults.mjs
  var defaults_default12 = {
    ready: true,
    signIn: true,
    signOut: true,
    startContent: true,
    stopContent: true,
    page: true,
    action: true,
    error: true,
    mediaLoadStart: true,
    mediaPlay: true,
    mediaPlaying: true,
    mediaPause: true,
    mediaWaiting: true,
    mediaProgress: true,
    mediaSeeking: true,
    mediaSeeked: true,
    mediaRateChange: true,
    mediaRenditionChange: true,
    mediaEnded: true
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Parameters/defaults.mjs
  var defaults_default13 = {
    initialization: {
      "lmt": 0,
      "us_privacy": "1-Y-",
      "discovery": {
        "navigateTo": {
          "action": "entity",
          "data": {
            "entityId": "abc",
            "entityType": "program",
            "programType": "movie"
          },
          "context": {
            "source": "voice"
          }
        }
      }
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Profile/defaults.mjs
  var defaults_default14 = {
    approveContentRating: false,
    approvePurchase: false,
    flags: {
      "userExperience": "1000"
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/SecondScreen/defaults.mjs
  var defaults_default15 = {
    protocols: {
      "dial1.7": true
    },
    device: "device-id",
    friendlyName: function(params) {
      return MockProps_default.mock("SecondScreen", "friendlyName", params, void 0, 0, "Living Room");
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/SecureStorage/defaults.mjs
  var defaults_default16 = {
    get: "VGhpcyBub3QgYSByZWFsIHRva2VuLgo=",
    set: null,
    remove: null,
    clear: null
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Platform/defaults.mjs
  var defaults_default17 = {
    localization: defaults_default11,
    device: defaults_default7,
    accessibility: defaults_default2
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Transport/queue.mjs
  var Queue = class {
    constructor() {
      this._callback = null;
      this._queue = [];
    }
    send(json) {
      this._queue.push(json);
    }
    receive(_callback) {
      this._callback = _callback;
    }
    flush(transport) {
      transport.receive(this._callback);
      this._queue.forEach((item) => transport.send(item));
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Settings/index.mjs
  var settings2 = {};
  var subscribers2 = {};
  var initSettings2 = (appSettings, platformSettings) => {
    settings2["app"] = appSettings;
    settings2["platform"] = {
      logLevel: "WARN",
      ...platformSettings
    };
    settings2["user"] = {};
  };
  var publish2 = (key, value) => {
    subscribers2[key] && subscribers2[key].forEach((subscriber) => subscriber(value));
  };
  var dotGrab3 = function() {
    let obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    let key = arguments.length > 1 ? arguments[1] : void 0;
    const keys2 = key.split(".");
    for (let i2 = 0; i2 < keys2.length; i2++) {
      obj = obj[keys2[i2]] = obj[keys2[i2]] !== void 0 ? obj[keys2[i2]] : {};
    }
    return typeof obj === "object" ? Object.keys(obj).length ? obj : void 0 : obj;
  };
  var Settings_default2 = {
    get(type2, key) {
      let fallback = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
      const val = dotGrab3(settings2[type2], key);
      return val !== void 0 ? val : fallback;
    },
    has(type2, key) {
      return !!this.get(type2, key);
    },
    set(key, value) {
      settings2["user"][key] = value;
      publish2(key, value);
    },
    subscribe(key, callback2) {
      subscribers2[key] = subscribers2[key] || [];
      subscribers2[key].push(callback2);
    },
    unsubscribe(key, callback2) {
      if (callback2) {
        const index = subscribers2[key] && subscribers2[key].findIndex((cb) => cb === callback2);
        index > -1 && subscribers2[key].splice(index, 1);
      } else {
        if (key in subscribers2) {
          subscribers2[key] = [];
        }
      }
    },
    clearSubscribers() {
      for (const key of Object.getOwnPropertyNames(subscribers2)) {
        delete subscribers2[key];
      }
    },
    setLogLevel(logLevel) {
      settings2.platform.logLevel = logLevel;
    },
    getLogLevel() {
      return settings2.platform.logLevel;
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Transport/LegacyTransport.mjs
  var win3 = typeof window !== "undefined" ? window : {};
  var LegacyTransport = class _LegacyTransport {
    constructor(bridge) {
      this.bridge = bridge;
    }
    send(msg) {
      this.bridge.JSMessageChanged(msg, () => {
      });
    }
    receive(callback2) {
      win3.$badger = win3.$badger || {};
      const badgerCallback = win3.$badger.callback ? win3.$badger.callback.bind(win3.$badger) : null;
      const badgerEvent = win3.$badger.event ? win3.$badger.event.bind(win3.$badger) : null;
      win3.$badger.callback = (pid, success, json) => {
        if (json.jsonrpc) {
          callback2(JSON.stringify(json));
        } else if (badgerCallback) {
          badgerCallback(pid, success, json);
        }
      };
      win3.$badger.event = (handlerId, json) => {
        if (json.jsonrpc) {
          callback2(JSON.stringify(json));
        } else if (badgerEvent) {
          badgerEvent(handlerId, json);
        }
      };
    }
    static isLegacy(transport) {
      return _LegacyTransport.isXREProxy(transport) || transport.send === void 0 && transport.JSMessageChanged;
    }
    static isXREProxy(transport) {
      return transport.proxyObjectTest !== void 0;
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Transport/WebsocketTransport.mjs
  var MAX_QUEUED_MESSAGES = 100;
  var WebsocketTransport = class {
    constructor(endpoint) {
      this._endpoint = endpoint;
      this._ws = null;
      this._connected = false;
      this._queue = [];
      this._callbacks = [];
    }
    send(msg) {
      this._connect();
      if (this._connected) {
        this._ws.send(msg);
      } else {
        if (this._queue.length < MAX_QUEUED_MESSAGES) {
          this._queue.push(msg);
        }
      }
    }
    receive(callback2) {
      if (!callback2)
        return;
      this._connect();
      this._callbacks.push(callback2);
    }
    _notifyCallbacks(message) {
      for (let i2 = 0; i2 < this._callbacks.length; i2++) {
        setTimeout(() => this._callbacks[i2](message), 1);
      }
    }
    _connect() {
      if (this._ws)
        return;
      this._ws = new WebSocket(this._endpoint, ["jsonrpc"]);
      this._ws.addEventListener("message", (message) => {
        this._notifyCallbacks(message.data);
      });
      this._ws.addEventListener("error", (message) => {
      });
      this._ws.addEventListener("close", (message) => {
        this._ws = null;
        this._connected = false;
      });
      this._ws.addEventListener("open", (message) => {
        this._connected = true;
        for (let i2 = 0; i2 < this._queue.length; i2++) {
          this._ws.send(this._queue[i2]);
        }
        this._queue = [];
      });
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Results/index.mjs
  function transform(result, transforms) {
    if (!transforms || !transforms.methods) {
      return result;
    }
    const {
      methods: methods2
    } = transforms;
    const transformed = JSON.parse(JSON.stringify(result));
    Object.keys(methods2).forEach((key) => {
      const method_info = methods2[key];
      const rpc_method = method_info["x-method"];
      const [module, method] = rpc_method.split(".");
      const params = {};
      params[method_info["x-this-param"]] = transformed;
      transformed[key] = function() {
        for (var i2 = 0; i2 < arguments.length; i2++) {
          params[method_info["x-additional-params"][i2]] = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
        }
        return Transport.send(module.toLowerCase(), method, params);
      };
    });
    return transformed;
  }
  var Results_default = {
    transform
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Transport/index.mjs
  var LEGACY_TRANSPORT_SERVICE_NAME = "com.comcast.BridgeObject_1";
  var moduleInstance = null;
  var isEventSuccess = (x) => x && typeof x.event === "string" && typeof x.listening === "boolean";
  var win4 = typeof window !== "undefined" ? window : {};
  var Transport = class _Transport {
    constructor() {
      this._promises = [];
      this._transport = null;
      this._id = 1;
      this._eventEmitters = [];
      this._eventIds = [];
      this._queue = new Queue();
      this._deprecated = {};
      this.isMock = false;
    }
    static addEventEmitter(emitter) {
      _Transport.get()._eventEmitters.push(emitter);
    }
    static registerDeprecatedMethod(module, method, alternative) {
      _Transport.get()._deprecated[module.toLowerCase() + "." + method.toLowerCase()] = {
        alternative: alternative || ""
      };
    }
    _endpoint() {
      if (win4.__firebolt && win4.__firebolt.endpoint) {
        return win4.__firebolt.endpoint;
      }
      return null;
    }
    constructTransportLayer() {
      let transport;
      const endpoint = this._endpoint();
      if (endpoint && (endpoint.startsWith("ws://") || endpoint.startsWith("wss://"))) {
        transport = new WebsocketTransport(endpoint);
        transport.receive(this.receiveHandler.bind(this));
      } else if (typeof win4.ServiceManager !== "undefined" && win4.ServiceManager && win4.ServiceManager.version) {
        transport = this._queue;
        win4.ServiceManager.getServiceForJavaScript(LEGACY_TRANSPORT_SERVICE_NAME, (service) => {
          if (LegacyTransport.isLegacy(service)) {
            transport = new LegacyTransport(service);
          } else {
            transport = service;
          }
          this.setTransportLayer(transport);
        });
      } else {
        this.isMock = true;
        transport = MockTransport_default;
        transport.receive(this.receiveHandler.bind(this));
      }
      return transport;
    }
    setTransportLayer(tl) {
      this._transport = tl;
      this._queue.flush(tl);
    }
    static send(module, method, params, transforms) {
      return _Transport.get()._send(module, method, params, transforms);
    }
    static listen(module, method, params, transforms) {
      return _Transport.get()._sendAndGetId(module, method, params, transforms);
    }
    _send(module, method, params, transforms) {
      if (Array.isArray(module) && !method && !params) {
        return this._batch(module);
      } else {
        return this._sendAndGetId(module, method, params, transforms).promise;
      }
    }
    _sendAndGetId(module, method, params, transforms) {
      const {
        promise,
        json,
        id: id2
      } = this._processRequest(module, method, params, transforms);
      const msg = JSON.stringify(json);
      if (Settings_default2.getLogLevel() === "DEBUG") {
        console.debug("Sending message to transport: " + msg);
      }
      this._transport.send(msg);
      return {
        id: id2,
        promise
      };
    }
    _batch(requests) {
      const results = [];
      const json = [];
      requests.forEach((_ref) => {
        let {
          module,
          method,
          params,
          transforms
        } = _ref;
        const result = this._processRequest(module, method, params, transforms);
        results.push({
          promise: result.promise,
          id: result.id
        });
        json.push(result.json);
      });
      const msg = JSON.stringify(json);
      if (Settings_default2.getLogLevel() === "DEBUG") {
        console.debug("Sending message to transport: " + msg);
      }
      this._transport.send(msg);
      return results;
    }
    _processRequest(module, method, params, transforms) {
      const p2 = this._addPromiseToQueue(module, method, params, transforms);
      const json = this._createRequestJSON(module, method, params);
      const result = {
        promise: p2,
        json,
        id: this._id
      };
      this._id++;
      return result;
    }
    _createRequestJSON(module, method, params) {
      return {
        jsonrpc: "2.0",
        method: module.toLowerCase() + "." + method,
        params,
        id: this._id
      };
    }
    _addPromiseToQueue(module, method, params, transforms) {
      return new Promise((resolve, reject) => {
        this._promises[this._id] = {};
        this._promises[this._id].promise = this;
        this._promises[this._id].resolve = resolve;
        this._promises[this._id].reject = reject;
        this._promises[this._id].transforms = transforms;
        const deprecated2 = this._deprecated[module.toLowerCase() + "." + method.toLowerCase()];
        if (deprecated2) {
          console.warn("WARNING: ".concat(module, ".").concat(method, "() is deprecated. ") + deprecated2.alternative);
        }
        if (method.match(/^on[A-Z]/)) {
          if (params.listen) {
            this._eventIds.push(this._id);
          } else {
            this._eventIds = this._eventIds.filter((id2) => id2 !== this._id);
          }
        }
      });
    }
    /**
     * If we have a global transport, use that. Otherwise, use the module-scoped transport instance.
     * @returns {Transport}
     */
    static get() {
      win4.__firebolt = win4.__firebolt || {};
      if (win4.__firebolt.transport == null && moduleInstance == null) {
        const transport = new _Transport();
        transport.init();
        if (transport.isMock) {
          moduleInstance = transport;
        } else {
          win4.__firebolt = win4.__firebolt || {};
          win4.__firebolt.transport = transport;
        }
        win4.__firebolt.setTransportLayer = transport.setTransportLayer.bind(transport);
      }
      return win4.__firebolt.transport ? win4.__firebolt.transport : moduleInstance;
    }
    receiveHandler(message) {
      if (Settings_default2.getLogLevel() === "DEBUG") {
        console.debug("Received message from transport: " + message);
      }
      const json = JSON.parse(message);
      const p2 = this._promises[json.id];
      if (p2) {
        if (json.error)
          p2.reject(json.error);
        else {
          let result = json.result;
          if (p2.transforms) {
            if (Array.isArray(json.result)) {
              result = result.map((x) => Results_default.transform(x, p2.transforms));
            } else {
              result = Results_default.transform(result, p2.transforms);
            }
          }
          p2.resolve(result);
        }
        delete this._promises[json.id];
      }
      if (this._eventIds.includes(json.id) && !isEventSuccess(json.result)) {
        this._eventEmitters.forEach((emit4) => {
          emit4(json.id, json.result);
        });
      }
    }
    init() {
      initSettings2({}, {
        log: true
      });
      this._queue.receive(this.receiveHandler.bind(this));
      if (win4.__firebolt) {
        if (win4.__firebolt.mockTransportLayer === true) {
          this.isMock = true;
          this.setTransportLayer(MockTransport_default);
        } else if (win4.__firebolt.getTransportLayer) {
          this.setTransportLayer(win4.__firebolt.getTransportLayer());
        }
      }
      if (this._transport == null) {
        this._transport = this.constructTransportLayer();
      }
    }
  };
  win4.__firebolt = win4.__firebolt || {};
  win4.__firebolt.setTransportLayer = (transport) => {
    Transport.get().setTransportLayer(transport);
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Events/index.mjs
  var listenerId = 0;
  var listeners = {
    internal: {},
    external: {},
    // Several convenience functions below for checking both internal & external lists w/ one operation
    // gets a merge list of ids for a single event key
    get: (key) => {
      return Object.assign(Object.assign({}, listeners.internal[key]), listeners.external[key]);
    },
    // adds a callback/id to a key on the external list only 
    set: (key, id2, value) => {
      listeners.external[key] = listeners.external[key] || {};
      listeners.external[key][id2] = value;
    },
    // adds a callback/id to a key on the internal list only 
    setInternal: (key, id2, value) => {
      listeners.internal[key] = listeners.internal[key] || {};
      listeners.internal[key][id2] = value;
    },
    // finds the key for an id in either list (it can only be in one)
    find: (id2) => {
      let key;
      [listeners.internal, listeners.external].find((group) => {
        key = Object.keys(group).find((key2) => group[key2][id2]);
        if (key)
          return true;
      });
      return key;
    },
    // removes an id from either list
    remove: (id2) => {
      [listeners.internal, listeners.external].forEach((group) => {
        Object.keys(group).forEach((key) => {
          if (group[key] && group[key][id2]) {
            delete group[key][id2];
            if (Object.values(group[key]).length === 0) {
              delete group[key];
            }
          }
        });
      });
    },
    // removes a key from both lists if _internal is true, otherwise only the external list
    removeKey: function(key) {
      let _internal = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      _internal && listeners.internal[key] && delete listeners.internal[key];
      listeners.external[key] && delete listeners.external[key];
    },
    // gives a list of all keys
    keys: () => {
      return Array.from(new Set(Object.keys(listeners.internal).concat(Object.keys(listeners.external))));
    },
    // counts how many listeners are in a key across both lists
    count: (key) => {
      return Object.values(listeners.get(key)).length;
    }
  };
  var keys = {};
  var oncers = [];
  var validEvents = {};
  var validContext = {};
  var transportInitialized = false;
  var emit3 = (id2, value) => {
    callCallbacks(listeners.internal[keys[id2]], [value]);
    callCallbacks(listeners.external[keys[id2]], [value]);
  };
  var registerEvents = (module, events2) => {
    validEvents[module.toLowerCase()] = events2.concat();
  };
  var registerEventContext = (module, event2, context) => {
    validContext[module.toLowerCase()] = validContext[module.toLowerCase()] || {};
    validContext[module.toLowerCase()][event2] = context.concat();
  };
  var callCallbacks = (cbs, args) => {
    cbs && Object.keys(cbs).forEach((listenerId2) => {
      let callback2 = cbs[listenerId2];
      if (oncers.indexOf(parseInt(listenerId2)) >= 0) {
        oncers.splice(oncers.indexOf(parseInt(listenerId2)), 1);
        delete cbs[listenerId2];
      }
      callback2.apply(null, args);
    });
  };
  var doListen = function(module, event2, callback2, context, once4) {
    let internal = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
    init2();
    if (typeof callback2 !== "function") {
      return Promise.reject("No valid callback function provided.");
    } else {
      if (module === "*") {
        return Promise.reject("No valid module name provided");
      }
      const wildcard = event2 === "*";
      const events2 = wildcard ? validEvents[module] : [event2];
      const promises = [];
      const hasContext = Object.values(context).length > 0;
      const contextKey = Object.keys(context).sort().map((key) => key + "=" + JSON.stringify(context[key])).join("&");
      listenerId++;
      if (once4) {
        oncers.push(listenerId);
      }
      events2.forEach((event3) => {
        const key = module + "." + event3 + (hasContext ? ".".concat(contextKey) : "");
        if (Object.values(listeners.get(key)).length === 0) {
          const args = Object.assign({
            listen: true
          }, context);
          const {
            id: id2,
            promise
          } = Transport.listen(module, "on" + event3[0].toUpperCase() + event3.substring(1), args);
          keys[id2] = key;
          promises.push(promise);
        }
        const setter = internal ? listeners.setInternal : listeners.set;
        if (wildcard) {
          setter(key, "" + listenerId, (value) => callback2(event3, value));
        } else {
          setter(key, "" + listenerId, callback2);
        }
      });
      let resolve, reject;
      let p2 = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      if (promises.length) {
        Promise.all(promises).then((responses) => {
          resolve(listenerId);
        }).catch((error) => {
          if (event2 === "*") {
            resolve(listenerId);
          } else {
            reject(error);
          }
        });
      } else {
        resolve(listenerId);
      }
      return p2;
    }
  };
  var getListenArgs = function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const callback2 = args.pop();
    const [module, event2, context] = getClearArgs(...args);
    return [module, event2, callback2, context];
  };
  var getClearArgs = function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    const module = (args.shift() || "*").toLowerCase();
    const event2 = args.shift() || "*";
    const context = {};
    for (let i2 = 0; args.length; i2++) {
      context[validContext[module][event2][i2]] = args.shift();
    }
    return [module, event2, context];
  };
  var once = function() {
    const [module, event2, callback2, context] = getListenArgs(...arguments);
    return doListen(module, event2, callback2, context, true);
  };
  var listen = function() {
    const [module, event2, callback2, context] = getListenArgs(...arguments);
    return doListen(module, event2, callback2, context, false);
  };
  var clear = function() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (args && args.length && typeof args[0] === "number") {
      return doClear(args[0]);
    } else if (args && args.length && typeof args[1] === "number") {
      return doClear(args[1]);
    } else {
      const [moduleOrId, event2, context] = getClearArgs(...args);
      return doClear(moduleOrId, event2, context);
    }
  };
  var prioritize = function() {
    const [module, event2, callback2, context] = getListenArgs(...arguments);
    return doListen(module, event2, callback2, context, false, true);
  };
  var unsubscribe = (key, context) => {
    const [module, event2] = key.split(".").slice(0, 2);
    const args = Object.assign({
      listen: false
    }, context);
    Transport.send(module, "on" + event2[0].toUpperCase() + event2.substr(1), args);
  };
  var doClear = function() {
    let moduleOrId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    let event2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let context = arguments.length > 2 ? arguments[2] : void 0;
    if (event2 === "*") {
      event2 = false;
    }
    if (typeof moduleOrId === "number") {
      const searchId = moduleOrId.toString();
      const key = listeners.find(searchId);
      if (key) {
        listeners.remove(searchId);
        if (listeners.count(key) === 0) {
          unsubscribe(key);
        }
        return true;
      }
      return false;
    } else {
      if (!moduleOrId && !event2) {
        listeners.keys().forEach((key) => {
          listeners.removeKey(key);
          unsubscribe(key);
        });
      } else if (!event2) {
        listeners.keys().forEach((key) => {
          if (key.indexOf(moduleOrId.toLowerCase()) === 0) {
            listeners.removeKey(key);
            unsubscribe(key);
          }
        });
      } else {
        const hasContext = Object.values(context).length > 0;
        const contextKey = Object.keys(context).sort().map((key2) => key2 + "=" + JSON.stringify(context[key2])).join("&");
        const key = moduleOrId + "." + event2 + (hasContext ? ".".concat(contextKey) : "");
        listeners.removeKey(key);
        unsubscribe(key, context);
      }
    }
  };
  var init2 = () => {
    if (!transportInitialized) {
      Transport.addEventEmitter(emit3);
      setMockListener(listen);
      transportInitialized = true;
    }
  };
  var Events_default = {
    listen,
    once,
    clear,
    broadcast(event2, value) {
      emit3(Object.entries(keys).find((_ref) => {
        let [k2, v2] = _ref;
        return v2 === "app." + event2;
      })[0], value);
    }
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Prop/index.mjs
  function prop(moduleName, key, params) {
    let callbackOrValue = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : void 0;
    let immutable = arguments.length > 4 ? arguments[4] : void 0;
    let readonly = arguments.length > 5 ? arguments[5] : void 0;
    let contextParameterCount = arguments.length > 6 ? arguments[6] : void 0;
    const numArgs = Object.values(params).length;
    const type2 = Router_default2(params, callbackOrValue, contextParameterCount);
    if (type2 === "getter") {
      return Transport.send(moduleName, key, params);
    } else if (type2 === "subscriber") {
      if (immutable) {
        throw new Error("Cannot subscribe to an immutable property");
      }
      return Events_default.listen(moduleName, key + "Changed", ...Object.values(params), callbackOrValue);
    } else if (type2 === "setter") {
      if (immutable) {
        throw new Error("Cannot set a value to an immutable property");
      }
      if (readonly) {
        throw new Error("Cannot set a value to a readonly property");
      }
      return Transport.send(moduleName, "set" + key[0].toUpperCase() + key.substring(1), Object.assign({
        value: callbackOrValue
      }, params));
    } else if (numArgs < contextParameterCount) {
      throw new Error("Cannot get a value without all required context parameters.");
    } else {
      throw new Error("Property accessed with unexpected number of parameters.");
    }
  }
  var Prop_default = {
    prop
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Accessibility/index.mjs
  registerEvents("Accessibility", ["audioDescriptionSettingsChanged", "closedCaptionsSettingsChanged", "voiceGuidanceSettingsChanged"]);
  Transport.registerDeprecatedMethod("Accessibility", "closedCaptions", "Use Accessibility.closedCaptionsSettings() instead.");
  Transport.registerDeprecatedMethod("Accessibility", "voiceGuidance", "Use Accessibility.voiceGuidanceSettings() instead.");

  // node_modules/@firebolt-js/sdk/dist/lib/Advertising/index.mjs
  registerEvents("Advertising", ["policyChanged"]);

  // node_modules/@firebolt-js/sdk/dist/lib/Authentication/index.mjs
  Transport.registerDeprecatedMethod("Authentication", "token", "Use Authentication module has individual methods for each token type. instead.");

  // node_modules/@firebolt-js/sdk/dist/lib/Capabilities/index.mjs
  registerEvents("Capabilities", ["available", "granted", "revoked", "unavailable"]);
  registerEventContext("Capabilities", "available", ["capability"]);
  registerEventContext("Capabilities", "granted", ["role", "capability"]);
  registerEventContext("Capabilities", "revoked", ["role", "capability"]);
  registerEventContext("Capabilities", "unavailable", ["capability"]);

  // node_modules/@firebolt-js/sdk/dist/lib/Device/index.mjs
  registerEvents("Device", ["audioChanged", "deviceNameChanged", "hdcpChanged", "hdrChanged", "nameChanged", "networkChanged", "screenResolutionChanged", "videoResolutionChanged"]);
  Transport.registerDeprecatedMethod("Device", "onDeviceNameChanged", "Use Device.name() instead.");
  function version() {
    return new Promise((resolve, reject) => {
      Transport.send("device", "version").then((v2) => {
        v2 = v2 || {};
        v2.sdk = v2.sdk || {};
        v2.sdk.major = parseInt("1");
        v2.sdk.minor = parseInt("0");
        v2.sdk.patch = parseInt("0");
        v2.sdk.readable = "Firebolt Core SDK 1.0.0";
        resolve(v2);
      }).catch((error) => {
        reject(error);
      });
    });
  }
  function audio() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "audio", {}, callbackOrValue, false, true, 0);
  }
  function clear2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return Events_default.clear("Device", ...args);
  }
  function distributor() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "distributor", {}, callbackOrValue, true, true, 0);
  }
  function hdcp() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "hdcp", {}, callbackOrValue, false, true, 0);
  }
  function hdr() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "hdr", {}, callbackOrValue, false, true, 0);
  }
  function id() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "id", {}, callbackOrValue, true, true, 0);
  }
  function listen2() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return Events_default.listen("Device", ...args);
  }
  function make() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "make", {}, callbackOrValue, true, true, 0);
  }
  function model() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "model", {}, callbackOrValue, true, true, 0);
  }
  function name() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "name", {}, callbackOrValue, false, true, 0);
  }
  function network() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "network", {}, callbackOrValue, false, true, 0);
  }
  function once2() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return Events_default.once("Device", ...args);
  }
  function platform() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "platform", {}, callbackOrValue, true, true, 0);
  }
  function screenResolution() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "screenResolution", {}, callbackOrValue, false, true, 0);
  }
  function sku() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "sku", {}, callbackOrValue, true, true, 0);
  }
  function type() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "type", {}, callbackOrValue, true, true, 0);
  }
  function uid() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "uid", {}, callbackOrValue, true, true, 0);
  }
  function videoResolution() {
    const callbackOrValue = arguments[0];
    return Prop_default.prop("Device", "videoResolution", {}, callbackOrValue, false, true, 0);
  }
  var Device_default = {
    events: {
      DEVICE_NAME_CHANGED: "deviceNameChanged",
      NAME_CHANGED: "nameChanged",
      HDCP_CHANGED: "hdcpChanged",
      HDR_CHANGED: "hdrChanged",
      AUDIO_CHANGED: "audioChanged",
      SCREEN_RESOLUTION_CHANGED: "screenResolutionChanged",
      VIDEO_RESOLUTION_CHANGED: "videoResolutionChanged",
      NETWORK_CHANGED: "networkChanged"
    },
    NetworkState: {
      CONNECTED: "connected",
      DISCONNECTED: "disconnected"
    },
    NetworkType: {
      WIFI: "wifi",
      ETHERNET: "ethernet",
      HYBRID: "hybrid"
    },
    AudioProfile: {
      STEREO: "stereo",
      DOLBY_DIGITAL_5_1: "dolbyDigital5.1",
      DOLBY_DIGITAL_7_1: "dolbyDigital7.1",
      DOLBY_DIGITAL_5_1_PLUS: "dolbyDigital5.1+",
      DOLBY_DIGITAL_7_1_PLUS: "dolbyDigital7.1+",
      DOLBY_ATMOS: "dolbyAtmos"
    },
    version,
    audio,
    clear: clear2,
    distributor,
    hdcp,
    hdr,
    id,
    listen: listen2,
    make,
    model,
    name,
    network,
    once: once2,
    platform,
    screenResolution,
    sku,
    type,
    uid,
    videoResolution
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Metrics/index.mjs
  function ready() {
    return Transport.send("metrics", "ready", {});
  }

  // node_modules/@firebolt-js/sdk/dist/lib/Discovery/index.mjs
  registerEvents("Discovery", ["navigateTo", "policyChanged"]);
  Transport.registerDeprecatedMethod("Discovery", "entitlements", "Use Discovery.contentAccess() instead.");

  // node_modules/@firebolt-js/sdk/dist/lib/Lifecycle/index.mjs
  registerEvents("Lifecycle", ["background", "foreground", "inactive", "suspended", "unloading"]);
  var store = {
    _current: "initializing",
    get current() {
      return this._current;
    }
  };
  async function ready2() {
    let readyRes;
    await prioritize("Lifecycle", (event2, value) => {
      store._current = event2;
    });
    readyRes = await Transport.send("lifecycle", "ready", {});
    setTimeout((_2) => {
      ready();
    });
    return readyRes;
  }
  function clear3() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return Events_default.clear("Lifecycle", ...args);
  }
  function close(reason) {
    const transforms = null;
    return Transport.send("Lifecycle", "close", {
      reason
    }, transforms);
  }
  function listen3() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return Events_default.listen("Lifecycle", ...args);
  }
  function once3() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return Events_default.once("Lifecycle", ...args);
  }
  function state3() {
    return store.current;
  }
  function finished() {
    if (store.current === "unloading") {
      return Transport.send("lifecycle", "finished");
    } else {
      throw "Cannot call finished() except when in the unloading transition";
    }
  }
  var Lifecycle_default = {
    events: {
      INACTIVE: "inactive",
      FOREGROUND: "foreground",
      BACKGROUND: "background",
      SUSPENDED: "suspended",
      UNLOADING: "unloading"
    },
    CloseReason: {
      REMOTE_BUTTON: "remoteButton",
      USER_EXIT: "userExit",
      DONE: "done",
      ERROR: "error"
    },
    LifecycleState: {
      INITIALIZING: "initializing",
      INACTIVE: "inactive",
      FOREGROUND: "foreground",
      BACKGROUND: "background",
      UNLOADING: "unloading",
      SUSPENDED: "suspended"
    },
    ready: ready2,
    state: state3,
    finished,
    clear: clear3,
    close,
    listen: listen3,
    once: once3
  };

  // node_modules/@firebolt-js/sdk/dist/lib/Localization/index.mjs
  registerEvents("Localization", ["countryCodeChanged", "languageChanged", "localeChanged", "localityChanged", "postalCodeChanged", "preferredAudioLanguagesChanged"]);
  Transport.registerDeprecatedMethod("Localization", "language", "Use Localization.locale instead.");
  Transport.registerDeprecatedMethod("Localization", "onLanguageChanged", "Use language instead.");

  // node_modules/@firebolt-js/sdk/dist/lib/SecondScreen/index.mjs
  registerEvents("SecondScreen", ["closeRequest", "friendlyNameChanged", "launchRequest"]);

  // node_modules/@firebolt-js/sdk/dist/lib/firebolt.mjs
  setMockResponses({
    Accessibility: defaults_default2,
    Account: defaults_default3,
    Advertising: defaults_default4,
    Authentication: defaults_default5,
    Capabilities: defaults_default6,
    Device: defaults_default7,
    Discovery: defaults_default8,
    Keyboard: defaults_default9,
    Lifecycle: defaults_default10,
    Localization: defaults_default11,
    Metrics: defaults_default12,
    Parameters: defaults_default13,
    Profile: defaults_default14,
    SecondScreen: defaults_default15,
    SecureStorage: defaults_default16,
    Platform: defaults_default17
  });

  // src/BackgroundComponent.js
  var BackgroundComponent = class extends Lightning_default.Component {
    static _template() {
      return {
        Background: {
          w: 1920,
          h: 1080,
          color: 68719476735,
          src: Utils_default.asset("images/kameWallpaper.jpg")
        }
      };
    }
    _init() {
    }
  };

  // src/PlayComponent.js
  var PlayComponent = class extends Lightning_default.Component {
    static _template() {
      return {
        MyButton: {
          type: Pt,
          w: 100,
          h: 50,
          backgroundColor: 4294967295,
          title: "Play",
          titleColor: 0
          // color: 0xfffffffff,
          // src: Utils.asset('images/kameWallpaper.jpg'),
        }
      };
    }
    _init() {
    }
    //... more code, methods, events... 
    // active, attach, detach etc........
  };

  // src/RowsComponents/SecondRow.js
  var SecondRow = class extends Lightning_default.Component {
    static _template() {
      return {
        FirstPoster: {
          type: de,
          x: 50,
          w: 220,
          h: 330,
          tile: {
            badge: {
              title: "4K"
            },
            label: {
              title: "EXAMPLE",
              style: {
                backgroundColor: 4282144697,
                textStyle: {
                  titleColor: 4282144697
                }
              }
            }
          },
          metadata: {
            title: "Trolls back again3",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            details: {}
          },
          src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
          // shouldCollapse: true,
          style: {
            // backgroundColor: 0x00000000,
            backgroundColor: 4282144697,
            expandedHeight: 450
          }
        },
        secondPoster: {
          type: de,
          x: 250,
          w: 220,
          h: 330,
          tile: {
            badge: {
              title: "4K"
            },
            label: {
              title: "EXAMPLE",
              style: {
                backgroundColor: 4282144697,
                textStyle: {
                  titleColor: 4282144697
                }
              }
            }
          },
          metadata: {
            title: "Trolls back again4!!!",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            details: {}
          },
          src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
          // shouldCollapse: true,
          style: {
            // backgroundColor: 0x00000000,
            backgroundColor: 4282144697,
            expandedHeight: 450
          }
        }
      };
    }
    _init() {
      this._setState("FirstPoster");
    }
    static _states() {
      return [class FirstPoster extends this {
        // _handleLeft() {
        // 	this.buttonIndex = 0
        // }
        // _handleRight() {
        // 	this.buttonIndex = 1
        // }
        _getFocused() {
          return this.tag("FirstPoster");
        }
        _handleRight() {
          this._setState("SecondPoster");
        }
      }, class SecondPoster extends this {
        _getFocused() {
          return this.tag("SecondPoster");
        }
        _handleLeft() {
          this._setState("FirstPoster");
        }
      }];
    }
    //... more code, methods, events... 
    // active, attach, detach etc........
  };

  // src/App.js
  var options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc"
    },
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA1ZjQxMjYwZDMwZmFiZjdkNGJiYWZmOGFkNGYzNCIsInN1YiI6IjY1MmFjYzdmMDI0ZWM4MDEwMTUxOTM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mTgkXohlcg20WY_sYV880dVkyVvC1RUp9mQ-TuWLgMQ"
    }
  };
  var posterArray = [];
  var newCreateItems = (type2, length, personalSize, width, height, pageToLook) => {
    options.params.page = pageToLook;
    axios_default.request(options).then(function(response) {
      for (let i2 = 0; i2 < response.data.results.length; i2++) {
        posterArray.push(response.data.results[i2]);
      }
    }).catch(function(error) {
      console.error(error);
    });
    var xAxis = 0;
    switch (type2) {
      case "Button":
        xAxis = 0;
        return Array.from({
          length
        }).map((_2, i2) => ({
          type: Pt,
          title: "Button ".concat(i2 + 1),
          fixed: personalSize,
          w: width,
          h: height,
          // src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
          x: xAxis += 250
        }));
      case "Img":
        return Array.from({
          length
        }).map((_2, i2) => ({
          x: xAxis += 250,
          type: PostersButton,
          title: "Trolls Back 1",
          // rect: true, w: 220, h: 360, Title: { text: { textAlign: "center", fontSize: 24, text: `Poster #${i + 1}`, } },
          w: width,
          h: height,
          src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg"
        }));
      case "Card":
        xAxis = 0;
        return Array.from({
          length
        }).map((_2, i2) => ({
          type: de,
          x: xAxis += 500,
          w: width,
          h: height,
          tile: {
            badge: {
              title: "4K"
            },
            label: {
              title: "NEW",
              style: {
                backgroundColor: 4293276235,
                textStyle: {
                  titleColor: 4282144697
                }
              }
            }
          },
          metadata: {
            title: "Trolls Band Together!",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            details: "Play now",
            titleTextStyle: {
              fontSize: 24
            },
            descriptionTextStyle: {
              fontSize: 12
            }
          },
          src: "https://www.themoviedb.org/t/p/w220_and_h330_face/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
          shouldCollapse: true,
          style: {
            backgroundColor: 4282144697,
            expandedHeight: 450,
            imageSize: {
              w: 10,
              h: 150
            }
          }
        }));
      default:
        break;
    }
  };
  var App = class extends Lightning_default.Component {
    static getFonts() {
      return [{
        family: "Regular",
        url: Utils_default.asset("fonts/Roboto-Regular.ttf")
      }];
    }
    static _template() {
      return {
        BackgroundInstance: {
          type: BackgroundComponent
        },
        Header: {
          rect: true,
          w: 1920,
          h: 100,
          color: 4284130729,
          Title: {
            x: 50,
            y: 50,
            mountY: 0.5,
            text: {
              text: "Lightning Demo App"
            }
          }
        },
        WelcomeText: {
          x: 50,
          y: 120,
          text: {
            fontSize: 24,
            text: "Welcome, user.",
            color: 16711680
          }
        },
        ResolutionText: {
          x: 250,
          y: 120,
          text: {
            fontSize: 24,
            text: "Your screen resolution is: ",
            color: 4282144697
          }
        },
        DevNameText: {
          x: 700,
          y: 120,
          text: {
            fontSize: 24,
            text: "Current device: ",
            color: 4282144697
          }
        },
        VersionsText: {
          x: 1050,
          y: 120,
          text: {
            fontSize: 24,
            text: "OS Version: ",
            color: 4282144697
          }
        },
        ConnectedText: {
          x: 50,
          y: 160,
          text: {
            fontSize: 24,
            text: "Network status: ",
            color: 4282144697
          }
        },
        ContainerInstance: {
          type: ft,
          h: 500,
          y: 250,
          x: 75,
          items: newCreateItems("Card", 20, true, 220, 330, 1),
          alwaysScroll: true,
          wrapSelected: true
        },
        SecondContainerInstance: {
          type: ft,
          h: 500,
          y: 750,
          x: 75,
          items: newCreateItems("Card", 20, true, 120, 230, 4),
          alwaysScroll: true,
          wrapSelected: true
        }
        // Row: {
        //   y: 200, x: 50,
        //   type: FocusManager,
        //   direction: "row",
        //   items: newCreateItems("Button", 3, true, 200, 50),
        // },
        // SecondRow: {
        //   y: 300, x: 50,
        //   type: FocusManager,
        //   direction: "row",
        //   items: newCreateItems("Button", 5, true, 200, 50),
        // },
        // ThirdRow: {
        //   y: 400, x: 50,
        //   type: FocusManager,
        //   direction: "row",
        //   wrapSelected: true,
        //   items: newCreateItems("Card", 3, true, 220, 330),
        // },
        // PlayComponentInstance: {
        //   type: PlayComponent
        // }
        // Poster1: {
        //   w: 500,
        //   h: 750,
        //   x: 960,
        //   y: 540,
        //   mountX: 0.5,
        //   mountY: 0.5,
        //   src: Utils.asset("images/img1.jpg")
        // },
      };
    }
    _init() {
      this._setState("ContainerInstance");
      Lifecycle_default.ready().then((result) => {
        console.log("App is ready to go");
        Device_default.network().then(async (networkInfo) => {
          if (networkInfo.state === "connected") {
            console.log("You are connected to internet!");
          } else {
            console.log("It seems you are not connected to internet.");
          }
          this.tag("ConnectedText").patch({
            text: "Network status: ".concat(networkInfo.state.toUpperCase())
          });
        });
        Device_default.screenResolution().then((screenRes) => {
          this.tag("ResolutionText").patch({
            text: "Your Screen Resolution is: ".concat(screenRes[0], "x").concat(screenRes[1])
          });
        });
        Device_default.version().then((versions) => {
          console.log(versions);
          this.tag("VersionsText").patch({
            text: "OS Version: ".concat(versions.os.readable)
          });
        });
        Device_default.name().then((value) => {
          console.log(value);
          this.tag("DevNameText").patch({
            text: "Current device: ".concat(value)
          });
        });
      });
    }
    static _states() {
      return [class ContainerInstance extends this {
        _getFocused() {
          return this.tag("ContainerInstance");
        }
        _handleDown() {
          this._setState("SecondContainerInstance");
        }
      }, class SecondContainerInstance extends this {
        _getFocused() {
          return this.tag("SecondContainerInstance");
        }
        _handleUp() {
          this._setState("ContainerInstance");
        }
      }];
    }
    // static _states() {
    //   return [
    //     class Row extends this {
    //       _getFocused() {
    //         return this.tag('Row')
    //       }
    //       _handleDown() {
    //         this._setState('SecondRow')
    //       }
    //     },
    //     class SecondRow extends this {
    //       _getFocused() {
    //         return this.tag('SecondRow')
    //       }
    //       _handleUp() {
    //         this._setState('Row')
    //       }
    //       _handleDown() {
    //         this._setState('ThirdRow')
    //       }
    //     },
    //     class ThirdRow extends this {
    //       _getFocused() {
    //         return this.tag('ThirdRow')
    //       }
    //       _handleUp() {
    //         this._setState('SecondRow')
    //       }
    //       _handleEnter() {
    //         this.tag("ThirdRow.items").src(Utils.asset("images/img1.jpg"))
    //       }
    //       // _focus() {
    //       //   this.patch({ w: 260, h: 370, smooth: { alpha: 1, scale: 1.2 } })
    //       // }
    //       // _unfocus() {
    //       //   this.patch({ w: 260, h: 370, smooth: { alpha: 0.8, scale: 1 } })
    //       // }
    //     }
    //   ]
    // }
    // _getFocused() {
    //   return this.tag("ContainerInstance")
    // }
  };
  var PostersButton = class extends Wt {
    _focus() {
      super._focus();
      this.patch({
        h: 360,
        w: 240,
        rect: true,
        w: 220,
        h: 400,
        Title: {
          text: {
            textAlign: "center",
            fontSize: 24,
            text: "Poster #".concat(1)
          },
          backgroundColor: 16777215
        }
      });
      this.fireAncestors("$itemChanged");
    }
    _unfocus() {
      super._unfocus();
      this.patch({
        h: 40
      });
    }
  };

  // src/index.js
  function src_default() {
    return Launch_default(App, ...arguments);
  }
  return __toCommonJS(src_exports);
})();
/*! Bundled license information:

is-plain-object/dist/is-plain-object.mjs:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

@lightningjs/ui-components/dist/lightning-ui-components.min.mjs:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/