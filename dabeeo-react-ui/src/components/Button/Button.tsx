import {StyledButton} from '@components/Button/Button.styles';
import {ColorScheme, NativeButtonProps, Size, Variant} from '@components/Button/Button.types';
import {ForwardedRef, forwardRef} from 'react';

export type ButtonHTMLOptions = {
  type?: NativeButtonProps['type'];
};

export type ButtonOptions = {
  size?: Size;
  variant?: Variant;
  colorScheme?: ColorScheme;
};
type ButtonOmittedTypes = keyof ButtonHTMLOptions | keyof ButtonOptions;
export interface ButtonProps extends Omit<NativeButtonProps, ButtonOmittedTypes>, ButtonHTMLOptions, ButtonOptions {}

/**
 * <hr>
 * <h3>버튼 컴포넌트</h3>
 *
 * - 클릭할 수 있는 버튼을 정의할 때 사용합니다.
 * - 버튼의 `크기`, `스타일`, `색` 등을 지정할 수 있습니다.
 * - HTML `<button>`태그의 속성을 모두 사용할 수 있습니다.
 */
export const Button = forwardRef((props: ButtonProps, forwardedRef: ForwardedRef<HTMLButtonElement>) => {
  return <StyledButton ref={forwardedRef} {...props} />;
});

Button.displayName = 'Button';
