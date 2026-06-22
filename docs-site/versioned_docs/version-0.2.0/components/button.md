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
| style | StyleProp&lt;ViewStyle&gt; | - | Additional styles |
| textStyle | StyleProp&lt;TextStyle&gt; | - | Additional text styles |

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