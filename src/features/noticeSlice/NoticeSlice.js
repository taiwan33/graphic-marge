import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  data: [],
  loading: false,
  errorMessage: "",
};

// get notice

export const fetchNotice = createAsyncThunk(`notice/fetchNotice`, async () => {
  const response = await api.get("/notices/");
  return response.data;
});

const noticeSlice = createSlice({
  name: "notice",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.errorMessage = "";
      })
      .addCase(fetchNotice.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default noticeSlice.reducer;
