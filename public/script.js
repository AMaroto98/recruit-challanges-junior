document
  .getElementById("fetchAssignments")
  .addEventListener("click", async () => {
    try {
      const response = await fetch("/assign");
      const assignments = await response.json();
      displayAssignments(assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  });

function displayAssignments(assignments) {
  const assignmentsDiv = document.getElementById("assignments");
  assignmentsDiv.innerHTML = "";

  const table = document.createElement("table");
  table.className = "assignments-table";

  const headerRow = document.createElement("tr");
  const clientHeader = document.createElement("th");
  clientHeader.textContent = "Client";
  const trainerHeader = document.createElement("th");
  trainerHeader.textContent = "Assigned Trainer";

  headerRow.appendChild(clientHeader);
  headerRow.appendChild(trainerHeader);
  table.appendChild(headerRow);

  for (const client in assignments) {
    const trainer = assignments[client];
    const row = document.createElement("tr");

    const clientCell = document.createElement("td");
    clientCell.textContent = client;

    const trainerCell = document.createElement("td");
    trainerCell.textContent = trainer ? trainer : "Trainer not available";

    row.appendChild(clientCell);
    row.appendChild(trainerCell);
    table.appendChild(row);
  }

  assignmentsDiv.appendChild(table);
}
