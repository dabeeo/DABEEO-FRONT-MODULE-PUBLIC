import '@src/index.css';

import {Size} from '@components/Button/Button.types';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

const SIZES = {
  sm: css`
    --button-font-size: var(--font-h5);
    --button-font-weight: var(--font-weight-500);
    --button-font-line-height: var(--font-line-height-h5);
    --button-min-width: var(--button-min-width-sm);
    --button-height: var(--button-height-sm);
  `,
  md: css`
    --button-font-size: var(--font-h5);
    --button-font-weight: var(--font-weight-500);
    --button-font-line-height: var(--font-line-height-h5);
    --button-min-width: var(--button-min-width-md);
    --button-height: var(--button-height-md);
  `,
  lg: css`
    --button-font-size: var(--font-h4);
    --button-font-weight: var(--font-weight-500);
    --button-font-line-height: var(--font-line-height-h4);
    --button-min-width: var(--button-min-width-lg);
    --button-height: var(--button-height-lg);
  `,
};

const VARIANTS = {
  solid: css`
    --button-color: var(--color-gray-06);
    --button-bg-color: var(--color-primary-da-blue-light);
    --button-hover-bg-color: var(--color-blue-light);
    --button-active-bg-color: var(--color-primary-da-blue);
  `,
  outline: css`
    --button-color: var(--color-primary-da-blue);
    --button-bg-color: transparent;
    --button-hover-bg-color: transparent;
    --button-active-bg-color: var(--color-blue-light);
    --button-outline-color: var(--color-primary-da-blue-light);
    --button-hover-outline-color: var(--color-blue-light);
    --button-active-outline-color: var(--color-primary-da-blue);
    --button-disabled-color: var(---color-gray-05);
    --button-disabled-bg-color: transparent;
  `,
};

const COLOR_SOLID = {
  blue: css`
    --button-color: var(--color-gray-06);
    --button-bg-color: var(--color-primary-da-blue-light);
    --button-hover-bg-color: var(--color-blue-light);
    --button-active-bg-color: var(--color-primary-da-blue);
    --button-disabled-color: var(--color-gray-06);
    --button-disabled-bg-color: var(--color-blue-black-04);
  `,
  black: css`
    --button-color: var(--color-gray-06);
    --button-bg-color: var(--color-gray-01);
    --button-hover-bg-color: var(--color-blue-black-02);
    --button-active-bg-color: var(--color-blue-black-03);
    --button-disabled-color: var(--color-gray-06);
    --button-disabled-bg-color: var(--color-blue-black-04);
  `,
  red: css`
    --button-color: var(--color-gray-06);
    --button-bg-color: var(--color-primary-da-red);
    --button-hover-bg-color: var(--color-state-red-01);
    --button-active-bg-color: var(--color-primary-da-red);
    --button-disabled-color: var(--color-gray-06);
    --button-disabled-bg-color: var(--color-blue-black-04);
  `,
};

const COLOR_OUTLINE = {
  blue: css`
    --button-color: var(--color-primary-da-blue);
    --button-bg-color: transparent;
    --button-hover-bg-color: transparent;
    --button-active-bg-color: var(--color-blue-light);
    --button-outline-color: var(--color-primary-da-blue-light);
    --button-hover-outline-color: var(--color-blue-light);
    --button-active-outline-color: var(--color-primary-da-blue);
    --button-disabled-color: var(---color-gray-05);
    --button-disabled-bg-color: transparent;
  `,
  black: css`
    --button-color: var(--color-primary-da-black);
    --button-bg-color: transparent;
    --button-hover-bg-color: transparent;
    --button-active-bg-color: var(--color-blue-black-04);
    --button-outline-color: var(--color-gray-02);
    --button-hover-outline-color: var(--color-gray-01);
    --button-active-outline-color: var(--color-gray-01);
    --button-disabled-color: var(---color-gray-05);
    --button-disabled-bg-color: transparent;
  `,
  red: css`
    --button-color: var(--color-primary-da-red);
    --button-bg-color: transparent;
    --button-hover-bg-color: transparent;
    --button-active-bg-color: var(--color-state-red-02);
    --button-outline-color: var(--color-state-red-01);
    --button-hover-outline-color: var(--color-primary-da-red);
    --button-active-outline-color: var(--color-primary-da-red);
    --button-disabled-color: var(---color-gray-05);
    --button-disabled-bg-color: transparent;
  `,
};

type StyledButtonProps = {
  size?: Size;
  variant?: 'solid' | 'outline';
  colorScheme?: 'blue' | 'black' | 'red';
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({size}) => size && SIZES[size]}
  ${({variant}) => variant && VARIANTS[variant]}
  ${({variant, colorScheme}) => colorScheme && variant === 'solid' && COLOR_SOLID[colorScheme]}
  ${({variant, colorScheme}) => colorScheme && variant === 'outline' && COLOR_OUTLINE[colorScheme]}

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: -0.02rem;
  width: var(--button-min-width, var(--button-min-width-md));
  min-width: var(--button-min-width, var(--button-min-width-md));
  height: var(--button-height, var(--button-height-md));
  cursor: pointer;
  font-size: var(--button-font-size, var(--font-h5)); // 기본 값 h5, 1.2rem
  color: var(--button-color, var(--color-gray-06)); // 기본 텍스트 색상, #eaeaea(gray)
  background-color: var(--button-bg-color, var(--color-primary-da-blue-light));
  border: none;
  outline: 1px solid var(--button-outline-color, var(--button-bg-color));
  letter-spacing: 0.02rem;
  &:hover {
    color: var(--button-color, var(--color-gray-06));
    background-color: var(--button-hover-bg-color, var(--color-blue-light));
    outline-color: var(--button-hover-outline-color, var(--button-hover-bg-color));
  }
  &:active {
    background-color: var(--button-active-bg-color, var(--color-primary-da-blue));
    outline-color: var(--button-active-outline-color, var(--button-active-bg-color));
  }
  &:disabled {
    pointer-events: none;
    color: var(--button-disabled-color, var(--color-gray-06));
    background-color: var(--button-disabled-bg-color, var(--color-blue-black-04));
    outline-color: var(--button-disabled-color, var(--color-blue-black-04));
  }
`;
