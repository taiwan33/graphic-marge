import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
import { saveAs } from "file-saver";
import ReactToPrint from "react-to-print";

const initialState = {
  downloads: [],
  isLoading: false,
  isError: false,
  isSucess: false,
};



// fetch download
export const fetchDownloads = createAsyncThunk(
  "downloads/fetchdownload",
  async () => {
    try {
      const response = await api.get("/downloads/");
      return response.data;
    } catch (error) {
      console.log("download fetch error");
    }
  }
);

const downloadSlice = createSlice({
  name: "downloads",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDownloads.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDownloads.fulfilled, (state, action) => {
        state.downloads = action.payload;
        state.isLoading = false;
        state.isSucess = true;
      })
      .addCase(fetchDownloads.rejected, (state, action) => {
        state.isError = true;
        console.log(`download rejected ${action.payload}`);
      });
  },
});

export default downloadSlice.reducer;
