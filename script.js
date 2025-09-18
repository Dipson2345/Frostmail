// DOM elements
const clientList = document.getElementById("clientList");
const subjectTemplate = document.getElementById("subjectTemplate");
const bodyTemplate = document.getElementById("bodyTemplate");
const sendBtn = document.getElementById("sendBtn");
const sentEmails = document.getElementById("sentEmails");
const aiSuggestBtn = document.getElementById("aiSuggestBtn");

// Retrieve sent emails from localStorage
let sent = JSON.parse(localStorage.getItem("sentEmails")) || [];
renderSentEmails();

// AI templates
const aiSubjects = [
  "Proposal for {name}: Boost Your Business Efficiency",
  "Collaboration Opportunity with {name}",
  "Quick Question Regarding {name}'s Project",
  "Helping {name} Achieve Their Goals Faster"
];
const aiBodies = [
  "Hi {name},\n\nI noticed your work and thought we could collaborate to achieve even better results. Let's discuss how I can help you.\n\nBest regards,\n[Your Name]",
  "Hello {name},\n\nI have some ideas that could really benefit your project. I’d love to share them and see if we can work together.\n\nCheers,\n[Your Name]",
  "Dear {name},\n\nI specialize in services that could boost your results significantly. Let me know if you’re interested in a quick chat.\n\nThank you,\n[Your Name]",
  "Hey {name},\n\nI have a proposal that could save time and increase efficiency for your team. Looking forward to connecting!\n\nRegards,\n[Your Name]"
];

// Send emails
sendBtn.addEventListener("click", () => {
  const clients = clientList.value.split("\n").map(c => c.trim()).filter(c => c);
  const subjectTemp = subjectTemplate.value.trim();
  const bodyTemp = bodyTemplate.value.trim();

  if (!clients.length || !subjectTemp || !bodyTemp) {
    alert("Please fill all fields");
    return;
  }

  clients.forEach(client => {
    const name = client.split("@")[0];
    const subject = subjectTemp.replace("{name}", capitalize(name));
    const body = bodyTemp.replace(/{name}/g, capitalize(name));
    const email = { client, subject, body, timestamp: new Date().toLocaleString() };
    sent.unshift(email);
  });

  localStorage.setItem("sentEmails", JSON.stringify(sent));
  renderSentEmails();
  clientList.value = ""; subjectTemplate.value = ""; bodyTemplate.value = "";
  alert("Emails generated & sent successfully!");
});

// Render sent emails
function renderSentEmails() {
  sentEmails.innerHTML = "";
  sent.forEach(email => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${email.client}</strong><br>${email.subject}<br>${email.body}`;
    sentEmails.appendChild(li);
  });
}

// AI Suggest
aiSuggestBtn.addEventListener("click", () => {
  const randomSubject = aiSubjects[Math.floor(Math.random() * aiSubjects.length)];
  const randomBody = aiBodies[Math.floor(Math.random() * aiBodies.length)];
  subjectTemplate.value = randomSubject.replace("{name}", "Client");
  bodyTemplate.value = randomBody.replace(/{name}/g, "Client");
  alert("AI suggested a professional subject & body! You can edit if needed.");
});

// Capitalize helper
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }

// Snowflake animation
const snowContainer = document.querySelector(".snow");
for (let i = 0; i < 30; i++) {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = Math.random() * 100 + "%";
  snowflake.style.animationDuration = 5 + Math.random() * 5 + "s";
  snowflake.style.fontSize = 12 + Math.random() * 12 + "px";
  snowContainer.appendChild(snowflake);
}
