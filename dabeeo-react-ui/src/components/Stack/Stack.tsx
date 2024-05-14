import {AlignItems, FlexDirection, JustifyContent, NativeStackDivProps} from '@components/Stack/Stack.types';
import {CSSProperties, ForwardedRef, forwardRef, ReactNode} from 'react';

import {StyledStack} from './Stack.styles';

export type StackOptions = {
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: number;
};
export interface StackProps extends NativeStackDivProps, StackOptions {
  children?: ReactNode;
  style?: CSSProperties | undefined;
}

/**
 * <hr>
 * <h3>스택 컴포넌트</h3>
 *
 * - 각 자식 사이에 선택적 간격 및/또는 구분선을 사용하여 수직 또는 수평 축을 따라 직계 자식의 레이아웃을 관리합니다.
 * - 스택의 `배치 방향`, `메인축 방향 정렬`, `수직축 방향 정렬`, `간격` 등을 지정할 수 있습니다.
 * - HTML `<div>`태그의 속성을 모두 사용할 수 있습니다.
 */
export const Stack = forwardRef((props: StackProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
  return <StyledStack ref={forwardedRef} {...props} />;
});
Stack.displayName = 'Stack';
