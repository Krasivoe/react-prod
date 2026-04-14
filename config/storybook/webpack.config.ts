import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

interface StorybookConfig {
    config: webpack.Configuration;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({ config }: StorybookConfig) => {
    const srcPath: BuildPaths['src'] = path.resolve(__dirname, '..', '..', 'src');

    if (config.resolve) {
        config.resolve.modules?.push(srcPath);

        // eslint-disable-next-line no-param-reassign
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '@': srcPath,
        };

        config.resolve.extensions?.push('.ts', '.tsx');
    }

    // eslint-disable-next-line no-param-reassign
    config.module!.rules = config.module!.rules!.map((rule) => {
        if ((typeof rule !== 'object' || rule === null)) return rule;

        if (rule.test && /svg/.test(rule.test.toString())) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules?.push(buildSvgLoader());
    config.module.rules?.push(buildCssLoader(true));

    return config;
};
