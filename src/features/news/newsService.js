import api from "../../api/api";

// get news
const getNews = async () => {
  const response = await api.get("news/");
  return response.data;
};

const getCategory = async () => {
  const response = await api.get("news/categories/");
  return response.data;
};

const newsService = { getNews, getCategory };

export default newsService;
