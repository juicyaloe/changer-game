import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice";
import topBarReducer from "./topBarSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    topBar: topBarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
