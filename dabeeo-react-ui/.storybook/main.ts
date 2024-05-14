import type {StorybookConfig} from '@storybook/react-vite';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';
import {join, dirname, resolve} from 'path';
import {mergeConfig} from 'vite';

const toPath = (_path: string) => join(process.cwd(), _path)

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
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
          '@src': toPath('src'),
          '@assets': toPath('src/assets'),
          '@components': toPath('src/components'),
          '@utils': toPath('src/utils'),
        },
      }
    });
  },
};

export default config;
