import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
    type BuildEnv, BuildMode, type BuildPaths,
} from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || BuildMode.DEV;
    const PORT = env.port || 3000;

    const isDev = mode === BuildMode.DEV;
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        apiUrl,
        port: PORT,
        project: 'frontend',
    });
};
