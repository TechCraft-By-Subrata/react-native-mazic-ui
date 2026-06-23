---
id: theme
title: Theme Management
sidebar_label: Theme
---

# Theme Management

The library provides comprehensive theme management using Zustand and MMKV.

There are two supported ways to configure theme colors:

- `setTcbsColor(...)`: manually set individual theme tokens
- `setMazicColor(baseColor)`: generate the full light and dark theme palettes from one base color

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

### Single Color Theme Setup

Use `setMazicColor` when you want the package to derive the full theme from one brand or accent color.

```tsx
import { useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

const { setMazicColor } = useTcbsColorStore();

React.useEffect(() => {
  setMazicColor('#007AFF');
}, []);
```

This generates both the `light` and `dark` theme palettes automatically and updates the current active theme in the store.

### What `setMazicColor` Updates

`setMazicColor(baseColor)` replaces the generated `light` and `dark` palettes and updates these theme keys:

- `btnColor`
- `btnBorderColor`
- `btnIconColor`
- `themeColor`
- `btnTextColor`
- `tabBarIconActiveColor`
- `tabBarIconInactiveColor`
- `primaryColor`
- `secondaryColor`
- `tertiaryColor`
- `screenBgColor`
- `modalBgColor`
- `modalTitleColor`
- `modalHeaderBgColor`
- `modalCardBgColor`
- `textPrimary`
- `textSecondary`
- `borderColor`
- `dividerColor`
- `inputBgColor`
- `inputBorderColor`
- `cardBgColor`
- `cardBorderColor`
- `accentColor`
- `errorColor`
- `successColor`
- `warningColor`

### How `setMazicColor` Derives the Palette

The generated palette uses the supplied base color as the main accent and button color, then derives supporting tokens around it:

- Button and primary accent colors are based directly on the provided `baseColor`
- `secondaryColor` and `accentColor` use a darker derived tone
- `tertiaryColor` uses a lower-opacity accent tint
- Light theme backgrounds, cards, borders, and inputs use neutral light surfaces
- Dark theme backgrounds, cards, borders, and inputs use neutral dark surfaces
- Semantic colors such as `errorColor`, `successColor`, and `warningColor` use fixed accessible defaults
- Text colors are generated for contrast rather than copied from the base color

`setMazicColor` is the best option when you want a coherent package-wide theme from one color. Use `setTcbsColor` when you need full token-level control.

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
- tabBarIconActiveColor: Active tab icon color
- tabBarIconInactiveColor: Inactive tab icon color
- primaryColor: Primary brand/accent color
- secondaryColor: Secondary accent color
- tertiaryColor: Low-emphasis accent tint
- screenBgColor: Screen background color
- modalBgColor: Modal overlay or panel background
- modalTitleColor: Modal title text color
- modalHeaderBgColor: Modal header background color
- modalCardBgColor: Modal card or content surface color
- textPrimary: Primary text color
- textSecondary: Secondary text color
- borderColor: Default border color
- dividerColor: Divider and separator color
- inputBgColor: Input background color
- inputBorderColor: Input border color
- cardBgColor: Card background color
- cardBorderColor: Card border color
- accentColor: Accent color for supporting UI highlights
- errorColor: Error state color
- successColor: Success state color
- warningColor: Warning state color
