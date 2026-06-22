import React from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, BORDER_RADIUS, ButtonSize, ButtonVariant, IconGroupType, IconPosition, TcbsButtonProps } from './TcbsButton.types';
/**
 * TcbsButton - A themeable, accessible button component with icon support
 *
 * @example
 * ```tsx
 * <TcbsButton
 *   title="Submit"
 *   onPress={() => console.log('Pressed')}
 *   size="large"
 *   variant="primary"
 *   iconName="check"
 *   iconPosition="left"
 * />
 * ```
 */
export declare const TcbsButton: React.FC<TcbsButtonProps>;
export { BUTTON_SIZE, BUTTON_VARIANT, BORDER_RADIUS };
export type { ButtonSize, ButtonVariant, IconGroupType, IconPosition };
