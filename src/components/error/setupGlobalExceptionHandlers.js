import { Alert, Platform } from 'react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from '@tcbs/react-native-exception-handler';

/**
 * JS Exception Handler
 * This is a LAST-RESORT handler
 */
const jsExceptionHandler = (error, isFatal) => {
  console.log('Global JS Exception:', error);

  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `${error?.name ? error.name + ': ' : ''}${error?.message || error?.toString?.() || 'Unknown error'}\n\n${error?.stack || ''}`,
      [{ text: 'OK' }],
    );
  }
};

/**
 * Native Exception Handler
 * UI via JS WILL NOT WORK here
 */
const nativeExceptionHandler = (exceptionString) => {
  console.log('Global Native Exception:', exceptionString);

  // Send logs to server / analytics if needed
};

export const setupGlobalExceptionHandlers = () => {
  setJSExceptionHandler(jsExceptionHandler, true);

  setNativeExceptionHandler(
    nativeExceptionHandler,
    true,  // forceAppQuit (Android)
    true   // executeDefaultHandler
  );
};
