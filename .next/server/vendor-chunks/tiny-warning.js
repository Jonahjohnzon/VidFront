"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tiny-warning";
exports.ids = ["vendor-chunks/tiny-warning"];
exports.modules = {

/***/ "(ssr)/./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar isProduction = \"development\" === \"production\";\nfunction warning(condition, message) {\n    if (!isProduction) {\n        if (condition) {\n            return;\n        }\n        var text = \"Warning: \" + message;\n        if (typeof console !== \"undefined\") {\n            console.warn(text);\n        }\n        try {\n            throw Error(text);\n        } catch (x) {}\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsZUFBZUMsa0JBQXlCO0FBQzVDLFNBQVNDLFFBQVFDLFNBQVMsRUFBRUMsT0FBTztJQUNqQyxJQUFJLENBQUNKLGNBQWM7UUFDakIsSUFBSUcsV0FBVztZQUNiO1FBQ0Y7UUFFQSxJQUFJRSxPQUFPLGNBQWNEO1FBRXpCLElBQUksT0FBT0UsWUFBWSxhQUFhO1lBQ2xDQSxRQUFRQyxJQUFJLENBQUNGO1FBQ2Y7UUFFQSxJQUFJO1lBQ0YsTUFBTUcsTUFBTUg7UUFDZCxFQUFFLE9BQU9JLEdBQUcsQ0FBQztJQUNmO0FBQ0Y7QUFFQSxpRUFBZVAsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZG5haWphLy4vbm9kZV9tb2R1bGVzL3Rpbnktd2FybmluZy9kaXN0L3Rpbnktd2FybmluZy5lc20uanM/NGU0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbmZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghaXNQcm9kdWN0aW9uKSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0ZXh0ID0gXCJXYXJuaW5nOiBcIiArIG1lc3NhZ2U7XG5cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4odGV4dCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRocm93IEVycm9yKHRleHQpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2FybmluZztcbiJdLCJuYW1lcyI6WyJpc1Byb2R1Y3Rpb24iLCJwcm9jZXNzIiwid2FybmluZyIsImNvbmRpdGlvbiIsIm1lc3NhZ2UiLCJ0ZXh0IiwiY29uc29sZSIsIndhcm4iLCJFcnJvciIsIngiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tiny-warning/dist/tiny-warning.esm.js\n");

/***/ })

};
;