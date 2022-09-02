import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  data: [],
  loading: false,
  errorMessage: "",
};

export const fetchCarousel = createAsyncThunk(
  `carousel/fetchCarousel`,
  async () => {
    const response = await api.get("carousel/");
    return response.data;
  }
);

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchCarousel.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarousel.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default carouselSlice.reducer;
