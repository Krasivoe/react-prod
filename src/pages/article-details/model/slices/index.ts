import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer: Reducer<ArticleDetailsPageSchema> = combineReducers({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
