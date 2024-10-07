import express from "express";
import { assignTrainer } from "./services/assignTrainer";
import { IClient } from "./interfaces/IClient";
import { ITrainer } from "./interfaces/ITrainer";
import path from "path";

const app = express();
const port = 3000;

// Middleware to parse json
app.use(express.static(path.join(__dirname, "../public")));

const trainers: ITrainer[] = [
  { name: "A", reputation: 4.5, placesAvailable: 1 },
  { name: "B", reputation: 3.2, placesAvailable: 4 },
  { name: "C", reputation: 1.2, placesAvailable: 3 },
  { name: "D", reputation: 3.4, placesAvailable: 2 },
];

const clients: IClient[] = [
  { name: "q", importanceReputation: 2.6 },
  { name: "r", importanceReputation: 3.7 },
  { name: "s", importanceReputation: 8.5 },
  { name: "t", importanceReputation: 9.7 },
  { name: "u", importanceReputation: 2.6 },
  { name: "v", importanceReputation: 4.7 },
  { name: "w", importanceReputation: 5.6 },
  { name: "x", importanceReputation: 3.7 },
  { name: "y", importanceReputation: 8.1 },
  { name: "z", importanceReputation: 2.5 },
];

app.get("/assign", (req, res) => {
  const assignments = assignTrainer(trainers, clients);
  res.json(assignments);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
