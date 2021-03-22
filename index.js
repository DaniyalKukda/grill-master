const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const grill = require("./sample/grill");

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars.create({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  }).engine
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.get("/fetch-grill", (req, res) => {
  return res.json(grill.sampleGrillJson());
});

app.listen(port, () => console.log(`App listening to port ${port}`));
