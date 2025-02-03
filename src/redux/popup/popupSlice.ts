import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  showPopup: boolean;
  showManualPopup: boolean;
}

const initialState: PopupState = {
  showPopup: true,
  showManualPopup: false
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state) => {
        state.showPopup = true;
    },
    closePopup: (state) => {
      state.showPopup = false;
    },
    openManualPopup: (state) => {
      state.showPopup = false;
      state.showManualPopup = true;
    },
    closeManualPopup: (state) => {
      state.showManualPopup = false;
    }
  }
});

export const { openPopup, closePopup, openManualPopup, closeManualPopup } = popupSlice.actions;
export default popupSlice.reducer;
