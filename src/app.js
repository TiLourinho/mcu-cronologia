import express from "express";
import axios from "axios";

import { serverStart, formatDate } from "./utils/tools.js";
import {
  PORT,
  VIEWS_DIR,
  PUBLIC_DIR,
  MOVIE_BASE_URL,
  TV_BASE_URL,
  IMAGE_BASE_URL,
  REQ_OPTIONS,
} from "./config/constants.js";
import { movieDatabase } from "./data/movieDatabase.js";
import { seriesDatabase } from "./data/seriesDatabase.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", VIEWS_DIR);

app.use(express.static(PUBLIC_DIR));

app.get("/", (_req, res) => {
  res.render("index");
});

app.get("/movies", async (_req, res) => {
  const config = {
    imageBaseUrl: IMAGE_BASE_URL,
    dateFormatter: formatDate,
  };

  try {
    const moviePromises = movieDatabase.map(async ({ id }) => {
      const url = `${MOVIE_BASE_URL}/${id}?language=pt-BR`;

      const response = await axios.get(url, REQ_OPTIONS);
      return response.data;
    });

    const movies = await Promise.all(moviePromises);
    config.movieDb = movies;
  } catch (error) {
    console.error(`Error fetching movie => ${error}`);
  }

  res.status(200).render("movies", config);
});

app.get("/series", async (_req, res) => {
  const config = {
    imageBaseUrl: IMAGE_BASE_URL,
    dateFormatter: formatDate,
  };

  try {
    const seriesPromises = seriesDatabase.map(async ({ id }) => {
      const url = `${TV_BASE_URL}/${id}?language=pt-BR`;

      const response = await axios.get(url, REQ_OPTIONS);
      return response.data;
    });

    const series = await Promise.all(seriesPromises);
    config.seriesDb = series;
  } catch (error) {
    console.error(`Error fetching movie => ${error}`);
  }

  res.status(200).render("series", config);
});

app.listen(PORT, (error) => serverStart(error, PORT));
