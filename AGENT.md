# AGENT.md

This file provides guidance to AI when working with code in this repository.

## Project Overview

This is a React Native UI component library called `@tcbs/react-native-mazic-ui` that provides customizable, themeable components for React Native applications. The library includes:

1. TcbsButton - A highly customizable button component with icon support
2. Theme management system using Zustand and MMKV for persistent theming
3. AppErrorBoundary - A React error boundary for handling application errors
4. Additional utility components like CustomCard and CustomText

## Key Features

- **Theme Support**: Comprehensive theme management with light/dark/system modes
- **Icon Integration**: Support for multiple icon libraries (AntDesign, Feather, FontAwesome, etc.)
- **Accessibility**: Built-in accessibility props support
- **Error Handling**: Robust error boundary with development and production fallbacks
- **Persistent Storage**: Theme settings stored using MMKV

## Architecture

The library follows a component-based architecture:

1. **Components** (`src/components/`):
   - `TcbsButton`: Main button component with extensive customization options
   - `AppErrorBoundary`: Error handling boundary component
   - `ThemeModal`: Modal for theme selection (not currently implemented in code but exported)
   - `CustomCard` and `CustomText`: Additional utility components

2. **Store** (`src/store/`):
   - `themeStore.ts`: Zustand-based store for managing theme state with persistence using MMKV

3. **Types** (`src/components/TcbsButton.types.ts`):
   - Comprehensive type definitions for all button props and theme configurations

## Development Commands

```bash
# Build the library
npm run build

# Lint the code
npm run lint

# Run tests
npm run test

# Install dependencies
npm install

# For development, you can also use:
yarn install
```

## Key Files and Their Purposes

1. **src/index.ts** - Main entry point that exports all components and utilities
2. **src/components/TcbsButton.tsx** - The main button component with icon support and theme integration
3. **src/store/themeStore.ts** - Theme management using Zustand with MMKV persistence
4. **src/components/error/AppErrorBoundary.tsx** - Error boundary component for handling React errors

## Usage Patterns

### Button Component
```tsx
import { TcbsButton } from '@tcbs/react-native-mazic-ui';

<TcbsButton
  title="Submit"
  onPress={() => console.log('Pressed')}
  size="large"
  variant="primary"
  iconName="check"
  iconPosition="left"
/>
```

### Theme Setup
```tsx
import { useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

const { setTcbsColor } = useTcbsColorStore();

React.useEffect(() => {
  setTcbsColor({
    light: {
      btnColor: '#007AFF',
      btnBorderColor: '#007AFF',
      btnIconColor: '#16a62bff',
      themeColor: '#007AFF',
      btnTextColor: '#FFFFFF',
    },
    dark: {
      btnColor: '#222222',
      btnBorderColor: '#222222',
      btnIconColor: '#FFFFFF',
      themeColor: '#222222',
      btnTextColor: '#FFFFFF',
    },
  });
}, []);
```

### Error Boundary
```tsx
import { AppErrorBoundary } from '@tcbs/react-native-mazic-ui';

<AppErrorBoundary>
  <YourApp/>
</AppErrorBoundary>
```

## Dependencies

The library depends on:
- React Native (0.68.0+)
- @tcbs/react-native-exception-handler
- Multiple icon libraries via @react-native-vector-icons
- react-native-mmkv for persistent storage
- zustand for state management