function validation() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  emailInput.addEventListener('input', (event) => {
    const email = event.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      emailError.textContent = 'Correo electrónico no válido';
    } else {
      emailError.textContent = '';
    }
  });
}

export default validation;
