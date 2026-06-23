---
id: intro
title: Welcome to TCBS React Native UI
sidebar_label: Introduction
---

# TCBS React Native UI Documentation

Welcome to the documentation for `@tcbs/react-native-mazic-ui` - a customizable React Native UI component library.

Mazic UI components are built against baseline standards for accessibility, adaptive layout, platform-correct interaction, and production performance by default. Consumers should expect these behaviors where they apply, even when they are not called out as individual props or options.

This library provides:

- **TcbsButton** - A highly customizable button with icon support
- **TcbsLiquidGlassButton** - A layered translucent action button for glass-style interfaces
- **TcbsLiquidGlassIconButton** - A circular glass-style icon button for close and utility actions
- **Theme Management** - Light/dark/system theme support
- **Error Handling** - Robust error boundaries
- **Utility Components** - Custom cards and text components

## Built-in Quality Standards

Every component is expected to satisfy the following baseline requirements before production use:

- **Accessibility by default** - Components should expose correct semantics, support screen readers, respect Dynamic Type, and avoid color-only state communication.
- **Adaptive mobile layouts** - Components should remain usable across small phones, tablets, orientation changes, and long or translated text.
- **Platform-native ergonomics** - Components should use React Native interaction patterns, safe areas, proper touch targets, and clear pressed, focused, and disabled states.
- **Performance and resilience** - Components should handle loading, degraded network conditions, keyboard overlap, and lower-end device constraints intentionally.

## Quick Start

```bash
npm install @tcbs/react-native-mazic-ui@latest @tcbs/react-native-exception-handler
```

## Features

- ✅ Theme support with light/dark/system modes
- ✅ Multiple icon library integration
- ✅ Accessibility features
- ✅ Error boundary for graceful error handling
- ✅ Persistent theme storage using MMKV
