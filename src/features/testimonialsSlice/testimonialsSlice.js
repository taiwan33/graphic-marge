import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  data: [],
  loading: false,
  errorMessage: "",
};

export const fetchTestimonial = createAsyncThunk(
  `testimonial/fetchTestimonial`,
  async () => {
    const response = await api.get("/info/testimonials/");
    return response.data;
  }
);

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchTestimonial.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default testimonialSlice.reducer;
