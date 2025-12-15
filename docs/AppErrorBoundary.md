# Chapter: Handling Errors Gracefully in React Native with AppErrorBoundary

## Introduction

In any robust React Native application, handling unexpected errors is crucial for delivering a smooth user experience. React provides a built-in mechanism called "Error Boundaries" to catch errors in the component tree and display fallback UIs instead of crashing the whole app. In this chapter, you'll learn how to use the `AppErrorBoundary` component to manage errors gracefully in your React Native projects.

---

## What is AppErrorBoundary?

`AppErrorBoundary` is a custom React component that acts as an error boundary for your React Native app. It catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of the component tree that crashed.

### Key Features
- **Catches render errors** in child components
- **Displays a fallback UI** (customizable)
- **Works in both development and production**
- **Supports custom fallback via a prop**

---

## Why Use AppErrorBoundary?

Without an error boundary, a JavaScript error in a part of your UI will unmount the entire component tree below it, often resulting in a blank screen. With `AppErrorBoundary`, you can:
- Prevent the whole app from crashing due to a single component error
- Show user-friendly error messages
- Log errors for debugging and analytics
- Provide a better developer and user experience

---

## How to Use AppErrorBoundary

### 1. Basic Usage
Wrap your application's root or any subtree with `AppErrorBoundary`:

```jsx
import { AppErrorBoundary } from './src/components/error/AppErrorBoundary';

export default function App() {
  return (
    <AppErrorBoundary>
      <MainAppComponents />
    </AppErrorBoundary>
  );
}
```


### 2. Custom Fallback UI (DEV & PROD)
You can provide custom fallback UIs for development and production modes using the `fallbackDev` and `fallbackProd` props. Each can be a React element or a function that receives an object with `{ error, errorInfo, reset }`:

```jsx
<AppErrorBoundary
  fallbackDev={({ error, errorInfo, reset }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DEV: Oops! Something went wrong.</Text>
      <Text>{error?.message}</Text>
      <Text onPress={reset} style={{ color: 'blue', marginTop: 16 }}>Try Again</Text>
    </View>
  )}
  fallbackProd={({ error, errorInfo, reset }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PROD: Something went wrong. Please try again later.</Text>
      <Text onPress={reset} style={{ color: 'blue', marginTop: 16 }}>Try Again</Text>
    </View>
  )}
>
  <YourAppComponents />
</AppErrorBoundary>
```

You can also pass a React element directly:

```jsx
<AppErrorBoundary
  fallbackDev={<Text>DEV: Something went wrong.</Text>}
  fallbackProd={<Text>PROD: Something went wrong.</Text>}
>
  <YourAppComponents />
</AppErrorBoundary>
```


### 3. Default Fallback UI
If you do not provide a `fallbackDev` or `fallbackProd` prop, `AppErrorBoundary` will display a helpful default error screen in development and a simple message in production.

---

## How It Works
- **Catches errors** in rendering, lifecycle methods, and constructors of child components
- **Updates its state** to indicate an error has occurred
- **Renders the fallback UI** instead of the crashed subtree
- **Logs error details** to the console for debugging

---

## Best Practices
- Place `AppErrorBoundary` high in your component tree (e.g., around your navigation or main app component)
- Use custom fallback UIs for a branded error experience
- Log errors to an external service for production monitoring

---

## Example: Wrapping a Screen
```jsx
<AppErrorBoundary>
  <ProfileScreen />
</AppErrorBoundary>
```


## Example: With Custom Fallbacks for DEV and PROD
```jsx
<AppErrorBoundary
  fallbackDev={({ error, reset }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DEV: Something went wrong.</Text>
      <Text>{error?.message}</Text>
      <Text onPress={reset} style={{ color: 'blue', marginTop: 16 }}>Try Again</Text>
    </View>
  )}
  fallbackProd={<Text>PROD: Something went wrong. Please try again later.</Text>}
>
  <SettingsScreen />
</AppErrorBoundary>
```

---

## Conclusion

Using `AppErrorBoundary` in your React Native app ensures that unexpected errors do not ruin the user experience. By catching and handling errors gracefully, you can provide helpful feedback to users and maintain a stable application.

---

For more advanced error handling, consider integrating global exception handlers and logging services as shown in the rest of this library.
