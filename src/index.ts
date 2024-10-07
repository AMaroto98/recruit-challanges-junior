import { ITrainer } from "./interfaces/ITrainer";
import { IClient } from "./interfaces/IClient";
import { assignTrainer } from "./services/assignTrainer";

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

assignTrainer(trainers, clients);
