document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.querySelector('input[name="password"]').value;
    var passwordCheck = document.querySelector('input[name="passwordCheck"]').value;
    var errorDisplay = document.getElementById('errorDisplay');

    if (password !== passwordCheck) {
      errorDisplay.textContent = 'Passwords do not match!';
      errorDisplay.style.display = 'block';
      return;
    }

    errorDisplay.style.display = 'none';
    // Additional validation logic here
    alert('Registration successful!');
    // You can proceed with form submission or other actions here
  });

  document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    // Additional login validation logic here
    alert('Login successful!');
    // You can proceed with form submission or other actions here
  });