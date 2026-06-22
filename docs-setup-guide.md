# Setting Up Docusaurus Documentation Site

This guide will help you set up a documentation site for `@tcbs/react-native-mazic-ui` with:
- Version dropdown (light/dark theme)
- Search functionality
- GitHub Pages deployment

## Prerequisites

Make sure you have Node.js installed (version 18+ recommended).

## Step 1: Initialize Docusaurus

```bash
# Create a new Docusaurus site in docs directory
npx create-docusaurus@latest docs-site classic --typescript
```

This will create a `docs-site` directory with the basic Docusaurus structure.

## Step 2: Configure docusaurus.config.js

Replace the contents of `docs-site/docusaurus.config.js` with:

```javascript
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TCBS React Native UI',
  tagline: 'A customizable React Native UI component library',
  url: 'https://TechCraft-By-Subrata.github.io',
  baseUrl: '/react-native-mazic-ui/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment
  organizationName: 'TechCraft-By-Subrata',
  projectName: 'react-native-mazic-ui',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo name
          editUrl:
            'https://github.com/TechCraft-By-Subrata/react-native-mazic-ui/edit/main/docs-site/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo name
          editUrl:
            'https://github.com/TechCraft-By-Subrata/react-native-mazic-ui/edit/main/docs-site/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TCBS UI',
        logo: {
          alt: 'TCBS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/TechCraft-By-Subrata/react-native-mazic-ui',
            label: 'GitHub',
            position: 'right',
          },
          // Version dropdown
          {
            type: 'dropdown',
            label: 'Theme',
            position: 'right',
            items: [
              {
                label: 'Light',
                onClick: () => {
                  document.documentElement.classList.remove('theme-dark');
                  localStorage.setItem('theme', 'light');
                }
              },
              {
                label: 'Dark',
                onClick: () => {
                  document.documentElement.classList.add('theme-dark');
                  localStorage.setItem('theme', 'dark');
                }
              }
            ]
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TechCraft-By-Subrata/react-native-mazic-ui',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TechCraft By Subrata. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // Enable search
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'YOUR_INDEX_NAME',
        contextualSearch: true,
      }
    }),
};

export default config;
```

## Step 3: Create Custom CSS for Theme Toggle

Create or update `docs-site/src/css/custom.css`:

```css
/* Custom styles for theme toggle */
.navbar__items--right {
  display: flex;
  align-items: center;
}

/* Ensure the theme dropdown is visible */
.dropdown__menu {
  min-width: 120px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar__items--right {
    flex-direction: row-reverse;
  }
}
```

## Step 4: Create Sidebars

Replace `docs-site/sidebars.js` with:

```javascript
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'installation',
    'components/button',
    'components/error-boundary',
    'components/theme',
    'components/card',
    'components/text'
  ],
};

module.exports = sidebars;
```

## Step 5: Create Documentation Pages

### Introduction Page (`docs-site/docs/intro.md`):

```markdown
---
id: intro
title: Welcome to TCBS React Native UI
sidebar_label: Introduction
---

# TCBS React Native UI Documentation

Welcome to the documentation for `@tcbs/react-native-mazic-ui` - a customizable React Native UI component library.

This library provides:

- **TcbsButton** - A highly customizable button with icon support
- **Theme Management** - Light/dark/system theme support
- **Error Handling** - Robust error boundaries
- **Utility Components** - Custom cards and text components

## Quick Start

```bash
npm install @tcbs/react-native-mazic-ui @tcbs/react-native-exception-handler
```

## Features

- ✅ Theme support with light/dark/system modes
- ✅ Multiple icon library integration
- ✅ Accessibility features
- ✅ Error boundary for graceful error handling
- ✅ Persistent theme storage using MMKV
```

### Installation (`docs-site/docs/installation.md`):

```markdown
---
id: installation
title: Installation
sidebar_label: Installation
---

## Prerequisites

Before installing, make sure you have:

- React Native 0.68.0 or higher
- Node.js 18+ installed

## Installing the Package

```bash
npm install @tcbs/react-native-mazic-ui @tcbs/react-native-exception-handler
```

Or with yarn:

```bash
yarn add @tcbs/react-native-mazic-ui @tcbs/react-native-exception-handler
```

## Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "@react-native-vector-icons/ant-design": "^13.1.0",
  "@react-native-vector-icons/feather": "^13.1.0",
  "@react-native-vector-icons/fontawesome": "^13.1.0",
  "@react-native-vector-icons/foundation": "^13.1.0",
  "@react-native-vector-icons/ionicons": "^13.1.0",
  "@react-native-vector-icons/material-design-icons": "^13.1.0",
  "@react-native-vector-icons/material-icons": "^13.1.0",
  "@react-native-vector-icons/octicons": "^21.1.0",
  "react-native-mmkv": "^3.2.0",
  "zustand": "^5.0.3"
}
```

## Usage

```tsx
import { TcbsButton } from '@tcbs/react-native-mazic-ui';

<TcbsButton
  title="Submit"
  onPress={() => console.log('Pressed')}
/>
```
```

### Button Component (`docs-site/docs/components/button.md`):

```markdown
---
id: button
title: TcbsButton Component
sidebar_label: Button
---

# TcbsButton

The `TcbsButton` component is a highly customizable button with icon support and theme integration.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Button text |
| onPress | (event: GestureResponderEvent) => void | Required | Callback function when pressed |
| size | 'large' \| 'medium' \| 'small' | 'large' | Button size |
| variant | 'primary' \| 'secondary' \| 'no_border' | 'primary' | Button style variant |
| disabled | boolean | false | Disable button interaction |
| iconName | string | - | Icon name from icon library |
| iconGroup | string | 'MaterialIcons' | Icon library to use |
| iconPosition | 'top' \| 'left' \| 'right' | 'top' | Position of the icon |
| accessibilityLabel | string | - | Accessibility label |
| style | StyleProp<ViewStyle> | - | Additional styles |
| textStyle | StyleProp<TextStyle> | - | Additional text styles |

## Examples

### Basic Usage
```tsx
<TcbsButton
  title="Submit"
  onPress={() => console.log('Pressed')}
/>
```

### With Icon
```tsx
<TcbsButton
  title="Check"
  iconName="check"
  iconGroup="AntDesign"
  iconPosition="left"
  onPress={() => console.log('Pressed')}
/>
```

### Different Sizes and Variants
```tsx
<TcbsButton
  title="Large"
  size="large"
  variant="primary"
  onPress={() => console.log('Pressed')}
/>

<TcbsButton
  title="Medium"
  size="medium"
  variant="secondary"
  onPress={() => console.log('Pressed')}
/>

<TcbsButton
  title="Small"
  size="small"
  variant="no_border"
  onPress={() => console.log('Pressed')}
/>
```

## Theme Integration

The button automatically adapts to the current theme:
- Primary: Uses primary color from theme
- Secondary: Uses border and text color from theme
- No Border: Transparent background with themed text color
```

### Error Boundary (`docs-site/docs/components/error-boundary.md`):

```markdown
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
```

### Theme Management (`docs-site/docs/components/theme.md`):

```markdown
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
```

### Custom Card (`docs-site/docs/components/card.md`):

```markdown
---
id: card
title: CustomCard Component
sidebar_label: Card
---

# CustomCard

The `CustomCard` component provides a consistent card design with theme support.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | Required | Card title text |
| description | string | - | Optional description text |
| variant | 'default' \| 'outlined' | 'default' | Card style |
| onPress | (event: GestureResponderEvent) => void | - | Callback function when pressed |
| secureText | string | - | Optional security label |
| trailingIcon | string | 'chevron-forward' | Icon shown at the end |

## Examples

### Basic Usage
```tsx
<CustomCard
  title="User Profile"
  description="View and edit your profile information"
/>
```

### With Press Handler
```tsx
<CustomCard
  title="Settings"
  description="Configure application settings"
  onPress={() => navigation.navigate('Settings')}
/>
```

### Outlined Card
```tsx
<CustomCard
  title="Important Notice"
  description="This is a notification about an important update"
  variant="outlined"
/>
```
```

### Custom Text (`docs-site/docs/components/text.md`):

```markdown
---
id: text
title: CustomText Component
sidebar_label: Text
---

# CustomText

The `CustomText` component provides consistent typography with theme support.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | Required | Text content |
| variant | 'title' \| 'subtitle' \| 'body' \| 'caption' \| 'button' | 'body' | Text style variant |

## Variants

### Title
```tsx
<CustomText variant="title">Main Heading</CustomText>
```

### Subtitle
```tsx
<CustomText variant="subtitle">Secondary Heading</CustomText>
```

### Body (default)
```tsx
<CustomText variant="body">Regular text content</CustomText>
```

### Caption
```tsx
<CustomText variant="caption">Small supporting text</CustomText>
```

### Button
```tsx
<CustomText variant="button">Button Text</CustomText>
```
```

## Step 6: Add Search Configuration

To enable search, you'll need to configure Algolia or use Docusaurus's built-in search. For Algolia:

1. Create an Algolia account and create a new index
2. Get your App ID, API Key, and Index Name
3. Update `docusaurus.config.js` with these values

## Step 7: Build and Deploy

### Local Development
```bash
cd docs-site
npm run start
```

### Production Build
```bash
npm run build
```

### Deployment to GitHub Pages
```bash
npm run deploy
```

This will automatically push the built site to your `gh-pages` branch.

## Additional Features

### Responsive Design
The Docusaurus theme is fully responsive and works on mobile, tablet, and desktop devices.

### Dark/Light Theme Toggle
The configuration includes a dropdown menu in the navbar that allows users to switch between light and dark themes. The selected theme will be saved in localStorage.

### Versioning
You can add versioning support by creating multiple versions of your documentation in the `docs` directory.