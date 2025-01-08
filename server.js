const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { SignUp, Login } = require("./home")
const app = express();

const port = 3000;
const DBURl =
  "mongodb+srv://mchsallu87:XAWkMQvtDUzHhFg2@cluster0.chfuf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DBURl, {})
  .then(() => console.log("DB is connected succefully"));
const server = http.createServer(app);

app.post("/signup", SignUp);
app.post("/login", Login);
server.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
