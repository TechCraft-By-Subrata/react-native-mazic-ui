---
id: text
title: TcbsText Component
sidebar_label: Text
---

# TcbsText

The `TcbsText` component provides consistent typography with theme support.

```tsx
import { TcbsText } from '@tcbs/react-native-mazic-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | Required | Text content |
| variant | 'title' \| 'subtitle' \| 'body' \| 'caption' \| 'button' | 'body' | Text style variant |

## Variants

### Title
```tsx
<TcbsText variant="title">Main Heading</TcbsText>
```

### Subtitle
```tsx
<TcbsText variant="subtitle">Secondary Heading</TcbsText>
```

### Body (default)
```tsx
<TcbsText variant="body">Regular text content</TcbsText>
```

### Caption
```tsx
<TcbsText variant="caption">Small supporting text</TcbsText>
```

### Button
```tsx
<TcbsText variant="button">Button Text</TcbsText>
```
