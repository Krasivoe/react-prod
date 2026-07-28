export type { ScrollSaveSchema } from '@/features/scroll-save/model/types/scrollSaveSchema';

export { getScrollByPath } from './model/selectors/scroll';

export { scrollSaveReducer, scrollSaveActions } from './model/slices/scrollSaveSlice';
