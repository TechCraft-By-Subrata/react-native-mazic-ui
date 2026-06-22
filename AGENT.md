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

## Component Blueprint

Every new component in this library must satisfy the following UI/UX requirements before it is considered production ready.

### 1. Responsiveness and adaptive layouts

- Build layouts with React Native flexbox primitives and remember `flexDirection` defaults to `column`.
- Prefer `flex`, percentages, and `aspectRatio` over hardcoded widths and heights.
- Use `useWindowDimensions` or dimension listeners when layout behavior must adapt to tablets, foldables, or compact screens.
- Stress-test text with long strings, translated copy, and large content blocks to avoid clipping, overlap, and broken wrapping.
- Preserve component state, focus, and scroll position cleanly across portrait and landscape changes.

### 2. Platform-specific patterns and ergonomics

- Do not introduce web-specific UI patterns such as hover-only interactions, HTML-style dropdowns, or inline web link behaviors.
- Respect minimum touch target sizes: `44x44` pt on iOS and `48x48` dp on Android.
- Use `hitSlop` to expand small tap targets such as icon buttons or dismiss controls.
- Prefer `Pressable` for interactive components and define clear pressed, focused, and disabled states.
- Keep interactive content within safe area boundaries so it is not obscured by notches, status bars, or home indicators.

### 3. Accessibility requirements

- Set explicit `accessibilityRole` values for interactive and semantic elements.
- Use `accessible={true}` on container views when child content should be presented as a single screen-reader focus target.
- Provide accurate `accessibilityLabel` and `accessibilityHint` values for non-text or non-obvious controls.
- Support Dynamic Type and verify layouts remain usable at larger system font sizes.
- Maintain at least `4.5:1` text contrast and never rely on color alone to communicate state; pair status with text or icons.
- Announce important dynamic state changes such as loading, error, or success feedback when the interaction depends on them.

### 4. Hardware, performance, and resilience

- Provide skeleton or placeholder states for async loading when a component depends on remote data.
- Use optimistic UI updates where appropriate so interactions feel immediate while background work completes.
- Prefer SVG or well-compressed image assets to reduce memory pressure on lower-end devices.
- Protect form flows with `KeyboardAvoidingView` or equivalent keyboard-aware containers so inputs are never hidden.
- Design sensible offline or degraded states, including read-only or cached behavior when network access is unavailable.

### 5. Review checklist for new components

Before shipping a new component, verify:

- The layout adapts across narrow phones, tablets, orientation changes, and large text sizes.
- Screen readers can identify, focus, and operate the component correctly on iOS and Android.
- Touch targets, `hitSlop`, and pressed/disabled states are implemented for every interaction.
- Loading, error, empty, and offline states are handled intentionally.
- Asset, rendering, and interaction choices remain acceptable on lower-end devices.

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

## Documentation Versioning

Documentation updates are required whenever a code or guidance change affects public behavior, API shape, usage, constraints, defaults, styling expectations, accessibility guarantees, or recommended implementation patterns.

When making any meaningful repository change, always evaluate whether the docs site must be updated in the same task. Do not treat docs updates as optional follow-up work when the change alters what consumers, contributors, or future agents need to know.

When updating the docs site:

- Treat `docs-site/docs/` as the unreleased `next` documentation.
- Treat `docs-site/versioned_docs/` as published historical documentation that should only describe behavior already shipped in that version.
- Add new policy, guidance, standards, or upcoming behavior changes to `next` docs by default.
- Only update versioned docs when the change reflects what was actually released in that specific version or when the user explicitly asks for a backport or correction.
- If a docs change affects both unreleased and already shipped behavior, update both intentionally rather than copying changes into versioned docs by default.
- For component work, update the relevant docs page whenever props, defaults, states, accessibility behavior, layout behavior, theming behavior, or usage guidance changes.
- For repo-wide standards or policy changes, update the docs introduction or other top-level guidance pages when the information is relevant to library consumers.
- If no docs update is needed for a change, make that a deliberate decision based on scope rather than an omission.

## Release Process

This is a public GitHub repository and a public npm package. Release automation must follow these rules:

- Deploy the docs site automatically from `main` when docs or library changes are pushed.
- Do not guess semver bump types from pushes alone.
- Use Changesets to choose `patch`, `minor`, or `major` intentionally for every user-visible package change.
- Treat `patch` and `minor` releases as automation-friendly after explicit Changesets metadata is merged.
- Treat `major` releases as requiring explicit maintainer review of the generated release PR before publishing.
- When a change affects public package behavior, API, defaults, or guidance, update the relevant docs and ensure the release metadata reflects the impact.

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
