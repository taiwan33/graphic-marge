import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "./newsService";

const initialState = {
  news: [],
  category: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMessage: "",
};

// get news
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (thunkAPI) => {
    try {
      return await newsService.getNews();
    } catch (error) {
      const detail =
        (error.response && error.response.data && error.response.data.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(detail);
    }
  }
);

// get category

export const fetchCategory = createAsyncThunk(
  "news/fetchCategory",
  async (thunkAPI) => {
    try {
      return await newsService.getCategory();
    } catch (error) {
      const detail =
        (error.response && error.response.data && error.response.data.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(detail);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      // fetch news
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
        state.isSuccess = true;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      // fetch category
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
        state.isSuccess = true;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default newsSlice.reducer;
