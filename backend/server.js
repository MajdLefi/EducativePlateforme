const express = require("express");
const path = require("path");
const app = express();
const authRouter = require("./routes/auth");
const bootcampRoutes = require("./routes/bootcamp");
const userRouter = require("./routes/user");

//Middleware
app.use(express.json());

//connect DB
const connectDB = require("./config/connectDB");
connectDB();

//use the routes

app.use("/api/auth", authRouter);
app.use("/", bootcampRoutes);
app.use("/", userRouter);

const port = process.env.PORT || 2000;

//heroku part
if (process.env.NODE_ENV === "production") {

  app.use(express.static("client/build"));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`The server is running on port ${port}`)
);
