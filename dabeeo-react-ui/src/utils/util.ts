/**
 * px -> rem 컨버팅 함수, root 폰트사이즈는 10
 * @function pixelToRem
 * @param {number} pixel rem으로 변경할 pixel 값
 * @returns {string}
 */
export const pixelToRem = (pixel: number): string => {
  return `${pixel / 10}rem`;
};
