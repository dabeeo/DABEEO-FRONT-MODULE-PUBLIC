import {DivideLineProps, FlexBoxProps} from '@components/Shared.types';
import styled from '@emotion/styled';

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  gap: ${({gap}) => gap && `${gap / 10}rem`};
  width: ${({sizeFull, wFull, width}) => (sizeFull ? '100%' : wFull ? '100%' : width && `${width / 10}rem`)};
  height: ${({sizeFull, hFull, height}) => (sizeFull ? '100%' : hFull ? '100%' : height && `${height / 10}rem`)};
  background-color: ${({bgColor}) => bgColor && bgColor};
`;

export const FlexColCenterBox = styled.div<FlexBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({gap}) => gap && `${gap / 10}rem`};
  width: ${({sizeFull, wFull, width}) => (sizeFull ? '100%' : wFull ? '100%' : width && `${width / 10}rem`)};
  height: ${({sizeFull, hFull, height}) => (sizeFull ? '100%' : hFull ? '100%' : height && `${height / 10}rem`)};
  background-color: ${({bgColor}) => bgColor && bgColor};
`;

export const FlexCenterBox = styled.div<FlexBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({gap}) => gap && `${gap / 10}rem`};
  width: ${({sizeFull, wFull, width}) => (sizeFull ? '100%' : wFull ? '100%' : width && `${width / 10}rem`)};
  height: ${({sizeFull, hFull, height}) => (sizeFull ? '100%' : hFull ? '100%' : height && `${height / 10}rem`)};
  background-color: ${({bgColor}) => bgColor && bgColor};
`;

export const DivideLine = styled.div<DivideLineProps>`
  width: ${({width}) => (width ? `${width / 10}rem` : '100%')};
  height: ${({height}) => (height ? `${height / 10}rem` : '0.1rem')};
  background-color: ${({color}) =>
    color ? (color === 'gray' ? 'var(--color-gray-ea)' : 'var(--color-black-da)') : 'var(--color-gray-ea)'};
`;
