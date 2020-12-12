const express = require("express");
const path = require("path");
const app = express();

const mongoose = require("mongoose");
MONGODB_URI =
  "mongodb+srv://Piyush123:Piyush123@cluster0.v594s.mongodb.net/ClubDatabase";

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs"); //ejs ka engine use ho rha h ye btaya
app.set("views", "views"); //folder btaya k apne ejs ki files eske andar rakhi h pahala views represent kar rha h k ham ejs ki location de rhe h and dusara folder ka nam

const Homepage = require("./routes/Homepage");

app.use(Homepage);

mongoose
  .connect(MONGODB_URI) //mongoose database connect ho jaye
  .then((result) => {
    //than tab hi server on ho
    app.listen(9000);
  })
  .catch((err) => {
    console.log(err);
  });
