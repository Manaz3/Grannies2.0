const modalRegister = document.querySelector('.js-register-form');
const modalAuth = document.querySelector('.js-auth-form');
const register = document.querySelector('.js-register');
const auth = document.querySelector('.js-auth');
const body = document.querySelector('body');

// открытие модального окна
register.addEventListener('click', (event) => {
  if (event.target === register) {
    modalRegister.style.display = 'block';
  }
});

// закрытие модального окна
body.addEventListener('click', (event) => {
  if (event.target === modalRegister) {
    modalRegister.style.display = 'none';
  }
});

// открытие модального окна
auth.addEventListener('click', (event) => {
  if (event.target === auth) {
    modalAuth.style.display = 'block';
  }
});

// закрытие модального окна
body.addEventListener('click', (event) => {
  if (event.target === modalAuth) {
    modalAuth.style.display = 'none';
  }
});
