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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UploadSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _upload_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload.css */ \"(app-pages-browser)/./src/app/components/upload/upload.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/viewer */ \"(app-pages-browser)/./src/app/components/ui/viewer.tsx\");\n/* harmony import */ var _ui_progres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/progres */ \"(app-pages-browser)/./src/app/components/ui/progres.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst BACKEND_URL = \"http://localhost:8000\";\nfunction UploadSection() {\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [objURL, setObjURL] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isProcessed, setIsProcessed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const debugURL = \"https://volumize-bucket.s3.amazonaws.com/userobj_2495554_1720093439.683805_tmp1ec1_z5e.obj\";\n    const onSubmit = async (event)=>{\n        event.preventDefault();\n        const debug = false;\n        if (debug) {\n            setObjURL(debugURL);\n            return;\n        }\n        if (!file) {\n            return;\n        }\n        try {\n            setLoading(true);\n            const data = new FormData();\n            data.set(\"image\", file);\n            const processRes = await fetch(\"\".concat(BACKEND_URL, \"/process\"), {\n                method: \"POST\",\n                body: data\n            });\n            if (!processRes.ok) {\n                throw new Error(await processRes.text());\n            }\n            const processResult = await processRes.json();\n            if (processRes.ok) {\n                console.log(\"File URL:\", processResult.image_url);\n                setIsProcessed(true);\n            } else {\n                console.error(\"Upload failed:\", processResult.error);\n            }\n            const modelData = {\n                image_url: processResult.image_url\n            };\n            const res = await fetch(\"\".concat(BACKEND_URL, \"/make_3d\"), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(modelData)\n            });\n            if (!res.ok) {\n                throw new Error(await res.text());\n            }\n            const modelResult = await res.json();\n            if (res.ok) {\n                console.log(\"Model URL:\", modelResult.model_url);\n                setObjURL(modelResult.model_url);\n                setLoading(false);\n            } else {\n                console.error(\"Upload failed:\", modelResult.error);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row items-center m-auto justify-center align-middle\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-1/3 p-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        className: \"flex flex-col m-auto \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center w-full m-15\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"dropzone-file\",\n                                    className: \"flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-col items-center justify-center pt-5 pb-6\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: \"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400\",\n                                                    \"aria-hidden\": \"true\",\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    fill: \"none\",\n                                                    viewBox: \"0 0 20 16\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        stroke: \"currentColor\",\n                                                        strokeLinecap: \"round\",\n                                                        strokeLinejoin: \"round\",\n                                                        strokeWidth: \"2\",\n                                                        d: \"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mb-2 text-sm text-gray-500 dark:text-gray-400\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"font-semibold\",\n                                                            children: \"Click to upload\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 19\n                                                        }, this),\n                                                        \" or drag and drop\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-xs text-gray-500 dark:text-gray-400\",\n                                                    children: \"SVG, PNG, JPG or GIF (MAX. 800x400px)\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"dropzone-file\",\n                                            type: \"file\",\n                                            name: \"image\",\n                                            multiple: true,\n                                            onChange: (e)=>{\n                                                var _e_target_files;\n                                                setFile((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]);\n                                            },\n                                            className: \"hidden\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 11\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-11\",\n                                children: \"Upload\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                                lineNumber: 131,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 5\n                }, this),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_progres__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            isProcessed: isProcessed\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Elapsed Time: \",\n                                seconds,\n                                \" seconds\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                            lineNumber: 146,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 7\n                }, this),\n                objURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-64 flex flex-col my-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_viewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            url: objURL,\n                            rotate: [\n                                0,\n                                0,\n                                0\n                            ]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                            lineNumber: 153,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            type: \"submit\",\n                            href: objURL,\n                            className: \"text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none hover:ring-blue-300 dark:hover:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 my-1\",\n                            children: \"Download\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                            lineNumber: 154,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n                    lineNumber: 152,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Zhkai\\\\Desktop\\\\Volumize\\\\front\\\\src\\\\app\\\\components\\\\upload\\\\index.tsx\",\n            lineNumber: 88,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_s(UploadSection, \"WkyWlyga5Cvi5Qs99vThwYm3OwQ=\");\n_c = UploadSection;\nvar _c;\n$RefreshReg$(_c, \"UploadSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy91cGxvYWQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVzQjtBQUM2QjtBQUVoQjtBQUVFO0FBR3JDLE1BQU1JLGNBQWM7QUFFTCxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQTtJQUNoQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUd2QyxNQUFNYSxXQUFXO0lBR2pCLE1BQU1DLFdBQVcsT0FBT0M7UUFDdEJBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTUMsUUFBUTtRQUNkLElBQUlBLE9BQU87WUFDVFQsVUFBVUs7WUFDVjtRQUNGO1FBQ0EsSUFBSSxDQUFDUixNQUFNO1lBQ1Q7UUFDRjtRQUVBLElBQUk7WUFDRk8sV0FBVztZQUNYLE1BQU1NLE9BQU8sSUFBSUM7WUFDakJELEtBQUtFLEdBQUcsQ0FBQyxTQUFTZjtZQUVsQixNQUFNZ0IsYUFBYSxNQUFNQyxNQUFNLEdBQWUsT0FBWm5CLGFBQVksYUFBVztnQkFDdkRvQixRQUFRO2dCQUNSQyxNQUFNTjtZQUNSO1lBRUEsSUFBSSxDQUFDRyxXQUFXSSxFQUFFLEVBQUU7Z0JBQ2xCLE1BQU0sSUFBSUMsTUFBTSxNQUFNTCxXQUFXTSxJQUFJO1lBQ3ZDO1lBRUEsTUFBTUMsZ0JBQWdCLE1BQU1QLFdBQVdRLElBQUk7WUFDM0MsSUFBSVIsV0FBV0ksRUFBRSxFQUFFO2dCQUNqQkssUUFBUUMsR0FBRyxDQUFDLGFBQWFILGNBQWNJLFNBQVM7Z0JBQ2hEdEIsZUFBZTtZQUNqQixPQUFPO2dCQUNMb0IsUUFBUUcsS0FBSyxDQUFDLGtCQUFrQkwsY0FBY0ssS0FBSztZQUNyRDtZQUVBLE1BQU1DLFlBQVk7Z0JBQ2hCRixXQUFXSixjQUFjSSxTQUFTO1lBQ3BDO1lBRUEsTUFBTUcsTUFBTSxNQUFNYixNQUFNLEdBQWUsT0FBWm5CLGFBQVksYUFBVztnQkFDaERvQixRQUFRO2dCQUNSYSxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FaLE1BQU1hLEtBQUtDLFNBQVMsQ0FBQ0o7WUFDdkI7WUFFQSxJQUFJLENBQUNDLElBQUlWLEVBQUUsRUFBRTtnQkFDWCxNQUFNLElBQUlDLE1BQU0sTUFBTVMsSUFBSVIsSUFBSTtZQUNoQztZQUVBLE1BQU1ZLGNBQWMsTUFBTUosSUFBSU4sSUFBSTtZQUNsQyxJQUFJTSxJQUFJVixFQUFFLEVBQUU7Z0JBQ1ZLLFFBQVFDLEdBQUcsQ0FBQyxjQUFjUSxZQUFZQyxTQUFTO2dCQUMvQ2hDLFVBQVUrQixZQUFZQyxTQUFTO2dCQUMvQjVCLFdBQVc7WUFDYixPQUFPO2dCQUNMa0IsUUFBUUcsS0FBSyxDQUFDLGtCQUFrQk0sWUFBWU4sS0FBSztZQUNuRDtRQUVGLEVBQUUsT0FBT0EsT0FBWTtZQUNuQkgsUUFBUUMsR0FBRyxDQUFDRTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDQSw0RUFBQ1E7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSzdCLFVBQVVBO3dCQUFVNEIsV0FBVTs7MENBRWxDLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0U7b0NBQ0NDLFNBQVE7b0NBQ1JILFdBQVU7O3NEQUVWLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ1gsOERBQUNJO29EQUNDSixXQUFVO29EQUNWSyxlQUFZO29EQUNaQyxPQUFNO29EQUNOQyxNQUFLO29EQUNMQyxTQUFROzhEQUVOLDRFQUFDQzt3REFDQ0MsUUFBTzt3REFDUEMsZUFBYzt3REFDZEMsZ0JBQWU7d0RBQ2ZDLGFBQVk7d0RBQ1pDLEdBQUU7Ozs7Ozs7Ozs7OzhEQUdSLDhEQUFDQztvREFBRWYsV0FBVTs7c0VBQ1gsOERBQUNnQjs0REFBS2hCLFdBQVU7c0VBQWdCOzs7Ozs7d0RBQXNCOzs7Ozs7OzhEQUN4RCw4REFBQ2U7b0RBQUVmLFdBQVU7OERBQTJDOzs7Ozs7Ozs7Ozs7c0RBSTVELDhEQUFDaUI7NENBQ0NDLElBQUc7NENBQ0hDLE1BQUs7NENBQ0xDLE1BQUs7NENBQ0xDLFFBQVE7NENBQ1JDLFVBQVUsQ0FBQ0M7b0RBQWVBO2dEQUFSM0QsU0FBUTJELGtCQUFBQSxFQUFFQyxNQUFNLENBQUNDLEtBQUssY0FBZEYsc0NBQUFBLGVBQWdCLENBQUMsRUFBRTs0Q0FBQzs0Q0FDOUN2QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNaEIsOERBQUMwQjtnQ0FDQ1AsTUFBSztnQ0FDTG5CLFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVNIL0IseUJBQ0EsOERBQUM4Qjs7c0NBQ0MsOERBQUN2QyxtREFBUUE7NEJBQUNPLGFBQWFBOzs7Ozs7c0NBQ3ZCLDhEQUFDZ0Q7O2dDQUFFO2dDQUFlWTtnQ0FBUTs7Ozs7Ozs7Ozs7OztnQkFLNUI5RCx3QkFDQSw4REFBQ2tDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ3pDLGtEQUFNQTs0QkFBQ3FFLEtBQUsvRDs0QkFBUWdFLFFBQVE7Z0NBQUM7Z0NBQUc7Z0NBQUc7NkJBQUU7Ozs7OztzQ0FDdEMsOERBQUNDOzRCQUNDWCxNQUFLOzRCQUNMWSxNQUFNbEU7NEJBQ05tQyxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU1Q7R0ExSndCdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3VwbG9hZC9pbmRleC50c3g/ODk4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICcuL3VwbG9hZC5jc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRERTTG9hZGVyIH0gZnJvbSBcInRocmVlLXN0ZGxpYlwiO1xyXG5pbXBvcnQgVmlld2VyICBmcm9tICcuLi91aS92aWV3ZXInO1xyXG5pbXBvcnQgeyBpcyB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlci9kaXN0L2RlY2xhcmF0aW9ucy9zcmMvY29yZS91dGlscyc7XHJcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuLi91aS9wcm9ncmVzJztcclxuXHJcblxyXG5jb25zdCBCQUNLRU5EX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkU2VjdGlvbigpIHtcclxuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlPigpO1xyXG4gIGNvbnN0IFtvYmpVUkwsIHNldE9ialVSTF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzUHJvY2Vzc2VkLCBzZXRJc1Byb2Nlc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBcclxuICBjb25zdCBkZWJ1Z1VSTCA9IFwiaHR0cHM6Ly92b2x1bWl6ZS1idWNrZXQuczMuYW1hem9uYXdzLmNvbS91c2Vyb2JqXzI0OTU1NTRfMTcyMDA5MzQzOS42ODM4MDVfdG1wMWVjMV96NWUub2JqXCI7XHJcbiAgXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRlYnVnID0gZmFsc2U7XHJcbiAgICBpZiAoZGVidWcpIHtcclxuICAgICAgc2V0T2JqVVJMKGRlYnVnVVJMKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmaWxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIGRhdGEuc2V0KCdpbWFnZScsIGZpbGUpO1xyXG5cclxuICAgICAgY29uc3QgcHJvY2Vzc1JlcyA9IGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9wcm9jZXNzYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IGRhdGFcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmICghcHJvY2Vzc1Jlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihhd2FpdCBwcm9jZXNzUmVzLnRleHQoKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHByb2Nlc3NSZXN1bHQgPSBhd2FpdCBwcm9jZXNzUmVzLmpzb24oKTtcclxuICAgICAgaWYgKHByb2Nlc3NSZXMub2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmlsZSBVUkw6JywgcHJvY2Vzc1Jlc3VsdC5pbWFnZV91cmwpO1xyXG4gICAgICAgIHNldElzUHJvY2Vzc2VkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBmYWlsZWQ6JywgcHJvY2Vzc1Jlc3VsdC5lcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1vZGVsRGF0YSA9IHtcclxuICAgICAgICBpbWFnZV91cmw6IHByb2Nlc3NSZXN1bHQuaW1hZ2VfdXJsXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vbWFrZV8zZGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtb2RlbERhdGEpXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYXdhaXQgcmVzLnRleHQoKSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IG1vZGVsUmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNb2RlbCBVUkw6JywgbW9kZWxSZXN1bHQubW9kZWxfdXJsKTtcclxuICAgICAgICBzZXRPYmpVUkwobW9kZWxSZXN1bHQubW9kZWxfdXJsKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGxvYWQgZmFpbGVkOicsIG1vZGVsUmVzdWx0LmVycm9yKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbS1hdXRvIGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSc+IFxyXG4gICAgPGRpdiBjbGFzc05hbWU9JyB3LTEvMyBwLTUnID5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbS1hdXRvICc+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbS0xNVwiPlxyXG4gICAgICAgICAgPGxhYmVsIFxyXG4gICAgICAgICAgICBodG1sRm9yPVwiZHJvcHpvbmUtZmlsZVwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC02NCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgYm9yZGVyLWRhc2hlZCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmhvdmVyOmJvcmRlci1ncmF5LTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNjAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwdC01IHBiLTZcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOCBoLTggbWItNCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiIFxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIiBcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxyXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiIFxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDE2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBcclxuICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTMgMTNoM2EzIDMgMCAwIDAgMC02aC0uMDI1QTUuNTYgNS41NiAwIDAgMCAxNiA2LjUgNS41IDUuNSAwIDAgMCA1LjIwNyA1LjAyMUM1LjEzNyA1LjAxNyA1LjA3MSA1IDUgNWE0IDQgMCAwIDAgMCA4aDIuMTY3TTEwIDE1VjZtMCAwTDggOG0yLTIgMiAyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yIHRleHQtc20gdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkNsaWNrIHRvIHVwbG9hZDwvc3Bhbj4gb3IgZHJhZyBhbmQgZHJvcDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgICAgU1ZHLCBQTkcsIEpQRyBvciBHSUYgKE1BWC4gODAweDQwMHB4KVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIGlkPVwiZHJvcHpvbmUtZmlsZVwiIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgXHJcbiAgICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldEZpbGUoZS50YXJnZXQuZmlsZXM/LlswXSl9fSBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIiBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+IFxyXG5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcHVycGxlLTYwMCB0by1ibHVlLTUwMCBob3ZlcjpiZy1ncmFkaWVudC10by1ibCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOnJpbmctYmx1ZS0zMDAgZGFyazpob3ZlcjpyaW5nLWJsdWUtODAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBtZS0yIG1iLTIgbXktMTFcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFVwbG9hZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICB7XHJcbiAgICAgIGxvYWRpbmcgJiYgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFByb2dyZXNzIGlzUHJvY2Vzc2VkPXtpc1Byb2Nlc3NlZH0gLz5cclxuICAgICAgICA8cD5FbGFwc2VkIFRpbWU6IHtzZWNvbmRzfSBzZWNvbmRzPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICB7XHJcbiAgICAgIG9ialVSTCAmJlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naC02NCBmbGV4IGZsZXgtY29sIG15LWF1dG8nID4gXHJcbiAgICAgICAgPFZpZXdlciB1cmw9e29ialVSTH0gcm90YXRlPXtbMCwgMCwgMF19PjwvVmlld2VyPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGhyZWY9e29ialVSTH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1wdXJwbGUtNjAwIHRvLWJsdWUtNTAwIGhvdmVyOmJnLWdyYWRpZW50LXRvLWJsIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6cmluZy1ibHVlLTMwMCBkYXJrOmhvdmVyOnJpbmctYmx1ZS04MDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1lLTIgbWItMiBteS0xXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBEb3dubG9hZFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgfVxyXG5cclxuICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVmlld2VyIiwiUHJvZ3Jlc3MiLCJCQUNLRU5EX1VSTCIsIlVwbG9hZFNlY3Rpb24iLCJmaWxlIiwic2V0RmlsZSIsIm9ialVSTCIsInNldE9ialVSTCIsImlzUHJvY2Vzc2VkIiwic2V0SXNQcm9jZXNzZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRlYnVnVVJMIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGVidWciLCJkYXRhIiwiRm9ybURhdGEiLCJzZXQiLCJwcm9jZXNzUmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJFcnJvciIsInRleHQiLCJwcm9jZXNzUmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZV91cmwiLCJlcnJvciIsIm1vZGVsRGF0YSIsInJlcyIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kZWxSZXN1bHQiLCJtb2RlbF91cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZSIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsInAiLCJzcGFuIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJuYW1lIiwibXVsdGlwbGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImJ1dHRvbiIsInNlY29uZHMiLCJ1cmwiLCJyb3RhdGUiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/upload/index.tsx\n"));

/***/ })

});