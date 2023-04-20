const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const register = event.target;
  const { loginGrandson, loginGrany, password, password2 } = register;
  const response = await fetch(`#########`, {
    method: 'POST',
    body: JSON.stringify({
      loginGrany: loginGrany.value,
      loginGrandson: loginGrandson.value,
      password: password.value,
      password2: password2.value,
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
