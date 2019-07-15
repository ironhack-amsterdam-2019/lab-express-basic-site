const express = require('express');
const app = express();
const path = require('path');
var hbs = require('hbs');

app.use(express.static("static"))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", function (req, res) {
  res.render("home.hbs")
})

app.get("/contact", function (req, res) {
  res.render("contact.hbs")
})

app.get("/about", function (req, res) {
  res.render("about.hbs")
})

app.listen(3000);
