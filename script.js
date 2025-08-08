// Sample Jobs Data
const jobs = [
  {
    company: "Google",
    role: "Frontend Developer Intern",
    location: "Bangalore",
    type: "Remote"
  },
  {
    company: "TCS",
    role: "Web Developer Intern",
    location: "Mumbai",
    type: "In-office"
  },
  {
    company: "Zoho",
    role: "UI Designer Intern",
    location: "Chennai",
    type: "Remote"
  },
  { company: "Deloitte", 
    role: "Business Analyst Intern",
     location: "Pune", 
     type: "Remote", 
     category: "Business"
 },
  { company: "Times Group",
     role: "Content Writer Intern", 
     location: "Delhi", 
     type: "Remote", 
     category: "Arts"
 },
  { company: "Amazon",
     role: "Marketing Intern", 
     location: "Bangalore",
      type: "Remote", 
      category: "Business" 
},
  { company: "Wipro",
     role: "Cyber Security Intern", 
     location: "Hyderabad", 
     type: "In-office",
      category: "IT"
     },
];

// DOM Elements
const jobContainer = document.getElementById("jobContainer");
const searchInput = document.getElementById("searchInput");

// Display Jobs
function displayJobs(filteredJobs) {
  jobContainer.innerHTML = "";

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <h2>${job.role}</h2>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <button class="apply-btn">Apply</button>
      <button class="save-btn">Save</button>
    `;

    // Apply Button
    const applyBtn = card.querySelector(".apply-btn");
    applyBtn.addEventListener("click", () => {
      openModal();
    });

    // Save Button
    const saveBtn = card.querySelector(".save-btn");
    saveBtn.addEventListener("click", () => {
      saveJob(job);
    });

    jobContainer.appendChild(card);
  });
}

// Search Filter
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.role.toLowerCase().includes(searchText) ||
    job.location.toLowerCase().includes(searchText)
  );
  displayJobs(filtered);
});

// Save Job to localStorage
function saveJob(job) {
  let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

  const isAlreadySaved = savedJobs.some(saved =>
    saved.role === job.role && saved.company === job.company
  );

  if (isAlreadySaved) {
    alert("Job already saved!");
    return;
  }

  savedJobs.push(job);
  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  alert("Job saved successfully!");
  console.log("Saved Jobs: ", savedJobs);
}

// Apply Modal Logic
const modal = document.getElementById("applyModal");
const closeModalBtn = document.getElementById("closeModal");
const applyForm = document.getElementById("applyForm");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// Close modal on X button
closeModalBtn.addEventListener("click", closeModal);

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// On form submit
applyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Application Sent Successfully!");

  applyForm.reset();
  closeModal();
});

// Initial Display
displayJobs(jobs);
