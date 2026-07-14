---
id: installation
title: Installation
sidebar_label: Installation
---

## Prerequisites

Before installing, make sure you have:

- React Native 0.76.0 or higher
- Node.js 18+ installed

## Installing the Package

```bash
npm install @tcbs/react-native-mazic-ui @tcbs/react-native-exception-handler react-native-mmkv react-native-nitro-modules
```

Or with yarn:

```bash
yarn add @tcbs/react-native-mazic-ui @tcbs/react-native-exception-handler react-native-mmkv react-native-nitro-modules
```

## Native Dependencies

Install these packages directly in your React Native app so autolinking includes their native code:

```json
{
  "react-native-mmkv": "^4.3.2",
  "react-native-nitro-modules": "^0.35.10"
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
