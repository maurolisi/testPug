var compression = require("compression");
const express = require("express");
const app = express();
app.use(compression());
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/_views"));
app.use(express.static(__dirname + "/_static"));
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "codiceSegretoPerRecuperodeicockies",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  //res.render("default.ejs", { utente: req.session.user });
  res.redirect("/st");
});

//controllers:

require("./_controllers/ST.js")(app);
require("./_controllers/bbox.js")(app);
// app.get('*', (req, res) => {
//   var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
//   res.render("404.ejs",{page: fullUrl});
// });
app.listen(3001);
//#region FunzioniServer
//#endregion
