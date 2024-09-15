form.addEventListener('submit', (event) => {
    let valid = true;
  form.querySelectorAll('.error-message').forEach(msg => msg.remove());
  
  
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Name is required.');
      valid = false;
    }
  
  
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Email is required.');
      valid = false;
    } else if (!validateEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address.');
      valid = false;
    }
  
    if (!valid) {
      event.preventDefault();
    }
  });
  
  function showError(inputElement, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    inputElement.insertAdjacentElement('afterend', error);
  }
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  