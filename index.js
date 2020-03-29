const path = require("path");
const express = require("express");

const app = express();

const hostname = "127.0.0.1";
const port = process.env.PORT || 5000;

const publicDir = path.join(__dirname, "./public");

app.use(express.static(publicDir));

app.get("/*", (req, res) => {
  res.send(
    '<h1 style="text-align: center;margin-top: 25%;">404 : Not Found</h1>'
  );
});

app.listen(port, hostname, () => {
  console.log(`Server is running on https://${hostname}:${port}`);
});
