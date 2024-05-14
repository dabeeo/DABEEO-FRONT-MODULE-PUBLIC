import {
  StyledNavigationMenuList,
  SubMenuItemInnerWrapper,
  SubMenuItemModalInnerWrapper,
  SubMenuItemModalWrapper,
  SubMenuItemWrapper,
} from '@components/Navigation/Navigation.styles';
import {NavMenuClickReturnData, NavMenuItem} from '@components/Navigation/Navigation.types';
import {DivideLine, FlexCenterBox} from '@components/Shared.styles';
import {useState} from 'react';

import TRIANGLE_SHAPE_IMAGE from '../../assets/shape/triangle.svg';

type NavigationMenuItemProps = {
  menu: NavMenuItem;
  menuActive: NavMenuClickReturnData | undefined;
  subMenuActive: NavMenuClickReturnData | undefined;
  menuClick?: (menu: NavMenuItem) => void;
  subMenuClick?: (menu: NavMenuItem, subMenu: NavMenuItem) => void;
};

export const NavigationMenuItem = ({
  menu,
  menuActive,
  subMenuActive,
  menuClick,
  subMenuClick,
}: NavigationMenuItemProps) => {
  // state
  const [showSubMenus, setShowSubMenus] = useState(false);

  /**
   * menu mouse over 시 submenu open을 위한 함수
   * @function handleOpenSubMenus
   * @returns {void}
   */
  const handleOpenSubMenus = (): void => {
    setShowSubMenus(true);
  };

  /**
   * menu mouse leave 시 submenu close을 위한 함수
   * @function handleOpenSubMenus
   * @returns {void}
   */
  const handleCloseSubMenus = (): void => {
    setShowSubMenus(false);
  };

  /**
   * 메뉴 active 여부 반환
   * @function menuIsActive
   * @returns {boolean}
   */
  const menuIsActive = (menu: NavMenuClickReturnData, menuType: string): boolean => {
    if (menuType === 'menu' && menuActive) {
      return menuActive.name === menu.name && menuActive.path === menu.path;
    }
    if (menuType === 'subMenu' && subMenuActive) {
      return subMenuActive.name === menu.name && subMenuActive.path === menu.path;
    }
    return false;
  };

  return (
    <StyledNavigationMenuList
      key={menu.idx}
      onFocus={menu.subMenus && handleOpenSubMenus}
      onMouseOver={menu.subMenus && handleOpenSubMenus}
      onMouseLeave={menu.subMenus && handleCloseSubMenus}
      onBlur={menu.subMenus && handleCloseSubMenus}
      $isActive={menuActive && menuIsActive(menu, 'menu')}
    >
      <a
        onClick={() => {
          menuClick && menuClick(menu);
        }}
      >
        {menu.name}
      </a>
      {showSubMenus && menu.subMenus && (
        <SubMenuItemWrapper>
          <SubMenuItemInnerWrapper>
            <FlexCenterBox>
              <img src={TRIANGLE_SHAPE_IMAGE} alt="arrow" />
            </FlexCenterBox>
            <SubMenuItemModalWrapper>
              {menu.subMenus.map((subMenu: NavMenuItem, index: number) => {
                return (
                  <SubMenuItemModalInnerWrapper
                    key={subMenu.idx}
                    $isActive={menuActive && menuIsActive(subMenu, 'subMenu')}
                    onClick={() => subMenuClick && subMenuClick(menu, subMenu)}
                  >
                    <FlexCenterBox height={40}>{subMenu.name}</FlexCenterBox>
                    {menu.subMenus && index < menu.subMenus.length - 1 && <DivideLine color="gray" width={60} />}
                  </SubMenuItemModalInnerWrapper>
                );
              })}
            </SubMenuItemModalWrapper>
          </SubMenuItemInnerWrapper>
        </SubMenuItemWrapper>
      )}
    </StyledNavigationMenuList>
  );
};
