const express = require("express");
const Blog = require("./databaseSchema/blogSchema");
const connectDB = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "./.env") });
const PORT = process.env.PORT || 5000;
connectDB();

console.log(process.env.PORT);

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

app.get("/", async (req, res) => {
  try {
    const ads = await Blog.find();

    res.status(200).json({
      success: true,
      count: ads.length,
      data: ads,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "server error" });
  }
});

app.post("/create", (req, res) => {
  console.log("body", req.body);
  const myData = new Blog(req.body);
  myData
    .save()
    .then((item) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
});

app.delete("/delete/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
});

app.put("/update/:id", (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((item) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(404).json({ error: err });
    });
});
