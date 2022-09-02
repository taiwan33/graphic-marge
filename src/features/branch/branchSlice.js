import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  data: [],
  loading: false,
  errorMessage: null,
};

export const fetchBranch = createAsyncThunk(`branch/fetchBranch`, async () => {
  const response = await api.get("/users/branches/");
  return response.data;
});

const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchBranch.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.errorMessage = "";
      })
      .addCase(fetchBranch.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default branchSlice.reducer;
