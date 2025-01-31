import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface selectedLocationState {
  selectedLocation: string
}

const initialState: selectedLocationState = {
  selectedLocation: "",
}

export const selectedLocationSlice = createSlice({
  name: 'selectedLocation',
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedLocation } = selectedLocationSlice.actions

export default selectedLocationSlice.reducer