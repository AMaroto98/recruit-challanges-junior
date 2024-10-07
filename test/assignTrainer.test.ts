import { IClient } from "../src/interfaces/IClient";
import { ITrainer } from "../src/interfaces/ITrainer";
import { assignTrainer } from "../src/services/assignTrainer";

describe("assignTrainer", () => {
  let trainers: ITrainer[];
  let clients: IClient[];

  beforeEach(() => {
    trainers = [
      { name: "A", reputation: 4.5, placesAvailable: 1 },
      { name: "B", reputation: 3.2, placesAvailable: 4 },
      { name: "C", reputation: 1.2, placesAvailable: 3 },
      { name: "D", reputation: 3.4, placesAvailable: 2 },
    ];

    clients = [
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
  });

  test("should assign clients to trainers based on reputation and availability", () => {
    const result = assignTrainer(trainers, clients);

    expect(result.q).toBe("C");
    expect(result.t).toBe("A");
    expect(result.s).toBe("D");
    expect(result.y).toBe("D");
  });

  test("should return null for clients when no trainer is available", () => {
    trainers.forEach((trainer) => {
      trainer.placesAvailable = 0;
    });

    const result = assignTrainer(trainers, clients);

    Object.values(result).forEach((assignment) => {
      expect(assignment).toBeNull();
    });
  });
});
