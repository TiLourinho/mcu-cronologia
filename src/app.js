import express from "express";
import axios from "axios";

import { serverStart, fetchMedia, fetchMediaById } from "./utils/tools.js";
import {
  PORT,
  VIEWS_DIR,
  PUBLIC_DIR,
  MOVIE_BASE_URL,
  TV_BASE_URL,
  RENDER_OPTIONS,
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
  RENDER_OPTIONS.movieDb = await fetchMedia(movieDatabase, MOVIE_BASE_URL);

  res.status(200).render("movies", RENDER_OPTIONS);
});

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  RENDER_OPTIONS.movie = await fetchMediaById(id, MOVIE_BASE_URL);

  res.status(200).render("movies-details", RENDER_OPTIONS);
});

app.get("/series", async (_req, res) => {
  RENDER_OPTIONS.seriesDb = await fetchMedia(seriesDatabase, TV_BASE_URL);

  res.status(200).render("series", RENDER_OPTIONS);
});

app.get("/series/:id", async (req, res) => {
  const { id } = req.params;
  RENDER_OPTIONS.series = await fetchMediaById(id, TV_BASE_URL);

  res.status(200).render("series-details", RENDER_OPTIONS);
});

app.listen(PORT, (error) => serverStart(error, PORT));
