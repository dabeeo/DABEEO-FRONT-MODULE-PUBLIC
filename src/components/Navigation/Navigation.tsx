import {
  StyledNavigation,
  StyledNavigationIconWrapper,
  StyledNavigationLogoInnerWrapper,
  StyledNavigationMenuUnorderedList,
  StyledNavigationNav,
} from '@components/Navigation/Navigation.styles';
import {NativeNavigationDivProps, NavMenuClickReturnData, NavMenuItem} from '@components/Navigation/Navigation.types';
import {NavigationMenuItem} from '@components/Navigation/NavigationMenuItem';
import {FlexBox, FlexCenterBox} from '@components/Shared.styles';
import {CSSProperties, ForwardedRef, forwardRef, useState} from 'react';

import LOGOUT_ICON from '../../assets/icons/logout.svg';
import STD3D_LOGO_IMAGE from '../../assets/images/logo_studio_3d.svg';

export type NavigationOptions = {
  logo?: string;
  logoTitle?: string;
  menus?: NavMenuItem[];
  useLogout?: boolean;
  menuClick?: (menuInfo: NavMenuClickReturnData) => void;
  subMenuClick?: (subMenuInfo: NavMenuClickReturnData) => void;
  logoClick?: () => void;
  logOutClick?: () => void;
};

export interface NavigationProps extends NativeNavigationDivProps, NavigationOptions {
  children?: React.ReactNode;
  style?: CSSProperties | undefined;
}

/**
 * <hr>
 * <h3>헤더 네비게이션 컴포넌트</h3>
 *
 * - 레이아웃 헤더에 위치하는 네비게이션 바 컴포넌트입니다.
 * - 로고 이미지를 지정할 수 있습니다.
 * - 메뉴 항목을 지정할 수 있습니다.
 */
export const Navigation = forwardRef((props: NavigationProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
  // props
  const {logo, logoTitle, menus, useLogout, logoClick, menuClick, subMenuClick, logOutClick} = props;
  // state
  const [menuActive, setMenuActive] = useState<NavMenuClickReturnData | undefined>();
  const [subMenuActive, setSubMenuActive] = useState<NavMenuClickReturnData | undefined>();

  /**
   * 메뉴 클릭 이벤트 핸들러, 메뉴 클릭 이벤트 콜백 호출 및 active 처리
   * @function handleMenuClick
   * @returns {void}
   */
  const handleMenuClick = (menu: NavMenuItem): void => {
    setMenuActive({name: menu.name, path: menu.path});
    console.log(menu.subMenus);
    if (menu.subMenus && menu.subMenus.length > 0) {
      setSubMenuActive({name: menu.subMenus[0].name, path: menu.subMenus[0].path});
    } else {
      setSubMenuActive(undefined);
    }
    menuClick && menuClick({name: menu.name, path: menu.path});
  };

  /**
   * 서브 메뉴 클릭 이벤트 핸들러, 서브 메뉴 클릭 이벤트 콜백 호출 및 active 처리
   * @function handleSubMenuClick
   * @returns {void}
   */
  const handleSubMenuClick = (menu: NavMenuItem, subMenu: NavMenuItem) => {
    setSubMenuActive({name: subMenu.name, path: subMenu.path});
    setMenuActive({name: menu.name, path: menu.path});
    subMenuClick && subMenuClick({name: subMenu.name, path: subMenu.path});
  };

  return (
    <StyledNavigation ref={forwardedRef} {...props}>
      <StyledNavigationNav>
        {/** 로고 및 타이틀 영역 */}
        <FlexBox width={162} height={40} gap={10}>
          <StyledNavigationLogoInnerWrapper onClick={logoClick}>
            {logo ? <img src={logo} /> : <span>{logoTitle}</span>}
          </StyledNavigationLogoInnerWrapper>
        </FlexBox>
        {/** 메뉴 및 아이콘(로그아웃 버튼) 영역 */}
        <FlexCenterBox gap={40} hFull={true}>
          {menus && menus.length > 0 && (
            <StyledNavigationMenuUnorderedList>
              {menus.map((menu: NavMenuItem) => {
                return (
                  <NavigationMenuItem
                    key={menu.idx}
                    menu={menu}
                    menuActive={menuActive}
                    subMenuActive={subMenuActive}
                    menuClick={handleMenuClick}
                    subMenuClick={handleSubMenuClick}
                  />
                );
              })}
            </StyledNavigationMenuUnorderedList>
          )}
          {useLogout && (
            <StyledNavigationIconWrapper onClick={logOutClick}>
              <img src={LOGOUT_ICON} />
            </StyledNavigationIconWrapper>
          )}
        </FlexCenterBox>
      </StyledNavigationNav>
    </StyledNavigation>
  );
});
Navigation.defaultProps = {
  logoClick: () => alert('logo click!!'),
  logOutClick: () => alert('logout click!!'),
  menuClick: (menuInfo: {name: string; path: string}) => alert(`${menuInfo.name} : ${menuInfo.path}`),
  subMenuClick: (subMenuInfo: {name: string; path: string}) => alert(`${subMenuInfo.name} : ${subMenuInfo.path}`),
  logoTitle: 'title이다!!',
  menus: [
    {
      idx: 1,
      name: '매장 관리',
      path: '매장 관리 경로',
    },
    {
      idx: 2,
      name: '카테고리 관리',
      path: '카테고리 관리 경로',
      subMenus: [
        {idx: 1, name: 'sub 1', path: '카테고리 관리 서브1 경로'},
        {idx: 2, name: 'sub 2', path: '카테고리 관리 서브2 경로'},
      ],
    },
    {
      idx: 3,
      name: '사용자 메뉴',
      path: '사용자 메뉴 경로',
      subMenus: [
        {idx: 1, name: '사용자 메뉴 sub 1', path: '사용자 메뉴 sub 1 경로'},
        {idx: 2, name: '사용자 메뉴 sub 2', path: '사용자 메뉴 sub 2 경로'},
      ],
    },
    {idx: 4, name: '기기 관리', path: '기기 관리 경로'},
  ],
  useLogout: true,
  logo: STD3D_LOGO_IMAGE,
};
Navigation.displayName = 'Navigation';
