const form = document.getElementById('login-form');
console.log(form);
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // eslint-disable-next-line no-shadow
  const form = event.target;
  const { login, password } = form;

  const response = await fetch('/login', {
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
    window.location.href = '/';
  }
});