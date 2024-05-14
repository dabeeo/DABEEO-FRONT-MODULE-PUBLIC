/* eslint-disable @typescript-eslint/no-unused-vars */
import {ArgTypes, Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {FiPlus, FiSearch} from 'react-icons/fi';

import {Stack} from '../Stack/Stack';
import {Button, ButtonProps} from './Button';
import {ColorScheme, Size, Variant} from './Button.types';

const controlNone: Partial<ArgTypes<ButtonProps>> = {
  size: {
    table: {
      disable: true,
    },
  },
  variant: {
    table: {
      disable: true,
    },
  },
  colorScheme: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'DABEEO/Component/Button',
  component: Button,
  parameters: {
    layout: 'centered', // Optional parameter to center the component in the Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '태그와 태그 사이의 내용을 나타냅니다.',
      table: {
        category: 'React <button> 속성',
      },
    },
    type: {
      description: '유형을 지정합니다.',
      table: {
        category: 'HTML <button> 속성',
        defaultValue: {summary: 'button'},
      },
      control: {type: 'select'},
    },
    size: {
      description: '크기를 지정합니다.',
      options: ['sm', 'md', 'lg'],
      control: {type: 'select'},
      table: {
        category: 'Button 속성',
        defaultValue: {summary: 'md'},
      },
    },
    variant: {
      description: '스타일을 지정합니다.',
      options: ['solid', 'outline'],
      control: {type: 'select'},
      table: {
        category: 'Button 속성',
        defaultValue: {summary: 'solid'},
      },
    },
    colorScheme: {
      description: '색을 지정합니다.',
      options: ['blue', 'black', 'red'],
      control: {type: 'select'},
      table: {
        category: 'Button 속성',
        defaultValue: {summary: 'blue'},
      },
    },
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  render: args => <Button {...args} />,
  args: {
    children: '기본버튼',
    type: 'button',
    size: 'md',
    variant: 'solid',
    colorScheme: 'blue',
  },
};

export const ButtonBasic: StoryObj<typeof Button> = {
  render: args => <Button {...args} />,
  args: {
    children: '기본버튼11111',
    type: 'button',
    size: 'md',
    variant: 'solid',
    colorScheme: 'blue',
  },
  parameters: {
    docs: {
      storyDescription: '기본 버튼 예제입니다.',
    },
  },
};

export const ButtonSizes: StoryObj<typeof Button> = {
  render: () => {
    const sizeArr: Size[] = ['sm', 'md', 'lg'];
    return (
      <Stack gap={8}>
        {sizeArr.map(size => (
          <Button key={size} size={size}>
            {size}
          </Button>
        ))}
      </Stack>
    );
  },
  argTypes: {
    ...controlNone,
  },
  parameters: {
    docs: {
      storyDescription: 'size 속성을 사용하여 크기를 변경합니다. sm, md, lg 로 설정할 수 있습니다.',
    },
  },
};

export const ButtonVariant: StoryObj<typeof Button> = {
  render: () => {
    const variantArr: Variant[] = ['solid', 'outline'];
    return (
      <Stack gap={8}>
        {variantArr.map(variant => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </Stack>
    );
  },
  argTypes: {
    ...controlNone,
  },
  parameters: {
    docs: {
      storyDescription: 'variant 속성을 사용하여 스타일을 변경합니다. solid, outline, ghost 로 설정할 수 있습니다.',
    },
  },
};

export const ButtonColorScheme: StoryObj<typeof Button> = {
  render: () => {
    const colorSchemeArr: ColorScheme[] = ['blue', 'black', 'red'];
    return (
      <Stack flexDirection={'row'} gap={8}>
        <Stack gap={8}>
          {colorSchemeArr.map(colorScheme => (
            <Button variant="solid" key={colorScheme} colorScheme={colorScheme}>
              solid {colorScheme}
            </Button>
          ))}
        </Stack>
        <Stack gap={8}>
          {colorSchemeArr.map(colorScheme => (
            <Button variant="outline" key={colorScheme} colorScheme={colorScheme}>
              outline {colorScheme}
            </Button>
          ))}
        </Stack>
      </Stack>
    );
  },
  argTypes: {
    ...controlNone,
  },
  parameters: {
    docs: {
      storyDescription: 'colorScheme 속성을 사용하여 색상을 변경합니다. blue, green, red, gray 로 설정할 수 있습니다.',
    },
  },
};

export const DisabledButton: StoryObj<typeof Button> = {
  render: () => {
    return (
      <Stack gap={8}>
        <Button variant="solid" disabled>
          Disabled
        </Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </Stack>
    );
  },
  argTypes: controlNone,
  parameters: {
    docs: {
      storyDescription: 'disabled 속성을 사용하여 활성화 여부를 변경합니다.',
    },
  },
};

export const IconButton: StoryObj<typeof Button> = {
  render: () => {
    const sizeArr: Size[] = ['sm', 'md', 'lg'];
    return (
      <Stack flexDirection={'column'} gap={8}>
        <Stack gap={8}>
          {sizeArr.map(size => (
            <Button key={size} size={size}>
              <FiPlus size="50%" />
            </Button>
          ))}
        </Stack>
        <Stack gap={8}>
          {sizeArr.map(size => (
            <Button key={size} size={size}>
              <FiPlus size="80%" />
            </Button>
          ))}
        </Stack>
        <Stack gap={8}>
          {sizeArr.map(size => (
            <Button key={size} size={size}>
              <FiPlus size="90%" />
            </Button>
          ))}
        </Stack>
      </Stack>
    );
  },
  argTypes: controlNone,
  parameters: {
    docs: {
      storyDescription: '아이콘 요소만 포함하여 아이콘 버튼을 생성할 수 있습니다.',
    },
  },
};

export const ButtonWithIcon: StoryObj<typeof Button> = {
  render: () => (
    <Stack gap={8}>
      <Button>
        검색
        <FiSearch />
      </Button>
      <Button>
        <FiSearch />
        검색
      </Button>
    </Stack>
  ),
  argTypes: {
    ...controlNone,
  },
  parameters: {
    docs: {
      storyDescription: '아이콘과 텍스트가 혼합된 버튼을 생성할 수 있습니다.',
    },
  },
};

export const ButtonClickEvent: StoryObj<typeof Button> = {
  render: () => <Button onClick={() => alert('Button clicked!')}>Click me!</Button>,
  argTypes: {
    ...controlNone,
  },
  parameters: {
    docs: {
      storyDescription: '아이콘의 클릭 이벤트 처리',
    },
  },
};
