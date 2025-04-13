// Update Timestamp
function updateTimestamp() {
    const now = new Date();
    const timestamp = now.toLocaleString();
    document.getElementById('timestamp').textContent = timestamp;
  }
  setInterval(updateTimestamp, 1000);
  
  // Handle Form Submission
  document.getElementById('fine-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Get Form Data
    const licensePlate = document.getElementById('license-plate').value;
    const fineReason = document.getElementById('fine-reason').value;
    const fineAmount = document.getElementById('fine-amount').value;
    const notes = document.getElementById('notes').value;
  
    // Validate Form Data
    if (!licensePlate || !fineReason || !fineAmount) {
      alert('Please fill in all required fields.');
      return;
    }
  
    // Create Fine Object
    const fine = {
      licensePlate,
      fineReason,
      fineAmount,
      notes,
      timestamp: new Date().toLocaleString(),
    };
  
    // Save Fine (Mock Implementation)
    saveFine(fine);
  
    // Clear Form
    document.getElementById('fine-form').reset();
  
    // Notify User
    alert('Fine submitted successfully!');
  });
  
  // Mock Function to Save Fine
  function saveFine(fine) {
    console.log('Fine Saved:', fine);
    // In a real application, send this data to the backend via an API.
  }