import type { ValuesOf } from 'src/types/common';

export const BuildMode = {
    DEV: 'development',
    PROD: 'production',
} as const;

export type BuildModeValue = ValuesOf<typeof BuildMode>;

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildModeValue;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    mode: BuildModeValue,
    port: number;
}
