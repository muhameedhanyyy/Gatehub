// script.js
// Function to update live timestamp
const updateTimestamp = () => {
  const timestampEl = document.getElementById("live-timestamp");
  setInterval(() => {
    const now = new Date();
    timestampEl.textContent = now.toLocaleString();
  }, 1000);
};

// Function to display current vehicle details
const updateCurrentVehicleDetails = (vehicle) => {
  document.getElementById("license-plate").textContent = vehicle.licensePlate;
  document.getElementById("vehicle-details").textContent = `${vehicle.model}, ${vehicle.color}, ${vehicle.type}`;
  document.getElementById("owner-name").textContent = vehicle.ownerName || "Unknown";
  document.getElementById("entry-timestamp").textContent = vehicle.timestamp;
  document.getElementById("gate-number").textContent = vehicle.gateNumber;
};

// Function to add a vehicle to the Recently Passed Vehicles table
const addToRecentlyPassed = (vehicle) => {
  const table = document.getElementById("recent-vehicles-table");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${vehicle.licensePlate}</td>
    <td>${vehicle.model}</td>
    <td>${vehicle.timestamp}</td>
    <td><span class="alert-indicator ${vehicle.alert ? 'red' : 'green'}">${vehicle.alert || 'No Issues'}</span></td>
  `;

  table.appendChild(row);
};

// Simulate vehicle data
const vehicles = [
  {
    licensePlate: "ABC123",
    model: "Toyota Camry",
    color: "Blue",
    type: "Sedan",
    ownerName: "John Doe",
    timestamp: "12:44:00 PM",
    gateNumber: "Gate 1",
    alert: "Expired License",
  },
  {
    licensePlate: "XYZ789",
    model: "Honda Accord",
    color: "Black",
    type: "Sedan",
    ownerName: "Jane Smith",
    timestamp: "12:45:00 PM",
    gateNumber: "Gate 2",
    alert: null,
  },
  {
    licensePlate: "LMN456",
    model: "Tesla Model 3",
    color: "Red",
    type: "Electric",
    ownerName: "Michael Brown",
    timestamp: "12:46:00 PM",
    gateNumber: "Gate 3",
    alert: null,
  },
];

// Initialize page
const init = () => {
  updateTimestamp();

  // Update the current vehicle details with the first vehicle
  updateCurrentVehicleDetails(vehicles[0]);

  // Add the remaining vehicles to Recently Passed Vehicles
  vehicles.slice(1).forEach(addToRecentlyPassed);
};

// Run initialization
init();

// Simulate live timestamp
const timestampEl = document.getElementById("live-timestamp");
setInterval(() => {
  const now = new Date();
  timestampEl.textContent = now.toLocaleString();
}, 1000);

// Modal for adding fine
const fineModal = document.getElementById("fine-modal");
const fineBtn = document.getElementById("add-fine-btn");
const cancelFineBtn = document.getElementById("cancel-fine-btn");

fineBtn.addEventListener("click", () => fineModal.classList.remove("hidden"));
cancelFineBtn.addEventListener("click", () => fineModal.classList.add("hidden"));

// Example: Add a vehicle to recent list
const recentVehiclesTable = document.getElementById("recent-vehicles-table");
function addRecentVehicle(plate, model, timestamp, alert) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${plate}</td>
    <td>${model}</td>
    <td>${timestamp}</td>
    <td>${alert ? `<span class="alert">${alert}</span>` : "None"}</td>
  `;
  recentVehiclesTable.appendChild(row);
}

// Example call to add recent vehicles
addRecentVehicle("ABC-123", "Toyota Corolla", "2025-01-05 12:34:56", "Expired License");
