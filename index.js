/*import express, { response } from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://programming-quotesapi.vercel.app/api/random");
    res.render("index.ejs", {
      quote: result.data.quote,
      author: result.data.author,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 */

/*
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    // Use Quotable API
    const result = await axios.get("https://api.quotable.io/random");

    res.render("index", {
      quote: result.data.content, // updated key
      author: result.data.author, // updated key
    });
  } catch (error) {
    console.error("Error fetching quote:", error.message);
    res.status(500).send("Something went wrong!");
  }
});
app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://api.quotable.io/random");

    res.render("index", {
      quote: result.data.content,
      author: result.data.author,
    });
  } catch (error) {
    console.error("⚠️ API failed. Falling back to local quote.");
    res.render("index", {
      quote: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

*/


import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

const quotes = [
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  }
];

app.get("/", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.render("index", {
    quote: random.quote,
    author: random.author,
  });
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
