import {ButtonHTMLAttributes} from 'react';

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'solid' | 'outline';
export type ColorScheme = 'blue' | 'black' | 'red';

export type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
