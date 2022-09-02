import { configureStore } from "@reduxjs/toolkit";
import NewsSlice from "../features/news/NewsSlice";
import carouselSlice from "../features/carouselSlice/CarouselSlice";
import NoticeSlice from "../features/noticeSlice/NoticeSlice";
import staffSidebarReducer from "../features/staffSidebar/staffSidebarSlice";
import authReducer from "../features/auth/authSllice";
import branchSlice from "../features/branch/branchSlice";
import downloadReducer from "../features/downloads/downloadSlice";
import aboutSlice from "../features/aboutSlice/aboutSlice";
import testimonialsSlice from "../features/testimonialsSlice/testimonialsSlice";

export const store = configureStore({
  reducer: {
    news: NewsSlice,
    carousel: carouselSlice,
    notice: NoticeSlice,
    staffSidebar: staffSidebarReducer,
    auth: authReducer,
    branch: branchSlice,
    downloads: downloadReducer,
    about: aboutSlice,
    testimonial: testimonialsSlice,
  },
});
