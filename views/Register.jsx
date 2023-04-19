const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <Layout>
      <h1>Регистрация</h1>
      <form id="register-form">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin1" className="form-label">
            Логин
          </label>
          <input
            type="login"
            name="login"
            className="form-control"
            id="exampleInputLogin1"
            aria-describedby="loginHelp"
            placeholder="Логин"
          />
        </div>
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            a
          >
            Кто ты по жизни?
          </a>

          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Бабулечка
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Бабулечкин пирожочек
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Повторить пароль
          </label>
          <input
            type="password"
            name="password2"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Повторить пароль"
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Регистрация
        </button>
      </form>

      <script src="/js/register.js" />
    </Layout>
  );
}

module.exports = Register;
