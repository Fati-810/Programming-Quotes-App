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
