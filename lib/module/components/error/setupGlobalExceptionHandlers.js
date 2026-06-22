import { Alert } from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler, } from '@tcbs/react-native-exception-handler';
const jsExceptionHandler = (error, isFatal) => {
    var _a;
    console.log('Global JS Exception:', error);
    if (isFatal) {
        Alert.alert('Unexpected error occurred', `${(error === null || error === void 0 ? void 0 : error.name) ? `${error.name}: ` : ''}${(error === null || error === void 0 ? void 0 : error.message) || ((_a = error === null || error === void 0 ? void 0 : error.toString) === null || _a === void 0 ? void 0 : _a.call(error)) || 'Unknown error'}\n\n${(error === null || error === void 0 ? void 0 : error.stack) || ''}`, [{ text: 'OK' }]);
    }
};
const nativeExceptionHandler = (exceptionString) => {
    console.log('Global Native Exception:', exceptionString);
};
export const setupGlobalExceptionHandlers = () => {
    setJSExceptionHandler(jsExceptionHandler, true);
    setNativeExceptionHandler(nativeExceptionHandler, true, true);
};
