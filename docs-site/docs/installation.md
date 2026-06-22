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