---
id: error-boundary
title: AppErrorBoundary
sidebar_label: Error Boundary
---

# AppErrorBoundary

The `AppErrorBoundary` component provides graceful error handling for React Native applications.

## Usage

### Basic Usage
```tsx
import { AppErrorBoundary } from '@tcbs/react-native-mazic-ui';

<AppErrorBoundary>
  <YourApp/>
</AppErrorBoundary>
```

### Custom Fallback UI
```tsx
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
  <YourAppComponents />
</AppErrorBoundary>
```

## Features

- Catches render errors in child components
- Displays helpful fallback UIs for development and production
- Works with both custom and default fallbacks
- Logs error details to console for debugging