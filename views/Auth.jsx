const React = require('react');
const Layout = require('./Layout');

function Auth() {
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

        <button type="submit" className="btn btn-secondary">
          Авторизоваться
        </button>
      </form>

      <script src="/js/register.js" />
    </Layout>
  );
}

module.exports = Auth;
