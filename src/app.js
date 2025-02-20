import express from "express";
import axios from "axios";

import { serverStart, formatDate } from "./utils/tools.js";
import {
  PORT,
  VIEWS_DIR,
  PUBLIC_DIR,
  BASE_URL,
  IMAGE_BASE_URL,
  REQ_OPTIONS,
} from "./config/constants.js";
import { database } from "./data/database.js";

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
    const moviePromises = database.map(async ({ id }) => {
      const url = `${BASE_URL}/${id}?language=pt-BR`;

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

app.listen(PORT, (error) => serverStart(error, PORT));
