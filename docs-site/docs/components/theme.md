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

You can also configure centralized scale tokens for spacing, padding, margin, radius, and type sizing:

- `setTcbsScale(...)`: override the shared `xs` through `xxl` design scale used by the components

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

### Centralized Scale Setup

Use `setTcbsScale` to define one shared sizing system for spacing, padding, margin, border radius, and font size.

```tsx
import { useTcbsColorStore } from '@tcbs/react-native-mazic-ui';

const { setMazicColor, setTcbsScale } = useTcbsColorStore();

React.useEffect(() => {
  setMazicColor('#007AFF');
  setTcbsScale({
    spacing: {
      xs: 2,
      s: 4,
      m: 8,
      l: 12,
      xl: 16,
      xxl: 24,
    },
    radius: {
      xs: 4,
      s: 8,
      m: 12,
      l: 16,
      xl: 20,
      xxl: 24,
    },
    fontSize: {
      xs: 4,
      s: 8,
      m: 12,
      l: 16,
      xl: 20,
      xxl: 24,
    },
  });
}, []);
```

Components can then consume the shared scale from `useTcbsColorStore().scaleTokens`.

### Default Scale Tokens

The package ships with universal default scale values, so consumers can use the token system even if they never override it.

| Token | `xs` | `s` | `m` | `l` | `xl` | `xxl` |
|------|------|-----|-----|-----|------|-------|
| spacing | 2 | 4 | 8 | 12 | 16 | 24 |
| radius | 4 | 8 | 12 | 16 | 20 | 24 |
| fontSize | 4 | 8 | 12 | 16 | 20 | 24 |

### How to Use Scale Tokens

- Use `spacing` for both margin and padding so spacing stays consistent across the app
- Use `radius` for rounded corners instead of raw `borderRadius` values
- Use `fontSize` for text sizing across buttons, text, cards, and custom components
- Override only the values you need; `setTcbsScale` merges partial updates into the defaults

Example partial override:

```tsx
setTcbsScale({
  spacing: {
    m: 10,
    l: 14,
  },
  fontSize: {
    xl: 22,
  },
});
```

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
