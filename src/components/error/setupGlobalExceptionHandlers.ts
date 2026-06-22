import { Alert } from 'react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from '@tcbs/react-native-exception-handler';

type Exception = {
  name?: string;
  message?: string;
  stack?: string;
  toString?: () => string;
};

const jsExceptionHandler = (error: Exception, isFatal: boolean) => {
  console.log('Global JS Exception:', error);

  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `${error?.name ? `${error.name}: ` : ''}${error?.message || error?.toString?.() || 'Unknown error'}\n\n${error?.stack || ''}`,
      [{ text: 'OK' }],
    );
  }
};

const nativeExceptionHandler = (exceptionString: string) => {
  console.log('Global Native Exception:', exceptionString);
};

export const setupGlobalExceptionHandlers = () => {
  setJSExceptionHandler(jsExceptionHandler, true);

  setNativeExceptionHandler(
    nativeExceptionHandler,
    true,
    true,
  );
};
