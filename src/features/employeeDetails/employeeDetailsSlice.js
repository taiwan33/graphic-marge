import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  data: [],
  loading: false,
  errorMessage: "",
};

export const fetchEmployeeDetails = createAsyncThunk(
  `employeeDetails/fetchEmployeeDetails`,
  async () => {
    const response = await api.get("employeeDetails/");
    return response.data;
  }
);

const employeeDetailsSlice = createSlice({
  name: "employeeDetails",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(fetchEmployeeDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployeeDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default employeeDetailsSlice.reducer;
