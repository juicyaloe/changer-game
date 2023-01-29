import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import popupReducer from './popupSlice';
import topBarReducer from './topBarSlice';
import authReducer from './authSlice';

const reducers = combineReducers({
  popup: popupReducer,
  topBar: topBarReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// exported Store
export const store = configureStore({
  reducer: persistedReducer,
});

// Main Store
const _store = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof _store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof _store.dispatch;
