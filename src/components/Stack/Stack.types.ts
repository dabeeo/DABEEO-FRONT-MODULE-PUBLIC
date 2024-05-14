import {HTMLAttributes} from 'react';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;
export type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | undefined;

export type NativeStackDivProps = HTMLAttributes<HTMLDivElement>;
