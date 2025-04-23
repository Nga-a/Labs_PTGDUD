import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toolkitReducer from './counterSlice';
import legacyReducer from './legacyReducer';

const rootReducer = combineReducers({
  toolkit: toolkitReducer,
  legacy: legacyReducer
});

export const store = configureStore({
  reducer: rootReducer
});