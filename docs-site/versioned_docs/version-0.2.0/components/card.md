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