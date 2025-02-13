import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error in server setup => ${err}`);
  }

  console.log(`Server is listening on port ${PORT}`);
});
