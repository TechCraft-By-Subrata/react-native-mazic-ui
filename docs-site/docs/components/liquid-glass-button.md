---
id: liquid-glass-button
title: Liquid Glass Buttons
sidebar_label: Liquid Glass Buttons
---

# Liquid Glass Buttons

`TcbsLiquidGlassButton` and `TcbsLiquidGlassIconButton` provide a glass-style visual treatment using translucent layers, sheen, depth tint, and shadow.

These are React Native visual components. They do not use native iOS Liquid Glass APIs.

## Icon support

Both components support custom icons by accepting a rendered React node through the `icon` prop.

- Supported: React Native Vector Icons components passed as JSX
- Supported: custom SVG or other React Native icon nodes
- Supported: plain text or glyph fallback via `label` on `TcbsLiquidGlassIconButton`
- Not supported: `iconName` and `iconGroup` string-based icon props like `TcbsButton`

If you want string-based icon selection, use `TcbsButton` or wrap the desired icon component yourself and pass it through `icon`.

## Exports

```tsx
import {
  TcbsLiquidGlassButton,
  TcbsLiquidGlassIconButton,
  TCBS_LIQUID_GLASS_BUTTON_SIZE,
} from '@tcbs/react-native-mazic-ui';
```

## TcbsLiquidGlassButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | Required | Button text |
| onPress | `(event: GestureResponderEvent) => void` | Required | Callback when pressed |
| disabled | boolean | false | Disables interaction |
| loading | boolean | false | Shows an activity indicator and disables interaction |
| icon | ReactNode | - | Optional leading icon |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| style | `StyleProp<ViewStyle>` | - | Additional outer button styles |
| textStyle | `StyleProp<TextStyle>` | - | Additional label styles |
| contentStyle | `StyleProp<ViewStyle>` | - | Additional inner content row styles |
| accessibilityLabel | string | `title` | Screen-reader label |
| accessibilityHint | string | - | Screen-reader hint |

## TcbsLiquidGlassIconButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| onPress | `(event: GestureResponderEvent) => void` | Required | Callback when pressed |
| icon | ReactNode | - | Optional custom icon node |
| label | string | `'×'` | Fallback glyph when no icon is supplied |
| accessibilityLabel | string | `'Close'` | Screen-reader label |
| accessibilityHint | string | - | Screen-reader hint |
| disabled | boolean | false | Disables interaction |
| size | number | 46 | Width and height of the circular button |
| style | `StyleProp<ViewStyle>` | - | Additional outer button styles |
| textStyle | `StyleProp<TextStyle>` | - | Additional fallback label styles |
| hitSlop | Insets | - | Expands the touch target |

## Examples

### Primary action

```tsx
<TcbsLiquidGlassButton
  title="Save changes"
  onPress={() => console.log('Saved')}
/>
```

### Loading state with icon

```tsx
import { Ionicons } from '@react-native-vector-icons/ionicons';

<TcbsLiquidGlassButton
  title="Continue"
  loading={submitting}
  size={TCBS_LIQUID_GLASS_BUTTON_SIZE.MEDIUM}
  icon={<Ionicons name="arrow-forward" size={18} color="#132742" />}
  onPress={handleContinue}
/>
```

### Close button

```tsx
import { Ionicons } from '@react-native-vector-icons/ionicons';

<TcbsLiquidGlassIconButton
  icon={<Ionicons name="close" size={20} color="#5A6D87" />}
  accessibilityLabel="Close modal"
  onPress={onClose}
/>
```

### Glyph fallback close button

```tsx
<TcbsLiquidGlassIconButton
  accessibilityLabel="Close modal"
  onPress={onClose}
/>
```

## Theme behavior

The components derive their layered colors from the active theme in `useTcbsColorStore()`, primarily:

- `cardBgColor`
- `cardBorderColor`
- `textPrimary`
- `textSecondary`
- `btnColor`
- `tertiaryColor`

If those values are not set, the components fall back to safe defaults.
