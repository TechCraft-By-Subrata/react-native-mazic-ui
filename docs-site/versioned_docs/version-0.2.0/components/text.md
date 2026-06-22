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