/* eslint-disable @typescript-eslint/no-unused-vars */
import STD3D_LOGO_IMAGE from '@assets/images/logo_studio_3d.svg';
import {Navigation} from '@components/Navigation/Navigation';
import {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const TEST_MENUS = [
  {
    idx: 1,
    name: '매장 관리',
    path: '',
    isActive: true,
  },
  {
    idx: 2,
    name: '카테고리 관리',
    path: '',
    isActive: false,
    subMenus: [
      {idx: 1, name: 'sub 1', path: '카테고리 관리 서브1 path', isActive: false},
      {idx: 2, name: 'sub 2', path: '카테고리 관리 서브2 path', isActive: false},
    ],
  },
  {
    idx: 3,
    name: '사용자 메뉴',
    path: '',
    isActive: false,
    subMenus: [
      {idx: 1, name: '사용자 메뉴 sub 1', path: '사용자 메뉴 sub 1 path', isActive: false},
      {idx: 2, name: '사용자 메뉴 sub 2', path: '사용자 메뉴 sub 2 path', isActive: false},
    ],
  },
  {idx: 4, name: '기기 관리', path: ''},
];

export default {
  title: 'DABEEO/Component/Navigation',
  component: Navigation,
  parameters: {
    layout: 'padded', // Optional parameter to center the component in the Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    menuClick: {action: 'menuClicked'},
    subMenuClick: {action: 'subMenuClicked'},
    logoClick: {action: 'logoClicked'},
    logOutClick: {action: 'logoutClicked'},
    logo: {
      description: 'Logo로 사용할 이미지를 지정합니다.',
      control: {type: 'file'},
      table: {
        category: 'Navigation 속성',
        defaultValue: {summary: STD3D_LOGO_IMAGE},
      },
    },
    logoTitle: {
      description:
        'Logo 타이틀로 사용할 텍스트를 지정합니다.<br />(로고 이미지 옵션이 있는 경우 이미지가 우선시 됩니다)',
      control: {type: 'text'},
      table: {
        category: 'Navigation 속성',
        defaultValue: {summary: 'title'},
      },
    },
    useLogout: {
      description: '우측 상단 메뉴 목록으로 사용할 데이터를 지정 합니다.',
      control: {type: 'boolean'},
      table: {
        category: 'Navigation 속성',
        defaultValue: {summary: 'true'},
      },
    },
    menus: {
      description: '우측 상단 메뉴 목록으로 사용할 데이터를 지정 합니다.',
      control: {type: 'object'},
      table: {
        category: 'Navigation 속성',
      },
    },
  },
} as Meta<typeof Navigation>;

const Template: StoryObj<typeof Navigation> = {
  render: args => <Navigation {...args} />,
};

export const Default: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    logo: STD3D_LOGO_IMAGE,
    logoTitle: '',
    useLogout: true,
    menus: TEST_MENUS,
  },
};

export const Title: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    logo: '',
    logoTitle: 'title!',
    useLogout: true,
    menus: TEST_MENUS,
  },
};

export const UnUsedLogout: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    logo: '',
    logoTitle: 'Un Used Logout Button',
    useLogout: false,
    menus: TEST_MENUS,
  },
};
