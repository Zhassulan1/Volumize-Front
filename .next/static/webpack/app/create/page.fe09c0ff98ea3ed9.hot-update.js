"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create/page",{

/***/ "(app-pages-browser)/./src/app/components/upload/index.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/upload/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _upload_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.css */ \"(app-pages-browser)/./src/app/components/upload/upload.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/viewer */ \"(app-pages-browser)/./src/app/components/ui/viewer.tsx\");\n/* harmony import */ var _ui_progres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/progres */ \"(app-pages-browser)/./src/app/components/ui/progres.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BACKEND_URL = \"http://localhost:8000\";\nfunction UploadSection() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [objURL, setObjURL] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isProcessed, setIsProcessed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const debugURL = \"https://volumize-bucket.s3.amazonaws.com/userobj_2495554_1720093439.683805_tmp1ec1_z5e.obj\";\n    const onSubmit = async (event)=>{\n        _s1();\n        event.preventDefault();\n        const debug = false;\n        if (debug) {\n            setObjURL(debugURL);\n            return;\n        }\n        if (!file) {\n            return;\n        }\n        try {\n            setLoading(true);\n            const data = new FormData();\n            data.set(\"image\", file);\n            const processRes = await fetch(\"\".concat(BACKEND_URL, \"/process\"), {\n                method: \"POST\",\n                body: data\n            });\n            if (!processRes.ok) {\n                throw new Error(await processRes.text());\n            }\n            const processResult = await processRes.json();\n            if (processRes.ok) {\n                console.log(\"File URL:\", processResult.image_url);\n                setIsProcessed(true);\n            } else {\n                console.error(\"Upload failed:\", processResult.error);\n            }\n            const modelData = {\n                image_url: processResult.image_url\n            };\n            const res = await fetch(\"\".concat(BACKEND_URL, \"/make_3d\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(modelData)\n            });\n            if (!res.ok) {\n                throw new Error(await res.text());\n            }\n            const modelResult = await res.json();\n            if (res.ok) {\n                console.log(\"Model URL:\", modelResult.model_url);\n                setObjURL(modelResult.model_url);\n                setLoading(false);\n            } else {\n                console.error(\"Upload failed:\", modelResult.error);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n            const interval = setInterval(()=>{\n                setSeconds((prevSeconds)=>prevSeconds + 1);\n            }, 1000);\n            return ()=>clearInterval(interval);\n        }, []);\n    };\n    _s1(onSubmit, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row items-center m-auto justify-center align-middle\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-1/3 p-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        className: \"flex flex-col m-auto \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center w-full m-15\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"dropzone-file\",\n                                    className: \"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-center justify-center pt-5 pb-6\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: \"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400\",\n                                                    \"aria-hidden\": \"true\",\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    fill: \"none\",\n                                                    viewBox: \"0 0 20 16\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        stroke: \"currentColor\",\n                                                        strokeLinecap: \"round\",\n                                                        strokeLinejoin: \"round\",\n                                                        strokeWidth: \"2\",\n                                                        d: \"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                        lineNumber: 115,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                    lineNumber: 108,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mb-2 text-sm text-gray-500 dark:text-gray-400\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"font-semibold\",\n                                                            children: \"Click to upload\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                            lineNumber: 124,\n                                                            columnNumber: 19\n                                                        }, this),\n                                                        \" or drag and drop\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                    lineNumber: 123,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xs text-gray-500 dark:text-gray-400\",\n                                                    children: \"SVG, PNG, JPG or GIF (MAX. 800x400px)\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"dropzone-file\",\n                                            type: \"file\",\n                                            name: \"image\",\n                                            multiple: true,\n                                            onChange: (e)=>{\n                                                var _e_target_files;\n                                                setFile((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);\n                                            },\n                                            className: \"hidden\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-11\",\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 5\n                }, this),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_progres__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            isProcessed: isProcessed\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                            lineNumber: 155,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Elapsed Time: \",\n                                seconds,\n                                \" seconds\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                            lineNumber: 156,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                    lineNumber: 154,\n                    columnNumber: 7\n                }, this),\n                objURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-64 flex flex-col my-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_viewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            url: objURL,\n                            rotate: [\n                                0,\n                                0,\n                                0\n                            ]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                            lineNumber: 163,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            type: \"submit\",\n                            href: objURL,\n                            className: \"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-1\",\n                            children: \"Download\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                            lineNumber: 164,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                    lineNumber: 162,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n            lineNumber: 98,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(UploadSection, \"W7hvguSl1w5VSestZOqWbNPgXw0=\");\n_c = UploadSection;\nvar _c;\n$RefreshReg$(_c, \"UploadSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVzQjtBQUM2QjtBQUVoQjtBQUVFO0FBR3JDLE1BQU1LLGNBQWM7QUFFTCxTQUFTQzs7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFTO0lBRy9DLE1BQU1lLFdBQVc7SUFHakIsTUFBTUMsV0FBVyxPQUFPQzs7UUFDdEJBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTUMsUUFBUTtRQUNkLElBQUlBLE9BQU87WUFDVFgsVUFBVU87WUFDVjtRQUNGO1FBQ0EsSUFBSSxDQUFDVixNQUFNO1lBQ1Q7UUFDRjtRQUVBLElBQUk7WUFDRk8sV0FBVztZQUNYLE1BQU1RLE9BQU8sSUFBSUM7WUFDakJELEtBQUtFLEdBQUcsQ0FBQyxTQUFTakI7WUFFbEIsTUFBTWtCLGFBQWEsTUFBTUMsTUFBTSxHQUFlLE9BQVpyQixhQUFZLGFBQVc7Z0JBQ3ZEc0IsUUFBUTtnQkFDUkMsTUFBTU47WUFDUjtZQUVBLElBQUksQ0FBQ0csV0FBV0ksRUFBRSxFQUFFO2dCQUNsQixNQUFNLElBQUlDLE1BQU0sTUFBTUwsV0FBV00sSUFBSTtZQUN2QztZQUVBLE1BQU1DLGdCQUFnQixNQUFNUCxXQUFXUSxJQUFJO1lBQzNDLElBQUlSLFdBQVdJLEVBQUUsRUFBRTtnQkFDakJLLFFBQVFDLEdBQUcsQ0FBQyxhQUFhSCxjQUFjSSxTQUFTO2dCQUNoRHhCLGVBQWU7WUFDakIsT0FBTztnQkFDTHNCLFFBQVFHLEtBQUssQ0FBQyxrQkFBa0JMLGNBQWNLLEtBQUs7WUFDckQ7WUFFQSxNQUFNQyxZQUFZO2dCQUNoQkYsV0FBV0osY0FBY0ksU0FBUztZQUNwQztZQUVBLE1BQU1HLE1BQU0sTUFBTWIsTUFBTSxHQUFlLE9BQVpyQixhQUFZLGFBQVc7Z0JBQ2hEc0IsUUFBUTtnQkFDUmEsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBWixNQUFNYSxLQUFLQyxTQUFTLENBQUNKO1lBQ3ZCO1lBRUEsSUFBSSxDQUFDQyxJQUFJVixFQUFFLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJQyxNQUFNLE1BQU1TLElBQUlSLElBQUk7WUFDaEM7WUFFQSxNQUFNWSxjQUFjLE1BQU1KLElBQUlOLElBQUk7WUFDbEMsSUFBSU0sSUFBSVYsRUFBRSxFQUFFO2dCQUNWSyxRQUFRQyxHQUFHLENBQUMsY0FBY1EsWUFBWUMsU0FBUztnQkFDL0NsQyxVQUFVaUMsWUFBWUMsU0FBUztnQkFDL0I5QixXQUFXO1lBQ2IsT0FBTztnQkFDTG9CLFFBQVFHLEtBQUssQ0FBQyxrQkFBa0JNLFlBQVlOLEtBQUs7WUFDbkQ7UUFFRixFQUFFLE9BQU9BLE9BQVk7WUFDbkJILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDZDtRQUVBcEMsZ0RBQVNBLENBQUM7WUFDUixNQUFNNEMsV0FBV0MsWUFBWTtnQkFDM0I5QixXQUFXK0IsQ0FBQUEsY0FBZUEsY0FBYztZQUMxQyxHQUFHO1lBRUgsT0FBTyxJQUFNQyxjQUFjSDtRQUM3QixHQUFHLEVBQUU7SUFFUDtRQXRFTTNCO0lBd0VOLHFCQUNFO2tCQUNBLDRFQUFDK0I7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBS2pDLFVBQVVBO3dCQUFVZ0MsV0FBVTs7MENBRWxDLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7b0NBQ0NDLFNBQVE7b0NBQ1JILFdBQVU7O3NEQUVWLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ1gsOERBQUNJO29EQUNDSixXQUFVO29EQUNWSyxlQUFZO29EQUNaQyxPQUFNO29EQUNOQyxNQUFLO29EQUNMQyxTQUFROzhEQUVOLDRFQUFDQzt3REFDQ0MsUUFBTzt3REFDUEMsZUFBYzt3REFDZEMsZ0JBQWU7d0RBQ2ZDLGFBQVk7d0RBQ1pDLEdBQUU7Ozs7Ozs7Ozs7OzhEQUdSLDhEQUFDQztvREFBRWYsV0FBVTs7c0VBQ1gsOERBQUNnQjs0REFBS2hCLFdBQVU7c0VBQWdCOzs7Ozs7d0RBQXNCOzs7Ozs7OzhEQUN4RCw4REFBQ2U7b0RBQUVmLFdBQVU7OERBQTJDOzs7Ozs7Ozs7Ozs7c0RBSTVELDhEQUFDaUI7NENBQ0NDLElBQUc7NENBQ0hDLE1BQUs7NENBQ0xDLE1BQUs7NENBQ0xDLFFBQVE7NENBQ1JDLFVBQVUsQ0FBQ0M7b0RBQWVBO2dEQUFSakUsU0FBUWlFLGtCQUFBQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssY0FBZEYsc0NBQUFBLGVBQWdCLENBQUMsRUFBRTs0Q0FBQzs0Q0FDOUN2QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNaEIsOERBQUMwQjtnQ0FDQ1AsTUFBSztnQ0FDTG5CLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVNIckMseUJBQ0EsOERBQUNvQzs7c0NBQ0MsOERBQUM3QyxtREFBUUE7NEJBQUNPLGFBQWFBOzs7Ozs7c0NBQ3ZCLDhEQUFDc0Q7O2dDQUFFO2dDQUFlbEQ7Z0NBQVE7Ozs7Ozs7Ozs7Ozs7Z0JBSzVCTix3QkFDQSw4REFBQ3dDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQy9DLGtEQUFNQTs0QkFBQzBFLEtBQUtwRTs0QkFBUXFFLFFBQVE7Z0NBQUM7Z0NBQUc7Z0NBQUc7NkJBQUU7Ozs7OztzQ0FDdEMsOERBQUNDOzRCQUNDVixNQUFLOzRCQUNMVyxNQUFNdkU7NEJBQ055QyxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU1Q7R0FwS3dCNUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3VwbG9hZC9pbmRleC50c3g/ODk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICcuL3VwbG9hZC5jc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRERTTG9hZGVyIH0gZnJvbSBcInRocmVlLXN0ZGxpYlwiO1xyXG5pbXBvcnQgVmlld2VyICBmcm9tICcuLi91aS92aWV3ZXInO1xyXG5pbXBvcnQgeyBpcyB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlci9kaXN0L2RlY2xhcmF0aW9ucy9zcmMvY29yZS91dGlscyc7XHJcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuLi91aS9wcm9ncmVzJztcclxuXHJcblxyXG5jb25zdCBCQUNLRU5EX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkU2VjdGlvbigpIHtcclxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlPigpO1xyXG4gIGNvbnN0IFtvYmpVUkwsIHNldE9ialVSTF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzUHJvY2Vzc2VkLCBzZXRJc1Byb2Nlc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG4gIFxyXG4gIGNvbnN0IGRlYnVnVVJMID0gXCJodHRwczovL3ZvbHVtaXplLWJ1Y2tldC5zMy5hbWF6b25hd3MuY29tL3VzZXJvYmpfMjQ5NTU1NF8xNzIwMDkzNDM5LjY4MzgwNV90bXAxZWMxX3o1ZS5vYmpcIjtcclxuICBcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGVidWcgPSBmYWxzZTtcclxuICAgIGlmIChkZWJ1Zykge1xyXG4gICAgICBzZXRPYmpVUkwoZGVidWdVUkwpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWZpbGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgZGF0YS5zZXQoJ2ltYWdlJywgZmlsZSk7XHJcblxyXG4gICAgICBjb25zdCBwcm9jZXNzUmVzID0gYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L3Byb2Nlc3NgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogZGF0YVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKCFwcm9jZXNzUmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGF3YWl0IHByb2Nlc3NSZXMudGV4dCgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcHJvY2Vzc1Jlc3VsdCA9IGF3YWl0IHByb2Nlc3NSZXMuanNvbigpO1xyXG4gICAgICBpZiAocHJvY2Vzc1Jlcy5vaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGaWxlIFVSTDonLCBwcm9jZXNzUmVzdWx0LmltYWdlX3VybCk7XHJcbiAgICAgICAgc2V0SXNQcm9jZXNzZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVXBsb2FkIGZhaWxlZDonLCBwcm9jZXNzUmVzdWx0LmVycm9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbW9kZWxEYXRhID0ge1xyXG4gICAgICAgIGltYWdlX3VybDogcHJvY2Vzc1Jlc3VsdC5pbWFnZV91cmxcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9tYWtlXzNkYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vZGVsRGF0YSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihhd2FpdCByZXMudGV4dCgpKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgbW9kZWxSZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vZGVsIFVSTDonLCBtb2RlbFJlc3VsdC5tb2RlbF91cmwpO1xyXG4gICAgICAgIHNldE9ialVSTChtb2RlbFJlc3VsdC5tb2RlbF91cmwpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBmYWlsZWQ6JywgbW9kZWxSZXN1bHQuZXJyb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2Vjb25kcyhwcmV2U2Vjb25kcyA9PiBwcmV2U2Vjb25kcyArIDEpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG0tYXV0byBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUnPiBcclxuICAgIDxkaXYgY2xhc3NOYW1lPScgdy0xLzMgcC01JyA+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG0tYXV0byAnPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG0tMTVcIj5cclxuICAgICAgICAgIDxsYWJlbCBcclxuICAgICAgICAgICAgaHRtbEZvcj1cImRyb3B6b25lLWZpbGVcIiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtNjQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIGJvcmRlci1kYXNoZWQgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpob3Zlcjpib3JkZXItZ3JheS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTYwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtNSBwYi02XCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTggaC04IG1iLTQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIiBcclxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCIgXHJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcclxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIiBcclxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAxNlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzIDEzaDNhMyAzIDAgMCAwIDAtNmgtLjAyNUE1LjU2IDUuNTYgMCAwIDAgMTYgNi41IDUuNSA1LjUgMCAwIDAgNS4yMDcgNS4wMjFDNS4xMzcgNS4wMTcgNS4wNzEgNSA1IDVhNCA0IDAgMCAwIDAgOGgyLjE2N00xMCAxNVY2bTAgMEw4IDhtMi0yIDIgMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXNtIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5DbGljayB0byB1cGxvYWQ8L3NwYW4+IG9yIGRyYWcgYW5kIGRyb3A8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNWRywgUE5HLCBKUEcgb3IgR0lGIChNQVguIDgwMHg0MDBweClcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICBpZD1cImRyb3B6b25lLWZpbGVcIiBcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRGaWxlKGUudGFyZ2V0LmZpbGVzPy5bMF0pfX0gXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCIgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PiBcclxuXHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1ncmFkaWVudC10by1iciBmcm9tLXB1cnBsZS02MDAgdG8tYmx1ZS01MDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYmwgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpyaW5nLWJsdWUtMzAwIGRhcms6aG92ZXI6cmluZy1ibHVlLTgwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbWUtMiBtYi0yIG15LTExXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBVcGxvYWRcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZm9ybT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAge1xyXG4gICAgICBsb2FkaW5nICYmIFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxQcm9ncmVzcyBpc1Byb2Nlc3NlZD17aXNQcm9jZXNzZWR9IC8+XHJcbiAgICAgICAgPHA+RWxhcHNlZCBUaW1lOiB7c2Vjb25kc30gc2Vjb25kczwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAge1xyXG4gICAgICBvYmpVUkwgJiZcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2gtNjQgZmxleCBmbGV4LWNvbCBteS1hdXRvJyA+IFxyXG4gICAgICAgIDxWaWV3ZXIgdXJsPXtvYmpVUkx9IHJvdGF0ZT17WzAsIDAsIDBdfT48L1ZpZXdlcj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBocmVmPXtvYmpVUkx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHVycGxlLTYwMCB0by1ibHVlLTUwMCBob3ZlcjpiZy1ncmFkaWVudC10by1ibCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOnJpbmctYmx1ZS0zMDAgZGFyazpob3ZlcjpyaW5nLWJsdWUtODAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBtZS0yIG1iLTIgbXktMVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRG93bmxvYWRcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgIH1cclxuXHJcbiAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZpZXdlciIsIlByb2dyZXNzIiwiQkFDS0VORF9VUkwiLCJVcGxvYWRTZWN0aW9uIiwiZmlsZSIsInNldEZpbGUiLCJvYmpVUkwiLCJzZXRPYmpVUkwiLCJpc1Byb2Nlc3NlZCIsInNldElzUHJvY2Vzc2VkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsImRlYnVnVVJMIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGVidWciLCJkYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJwcm9jZXNzUmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJFcnJvciIsInRleHQiLCJwcm9jZXNzUmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZV91cmwiLCJlcnJvciIsIm1vZGVsRGF0YSIsInJlcyIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kZWxSZXN1bHQiLCJtb2RlbF91cmwiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlNlY29uZHMiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsInN2ZyIsImFyaWEtaGlkZGVuIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJzdHJva2UiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJwIiwic3BhbiIsImlucHV0IiwiaWQiLCJ0eXBlIiwibmFtZSIsIm11bHRpcGxlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJidXR0b24iLCJ1cmwiLCJyb3RhdGUiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/upload/index.tsx\n"));

/***/ })

});