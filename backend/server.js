const express = require("express");
const Blog = require("./databaseSchema/blogSchema");
const connectDB = require("./db");
const cors = require("cors");

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())

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

// const dummyData = {
//   title: "Lizard",
//   description:
//     "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
// };

// const myData = new Blog(dummyData);
// myData
//   .save()
//   .then((item) => {
//     console.log("item saved to database");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
