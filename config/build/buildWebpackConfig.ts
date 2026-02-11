import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import type { BuildOptions } from './types/config';

const OUTPUT_FILE_NAME = '[name].[contenthash].js';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: OUTPUT_FILE_NAME,
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };

};
