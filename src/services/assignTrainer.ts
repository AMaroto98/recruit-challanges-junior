import { IClient } from "../interfaces/IClient";
import { ITrainer } from "../interfaces/ITrainer";

// I have decided to assign trainers to clients since clients have a preference based on reputation and the goal is to maximize client satisfaction.
export const assignTrainer = (trainers: ITrainer[], clients: IClient[]) => {
  clients.sort((a, b) => b.importanceReputation - a.importanceReputation);
  trainers.sort((a, b) => b.reputation - a.reputation);

  const assignmentsFinals: { [key: string]: string | null } = {};

  for (const client of clients) {
    let assignedTrainer = null;
    for (const trainer of trainers) {
      if (trainer.placesAvailable > 0) {
        assignedTrainer = trainer.name;
        trainer.placesAvailable--;
        break;
      }
    }
    assignmentsFinals[client.name] = assignedTrainer;
  }
  console.log(assignmentsFinals);
  return assignmentsFinals;
};
