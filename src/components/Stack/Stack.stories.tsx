/* eslint-disable @typescript-eslint/no-unused-vars */
import {ArgTypes, Meta, StoryObj} from '@storybook/react';
import React from 'react';

import {Stack, StackProps} from './Stack';

const controlNone: Partial<ArgTypes<StackProps>> = {
  flexDirection: {
    table: {
      disable: true,
    },
  },
  justifyContent: {
    table: {
      disable: true,
    },
  },
  alignItems: {
    table: {
      disable: true,
    },
  },
  gap: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'DABEEO/Component/Stack',
  component: Stack,
  parameters: {
    layout: 'centered', // Optional parameter to center the component in the Canvas
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '태그와 태그 사이의 내용을 나타냅니다.',
      table: {
        category: 'React <div> 속성',
      },
    },
    flexDirection: {
      description: '배치 방향을 지정합니다.',
      options: ['row', 'column'],
      control: {type: 'select'},
      table: {
        category: 'Stack 속성',
        defaultValue: {summary: 'row'},
      },
    },
    justifyContent: {
      description: '메인축 방향 정렬을 지정합니다.',
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
      control: {type: 'select'},
      table: {
        category: 'Stack 속성',
        defaultValue: {summary: 'start'},
      },
    },
    alignItems: {
      description: '수직축 방향 정렬을 지정합니다.',
      options: ['flex-start', 'center', 'flex-end', 'stretch'],
      control: {type: 'select'},
      table: {
        category: 'Stack 속성',
        defaultValue: {summary: 'stretch'},
      },
    },
    gap: {
      description: '간격을 지정합니다',
      control: {type: 'number'},
      table: {
        category: 'Stack 속성',
        defaultValue: {summary: '8'},
      },
    },
  },
} as Meta<typeof Stack>;

const Template: StoryObj<typeof Stack> = {
  render: args => <Stack {...args} />,
};

export const Default: StoryObj<typeof Stack> = {
  ...Template,
  args: {
    children: (
      <>
        <span style={{backgroundColor: 'tomato', fontSize: '30px'}}>AAA</span>
        <span style={{backgroundColor: 'tomato', fontSize: '14px'}}>BBBBBB</span>
        <span style={{backgroundColor: 'tomato', fontSize: '50px'}}>CC</span>
      </>
    ),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
};

export const StackBasic: StoryObj<typeof Stack> = {
  render: args => (
    <Stack {...args}>
      <span style={{backgroundColor: 'tomato', fontSize: '30px'}}>AAA</span>
      <span style={{backgroundColor: 'tomato', fontSize: '14px'}}>BBBBBB</span>
      <span style={{backgroundColor: 'tomato', fontSize: '50px'}}>CC</span>
    </Stack>
  ),
  args: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};

export const StackFlexDirection: StoryObj<typeof Stack> = {
  render: args => (
    <Stack {...args}>
      <span style={{backgroundColor: 'tomato', fontSize: '30px'}}>AAA</span>
      <span style={{backgroundColor: 'tomato', fontSize: '14px'}}>BBBBBB</span>
      <span style={{backgroundColor: 'tomato', fontSize: '50px'}}>CC</span>
    </Stack>
  ),
  args: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  parameters: {
    docs: {
      description: {
        story: 'flexDirection 속성을 사용하여 배치 방향을 변경합니다.',
      },
    },
  },
};

export const StackJustifyContent: StoryObj<typeof Stack> = {
  render: () => (
    <Stack flexDirection="column" gap={16}>
      <Stack gap={8}>
        <Stack
          justifyContent="start"
          style={{fontSize: '20px', width: '100px', height: '100px', backgroundColor: 'tomato'}}
        >
          AAA
        </Stack>
        <Stack
          justifyContent="center"
          style={{fontSize: '20px', width: '100px', height: '100px', backgroundColor: 'tomato'}}
        >
          BBB
        </Stack>
        <Stack
          justifyContent="end"
          style={{fontSize: '20px', width: '100px', height: '100px', backgroundColor: 'tomato'}}
        >
          CCC
        </Stack>
      </Stack>
      <Stack
        justifyContent="space-between"
        style={{fontSize: '20px', width: '316px', height: '100px', backgroundColor: 'tomato'}}
      >
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>one</Stack>
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>two</Stack>
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>three</Stack>
      </Stack>
      <Stack
        justifyContent="space-around"
        style={{fontSize: '20px', width: '316px', height: '100px', backgroundColor: 'tomato'}}
      >
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>one</Stack>
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>two</Stack>
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>three</Stack>
      </Stack>
      <Stack
        justifyContent="space-evenly"
        style={{fontSize: '20px', width: '316px', height: '100px', backgroundColor: 'tomato'}}
      >
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>one</Stack>
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>two</Stack>
        <Stack style={{fontSize: '10px', width: '40px', height: '40px', backgroundColor: 'skyblue'}}>three</Stack>
      </Stack>
    </Stack>
  ),
  argTypes: {
    ...controlNone,
  },
  parameters: {
    docs: {
      description: {
        story: 'justifyContent 속성을 사용하여 메인축 방향 정렬을 변경합니다.',
      },
    },
  },
};

export const StackAlignItems: StoryObj<typeof Stack> = {
  render: () => (
    <Stack gap={8}>
      <Stack
        alignItems="flex-start"
        style={{fontSize: '20px', width: '100px', height: '100px', backgroundColor: 'tomato'}}
      >
        flex-start
      </Stack>
      <Stack alignItems="center" style={{fontSize: '20px', width: '100px', height: '100px', backgroundColor: 'tomato'}}>
        center
      </Stack>
      <Stack
        alignItems="flex-end"
        style={{fontSize: '20px', width: '100px', height: '100px', backgroundColor: 'tomato'}}
      >
        flex-end
      </Stack>
      <Stack
        alignItems="stretch"
        style={{fontSize: '20px', width: '100px', height: '100px', backgroundColor: 'tomato'}}
      >
        stretch
      </Stack>
    </Stack>
  ),
  argTypes: {
    ...controlNone,
  },
  parameters: {
    docs: {
      description: {
        story: 'alignItems 속성을 사용하여 수직축 방향 정렬을 변경합니다.',
      },
    },
  },
};

export const StackGap: StoryObj<typeof Stack> = {
  render: args => (
    <Stack {...args}>
      <span style={{backgroundColor: 'tomato', fontSize: '30px'}}>AAA</span>
      <span style={{backgroundColor: 'tomato', fontSize: '14px'}}>BBBBBB</span>
      <span style={{backgroundColor: 'tomato', fontSize: '50px'}}>CC</span>
    </Stack>
  ),
  args: {
    gap: 10,
  },
  argTypes: {
    flexDirection: {
      table: {
        disable: true,
      },
    },
    justifyContent: {
      table: {
        disable: true,
      },
    },
    alignItems: {
      table: {
        disable: true,
      },
    },
    gap: {
      description: '간격을 지정합니다.',
      control: 'number',
      table: {
        category: 'Stack 속성',
        defaultValue: {summary: '50'},
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'gap 속성을 사용하여 간격을 변경합니다.',
      },
    },
  },
};
