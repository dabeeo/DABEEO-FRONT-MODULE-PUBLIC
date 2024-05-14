import '@src/index.css';

import {FlexColCenterBox} from '@components/Shared.styles';
import styled from '@emotion/styled';

type StyledNavigationProps = {
  //   flexDirection?: FlexDirection;
  //   alignItems?: AlignItems;
  //   justifyContent?: JustifyContent;
  //   gap?: number;
};

export const StyledNavigation = styled.div<StyledNavigationProps>`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8rem;
  padding: 0 3rem;
  // background-color: var(--color-white-bg);
  background-color: #f9f9f9;
`;

export const StyledNavigationNav = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 140rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-h2);
  font-weight: var(--font-weight-700);
`;

export const StyledNavigationLogoInnerWrapper = styled.div`
  display: flex;
  width: 14.2rem;
  height: 100%;
  gap: 1rem;
  cursor: pointer;
  > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledNavigationMenuUnorderedList = styled.ul`
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 4rem;
  height: 100%;
`;

export const StyledNavigationMenuList = styled.li<{$isActive?: boolean}>`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  list-style: none;
  cursor: pointer;
  a {
    font-size: var(--font-h3);
    font-weight: ${({$isActive}) => ($isActive ? 'var(--font-weight-700)' : 'var(--font-weight-500);')};
    color: ${({$isActive}) => ($isActive ? 'var(--color-gray-22)' : 'var(--color-gray-99);')};
  }
`;

export const StyledNavigationIconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const SubMenuItemWrapper = styled.div`
  position: absolute;
  min-width: 12rem;
  width: auto;
  z-index: 50;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const SubMenuItemArrowWrapper = styled.div`
  position: absolute;
  width: 12rem;
  z-index: 50;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const SubMenuItemInnerWrapper = styled.div`
  width: 100%;
  padding-top: 0.5rem;
`;

export const SubMenuItemModalWrapper = styled.div`
  box-shadow: 0px 3px 15px 0px rgba(153, 153, 153, 0.4);
  border-radius: 0.2rem;
  padding: 0.4rem 0;
`;

export const SubMenuItemModalInnerWrapper = styled(FlexColCenterBox)<{$isActive?: boolean}>`
  background: var(--color-white-bg);
  font-size: var(--font-h4);
  font-weight: ${({$isActive}) => ($isActive ? 'var(--font-weight-700)' : 'var(--font-weight-500);')};
  color: ${({$isActive}) => ($isActive ? 'var(--color-gray-22)' : 'var(--color-gray-99);')};
  &:hover {
    color: var(--color-gray-44);
  }
`;
