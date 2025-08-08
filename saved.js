const savedContainer = document.getElementById("savedJobsContainer");

function loadSavedJobs() {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

  if (savedJobs.length === 0) {
    savedContainer.innerHTML = "<p style='text-align:center'>No jobs saved yet.</p>";
    return;
  }

  savedJobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <h2>${job.role}</h2>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
    `;

    savedContainer.appendChild(card);
  });
}

loadSavedJobs();
