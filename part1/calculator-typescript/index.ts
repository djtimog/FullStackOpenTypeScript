import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { isNotNumber } from "./notANumber";

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  if (isNotNumber(height) || isNotNumber(weight)) {
    res.json({
      error: "malformatted parameters",
    });
    return;
  }

  const bmi = calculateBmi(Number(weight), Number(height));

  res.json({ height, weight, bmi });
});

app.listen("3003", () => {
  console.log("server running on http://localhost:3003");
});
