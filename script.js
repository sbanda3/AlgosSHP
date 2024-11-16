// scripts.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skills = document.getElementById("skills").value;
  const availability = document.getElementById("availability").value;

  alert(`Thank you for signing up, ${name}! We'll connect you with opportunities soon.`);
  // Later: Send data to backend using fetch or axios
});
