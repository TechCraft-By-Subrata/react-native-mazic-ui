# @tcbs/react-native-mazic-ui

A customizable React Native UI component library.

## Installation

```sh
npm install @tcbs/react-native-mazic-ui @tcbs/react-native-exception-handler
```

```sh
yarn add @tcbs/react-native-mazic-ui @tcbs/react-native-exception-handler
```

## Theme Setup Example

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

You can choose from three variants:

- `primary`: Filled button with main color
- `secondary`: Outlined button with border
- `no_border`: Button with no border and matches screen background

```tsx
<View>
  <TcbsButton
    title="TCBS Button"
    variant="primary"
    onPress={() => console.log('TCBS Button Pressed')}
    iconName="heart"
    iconPosition="left"
  />
</View>
<View>
  <TcbsButton
    title="TCBS Button"
    variant="secondary"
    onPress={() => console.log('TCBS Button Pressed')}
    iconName="star"
    iconPosition="right"
  />
</View>
<View>
  <TcbsButton
    title="TCBS Button"
    variant="no_border"
    onPress={() => console.log('TCBS Button Pressed')}
    iconName="home"
    iconPosition="left"
  />
</View>
```

### Size Options

You can choose from three sizes:

- `large`: Large button (default)
- `medium`: Medium button
- `small`: Small button

```tsx
<TcbsButton title="Large" size="large" onPress={...} />
<TcbsButton title="Medium" size="medium" onPress={...} />
<TcbsButton title="Small" size="small" onPress={...} />
```


### Supported Icon Groups

You can use the following icon groups for the `iconGroup` prop:

- `AntDesign`
- `Feather`
- `FontAwesome`
- `Foundation`
- `Ionicons`
- `MaterialDesignIcons`
- `Octicons`
- `Lucide` (if available in your project)

Example usage:

```tsx
<TcbsButton
  title="AntDesign"
  iconName="check"
  iconGroup="AntDesign"
  iconPosition="left"
  onPress={...}
/>
```


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


See the exported `TcbsButtonProps` type for all available options.

---

## License

MIT

Copyright (c) TechCraft By Subrata
