import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};

export const staffSidebarSlice = createSlice({
  name: "staffSidebar",
  initialState,
  reducers: {
    isOpen: (state) => {
      state.value = !state.value;
    },
  },
});

export const { isOpen } = staffSidebarSlice.actions;
export default staffSidebarSlice.reducer;
