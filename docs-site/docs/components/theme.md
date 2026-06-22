---
id: theme
title: Theme Management
sidebar_label: Theme
---

# Theme Management

The library provides comprehensive theme management using Zustand and MMKV.

## Setting Up Themes

### Basic Theme Setup
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

### Theme Modes
The library supports three theme modes:
- **light**: Always use light theme colors
- **dark**: Always use dark theme colors  
- **system**: Use system color scheme (respects user's OS preference)

## Theme Persistence

Themes are automatically persisted using MMKV storage, so users' preferences are maintained between app sessions.

## Available Colors

The theme system supports extensive color customization through the `ThemeColor` interface:
- btnColor: Main button background color
- btnBorderColor: Button border color
- btnIconColor: Icon color
- themeColor: Overall theme color
- btnTextColor: Button text color