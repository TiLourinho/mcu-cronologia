import axios from "axios";

import { REQ_OPTIONS } from "../config/constants.js";

export function serverStart(error, port) {
  if (error) {
    console.log(`Error in server setup => ${err}`);
  }

  console.log(`Server is listening on port ${port}`);
}

export function formatDate(date) {
  let [year, month, day] = date.split("-");

  switch (month) {
    case "01":
      month = "janeiro";
      break;

    case "02":
      month = "fevereiro";
      break;

    case "03":
      month = "março";
      break;

    case "04":
      month = "abril";
      break;

    case "05":
      month = "maio";
      break;

    case "06":
      month = "junho";
      break;

    case "07":
      month = "julho";
      break;

    case "08":
      month = "agosto";
      break;

    case "09":
      month = "setembro";
      break;

    case "10":
      month = "outubro";
      break;

    case "11":
      month = "novembro";
      break;

    case "12":
      month = "dezembro";
      break;

    default:
      break;
  }

  return `${day} de ${month} de ${year}`;
}

export function formatMediaLength(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}h ${minutes}m`;
}

export function formatMonetaryValues(value) {
  const result = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);

  return result;
}

export async function fetchMedia(database, baseUrl) {
  try {
    const mediaPromises = database.map(async ({ id }) => {
      const url = `${baseUrl}/${id}?language=pt-BR`;

      const { data } = await axios.get(url, REQ_OPTIONS);
      return data;
    });

    const media = await Promise.all(mediaPromises);
    return media;
  } catch (error) {
    console.error(`Error fetching media => ${error}`);
  }
}

export async function fetchMediaById(id, baseUrl) {
  const url = `${baseUrl}/${id}?language=pt-BR`;

  try {
    const response = await axios.get(url, REQ_OPTIONS);
    const { data } = response;

    return data;
  } catch (error) {
    console.error(`Error fetching media => ${error}`);
  }
}
