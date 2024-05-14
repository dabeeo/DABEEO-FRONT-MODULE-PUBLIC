/**
 * image 파일 definition type 정의 파일
 * @file src/types/images.d.ts
 * @author Leo
 * @version 1.0
 * @see none
 * @history
 * - 2024-03-22, 최초 작성
 */
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
