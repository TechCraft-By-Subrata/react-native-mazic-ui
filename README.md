# @tcbs/react-native-mazic-ui

A customizable React Native UI component library.

## Installation

```sh
npm install @tcbs/react-native-mazic-ui
```

## Usage

```tsx
import { Button } from '@tcbs/react-native-mazic-ui';

<Button title="Hello" onPress={() => {}} />
```

## TcbsButton Component Usage

### Basic Usage

```tsx
import { TcbsButton } from '@tcbs/react-native-mazic-ui';

<TcbsButton
  title="Submit"
  onPress={() => console.log('Pressed')}
/>
```

### Size Variations

```tsx
<TcbsButton title="Large" size="large" onPress={...} />
<TcbsButton title="Medium" size="medium" onPress={...} />
<TcbsButton title="Small" size="small" onPress={...} />
```

### Variant Styles

```tsx
<TcbsButton title="Primary" variant="primary" onPress={...} />
<TcbsButton title="Secondary" variant="secondary" onPress={...} />
<TcbsButton title="No Border" variant="no_border" onPress={...} />
```

### With Icon

```tsx
<TcbsButton
  title="AntDesign"
  iconName="check"
  iconGroup="AntDesign"
  iconPosition="left"
  onPress={...}
/>

<TcbsButton
  title="Feather"
  iconName="arrow-right"
  iconGroup="Feather"
  iconPosition="right"
  onPress={...}
/>

<TcbsButton
  title="Top Icon"
  iconName="star"
  iconGroup="FontAwesome"
  iconPosition="top"
  onPress={...}
/>
```

### Custom Colors and Styles

```tsx
<TcbsButton
  title="Custom"
  style={{ backgroundColor: '#222' }}
  textStyle={{ color: '#FFD700' }}
  onPress={...}
/>
```

### Accessibility

```tsx
<TcbsButton
  title="Accessible"
  accessibilityLabel="Submit button"
  accessibilityHint="Submits the form"
  accessibilityRole="button"
  onPress={...}
/>
```

### Disabled State

```tsx
<TcbsButton
  title="Disabled"
  disabled
  onPress={...}
/>
```

### All Props

See the exported `TcbsButtonProps` type for all available options.
