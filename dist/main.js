/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("var button = document.getElementById(\"btn\");\nbutton.addEventListener(\"click\", function () {\n    var input = document.getElementById(\"input\");\n    var container = document.getElementById(\"result\");\n    renderTree(input.value, container);\n});\nfunction isBracesOrderCorrect(inputString) {\n    if (inputString[0] !== \"(\" || inputString[inputString.length - 1] !== \")\") {\n        return false;\n    }\n    var braces = [];\n    for (var i = 0; i < inputString.length; i++) {\n        if (inputString[i] === \"(\") {\n            braces.push(inputString[i]);\n            continue;\n        }\n        if (inputString[i] === \")\" && !braces.length) {\n            return false;\n        }\n        if (inputString[i] === \")\" && braces.length) {\n            braces.pop();\n        }\n    }\n    return braces.length ? false : true;\n}\nfunction buildTree(inputString) {\n    var _a;\n    var arr = inputString.split(\" \");\n    var nodesStack = [];\n    var topNodes = [];\n    for (var i = 0; i < arr.length; i++) {\n        var currentEl = arr[i];\n        var elText = arr[i].replace(/[$\\(\\)]/g, \"\");\n        if (elText.length <= 0) {\n            throw new Error(\"Wrong input\");\n        }\n        if (((_a = arr[i + 1]) === null || _a === void 0 ? void 0 : _a[0]) === \"(\") {\n            var target = nodesStack[nodesStack.length - 1];\n            var node = document.createElement(\"li\");\n            var listNode = document.createElement(\"ul\");\n            var textEl = document.createElement(\"span\");\n            textEl.innerText = elText;\n            node.appendChild(textEl);\n            node.appendChild(listNode);\n            target && target.appendChild(node);\n            if (!nodesStack.length)\n                topNodes.push(node);\n            nodesStack.push(listNode);\n        }\n        else {\n            var target = nodesStack[nodesStack.length - 1];\n            var node = document.createElement(\"li\");\n            var textEl = document.createElement(\"span\");\n            textEl.innerText = elText;\n            node.appendChild(textEl);\n            target ? target.appendChild(node) : topNodes.push(node);\n        }\n        var closingBracesCount = currentEl.length - currentEl.replaceAll(\")\", \"\").length;\n        for (var i_1 = 0; i_1 < closingBracesCount; i_1++) {\n            nodesStack.pop();\n        }\n    }\n    return topNodes.reduce(function (acc, el) {\n        acc.appendChild(el);\n        return acc;\n    }, document.createElement(\"ul\"));\n}\nfunction renderTree(inputString, targetNode) {\n    try {\n        if (isBracesOrderCorrect(inputString)) {\n            targetNode.innerHTML = \"\";\n            targetNode.appendChild(buildTree(inputString));\n            return;\n        }\n        throw new Error(\"Wrong input\");\n    }\n    catch (err) {\n        targetNode.innerHTML = \"\";\n        targetNode.innerHTML = \"<span>\".concat(err.message, \"</span>\");\n    }\n}\n\n\n//# sourceURL=webpack://tree/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;