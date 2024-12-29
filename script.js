const API_URL = 'https://frontend-backend-connect-i7qw.onrender.com/api/users';

document.getElementById('userForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Add user
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert('User added successfully!');
      fetchUsers(); // Refresh the user list
    } else {
      alert('Failed to add user');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

async function fetchUsers() {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();

    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    users.forEach((user) => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Fetch users on page load
fetchUsers();


