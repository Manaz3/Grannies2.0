const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const register = event.target;
  const { login, password } = register;
  const response = await fetch(`#########`, {
    method: 'POST',
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();
  if (result.success) {
    // редирект на главную
    window.location.href = '/';
  }
});
