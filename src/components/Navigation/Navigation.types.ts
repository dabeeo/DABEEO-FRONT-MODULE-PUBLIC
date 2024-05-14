import {HTMLAttributes} from 'react';

export type NavMenuItem = {
  idx: number;
  name: string;
  path: string;
  subMenus?: NavMenuItem[];
};

export type NavMenuClickReturnData = {
  name: string;
  path: string;
};

export type NativeNavigationDivProps = HTMLAttributes<HTMLDivElement>;
