const express = require("express");
const app = express();
const port = 3000;

app.get("/", (require, res) => {
  res.send("https://jsonplaceholder.typicode.com/users i can onley make the server but next step is dont very good for me");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
