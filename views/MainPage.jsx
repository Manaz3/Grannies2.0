const React = require('react');
const Layout = require('./Layout');

function MainPage({ post, user }) {
  const content =
    post.length > 0 ? (
      post.map((entry) => (
        <div className="entry js-entry" key={entry.id} data-id={entry.id}>
          <img className="image" src={entry.image} width={400} height={300} />
          <span className="entry-title">{entry.body}</span>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <button className="js-edit">
                Редактирование
              </button>
            </li>
            <li className="breadcrumb-item">
              <button className="js-delete">
                Удаление
              </button>
            </li>
          </ol>
        </div>
      ))
    ) : (
      <div>Тут могла бы быть ваша реклама, но ее нет 😢</div>
    );

    const modalRegister = (
    <div>
    <form id="register-form" className="register-form js-register-form">
      <div className="modal-content">user 
        <h1>Регистрация</h1>

        <select name="select" className="form-select" aria-label="Default select example">
            <option defaultValue={1} disabled>Кто ты по жизни?</option>
            <option id="1" value="1">Бабулечка</option>
            <option id="2" value="2">Бабулечкин пирожочек</option>
        </select>
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
          <label htmlFor="exampleInputLogin1" className="form-label">
            Логин
          </label>
          <input
            type="login"
            name="grannyLogin"
            className="form-control"
            id="exampleInputLogin2"
            aria-describedby="loginHelp"
            placeholder="Кто твоя бабулечка?"
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
      </div>
    </form>
  </div>
    );

    const modalAuth = (
      <div>
      <form id="login-form" className="auth-form js-auth-form">
        <div className="modal-content">
          <h1>Авторизация</h1>
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
            <label htmlFor="exampleInputPassword3" className="form-label">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword3"
              placeholder="Пароль"
            />
          </div>

          <button type="submit" className="btn btn-secondary">
            Авторизоваться
          </button>
        </div>
      </form>
    </div>
    )

  return (
    <Layout user={user}>
      <main className="js-entries-container">{content}</main>
      <script defer src="/js/register.js" />
      <script defer src="/js/login.js" />
      <script defer src="/js/mainPage.js" />
      {modalRegister}
      {modalAuth}
    </Layout>
  );
}

module.exports = MainPage;
