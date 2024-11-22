// Get references to form and table
const form = document.getElementById('userForm');
const dataTable = document.getElementById('dataTable').querySelector('tbody');

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const course = document.getElementById('course').value;
  const email = document.getElementById('email').value;

  // Add a new row to the table
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${course}</td>
    <td>${gender}</td>
    <td>${email}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;
  dataTable.appendChild(newRow);

  // Add delete functionality
  newRow.querySelector('.delete-btn').addEventListener('click', () => {
    newRow.remove();
  });

  // Clear form
  form.reset();
});