import type {StorybookConfig} from '@storybook/react-vite';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';
import {join, dirname, resolve} from 'path';
import {mergeConfig} from 'vite';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async config => {
    const configWithTsPaths = mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });

    return mergeConfig(configWithTsPaths, {
      resolve: {
        alias: {
          '@emotion/core': 'node_modules/@emotion/react',
          '@emotion/styled': 'node_modules/@emotion/styled',
          'emotion-theming': 'node_modules/@emotion/react',
          '@src': resolve(__dirname, '../src'),
          '@assets': resolve(__dirname, '../src/assets'),
          '@components': resolve(__dirname, '../src/components'),
          '@utils': resolve(__dirname, '../src/utils'),
        },
      },
      esbuild: {
        jsxFactory: `jsx`,
        jsxInject: `import { jsx } from '@emotion/react'`,
      },
    });
  },
};

export default config;
