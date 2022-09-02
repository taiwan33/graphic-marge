import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  data: [],
  loading: false,
  errorMessage: "",
};

// get notice

export const fetchAbout = createAsyncThunk(`about/fetchAbout`, async () => {
  const response = await api.get("/info/about-us/descriptions/");
  return response.data;
});

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchAbout.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAbout.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.errorMessage = "";
      })
      .addCase(fetchAbout.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default aboutSlice.reducer;
