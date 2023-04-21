const React = require('react');

function Layout({ children, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <title>Бабушкины записки</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {/* навигация */}
        <header>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link js-main" aria-current="page" href="/">
                На Главную
              </a>
            </li>
            {user ? (
              <>
                <span>Сердечно приветствую тебя {user}</span>
                <li className="nav-item">
                  <button className="nav-link js-register">Выход</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="nav-link js-register">Регистрация</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link js-auth">Авторизация</button>
                </li>
              </>
            )}
          </ul>
        </header>
        <div className="container">{children}</div>
      </body>
      <script src="/js/layout.js" defer></script>
    </html>
  );
}

module.exports = Layout;
