function confirmation() {
  document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const confirmationMessage = `Gracias por registrarte, ${name}. Hemos enviado un correo de confirmación a ${email}.`;
    document.getElementById('form-container').innerHTML = `<p>${confirmationMessage}</p>`;
  });
}

export default confirmation;
