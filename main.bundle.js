/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@webgpu/glslang/dist/web-devel-onefile/glslang.js":
/*!************************************************************************!*\
  !*** ./node_modules/@webgpu/glslang/dist/web-devel-onefile/glslang.js ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);

var Module = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Module) {
  Module = Module || {};

var d;d||(d=typeof Module !== 'undefined' ? Module : {});
d.compileGLSLZeroCopy=function(a,b,c,e){c=!!c;switch(b){case "vertex":var g=0;break;case "fragment":g=4;break;case "compute":g=5;break;default:throw Error("shader_stage must be 'vertex', 'fragment', or 'compute'.");}switch(e||"1.0"){case "1.0":var f=65536;break;case "1.1":f=65792;break;case "1.2":f=66048;break;case "1.3":f=66304;break;case "1.4":f=66560;break;case "1.5":f=66816;break;default:throw Error("spirv_version must be '1.0' ~ '1.5'.");}e=d._malloc(4);b=d._malloc(4);var h=aa([a,g,c,f,e,b]);
c=k(e);a=k(b);d._free(e);d._free(b);if(0===h)throw Error("GLSL compilation failed");e={};c/=4;e.data=d.HEAPU32.subarray(c,c+a);e.free=function(){d._destroy_output_buffer(h)};return e};d.compileGLSL=function(a,b,c,e){a=d.compileGLSLZeroCopy(a,b,c,e);b=a.data.slice();a.free();return b};var p={},q;for(q in d)d.hasOwnProperty(q)&&(p[q]=d[q]);var ba="./this.program",r=!1,t=!1;r="object"===typeof window;t="function"===typeof importScripts;var u="",v;
if(r||t)t?u=self.location.href:document.currentScript&&(u=document.currentScript.src),_scriptDir&&(u=_scriptDir),0!==u.indexOf("blob:")?u=u.substr(0,u.lastIndexOf("/")+1):u="",t&&(v=function(a){try{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}catch(c){if(a=ca(a))return a;throw c;}});var da=d.print||console.log.bind(console),w=d.printErr||console.warn.bind(console);for(q in p)p.hasOwnProperty(q)&&(d[q]=p[q]);p=null;
d.thisProgram&&(ba=d.thisProgram);var x;d.wasmBinary&&(x=d.wasmBinary);"object"!==typeof WebAssembly&&w("no native wasm support detected");function k(a){var b="i32";"*"===b.charAt(b.length-1)&&(b="i32");switch(b){case "i1":return y[a>>0];case "i8":return y[a>>0];case "i16":return ea[a>>1];case "i32":return A[a>>2];case "i64":return A[a>>2];case "float":return fa[a>>2];case "double":return ha[a>>3];default:B("invalid type for getValue: "+b)}return null}
var C,ia=new WebAssembly.Table({initial:859,maximum:859,element:"anyfunc"}),ja=!1;function ka(){var a=d._convert_glsl_to_spirv;a||B("Assertion failed: Cannot call unknown function convert_glsl_to_spirv, make sure it is exported");return a}
function aa(a){var b="string number boolean number number number".split(" "),c={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=D(c);la(a,E,b,c)}return b},array:function(a){var b=D(a.length);y.set(a,b);return b}},e=ka(),g=[],f=0;if(a)for(var h=0;h<a.length;h++){var l=c[b[h]];l?(0===f&&(f=ma()),g[h]=l(a[h])):g[h]=a[h]}a=e.apply(null,g);0!==f&&na(f);return a}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b,c){var e=b+c;for(c=b;a[c]&&!(c>=e);)++c;if(16<c-b&&a.subarray&&oa)return oa.decode(a.subarray(b,c));for(e="";b<c;){var g=a[b++];if(g&128){var f=a[b++]&63;if(192==(g&224))e+=String.fromCharCode((g&31)<<6|f);else{var h=a[b++]&63;g=224==(g&240)?(g&15)<<12|f<<6|h:(g&7)<<18|f<<12|h<<6|a[b++]&63;65536>g?e+=String.fromCharCode(g):(g-=65536,e+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else e+=String.fromCharCode(g)}return e}
function la(a,b,c,e){if(0<e){e=c+e-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var h=a.charCodeAt(++g);f=65536+((f&1023)<<10)|h&1023}if(127>=f){if(c>=e)break;b[c++]=f}else{if(2047>=f){if(c+1>=e)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=e)break;b[c++]=224|f>>12}else{if(c+3>=e)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var H,y,E,ea,A,fa,ha;
function pa(a){H=a;d.HEAP8=y=new Int8Array(a);d.HEAP16=ea=new Int16Array(a);d.HEAP32=A=new Int32Array(a);d.HEAPU8=E=new Uint8Array(a);d.HEAPU16=new Uint16Array(a);d.HEAPU32=new Uint32Array(a);d.HEAPF32=fa=new Float32Array(a);d.HEAPF64=ha=new Float64Array(a)}var qa=d.TOTAL_MEMORY||16777216;d.wasmMemory?C=d.wasmMemory:C=new WebAssembly.Memory({initial:qa/65536});C&&(H=C.buffer);qa=H.byteLength;pa(H);A[84916]=5582704;
function I(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.J;"number"===typeof c?void 0===b.H?d.dynCall_v(c):d.dynCall_vi(c,b.H):c(void 0===b.H?null:b.H)}}}var ra=[],sa=[],ta=[],ua=[];function va(){var a=d.preRun.shift();ra.unshift(a)}var J=0,K=null,L=null;d.preloadedImages={};d.preloadedAudios={};function B(a){if(d.onAbort)d.onAbort(a);da(a);w(a);ja=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}var M="data:application/octet-stream;base64,";
function za(){return x||!r&&!t||"function"!==typeof fetch?new Promise(function(a){a(ya())}):fetch(O,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+O+"'";return a.arrayBuffer()}).catch(function(){return ya()})}sa.push({J:function(){Aa()}});var Ba=[null,[],[]],P=0;function Ca(){P+=4;return A[P-4>>2]}var Q={},Da={};
function Ea(){if(!R){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ba},b;for(b in Da)a[b]=Da[b];var c=[];for(b in a)c.push(b+"="+a[b]);R=c}return R}var R;function S(a){return 0===a%4&&(0!==a%100||0===a%400)}function T(a,b){for(var c=0,e=0;e<=b;c+=a[e++]);return c}var U=[31,29,31,30,31,30,31,31,30,31,30,31],V=[31,28,31,30,31,30,31,31,30,31,30,31];
function W(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),e=(S(a.getFullYear())?U:V)[c];if(b>e-a.getDate())b-=e-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Fa(a,b,c,e){function g(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function f(a,b){return g(a,b,"0")}function h(a,b){function X(a){return 0>a?-1:0<a?1:0}var c;0===(c=X(a.getFullYear()-b.getFullYear()))&&0===(c=X(a.getMonth()-b.getMonth()))&&(c=X(a.getDate()-b.getDate()));return c}function l(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function z(a){a=W(new Date(a.A+1900,0,1),a.G);var b=l(new Date(a.getFullYear()+1,0,4));return 0>=h(l(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var n=A[e+40>>2];e={N:A[e>>2],M:A[e+4>>2],D:A[e+8>>2],C:A[e+12>>2],B:A[e+16>>2],A:A[e+20>>2],F:A[e+24>>2],G:A[e+28>>2],X:A[e+32>>2],L:A[e+36>>2],O:n?n?G(E,n,void 0):
"":""};c=c?G(E,c,void 0):"";n={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var m in n)c=c.replace(new RegExp(m,"g"),n[m]);var F="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
xa="January February March April May June July August September October November December".split(" ");n={"%a":function(a){return F[a.F].substring(0,3)},"%A":function(a){return F[a.F]},"%b":function(a){return xa[a.B].substring(0,3)},"%B":function(a){return xa[a.B]},"%C":function(a){return f((a.A+1900)/100|0,2)},"%d":function(a){return f(a.C,2)},"%e":function(a){return g(a.C,2," ")},"%g":function(a){return z(a).toString().substring(2)},"%G":function(a){return z(a)},"%H":function(a){return f(a.D,2)},
"%I":function(a){a=a.D;0==a?a=12:12<a&&(a-=12);return f(a,2)},"%j":function(a){return f(a.C+T(S(a.A+1900)?U:V,a.B-1),3)},"%m":function(a){return f(a.B+1,2)},"%M":function(a){return f(a.M,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=a.D&&12>a.D?"AM":"PM"},"%S":function(a){return f(a.N,2)},"%t":function(){return"\t"},"%u":function(a){return a.F||7},"%U":function(a){var b=new Date(a.A+1900,0,1),c=0===b.getDay()?b:W(b,7-b.getDay());a=new Date(a.A+1900,a.B,a.C);return 0>h(c,a)?f(Math.ceil((31-
c.getDate()+(T(S(a.getFullYear())?U:V,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=l(new Date(a.A+1900,0,4)),c=l(new Date(a.A+1901,0,4)),e=W(new Date(a.A+1900,0,1),a.G);return 0>h(e,b)?"53":0>=h(c,e)?"01":f(Math.ceil((b.getFullYear()<a.A+1900?a.G+32-b.getDate():a.G+1-b.getDate())/7),2)},"%w":function(a){return a.F},"%W":function(a){var b=new Date(a.A,0,1),c=1===b.getDay()?b:W(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.A+1900,a.B,a.C);return 0>h(c,a)?f(Math.ceil((31-
c.getDate()+(T(S(a.getFullYear())?U:V,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%y":function(a){return(a.A+1900).toString().substring(2)},"%Y":function(a){return a.A+1900},"%z":function(a){a=a.L;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.O},"%%":function(){return"%"}};for(m in n)0<=c.indexOf(m)&&(c=c.replace(new RegExp(m,"g"),n[m](e)));m=Ga(c);if(m.length>b)return 0;y.set(m,a);return m.length-1}
function Ga(a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:b+4}b=Array(b+1);la(a,b,0,b.length);return b}
var Ha="function"===typeof atob?atob:function(a){var b="",c=0;a=a.replace(/[^A-Za-z0-9\+\/=]/g,"");do{var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c++));e=e<<2|g>>4;
g=(g&15)<<4|f>>2;var l=(f&3)<<6|h;b+=String.fromCharCode(e);64!==f&&(b+=String.fromCharCode(g));64!==h&&(b+=String.fromCharCode(l))}while(c<a.length);return b};function ca(a){if(N(a)){try{var b=Ha(a.slice(M.length)),c=new Uint8Array(b.length);for(a=0;a<b.length;++a)c[a]=b.charCodeAt(a)}catch(e){throw Error("Converting base64 string to bytes failed.");}return c}}
var Ja={f:function(){},c:function(){d.___errno_location&&(A[d.___errno_location()>>2]=63);return-1},n:function(a,b){P=b;try{var c=Ca();var e=Ca();if(-1===c||0===e)var g=-28;else{var f=Q.K[c];if(f&&e===f.U){var h=(void 0).T(f.S);Q.R(c,h,e,f.flags,f.offset);(void 0).W(h);Q.K[c]=null;f.P&&Ia(f.V)}g=0}return g}catch(l){return B(l),-l.I}},a:function(){},b:function(){B()},k:function(a,b,c){E.set(E.subarray(b,b+c),a)},l:function(a){var b=y.length;if(2147418112<a)return!1;for(var c=1;4>=c;c*=2){var e=b*(1+
.2/c);e=Math.min(e,a+100663296);e=Math.max(16777216,a,e);0<e%65536&&(e+=65536-e%65536);a:{try{C.grow(Math.min(2147418112,e)-H.byteLength+65535>>16);pa(C.buffer);var g=1;break a}catch(f){}g=void 0}if(g)return!0}return!1},d:function(a,b){var c=0;Ea().forEach(function(e,g){var f=b+c;g=A[a+4*g>>2]=f;for(f=0;f<e.length;++f)y[g++>>0]=e.charCodeAt(f);y[g>>0]=0;c+=e.length+1});return 0},e:function(a,b){var c=Ea();A[a>>2]=c.length;var e=0;c.forEach(function(a){e+=a.length+1});A[b>>2]=e;return 0},h:function(){return 0},
j:function(){return 0},g:function(a,b,c,e){try{for(var g=0,f=0;f<c;f++){for(var h=A[b+8*f>>2],l=A[b+(8*f+4)>>2],z=0;z<l;z++){var n=E[h+z],m=Ba[a];0===n||10===n?((1===a?da:w)(G(m,0)),m.length=0):m.push(n)}g+=l}A[e>>2]=g;return 0}catch(F){return B(F),F.I}},memory:C,o:function(){},i:function(){},m:function(a,b,c,e){return Fa(a,b,c,e)},table:ia},Ka=function(){function a(a){d.asm=a.exports;J--;d.monitorRunDependencies&&d.monitorRunDependencies(J);0==J&&(null!==K&&(clearInterval(K),K=null),L&&(a=L,L=null,
a()))}function b(b){a(b.instance)}function c(a){return za().then(function(a){return WebAssembly.instantiate(a,e)}).then(a,function(a){w("failed to asynchronously prepare wasm: "+a);B(a)})}var e={env:Ja,wasi_snapshot_preview1:Ja};J++;d.monitorRunDependencies&&d.monitorRunDependencies(J);if(d.instantiateWasm)try{return d.instantiateWasm(e,a)}catch(g){return w("Module.instantiateWasm callback failed with error: "+g),!1}(function(){if(x||"function"!==typeof WebAssembly.instantiateStreaming||N(O)||"function"!==
typeof fetch)return c(b);fetch(O,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(b,function(a){w("wasm streaming compile failed: "+a);w("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();d.asm=Ka;var Aa=d.___wasm_call_ctors=function(){return(Aa=d.___wasm_call_ctors=d.asm.p).apply(null,arguments)};d._convert_glsl_to_spirv=function(){return(d._convert_glsl_to_spirv=d.asm.q).apply(null,arguments)};
d._destroy_output_buffer=function(){return(d._destroy_output_buffer=d.asm.r).apply(null,arguments)};d._malloc=function(){return(d._malloc=d.asm.s).apply(null,arguments)};var Ia=d._free=function(){return(Ia=d._free=d.asm.t).apply(null,arguments)},ma=d.stackSave=function(){return(ma=d.stackSave=d.asm.u).apply(null,arguments)},D=d.stackAlloc=function(){return(D=d.stackAlloc=d.asm.v).apply(null,arguments)},na=d.stackRestore=function(){return(na=d.stackRestore=d.asm.w).apply(null,arguments)};
d.dynCall_vi=function(){return(d.dynCall_vi=d.asm.x).apply(null,arguments)};d.dynCall_v=function(){return(d.dynCall_v=d.asm.y).apply(null,arguments)};d.asm=Ka;var Y;d.then=function(a){if(Y)a(d);else{var b=d.onRuntimeInitialized;d.onRuntimeInitialized=function(){b&&b();a(d)}}return d};L=function La(){Y||Z();Y||(L=La)};
function Z(){function a(){if(!Y&&(Y=!0,!ja)){I(sa);I(ta);if(d.onRuntimeInitialized)d.onRuntimeInitialized();if(d.postRun)for("function"==typeof d.postRun&&(d.postRun=[d.postRun]);d.postRun.length;){var a=d.postRun.shift();ua.unshift(a)}I(ua)}}if(!(0<J)){if(d.preRun)for("function"==typeof d.preRun&&(d.preRun=[d.preRun]);d.preRun.length;)va();I(ra);0<J||(d.setStatus?(d.setStatus("Running..."),setTimeout(function(){setTimeout(function(){d.setStatus("")},1);a()},1)):a())}}d.run=Z;
if(d.preInit)for("function"==typeof d.preInit&&(d.preInit=[d.preInit]);0<d.preInit.length;)d.preInit.pop()();Z();


  return Module
}
);
})();
if (typeof exports === 'object' && "object" === 'object')
      module.exports = Module;
    else if (typeof define === 'function' && __webpack_require__.amdO)
      define([], function() { return Module; });
    else if (typeof exports === 'object')
      exports["Module"] = Module;
    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
    const initialize = () => {
        return new Promise(resolve => {
            Module({
                locateFile() {
                    const i = "file:///D:/youtube/webgpu/apps/gpu004-triangle-GLSL/node_modules/@webgpu/glslang/dist/web-devel-onefile/glslang.js".lastIndexOf('/')
                    return "file:///D:/youtube/webgpu/apps/gpu004-triangle-GLSL/node_modules/@webgpu/glslang/dist/web-devel-onefile/glslang.js".substring(0, i) + '/glslang.wasm';
                },
                onRuntimeInitialized() {
                    resolve({
                        compileGLSLZeroCopy: this.compileGLSLZeroCopy,
                        compileGLSL: this.compileGLSL,
                    });
                },
            });
        });
    };

    let instance;
    return () => {
        if (!instance) {
            instance = initialize();
        }
        return instance;
    };
})());


/***/ }),

/***/ "./src/helper.ts":
/*!***********************!*\
  !*** ./src/helper.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckWebGPU = void 0;
const CheckWebGPU = () => {
    let result = 'Great, your current browser supports WebGPU!';
    if (!navigator.gpu) {
        result = `Your current browser does not support WebGPU! Make sure you are on a system 
                     with WebGPU enabled. Currently, SPIR-WebGPU is only supported in  
                     <a href="https://www.google.com/chrome/canary/">Chrome canary</a>
                     with the flag "enable-unsafe-webgpu" enabled. See the 
                     <a href="https://github.com/gpuweb/gpuweb/wiki/Implementation-Status"> 
                     Implementation Status</a> page for more details.                   
                    `;
    }
    return result;
};
exports.CheckWebGPU = CheckWebGPU;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const glslang_1 = __importDefault(__webpack_require__(/*! @webgpu/glslang/dist/web-devel-onefile/glslang */ "./node_modules/@webgpu/glslang/dist/web-devel-onefile/glslang.js"));
const helper_1 = __webpack_require__(/*! ./helper */ "./src/helper.ts");
const shaders_1 = __webpack_require__(/*! ./shaders */ "./src/shaders.ts");
const CreateTriangle = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const checkgpu = helper_1.CheckWebGPU();
    if (checkgpu.includes('Your current browser does not support WebGPU!')) {
        console.log(checkgpu);
        throw ('Your current browser does not support WebGPU!');
    }
    const glslang = yield glslang_1.default();
    const canvas = document.getElementById('canvas-webgpu');
    const adapter = yield ((_a = navigator.gpu) === null || _a === void 0 ? void 0 : _a.requestAdapter());
    const device = yield (adapter === null || adapter === void 0 ? void 0 : adapter.requestDevice());
    const context = canvas.getContext('webgpu');
    const format = 'bgra8unorm';
    /*const swapChain = context.configureSwapChain({
        device: device,
        format: swapChainFormat,
    });*/
    context.configure({
        device: device,
        format: format,
    });
    const shader = shaders_1.GlslShaders();
    const pipeline = device.createRenderPipeline({
        layout: 'auto',
        vertex: {
            module: device.createShaderModule({
                code: glslang.compileGLSL(shader.vertex, 'vertex')
            }),
            entryPoint: "main"
        },
        fragment: {
            module: device.createShaderModule({
                code: glslang.compileGLSL(shader.fragment, 'fragment')
            }),
            entryPoint: "main",
            targets: [{
                    format: format
                }]
        },
        primitive: {
            topology: "triangle-list"
        }
    });
    const commandEncoder = device.createCommandEncoder();
    const textureView = context.getCurrentTexture().createView();
    const renderPass = commandEncoder.beginRenderPass({
        colorAttachments: [{
                view: textureView,
                clearValue: [0.5, 0.5, 0.8, 1],
                loadOp: 'clear',
                storeOp: 'store'
            }]
    });
    renderPass.setPipeline(pipeline);
    renderPass.draw(3, 1, 0, 0);
    renderPass.end();
    device.queue.submit([commandEncoder.finish()]);
});
CreateTriangle();


/***/ }),

/***/ "./src/shaders.ts":
/*!************************!*\
  !*** ./src/shaders.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Shaders = exports.GlslShaders = void 0;
const GlslShaders = () => {
    const vertex = `
        #version 450
        const vec2 pos[3] = vec2[3](
            vec2( 0.0f,  0.5f), 
            vec2(-0.5f, -0.5f), 
            vec2( 0.5f, -0.5f)
        );

        const vec3 color[3] = vec3[3](
            vec3(1.0f, 0.0f, 0.0f),
            vec3(0.0f, 1.0f, 0.0f),
            vec3(0.0f, 0.0f, 1.0f)
        );

        layout(location=0) out vec4 vColor;

        void main() {
            vColor = vec4(color[gl_VertexIndex], 1.0f);
            gl_Position = vec4(pos[gl_VertexIndex], 0.0, 1.0);
        }
    `;
    const fragment = `
        #version 450    
        layout(location=0) in vec4 vColor;
        layout(location=0) out vec4 fragColor;

        void main() {
            fragColor = vColor;
        }
    `;
    return { vertex, fragment };
};
exports.GlslShaders = GlslShaders;
const Shaders = () => {
    const vertex = `
        const pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
            vec2<f32>(0.0, 0.5),
            vec2<f32>(-0.5, -0.5),
            vec2<f32>(0.5, -0.5)
        );

        const color : array<vec3<f32>, 3> = array<vec3<f32>, 3>(
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 0.0, 1.0)
        );

        [[builtin(position)]] var<out> Position : vec4<f32>;
        [[builtin(vertex_idx)]] var<in> VertexIndex : i32;
        [[location(0)]] var<out> vColor : vec4<f32>;

        [[stage(vertex)]]
        fn main() -> void {
            Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
            vColor = vec4<f32>(color[VertexIndex], 1.0);
            return;
        }
    `;
    const fragment = `
        [[location(0)]] var<in> vColor : vec4<f32>;
        [[location(0)]] var<out> fragColor : vec4<f32>;

        [[stage(fragment)]]
        fn main() -> void {
            fragColor = vColor;
            return;
        }
    `;
    return { vertex, fragment };
};
exports.Shaders = Shaders;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map