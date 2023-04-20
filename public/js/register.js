const registerForm = document.getElementById('register-form');
console.log(registerForm);

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const register = event.target;
  const { select, login, grannyLogin, password, password2 } = register;
  console.log(select.value,login.value,grannyLogin.value,password.value, password2.value,);

  const response = await fetch(`/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      select: select.value,
      login: login.value,
      grannyLogin: grannyLogin.value,
      password: password.value,
      password2: password2.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    // редирект на главную
    window.location.href = '/';
  }
})
