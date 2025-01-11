import axios from "axios";

const API_URL = "https://kitsu.io/api/edge";

export const fetchAnimeList = async (page: number = 1, limit: number = 10) => {
  const response = await axios.get(`${API_URL}/anime`, {
    params: {
      "page[limit]": limit,
      "page[offset]": (page - 1) * limit,
    },
  });
  return response.data;
};

export const fetchAnimeDetail = async (id: string) => {
  const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch anime details");
  }
  return response.json();
};
