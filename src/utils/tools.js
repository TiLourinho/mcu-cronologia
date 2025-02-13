export function serverStart(error, port) {
  if (error) {
    console.log(`Error in server setup => ${err}`);
  }

  console.log(`Server is listening on port ${port}`);
}
