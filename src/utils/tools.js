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
