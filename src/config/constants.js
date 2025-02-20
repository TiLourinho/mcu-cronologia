import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { formatDate } from "../utils/tools.js";

const appPath = fileURLToPath(import.meta.url);
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDAwZGVlMzU3OTg1OWZlNmY0NzEwYjI2YTBhZDc0ZCIsIm5iZiI6MTY1MTA4MDQ5Ny4wODQsInN1YiI6IjYyNjk3ZDMxMTU4Yzg1MzVjMDkxZTEyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SljCeWh1aWHOEABKMu5un_vZV61Co3faEy12hUS-PZo";

export const PORT = 3000;
export const MOVIE_BASE_URL = "https://api.themoviedb.org/3/movie";
export const TV_BASE_URL = "https://api.themoviedb.org/3/tv";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
export const REQ_OPTIONS = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
export const RENDER_OPTIONS = {
  imageBaseUrl: IMAGE_BASE_URL,
  dateFormatter: formatDate,
};
export const ROOT_DIR = dirname(appPath).replace("/config", "");
export const VIEWS_DIR = path.join(ROOT_DIR, "views");
export const PUBLIC_DIR = path.join(ROOT_DIR, "public");
