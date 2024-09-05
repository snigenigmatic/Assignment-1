// main.js

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const feedback = document.getElementById('feedback').value;

  if (name && email && phone && feedback) {
    alert(`Thank you for your feedback, ${name}!`);
    this.reset();
  } else {
    alert('Please fill out all required fields.');
  }
});