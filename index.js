const express = require('express');
const app = express();
const path = require('path');
var hbs = require('hbs');

app.use(express.static("static"))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

let images = {
  images: [{
      src: "assets/images/kitty1.jpeg",
      title: "Kitty 1"
    },
    {
      src: "assets/images/kitty2.jpeg",
      title: "Kitty 2"
    }
  ]
}

app.get("/", function (req, res) {
  res.render("home.hbs")
})

app.get("/gallery", function (req, res) {
  res.render("gallery.hbs", images)
})

app.get("/about", function (req, res) {
  res.render("about.hbs")
})

app.listen(3000);