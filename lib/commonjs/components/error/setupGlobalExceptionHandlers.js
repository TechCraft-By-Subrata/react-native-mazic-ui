"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupGlobalExceptionHandlers = void 0;
const react_native_1 = require("react-native");
const react_native_exception_handler_1 = require("@tcbs/react-native-exception-handler");
const jsExceptionHandler = (error, isFatal) => {
    var _a;
    console.log('Global JS Exception:', error);
    if (isFatal) {
        react_native_1.Alert.alert('Unexpected error occurred', `${(error === null || error === void 0 ? void 0 : error.name) ? `${error.name}: ` : ''}${(error === null || error === void 0 ? void 0 : error.message) || ((_a = error === null || error === void 0 ? void 0 : error.toString) === null || _a === void 0 ? void 0 : _a.call(error)) || 'Unknown error'}\n\n${(error === null || error === void 0 ? void 0 : error.stack) || ''}`, [{ text: 'OK' }]);
    }
};
const nativeExceptionHandler = (exceptionString) => {
    console.log('Global Native Exception:', exceptionString);
};
const setupGlobalExceptionHandlers = () => {
    (0, react_native_exception_handler_1.setJSExceptionHandler)(jsExceptionHandler, true);
    (0, react_native_exception_handler_1.setNativeExceptionHandler)(nativeExceptionHandler, true, true);
};
exports.setupGlobalExceptionHandlers = setupGlobalExceptionHandlers;
