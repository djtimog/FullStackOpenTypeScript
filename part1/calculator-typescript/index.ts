import express from "express";

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Full Stack!");
});

app.listen("3000", () => {
  console.log("server running on http://localhost:3000");
});
