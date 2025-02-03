import { configureStore } from '@reduxjs/toolkit'
import selectedLocationReducer from '@/redux/selected-location/selectedLocationSlice'
import popupReducer from '@/redux/popup/popupSlice'

export const store = configureStore({
  reducer: {
    selectedLocation: selectedLocationReducer,
    popup: popupReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch