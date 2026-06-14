import type { ValuesOf } from '@/shared/types/common';

export const BuildMode = {
    DEV: 'development',
    PROD: 'production',
} as const;

export type BuildModeValue = ValuesOf<typeof BuildMode>;

export type ProjectVariableValue = 'frontend' | 'storybook' | 'jest';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildModeValue;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: ProjectVariableValue;
}

export interface BuildEnv {
    mode: BuildModeValue,
    port: number;
    apiUrl: string;
}
